var player1name = localStorage.getItem("player1Name")
var player1Score = 0
var player2name = localStorage.getItem("player2Name")
var player2Score = 0
var questionTurn = "Player1"
var answerTurn = "Player2"

document.getElementById("player1Name").innerHTML=player1name+":"
document.getElementById("player1score").innerHTML=player1Score
document.getElementById("player2Name").innerHTML=player2name+":"
document.getElementById("player2score").innerHTML=player2Score

document.getElementById("playerQuestion").innerHTML="Question Turn-"+player1name
document.getElementById("playerAnswer").innerHTML="Answer Turn-"+player2name

function send() {
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    actualAnswer = number1*number2
    question = "<h4 id=''> q."+ number1+"*"+number2 +"</h4>"
    inputBox = "<br> Answer: <input id='input' type='text'>"
    button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = question + inputBox + button
    document.getElementById("output").innerHTML = row
    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""
}
function check() {
    answer = document.getElementById("input").value
    if (actualAnswer == answer) {
        if (answerTurn == "Player1") {
            player1Score=player1Score+1
            document.getElementById("player1score").innerHTML=player1Score
        }
        else {
            player2Score=player2Score+1
            document.getElementById("player2score").innerHTML=player2Score
        }
    }
    if (questionTurn=="Player1"){
        questionTurn = "Player2"
        document.getElementById("playerQuestion").innerHTML="Question Turn-"+player2name
    }
    else {
        questionTurn = "Player1"
        document.getElementById("playerQuestion").innerHTML="Question Turn-"+player1name
    }
    if (answerTurn=="Player1"){
        answerTurn = "Player2"
        document.getElementById("playerAnswer").innerHTML="Answer Turn-"+player2name
    }
    else {
        answerTurn = "Player1"
        document.getElementById("playerAnswer").innerHTML="Answer Turn-"+player1name
    }
    document.getElementById("output").innerHTML=""
}