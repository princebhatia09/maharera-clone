import React from "react";
import { toast } from 'react-toastify';

toast.configure()

export default function ToastBox() {

  return (

    <div>

      {toast.warning('Hello Geeks',{
        toastId:"fail1"
      })}
      
    </div>
    
  )


}