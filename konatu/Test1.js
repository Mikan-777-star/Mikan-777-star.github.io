'use strict';
var str = `{
    "goroku":["・たすけてくれ〜",
        "・カスがよ！",
        "・ほんとに？",
        "・ブロックした",
        "・小説書きます",
        "・なるほどね",
        "・○○する言う奴大抵○○しない",
        "・オナ禁しろ",
        "・クソがよ〜",
        "・真面目にやります",
        "・人の心がないだろ",
        "・〇〇は世界で2番目に嫌いです 1番は口内炎",
        "・ざまあああああああ",
        "・うるせー！俺には選挙権があるんだぞ",
        "・〜〜とは言ってないじゃないですか",
        "・ニコラきゅんのおちんぽぺろぺろしたい",
        "・(中指を立てる)",
        "・そう捉える方が悪い",
        "・禁止カードだろ",
        "・下ネタやめてください！",
        "・幼女は無限の可能性を秘めている",
        "・徐々に記憶を失っていく病気にかかったヒロイン",
        "・やっぱ〇〇なんだよな〜",
        "・物は言いよう",
        "・なんですかこれは",
        "・はて、なんのことだか",
        "・ちょっと何言ってるかわからないですね",
        "・はーむかつくなぁ",
        "・傷つきました",
        "・本気出します",
        "・はて、なんのことだか",
        "・コケシです",
        "・中出し"]
}`
const goroku = JSON.parse(str).goroku;
function random_goroku(){
    console.log(goroku)
    return goroku[Math.floor(Math.random() * goroku.length)];
}

document.getElementById('ans').innerHTML = random_goroku();