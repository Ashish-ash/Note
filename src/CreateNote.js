import React, { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputTitleHandler = (event) => {
    setNote((prevData) => {
      return {
        ...prevData,
        title: event.target.value,
      };
    });
  };

  const inputContentHandler = (event) => {
    setNote((prevData) => {
      return {
        ...prevData,
        content: event.target.value,
      };
    });
  };
  const addEvent = (event) => {
    event.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="main_note">
        <form onSubmit={addEvent}>
          <input
            name="title"
            type="text"
            value={note.title}
            onChange={inputTitleHandler}
            required
            placeholder="Title"
            autoComplete="off"
          />

          <textarea
            rows=""
            columns=""
            value={note.content}
            name="content"
            required
            onChange={inputContentHandler}
            placeholder="Write a note..."
          ></textarea>
          <button className="addBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4b400" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;