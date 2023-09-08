import "./styles.css";
import { useEffect, useState } from "react"

export default function App() {
  console.log("App render");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DependentEffect />
    </div>
  );
}

function DependentEffect() {
  const names = ["Alice", "Bob", "Charlie", "David", "Emily"];

  const [recommendations, setRecommendations] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // If user is not searching for anything, don't show any recomendations
    console.log('useEffect fire once');
    if (searchText.length === 0) {
      setRecommendations([]);
    }
    // Else, find recommendations
    else if (searchText.length > 0) {
      const newRecs = names.filter((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
      setRecommendations(newRecs);
    }
  }, [searchText]);

  console.log("DependentEffect render");
  console.log(searchText);
  console.log(recommendations);
  return (
    <div>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <h2>Recommendations:</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
}
