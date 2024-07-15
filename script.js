let num = document.getElementsByClassName("num");
let ip = document.getElementsByClassName("ip");
let ul = document.querySelector(".ul");
let check = document.querySelector(".check");
let winDiv = document.querySelector(".winDiv");
let again = document.querySelector(".again");
let none = document.getElementsByClassName("none");
let matchTxt = document.querySelector(".matchTxt");




let randomNum1 = Math.floor(Math.random() * 10);
let randomNum2 = Math.floor(Math.random() * 10);
let randomNum3 = Math.floor(Math.random() * 10);

num[0].innerHTML=randomNum1;
num[1].innerHTML=randomNum2;
num[2].innerHTML=randomNum3;



check.addEventListener("click",function(){
    if(ip[0].value==num[0].innerHTML && ip[1].value==num[1].innerHTML && ip[2].value==num[2].innerHTML){
        // console.log("yes yes yes")
        const li = document.createElement("li");
        li.innerHTML="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"There is All numbers are correct (you won)";
        const h1 = document.createElement("p");
        ul.appendChild(li);
        h1.innerHTML ="(3)";
        h1.style.color="green";
        li.appendChild(h1);
        winDiv.style.top="-10%";
        num[0].style.display="block";
        num[1].style.display="block";
        num[2].style.display="block";
        none[0].style.display="none";
        none[1].style.display="none";
        none[2].style.display="none";
        matchTxt.innerHTML=num[0].innerHTML+num[1].innerHTML+num[2].innerHTML;
    }else if(ip[0].value==num[0].innerHTML && ip[1].value==num[1].innerHTML && ip[2].value!=num[2].innerHTML){
        // console.log("yes yes no")
        const li = document.createElement("li");
        li.innerHTML="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"There is Two correct numbers";
        const h1 = document.createElement("p");
        ul.appendChild(li);
        h1.innerHTML ="(2)";
        h1.style.color="red";
        li.appendChild(h1);
    }else if(ip[0].value!=num[0].innerHTML && ip[1].value==num[1].innerHTML && ip[2].value==num[2].innerHTML){
        // console.log("no yes yes")
        const li = document.createElement("li");
        li.innerHTML="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"There is Two correct numbers";
        const h1 = document.createElement("p");
        ul.appendChild(li);
        h1.innerHTML ="(2)";
        h1.style.color="red";
        li.appendChild(h1);
    }else if(ip[0].value==num[0].innerHTML && ip[1].value!=num[1].innerHTML && ip[2].value==num[2].innerHTML){
        // console.log("yes no yes")
        const li = document.createElement("li");
        li.innerHTML="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"There is Two correct numbers";
        ul.appendChild(li);
        const h1 = document.createElement("p");
        h1.innerHTML ="(2)";
        h1.style.color="red";
        li.appendChild(h1);
    }else if(ip[0].value!=num[0].innerHTML && ip[1].value!=num[1].innerHTML && ip[2].value==num[2].innerHTML){
        // console.log("no no yes")
        const li = document.createElement("li");
        li.innerHTML="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"There is one number is correct";
        ul.appendChild(li);
        const h1 = document.createElement("p");
        h1.innerHTML ="(1)";
        h1.style.color="red";
        li.appendChild(h1);
    }else if(ip[0].value==num[0].innerHTML && ip[1].value!=num[1].innerHTML && ip[2].value!=num[2].innerHTML){
        // console.log("yes no no")
        const li = document.createElement("li");
        li.innerHTML="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"There is one number is correct";
        ul.appendChild(li);
        const h1 = document.createElement("p");
        h1.innerHTML ="(1)";
        h1.style.color="red";
        li.appendChild(h1);
    }else if(ip[0].value!=num[0].innerHTML && ip[1].value==num[1].innerHTML && ip[2].value!=num[2].innerHTML){
        // console.log("no yes no")
        const li = document.createElement("li");
        li.innerHTML="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"There is one number is correct";
        ul.appendChild(li);
        const h1 = document.createElement("p");
        h1.innerHTML ="(1)";
        h1.style.color="red";
        li.appendChild(h1);
    }else if(ip[0].value!=num[0].innerHTML && ip[1].value!=num[1].innerHTML && ip[2].value!=num[2].innerHTML){
        // console.log("no no no")
        const li = document.createElement("li");
        const h1 = document.createElement("p");
        h1.innerHTML ="(0)";
        h1.style.color="red";
        li.innerHTML="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"There is no correct number";
        li.appendChild(h1);
        ul.appendChild(li);
    }
    ip[0].focus();
    ip[0].value=" ";
    ip[1].value=" ";
    ip[2].value=" ";
})
ip[0].addEventListener("input",function(){
    ip[1].focus();
})
ip[1].addEventListener("input",function(){
    ip[2].focus();
})
window.onload=function(){
    ip[0].focus();
}
again.onclick=function(){
    winDiv.style.top="-110%";
    let randomNum1 = Math.floor(Math.random() * 10);
    let randomNum2 = Math.floor(Math.random() * 10);
    let randomNum3 = Math.floor(Math.random() * 10);
    num[0].innerHTML=randomNum1;
    num[1].innerHTML=randomNum2;
    num[2].innerHTML=randomNum3;
    ip[0].focus();
    ul.innerHTML=' ';
    none[0].style.display="block";
    none[1].style.display="block";
    none[2].style.display="block";
    num[0].style.display="none";
    num[1].style.display="none";
    num[2].style.display="none";
}