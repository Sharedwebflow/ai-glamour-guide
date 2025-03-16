
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase"; // This will be used by your dev
import axios from 'axios';

const Quiz = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [analysis, setAnalysis] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [truemakeup, setTruemakeup] = useState<string>('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleAnalyze = async () => {
    if (!imageFile) return;
    setIsAnalyzing(true);
    const formData = new FormData();
    formData.append('image', imageFile);
    try {
      const response = await axios.post('https://127.0.0.1:5000/analyze', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      });
      const data = respond.data;
      setTruemakeup(data)
      setAnalysis("Finding your Key Beauty");
    } catch (error) {
      console.error("Analysis failed:", error);
      setAnalysis("Analysis failed. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
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
            AI Beauty Analysis
          </h1>

          {/* Image Upload */}
          <div className="mb-8">
            <div className="border-2 border-dashed border-rose-200 rounded-lg p-8 text-center">
              {previewUrl ? (
                <div className="space-y-4">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="max-h-64 mx-auto rounded-lg"
                  />
                  <button
                    onClick={() => {
                      setImageFile(null);
                      setPreviewUrl("");
                    }}
                    className="text-rose-500 hover:text-rose-600"
                  >
                    Remove Image
                  </button>
                </div>
              ) : (
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="text-gray-500">
                      <p className="mb-2">Drop your image here or click to upload</p>
                      <p className="text-sm">Supports JPG, PNG files</p>
                    </div>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Analysis Button */}
          <button
            onClick={handleAnalyze}
            disabled={!imageFile || isAnalyzing}
            className={`w-full py-3 rounded-lg text-white mb-8 ${
              !imageFile || isAnalyzing
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-rose-500 hover:bg-rose-600'
            }`}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Image'}
          </button>

          {/* Results Section */}
          {analysis && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
              <div className="prose max-w-none">
                {truemakeup && <div>Your Key Beauty: {truemakeup}</div>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
