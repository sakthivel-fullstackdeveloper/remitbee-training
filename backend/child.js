console.log()
console.log("Fork child execution");
console.log()
const start =Number((Math.random()*100).toFixed(0));
const end = start+10;
for(let i = start; i<=end;i++){
console.log("id : "+process.pid+ " child : "+i)
}
