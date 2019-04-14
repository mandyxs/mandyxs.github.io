let osc;
let p = false;
let beat;
let speed;
let midi;
let type = ["sawtooth", 'sine', 'triangle', 'square'];

// function preload() {
//   beat = loadSound('beat1.mp3');
// }


function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(100);
    background(10);
    beat = loadSound('beat3.mp3');

    osc = new p5.Oscillator();
    osc.setType(random(type));
    //osc.freq(500);
    osc.amp(0.02);
    //osc.start();
    beat.setVolume(0.6,0.5);
    //beat.loop();
    
}

function draw() {
	
	//animation on mobile
	let x = accelerationX;
    let y = accelerationY;
    let z = accelerationZ;
    let rz = rotationZ;
    let rx = rotationX;
    let ry = rotationY;
    let s = 800;
    let l = 10;

    let az = int(Math.abs(z*100));
    let ax = int(x*100);
    let ay = int(y*100);

    let rx_s = rx*10;
    let ry_s = ry*10;

    for (let i=0;i<=800;i++) {
      stroke(random(0,100));
      strokeWeight(random(1,4));
      let x1 = random(0,windowWidth);
      let y1 =random(0,windowHeight);
      line(x1,y1,x1+random(0,l),y1);
    }

    // for (let i=0;i<=az*0.1;i++) {
	let strokeColor = color(0, 123, 200);
	strokeColor.setRed(random(0, 127));
	strokeColor.setGreen(random(29, 135));
	stroke(strokeColor);
	strokeWeight(random(5,15));


	let x0 = windowWidth/2+ax+ry_s;


	let y0 = windowWidth/2+ay+rx_s;


	line(x0+10*(ry/4),y0-40, random(x0, x0+ry), random(y0, y0+ry));
	line(x0+20*(ry/4),y0-20, random(x0, x0+ry), random(y0, y0+ry));


    //sound effect on mobile

    midi = map(abs(ry), 0, 90, 2, 500)
    osc.freq(midi);
    osc.setType(random(type));
	speed = map(abs(rx), 0, 90, 0.5, 5)
	beat.rate(speed);


	// mouse draw on desktop browser
    //mouseDraw();

      
}


// function that makes drawing on canvas when using desktop browser
function mouseDraw() {

    stroke(random(70, 110));
    strokeWeight(random(1,4));

    line(mouseX-random(0,50), mouseY, mouseX-random(0,20), mouseY);
    //line(mouseX-random(0,50), mouseY+10, mouseX+random(0,20), mouseY+10);

    stroke(random(100, 200));
    strokeWeight(random(1,4));

    line(mouseX-random(0,20), mouseY, mouseX+random(0,20), mouseY);
    line(mouseX+random(0,20), mouseY+10, mouseX+random(0,20), mouseY+10);

    stroke(random(70, 110));
    strokeWeight(random(1,4));

    //line(mouseX+random(0,50), mouseY, mouseX+random(0,20), mouseY);
    line(mouseX+random(0,50), mouseY+10, mouseX+random(0,20), mouseY+10);

}


// to stop the playback
function touchStarted() {

	if (p) {

		//beat.stop();
		osc.stop();
     	p = false;
	} else {
		//beat.play();
		osc.start();
		//beat.loop();
		//osc.amp(0.1, 0.5);
		p = true;

	}

	if (beat.isLooping()) {
		beat.stop();
		//beat.disconnect()
	} else {
		//beat.connect()
		//beat.play();
		beat.loop();
	}

	return false;

}