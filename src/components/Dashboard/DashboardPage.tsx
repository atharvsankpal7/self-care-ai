import { useState } from 'react';
import { Upload, X, Loader2, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { uploadImage } from '../../lib/api';

export const DashboardPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ predicted_label: string; probabilities: Record<string, number> } | null>(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError('');
    try {
      const data = await uploadImage(file);
      setResult(data);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold">SC</span>
            </div>
            <span className="font-bold text-slate-900">SelfCare AI</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            <LogOut size={18} />
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Eye Disease Analysis</h1>
            <p className="text-slate-600">Upload an eye image to detect potential conditions like Glaucoma, Cataract, or Diabetic Retinopathy.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8">
              {/* Upload Area */}
              {!preview ? (
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group cursor-pointer relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Upload size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Click to upload or drag and drop</h3>
                  <p className="text-slate-500 text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-video flex items-center justify-center">
                    <img src={preview} alt="Preview" className="max-h-full max-w-full object-contain" />
                    <button
                      onClick={() => {
                        setFile(null);
                        setPreview(null);
                        setResult(null);
                      }}
                      className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-600 hover:text-red-500 rounded-full shadow-sm transition-all"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {!result && (
                    <button
                      onClick={handleUpload}
                      disabled={loading}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          Analyze Image
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}

              {error && (
                <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl text-center font-medium">
                  {error}
                </div>
              )}

              {/* Results */}
              {result && (
                <div className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-lg font-semibold text-slate-900 mb-6">Analysis Results</h3>
                  
                  <div className="bg-emerald-50 rounded-xl p-6 mb-6 border border-emerald-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-emerald-800 font-medium">Detected Condition</span>
                      <span className="px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-sm font-bold uppercase tracking-wide">
                        {result.predicted_label.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="text-emerald-600 text-sm">
                      Based on our AI analysis, this image shows signs consistent with {result.predicted_label.replace('_', ' ')}.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-slate-700 uppercase tracking-wider">Confidence Levels</h4>
                    {Object.entries(result.probabilities).sort(([,a], [,b]) => b - a).map(([label, prob]) => (
                      <div key={label} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-slate-700 capitalize">{label.replace('_', ' ')}</span>
                          <span className="text-slate-500">{(prob * 100).toFixed(1)}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${prob * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
