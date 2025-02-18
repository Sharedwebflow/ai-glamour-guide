
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("# Write your Python code here\nprint('Hello, World!')");
  const [output, setOutput] = useState("");

  const handleExecute = () => {
    // Simulated execution - in reality, this would connect to a backend
    setOutput("Hello, World!\n\nNote: This is a simulated output. To enable actual Python code execution, we'll need to integrate with a backend service.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 text-rose-500 hover:text-rose-600 flex items-center gap-2"
        >
          ← Back to Home
        </button>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Python Code Executor
          </h1>

          {/* Code Editor */}
          <div className="mb-4">
            <div className="bg-gray-900 text-white p-4 rounded-t-lg flex justify-between items-center">
              <span>main.py</span>
              <button
                onClick={handleExecute}
                className="px-4 py-1 bg-rose-500 text-white rounded hover:bg-rose-600 transition-colors"
              >
                Run ►
              </button>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-4 font-mono text-sm bg-gray-800 text-gray-100 rounded-b-lg focus:outline-none"
              spellCheck="false"
            />
          </div>

          {/* Output Console */}
          <div>
            <div className="bg-gray-900 text-white p-2 rounded-t-lg">
              Output
            </div>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-b-lg font-mono text-sm min-h-[100px] whitespace-pre-wrap">
              {output || 'Click "Run" to execute the code...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
