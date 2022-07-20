import React, { useState } from "react";
const NotesForm = (props) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const onNameChangeHanndler = (event) => setName(event.target.value);
  const onTextChange = (event) => setText(event.target.value);

  const onSubmitHandler = (event) => {
    event.preventDefault();
   
    const notesData = {
      name: name,
      text: text,
    };
    props.onSubmitValueHandler(notesData);
    setName("");
    setText("");
  };

  return (
    <div
      className=" relative py-3 px-2
     bg-slate-300 h-[50vh]"
    >
      <form onSubmit={onSubmitHandler} >
        <label>
          <p className="text-xl">Title</p>
        </label>
        <input
          type="text"
          placeholder="Enter your title here"
          onChange={onNameChangeHanndler}
          className="border-black border-2 py-2 w-[30vw] px-2 rounded "
          value={name}
        />
        <label>
          <p className="text-xl">Enter Your Note</p>
        </label>
        <textarea
          className="border-black border-2 py-2 w-[30vw] px-2 rounded"
          onChange={onTextChange}
          rows="4"
          cols="50"
          value={text}
        ></textarea>

        <input
          type="submit"
          value="Add note"
          className="block  rounded-full bg-red-400 hover:bg-red-500 cursor-pointer py-2 mt-3 px-8"
        />
      </form>
    </div>
  );
};

export default NotesForm;
