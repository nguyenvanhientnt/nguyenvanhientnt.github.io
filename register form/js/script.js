
function decodeURIComponent(param){
	let pageurl = window.location.search.substring(1);
	let vari = pageurl.split('&');
	for (var i = 0; i < vari.length; i++) {
        var parname = vari[i].split('=');
        if (parname[0] == param) {
            return parname[1];
        }
    }
}
let name = decodeURIComponent('name');
let username = decodeURIComponent('username');
let password = decodeURIComponent('password');
document.write(name);
console.log(username);
console.log(name);
console.log(password)