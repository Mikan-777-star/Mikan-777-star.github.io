var page = 1;
function next(){
    var s = '<script src="Test1.js"></script><main>'
    switch(page){
        case 1: s += '<h1>桃とシャミ子の出会い</h1><img src="momo1.png" class="img" ><br><h4>桃とシャミ子は最初はすれ違っていたんだよ！<br>かわいいね！</h4><img src="momo13.png" class="img"><br><h4>大天使桃ちゃん</h4><img src="momo2.png" class="img"><br><h4>そこから片手ダンプして…（というかここのシャミ子王子様に助けられたヒロインだよね）</h4><img src="momo3.png" class="img"><br><h4>餌付けその一　（どっちも）かわいいね！</h4>'
        break;
        case 2: s += '<h1>桃さんとシャミ子の初期のかかわり！</h1><img src="momo4.png" class="img"><br><h4>初めての<s>デート</s>決闘！　</h4><img src="momo5.png" class="img"><br><h4>シャミ子、桃さんに置いて行かれる</h4><img src="momo6.png" class="img"><br><h4>シャミ子と桃さんの初めての<s>間接</s>キス</h4><img src="momo7.png" class="img"><br><h4>シャミ子「貴様といると調子が狂うんだ～！」</h4>        '
        break
        case 3: s += '<h1>シャミ桃魔力修行！</h1><h4>    <img src="momo8.png" class="img"><br>    よくシャミ桃の代名詞になってる画像だね！<br><br>    <img src="momo9.png" class="img"><br>    桃「今日は何か出すまで帰さない」<br><br>    <img src="momo10.png" class="img"><br>    フレッシュピーチハートシャワー！<br></h4>'
        break
        case 4: s += '<h1> シャミ子のバイト中にもかかわらず接近しようとするもんも</h1><img src="momo11.png" class="img"><br><h4>桃さん、 あーんはまだ早いんじゃないかな？</h4><img src="momo12.png" class="img"><br><h4>ちょっと不穏な発言が…これ日常系だよね？</h4><img src="momo14.png" class="img"><br><h4>ここかわいい（私情）</h4>'
        break
        case 5: s += '<h1>お金返して戦おうとするシャミ子（この貸し借りはいったいどこに）</h1><img src="momo15.png" class="img"><h4>認めませーん（かわいい）</h4><img src="momo16.png" class="img"><h4>一面ウィンナー弁当、おいしいのかな？</h4><img src="momo17.png" class="img"><h4>おや？なんか不穏な展開が見えるような…</h4><img src="momo18.png" class="img"><h4>シャミ子「親友の桃ちゃんです」</h4>'
        break
        case 6: s += '<h1>桃の頼みで<s>デート</s>付き添い</h1><img src="momo19.png" class="img"><h4>なぜ桃ちゃんは気づきがいいのに女子力ないんだ</h4><img src="momo20.png" class="img"><h4>血糖値高めにして待ってるがいいですよ！</h4><img src="momo21.png" class="img"><h4>落とさないでねー絶対落とさないでねー</h4>'
        break
        case 7: s += '<h1>不穏回</h1><img src="momo22.png" class="img"><h4>シャミ子様！血液10ガロンお待たせしました！</h4><img src="momo23.png" class="img"><h4>こももかわいいね！（めっちゃ不穏）</h4><img src="momo24.png" class="img"><h4>まぞくの三大伏線</h4><img src="momo25.png" class="img"><h4>この時のこももかわいい</h4>';
        break;
        case 8: s += '<h1>不穏回その２</h1><img src="momo26.png" class="img"><h4>ごろごろにゃーちゃん誕生の瞬間である</h4><img src="momo27.png" class="img"><h4>魔力修行の時のやつ　かわいいね</h4><img src="momo28.png" class="img"><h4>家に誘うシャミ子</h4><img src="momo29.png" class="img"><h4>また嫌な夢を見ないでほしい（切実）</h4><img src="momo30.png" class="img"><h4>シャミ子が悪いんだよ</h4>'
        break;
        case 9: s += '<h1>いつものが戻ってきたね</h1><img src="momo31.png" class="img"><h4>通い妻ぞく</h4><img src="momo32.png" class="img"><h4>鉱山車両のタイヤ（ブリヂストンも認めた）</h4><img src="momo33.png" class="img"><h4>めっちゃキラキラやな</h4><img src="momo34.png" class="img"><h4>ここ好き</h4>'
        break;
        case 10:s += '<h1>ママ回（暴走寸前）</h1><img src="momo35.png" class="img"><h4>修羅場不可避</h4><img src="momo36.png" class="img"><h4>ほんとに何があった</h4><img src="momo37.png" class="img"><h4>はじけた！</h4><img src="momo38.png" class="img"><h4>ごはん兵器製造工場</h4>'
        break;
        case 11:s += '<h1>修羅場</h1><img src="momo39.png" class="img"><h4>あそーれ！キース！キース！</h4><img src="momo40.png" class="img"><h4>ニコニコ水族館（🐡だけ）</h4><img src="momo41.png" class="img"><h4>はらぐろもんも</h4><img src="momo42.png" class="img"><h4>修羅場不可避</h4>'
        break;
        case 12:s += '<h1>桃の家回</h1><img src="momo43.png" class="img"><h4>もんもぉ…</h4><img src="momo44.png" class="img"><h4>シャミ子が悪いんだよ（2度目）</h4><img src="momo45.png" class="img"><h4>ジャンクなお昼を過ごしているな！</h4><img src="momo46.png" class="img"><h4>両親に結婚することを伝えにきたシャミ桃（違う）</h4>'
        break;
        case 13:s += '<h1>シリアス回</h1><img src="momo47.png" class="img"><h4>アンジャッシュ状態ってやつ</h4><img src="momo48.png" class="img"><h4>シャミ子の宿敵</h4><img src="momo49.png" class="img"><h4>シャミ子「私は桃の宿敵です」</h4><img src="momo50.png" class="img"><h4>シャミ子「私の眷属になってください！」</h4>'
        break;
        case 14:s += '<h1>シリアス回</h1><img src="momo51.png" class="img"><h4>私がこれから何をしても、今まで何をしていても、変わらずにいてくれる？</h4><img src="momo52.png" class="img"><h4>二人の象徴</h4><img src="momo53.png" class="img"><h4>まだちぎれないみたいだね</h4><img src="momo54.png" class="img"><h4>浮かれフルーツポンチ</h4>'
        break;
        case 15:s += '<h1>ここから直撮りタイム</h1><img src="momo1.jpg" class="img"><h4>いらいらもんもんも</h4><img src="momo2.jpg" class="img"><h4>ミカンママテロ</h4><img src="momo3.jpg" class="img"><h4>大天使桃ちゃん</h4><img src="momo4.jpg" class="img"><h4>魔力は物理で超えられる…</h4>'
        break;
        case 16:s += '<h1>喫茶あすら+温泉回</h1><img src="momo5.jpg" class="img"><h4>洗脳シャミ子</h4><img src="momo6.jpg" class="img"><h4>ひょこっと店長</h4><img src="momo7.jpg" class="img"><h4>上腕二頭筋を美しく鍛えよう！</h4>'
        break;
        case 17:s += '<h1>もんも闇落ち</h1><img src="momo8.jpg" class="img"><h4>猫とトーク！</h4><img src="momo9.jpg" class="img"><h4>ここ好き…二期ででたら死ぬ</h4><img src="momo9.jfif" class="img"><h4>桃の初めての笑顔</h4><img src="momo10.jpg" class="img"><h4>シャミ子、ようやくちぎれたみたいだね！</h4>'
        break;
        case 18:s += '<h1>4巻開始</h1><img src="momo11.jpg" class="img"><h4>桃さんご先祖をおいていかないであげて…</h4><img src="momo12.jpg" class="img"><h4>シャミ子エッチなことするの？</h4><img src="momo13.jpg" class="img"><h4>載せ忘れた、桃のおにぎりちゃん</h4><img src="momo14.jpg" class="img"><h4>座りなおして勉強しよう！</h4>'
        break;
        case 19:s += '<h1>もんも闇落ちその2</h1><img src="momo15.jpg" class="img"><h4>桃さんの闇落ち回</h4><img src="momo16.jpg" class="img"><h4>あーん</h4><img src="momo17.jpg" class="img"><h4>シャミ子の性癖？</h4><img src="momo18.jpg" class="img"><h4>普段から笑えるようになったんだね…良かった</h4>'
        break;
        case 20:s += '<h1>もんもさん</h1><img src="momo20.jpg" class="img"><h4>仮病もんも</h4><img src="momo21.jpg" class="img"><h4>ハッピーバースデーマイシャドウミストレス</h4><img src="momo22.jpg" class="img"><h4>闇落ちしそうなもんも</h4><img src="momo23.jpg" class="img"><h4>ご先祖消し炭になる</h4>'
        break;
        case 21:s += '<h1>ココスキ</h1><img src="momo24.jpg" class="img"><h4>桃さんシャミ子の地雷踏む</h4><img src="momo25.jpg" class="img"><h4>桃さんの告白</h4><img src="momo26.jpg" class="img"><h4>宿敵との約束</h4><img src="momo27.jpg" class="img"><h4>桃さんやっぱシャミ子のこと知りたいんだね<br>    (二人ともかわいいね)</h4>';
        break
        case 22:s += '<h1>最近の桃さんネタ</h1><img src="momo55.png" class="img"><h4>桃さん宇宙のめくれを見る</h4><img src="momo56.png" class="img"><h4>26980の女</h4><img src="momo57.png" class="img"><h4>???「oya?」</h4><img src="momo58.png" class="img"><h4>    新婚の会話かな？</h4>'
        break
        case 23:s += '<h1>新しいフォーム回</h1><img src="momo59.png" class="img"><h4>クソダサフォーム</h4><img src="momo60.png" class="img"><h4>クソダサ批判回</h4><img src="momo61.png" class="img"><h4>すーぱーえちえちフォーム</h4><img src="momo62.png" class="img"><h4>    この後シャミ子はしばかれたようだ</h4>'
        break
        case 24:s += '<h1>暴走まちカド</h1><img src="momo63.png" class="img"><h4>フロイト＝我々</h4><img src="momo64.png" class="img"><h4>これがシャミ子なら桃は暴走する</h4><img src="momo65.png" class="img"><h4>すーぱーえちえちフォーム</h4><img src="momo65.jfif" class="img"><h4>    まぞくは20分かけて歯を磨いた</h4>'
        break
        case 25:s += '<h1>暴走まちカドその2</h1><img src="momo66.png" class="img"><h4>もてもてもんも</h4><img src="momo67.png" class="img"><h4>ももがシャミ子を襲う？！</h4><img src="momo68.png" class="img"><h4>桃、切れた！</h4><img src="momo69.png" class="img"><h4>    シャミ子、切れた！</h4>'
        break
        case 26:s += '<h1>桃さんはガチ</h1><img src="momo70.png" class="img"><h4>桃！やみおち！</h4><img src="momo71.png" class="img"><h4>正論</h4>'
        break;
        case 27:s += '<img src="momo72.png" class="img"><h4></h4><img src="momo73.png" class="img"><h4>    桃さんはシャミ子に巡り会えて良かった…<br>    これからもシャミ子と桃、幸せになってね</h4>'
        break;
        case 28:s +=`
        <h4>
        あとがき<br>
        このサイトを作らせてもらった大彗星みかんです<br>
        桃誕までに間に合わせようと頑張ったためつたないサイトですが<br>
        ここまで読んでいただきありがとうございます<br>
        桃さんは壮絶な過去を歩んできてこそこれだけ祝われているんだと思います<br>
        これからもシャミ子と桃、これからもしあわせでいることを願います<br>
        あと、<a href = "https://www.tbs.co.jp/anime/machikado/">桃生誕祭の公式の方が数千倍いいから</a>見てね</h4>
        `
        default:page = 0;
    }
    if(s.indexOf('img') > -1){
        s += '<br><a href="javascript:void(0)" onclick="next()">next</a>';
    }
    s += '</main>'
    document.getElementById('body').innerHTML = s;
    page++;
}