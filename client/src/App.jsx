import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('Checking...');

  // IMPORTANT: Use Environment Variable for API URL
  // If deployed, it uses the real URL. If local, it uses localhost.
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    // Fetch Posts
    axios.get(`${API_URL}/api/posts`)
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));

    // Task 5: Check System Health
    axios.get(`${API_URL}/health`)
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus('DOWN'));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🚀 Deployment Dashboard</h1>
      <div style={{ 
          padding: '10px', 
          backgroundColor: status === 'UP' ? '#d4edda' : '#f8d7da',
          borderRadius: '5px',
          marginBottom: '20px'
      }}>
        <strong>System Status: </strong> {status}
      </div>

      <h2>Recent Posts</h2>
      {posts.length === 0 ? <p>No posts found (Connect DB to see data)</p> : (
        <ul>
          {posts.map(post => <li key={post._id}>{post.title}</li>)}
        </ul>
      )}
    </div>
  );
}

export default App;