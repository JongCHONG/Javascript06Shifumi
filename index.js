var score_ia = 0
var score_player = 0

function onButtonClick(signe_player) {
    var min = 1
    var max = 3
    var signe_ia = ""
    var random = Math.floor(Math.random() * (max - min + 1) + min)
    var image_player = document.getElementById("player-signe")
    var image_ia = document.getElementById("ia-signe")

    if (signe_player === "pierre") {
        image_player.setAttribute("src", "images/1-pierre.jpg")
    }
    if (signe_player === "feuille") {
        image_player.setAttribute("src", "images/2-feuille.jpg")
    }
    if (signe_player === "ciseaux") {
        image_player.setAttribute("src", "images/3-ciseaux.jpg")
    }
    if (random === 1) {
        image_ia.setAttribute("src", "images/1-pierre.jpg")
        signe_ia = "pierre"
    }
    if (random === 2) {
        image_ia.setAttribute("src", "images/2-feuille.jpg")
        signe_ia = "feuille"
    }
    if (random === 3) {
        image_ia.setAttribute("src", "images/3-ciseaux.jpg")
        signe_ia ="ciseaux"
    }
    if ((signe_player === "pierre" && signe_ia === "pierre") || 
        (signe_player === "feuille" && signe_ia === "feuille") ||
        (signe_player === "ciseaux" && signe_ia === "ciseaux")) {
            var text = document.createTextNode("Egalité")
        } else if ((signe_player === "feuille" && signe_ia === "pierre") ||
            (signe_player === "ciseaux" && signe_ia === "feuille") ||
            (signe_player === "pierre" && signe_ia === "ciseaux")) {
                score_player++
    } else {
        score_ia++
    }
    
    //affichage round
    var resultat = document.createElement("h2")
    var text = document.createTextNode(`${score_ia} IA - Moi ${score_player}`)
    resultat.appendChild(text)
    var element = document.getElementById("result")
    element.appendChild(resultat)
    //Bonus Score
    var resultatfinal = document.createElement("p")
    if (score_ia === 5) {
        var final = document.createTextNode(`${score_ia} IA Win`)
        score_ia = 0
        score_player = 0
    } else if (score_player === 5) {
        var final = document.createTextNode(`${score_player} IA Win`)
        score_player = 0
        score_ia = 0
    }
    resultatfinal.appendChild(final)
    element.appendChild(resultatfinal)
}
function clearResult(){
    document.getElementById("result").innerHTML = ''
  }