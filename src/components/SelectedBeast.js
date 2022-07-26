import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Example extends React.Component {

    openModal = () => {
        this.props.handleShow();
      }
      closeModal = () => {
        this.props.handleClose();
      }
    
    render() {
        
  return (
    <>
      <Modal show={this.props.show} onHide={this.closeModal}> 
        <Modal.Header closeButton>

        </Modal.Header >
        <img src={this.props.image_url} alt="modalBea"/>
        <Modal.Body>{this.props.description}</Modal.Body>
        <Modal.Body>❤ {this.props.likes}  👎{this.props.disLikes}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

}

export default Example;