// import React from 'react';
// import * as XLSX from 'xlsx';

// const FileUpload = ({ setData }) => {  

//     const handleFile = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

       
//         const buffer = await file.arrayBuffer();
//         const workbook = XLSX.read(buffer);
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(sheet);

//         console.log(jsonData);
//         setData(jsonData); // send data to parent
//     }
    
//     return (
//         <>
        
//         <div className='flex items-center justify-center min-h-screen bg-gray-100 m-4 w-full rounded-lg'>
        
//             <div className='p-6 border-2 border-dashed border-gray-400 rounded-lg bg-white shadow'>
//                 <h2 className='mb-4 font-bold text-lg text-center'>
//                     Upload your sheets here
//                 </h2> 

//                 <input 
//                     type="file" 
//                     className="block w-full cursor-pointer border p-3 rounded bg-gray-200 hover:bg-gray-300 font-medium text-sm" 
//                     accept='.xlsx,.csv,.xls'  
//                     onChange={handleFile} 
//                 />
//             </div>
//         </div>
//         </>
//     );
// };

// export default FileUpload;

import React, { useState } from "react";
import * as XLSX from "xlsx";

const FileUpload = ({ setData }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = async (file) => {
    if (!file) return;
    try {
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer);
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setData(jsonData);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer?.files[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      {/* ===== Heading Section ===== */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 leading-tight mb-6">
          Automate with
          <br />
          <span className="font-semibold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-500 bg-clip-text text-transparent">
            Intelligence
          </span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg font-light max-w-2xl mx-auto">
          Transform your spreadsheets into intelligent workflows through natural
          conversation.
        </p>
      </div>

      {/* ===== Drag & Drop Upload Box ===== */}
      <div
        className={`p-8 border-2 rounded-xl bg-white shadow-lg w-full max-w-md text-center transition-all duration-300
        ${isDragging ? "border-gray-600 shadow-2xl bg-gray-50" : "border-gray-300 hover:shadow-2xl"}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <h2 className="mb-4 font-semibold text-lg text-gray-800">
          Upload your sheets here
        </h2>

        <p className="text-gray-500 mb-4">
          Drag & drop your Excel/CSV file here or click the button below
        </p>

        {/* Upload Button */}
        <label className="inline-block cursor-pointer bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-md transition-all">
          Upload File
          <input
            type="file"
            className="hidden"
            accept=".xlsx,.csv,.xls"
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </label>
      </div>
    </div>
  );
};

export default FileUpload;









