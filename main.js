var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if(content == "take my selfie"){

        console.log("Taking selfie - - -");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    
    speakdata = "Taking selfie in 5 4 3 2 1 ";

    var utterThis = new SpeechSynthesisUtterance(speakdata);

    synth.speak(utterThis);

    Webcam.attach(camera);
    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        console.log("data_uri - - - "+data_uri);
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

function save()
{
  link_id = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link_id.href = image;
  link_id.click();
}
