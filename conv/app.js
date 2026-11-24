const { FFmpeg } = FFmpegWASM;
const { toBlobURL } = FFmpegUtil;

const ffmpeg = new FFmpeg();
const uploader = document.getElementById('uploader');
const convertBtn = document.getElementById('convertBtn');
const statusEl = document.getElementById('status');
const logEl = document.getElementById('log');

function appendLog(msg) {
  logEl.textContent += msg + '\n';
  logEl.scrollTop = logEl.scrollHeight;
}

// 1. Wasmコアの初期化
async function init() {
  ffmpeg.on('log', ({ message }) => appendLog(message));

  try {
    const baseURL = new URL('./assets', window.location.href).href;
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    });
    statusEl.textContent = 'Ready.';
    if (uploader.files.length > 0) convertBtn.disabled = false;
  } catch (err) {
    statusEl.textContent = 'Failed to load Wasm.';
    appendLog(err.toString());
  }
}

uploader.addEventListener('change', () => {
  convertBtn.disabled = uploader.files.length === 0;
});

// 2. WORKERFSを使った無劣化Remux処理
convertBtn.addEventListener('click', async () => {
  const file = uploader.files[0];
  if (!file) return;

  convertBtn.disabled = true;
  uploader.disabled = true;
  logEl.textContent = '';
  statusEl.textContent = 'Mounting & Remuxing...';

  const mountDir = '/input_mount';
  const inputPath = `${mountDir}/${file.name}`;
  const outputName = file.name.replace(/\.[^/.]+$/, '') + '.mp4';

  try {
    // 入力ディレクトリを作成し、ブラウザのFileをメモリコピーなしでマウント
    await ffmpeg.createDir(mountDir);
    await ffmpeg.mount('WORKERFS', { files: [file] }, mountDir);

    const start = performance.now();
    // 無劣化コンテナ詰め替え (-c copy) + Web再生最適化 (+faststart)
    const exitCode = await ffmpeg.exec([
      '-fflags', '+genpts',
      '-i', inputPath,
      '-c', 'copy',
      outputName
    ]);
    

    if (exitCode !== 0) {
      throw new Error(`FFmpeg exited with code ${exitCode}. Audio codec might be incompatible with MP4.`);
    }

    const elapsed = ((performance.now() - start) / 1000).toFixed(2);
    statusEl.textContent = `Done in ${elapsed}s. Preparing download...`;

    // 出力ファイルの読み出しとダウンロード発火
    const data = await ffmpeg.readFile(outputName);
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = outputName;
    a.click();

    // メモリ解放とクリーンアップ
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    await ffmpeg.deleteFile(outputName);
    statusEl.textContent = `Completed (${elapsed}s).`;
  } catch (err) {
    statusEl.textContent = 'Error occurred.';
    appendLog(`[ERROR] ${err.message}`);
  } finally {
    // マウント解除（失敗しても確実に後始末する）
    try {
      await ffmpeg.unmount(mountDir);
      await ffmpeg.deleteDir(mountDir);
    } catch (_) {}
    convertBtn.disabled = false;
    uploader.disabled = false;
  }
});

init();
