let title = document.getElementById('title');
let description = document.getElementById('description');
let element = document.getElementById('items');
let updateBtn = document.getElementById('update');
let editTitle = document.getElementById('editTitle');
let editDescription =document.getElementById('editDescription');
let adderBox = document.getElementsByClassName("adder")[0];
let editorBox = document.getElementsByClassName("editer")[0];

let datas=[]
let n=0;
let ele=0;

const edit =(obj)=>{
updateBtn.addEventListener('click',()=>{update(obj.id)});
editTitle.value=obj.title;
editDescription.value=obj.description;
adderBox.style="display:none;";
editorBox.style="display:block;"
}

const update =(id)=>{
let filtered = datas.filter(n=>n.id!=id);
filtered.push({id,title:editTitle.value,description:editDescription.value,status:"pending",clr:" rgb(225, 137, 50)"});
datas=filtered;
taskUpdater();
adderBox.style="display:block;";
editorBox.style="display:none;"
}

const deleted =(id)=>{
    let filtered = datas.filter(n=>n.id!=id);
    datas=filtered;
    taskUpdater();
}

const completed=(obj)=>{
let filtered = datas.filter(n=>n.id!=obj.id);
filtered.push({id:obj.id,title:obj.title,description:obj.description,status:"completed",clr:"green"});
datas=filtered;
taskUpdater();
}

const taskUpdater=()=>{
    element.innerHTML='';
    for(let e of datas)
    {
    ele= document.createElement('div');
    ele.id='item';
    ele.innerHTML=`
    
    <p>${e.id} .</p> 
    <h1>${e.title}</h1>
    <p>${e.description}</p>
    <p style="background-color: ${e.clr};" id="status">${e.status}</p>
    <div id="buttons${e.id}">
    <button id="edit" onclick="edit({id:${e.id},title:'${e.title}',description:'${e.description}'})">edit</button>
    <button id="delete" onclick="deleted(${e.id})">delete</button>
    <button id="complete" onclick="completed({id:${e.id},title:'${e.title}',description:'${e.description}'})">complete</button>
    </div>
    `
    element.appendChild(ele)
    }
}
const add =()=>{
    datas.push({id:++n,title:title.value,description:description.value,status:"pending",clr:" rgb(225, 137, 50)"});
    taskUpdater();
    title.value='';
    description.value='';
    

}