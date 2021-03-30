'use strict'
var pages = 0;
var main = document.getElementById("main");
main.innerHTML = `<h1 class = "header">桃さんの笑顔ランキング！</h1>
        
<h3><img src="https://lohas.nicoseiga.jp/thumb/9613169m" class="monmo">もんもんもんもんもんも<img src="https://lohas.nicoseiga.jp/thumb/9613169m" class="monmo" id="monmo1"></h3>

<p>
    大彗星が独断と偏見でかいたランキングです<br>
    じゃあ書いていこう
</p>
<a href="javascript:void(0)" onclick="next()">next</a>`;
var next = () =>{
    var kansou;
    var javanext;
    switch (pages) {
        case 0: kansou = '第5位は6巻からこの浮かれ桃を選びました<br>このシャミ子のことになると浮かれるもんも好きなんだ<br>';
                javanext ='<a href="javascript:void(0)" onclick="next()">next</a>'
            break;
        case 1: kansou = '第4位は同じく6巻からこの何かを期待している桃を選びました<br>この後桃は何を言われたかったのでしょう';
                javanext ='<a href="javascript:void(0)" onclick="next()">next</a>';
        break;
        case 2: kansou = '第3位は5巻からこの告白桃を選びました<br>もうこれは完全にシャミ子のことを(ry)';
                javanext ='<a href="javascript:void(0)" onclick="next()">next</a>';
            break;
        case 3: kansou = '第2位は4巻からこのシーンを選びました<br>このシーンは桃が自然に笑えるようになった証拠みたいなシーンなので私個人としてはとても好き';
                javanext ='<a href="javascript:void(0)" onclick="next()">next</a>';
        break;
        case 4: kansou = '第1位はやはり3巻のこのシーンです<br>初めてシャミ子の前で桃が笑ってくれて、シャミ子の原動力となっている笑顔そのものですから、1位にしないわけはないでしょう';
                javanext ='<a href="javascript:void(0)" onclick="next()">next</a>';
        break;
        default:{
            main.innerHTML="<h4>最後まで読んでくれてありがとうございます！<br>桃の笑顔はこれからもシャミ子や周りの人たちの行動によって生まれていくと思います<br>ほんとに桃さん、いい人たちに囲まれてよかったね。</h4>"
            return;
        }
            
        break;
    };
    main.innerHTML = `
    <h1 class="header">第${5-pages}位</h1>
        <img class="img" src="${5-pages}.jpg">
        <h4>
            ${kansou}
        </h4>${javanext}`;
    pages++;
}