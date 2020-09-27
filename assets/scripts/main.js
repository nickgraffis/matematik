(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"math.js":2}],2:[function(require,module,exports){
module.exports = {
    euclideanDistance : euclideanDistance,
    mean: mean,
    meanPoint: meanPoint,
    rangeOf: rangeOf,
    rangesOf: rangesOf,
    englishify: englishify,
    getRandomInt: getRandomInt,
    dot: dot,
    zeros: zeros,
};

/**
* Create a matrix filled with zeros of a certain height and width
* @param {Number} columns - integer - 2
* @param {Number} rows - integer - 2
* @return {Array{Array}} array - [[0, 0], [0, 0]]
*/
function zeros (columns, rows) {
  var matrix = [];
  var rowMatrix = [];
  for (let i = 0; i < columns; i++) {
      rowMatrix = [];
    for (let k = 0; k < rows; k++) {
      rowMatrix.push(0);
    }
    matrix.push(rowMatrix);
  }
  return matrix;
}

/**
* Compute the dot product of two vecors
* @param {Array} vector1
* @param {Array} vector2
* @return {Number} integer
* TODO Allow for 2-D arrays with a matrix returned
*/
function dot(vector1, vector2) {
  let result = 0;
  if (typeof vector1 === 'object') {
    if (typeof vector2 === 'object' && vector2.length === vector1.length) {
      for (var i = 0; i < vector1.length; i++) {
        result += vector1[i] * vector2[i];
      }
    } else {
      throw 'Error finding dot product of vectors of different dimensions!';
    }
  } else if (typeof vector2 === 'object') {
    throw 'Error finding dot product of vectors of different dimensions!';
  } else {
    result = vector1 * vector2;
  }
  return result;
}

/**
* Find a random integer between min and max value
* @param {Number} max - integer
* @param {Number} min - integer
* @return {Number} integer - will be between 0 and max
*/
function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
* Accept an integer and parse it out into an english string of the same meaning
* @param {Number} num - integer - 293
* @return {'Number'} string - two hundred and ninety three
* TODO Expand beyond 9999
* TODO Allow for negative numbers
* TODO Allow for floating points
*/
function englishify(num){
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
              'ninety'];

  var numString = num.toString();

  if (num < 0) {
    throw 'Negative numbers are not supported.';
  }

  if (num === 0) {
    return 'zero';
  }

  //One to Twenty
  if (num < 20) {
    return ones[num];
  }
  //Twenty One to Ninety Nine
  if (numString.length === 2) {
    return tens[numString[0]] + ' ' + ones[numString[1]];
  }

  //100 Plus
  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
      return ones[numString[0]] + ' hundred';
    else
      return ones[numString[0]] + ' hundred and ' + englishify(+(numString[1] + numString[2]));
  }

  if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return ones[numString[0]] + ' thousand';
    if (end < 100) return ones[numString[0]] + ' thousand and ' + englishify(end);
    return ones[numString[0]] + ' thousand ' + englishify(end);
  }
}

/**
* Find a euclidean distance between two points
* @param {Array} a - first point on graph of dimensions N
* @param {Array} b - second point on graph of dimensions N
* @return {Number} integer
*/
function euclideanDistance(a, b) {
    if (a.length != b.length) {
        throw 'Error calculating Euclidean distance. Input vectors must have same number of dimensions!';
    }
    var sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += Math.pow(b[i] - a[i], 2);
    }
    return Math.sqrt(sum);
}

/**
* Calculates the mean value of a one-dimensional dataset
* @param {Array} data - data set
* @return {Number} mean value of data set
*/
function mean(data) {
    return data.reduce((total,current) => total += current, 0) / data.length;
}

/**
* Calculates the mean point of an n-dimensional dataset
* @param {Array} data - data set
* @return {Array} mean point of data set
*/
function meanPoint(data) {
    var theMeanPoint = [];
    if (data.length != 0) {
        for (let i = 0; i < data[0].length; i++) {
            theMeanPoint.push(mean(data.map(x => x[i])));
        }
    }
    return theMeanPoint;
}

/**
* Calculates the range of a one-dimensional data set
* @param {Array} data - data set
* @return {Number} range - range of the data set
*/
function rangeOf(data) {
    return data.reduce(function(total,current) {
        if (current < total.min) { total.min = current; }
        if (current > total.max) { total.max = current; }
        return total;
    }, {min: data[0], max: data[0]});
}

/**
* Calculates the ranges of each 'component' in an n-dimensional data set
* @param {Array} data - data set
* @return {Number} range - range of the data set
*/
function rangesOf(data) {
    var ranges = [];
    for (let i = 0; i < data[0].length; i++) {
        ranges.push(rangeOf(data.map(x => x[i])));
    }
    return ranges;
}

},{}]},{},[1]);
