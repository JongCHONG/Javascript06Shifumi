var score_ia = 0
var score_player = 0
var image_ia = document.getElementById("ia-signe")
var image_player = document.getElementById("player-signe")
var signe_ia = ""
var restart = false

function onButtonClick(signe_player) {
    var min = 1
    var max = 3
    var random = Math.floor(Math.random() * (max - min + 1) + min)
    document.getElementById("details").innerHTML = ''
    if (restart == true) {
        document.getElementById("historique").innerHTML = ''
        restart = false
        console.log("hello");
    }
    if (signe_player === "pierre") {
        image_player.setAttribute("src", "images/1-pierre.png")
    }
    if (signe_player === "feuille") {
        image_player.setAttribute("src", "images/2-feuille.png")
    }
    if (signe_player === "ciseaux") {
        image_player.setAttribute("src", "images/3-ciseaux.png")
    }
    //Bonus Animation
    var myvar = setInterval(random_ia, 50) //lancer ma fonction tous les 4ms
    setTimeout(function () { //setTimeout lance tout le programme après clearinterval
        clearInterval(myvar)
        //Comparaison
        if ((signe_player === "pierre" && signe_ia === "pierre") || 
        (signe_player === "feuille" && signe_ia === "feuille") ||
        (signe_player === "ciseaux" && signe_ia === "ciseaux")) {
            var details = document.createTextNode("Egalité")
        } else if ((signe_player === "feuille" && signe_ia === "pierre") ||
            (signe_player === "ciseaux" && signe_ia === "feuille") ||
            (signe_player === "pierre" && signe_ia === "ciseaux")) {
                score_player++
                var details = document.createTextNode("Avenger wins")
            } else {
                score_ia++
                var details = document.createTextNode("Ultron wins")
            }
        var round = document.createElement("p")
        round.appendChild(details)
        var element = document.getElementById("details")
        element.appendChild(round)
        //affichage round
        var resultat = document.createElement("h2")
        var text = document.createTextNode(`${score_ia} Ultron - Avenger ${score_player}`)
        resultat.appendChild(text)
        var element = document.getElementById("historique")
        element.appendChild(resultat)
        document.getElementById("score-ia").innerHTML = "- " + score_ia
        document.getElementById("score-player").innerHTML = "- " + score_player
        //Bonus Score
        var resultatfinal = document.createElement("p")
        var final 
        if (score_ia === 3) {
            restart = true
            document.getElementById("details").innerHTML = `${score_ia} - ${score_player}`
            final = document.createTextNode(`Ultron gagne la partie`)
            score_ia = 0
            score_player = 0
            resultatfinal.appendChild(final)
            var element = document.getElementById("details")
            element.appendChild(resultatfinal)
        } else if (score_player === 3) {
            restart = true
            document.getElementById("details").innerHTML = `${score_ia} - ${score_player}`
            final = document.createTextNode(`Avengers gagne la partie`)
            score_player = 0
            score_ia = 0
            resultatfinal.appendChild(final)
            var element = document.getElementById("details")
            element.appendChild(resultatfinal)
        }
    }, 1000) //setTimeout
}
function random_ia () {
    var min = 1
    var max = 3
    var random = Math.floor(Math.random() * (max - min + 1) + min)
    if (random === 1) {
        image_ia.setAttribute("src", "images/1-pierre-IA.png")
        signe_ia = "pierre"
    }
    if (random === 2) {
        image_ia.setAttribute("src", "images/2-feuille-IA.png")
        signe_ia = "feuille"
    }
    if (random === 3) {
        image_ia.setAttribute("src", "images/3-ciseaux-IA.png")
        signe_ia ="ciseaux"
    }
}
// pour effacer le contenu d'un html
function clearResult(){
    document.getElementById("details").innerHTML = ''
    document.getElementById("historique").innerHTML = ''
    score_player = 0
    score_ia = 0
    document.getElementById("score-ia").innerHTML = ""
    document.getElementById("score-player").innerHTML = ""
    image_ia.setAttribute("src", "")
    image_player.setAttribute("src", "")
}