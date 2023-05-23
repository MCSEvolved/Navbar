import { initializeApp } from "firebase/app";
import Portal from "./Components/Portal";
import UserInfo from "./Components/UserInfo";
import * as React from "react";


const firebaseConfig = {
  apiKey: "AIzaSyBlfZjJyhjcgyPfxaqkZHSR5SciFBWC5IY",
  authDomain: "mcsynergy-55878.firebaseapp.com",
  projectId: "mcsynergy-55878",
  storageBucket: "mcsynergy-55878.appspot.com",
  messagingSenderId: "822930182678",
  appId: "1:822930182678:web:23e8f0b3e044ae06cb9b37",
  measurementId: "G-3BK4KLMGTJ"
};

initializeApp(firebaseConfig);

export default function Navbar({logoSrc}: {logoSrc: string|URL}){
  return (
    <div className='bg-MCS-DarkerBlue h-14 flex items-center justify-between'>
      <div className='flex items-center w-80 h-full'>
        <Portal></Portal>
        <a href='/' className='h-max ml-1'>
          <img src={logoSrc.toString()} alt='Logo' className='h-7'/>
        </a>
      </div>
      <div className='flex items-center w-80 justify-end h-full'>
        <UserInfo></UserInfo>
      </div>
    </div>
  )
}