import React from 'react';
import './App.css';
import TweetsDashboard from './components/TweetsDashboard';
import TweetsConfig from './components/TweetsConfig';
import axios from 'axios';

const fetchData = () => {
  axios.get('http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=versaagency')
    .then(function (response) {      
      console.log(response);
    })
    .catch(function (error) {      
      console.log(error);
    })    
};

fetchData();

function App() {
  return (
    <div className="App">
      <TweetsConfig />
      <TweetsDashboard />
    </div>
  );
}

export default App;
