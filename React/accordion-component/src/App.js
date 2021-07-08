import React from 'react';
import Accordion from './components/accordion';
import {accordionData} from './utils/content';

function App() {
  return (
    <div>
      <h1>React Accordion</h1>
      <div className='accordion'>
        {accordionData.map(({title,content}) => (
          <Accordion title={title} content ={content}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
