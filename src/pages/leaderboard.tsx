import React from 'react';
import ReactDOM from 'react-dom';
import Leaderboard from '../components/leader';


const LeaderBoardPage = ()=> {
    const entries = [
        { username: 'Tyler Durden', ranking: 1, problemsSolved: 150, tokensEarned: 300 },
        { username: 'Space Monkey 01', ranking: 2, problemsSolved: 140, tokensEarned: 280 },
        { username: 'Hashirama Senju', ranking: 3, problemsSolved: 130, tokensEarned: 260 },
      ];
      return( <div style={{height:"50vw"}}><Leaderboard entries={entries} /> </div>)}
        
    export default LeaderBoardPage;

