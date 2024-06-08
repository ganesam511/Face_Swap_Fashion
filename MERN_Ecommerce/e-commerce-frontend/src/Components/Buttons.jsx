import React from 'react'

const Buttons = () => {
    const handleClick = async() => {
        const response = await fetch("http://127.0.0.1:5000/swap", {
            method: 'POST'
          })

          const data = await response.json();
          if(data){
            console.log(data);
          }else{
            console.log("error");
          }
    }
  return (
    <div>
    <div>Buttons</div>
    <button onClick={handleClick}>Run Python Script</button>
    </div>
  )
}

export default Buttons