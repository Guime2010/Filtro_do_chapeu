var positionx=0
var positiony=0
function preload(){
    chapeu=loadImage("chapeu.png")
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet=ml5.poseNet(video,modelload)
    poseNet.on("pose",gotPoses)
}
function draw(){
    image(video,0,0,300,300)
    image(chapeu,positionx,positiony,155,155)
}
function modelload(){
    console.log("modelo carregado")
}
function gotPoses(results){
    if(results.length>0){
        positionx=results[0].pose.leftEye.x-100
        positiony=results[0].pose.leftEye.y-100
    }
}
function takeSnapshot(){
    save("foto.png")
}