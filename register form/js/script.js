
function GetURLParameter(param){
	let pageurl = window.location.search.substring(1);
	
	let uri = decodeURIComponent(pageurl);//chuyen ky tu dac biet
	let haki = uri.replace(/\+/g, ' ');
	let vari = haki.split('&');//cắt bỏ &
	for (let i = 0; i < vari.length; i++) {
        let parname = vari[i].split('=');//cắt bỏ =
        if (parname[0] == param) {
            return parname[1];
        }

    }
}
let birthday = GetURLParameter('birthday');
let name = GetURLParameter('name');
let username = GetURLParameter('username');
let password = GetURLParameter('password');
let address = GetURLParameter('address');
let phone = GetURLParameter('sdt');
let gender = GetURLParameter('gender');
$('#lastname').text(name);
$('#usernames').text(username);
$('#passwords').text(password);
$('#sexs').text(gender);
$('#aress').text(address);
$('#phones').text(phone);
$('#birthdays').text(birthday);

