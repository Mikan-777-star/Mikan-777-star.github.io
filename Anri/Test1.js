'use strict';
var main = document.getElementById("main");
var page = 0;
main.innerHTML = '            <h1 id = "header">杏里ちゃん誕生祭</h1><p>まあ、というわけで</p><h1>杏里ちゃん誕生日おめでとうです！</h1>    <img src="chara_list05.png" class="headimg"><br><h1>というわけで　杏里ちゃんプロフィール</h1><img src="Prof.jpg" class="profimg"><img src="Anri.jpg" class="profimg">';
var mainfunc = () => {
    //main.innerHTML = "みかんママぁ"; 
    var str = `<img src="anri${++page}.jpeg"><br><h4>${description(page)}</h4>`;
    main.innerHTML = str;
}
var description = (int_s) => {
    switch (int_s) {
        case 1:return 'マシマシにしといた杏里ちゃん　<br> 杏里ちゃんの情報がどっから来るのか気になる'
        case 2:return 'ごせんぞう誕生の瞬間である　<br>　杏里ちゃんあだ名の付け方がうまいな…　'
        case 3:return '情報屋杏里ちゃん　<br>　さたんや…'
        case 4:
        default:
            break;
    }
}