import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Notes from "./Notes";

export default function Home() {
 
  const note = useContext(noteContext)
 
  return (
    <div className="container my-3">
      
     <Notes/>
    </div>
  );
}
