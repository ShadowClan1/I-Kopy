import React, { useContext, useEffect, useState } from 'react'

import noteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";
export default function Modal(props) {
    const [noten, setnoten] = useState({ title: "", description: "", tag: ""  });
    const context = useContext(noteContext);
    const {notes, getAllNotes, editNote }= context;
    
    
    const handleClick1 = (e) => {
      e.preventDefault();
      editNote(props.id, noten.title, noten.description, noten.tag)
    };
    const onChange = (e) => {
      setnoten({ ...noten, [e.target.name]: e.target.value });
    };
   
  
    return (

    <div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            value={props.title}
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
            value={props.description}
          
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
            value={props.tag}
          />
        </div>
        <button  className="btn btn-primary" onClick={handleClick1} >
          Add Note
        </button>
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
