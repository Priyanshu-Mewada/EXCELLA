// import react from 'react'

// const Header = () => {
//     return (
//         <div className=' items-center justify-center bg-gray-500 p-2 shadow-lg m-2 rounded-lg'>
//         <div className='flex flex-col items-center justify-center p-2'> 
//                {/* <img src="./assets/ICON." alt="" /> */}
               
//                <h1 
//             className=" text-3xl font-extrabold text-white  justify-center text-center ">
//                 EXCELLA
//             </h1>
//             <p className='text-white'>AI Excel automation tool</p>
//             </div>
//         </div>
//     )
// }

// export default Header;

import React from "react";

const Header = () => {
  return (
    <div className="px-2 mt-2"> 
      <header className="w-full bg-gray-900 shadow-lg rounded-lg ">
        <div className="flex flex-col items-center justify-center py-6 px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center">
            EXCELLA
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
