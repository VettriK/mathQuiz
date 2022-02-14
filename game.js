var player1Name = ""
var player2Name = ""

function login(){
    player1Name = document.getElementById("player1").value
    player2Name = document.getElementById("player2").value
    localStorage.setItem("player1Name", player1Name)
    localStorage.setItem("player2Name", player2Name)
    window.location="gamePage.html"
}