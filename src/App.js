import React from "react"
import { StudentDetail } from "./components/StudentDetail";

export function App() {

  const [name, setName] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [city, setCity] = React.useState("Vellore");
  const [gender, setGender] = React.useState("");
  const [language, setLanguage] = React.useState([]);

  const [submitedData, setSubmitedData] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitedData({ name, comment, city, gender, language });
    handleReset();
  }

  const handleReset = () => {
    setName("");
    setComment("");
    setCity("");
    setGender("");
    setLanguage([]);
  }

  return (
    <div>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Student Name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Student Name"
          />
        </label>

        <br></br>
        <div>
          <label>Comments:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter comments"
            />
          </label>
        </div>

        <br></br>
        <div>
          <label>City:
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value={"Chennai"}>Chennai</option>
              <option value={"Madurai"} >Madurai</option>
              <option value={"Coimbatore"}>Coimbatore</option>
              <option value={"Vellore"}>Vellore</option>
            </select>
          </label>
        </div>

        <br></br>
        <div>
          <label>Gender:
            <input
              type="radio"
              value={"Male"}
              checked={gender === "Male"}
              onChange={(e) => setGender("Male")}
              name="gender" />Male

            <input
              type="radio"
              value={"Female"}
              checked={gender === "Female"}
              onChange={(e) => setGender("Female")}
              name="gender" />Female

            <input
              type="radio"
              value={"Others"}
              checked={gender === "Others"}
              onChange={(e) => setGender("Others")}
              name="gender" />Others
          </label>
        </div>

        <br></br>
        <div>
          <label>Languages:
            <input
              type="checkbox"
              value={"Tamil"}
              checked={language.includes("Tamil")}
              onChange={(e) => {
                if (e.target.checked) {
                  setLanguage([...language, "Tamil"])
                } else {
                  let indexOfTamil = language.indexOf("Tamil");
                  language.splice(indexOfTamil, 1);
                  setLanguage([...language])
                }
              }} />Tamil

            <input
              type="checkbox"
              value={"English"}
              checked={language.includes("English")}
              onChange={(e) => {
                if (e.target.checked) {
                  setLanguage([...language, "English"])
                } else {
                  let indexOfEnglish = language.indexOf("English");
                  language.splice(indexOfEnglish, 1);
                  setLanguage([...language])
                }
              }} />English

            <input
              type="checkbox"
              value={"Hindi"}
              checked={language.includes("Hindi")}
              onChange={(e) => {
                if (e.target.checked) {
                  setLanguage([...language, "Hindi"])
                } else {
                  let indexOfHindi = language.indexOf("Hindi");
                  language.splice(indexOfHindi, 1);
                  setLanguage([...language])
                }
              }} />Hindi

          </label>
        </div>

        {/* Submit Button */}
        <br></br>
        <input type="submit" />

        {/* Reset Button */}
        <button onClick={handleReset}>Reset</button>

      </form>

      {/* Student detail */}
      <StudentDetail
        name={submitedData.name}
        comment={submitedData.comment}
        gender={submitedData.gender}
        city={submitedData.city}
        languages={submitedData.language}
      />
    </div>
  );
}



