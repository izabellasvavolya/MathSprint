import { useEffect, useState } from "react";

type Question = {
  id: number;
  question: string;
  answer: string;
};

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend data:", data);
        setQuestions(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>MathSprint</h1>
      <p>Practice math questions</p>

      <h2>Questions</h2>

      {questions.length === 0 ? (
        <p>No questions loaded yet.</p>
      ) : (
        questions.map((q) => (
          <div key={q.id} style={{ marginBottom: "10px" }}>
            {q.question}
          </div>
        ))
      )}
    </div>
  );
}

export default App;