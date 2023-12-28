

import { useState } from 'react'
import './LightBulb.css'





const LightHome =()=> {

   

    const [myButton , setButton] = useState ("true")
    const [color , setcolor] = useState ("")
    const [color_background , setcolor_background] = useState ("")
    const [standColor, setstandcolor]= useState ("")
   


     const setButton_on =()=> (

       setButton ("true"),
       setcolor ("white"),
       setcolor_background ("aqua"),
       setstandcolor ("chocolate")
     )

     const setButton_off =()=> (
    setButton ("false"),
    setcolor ("black"),
    setcolor_background ("black"),
    setstandcolor ("black")

     )


return (


<div className='main-div' style={{backgroundColor:color_background}}>

<div  className="div1" style={{backgroundColor:color}} ></div>
<div  className="div2" style={{backgroundColor:standColor}}  ></div>
<div  className="div3" style={{backgroundColor:standColor}}>

  

    
   { myButton == "true" ? <button 
   onClick={setButton_off}  >Off</button> :<button 
   onClick={setButton_on}>On</button> 

    }  </div>



</div>



)}

export default LightHome;