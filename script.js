/* Variable numbers for numbered buttons*/
var oneBtn = document.getElementById('calc-one');
var twoBtn = document.getElementById('calc-two');
var threeBtn = document.getElementById('calc-three');
var fourBtn = document.getElementById('calc-four');
var fiveBtn = document.getElementById('calc-five');
var sixBtn = document.getElementById('calc-six');
var sevenBtn = document.getElementById('calc-seven');
var eightBtn = document.getElementById('calc-eight');
var nineBtn = document.getElementById('calc-nine');
var zeroBtn = document.getElementById('calc-zero');

var decimalBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');
var displayValElement = document.getElementById('calc-display');

/*No need for operators? No need for btns?*/

var displayVal = '0'; /*Simulates the zero on default*/
var evalStringArray = []; /*Holds all values then can use eval()*/

/* Array by class*/
var calcNumBtns = document.getElementsByClassName('calc-num');
var calcOperatorBtns = document.getElementsByClassName('calc-operator');

/* clickObj automatically passes click event to the function*/
var updateDisplayVal = function(clickObj) { 
	/* If '8' is clicked, then btnText = 8 */
	var btnText = clickObj.target.innerText;
	/* Check display if 0, then clear it and add numbers to it*/
	if(displayVal === '0'){
		displayVal = '';
	}

	displayVal += btnText;
	displayValElement.innerText = displayVal;
}

for(var i=0; i < calcNumBtns.length; i++) {
	calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
/*for(let i=0; i < calcOperatorBtns.length; i++) {
	calcOperatorBtns[i].addEventListener('click', performOperation, false);
}*/