let title = document.getElementById('title');
let description = document.getElementById('description');
let element = document.getElementById('items');
let titles=[]
let n=0;
let ele=0;
const add =()=>{
    titles.push({id:++n,title:title.value,description:description.value});
    element.innerHTML='';
    for(let e of titles)
    {
    ele= document.createElement('div');
    ele.id='item';
    ele.style=" display: flex; gap:10px; justify-content: center; align-items: center; flex-direction: row; ";
    ele.innerHTML=`<p>${e.id} .</p> <h1>${e.title}</h1><p>${e.description}</p>`
    element.appendChild(ele)
    }
    title.value='';
    description.value='';
    

}