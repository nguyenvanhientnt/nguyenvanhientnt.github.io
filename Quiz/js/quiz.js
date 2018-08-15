
let quiz1 = {
	question:"Những loài thú nào sau đây ăn cơm:",
	choiceA:"A: sư tử",
	choiceB:"B: cọp",
	choiceC:"C: hà mã",
	choiceD:"D: voi",
	answer:"A: sư tử"
};
let quiz2 = {
	question:"Cái gì 1 tháng có 1 lần, 1 ngày là hết?",
	choiceA:"A: chịu",
	choiceB:"B: máu",
	choiceC:"C: trăng rằm",
	choiceD:"D: lương",
	answer:"C: trăng rằm"
};
let quiz3 = {
	question:"tên loại thức uống nào vừa có sắt vừa có canxi?",
	choiceA:"A: cafe",
	choiceB:"B: trà sữa chân trâu trung quốc",
	choiceC:"C: pesi",
	choiceD:"D: coca cola",
	answer:"A: cafe"
};
let quiz4 = {
	question:"Có 5 viên kẹo, thằng bạn xin 2 viên hỏi còn mấy viên ?",
	choiceA:"A: 2",
	choiceB:"B: 1",
	choiceC:"C: 3",
	choiceD:"D: 5",
	answer:"D: 5"
};
let quiz5 = {
	question:"Hai con nhím sẽ nói gì khi hôn nhau ?",
	choiceA:"A: đang hôn thì nói được gì",
	choiceB:"B: ui za",
	choiceC:"C: nữa đi",
	choiceD:"D: thích quá",
	answer:"B: ui za"
};

const res = [quiz1,quiz2,quiz3,quiz4,quiz5];
let number = 0;
let score = 0;
const quest = document.getElementById('quizx');
const choica = document.getElementById('dapanA');
const choicb = document.getElementById('dapanB');
const choicc = document.getElementById('dapanC');
const choicd = document.getElementById('dapanD');
const dapan = document.getElementById('answer');
const container = document.getElementById('container');
const result = document.getElementById('result');
const scr = document.getElementById('scor');
const retry = document.getElementById('retry');

function random(button){
	const dap = res[number].answer;
	// console.log(dap);
	const check = button.value;
	// console.log(check);
	if(check == dap){
		score+=1;
		console.log(score);
	}
	number+=1;
	if(number == res.length && score != 5){
		container.style.display = "none";
		result.style.display = 'block';
		scr.textContent = "Điểm của bạn : " + score;
	}
	if(number == res.length && score == 5){
		window.location.href = "../html/congratulations.html";
	}
	chuyen(number);
}
function chuyen(number){
	quest.innerHTML = res[number].question;
	choica.innerHTML = res[number].choiceA;
	choicb.innerHTML = res[number].choiceB;
	choicc.innerHTML = res[number].choiceC;
	choicd.innerHTML = res[number].choiceD;
	quest.value = res[number].question;
	choica.value = res[number].choiceA;
	choicb.value = res[number].choiceB;
	choicc.value = res[number].choiceC;
	choicd.value = res[number].choiceD;
}
chuyen(number);
function comeback(input){
	location.reload();
}
comeback(input);