
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
          <h1>Parent Component</h1>
          <div className="child">
            <h3>Child Component</h3> 
            <button onClick={showmodal}>Show Modal</button>

           
          </div>
          <div className="modal">
          {
            modal && (
              <div>
              <h3>Modal content</h3>
              <p>This is modal content</p>
            </div>
            )
          }
          </div>

        </div>
    </div>
  )
}

export default App
