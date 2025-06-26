import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AI Resume Screener & Job Matcher
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Upload your resume, create job postings, and let our AI match candidates to jobs with precision.
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Resume Parsing</h2>
            <p className="text-gray-600">
              Upload resumes in PDF/DOC format and extract skills, education, and experience using AI.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Matching</h2>
            <p className="text-gray-600">
              AI-powered matching of resumes to job descriptions using NLP and cosine similarity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Analytics Dashboard</h2>
            <p className="text-gray-600">
              Visualize candidate-job match scores with interactive charts and insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;