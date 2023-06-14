import React, { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState({});

  async function getJoke() {
    try {
      const jokeResponse = await fetch(
        `https://official-joke-api.appspot.com/random_joke`
      );
      const joke1 = await jokeResponse.json();
      setJoke(joke1);
    } catch (error) {
      console.log(error.message, "aesdfsdgfsdgsdfgfdsg");
    }
  }

  useEffect(() => {
    getJoke();
  }, []);

  if (Object.keys(joke).length === 0) return <>No Data found....</>;

  return (
    <>
      <table
        style={{
          backgroundColor: "black",
          maxWidth: "1125px",
          width: "90vw",
          margin: "1rem auto"
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "grey" }}>
            {Object.keys(joke).length > 0 &&
              Object.keys(joke).map((column, index) => {
                return (
                  <th key={index} style={{ width: "100px" }}>
                    {column}
                  </th>
                );
              })}
          </tr>
        </thead>

        <tbody>
          <tr style={{ backgroundColor: "lightgrey", textAlign: "center" }}>
            {Object.keys(joke).length > 0 &&
              Object.entries(joke).map((column, index) => {
                const [key, value] = column;
                return <td key={index}>{value}</td>;
              })}
          </tr>
          <tr style={{ backgroundColor: "lightgrey", textAlign: "center" }}>
            {Object.keys(joke).length > 0 &&
              Object.entries(joke).map((column, index) => {
                const [key, value] = column;
                return <td key={index}>{value}</td>;
              })}
          </tr>
          <tr style={{ backgroundColor: "lightgrey", textAlign: "center" }}>
            {Object.keys(joke).length > 0 &&
              Object.entries(joke).map((column, index) => {
                const [key, value] = column;
                return <td key={index}>{value}</td>;
              })}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;

/*
API: https://official-joke-api.appspot.com/random_joke

Step 1: render the return in a HTML table
Columns: id  type  setup  punchline

{
  "type": "general",
  "setup": "Why did the opera singer go sailing?",
  "punchline": "They wanted to hit the high Cs.",
  "id": 338
}
*/
