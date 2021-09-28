import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class Update extends Component {
    render() {
        return (
            <Modal show={this.props.showModal}  onHide={this.props.handelDispalyUpdatedModal}>
            <Modal.Header closeButton>
              <Modal.Title>Updat Fruits</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.props.updateFav}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="frName" defaultValue={this.props.seletedItem.name} />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Photo</Form.Label>
    <Form.Control type="text" name="frImg" defaultValue={this.props.seletedItem.image}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" name="frPrice" defaultValue={this.props.seletedItem.price}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
            </Modal.Body>
          </Modal>
        )
    }
}

export default Update
