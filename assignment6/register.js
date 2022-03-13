window.onload = pageLoad;
function pageLoad()
{
    form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() 
{ 
    FirstName = document.forms["myForm"]["firstname"];
    LastName = document.forms["myForm"]["lastname"];
    gender = document.forms["myForm"]["gender"];
    bday = document.forms["myForm"]["bday"];
    email = document.forms["myForm"]["email"];
    user = document.forms["myForm"]["username"];
    pass = document.forms["myForm"]["password"];
    var require = document.getElementById("errormsg")
    var Result = true;
    require.innerHTML = "";
    if(bday.value == "")
    {
        require.innerHTML += "Birthday "
        Result = false;
    }
    if(LastName.value == "")
    {
        require.innerHTML += "Lastname "
        Result = false;
    }
    if(gender.value == "")
    {
        require.innerHTML += "Gender "
        Result = false;
    }
    if(email.value == "")
    {
        require.innerHTML += "Email "
        Result = false;
    }
    if(pass[0].value != pass[1].value)
    {
        require.innerHTML += "Wrong password "
        Result = false;
    }
    if(Result == false){
        return false;
    }
}