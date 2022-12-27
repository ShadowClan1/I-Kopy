import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function Alert(props) {
  const context = useContext(noteContext)
  const {alerts}= context
  return (<>
    <div style={{height: 50}}>
      <div style={{padding:3}}  className={`alert alert-${alerts.type} alert-dismissible fade show`} role="alert">
  {alerts.message}
  
</div>
    </div>
    
    </>
  )
}
