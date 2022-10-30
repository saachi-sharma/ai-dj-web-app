maribian_song ="";
flute_instrumental_song="";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scoreRighttWrist = 0;
song_maribian = "";
song_flute_instrumental_song= "";
function preload(){
   
}
function setup(){
    canvas=createCanvas(400, 300);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose' ,gotPoses);

}
function preload(){
    maribian_song = loadSound("music.mp3");
    flute_instrumental_song = loadSound("music1.mp3");

}
function modelLoaded(){
    console.log('Posenet is intialized');
}

function gotPoses(results){
        if(results.length>0){
            console.log(results);
            scoreLeftWrist = results[0].pose.keypoints[9].score;
           console.log("scoreLeftWrist = "+ scoreLeftWrist);
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            console.log("leftWristX ="+ leftWristX+" leftWristY ="+leftWristY);

             scoreRightWrist = results[0].pose.keypoints[10].score;
           console.log("scoreRightWrist = "+ scoreRightWrist);
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
            console.log("rightWristX ="+ rightWristX+" rightWristY ="+rightWristY);
    
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
            console.log("rightWristX ="+ rightWristX+" rightWristY ="+rightWristY);
        }

        }


function draw(){
image(video, 0, 0, 400, 300);
fill('#F88379');
stroke('#FF7F50');

song_maribian = maribian_song.isPlaying();
console.log(song_maribian);

song_flute_instrumental_song = flute_instrumental_song.isPlaying();
console.log(song_flute_instrumental_song);

if(scoreLeftWrist > 0.2){
circle(leftWristX, leftWristY, 20);
flute_instrumental_song.stop();

if(song_maribian == false){
    maribian_song.play();
}
else{
    document.getElementById("song_id").innerHTML = "Playing music :of Maribian ";
}
}
if(scoreRightWrist > 0.2){
    circle(rightWristX, rightWristY, 20);
   maribian_song.stop();
    
    if(song_flute_instrumental_song == false){
        flute_instrumental_song.play();
    }
    else{
        document.getElementById("song_id").innerHTML = "Playing music : of flute";
    }
}
}

function play(){
    song.play();
}