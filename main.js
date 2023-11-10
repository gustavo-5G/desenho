function setup() {
    canvas = createCanvas(280, 280)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis
}
function clearCanvas() {
    background("white")
}
function preload() {
    classifier = ml5.imageClassifier("doodleNet")
}
function draw() {
    strokeWeight(13)
    stroke(0)
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
function classifyCanvas() {
    classifier.classify(canvas, gotResults)
}
function gotResults(erro, results) {
    if (erro) {
        console.error(erro)
    }
    console.log(results)
    var results = results[0].label
    document.getElementById("label").innerHTML = "nome: " + results.replace("_", " ")
    document.getElementById("confidence").innerHTML = "precisão: " + Math.round(results[0].confidence * 100) + "%"

    utterThis = new SpeechSynthesisUtterance(results.replace("_", " "))
    synth.lang = "pt-BR"
    synth.speak(utterThis)
    fala = ""

    if (results == "skull") {
        document.getElementById("label").innerHTML = "por que ? , por que ? UM CRÂNIO!?"

        fala = "por que ? , por que ? UM CRÂNIO!?"
        utterThis = new SpeechSynthesisUtterance(fala)
        synth.speak(utterThis)
    }
    if (results == "eye") {
        document.getElementById("label").innerHTML = "estou de olho em você..."

        fala = "estou de olho em você..."
        utterThis = new SpeechSynthesisUtterance(fala)
        synth.speak(utterThis)
    }
    if (results == "book") {
        document.getElementById("label").innerHTML = "va ler um livro... saia do computador !"

        fala = "va ler um livro... saia do computador !"
        utterThis = new SpeechSynthesisUtterance(fala)
        synth.speak(utterThis)
    }
    if (results == "spider") {
        document.getElementById("label").innerHTML = "homem aranha ou aracnofobia ?"

        fala = "homem aranha ou aracnofobia ?"
        utterThis = new SpeechSynthesisUtterance(fala)
        synth.speak(utterThis)
    }
    if (results == "grape") {
        document.getElementById("label").innerHTML = "simplesmente estou sem ideias."

        fala = "então... apenas observe essa maravilhosa obra de arte; uma uva !"
        utterThis = new SpeechSynthesisUtterance(fala)
        synth.speak(utterThis)
    }
    if (results == "computer") {
        document.getElementById("label").innerHTML = "possivelmente você esta usando isso agora para executar esse código"

        fala = "aaaaaaaaaaaaaaaaaaaaaaajjjjjjjjjjjjjjjjjjjjjjjjjwwwwwwwwwwwwwwwwwwwwwwwwwww error 990 reinicie o sistema"
        utterThis = new SpeechSynthesisUtterance(fala)
        synth.speak(utterThis)
    }
}
