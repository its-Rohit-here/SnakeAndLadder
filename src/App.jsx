import { useState } from 'react'
import './App.css'
import Dice from './components/Dice'
import Ui from './components/Ui'
import { useEffect } from 'react'


function App() {
  const ladders={7:38,11:43,40:78,65:93};
  const snakes={25:3,49:17,69:24,98:31,87:41};
  const [user1,setuser1]=useState(0);
  const [user2,setuser2]=useState(0);


  useEffect(()=>{

     
          if(user1==100){
              alert("winner is user1")
         
      }
    
          if(user2==100){
            alert("winner is user2")
         
      }
  
  },[user1,user2])





  return (
    <div className='flex flex-row bg-cyan-200 w-screen h-screen gap-10 p-6'>
   <div className='flex flex-col  '> 
    <h1 className='text-3xl'>Snake and Ladder</h1>
    <Dice setuser1={setuser1} setuser2={setuser2} user1={user1} user2={user2} ladders={ladders} snakes={snakes}/>

    <h1 className='mt-10'>user1 position : <span>{user1}</span> </h1>
    <h1>user2 position : <span>{user2}</span> </h1>
   
   
   </div>
    <Ui user1={user1} user2={user2} snakes={snakes} ladders={ladders}/>
    </div>
    
  )
}

export default App
