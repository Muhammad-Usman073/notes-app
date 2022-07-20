import React, { useState } from "react";
import NotesForm from "./Components/FormComponent/NotesForm";
import Cards from "./Components/Cards/Cards";

const App = () => {
  const DUMMY_VALUE = [];
  const [notesValue, setNotesValue] = useState(DUMMY_VALUE);
  const SubmitValueHandler = (newValue) => {
    setNotesValue((preValue) => {
      return [...preValue,newValue ];
    });
  };

  return (
    <div>
      <NotesForm onSubmitValueHandler={SubmitValueHandler} />
      <Cards value={notesValue} />
    </div>
  );
};
export default App;
