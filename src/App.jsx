import { useState } from "react";
import "./App.css";
import Subject from "./components/Subject";

const MAX_SUBJECTS = 15;

function App() {
  const [numSubjects, setNumSubjects] = useState(5);
  const [credits, setCredits] = useState({});
  const [values, setValues] = useState({});

  return (
    <div>
      <h1>{`Fully Reactive Grade Calculator`}</h1>
      {/* reset button */}
      <button
        onClick={() => {
          setNumSubjects(2);
          setCredits({
            0: 3,
            1: 3,
          });
          setValues({
            0: 30,
            1: 30,
          });
        }}
      >
        Reset Page
      </button>
      {/* add/remove subject buttons */}
      <button
        onClick={() =>
          setNumSubjects((numSubjects) => {
            if (numSubjects < MAX_SUBJECTS) {
              return numSubjects + 1;
            } else {
              alert("Max subjects reached");
            }
            return numSubjects;
          })
        }
      >
        Add Subject
      </button>
      <button
        onClick={() => {
          setNumSubjects((numSubjects) => numSubjects - 1);
          setCredits((credits) => {
            const newCredits = { ...credits };
            delete newCredits[numSubjects - 1];
            return newCredits;
          });
          setValues((values) => {
            const newValues = { ...values };
            delete newValues[numSubjects - 1];
            return newValues;
          });
        }}
      >
        Remove Subject
      </button>
      <div>Num subjects: {numSubjects}</div>
      <div>
        GPA:{" "}
        {Object.values(values).reduce((a, b) => a + b, 0) /
          Object.values(credits).reduce((a, b) => a + b, 0)}
      </div>

      <table>
        <thead>
          <tr>
            <th>Subject(For your reference)</th>
            <th>Grade</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {Array(numSubjects)
            .fill(0)
            .map((_, index) => (
              <Subject
                key={index}
                index={index}
                setCredits={(index, receivedCredit) => {
                  setCredits({
                    ...credits,
                    [index]: receivedCredit,
                  });
                }}
                setValues={(index, value) => {
                  setValues({
                    ...values,
                    [index]: value,
                  });
                }}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
