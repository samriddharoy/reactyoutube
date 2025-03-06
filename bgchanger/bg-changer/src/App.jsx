import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* Button Bar */}
      <div className="fixed flex flex-wrap justify-center bottom-12 left-0 right-0 px-4">
        <div className="bg-gray-800 p-3 rounded-full flex gap-3 shadow-lg">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-black rounded"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
