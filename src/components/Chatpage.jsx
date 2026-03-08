import React, { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross-svgrepo-com.svg"
import { useNavigate } from "react-router-dom";




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
        className={`border w-64 p-3 bg-white
        fixed lg:static top-0 left-0 h-screen
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 z-10 flex flex-col`}
      >
         <div className="flex justify-end mr-3 lg:hidden"><button onClick={()=> setOpen(false)}> <img src={cross} style={{width:20}} alt="" /> </button></div>
        this is the side bar <br />
        it will grow
       
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
          <button onClick={handlesignup} className="text-white bg-black w-20 h-8 rounded-md">signup</button>
                    <button onClick={ handlenavigate} className="text-white bg-black w-20 h-8 rounded-md">Login</button>

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
            className="p-2 w-full rounded-md"
            placeholder="Lets chat"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey)
                //  e.preventDefault()
                 sendMessage();
            }}
          />
          <button
            onClick={sendMessage}
            className="border rounded-md w-20 h-10 bg-black text-white font-bold ml-2"
          >
            send
          </button>
        </div>

      </div>
    </div>
  );
};

export default Chatpage;