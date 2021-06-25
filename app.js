//Selecting elements
let display= document.getElementById('display');
let increase= document.getElementById('increase');
let decrease= document.getElementById('decrease');
let zero= document.getElementById('def');

let start= 0;
display.innerHTML= start;

let addUp= () => {
	start++
	display.innerHTML=start;
}

let addDown= () =>{
	if(start<=0 ){
		alert("Cannot count below than 0")
	}else{
		start--
		display.innerHTML= start;
	}	
}

let  defaultThis= () => {
	start= 0;
	display.innerHTML= start;
}
 
increase.addEventListener('click', addUp);
decrease.addEventListener('click', addDown);
zero.addEventListener('click', defaultThis);