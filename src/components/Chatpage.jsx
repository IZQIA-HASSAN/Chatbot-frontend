import React from 'react'

const Chatpage = () => {
  return (
    <>     
    <div className='flex  mt-2'>
    <div className='border w-80 h-[760px] ml-2 p-3  '>
        this is the side bar <br />
        it will grow
     </div>
       
        <div className='border w-[500px] h-[760px] md:w-full   p-2'>
          
                <textarea name="text" className='border p-2 w-[600px] rounded-md absolute bottom-0 mb-5 ml-10 max-lg:w-[400px]  max-sm:w-[300px]   ' placeholder='Lets chat'  id=""></textarea>
            
        </div>
    </div>
    </>

    
  )
}

export default Chatpage