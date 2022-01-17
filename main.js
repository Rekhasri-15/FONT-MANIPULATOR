noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,390);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is Initialised');
}

function draw()
    {
        background('#5c0000');
        fill("#04ff00");
        textsize(7);
        text("Cookie", 100, 200 );
        console.log("leftWristX=" + leftWristX + "rightWristX=" + rightWristX + "difference=" + difference);
        document.getElementById("text_size").innerHTML="width and height of the text will be =" + difference + "px";
    }

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX=" + noseX + "noseY=" + noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;   
        difference=floor(leftWristX-rightWristX);
    }
}