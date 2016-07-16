
/* Brainwave Type
 a = alpha (7.5 - 12.5 Hz)
 b = beta (12.5 - 30 Hz)
 t = theta (4 – 7 Hz)
 d = delta (0.1 – 3 Hz)
 g = gamma 40 Hz

 // table of values for meditation
 //   start with lots of Beta (awake / conscious)
 //   add Alpha (dreamy / trancy to connect with subconscious Theta that'll be coming up)
 //   reduce Beta (less conscious)
 //   start adding Theta (more subconscious)
 //   pulse in some Delta (creativity)
 //   and then reverse the above to come up refreshed

 Duration of this Brainwave Type (seconds)

 { 'b', 60 },
 { 'a', 10 },
 { 'b', 20 },
 { 'a', 15 },
 { 'b', 15 },
 { 'a', 20 },
 { 'b', 10 },
 { 'a', 30 },
 { 'b',  5 },
 { 'a', 60 },
 { 't', 10 },
 { 'a', 30 },
 { 't', 20 },
 { 'a', 30 },
 { 't', 30 },
 { 'a', 15 },
 { 't', 60 },
 { 'a', 15 },
 { 'b',  1 },
 { 'a', 15 },
 { 't', 60 },
 { 'd',  1 },
 { 't', 10 },
 { 'd',  1 },
 { 't', 10 },
 { 'd',  1 },
 { 't', 30 },
 { 'a', 15 },
 { 'b',  1 },
 { 'a', 15 },
 { 't', 30 },
 { 'a', 15 },
 { 'b',  1 },
 { 'a', 20 },
 { 'b',  5 },
 { 'a', 20 },
 { 'b', 15 },
 { 'a', 15 },
 { 'b', 20 },
 { 'a', 10 },
 { 'b', 25 },
 { 'a',  5 },
 { 'b', 60 },
 { '0',      0 }

 856 seconds = 14.26666 minutes
 */
var brainMachine = function(brainWave) {
  var hz;

  switch (brainWave) {
    case 'a':
      hz = 10;
      break;
    case 'b':
      hz = 25;
      break;
    case 't':
      hz = 5;
      break;
    case 'd':
      hz = 1.5;
      break;
  }

  var visualFrequency = (1/hz) * 1000;

  //create and oscillator that will be the data for the sound
  var oscillatorLeft = audioCtx.createOscillator();
  var oscillatorRight = audioCtx.createOscillator();
  var gainNodeLeft = audioCtx.createGain();
  var gainNodeRight = audioCtx.createGain();

  //connect the oscillator to volume control
  oscillatorLeft.connect(gainNodeLeft);
  gainNodeLeft.connect(audioCtx.destination);
  oscillatorRight.connect(gainNodeLeft);
  gainNodeRight.connect(audioCtx.destination);

  //volume
  gainNodeLeft.gain.value = 0.01;
  gainNodeRight.gain.value = 0.01;

  //start leftFrequency
  oscillatorLeft.type = 'sine';
  oscillatorRight.type = 'sine';
  var leftFrequency = oscillatorLeft.frequency.value;
  var rightFrequency = oscillatorRight.frequency.value;
  leftFrequency = 500;
  rightFrequency = leftFrequency + hz;
  oscillatorLeft.start();
  oscillatorRight.start();

  //animation to 'blink' light going to the left and right eyes.
  var switchColors = function() {
    $('#div').toggleClass('div');
  }

  timeoutID = window.setInterval(function(){
    switchColors();
  }, visualFrequency);
}

var timeoutID;

var clear = function(){
  window.clearTimeout(timeoutID);
}

var interval = function(brainWave, time) {
    console.log(brainWave);
    clear();
    brainMachine(brainWave);
}

//create the audio context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var seconds = 60;

interval('b');
var time = 1000 * seconds;
window.setTimeout(function(){ return interval('a'); }, time);
time += 10000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 20000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 15000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 15000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 20000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 10000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 30000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 5000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 60000;
window.setTimeout(function(){ return interval('t'); }, time);
time += 10000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 30000;
window.setTimeout(function(){ return interval('t'); }, time);
time += 20000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 30000;
window.setTimeout(function(){ return interval('t'); }, time);
time += 30000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 15000;
window.setTimeout(function(){ return interval('t'); }, time);
time += 60000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 15000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 1000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 15000;
window.setTimeout(function(){ return interval('t'); }, time);
time += 60000;
window.setTimeout(function(){ return interval('d'); }, time);
time += 1000;
window.setTimeout(function(){ return interval('t'); }, time);
time += 10000;
window.setTimeout(function(){ return interval('d'); }, time);
time += 1000;
window.setTimeout(function(){ return interval('t'); }, time);
time += 10000;
window.setTimeout(function(){ return interval('d'); }, time);
time += 1000;
window.setTimeout(function(){ return interval('t'); }, time);
time += 30000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 15000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 1000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 15000;
window.setTimeout(function(){ return interval('t'); }, time);
time += 30000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 15000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 1000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 20000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 5000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 20000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 15000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 15000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 20000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 10000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 25000;
window.setTimeout(function(){ return interval('a'); }, time);
time += 5000;
window.setTimeout(function(){ return interval('b'); }, time);
time += 60000;
window.setTimeout(function(){ return interval('b'); }, time);
