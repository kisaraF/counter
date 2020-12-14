let displayArea = document.querySelector('.displayHere');
let increaseBtn = document.querySelectorAll('#increase');

let start = 0;
displayArea.innerHTML = start;

for(let i = 0; i < increaseBtn.length; i++){
	increaseBtn[i].addEventListener('click' , increase);
	function increase(){	
		if(increaseBtn[i].classList.contains('decrease')){
			start--;
			displayArea.innerHTML = start;
		}else{
			start++;
			displayArea.innerHTML = start;
		}		
	}
}