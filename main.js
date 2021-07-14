Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});

camera = document.getElementById("camera");

webcam.attach("camera");

function take_snapshot()
{
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHtml='<img id="capture_image"src="'+data_uri+"'/>';
    });
}
console.log("ml5 version",ml5.version);

classifier = ml5.classifier("https://teachablemachine.withgoogle.com/models/[...]",modelLoded);

function modelLoded()
{
console.log("modelLoded");
}

function check()
{
    image = document.getElementById('capture_image');
    classifier.classify(img, gotResults);
}

function gotResults(error, results)
{
if(error)
{
console.error(error);
}
if(results)
{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}

