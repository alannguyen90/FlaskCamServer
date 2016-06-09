#ReadMe.md

## Description
This project is designed to host a server on a Raspberry Pi 3 that is able to serve live video from its Raspberry Pi Camera. In addition, it allows users on the hosted website to rotate and angle the camera using a pan and tilt servo setup in order to look around wherever the system is placed. 

This repo was made during CSS428 at the University of Washington


## Requirements
###Software
+ Raspbian OS

+ VLC: sudo apt-get install vlc

+ Flask: 														sudo apt-get install python-pip	
sudo pip install flask

###Hardware
+ Raspberry Pi 3, or Raspberry Pi 2 with wifi module

+ Raspberry Pi Camera

+ Complete Pan and Tilt kit, or 
2 servos and a pan and tilt mount (might find a 3d print library)

+ 8GB (recommended more) micro sd card

+ Arduino Micro/Uno/Whatever

+ Male to Male Wiring Kit for Arduino (12+ wires)

## Setup
```
sudo apt-get npm 
npm install
bower install
sudo apt-get install python-pip
sudo pip install flask
sudo apt-get install vlc

raspivid -o - -t 0 -n -w 720 -h 480 -fps 25 -b 1500000 | cvlc -vvv stream:///dev/stdin --sout ‘#rtp{sdp=rtsp://:8554/}’ :demux=h264
```





##Authors
Jeremy Bobotek
Alan Nguyen
Xavier Chen
