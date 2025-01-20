let num = document.getElementsByClassName("num");
let ip = document.querySelectorAll(".ip");
let ul = document.querySelector(".ul");
let check = document.querySelector(".check");
let winDiv = document.querySelector(".winDiv");
let again = document.querySelector(".again");
let none = document.getElementsByClassName("none");
let matchTxt = document.querySelector(".matchTxt");
let result = document.querySelector(".result");
let attempts = document.querySelector(".attempts");
let finalAttempts = document.querySelector(".finalAttempts");
let finalAttempsNum = document.querySelector(".finalAttempsNum");
let attemptsVar = 0;



let randomNum1 = Math.floor(Math.random() * 10);
let randomNum2 = Math.floor(Math.random() * 10);
let randomNum3 = Math.floor(Math.random() * 10);

num[0].innerHTML=randomNum1;
num[1].innerHTML=randomNum2;
num[2].innerHTML=randomNum3;

const li = document.createElement("li");

// check.addEventListener("click",

let ipErorTime;

function checked(){
    if(ip[0].value == "" || ip[1].value == "" || ip[2].value == ""){
        document.querySelector(".wrongDiv").style.display="block";
        clearTimeout(ipErorTime);
        ipErorTime = setTimeout(function(){
            document.querySelector(".wrongDiv").style.display="none";
        },2000)
    }else if(ip[0].value==num[0].innerHTML && ip[1].value==num[1].innerHTML && ip[2].value==num[2].innerHTML){
        // console.log("yes yes yes")
        const lii = document.createElement("li");
        attemptsVar++;
        finalAttempsNum.innerHTML=attemptsVar;
        lii.innerHTML+="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"All numbers are correct (you won)";
        const h1 = document.createElement("p");
        ul.appendChild(lii);
        h1.innerHTML ="(3)";
        h1.style.color="green";
        lii.appendChild(h1);
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
        const lii = document.createElement("li");
        attemptsVar++;
        lii.innerHTML+="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"Two correct numbers";
        const h1 = document.createElement("p");
        ul.appendChild(lii);
        h1.innerHTML ="(2)";
        h1.style.color="red";
        lii.appendChild(h1);
    }else if(ip[0].value!=num[0].innerHTML && ip[1].value==num[1].innerHTML && ip[2].value==num[2].innerHTML){
        // console.log("no yes yes")
        const lii = document.createElement("li");
        attemptsVar++;
        lii.innerHTML+="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"Two correct numbers";
        const h1 = document.createElement("p");
        ul.appendChild(lii);
        h1.innerHTML ="(2)";
        h1.style.color="red";
        lii.appendChild(h1);
    }else if(ip[0].value==num[0].innerHTML && ip[1].value!=num[1].innerHTML && ip[2].value==num[2].innerHTML){
        // console.log("yes no yes")
        const lii = document.createElement("li");
        attemptsVar++;
        lii.innerHTML+="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"Two correct numbers";
        ul.appendChild(lii);
        const h1 = document.createElement("p");
        h1.innerHTML ="(2)";
        h1.style.color="red";
        lii.appendChild(h1);
    }else if(ip[0].value!=num[0].innerHTML && ip[1].value!=num[1].innerHTML && ip[2].value==num[2].innerHTML){
        // console.log("no no yes")
        const lii = document.createElement("li");
        attemptsVar++;
        lii.innerHTML+="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"one number is correct";
        ul.appendChild(lii);
        const h1 = document.createElement("p");
        h1.innerHTML ="(1)";
        h1.style.color="red";
        lii.appendChild(h1);
    }else if(ip[0].value==num[0].innerHTML && ip[1].value!=num[1].innerHTML && ip[2].value!=num[2].innerHTML){
        // console.log("yes no no")
        const lii = document.createElement("li");
        attemptsVar++;
        lii.innerHTML+="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"one number is correct";
        ul.appendChild(lii);
        const h1 = document.createElement("p");
        h1.innerHTML ="(1)";
        h1.style.color="red";
        lii.appendChild(h1);
    }else if(ip[0].value!=num[0].innerHTML && ip[1].value==num[1].innerHTML && ip[2].value!=num[2].innerHTML){
        // console.log("no yes no")
        const lii = document.createElement("li");
        attemptsVar++;
        lii.innerHTML+="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"one number is correct";
        ul.appendChild(lii);
        const h1 = document.createElement("p");
        h1.innerHTML ="(1)";
        h1.style.color="red";
        lii.appendChild(h1);
    }else if(ip[0].value!=num[0].innerHTML && ip[1].value!=num[1].innerHTML && ip[2].value!=num[2].innerHTML){
        // console.log("no no no")
        const lii = document.createElement("li");
        attemptsVar++;
        const h1 = document.createElement("p");
        h1.innerHTML ="(0)";
        h1.style.color="red";
        lii.innerHTML+="("+ip[0].value+ip[1].value+ip[2].value+")"+"  "+"no correct number in the right place";
        lii.appendChild(h1);
        ul.appendChild(lii);
    }
    if (ip[0].value == num[1].innerHTML || ip[0].value == num[2].innerHTML || 
        ip[1].value == num[0].innerHTML || ip[1].value == num[2].innerHTML || 
        ip[2].value == num[0].innerHTML || ip[2].value == num[1].innerHTML) {
        attemptsVar++;
        const lii = document.createElement("li");
        lii.classList.add("Wrongli");
        lii.innerHTML += "(" + ip[0].value + ip[1].value + ip[2].value + ")" + " Some numbers are correct but in the wrong place";
        const h1 = document.createElement("p");
        h1.innerHTML = "(?)";
        h1.style.color = "orange";
        lii.style.border = "2px solid orange";
        lii.appendChild(h1);
        ul.appendChild(lii);
    }

    ip[0].focus();
    ip[0].value=" ";
    ip[1].value=" ";
    ip[2].value=" ";
    result.scrollBy(0,100);
}
ip[0].addEventListener("input",function(){
    ip[1].focus();
    if(ip[0].value >= 10){
        ip[0].value=" "
    }
})
ip[1].addEventListener("input",function(){
    ip[2].focus();
    if(ip[1].value >= 10){
        ip[1].value=" "
    }
})
ip[2].addEventListener("input",function(){
    if(ip[2].value >= 10){
        ip[2].value=" "
    }
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
    location.reload();
}

document.body.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checked();
    }
});

ip.forEach(function(e){
    e.onfocus=function(){
        ip.forEach(function(s){
            s.classList.remove("focus");
        })
        e.classList.add("focus");
    }
    e.onblur=function(){
        e.classList.remove("focus");
        e.placeholder="Guess";
        e.backgroundColor="red";
    }
    setInterval(function(){
        if(e.classList.contains("focus")){
            e.placeholder=" ";
        }else{
            e.placeholder="Guess";
        }
    },100)
})
setInterval(function(){
    attempts.innerHTML=attemptsVar;
    finalAttempsNum.innerHTML=attemptsVar;
},20)
