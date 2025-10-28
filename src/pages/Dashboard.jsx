import { useState } from "react";
import Header from "../components/Header";
import ChatBot from "../components/ChatBot";
import FileUpload from "../components/FileUpload";
import DataPreview from "../components/DataPreview";

export default function Dashboard() {
  const [data, setData] = useState([]); // Uploaded Excel sheet
  const [resultData, setResultData] = useState(null); // AI JSON result
  const [showView, setShowView] = useState("data"); // "data" or "chat" (for small screens)

  return (
    <div className="flex flex-col h-screen">
    
      <Header />

      <main className="flex-1 overflow-y-auto">
        {data.length === 0 ? (
          // IF NO FILE IS UPLOADED
          <div className="flex items-center justify-center h-full">
            <FileUpload setData={setData} />
          </div>
        ) : (
          // IF FILE IS UPLOADED
          <div className="flex flex-col h-full">
            {/* 🔘 Toggle button visible only on small screens */}
            <div className="flex justify-center md:hidden mt-2">
              <div className="flex space-x-2 bg-gray-100 p-2 rounded-lg shadow">
                <button
                  className={`px-3 py-1 rounded-md font-medium ${
                    showView === "data"
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => setShowView("data")}
                >
                  Data
                </button>
                <button
                  className={`px-3 py-1 rounded-md font-medium ${
                    showView === "chat"
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => setShowView("chat")}
                >
                  ChatBot
                </button>
              </div>
            </div>

            {/* 🔳 Main content area */}
            <div className="flex flex-1 flex-col md:flex-row h-full p-4 gap-4">
              {/* DataPreview */}
              <div
                className={`flex-1 flex flex-col ${
                  showView === "data" ? "block" : "hidden"
                } md:block`}
              >
                <DataPreview data={resultData ? resultData : data} />
              </div>

              {/* ChatBot */}
              <div
                className={`flex-1 flex flex-col ${
                  showView === "chat" ? "block" : "hidden"
                } md:block`}
              >
                <ChatBot data={data} setResultData={setResultData} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
