song_1 = ""
song_2 = ""
leftWristY = 0
leftWristX = 0
rightWristY = 0
rightWristX = 0

function preload(){
    song_1 = loadSound(" Heroes Tonight.mp3")
    song_2 = loadSound("Where we Started.mp3")
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function draw(){
    image(video,0,0,600,500)
}

function modelLoaded(){
    console.log("Model Is Loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftWristY = results[0].pose.leftWrist.y 
        leftWristX = results[0].pose.leftWrist.x
        rightWristY = results[0].pose.rightWrist.y
        rightWristX = results[0].pose.rightWrist.x
        console.log("leftWristY =" + leftWristY + "leftWristX =" + leftWristX + "rightWristX = "  + rightWristX + "rightWristY" + rightWristY)
    }
}