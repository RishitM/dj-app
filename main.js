var volume_val=0
var lft_wristx=0
var lft_wristy=0
var rgt_wristx=0
var rgt_wristy=0
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
   fill(245,0,0)
   circle(lft_wristx,lft_wristy,5)
    image(video,0,0,700,500)
    volume_val=Number(lft_wristy);
    volume_val=floor(volume_val);
    volume_val=volume_val/500
    console.log(volume_val)
    song.setVolume(volume_val)
    document.getElementById("vlm").innerHTML=volume_val;
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