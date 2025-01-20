

import useTeamsData from './Api-Client';
function App() {
  const teams = useTeamsData();
    return (
        <>
          <h1>IPL Season 2022 Points</h1>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Team</th>
                <th>Matches</th>
                <th>Won</th>
                <th>Lost</th>
                <th>NRR</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
              <tr key={team.No }>
              <td>{team.No}</td>
              <td>{team.Team}</td>
             <td>{team.Matches}</td>
             <td>{team.Won}</td>
             <td>{team.Lost}</td>
             <td>{team.NRR}</td>
             <td>{team.Points}</td>
              </tr>
             ))}
           </tbody>
          </table>
        </>
      );
    }

    export default App;