let element=""
let ico=""
let radioValues="";
let value = 0;
let resulted = document.getElementsByClassName('resulted')[0];
let started = document.getElementsByClassName('started')[0];
let obj={rupe:"ico",rupe2:"ico2",rupe3:"ico3"}
started.style="display:flex;"
resulted.style="display:none;"

const borderClrOn= "hsl(61, 73%, 39%)";
const bg= "hsl(61, 70%, 52%)";

let radioInterestElement  = document.getElementsByClassName('interest')[0];
let radioRepaymentElement = document.getElementsByClassName('repayment')[0];
let amountInput= document.getElementById('rupe');
let yearsInput = document.getElementById('rupe2');
let InterestInput = document.getElementById('rupe3');
let total = document.getElementById('total');
let num = document.getElementById('num');


const turnInterest=()=>{
    radioInterestElement.style=`
    border: 1px solid ${borderClrOn};
    background-color: ${bg};`
    radioRepaymentElement.style=`
    border: 1px solid #01304c;
    background-color: #e4f4fd;`;
    radioValues="interest"
}

const turnRepayment = ()=>{
    radioInterestElement.style=`
    border: 1px solid #01304c;
    background-color: #e4f4fd;`;
    radioRepaymentElement.style=`
    border: 1px solid ${borderClrOn};
    background-color: ${bg};`;
    radioValues="repayment"
}

const calculate=()=>{
let amountInputValue= amountInput.value;
let yearsInputValue = yearsInput.value;
let InterestInputValue = InterestInput.value;
let interest = (amountInputValue /100) * InterestInputValue;

if(!amountInputValue || !yearsInputValue || !InterestInputValue  || !radioValues){
    alert("please select all input field");
    return;
}

if(radioValues=="interest"){
   value= (interest/ (Number(yearsInputValue) * 12)).toFixed(2);
}
else{
    value=((Number(amountInputValue))/(Number(yearsInputValue)*12)).toFixed(2);
}

total.innerText = Number(amountInputValue)+interest;
started.style="display:none;"
resulted.style="display:flex;"
num.innerText=value;
amountInput.value='';
yearsInput.value='';
InterestInput.value='';

}

const clearAll=()=>{
amountInput.value='';
yearsInput.value='';
InterestInput.value='';
radioInterestElement.style=`
    border: 1px solid #01304c;
    background-color: #e4f4fd;`;
radioRepaymentElement.style=`
    border: 1px solid #01304c;
    background-color: #e4f4fd;`;
document.getElementById('interest').checked=false;
document.getElementById('repayment').checked=false;
radioValues="";
started.style="display:flex;"
resulted.style="display:none;"

}

const changer =(ele,icone)=>{
ele.addEventListener('focus',()=>{
    icone.style=`
    background-color:${bg};
    border-color:${borderClrOn} !important;
    `});
ele.addEventListener('blur',()=>{icone.style="background-color: #e4f4fd;"})
}

for(let i in obj){
element = document.getElementById(i);
ico = document.getElementById(obj[i]);
console.log(i,obj[i])
changer(element,ico);
}
console.log(started);
console.log(resulted);


