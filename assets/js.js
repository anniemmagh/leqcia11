
for ( var i=0; i<people.length; i++) {
    console.log(people [i]);
}
for (var i=people.length -1; i >=0;i--) {
    console.log(people[i]);
zeda funqciis shebrunebuliaa

for (var index in people){
    document.write(people[index] +"</br>");
}
var people=["tom","alice","bob","sam"];
var index=0;
while (index < people.length){
    console.log(people[index]);
    index++;
}
var x=1;
do {
    document.write(x*x + "</br>");
    x++
}
while (x<=10); /// amravlebs sanam x ar ava 10-mde
var numbers=[1,2,3,4,5,6,7,8,9,10];
for( var i=0; i<numbers.lenght; i++){
    if (numbers[i]>10)
    break;
document.write(numbers[i] + "</br>");
}
var arr=[2,4,5,9,8,10,16,33];
var result=arr.filter((n)=>n%2 ==0)
console.log(result);

function  display (){
    document.write("Hello")
}
display();

var display = function(){
    document.write("hello")
}
display();
function goodmorning(){
    document.write("goodmorning");
}
function goodafternoon (){
    document.write("goodafternoon");
}
var message= goodmorning;
message();
message=goodafternoon;
message();
function display (x){
    //funqciis gansazgvra
    var z=x*x;
    document.write(x = "</br>" + z);
}
display(5); //funqciiis gamodzaxeba

var message=display;
message(5);

function display (x,y) {
    if(y===undefined) y=x;
    var z=x*y;
    document.write (x + "</br>"+ y + "</br>"+z);

}
display(6);
var y=5;
var z=square (y);
document.write (y + "</br>" +z);
function square (x) {
    return x=x;
}
function display (x, func) {
    var message = func (x);
    document.write(message);
}
function welcomeMessage(time) {
    if (time<12)
    return "good morning";
    else if (time<18)
    return "good afternoon";
    else
    return "good evening";
}
display ( 10, welcomeMessage);
