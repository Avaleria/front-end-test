import React, { useState } from 'react';
import './App.css';
import TweetsDashboard from './components/TweetsDashboard';
import TweetsConfig from './components/TweetsConfig';
import axios from 'axios';
import mock from './json.js'

function App() {
  const [data] = useState([]);

  const accounts = [
    {
      id: 'versaagency', name: '@VersaAgency', count: 30
    },
    {
      id: 'rainagency', name: '@RainAgency', count: 30
    },
    {
      id: 'alexadevs', name: '@alexadevs', count: 30
    }
  ];

  const fetchData = async (account, position) => {
    try {
      const { id, name, count } = account;
      // const response = await axios.get(`http://localhost:7890/1.1/statuses/user_timeline.json?count=${count}&screen_name=${id}`);
      // data[position] = { tweets: response.data, name };      
      const thisIsMock = mock;
      data[position] = { tweets: thisIsMock, name };
    } catch (err) {
      console.error(err);
    }
  };

  fetchData(accounts[0], 0);
  fetchData(accounts[1], 1);
  fetchData(accounts[2], 2);

  return (
    <div className="App">
      <TweetsConfig accounts={accounts} />
      <TweetsDashboard tweets={data} />
    </div>
  );
}

export default App;
