import React, { useEffect, useState } from 'react'

function Dice({setuser1,setuser2 ,user1,user2,ladders,snakes}) {
    const [diceValue,setDiceValue]=useState(0);

   
    const [turn,setTurn]=useState("user1");

   




    const rollDice=()=>{
        setDiceValue(Math.floor(Math.random()*6)+1);
        if(turn=="user1"){
          if(user1!=0){

          setuser1((prev)=>{
            if(ladders.hasOwnProperty(prev+diceValue)){
              return ladders[prev+diceValue];
            }
            else if(snakes.hasOwnProperty(prev+diceValue)){
              return snakes[prev+diceValue];
            }
            if((prev+diceValue)>100){
                return prev;
            }
            
            return prev+diceValue
          });
        }
        else if(diceValue==6){
          setuser1(1);
      }
        }
        else if(turn=="user2"){
          if(user2!=0){
            setuser2((prev)=>
            {
                if(ladders.hasOwnProperty(prev+diceValue)){
                    return ladders[prev+diceValue];
                }
                else if(snakes.hasOwnProperty(prev+diceValue)){
                    return snakes[prev+diceValue];
                }
                if((prev+diceValue)>100){
                    return prev;
                }
                return prev+diceValue
            })
        }
        else if(diceValue==6){
            setuser2(1);
        }
      }
    
      

     if(diceValue!=6){
        if(turn=="user1"){
             setTurn("user2");
            }
        else{
                setTurn("user1");
            }
        }
    }
  return (
    <div className=' flex flex-col justify-center items-center'>
         
        <button onClick={rollDice} className='block w-32 h-32 bg-yellow-800'>Roll Dice</button>
             <h1 className='  text-2xl font-bold'>Dice value : {diceValue}</h1>
      
    </div>
  )
}

export default Dice
