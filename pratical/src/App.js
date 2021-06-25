
import './App.css';
import {Multiselect} from 'multiselect-react-dropdown'
import { useState } from 'react';

function App() {
    var data = [
      {value:'1', fruits: 'Tomato'},
      {value:'2', fruits: 'Potato'},
      {value:'3', fruits: 'Bringal'},
      {value:'4', fruits: 'Cocumber'},
      {value:'5', fruits: 'ladiesfinger'},
      {value:'6', fruits: 'onion'}
    ];

const [option,setState] = useState(data);

  return (
    <div className="Container">
      <header className="Header">
        
      </header>
      <div className="App">
      <Multiselect options={option} displayValue='fruits'/>
    </div>
    </div>
  );
}

export default App;
