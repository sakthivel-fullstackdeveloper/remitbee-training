let element=""
let ico=""
let radioValues="";

let obj={rupe:"ico",rupe2:"ico2",rupe3:"ico3"}

const borderClrOn= "hsl(61, 73%, 39%)";
const bg= "hsl(61, 70%, 52%)";

let radioInterestElement  = document.getElementsByClassName('interest')[0];
let radioRepaymentElement = document.getElementsByClassName('repayment')[0];
let amountInput= document.getElementById('rupe');
let yearsInput = document.getElementById('rupe2');
let InterestInput = document.getElementById('rupe3');

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

if(!amountInputValue || !yearsInputValue || !InterestInputValue  || !radioValues){
    alert("please select all input field");
    return;
}

if(radioValues=="interest"){
   alert(((amountInputValue/100) * (InterestInputValue)) * yearsInputValue);}
else{
    alert(
        (((amountInputValue/100) * (InterestInputValue))* yearsInputValue)+ Number(amountInputValue));
}

amountInput.value=NaN;
yearsInput.value=NaN;
InterestInput.value=NaN;

}

const clearAll=()=>{
amountInput.value=NaN;
yearsInput.value=NaN;
InterestInput.value=NaN;
radioInterestElement.style=`
    border: 1px solid #01304c;
    background-color: #e4f4fd;`;
radioRepaymentElement.style=`
    border: 1px solid #01304c;
    background-color: #e4f4fd;`;
document.getElementById('interest').checked=false;
document.getElementById('repayment').checked=false;
radioValues="";

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


