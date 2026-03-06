import React, { useState } from 'react'

const Chatpage = () => {
  const [messages , setMessages] = useState([])
  const [input , setInput] = useState("")

  const sendMessage=()=>{
    if(input.trim() === "") return

    const newmessage = {
      text : input,
      sender : "user"
    };
    
    setMessages([...messages , newmessage])
    setInput("")
  }

  
  return (
    <div className='flex h-screen mt-2'>

      {/* Sidebar */}
      <div className='border w-50  ml-1 p-3'>
        this is the side bar <br />
        it will grow
      </div>

      {/* Main chat area */}
      <div className='border flex-1 flex flex-col p-2 relative'>

        {/* Messages area — grows to fill space */}
        <div className='flex-1 overflow-y-auto p-2 '>
          {messages.map((msg , index)=>(
            <div className='text-black bg-amber-100 p-2 font-extralight '>{msg.text}</div>
          ))}
        </div>

        {/* Textarea pinned to bottom */}
        <div className='p-3 flex justify-center items-center border rounded-md'>
          <textarea
          value={input}
            name="text"
            className=' p-2 w-full rounded-md'
            placeholder='Lets chat'
            id=""
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={(e)=>{
              if(e.key === 'Enter') sendMessage()
            }}
            
            
          />
          <button onClick={sendMessage} className='border rounded-md w-20 h-10 bg-black text-white font-bold'>send </button>
        </div>

      </div>
    </div>
  )
}

export default Chatpage