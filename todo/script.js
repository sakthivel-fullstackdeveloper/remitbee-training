let title = document.getElementById('title');
let description = document.getElementById('description');
let element = document.getElementById('items');
let titles=[]
let n=0;
let ele=0;
const edit =(obj)=>{
let e = document.getElementsByClassName("adder")[0];
let updateBtn = document.getElementById('update');
let editTitle = document.getElementById('editTitle');
let editDescription =document.getElementById('editDescription');
updateBtn.addEventListener('click',update(obj));
editTitle.value=obj.title;
editDescription.value=obj.description;
e.innerHTML=''
// console.log(obj);
}
const update =(obj)=>{
console.log(obj);
}


const taskUpdater=()=>{
    element.innerHTML='';
    for(let e of titles)
    {
    ele= document.createElement('div');
    ele.id='item';
    ele.innerHTML=`
    
    <p>${e.id} .</p> 
    <h1>${e.title}</h1>
    <p>${e.description}</p>
    <button onclick="edit({id:${e.id},title:'${e.title}',description:'${e.description}'})">edit</button>
    `
    element.appendChild(ele)
    }
}
const add =()=>{
    titles.push({id:++n,title:title.value,description:description.value});
    taskUpdater();
    title.value='';
    description.value='';
    

}