document.querySelector("form").addEventListener("submit",myfunction);


let infor=document.querySelector("form")


function myfunction(event){
    event.preventDefault()
let naam=document.querySelector("#name").value;
let employ=document.querySelector("#employeeID").value;
let depart=document.querySelector("#department").value;
let exp =document.querySelector("#exp").value;
let emai=document.querySelector("#email").value;
let mobi=document.querySelector("#mbl").value;


let tr1=document.createElement("tr");
let td1=document.createElement("td");
td1.textContent=naam;
let td2=document.createElement("td");
td2.textContent=employ;
let td3=document.createElement("td");
td3.innerText=depart;
let td4=document.createElement("td");
td4.innerText=exp
let td5=document.createElement("td");
td5.innerText=emai;
let td6=document.createElement("td");
td6.innerText=mobi;
let td7=document.createElement("td");
if(exp>5)
{
    td7.innerText="Senior"
}
else if(exp>2 && exp<5)
{
    td7.innerText="Junior"
}
else if(exp<2)
{
    td7.innerText="Fresher"   
}

let td8=document.createElement("td");
td8.innerText="DELETE";
td8.style.color="red";
td8.addEventListener("click",deletefunction)

console.log(td1,td2,td3,td4,td5,td5,td6,td7,td8)
tr1.append(td1,td2,td3,td4,td5,td5,td6,td7,td8)
document.querySelector("tbody").append(tr1)

}


function deletefunction(event){
event.target.parentNode.remove()
}