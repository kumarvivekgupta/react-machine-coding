import { useEffect } from "react";


const Toast=({message,duration,type, onClose,id})=>{

   



    return (
        <div className={`toast ${type}`}>
            <button className="popup__close" onClick={()=>onClose(id)}>X</button>
            <p>{message}</p>
            
        </div>
    );

}
export default Toast;