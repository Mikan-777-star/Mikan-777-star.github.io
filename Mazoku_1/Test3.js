'use strict';
var str = '抜いた<br>';
for(let i = 0; i < 5; i++){
  str += '<br>';
}
str += '<img class = "ALL" src = "https://mikan-777-star.github.io/Mikan_1/jpg/TE_KYO.jpeg"><br>';
str += '<iframe width="560" height="315" src="https://www.youtube.com/embed/3947IsgJ1Zc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>';

var audioElem;
function PlaySound(i) {
    audioElem = new Audio();
    audioElem.src = i;
    audioElem.play();
}

var wait = function(sec) {
    return function() {
      return new Promise(function(resolve/*, reject*/) {
        setTimeout(resolve, sec*1000)
      });
    }
};
  
  
document.querySelector('#start').addEventListener(
  "click",
  function(){
      var sec = window.prompt('ボタンを押したな！さあ秒数を書け！');
      if(sec == '団長'){
        document.getElementById('t1').innerHTML ='ライド：「なんか静かですね。街の中にはギャラルホルンもいないし本部とはえらい違いだ。」<br>オルガ：「ああ。火星の戦力は軒並み向こうに回してんのかもな。」<br>ライド：「まっそんなのもう関係ないですけどね！」<br>オルガ：「上機嫌だな。」<br>ライド：「そりゃそうですよ！みんな助かるし、タカキも頑張ってたし、俺も頑張らないと！」<br>オルガ：「ああ。（そうだ。俺たちが今まで積み上げてきたもんは全部無駄じゃなかった。これからも俺たちが立ち止まらないかぎり道は続く）」<br>チャド：「ぐわっ！」<br>ライド：「団長？何やってんだよ？団長！」<br>オルガ：「ぐっ！うおぉ～～！」<br>暗殺者：「うおっ！あっ！」<br>オルガ：「はぁはぁはぁ・・・。なんだよ、結構当たんじゃねぇか。ふっ・・・。」<br>ライド：「だ・・・団長・・・。あっ・・・あぁ・・・。」<br>オルガ：「なんて声出してやがる・・・ライド。」<br>ライド：「だって・・・だって・・・。俺は鉄華団団長オルガ・イツカだぞ。こんくれぇなんてこたぁねぇ。」<br>ライド：「そんな・・・俺なんかのために・・・。」<br>オルガ：「団員を守んのは俺の仕事だ。」<br>ライド：「でも！」<br>オルガ：「いいから行くぞ。皆が待ってんだ。それに・・・。（ミカ、やっと分かったんだ。俺たちにはたどりつく場所なんていらねぇ。ただ進み続けるだけでいい。止まんねぇかぎり、道は続く）」<br><br>回想<br>ミカ：「謝ったら許さない。」<br>オルガ：「ああ分かってる。」<br><br>オルガ：「俺は止まんねぇからよ、お前らが止まんねぇかぎり、その先に俺はいるぞ！だからよ、止まるんじゃねぇぞ・・・。」<br><br>ミカ：「オルガ？」<br>' + '<img class = "ALL" src = "https://mikan-777-star.github.io/Mikan_1/jpg/TE_KYO.jpeg">';
        return;
      }
        Promise.resolve()
          .then(() => {
              PlaySound('nukimasu.wav');
              document.getElementById('t1').innerHTML = '抜きます<br>'
              return Promise.resolve();
          })
          .then(wait(sec)) // ここで処理を待たせる
          .then(function() {
              PlaySound('nuita.wav');
              document.getElementById('t2').innerHTML = str;
          })
          .catch(function (err) {
            console.error(err);
            self.result_message = error;
          });
  }
);
