let element=""
let ico=""
let obj={rupe:"ico",rupe2:"ico2",rupe3:"ico3"}

const changer =(ele,icone)=>{
ele.addEventListener('focus',()=>{icone.style="background-color: hsl(61, 70%, 52%);"});
ele.addEventListener('blur',()=>{icone.style="background-color: #e4f4fd;"})
}

for(let i in obj){
element = document.getElementById(i);
ico = document.getElementById(obj[i]);
console.log(i,obj[i])
changer(element,ico);
}
