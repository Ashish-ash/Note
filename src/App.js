import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prev) => {
      return [...prev, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((prevData) => prevData.filter((currdata, indx) => indx !== id));
  };
 
const onEdit = (id, title, content) => {
      setAddItem((prevData) => {
        prevData[id].title = title;
        prevData[id].content = content;
  
        return [...prevData];
      });
    };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
            Edit = {onEdit}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;