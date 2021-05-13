var lft_wristx
var lft_wristy
var rgt_wristx
var rgt_wristy
var song=""
function preload(){
song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(700,500)
    canvas.position(350,200);
    video=createCapture(VIDEO)
    video.hide()
    console.log(ml5.version)
    posenet= ml5.poseNet(video,modeloaded)
    posenet.on("pose",gotPoses)
}
function draw(){
    image(video,0,0,700,500)
}
function play_music(){
    song.setVolume(0.5)
    song.rate(1)
    song.play()
    
}
function stop(){
    song.stop()
}
function modeloaded(){
    console.log("posenet is working")
}
function gotPoses(results){
if (results.length>0){
    console.log(results)
lft_wristx=results[0].pose.leftWrist.x
lft_wristy=results[0].pose.leftWrist.y
rgt_wristx=results[0].pose.rightWrist.x
rgt_wristy=results[0].pose.rightWrist.y
console.log(lft_wristx);
console.log(lft_wristy);
console.log(rgt_wristx);
console.log(rgt_wristy);

}
}