Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera")

Webcam.attach( '#camera' )

function take_snip() {
    Webcam.snap(function(data_uri) {
        document.getElementById('result').innerHTML = '<img id="capimg" src="' + data_uri + '"/>';
    });
}


console.log('ml5 version', ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pYu6L74Or/model.json', model_loaded)

function model_loaded() {
    console.log( 'model is loaded' )
}

function check() {
    img = document.getElementById('capimg')
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        document.getElementById('r_obj_name').innerHTML = results[0].label
        document.getElementById('r_obj_accu').innerHTML = results[0].confidence.toFixed(3) * 100 + '%'
         
        
    }
}