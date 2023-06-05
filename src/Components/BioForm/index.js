import React, {useState,useEffect} from "react";
import './style.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
// import { Modal, Button } from 'react-bootstrap'
import API from '../../utils/API'

export default function BioForm(props) {

  const [investType, setInvestType] = useState('')
  const [favStock, setFavStock] = useState('')
  const [bio, setBio] = useState('')


  function handleChange(e){
    if(e.target.name === 'type'){
      setInvestType(e.target.value)
    }else if (e.target.name === 'fav'){
      setFavStock(e.target.value)
    }else if (e.target.name === 'bio'){
      setBio(e.target.value)
    }
  }

  async function update(){
    try {
        const response = await API.updateProfileBio(props.username,bio,investType,favStock)
        props.setDesc(bio)
        props.setInvestType(investType)
        props.setFavStock(favStock)
        console.log(response)
        props.handleClose()
      } catch (error) {
        console.error(error);
      }
  }

//   useEffect(()=>{
//     // console.log(window.location.pathname.split('/')[2])
//     setFavStock(props.fav)
//     setBio(props.desc)
//     setInvestType(props.itype)
//     },[])

  return (
    <Modal show = {props.show} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <form>
      <div className="form-group">
        <label for="recipient-name" className="col-form-label">Type of Investor:</label>
        <input name = 'type' value = {investType} onChange = {handleChange} type="text" className="form-control" id="recipient-name"/>
        <label for="recipient-name" className="col-form-label">Favorite Stock:</label>
        <input name = 'fav' value = {favStock} onChange = {handleChange} type="text" className="form-control" id="recipient-name"/>
      </div>
      <div className="form-group">
        <label for="message-text" className="col-form-label">bio:</label>
        <textarea name ='bio' value = {bio} onChange = {handleChange} className="form-control" id="message-text"></textarea>
      </div>
    </form>


    </Modal.Body>
    <Modal.Footer>
      <Button style={{background: "#65293d",color: "#d8d1bc",display: "flex",padding: "0",}} variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      <Button style={{background: "#65293d",color: "#d8d1bc",display: "flex",padding: "0",}} variant="primary" onClick={update}>
        update profile
      </Button>
    </Modal.Footer>
  </Modal>
  )
}