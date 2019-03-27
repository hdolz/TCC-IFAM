//instancia objeto do editor de texto (API CodeMirror)
var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    autoCloseTags: true,
    gutter: true,
    lineWrapping: true,
    //essa variavel serve para definir valores iniciais da aplicação
    //value: startingValue,
    theme: "dracula",
    mode: "xml"
});

//FIX FOR MIN LINES
//http://stackoverflow.com/questions/10380759/codemirror-minimum-lines-number
//editor.setValue(startingValue);



let btnIniciar = document.getElementById('btnIniciar');
btnIniciar.addEventListener('click', () => {
    iniciar();
});

let btnParar = document.getElementById('btnParar');
btnParar.addEventListener('click', () => {
    parar();
});

//api de reconhecimento de fala - web Speech API
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
    console.log(transcript);
    if(transcript=='bloco html'){
        editor.setValue(editor.getValue() + '\n' + comandos.html);
    }

});

function iniciar() {
    console.log('Reconhecimento iniciado...');
    recognition.start();
}

function parar() {
    console.log('Reconhecimento terminado...');
    recognition.stop();
}

//recognition.addEventListener('end', recognition.start);


const comandos = [
    {
        'html' :
            "<!DOCTYPE html>" + "\n" +
            "<html lang='en'>" + "\n" +
            "<head>" + "\n" +
            "<meta charset='UTF-8'>" + "\n" +
            "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" + "\n" +
            "<meta http-equiv='X-UA-Compatible' content='ie=edge'>" + "\n" +
            "<title>Document</title>" + "\n" +
            "</head>" + "\n" +
            "<body>" + "\n" +

            "</body>" + "\n" +
            "</html>"
    }
]
