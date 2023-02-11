// <!-- onclick option no1 :: directly set on the HTML element-->
// {/* <button onclick="document.body.style.background = 'green'">Make Green</button> */}
// //////////////////////////////////// ___[we will use this]
// IMPORTANT
// <!-- onclick option no2 -->
// {/* <button onclick="makeRed()">Make Red</button> */}
function makeRed() {
    document.body.style.backgroundColor = 'red'
}
// ////////////////////////////////////////////////////////////////// 

// <!--onclick option no3 -->
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlue)
makeBlueButton.onclick = makeBlue

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
// //////////////////////////////////// ___[we will use this sometime]
// <!-- onclick option no3 another -->
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// <!-- onclick option no4 -->
const pinkButton = document.getElementById('make-pink');
// console.log(pinkButton)
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink'
}
// <!-- onclick option no4 another -->
const greenButton = document.getElementById('make-yellow');
greenButton.addEventListener('click', function makeGree() {
    document.body.style.backgroundColor = 'yellow'
})
// <!-- onclick option no4 final -->
// //////////////////////////////////// ___[we will use this]
// IMPORTANT
const orangeButton = document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange'
})
// ////////////////////////////////////////////////////////////////// 