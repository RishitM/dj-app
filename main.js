var scrL=0
var scrR=0
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
    image(video,0,0,700,500)
    if(scrL>0.2){
        fill(0,245,0)
        circle(lft_wristx,lft_wristy,20)
     
         volume_val=Number(lft_wristy);
         volume_val=floor(volume_val);
         volume_val=volume_val/500
         console.log(volume_val)
         song.setVolume(volume_val)
         document.getElementById("vlm").innerHTML=volume_val;
    }
    if(scrR>0.2){
        fill(245,0,0)
        circle(rgt_wristx,rgt_wristy,20)
        if(rgt_wristy>0 && rgt_wristy<=100){
            song.rate(0.5)
            document.getElementById("spd").innerHTML="0.5";
        }
        if(rgt_wristy>100 && rgt_wristy<=200){
            song.rate(1)
            document.getElementById("spd").innerHTML="1";
        }
        if(rgt_wristy>200 && rgt_wristy<=300){
            song.rate(1.5)
            document.getElementById("spd").innerHTML="1.5";
        }
        if(rgt_wristy>300 && rgt_wristy<=400){
            song.rate(2)
            document.getElementById("spd").innerHTML="2";
        }
        if(rgt_wristy>400 && rgt_wristy<=500){
            song.rate(2.5)
            document.getElementById("spd").innerHTML="2.5";
        }
    }
  

  
}

function play_music(){
    song.setVolume(volume_val)
    song.rate(1)
    song.play()
    
}
function stop(){
    song.pause()
}
function modeloaded(){
    console.log("posenet is working")
}
function gotPoses(results){
if (results.length>0){
    console.log(results)
    scrL=results[0].pose.keypoints[9].score
    scrR=results[0].pose.keypoints[10].score
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

















































