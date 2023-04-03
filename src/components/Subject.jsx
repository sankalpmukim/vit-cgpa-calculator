import { useEffect, useState } from "react";

const GRADE_TO_GPA = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
  N1: 0,
  N2: 0,
  N3: 0,
  N4: 0,
};

export default function Subject({ setCredits, setValues, index }) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("S");
  const [localCredits, setLocalCredits] = useState(3);
  useEffect(() => {
    setValues(index, GRADE_TO_GPA[grade] * localCredits);
    setCredits(index, localCredits);
  }, [localCredits, grade]);
  // table row
  return (
    <tr>
      <td>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </td>
      <td>
        <select
          value={grade}
          onChange={(e) => {
            setGrade(e.target.value);
          }}
        >
          <option value="" hidden>
            Select
          </option>

          {Object.keys(GRADE_TO_GPA).map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select
          value={localCredits}
          onChange={(e) => {
            setLocalCredits(Number(e.target.value));
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </td>
    </tr>
  );
}
