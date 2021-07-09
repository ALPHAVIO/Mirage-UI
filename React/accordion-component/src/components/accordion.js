import React, { useState } from 'react';

function Accordion({title,content}) {

const [isActive,setActive]=useState(false);
  return (
    <div className="accordion-item">
        <div className='accordion-title' onClick={() => setActive(!isActive)}> 
            <div>{title}</div>
            <div>{isActive?'-':'+'}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      
    </div>
  );
}

export default Accordion;
