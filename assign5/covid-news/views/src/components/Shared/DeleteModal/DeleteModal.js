import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteModal = ({ handleClose, show, deleteFunc }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you really want to delete?</Modal.Body>
        <div className="d-flex justify-content-end items-end m-2">
        <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <button className="delete-btn ms-2" onClick={deleteFunc}>
        Confirm
      </button>
        </div>
    </Modal>
  );
};

export default DeleteModal;
