
import {check_usa_states} from './states';

export const TIME_OVER = "Time over! Try Next Question? ";
export const TIME_RUNNING = "Time is running! Answer fast. "; 

const questionList = [

"Write as many distinct prime numbers as you can.",
"Write as many distinct values of 'N' for Equation 9x + 15y = N, such that x and y is integer. Example N = 0 gives x = 0 and y = 0 hence N = 0 is one of the solution.",
"Write as many distinct numbers which are divisble by 7, 4 and 3.",
"Write as many distinct words without letter 'e' and 's'.",
"Write as many distinct numbers that leaves remainder 1 when divided by 4 and leaves remainder 3 when divided by 7.",
"Write as many distinct numbers whose sum of the squares of digits are prime.",
"Write as many distinct words without any vowels.",
"If '#' is 3, '@' is 10 and '%' is 5, then write as many distinct representation of 150 where symbol 'abc' means a*b*c. Example - '###' = 3*3*3 = 27.",
"Write as many distinct composite numbers which are coprime with 8.",
"Write as many distict next numbers in the series 0,1,1,2,3,5,8 .... (write in order).",
"Write as many distinct states of United States of America. (Not case-sensitive).",
"Write as many distinct leap years. Example - If you think 1700 was a leap year, write 1700.",
"write as many distinct numbers(P) that satisfy 2^x = P where x can be any whole number.",
"Write as many distinct natural numbers which are not multiple of 3, 4, 5 and 6.",
"Write as many distinct positive numbers which are perfect square."
];

var indexList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var value = 0;
var checkedArray = [];

export function funCheckedArray()
{
	var temp = "";
	for(let i=0; i<checkedArray.length; i++)
		temp += (checkedArray[i] + " ");
	checkedArray = [];
	return temp;
}

export function generateRandom(){

	if(indexList.length === 0)
	{
		value = -1;
		return "What do you think about this game ;)";
	}
	var rand_index = Math.floor(Math.random() * (indexList.length-1));
	value = indexList[rand_index];
	indexList.splice(rand_index, 1);
	return questionList[value];
}

export function endOfGame(){
	if(value === -1)
		return 1;
	else
		return 0;
}

export function evalAnswer(input, currlevel, currScore){
	if(value=== -1)
		return 0;
	if(input === null)
		return 0;
	var arr = input.split(" ");
	var maxlen = arr.length;
	if(value === 0){
		return index0(arr,currlevel, currScore, maxlen);
	}
	else if(value === 1){
		return index1(arr, currlevel, currScore, maxlen);
	}
	else if(value === 2){
		return index2(arr, currlevel, currScore, maxlen);
	}
	else if(value === 3){
		return index3(arr, currlevel, currScore, maxlen);
	}
	else if(value === 4){
		return index4(arr, currlevel, currScore, maxlen);
	}
	else if(value === 5){
		return index5(arr, currlevel, currScore, maxlen);
	}
	else if(value === 6){
		return index6(arr, currlevel, currScore, maxlen);
	}
	else if(value === 7){
		return index7(arr, currlevel, currScore, maxlen);
	}
	else if(value === 8){
		return index8(arr, currlevel, currScore, maxlen);
	}
	else if(value === 9){
		return index9(arr, currlevel, currScore, maxlen);
	}
	else if(value === 10){
		return index10(arr, currlevel, currScore, maxlen);
	}
	else if(value === 11){
		return index11(arr, currlevel, currScore, maxlen);
	}
	else if(value === 12){
		return index12(arr, currlevel, currScore, maxlen);
	}
	else if(value === 13){
		return index13(arr, currlevel, currScore, maxlen);
	}
	else if(value === 14){
		return index14(arr, currlevel, currScore, maxlen);
	}
}

function index0(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0;i<arr.length; i++){
		let p = parseInt(arr[i]);
		if(isNaN(p))
			continue;
		if(isPrime(p))
			ansArr.add(p);
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;

}

function index1(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let p = parseInt(arr[i]);
		if(isNaN(p))
			continue;
		if(p % 3 === 0)
			ansArr.add(arr[i]);
	}

	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2; 
}

function index2(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let curr = parseInt(arr[i]);
		if(isNaN(curr))
			continue;
		if(curr % 7 === 0 && curr % 4 === 0 && curr % 6 === 0)
			ansArr.add(curr);
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}


function index3(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let s = arr[i];
		let flag = 1;
		for(let j=0; j< s.length; j++){
			if(s[j] === 'e' || s[j] === 's' || s[j] === 'E' || s[j] === 'S'){
				flag = 0;
				break;
			}
		}
		if(flag === 1)
			ansArr.add(arr[i]);
	}

	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index4(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let curr = parseInt(arr[i]);
		if(isNaN(curr))
			continue;
		if(curr % 7 === 3 && curr % 4 === 1)
			ansArr.add(curr);
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index5(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let curr = parseInt(arr[i]);
		let p = curr;
		if(isNaN(curr))
			continue;
		let sum = 0;
		while(curr){
			let rem = curr % 10;
			sum += (rem*rem)
			curr = Math.floor(curr/10);
		}

		console.log(p, sum);

		if(isPrime(sum))
			ansArr.add(p);
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index6(arr, currlevel, currScore, maxlen){	
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let s = arr[i];
		let flag = 0;
		for(let j=0; j< s.length; j++){
			if(s[j] === 'a' || s[j] === 'A' || s[j] === 'e' || s[j] === 'E' || s[j] === 'i' ||
				s[j] === 'I' || s[j] === 'o' || s[j] === 'O' || s[j] === 'u' || s[j] === 'U'){
				flag = 1;
				break;
			}
		}
		if(flag === 0)
			ansArr.add(arr[i]);
	}

	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2; 
}

function index7(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let sum = 1;
		let s = arr[i];
		for(let j=0; j< s.length; j++){
			if(s[j] === '#')
				sum = sum * 3;
			else if(s[j] === '@')
				sum = sum * 10;
			else if(s[j] === '%')
				sum= sum * 5;
		}

		if(sum === 150)
			ansArr.add(arr[i]);
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index8(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0;i<arr.length; i++){
		let p = parseInt(arr[i]);
		if(isNaN(p))
			continue;
		if(!isPrime(p) && p > 1 && gcd(Math.max(p,8), Math.min(p,8)))
			ansArr.add(p);
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index9(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	let x = 8;
	let y = 5;
	for(let i=0;i<arr.length; i++){
		let p = parseInt(arr[i]);
		if(isNaN(p))
			continue;
		if(p === x + y){
			ansArr.add(p);
			y = x;
			x = p;
		}
		else
			break;
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index10(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0;i<arr.length; i++){
		if(check_usa_states(arr[i]))
			ansArr.add(arr[i]);
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index11(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0;i<arr.length; i++){
		let p = parseInt(arr[i]);
		if(isNaN(p))
			continue;
		if((p%4 === 0 && p%100 !== 0) || (p%4 === 0 && p%100 === 0 && p%400 === 0 )){
			ansArr.add(p);
		}
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index12(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0;i<arr.length; i++){
		let p = parseInt(arr[i]);
		if(isNaN(p))
			continue;
		if(!(p & (p - 1))){
			ansArr.add(p);
		}
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index13(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0;i<arr.length; i++){
		let p = parseInt(arr[i]);
		if(isNaN(p))
			continue;
		if(p % 4 !== 0 && p%3 !== 0 && p%5 !== 0 && p%6 !== 0){
			ansArr.add(p);
		}
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index14(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0;i<arr.length; i++){
		let p = parseInt(arr[i]);
		if(isNaN(p) || p<=0)
			continue;
		for(let sum=0,i=1; sum<p; i += 2){
			sum += i;
			if(sum === p)
				ansArr.add(p);
		}
	}
	let len = ansArr.size;
	checkedArray = Array.from(ansArr);
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function finalScore(currlevel, currScore, val){
		return Math.floor(currlevel*(val/100) + currScore*(val/200) + val*8);
}

function isPrime(num){
	if(num === 2)
		return true;
	if(num < 2 || num % 2 === 0)
		return false;
	for(let i=2; i<=Math.sqrt(num); i++){
		if( num % i === 0)
			return false;
	}
	return true
}

function gcd(a, b){
	if(!b)
		return a;
	return gcd(b, a%b);
}
