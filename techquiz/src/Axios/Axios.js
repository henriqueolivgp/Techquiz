import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null
  });

  const fetchData = async () => {
    setState({ data: [], loading: true, error: null });

    try {
      const response = await axios.get('http://localhost:1400/api/register');
      setState({ data: response.data, loading: false, error: null });
    } catch (error) {
      setState({ data: [], loading: false, error: error });
    }
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error.message}</p>}
      {state.data.map(item => (
        <p key={item.id}>{item.name}: {item.value}</p>
      ))}
    </div>
  );
}
