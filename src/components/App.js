import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  }

  return (
    <div>
      <div className="parent">
        <h1>Parent Component</h1>
        <div className="child">
          <h3>Child Component</h3> 
          <button onClick={showModal}>Show Modal</button>
        </div>
        <div className="modal">
          {modal && (
            <div>
              <h3>Modal Content</h3>
              <p>This is the modal content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
