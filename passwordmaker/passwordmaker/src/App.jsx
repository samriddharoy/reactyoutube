import { useState, useCallback , useEffect } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "1234567890";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, characterAllowed, numberAllowed]);

  useEffect(() => {
    passwordGenerator()
  },[ length , numberAllowed , characterAllowed , passwordGenerator ])

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-gray-800 shadow-lg rounded-lg p-6 text-white">
        <h2 className="text-center text-2xl font-semibold mb-4 text-orange-500">
          Password Generator
        </h2>

        {/* Input & Copy Button */}
        <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-transparent text-white"
            placeholder="Generated password"
            readOnly
          />
          <button
            className="bg-orange-500 px-4 py-2 text-white font-bold hover:bg-orange-600 transition"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Password Length: {length}</label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
              className="h-5 w-5"
            />
            <span>Include Numbers</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed(!characterAllowed)}
              className="h-5 w-5"
            />
            <span>Include Symbols</span>
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full bg-orange-500 py-2 rounded-lg text-white font-bold hover:bg-orange-600 transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
