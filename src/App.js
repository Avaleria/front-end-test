import React, { useState } from 'react';
import './App.css';
import TweetsDashboard from './components/TweetsDashboard';
import TweetsConfig from './components/TweetsConfig';
import axios from 'axios';
import accounts from './accounts';
import LinearProgress from '@material-ui/core/LinearProgress';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = (id, count) => {
    return axios.get(`http://localhost:7890/1.1/statuses/user_timeline.json?count=${count}&screen_name=${id}`);
  };

  const init = async () => {
    try {
      const versa = await fetchData('versaagency', 30);
      const rain = await fetchData('rainagency', 30);
      const alexa = await fetchData('alexadevs', 30);
      accounts[0].tweets = versa.data;
      accounts[1].tweets = rain.data;
      accounts[2].tweets = alexa.data;
      setData(accounts);
      setLoading(false);
    }
    catch (err) {
      console.error(err);
    }
  };

  if (data.length === 0) {
    init();
  }

  const handlePositionChange = (id, index) => {
    setLoading(true);
    const content = [...data];
    const a = { ...data[index] };
    const b = data.find(ac => ac.id === id);
    const bIndex = data.indexOf(b);
    content[index] = { ...b };
    content[bIndex] = a;
    setData(content);
    setLoading(false);
  };

  const handleAmountChange = async (id, name, index, amount) => {
    setLoading(true);
    const account = await fetchData(id, amount);
    const newData = [...data];
    newData[index] = { tweets: account.data, id, name };
    setData(newData);
    setLoading(false);
  };

  return (
    <div className="App">
      <TweetsConfig positionHandler={handlePositionChange} amountHandler={handleAmountChange} />
      <div className="loading">
        {loading ? <LinearProgress /> : <span></span>}
      </div>
      <TweetsDashboard tweets={data} />
    </div>
  );
}

export default App;
