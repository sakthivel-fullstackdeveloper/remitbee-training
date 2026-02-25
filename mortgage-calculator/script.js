let element=""
let ico=""
let obj={rupe:"ico",rupe2:"ico2",rupe3:"ico3"}
const borderClrOn= "hsl(61, 73%, 39%)";
const bg= "hsl(61, 70%, 52%)";
let radioInterestElement  = document.getElementsByClassName('interest')[0];
let radioRepaymentElement = document.getElementsByClassName('repayment')[0];

const turnInterest=()=>{
    radioInterestElement.style=`
    border: 1px solid ${borderClrOn};
    background-color: ${bg};`
    radioRepaymentElement.style=`
    border: 1px solid #01304c;
    background-color: #e4f4fd;`;
}

const turnRepayment = ()=>{
    radioInterestElement.style=`
     border: 1px solid #01304c;
    background-color: #e4f4fd;`;
    radioRepaymentElement.style=`
    border: 1px solid ${borderClrOn};
    background-color: ${bg};`;
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


