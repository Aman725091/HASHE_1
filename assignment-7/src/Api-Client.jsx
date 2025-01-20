import { useEffect , useState} from "react";
const useTeamsData =() =>{
    const [teams, setTeams] = useState([]);
  
    useEffect(() => {
      fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
        .then(response => response.json())
        .then(data => {
          const sortedData = data.sort((a, b) => a.NRR - b.NRR);
          setTeams(sortedData);
            });
      }, []);
    return teams;
  };
  
  export default useTeamsData;