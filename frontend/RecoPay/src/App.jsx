import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");   // stores backend response
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error handling

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => {
        // Step 1: check if response is OK
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Step 2: convert to JSON
      })
      .then((data) => {
        // Step 3: store data in state
        setData(data.message);
        setLoading(false);
      })
      .catch((error) => {
        // Step 4: handle errors
        console.error("Error:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []); // runs only once when page loads

  return (
    <div>
      <h1>Frontend</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <p>{data}</p>}
    </div>
  );
}

export default App;