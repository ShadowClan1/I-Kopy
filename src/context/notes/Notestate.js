import noteContext from "./noteContext";
import { useState } from "react";
import { json } from "react-router-dom";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const nI = [];
  const [notes, setnotes] = useState(nI);
  const [alerts, setalerts] = useState({type : "", message: ""})

  //get all the notes uses token only voked by the useEffect hook
  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/notes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });

    const json = await response.json();
    setnotes(json);
  };

  //Add a Note for server side
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/createnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag}),
    });
    


    const json = await response.json()
// for the client side 
    let note = json
    setnotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify(),
    });

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
    console.log(`deleting the note with id ${id}`);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },

      body: JSON.stringify({ title, description, tag }), 
    });
let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
setnotes(newNotes)

  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getAllNotes, setnotes, alerts, setalerts }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
