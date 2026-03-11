import React, { useEffect, useRef, useState } from "react";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross-svgrepo-com.svg"
import { useNavigate } from "react-router-dom";
import settings from "../assets/settings.svg";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";




const Chatpage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const messageendref  = useRef(null)

    useEffect(()=>{
      messageendref.current?.scrollIntoView({behaviour:"smooth"})
    },[messages])

const handlenavigate = ()=>{

  navigate("./Login")
}
const handlesignup = ()=>{
  navigate("./signup")
}
  const sendMessage = async () => {
    if(input.trim() === "") return
    const Usermsg = {text:input , sender:"user"};
    setMessages(prev => [...prev , Usermsg]);
    setInput("")

    try{
      const response = await fetch("http://localhost:3001/chat" ,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          messages:[...messages , Usermsg].map(m=>({
            role:m.sender === "user"? "user" :"assistant",
            content:m.text,
          }))
        })
      })
      const data = await response.json()
      setMessages(prev=>[...prev , {text:data.reply , sender:"bot"}])

    }catch(error){
      setMessages(prev=>[...prev ,{text:"something went wrong , try again " , sender:"bot"}])
    }


    
  };

  return (
    <div className="flex max-h-screen mt-2 ">
      {/* Hamburger Button */}
      <button
        className="lg:hidden p-4  absolute z-10"
        onClick={() => setOpen(!open)}
      >
        <img src={hamburger} style={{ width: 20 }} alt="" />
      </button>

      {/* Sidebar */}
      <div
        className={` w-64 p-3 bg-gray-200
        fixed lg:static top-0 left-0 h-screen
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 z-10 flex flex-col `}
      >
         <div className="flex justify-end mr-3 lg:hidden"><button onClick={()=> setOpen(false)}> <img src={cross} style={{width:20}} alt="" /> </button></div>
        
       <div className="border-gray-400 h-[500px] mt-5 p-2 rounded-md shadow-2xl bg-gray-100">
        <h1 className="text-2xl  font-bold border border-t-0 border-l-0 border-r-0">CHAT HISTORY</h1>
       </div>
       <div className="border-gray-400 mt-5 h-50 rounded-md shadow-2xl bg-gray-100">

        <div className="flex items-center   gap-2">
<div className="border rounded-full w-15 h-15 p-2 m-2"></div>
<div>Izqia</div>
<div className="flex justify-end  w-20"><button className="transition-all duration-100 ease-out scale-95  active:scale-105 cursor-pointer"><img src={settings} style={{width:30}} alt="" /></button></div>
</div>

<div className="flex justify-center items-center "><button className="bg-black text-white h-10 w-30 rounded-md mt-10 cursor-pointer transition-all duration-100 ease-in-out scale-110 active:scale-95 ">Go premium</button></div>

       </div>
      </div>

      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0  lg:hidden  "
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Main chat area */}
      <div className="border flex-1 flex flex-col p-2 relative">
        <div className="flex justify-end gap-5">
          <button onClick={handlesignup} className="text-white bg-black w-20 h-8 rounded-md cursor-pointer transition-all duration-100 ease-in-out scale-110 active:scale-95">signup</button>
                    <button onClick={ handlenavigate} className="text-white bg-black w-20 h-8 cursor-pointer rounded-md transition-all duration-100 ease-in-out scale-110 active:scale-95">Login</button>

          </div>


        {/* Messages */}
     <div className="flex-1 overflow-y-auto p-2 space-y-2">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`flex ${
        msg.sender === "user" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`p-2 shadow-2xl rounded-lg mt-10 ${
          msg.sender === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black font-light font-serif"
        }`}
      >
        {msg.sender === "bot" ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({node, ...props}) => <p className="mb-2 leading-relaxed" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2 space-y-1" {...props} />,
              li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
              code: ({node, inline, ...props}) =>
                inline
                  ? <code className="bg-gray-300 px-1 py-0.5 rounded text-sm font-mono" {...props} />
                  : <code className="block bg-gray-800 text-green-400 p-3 rounded-lg text-sm font-mono overflow-x-auto my-2" {...props} />,
              h1: ({node, ...props}) => <h1 className="text-xl font-bold mb-2" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-lg font-bold mb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="font-bold mb-1" {...props} />,
            }}
          >
            {msg.text}
          </ReactMarkdown>
        ) : (
          msg.text
        )}
      </div>
    </div>
  ))}
  <div ref={messageendref} />
</div>


        {/* Input */}
        <div className="p-3 flex justify-center items-center border rounded-md">
          <textarea
            value={input}
            className="p-2 w-full rounded-md focus:outline-none"
            placeholder="Lets chat"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey)
                //  e.preventDefault()
                 sendMessage()
            }}
          />
          <button
            onClick={sendMessage}
            className="border rounded-md w-20 h-10 bg-black text-white cursor-pointer font-bold ml-2 transition-all duration-100 ease-out scale-100 active:scale-95"
          >
            send
          </button>
        </div>

      </div>
    </div>
  );
};

export default Chatpage;