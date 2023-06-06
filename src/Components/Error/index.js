import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState,useEffect} from "react";
import './style.css';



function Error(props) {
    function handleClose(){
        props.setShow(false)
    }
    return (
        <>
          <Modal show={props.show} onHide = {handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>Something went wrong</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.errorMsg}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default Error;