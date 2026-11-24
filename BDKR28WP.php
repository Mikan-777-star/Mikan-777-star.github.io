<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BDKR28WP WebShell v4.2 - Authenticated</title>
    <style>
        body { background-color: #0d1117; color: #58a6ff; font-family: monospace; padding: 2rem; }
        .box { border: 1px solid #30363d; padding: 1.5rem; border-radius: 6px; max-width: 650px; margin: 0 auto; background: #161b22; }
        h1 { color: #f85149; font-size: 1.2rem; }
        .status { color: #7ee787; }
        input[type="text"], input[type="password"] { background: #0d1117; border: 1px solid #30363d; color: #c9d1d9; padding: 5px; width: 80%; }
        button { background: #238636; color: white; border: none; padding: 6px 12px; cursor: pointer; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="box">
        <h1>[!] BDKR28WP PRIVILEGED BACKDOOR CONSOLE</h1>
        <p class="status">[+] System: Linux 6.1.0-generic #1 SMP PREEMPT_DYNAMIC</p>
        <p class="status">[+] PHP Version: 8.5.9-dev (Zend Engine v4.5.9)</p>
        <hr style="border: 0; border-top: 1px solid #30363d;">
        <p style="color: #e3b341;">Nice try, script kiddie. But this is a pure static site on Nginx.</p>
        <p style="color: #8b949e;">Your payload was completely harmless. Have a nice cup of coffee and read a book instead.</p>
        <div style="margin-top: 1.5rem;">
            <label>Command Execution:</label><br>
            <input type="text" value="rm -rf /*" disabled style="margin-top: 5px;"><br><br>
            <button onclick="alert('405 Method Not Allowed: Static files cannot execute commands!')">Execute (Fake)</button>
        </div>
    </div>
</body>
</html>
