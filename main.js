function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw() {

}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log('results')
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose x =" + results[0].pose.nose.y + 10);
    }
}