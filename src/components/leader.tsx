interface LeaderboardEntry {
    username: string;
    ranking: number;
    problemsSolved: number;
    tokensEarned: number;
  }
  
  interface LeaderboardProps {
    entries: LeaderboardEntry[];
  }
  
  const Leaderboard: React.FC<LeaderboardProps> = ({ entries }) => {
    return (
      <div className="leaderboard" style={{marginTop:"3%"}}>
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Username</th>
              <th>Problems Solved</th>
              <th>Tokens Earned</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.ranking}</td>
                <td>{entry.username}</td>
                <td>{entry.problemsSolved}</td>
                <td>{entry.tokensEarned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Leaderboard;