import React from "react";
import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
export default function Addnote() {
  const [noten, setnoten] = useState({ title: "", description: "", tag: "" });
  const context = useContext(noteContext);
  const {addNote, setalerts} = context;
  const handleClick = (e) => {
    e.preventDefault();
    addNote(noten.title, noten.description, noten.tag) ;
  setnoten({title: "", description: "", tag: ""})
  setalerts({ type: "success", message: "Note created" });
      setTimeout(() => {
        setalerts({ type: "", message: "" });
      }, 1000);
  };
  const onChange = (e) => {
    setnoten({ ...noten, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add a Note </h2>
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
            value={noten.description}
            style={{height: 200}}
           
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
            value={noten.tag}
            onChange={onChange}
          />
        </div>
        <button disabled={noten.title.length <= 3 || noten.description.length <= 3} className="btn btn-primary" onClick={handleClick} >
          Add Note
        </button>
      </form>
    </div>
  );
}
