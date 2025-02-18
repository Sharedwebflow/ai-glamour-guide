
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <button 
          onClick={() => navigate('/')}
          className="mb-8 text-rose-500 hover:text-rose-600 flex items-center gap-2"
        >
          ← Back to Home
        </button>
        
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Let's Find Your Perfect Beauty Routine
          </h1>

          {/* Progress Bar */}
          <div className="w-full bg-rose-100 rounded-full h-2 mb-12">
            <div 
              className="bg-rose-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* Quiz Steps */}
          {step === 1 && (
            <div className="animate-fade-up">
              <h2 className="text-xl font-semibold mb-6">What's your skin type?</h2>
              <div className="grid gap-4">
                {["Dry", "Oily", "Combination", "Normal", "Sensitive"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setStep(2)}
                    className="p-4 text-left rounded-lg border border-rose-200 hover:border-rose-500 hover:bg-rose-50 transition-all"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-up">
              <h2 className="text-xl font-semibold mb-6">What are your main skin concerns?</h2>
              <div className="grid gap-4">
                {[
                  "Acne",
                  "Aging",
                  "Dark spots",
                  "Dullness",
                  "Uneven texture"
                ].map((concern) => (
                  <button
                    key={concern}
                    onClick={() => setStep(3)}
                    className="p-4 text-left rounded-lg border border-rose-200 hover:border-rose-500 hover:bg-rose-50 transition-all"
                  >
                    {concern}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-up">
              <h2 className="text-xl font-semibold mb-6">What's your skincare goal?</h2>
              <div className="grid gap-4">
                {[
                  "Clear skin",
                  "Anti-aging",
                  "Even tone",
                  "Hydration",
                  "Oil control"
                ].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setStep(4)}
                    className="p-4 text-left rounded-lg border border-rose-200 hover:border-rose-500 hover:bg-rose-50 transition-all"
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-up text-center">
              <h2 className="text-2xl font-semibold mb-6">Analysis Complete!</h2>
              <p className="text-gray-600 mb-8">
                We're preparing your personalized beauty routine...
              </p>
              <button 
                onClick={() => navigate('/')}
                className="rounded-full bg-rose-500 px-8 py-3 text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl"
              >
                View Your Results
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
