import Header from "../components/Header";
import ChatBot from "../components/ChatBot";
import FileUpload from "../components/FileUpload";
import DataPreview from "../components/DataPreview";
import { useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]); // Uploaded Excel sheet
  const [resultData, setResultData] = useState(null); // AI JSON result

  return (
    <>
      <Header />
      {/* Full height minus header */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left: FileUpload or DataPreview */}
        <div className="flex-1 flex flex-col p-4">
          {resultData ? (
            <DataPreview data={resultData} />
          ) : data.length > 0 ? (
            <DataPreview data={data} />
          ) : (
            <FileUpload setData={setData} />
          )}
        </div>

        {/* Right: ChatBot */}
        <div className="flex-1 flex flex-col p-4">
          <ChatBot data={data} setResultData={setResultData} />
        </div>
      </div>
    </>
  );
}

