var result = document.getElementById('result');
function display(input){
	result.value += input.value;
}

function sb(){//nút c
	result.value=result.value.substr(0,result.value.length-1);
}

function percentage(){//nút phần trăm
	if(result.value == 0){
		result.value= result.value + '';
	}else{
		result.value=eval(result.value/100);
	}
}

function squareroot(){//nút căn bậc 2
	if(result.value == 0){
		result.value= result.value + '';
	}else{
		result.value=eval(Math.sqrt(result.value));
	}
}

function reset() {//nút del
	result.value = "";
}

function minus(){//nút âm
	if(result.value==0){
		result.value= result.value + '';
	}else{
		result.value=eval((-1)*result.value);
	}
}

function factorial(){//nút giai thừa
	let res = result.value;
    for (let i = res-1; i>=1; i--) {
      	res =res*i;   
  	}
  	result.value = res;
}


function square(){//nút bình phương
	if(result.value==0){
		result.value= result.value + '';
	}else{
		result.value=eval(Math.pow(result.value,2));
	}
}


function resul(){//nút =
	if(result.value != ''){
		result.value=eval(result.value);
	}else if(result.value == ''){
		result.value= result.value + '';
	}
}
