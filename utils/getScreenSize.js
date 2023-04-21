// import React, { useState } from 'react'

// const useDevice = () => {
//   const [device, setDevice] = useState("desktop");
//   return (
//     <div>useDevice</div>
//   )
// }

// export default useDevice


export default function getScreenSize() {
  // Get the screen width and height
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   
  if(screenWidth < 768) {
    return "mobile"
  }

  if(screenWidth > 768) {
    return "tab"
  }

  if(screenWidth > 1024) {
    return "desktop"
  }
}

