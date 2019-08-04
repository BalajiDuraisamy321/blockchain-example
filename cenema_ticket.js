var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  function myFunc() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  var i;   
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
var a=0;
var b="";
var c="";
var flag = 0;

function myFunction(){
  a = parseInt(document.getElementById("numberoftickets").value);
  
  console.log(a);
  b = document.getElementById("moviename").value;
  
  console.log(b);
  c = document.getElementsByClassName("text-success");
  for(var i=0;i<c.length;i+=3){
   if(c[i].textContent == b){
       flag=1;
       break;
    }
   else{
        flag=0;
   }
  }
  if(flag==1){
    console.log(c[i].textContent);
    console.log(parseInt(c[i+1].textContent));
    var e = parseInt(c[i+1].textContent);
    console.log(parseInt(c[i+2].textContent));
    var f = parseInt(c[i+2].textContent);
    if((f>=a)&&(f!=0)&&(f>0)){
    var d ;
    d = c[i].textContent + "      " + e +" * "+ a +" = "+ (e*a);
    var para = document.createElement("p");
     var node = document.createTextNode("MOVIE TITTLE         :" + c[i].textContent);
     para.appendChild(node);
     var element = document.getElementById("result");
     element.appendChild(para);
     var meta = document.createElement("p");
     var node = document.createTextNode("  ");
     meta.appendChild(node);
     var element = document.getElementById("result");
     element.appendChild(meta);
     var meta = document.createElement("p");
     var node = document.createTextNode("MOVE PRICE            :" + e + "  Rs");
     meta.appendChild(node);
     var element = document.getElementById("result");
     element.appendChild(meta);
     var meta = document.createElement("p");
     var node = document.createTextNode("  ");
     meta.appendChild(node);
     var element = document.getElementById("result");
     element.appendChild(meta);
     var meta = document.createElement("p");
     var node = document.createTextNode("TOTAL AMOUNT         " + e + "Rs" +" * "+ a +" = "+ (e*a) + "Rs");
     meta.appendChild(node);
     var element = document.getElementById("result");
     element.appendChild(meta);
     var meta = document.createElement("p");
     var node = document.createTextNode("  ");
     meta.appendChild(node);
     var element = document.getElementById("result");
     element.appendChild(meta);
     var meta = document.createElement("p");
     var node = document.createTextNode("THANK YOU FOR PURCHASING!!! AND HAVE A NICE DAY.");
     meta.appendChild(node);
     var element = document.getElementById("result");
     element.appendChild(meta);
     
    
    
    
    var g = f-a;
    document.getElementsByClassName("text-success")[i+2].innerHTML=g;
    }
    else if((a>f)&&(f!=0)&&(f>0))
    {
     document.getElementById("demo").innerHTML = "only  " + f + "  number of tickets are avilable,if you want to buy under  " + f + " ,refresh the page then proceed again.thank you"; 
    }
    else{
     document.getElementById("demo").innerHTML = "Sorry, Tickets of the movie "+c[i].textContent+" are NOT AVAILABLE";
    }
    
  }
  else{
    document.getElementById("demo").innerHTML = "ENTER AVAILABLE MOVIE NAME ONLY";
  }
  

}
var acc = document.getElementsByClassName("accordion");


  var i;
 for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
 }
 function myFunc() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

           
    