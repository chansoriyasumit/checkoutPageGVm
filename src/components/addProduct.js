import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const AddProduct = ({show,handleClose,handleChange,submitData}) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form>
                            <div >
                                <label>
                                    Name
                                </label>
                                <Form.Control name='name' type='text' onChange={handleChange("name")}/>
                            </div>
                            <div>
                                <label>
                                    Image
                                </label>
                                <Form.Control name='image' onChange={handleChange("image")}  type='file'/>
                            </div>
                            <div>
                                <label>
                                    Description
                                </label>
                                <Form.Control name='description' onChange={handleChange("description")}  type='text'/>
                            </div>
                            <div>
                                <label>
                                    Currency
                                </label>
                                <Form.Control name='currency' onChange={handleChange("currency")}  type='text'/>
                            </div>
                            <div>
                                <label>
                                    Price
                                </label>
                                <Form.Control name='price' type='text' onChange={handleChange("price")}/>
                            </div>
                            
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                
                <Button variant="primary" onClick={submitData}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default AddProduct;