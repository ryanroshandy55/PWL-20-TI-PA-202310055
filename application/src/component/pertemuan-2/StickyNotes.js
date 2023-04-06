import React, { useState } from 'react';

export default function StickyNotes() {
  const objSticyNotes = {
    id: 0,
    note: "I'm hungry",
    color: getRandomColor()
  }
  const [stickyNotes, setStickyNotes] = useState([objSticyNotes])
  
  const StickyItem = ({ data, index }) => {
    <div>
      <div>
        <div>
          <span>
            <i></i>
          </span>
          <span>
            
          </span>
        </div>
      </div>
    </div>
  }

  return (
    <div>
        
    </div>  
  )
}
