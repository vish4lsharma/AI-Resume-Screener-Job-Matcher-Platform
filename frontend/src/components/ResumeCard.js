import { Link } from 'react-router-dom';
import React from 'react';
function ResumeCard({ resume }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold">{resume.title}</h2>
      <p className="text-gray-700">{resume.description}</p>
      <div className="mt-2">
        <Link to={`/resume/${resume.id}`} className="text-blue-500 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
}
export default ResumeCard