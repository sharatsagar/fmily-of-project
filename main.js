prediction_1="";
prediction_2="";
Webcam.attach('#camera');

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
} 
console.log('ml5 version:', ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
  function modelLoaded() { console.log('Model Loaded!');
 
}
function speak(){
    var synth=window.speechSynthesis
    speakdata1="the first prediction is" + prediction_1 +"and the second prediction is"+prediction_2 ;
    var utterthis =new SpeechSynthesisUtterance(speakdata1)
    synth.speak(utterthis)
}
function check (){
  img=document.getElementById("selfie_image")
  classifier.classify(img,gotResult)
}
function gotResult(error,results){
console.log(results)
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
prediction_1=results[0].label
prediction_2=results[1].label
speak();
if(results[0].label == "happy") { document.getElementById("update_emoji").innerHTML = "&#128522;"; }
if(results[0].label == "sad") { document.getElementById("update_emoji").innerHTML = "&#128532;"; }
if(results[0].label == "angry") { document.getElementById("update_emoji").innerHTML = "&#128548;"; }
if(results[1].label == "happy") { document.getElementById("update_emoji2").innerHTML = "&#128522;"; }
if(results[1].label == "sad") { document.getElementById("update_emoji2").innerHTML = "&#128532;"; }
if(results[1].label == "angry") { document.getElementById("update_emoji2").innerHTML = "&#128548;"; }
  }  