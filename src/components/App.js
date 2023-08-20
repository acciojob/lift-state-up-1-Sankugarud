
import React , {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [modal, setModal] = useState(false);

  let showmodal = () => {
    setModal(true);
  }

  return (
    <div>
        <div className="parent">
          <h2>Parent Component</h2>
          <div className="child">
            <h3>Child Component</h3> 
            <button onClick={showmodal}>Show Modal</button>

            {
            modal && (<div className="modal">
            <h3>Modal content</h3>
            <p>This is modal content</p>
            </div>)
          }
          </div>
          
          

        </div>
    </div>
  )
}

export default App
