import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

export default function Notes() {
  const navigate = useNavigate();
  const [noten, setnoten] = useState({ id: "", title: "", description: "", tag: ""  });
  const [notenn, setnotenn] = useState({})
  const context = useContext(noteContext);
  const {notes, setnotes, getAllNotes, editNote, setalerts }= context;
  
  const handleClick1 = (e) => { console.log("updating the note", noten)
    e.preventDefault();
    editNote(noten.id, noten.title, noten.description, noten.tag)
    setalerts({ type: "success", message: "Note edited" });
      setTimeout(() => {
        setalerts({ type: "", message: "" });
      }, 1000);
   
    
    
  };
  const onChange = (e) => {
    setnoten({ ...noten, [e.target.name]: e.target.value });
   
  };
const updateNote=(note)=>{
  setnoten({id: note._id,title: note.title, description: note.description, tag: note.tag })
// editNote(note._id, noten.title, noten.description, noten.tag)
}

 useEffect(() => {
  if(localStorage.getItem('token')){
   getAllNotes()}
   else{ navigate('/login') }
  }, [])
  return ( <div className="container my-3">
    <Addnote/>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={noten.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            style={{height: 200}}
            value={noten.description}
          />
        </div>
        <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={noten.tag}
          />
        </div>
       
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary"  data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleClick1} data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
  
</div>

        <h2>your notes</h2><div className="container">{notes.length===0 ?"No Notes to display" : ""}</div><div className="row my-3" >
          
        {notes.map((notes)=>{
          return(

<Noteitem title={notes.title} key={notes._id} description={notes.description} id={notes._id} tag={notes.tag} updateNote={updateNote} note={notes}  /> 
          )
        })}</div>
      </div>
    
  );
}
