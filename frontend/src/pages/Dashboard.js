import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import api from '../api';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch match data from backend
    api.get('/job/match/').then((response) => {
      setData(response.data); // Adjust based on API response
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl">Match Dashboard</h1>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="match_score" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default Dashboard;