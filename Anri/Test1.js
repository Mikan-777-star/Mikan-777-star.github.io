'use strict';
var main = document.getElementById("main");
var page = 0;
main.innerHTML = '<h1 id = "header">杏里ちゃん誕生祭</h1><p>まあ、というわけで</p><h1>杏里ちゃん誕生日おめでとうです！</h1>    <img src="chara_list05.png" class="headimg"><br><h1>というわけで　杏里ちゃんプロフィール</h1><img src="Prof.jpg" class="profimg"><img src="Anri.jpg" class="profimg">';
var str = null;
var mainfunc = () => {
    //main.innerHTML = "みかんママぁ"; 
    str = `<img src="anri${++page}.jpeg"><br><h4>${description(page)}</h4>`;
    main.innerHTML = str;
    if(page >= 10){
        main.innerHTML = "あとがき<br>最後まで読んでいただきありがとうございます！<br>杏里ちゃんは最近はお肉ばかりいているイメージがありますが、4巻のラストの行動などを見るにとても優しい心を持ってると思います<br>今のシャミ子たちがいるのは杏里ちゃんのおかげだと言っても過言ではありません<br>最近は出番が少ないですが、杏里ちゃんにこれからもあのまちかどを見守っていてほしいです<br>"
        document.getElementById('next').innerHTML = " ";
    }
}
var description = (int_s) => {
    switch (int_s) {
        case 1:return 'マシマシにしといた杏里ちゃん<br>杏里ちゃんの情報がどっから来るのか気になる'
        case 2:return 'ごせんぞう誕生の瞬間である<br>杏里ちゃんあだ名の付け方がうまいな…　'
        case 3:return '情報屋杏里ちゃん<br>さたんや…'
        case 4:return '気にすんなシャミ！<br>杏里ちゃんはあだ名を発展させないで！'
        case 5:return 'ごめんシャミ子　なんかツノ生えてる？<br>流石にスルー力が半端じゃねえ！'
        case 6:return 'この頃の杏里ちゃんはお肉に狂ってる感なかったんだけどなぁ…'
        case 7:return 'すべてのことは肉が解決するのだ…'
        case 8:return '杏里ちゃんもやっぱり胸があｒ（殴'
        case 9:return 'これからはシャミ子のことを本気で考えるよ！<br>（肉を焼け）'

        default:return null;
    }
}