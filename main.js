var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function startRecognition(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
console.log(event);
var content = event.results[0][0].transcript
console.log(content)
document.getElementById("textbox").innerHTML = content;
if(content == "take my selfie"){
    console.log("Taking selfie.");
    speak()
}
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds."
    console.log(speak_data);
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera)   
    setTimeout(function(){
        snapPhoto()
        downloadImage()
    }, 5000)
    //snapPhoto()
}

Webcam.set({
    width:320,
    height:240,
    image_format:'png',     
    png_quality:90
});
function snapPhoto(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id = 'final_snap' src = " + data_uri + ">" 
    }); 
}
camera = document.getElementById('camera')
function downloadImage(){
    var link = document.getElementById("link");
    var image = document.getElementById("final_snap").src;
    link.href = image;
    link.click();
    
}
