import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState,useEffect} from "react";
import './style.css';



function Error(props) {
    function handleClose(){
        props.setShow(false)
    }
    return (
        <div>
          <Modal  show={props.show} onHide = {handleClose} >
            <Modal.Header style={{background:'var(--bgGrn)',color:'var(--primary)'}} closeButton>
              <Modal.Title>Something went wrong</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background:'var(--primary)',color:'var(--bgGrn)'}}>{props.errorMsg}</Modal.Body>
            <Modal.Footer style={{background:'var(--primary)',color:'var(--primary)'}}>
              <Button style={{background:'var(--accentPlum)'}} variant="secondary" onClick={handleClose} >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
}

export default Error;