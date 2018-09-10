function validate(){
	if(document.registration.lastname.value == ""){
		$('#errname').text('Bạn chưa nhập thông tin!');
		$('#lastname').css('border', '1px solid red');
		return false;
	}else if(document.registration.lastname.value.length >= 30){
		$('#errname').text('Thông tin quá dài!');
		$('#lastname').css('border', '1px solid red');
		return false;
	}else{
		$('#errname').css('display', 'none');
		$('#lastname').css('border', '1px solid #b2b2b2');
	}


	if(document.registration.username.value == ""){
		$('#erruse').text('Bạn chưa nhập tên nguời dùng!');
		$('#username').css('border', '1px solid red');
		return false;
	}else if(document.registration.username.value.length >= 40){
		$('#erruse').text('Tên người dùng quá dài!');
		$('#username').css('border', '1px solid red');
		return false;
	}else{
		$('#erruse').css('display', 'none');
		$('#username').css('border', '1px solid #b2b2b2');
	}

	if(document.registration.password.value == ""){
		$('#errpass').text('Bạn chưa nhập mật khẩu!');
		$('#passwor').css('border', '1px solid red');
		return false;
	}else if(document.registration.password.value.length >= 30 || document.registration.password.value.length <= 6){
		$('#errpass').text('Mật khẩu bảo mật thấp!');
		$('#passwor').css('border', '1px solid red');
		return false;
	}else{
		$('#errpass').css('display', 'none');
		$('#passwor').css('border', '1px solid #b2b2b2');
	}


	if(document.registration.opassword.value == ""){
		$('#errpassw').text('Bạn chưa nhập mật khẩu!');
		$('#passwords').css('border', '1px solid red');
		return false;
	}else if(document.registration.opassword.value != document.registration.password.value){
		$('#errpassw').text('Mật khẩu không đúng!');
		return false;
	}else{
		$('#errpassw').css('display', 'none');
		$('#passwords').css('border', '1px solid #b2b2b2');
	}

	if(document.registration.birthday.value == ""){
		$('#errbir').text('Bạn chưa nhập ngày sinh!');
		return false;
	}else{
		$('#errbir').css('display', 'none');
	}

	if(document.registration.gender.value == ""){
		$('#errgen').text('Bạn chưa nhập giới tính!');
		return false;
	}else{
		$('#errgen').css('display', 'none');
	}

	if(document.registration.address.value == ""){
		$('#erradr').text('Bạn chưa nhập địa chỉ!');
		$('#adre').css('border', '1px solid red');
		return false;
	}else{
		$('#erradr').css('display', 'none');
		$('#adre').css('border', '1px solid #b2b2b2');
	}


	if(document.registration.sdt.value == ""){
		$('#errphone').text('Bạn chưa nhập số điện thoại!');
		$('#phone').css('border', '1px solid red');
		return false;
	}else if(document.registration.sdt.value.length > 11){
		$('#errphone').text('Số điện thoại không đúng!');
		$('#phone').css('border', '1px solid red');
		return false;
	}else{
		$('#errphone').css('display', 'none');
		$('#phone').css('border', '1px solid #b2b2b2');
	}
}