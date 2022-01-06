import React, { useState } from "react";

const CreateNote = (props)=>{
    const [note,setNote] = useState({
        title:"",
        content:"",
    });
    const InputEvent = (event) => {
        const {name , value} = event.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name] : value,
            }
        })
    };

    const addEvent = ()=>{
        props.passNote(note);
    };
    return(
        <>
            <div className="main_note">
                <form>
                    <input name ="title" type = "text" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
                    <textarea rows='' columns='' value={note.content} name="content" onChange={InputEvent} placeholder="Write a note..."></textarea>
                    <button onClick={addEvent}>
                    Add Note</button>
                </form>
            </div>
        </>
    )
};

export default CreateNote;