Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}

classifier = ml5.image_classifier("https://teachablemachine.withgoogle.com/models/XutIsTUfh/model.json",modelLoaded);

function speak()
{
    var Shreash = window.speechSynthesis;
    speech_1 = "The first prediction is"+prediction_1;
  speech_2 = "The first prediction is"+prediction_2;

  var utterThis=new SpeechSynthesisUtterance(speech_1+speech_2);
  Shreash.speak(utterThis);
}

function modelLoaded()
{
    console.log("model loaded!");
}