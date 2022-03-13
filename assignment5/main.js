var topictext;
var commenttext1;
var commenttext2;
var textpost;

window.onload = setElement;
function setElement()
{
topictext = document.getElementById("topic1")
commenttext1= document.getElementById("comment1");
commenttext2= document.getElementById("comment2");
}
function postFunction()
{
textpost = document.getElementById("text1").value;
if(topictext.innerText ==""){
    topictext.innerText=textpost;
}
else if(commenttext1.innerText == ""){
    commenttext1.innerText =textpost;
}
else if(commenttext2.innerText == ""){
    commenttext2.innerText=textpost;
}
document.getElementById("text1").value="";
}
function clearFunction(){
    topictext.innerText="";
    commenttext1.innerText="";
    commenttext2.innerText="";
}
