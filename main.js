var song=""
function preload(){
song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(700,500)
    canvas.position(350,200);
    video=createCapture(VIDEO)
    video.hide()
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