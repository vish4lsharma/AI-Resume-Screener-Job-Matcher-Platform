import { useState } from 'react';
import api from '../api';

function UploadResume() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      await api.post('/resume/upload/', formData);
      alert('Resume uploaded successfully!');
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl">Upload Resume</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Upload</button>
      </form>
    </div>
  );
}

export default UploadResume;