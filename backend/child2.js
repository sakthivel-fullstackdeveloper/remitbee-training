const mine =()=>{
console.log()
console.log("Exported Parent execution");
console.log()

const start =Number((Math.random()*100).toFixed(0));
const end = start+10;
for(let i = start; i<=end;i++){
    console.log("id : "+process.pid+ " parent fun : "+i)
}
}
module.exports =mine;