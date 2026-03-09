import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross-svgrepo-com.svg"
import { useNavigate } from "react-router-dom";
import settings from "../assets/settings.svg"




const Chatpage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
    const navigate = useNavigate()

const handlenavigate = ()=>{

  navigate("./Login")
}
const handlesignup = ()=>{
  navigate("./signup")
}
  const sendMessage = () => {
    if (input.trim() === "") return;

    const newmessage = {
      text: input,
      sender: "user",
    };


    setMessages([...messages, newmessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = {
        text :"this is dumy response ",
        sender : "bot"
      };
      setMessages((prev)=>[...prev , botMessage])
      // setMessages([...messages , botMessage])
    }, 800);
  };

  return (
    <div className="flex h-screen mt-2">
      {/* Hamburger Button */}
      <button
        className="lg:hidden p-4  absolute z-10"
        onClick={() => setOpen(!open)}
      >
        <img src={hamburger} style={{ width: 20 }} alt="" />
      </button>

      {/* Sidebar */}
      <div
        className={`border w-64 p-3 bg-gray-200
        fixed lg:static top-0 left-0 h-screen
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 z-10 flex flex-col `}
      >
         <div className="flex justify-end mr-3 lg:hidden"><button onClick={()=> setOpen(false)}> <img src={cross} style={{width:20}} alt="" /> </button></div>
        
       <div className="border h-[500px] mt-5 p-2 rounded-md shadow-2xl bg-gray-100">
        <h1 className="text-2xl  font-bold border border-t-0 border-l-0 border-r-0">CHAT HISTORY</h1>
       </div>
       <div className="border mt-5 h-50 rounded-md shadow-2xl bg-gray-100">

        <div className="flex items-center gap-2">
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
        className={`p-2 rounded-lg max-w-xs ${
          msg.sender === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {msg.text}
      </div>
    </div>
  ))}
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