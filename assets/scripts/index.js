const math = require ('math.js');

window.colorMode = function () {
	var element = document.getElementById('color-mode');
	var border = document.getElementById('border');
	if (element.classList.value === 'fa fa-sun fa-stack-1x') {
		element.classList.value = 'fa fa-moon fa-stack-1x';
		border.classList.value = 'far fa-circle fa-stack-2x moon-icon-border';
		document.getElementsByClassName("hero")[0].style.backgroundColor = '#1F2023';
		document.getElementsByClassName("navbar")[0].style.backgroundColor = '#1F2023';
    document.getElementsByTagName("footer")[0].style.backgroundColor = '#1F2023';
		document.getElementById('subtitle').classList.value = 'moon';
		document.getElementById('title').classList.value = 'moon';
		document.getElementById('brand').classList.value = 'moon';
    document.getElementById('nick-head').classList.value = 'moon';
    document.getElementById('nick-foot').classList.value = 'moon';
	}
	else {
		element.classList.value = 'fa fa-sun fa-stack-1x';
		border.classList.value = 'far fa-circle fa-stack-2x sun-icon-border';
		document.getElementsByClassName("hero")[0].style.backgroundColor = '#F8FAFF';
		document.getElementsByClassName("navbar")[0].style.backgroundColor = '#F8FAFF';
    document.getElementsByTagName("footer")[0].style.backgroundColor = '#F8FAFF';
		document.getElementById('subtitle').classList.value = 'sun';
		document.getElementById('title').classList.value = 'sun';
		document.getElementById('brand').classList.value = 'sun';
    document.getElementById('nick-head').classList.value = 'sun';
    document.getElementById('nick-foot').classList.value = 'sun';
	}
}

const copyButton = document.querySelector('#copy');
const copyButtonMobile = document.querySelector('#copymobile');
const copyAlert = document.querySelector('#copyalert');
const copyAlertMobile = document.querySelector('#copyalertmobile');

/*
* Copy the text of the box with an ID of hexid
* Flash an alert for this box as well
*/
function copyText() {
  copyAlert.style.visibility = "visible";
  var fadeTarget = copyAlert;
  var fadeEffect = setInterval(function () {
  if (!fadeTarget.style.opacity) {
    fadeTarget.style.opacity = 1;
  }
  if (fadeTarget.style.opacity > 0) {
    fadeTarget.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
  }
  }, 100);
  fadeTarget.style.opacity = 1;
  var text = 'npm i matematik';
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}

/*
* Copy the text of the box with an ID of hexid
* Flash an alert for this box as well
*/
function copyTextMobile() {
  copyAlert.style.visibility = "visible";
  var fadeTarget = copyAlertMobile;
  var fadeEffect = setInterval(function () {
  if (!fadeTarget.style.opacity) {
    fadeTarget.style.opacity = 1;
  }
  if (fadeTarget.style.opacity > 0) {
    fadeTarget.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
  }
  }, 100);
  fadeTarget.style.opacity = 1;
  var text = 'npm i matematik';
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}

/*
* Find random integer less than the max
*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
/*
* Variables for typeWrite function
* words array of example words and colors for action
* speed to identify in miliseconds how long after each char to wait
* IintervalTypeWrite to tell the window how often in miliseconds to run typeWriter
*/
var i = 0; //Keep "i" counter variable outside of typeWrite function to preserve it
var demos = [
  ['math.getRandomInt(' + math.getRandomInt(100) + ')'],
  ['math.englishify(' + math.getRandomInt(9999) + ')'],
  ['math.euclideanDistance([' + math.getRandomInt(100) + ', ' + math.getRandomInt(100) + '], [' + math.getRandomInt(100) + ' ,' + math.getRandomInt(100) + '])'],
  ['math.dot([1, 4, 24], [8, 12, 16])'],
  ['math.zeros(4, 2)'],
  ['math.getRandomInt(' + math.getRandomInt(20) + ', ' + math.getRandomInt(0, -20) + ')'],
	['math.mean([' + math.getRandomInt(100) + ', ' + math.getRandomInt(100) + ', ' + math.getRandomInt(100) + ', ' + math.getRandomInt(100) + '])'],
];
var speed = 200;
var txt = demos[getRandomInt(demos.length - 1)];
var intervalTypeWrite = window.setInterval(typeWriter, 8000);

/*
* sleep creates a new Promise that will wait x miliseconds to start again
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/*
* Asyncronious funciton can run over and over again
* typeWriter types as long as the counter is not the same as the length of the word it's typing
* When the counter gets to the end of the word we "sleep", change the color of the koi, "sleep" again, then find a new word, reset the counter and reset the placeholder variable
*/
async function typeWriter() {
  if (i < txt[0].length)
  {
      document.querySelector("#demo").innerHTML += txt[0][i];
      i++;
      setTimeout(typeWriter, speed);
  } else if (i === txt[0].length){
	    await sleep(1000);
			var answer = eval(txt[0]);
			if (typeof answer === 'object') {
				answer = JSON.stringify(answer);
			}
	    document.querySelector('#demoresult').innerHTML = answer;
	    await sleep(2000);
			i = 0;
	    txt = demos[getRandomInt(demos.length - 1)];
	    document.querySelector('#demoresult').innerHTML = "";
	    document.querySelector("#demo").innerHTML = ""; //Use placeholder not value so user can still begin typing
	    return;
	}
}

typeWriter(); //Start the function immediatly, without waiting the interval time

copyButton.addEventListener("click", copyText, false);
copyButtonMobile.addEventListener("click", copyTextMobile, false);
