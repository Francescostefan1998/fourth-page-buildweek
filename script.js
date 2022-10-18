


const changeColor1 = function (event) {
    document.getElementById("one").style.color = "#00FFFF";
    changequestion()
}
const changeColor2 = function (event) {
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("one").style.color = "#00FFFF";
    changequestion()
}
const changeColor3 = function (event) {
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    changequestion()
}
const changeColor4 = function (event) {
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    changequestion()
}
const changeColor5 = function (event) {
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    changequestion()
}
const changeColor6 = function (event) {
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    document.getElementById("six").style.color = "#00FFFF";
    changequestion()
}
const changeColor7 = function (event) {
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    document.getElementById("six").style.color = "#00FFFF";
    document.getElementById("seven").style.color = "#00FFFF";
    changequestion()
}
const changeColor8 = function (event) {
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    document.getElementById("six").style.color = "#00FFFF";
    document.getElementById("seven").style.color = "#00FFFF";
    document.getElementById("eight").style.color = "#00FFFF";
    changequestion()
}
const changeColor9 = function (event) {
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    document.getElementById("six").style.color = "#00FFFF";
    document.getElementById("seven").style.color = "#00FFFF";
    document.getElementById("eight").style.color = "#00FFFF";
    document.getElementById("nine").style.color = "#00FFFF";
    changequestion()
}
const changeColor10 = function (event) {
    document.getElementById("one").style.color = "#00FFFF";
    document.getElementById("two").style.color = "#00FFFF";
    document.getElementById("three").style.color = "#00FFFF";
    document.getElementById("four").style.color = "#00FFFF";
    document.getElementById("five").style.color = "#00FFFF";
    document.getElementById("six").style.color = "#00FFFF";
    document.getElementById("seven").style.color = "#00FFFF";
    document.getElementById("eight").style.color = "#00FFFF";
    document.getElementById("nine").style.color = "#00FFFF";
    document.getElementById("ten").style.color = "#00FFFF";
    changequestion()
}


const questions = [" From 0 to 10, how likely would you recomand EPICODE to a friend or a collegue", "How do you rate the teacher?", "How do you rate the teacher assistant?"]

const changequestion = function () {
    let random = Math.floor(Math.random() * (questions.length - 1)); 
    console.log(random);
    let extractedQuestion = questions[random];
    console.log(extractedQuestion);
    document.getElementById("feedbackQuestion").innerText = extractedQuestion;
  };

window.onload = function () {
    firestar()
}