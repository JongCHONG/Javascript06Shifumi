function onButtonClick(signeplayer) {
    var min = 1
    var max = 3
    var signe_ia = ""
    var random = Math.floor(Math.random() * (max - min + 1) + min)
    var imageplayer = document.getElementById("player-signe")
    var imageia = document.getElementById("ia-signe")
    if (signeplayer === "pierre") {
        imageplayer.setAttribute("src", "images/1-pierre.jpg")
    }
    if (signeplayer === "feuille") {
        imageplayer.setAttribute("src", "images/2-feuille.jpg")
    }
    if (signeplayer === "ciseaux") {
        imageplayer.setAttribute("src", "images/3-ciseaux.jpg")
    }
    if (random === 1) {
        imageia.setAttribute("src", "images/1-pierre.jpg")
        signe_ia = "pierre"
    }
    if (random === 2) {
        imageia.setAttribute("src", "images/2-feuille.jpg")
        signe_ia = "feuille"
    }
    if (random === 3) {
        imageia.setAttribute("src", "images/3-ciseaux.jpg")
        signe_ia ="ciseaux"
    }
    
    if (signeplayer === "pierre" && signe_ia === "feuille") {
        var newParagraph = document.createElement("h2")
        var text = document.createTextNode("ia win")
        newParagraph.appendChild(text);
        var element = document.getElementById("result")
        element.appendChild(newParagraph)

    }
}