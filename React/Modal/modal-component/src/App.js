import React, { useState } from "react";
import { Modal } from "./components/Modal.js";

function App() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  const Data = {
    header: "Hello",
    heading: "World",
    body: "Lorem ipsum",
    button: "close",
  };

  return (
    <div>
      {show ? (
        <div onClick={closeModalHandler} className="back-drop"></div>
      ) : null}
      <button onClick={() => setShow(true)} className="btn-openModal">
        The Modal
      </button>
      <Modal
        header={Data.header}
        heading={Data.heading}
        body={Data.body}
        button={Data.button}
        show={show}
        close={closeModalHandler}
      />
    </div>
  );
}

export default App;
