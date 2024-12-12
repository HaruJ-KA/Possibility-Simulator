// COIN FLIP SIMULATOR
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("btn2").addEventListener("click", btn2Clicked);
document.getElementById("btn3").addEventListener("click", btn3Clicked);

///VARIABLES
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("headsOut");
let tailsEl = document.getElementById("tailsOut");

//Count VARIABLES
let numHeads = 0;
let numTails = 0;

function btnClicked() {
  //Random Number
  let randNum = Math.random();
  console.log(randNum);

  //Simulate Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src ='img/heads.png' >";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src ='img/tails.png' >";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

let outputEl2 = document.getElementById("output2");
let oneOut = document.getElementById("oneOut");
let twoOut = document.getElementById("twoOut");
let threeOut = document.getElementById("threeOut");
let fourOut = document.getElementById("fourOut");
let fiveOut = document.getElementById("fiveOut");
let sixOut = document.getElementById("sixOut");

let numones = 0;
let numtwos = 0;
let numthrees = 0;
let numfours = 0;
let numfives = 0;
let numsix = 0;

function btn2Clicked() {
  //Random Nu,ber
  let randNum2 = Math.round(Math.random() * 5) + 1;

  //Die Roll
  if (randNum2 == 1) {
    outputEl2.innerHTML = "<img src ='img/1.png' >";
    numones++;
    oneOut.innerHTML = numones;
  } else if (randNum2 == 2) {
    outputEl2.innerHTML = "<img src ='img/2.png' >";
    numtwos++;
    twoOut.innerHTML = numtwos;
  } else if (randNum2 == 3) {
    outputEl2.innerHTML = "<img src ='img/3.png' >";
    numthrees++;
    threeOut.innerHTML = numthrees;
  } else if (randNum2 == 4) {
    outputEl2.innerHTML = "<img src ='img/4.png' >";
    numfours++;
    fourOut.innerHTML = numfours;
  } else if (randNum2 == 5) {
    outputEl2.innerHTML = "<img src ='img/5.png' >";
    numfives++;
    fiveOut.innerHTML = numfives;
  } else {
    outputEl2.innerHTML = "<img src ='img/6.png' >";
    numsix++;
    sixOut.innerHTML = numsix;
  }
}

let outputEl3 = document.getElementById("output3");
let outputEl4 = document.getElementById("output4");

let out2 = document.getElementById("TwoOut");
let out3 = document.getElementById("ThreeOut");
let out4 = document.getElementById("FourOut");
let out5 = document.getElementById("FiveOut");
let out6 = document.getElementById("SixOut");
let out7 = document.getElementById("SevenOut");
let out8 = document.getElementById("EightOut");
let out9 = document.getElementById("NineOut");
let out10 = document.getElementById("TenOut");
let out11 = document.getElementById("ElevenOut");
let out12 = document.getElementById("TwelveOut");

let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;
let num7 = 0;
let num8 = 0;
let num9 = 0;
let num10 = 0;
let num11 = 0;
let num12 = 0;

let die0 = 0;
let die1 = "<img src ='img/1.png' >";
let die2 = "<img src ='img/2.png' >";
let die3 = "<img src ='img/3.png' >";
let die4 = "<img src ='img/4.png' >";
let die5 = "<img src ='img/5.png' >";
let die6 = "<img src ='img/6.png' >";

let dieList = [kys, die1, die2, die3, die4, die5, die6];
let numList = [
  die0,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8,
  num9,
  num10,
  num11,
  num12,
];
let outList = [
  die0,
  out2,
  out3,
  out4,
  out5,
  out6,
  out7,
  out8,
  out9,
  out10,
  out11,
  out12,
];

function btn3Clicked() {
  let randnum1 = Math.round(Math.random() * 5) + 1;
  let randnum2 = Math.round(Math.random() * 5) + 1;

  outputEl3.innerHTML = dieList[randnum1];
  outputEl4.innerHTML = dieList[randnum2];

  numList[randnum1 + randnum2]++;

  outList[randnum1 + randnum2].innerHTML = numList[randnum1 + randnum2];

  // if (randnum1 + randnum2 == 2) {

  //   out2.innerHTML = num2;
  // } else if (randnum1 + randnum2 == 3) {
  //   //THREE
  //   num3++;
  //   out3.innerHTML = num3;
  // } else if (randnum1 + randnum2 == 4) {
  //   //FOUR
  //   num4++;
  //   out4.innerHTML = num4;
  // } else if (randnum1 + randnum2 == 5) {
  //   //FIVE
  //   num5++;
  //   out5.innerHTML = num5;
  // } else if (randnum1 + randnum2 == 6) {
  //   //SIX
  //   num6++;
  //   out6.innerHTML = num6;
  // } else if (randnum1 + randnum2 == 7) {
  //   //SEVEN
  //   num7++;
  //   out7.innerHTML = num7;
  // }
}
