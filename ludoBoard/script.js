const board = document.getElementById("board");

for (let row = 0; row < 15; row++) {
  for (let col = 0; col < 15; col++) {

    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (row < 6 && col < 6) {
      if ((row < 5 && row > 0) && (col < 5 && col > 0)) {
      cell.style.backgroundColor = "white";
      cell.style.border="none";
    }
    else{
      cell.style.backgroundColor = "red";
      cell.style.border="none";
    }
    }

    else if (row < 6 && col > 8) {
      if ((row < 5 && row > 0)&&(col>9 & col<14) ){
      cell.style.backgroundColor = "white";
      cell.style.border="none";
    }else{
      cell.style.backgroundColor = "green";
      cell.style.border="none";}
    }
      
    else if (row > 8 && col < 6) {
      if ((row > 9 && row < 14) && (col>0 && col<5)) {
      cell.style.backgroundColor = "white";
      cell.style.border="none";
    }
    else{
      cell.style.backgroundColor = "blue";
      cell.style.border="none";}
    }

    else if (row > 8 && col > 8) {
      if ((row > 9 && row<14) && (col>9 && col<14)) {
      cell.style.backgroundColor = "white";
      cell.style.border="none";

    }else{
      cell.style.backgroundColor = "yellow";
      cell.style.border="none";}

    }
     
    else if((row == 7 &&(col>0 && col<8))||(row==6 && col==1)){
      cell.style.backgroundColor="red";
    }

      else if((row == 7 &&(col>8 && col<14))||(row==8 && col==13)){
      cell.style.backgroundColor="yellow";
    }

      else if((col== 7 &&(row>0 && row<8))||(col==8 && row==1)){
      cell.style.backgroundColor="green";
    }
       else if((col== 7 &&(row>8 && row<14))||(col==6 && row==13)){
      cell.style.backgroundColor="blue";
    }

    board.appendChild(cell);
  }
}

