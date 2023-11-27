import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { baseUrl } from "../../services/api";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateModal = ({
  show,
  handleClose,
  refetch,
  setRefetch,
  selected,
  setSelected,
}) => {
  const [formData, setFormData] = useState({
    stateCode: "AL",
    date: "",
    positive: "",
    recovered: "",
    death: "",
  });
  useEffect(() => {
    setFormData({
      stateCode: selected?.stateCode,
      date: selected?.date,
      positive: selected?.positive,
      recovered: selected?.recovered,
      death: selected?.death,
    });
  }, [
    selected?.date,
    selected?.death,
    selected?.positive,
    selected?.recovered,
    selected?.stateCode,
  ]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleUpdate = async() => {
    if (
      formData.stateCode &&
      formData.date &&
      formData?.death &&
      formData.positive &&
      formData?.recovered
    ) {
      await axios
        .patch(`${baseUrl}/state-data/${selected?._id}`, formData)
        .then((res) => {
          if (res?.data?.status) {
            toast.success(res?.data?.message);
            handleClose();
            setRefetch(refetch + 1);
            setSelected({});
          } else {
            toast.error(res.data?.message);
          }
        });
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="">
          <Form.Group className="mb-3" controlId="formBasicstate">
            <Form.Label>State</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="stateCode"
              value={formData?.stateCode}
              type="text"
              placeholder="Enter State"
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="date"
              value={formData?.date}
              type="date"
              placeholder="Select Date"
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPositive">
            <Form.Label>Positive</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="positive"
              value={formData?.positive}
              type="text"
              placeholder="Enter Positive"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRecovered">
            <Form.Label>Recovered</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="recovered"
              value={formData?.recovered}
              type="text"
              placeholder="Enter Recovered"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDeath">
            <Form.Label>Death</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="death"
              value={formData?.death}
              type="text"
              placeholder="Enter Death"
            />
          </Form.Group>
        </div>
      </Modal.Body>
      <div className="d-flex justify-content-end items-end m-2">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <button className="delete-btn ms-2" onClick={handleUpdate}>
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default UpdateModal;
