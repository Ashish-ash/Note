import React, { useState } from "react";
import {Modal} from 'react-responsive-modal';
const Note = (props)=>{
    const [modal,setModal] = useState(false);
    const [note, setNote] = useState({
        title: props.title,
        content: props.content,
      });
    const deleteNote = ()=>{
        props.deleteItem(props.id);
    };
    
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
      const edit = (event)=>{
          event.preventDefault();
          props.Edit(props.id , note.title , note.content);
          setModal(false);
      }
    return(
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br/>
                <p> {props.content}</p>
                <button className="btn" onClick={deleteNote}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#f4b400" viewBox="0 0 128 128" width="24px" height="24px" className="delete"><path d="M 49 1 C 47.34 1 46 2.34 46 4 C 46 5.66 47.34 7 49 7 L 79 7 C 80.66 7 82 5.66 82 4 C 82 2.34 80.66 1 79 1 L 49 1 z M 24 15 C 16.83 15 11 20.83 11 28 C 11 35.17 16.83 41 24 41 L 101 41 L 101 104 C 101 113.37 93.37 121 84 121 L 44 121 C 34.63 121 27 113.37 27 104 L 27 52 C 27 50.34 25.66 49 24 49 C 22.34 49 21 50.34 21 52 L 21 104 C 21 116.68 31.32 127 44 127 L 84 127 C 96.68 127 107 116.68 107 104 L 107 40.640625 C 112.72 39.280625 117 34.14 117 28 C 117 20.83 111.17 15 104 15 L 24 15 z M 24 21 L 104 21 C 107.86 21 111 24.14 111 28 C 111 31.86 107.86 35 104 35 L 24 35 C 20.14 35 17 31.86 17 28 C 17 24.14 20.14 21 24 21 z M 50 55 C 48.34 55 47 56.34 47 58 L 47 104 C 47 105.66 48.34 107 50 107 C 51.66 107 53 105.66 53 104 L 53 58 C 53 56.34 51.66 55 50 55 z M 78 55 C 76.34 55 75 56.34 75 58 L 75 104 C 75 105.66 76.34 107 78 107 C 79.66 107 81 105.66 81 104 L 81 58 C 81 56.34 79.66 55 78 55 z"/></svg></button>
                <button className="btn" onClick={()=>setModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#f4b400" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
                </button>
                <Modal open={modal}
                 onClose = {()=>setModal(false)}
                 center  
                 className={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
                >
                    <form onSubmit={edit}>
                        <input
                            required
                            type='text'
                            onChange={inputTitleHandler}
                            value={note.title}
                        />
                        <textarea
                            required
                            type = 'text'
                            value={note.content}
                            onChange={inputContentHandler}
                        />
                        <button className="modalSubmit">Submit</button>
                    </form>
                </Modal>
            </div>
            
        </>
    );
};
export default Note;