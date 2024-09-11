import React, { useEffect } from 'react'

function Ui({user1,user2,snakes,ladders}) {



   
    const board=[];
    let k=100;
    for(let i=0;i<10;i++){
        let row=[];
        for(let j=0;j<10;j++){
            row.push(k);
            k--;
        }
        if(i&1==1){
            row.reverse();
        }
        board.push(row);
    }
    console.log(board)

Object.keys(ladders).map((key)=>{
    let row=10-Math.ceil(key/10);
    let col=key%10;
   
    board[row][col]=`L${ladders[key]}`;

})

Object.keys(snakes).map((key)=>{
    let row=10-Math.ceil(key/10);
    let col=key%10;
    board[row][col]=`S${snakes[key]}`;
})


  return (
    <div>
      <div className="uiBoard flex flex-col">
            {board.map((row,index)=>{
                return(
                    <div className="flex flex-row bg-orange-500">
                        {row.map((cell)=>{
                            return(
                                <div className="cell w-20 h-14 border-2 text-sm text-center bg-gray-50">
                                    {cell}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
      </div>
    </div>
  )
}

export default Ui
