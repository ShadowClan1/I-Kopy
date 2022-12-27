import React,{useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import noteContext from '../context/notes/noteContext'
import Modal from './Modal';
export default function Noteitem(props) {
  const context = useContext(noteContext);
  
  const [noten, setnoten] = useState({ title: "", description:"", tag: ""  });
  
    
    const {notes, getAllNotes, editNote,deleteNote }= context;
    
    
   
    const first = useRef(null)
    
   
  return (
    <div className='col-md-4 my-3 '><div className="card" style={{width: "18rem",height: "12rem"} }>
    
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text" style={{height: "4rem", overflow:"hidden"}}>{props.description}</p>

      <p className="text-muted">{props.tag}</p>
      <div className='d-flex justify-content-end'>
      <Link  className=""><i className="fa-solid fa-trash mx-2" onClick={(e)=>{
        deleteNote(props.id);
e.preventDefault();
      }}> D</i></Link>
      <Link   className=""><i className="fa-solid fa-pen-to-square mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
       props.updateNote(props.note)
      }}>E</i></Link></div>
    </div>
    
 
  </div></div>
  )
}
