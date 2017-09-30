
export const TIME_OVER = "Time over! Try Next Question? ";
export const TIME_RUNNING = "Time is running! Answer fast. "; 

const questionList = [

"Write as many distinct prime numbers as you can.",
"Write as many distinct words that contains exactly 2 vowels.",
"Write as many distinct numbers which are divisble by 7, 11 and 6.",
"Write as many distinct words without letter 'e' and 's'.",
"Write as many distinct numbers that leaves remainder 1 when divided by 4 and leaves remainder 7 when divided by 11.",
"Write as many distinct numbers whose sum of the squares of digits are even.",
"Write as many distinct words without any vowels.",
"If '#' is 3, '@' is 8 and '%' is 5, then write as many distinct representation of 720 where symbol 'abc' means a*b*c. Example - '###' = 3*3*3 = 9.",
"Write as many distinct composite numbers as you can."
];

var indexList = [0,1,2,3,4,5,6,7,8];
var value = 0;

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
}

function index0(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0;i<arr.length; i++){
		let p = parseInt(arr[i]);
		if(p === NaN)
			continue;
		if(isPrime(p))
			ansArr.add(p);
	}
	let len = ansArr.size;
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;

}

function index1(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let count = 0;
		let s = arr[i];
		for(let j=0; j< s.length; j++){
			if(s[j] === 'a' || s[j] === 'A' || s[j] === 'e' || s[j] === 'E' || s[j] === 'i')
				count++;
			if(s[j] === 'I' || s[j] === 'o' || s[j] === 'O' || s[j] === 'u' || s[j] === 'U')
				count++;
		}
		if(count === 2)
			ansArr.add(arr[i]);
	}

	let len = ansArr.size;
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2; 
}

function index2(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let curr = parseInt(arr[i]);
		if(curr === NaN)
			continue;
		if(curr % 7 === 0 && curr % 11 === 0 && curr % 6 === 0)
			ansArr.add(curr);
	}
	let len = ansArr.size;
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
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index4(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let curr = parseInt(arr[i]);
		if(curr === NaN)
			continue;
		if(curr % 11 === 7 && curr % 4 === 1)
			ansArr.add(curr);
	}
	let len = ansArr.size;
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index5(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0; i<arr.length; i++){
		let curr = parseInt(arr[i]);
		let p = curr;
		if(curr === NaN)
			continue;
		let sum = 0;
		while(curr !== 0){
			let rem = curr % 10;
			sum += (rem*rem)
			curr /= 10;
		}

		if(sum % 2 === 0)
			ansArr.add(p);
	}
	let len = ansArr.size;
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
				sum = sum * 8;
			else if(s[j] === '%')
				sum= sum * 5;
		}

		if(sum === 720)
			ansArr.add(arr[i]);
	}
	let len = ansArr.size;
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function index8(arr, currlevel, currScore, maxlen){
	let ansArr = new Set();
	for(let i=0;i<arr.length; i++){
		let p = parseInt(arr[i]);
		if(p === NaN)
			continue;
		if(!isPrime(p) && p > 1)
			ansArr.add(p);
	}
	let len = ansArr.size;
	ansArr.clear();
	return finalScore(currlevel, currScore, len) - (maxlen-len)*2;
}

function finalScore(currlevel, currScore, val){
		return Math.floor(currlevel*(val/100) + currScore*(val/100) + val*6);
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
