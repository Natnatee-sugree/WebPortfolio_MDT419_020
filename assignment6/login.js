var form;
window.onload = loginLoad;
function loginLoad()
{
	form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}
function checkLogin()
{
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	const password = urlParams.get('password')
	
	var nUsername = document.forms["myLogin"]["username"].value;
	var nPassword = document.forms["myLogin"]["password"].value;

	var errormsg = ""
	if(nUsername != username)
	{
		errormsg += "Wrong Username"
		alert(errormsg);
		return false;
	}
	if(nPassword != password)
	{
		errormsg += "Wrong Password"
		alert(errormsg);
		return false;
	}
	alert("Login Complate")
}

			