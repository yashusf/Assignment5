import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import StateChart from "./StateChart";
import DeleteModal from "../Shared/DeleteModal/DeleteModal";
import CreateModal from "./CreateModal";
import UpdateModal from "./UpdateModal";
import axios from "axios";
import { baseUrl } from "../../services/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const State = () => {
  const { code, stateName } = useParams();
  const [deleteModal, setDeleteModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [refetch, setRefetch] = useState(0);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/state-data/getStateData/${code}`).then((res) => {
      if (res?.data?.status) {
        setData(res?.data?.data);
        setLoading(false);
      }
    });
  }, [code, refetch]);

  const handleDelete = async () => {
    await axios.delete(`${baseUrl}/state-data/${selected?._id}`).then((res) => {
      if (res?.data?.status) {
        toast.success(res?.data?.message);
        setRefetch(refetch + 1);
        setDeleteModal(false);
        setSelected({});
      } else {
        toast.error(res.data?.message);
      }
    });
  };
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Container>
          <div>
            <div>
              <h3 className="text-center mt-5 mb-4">
                Covid News of {stateName} on January, 2021
              </h3>
            </div>
          </div>
          <div>
            <h4 className="text-start mt-5 mb-4">
              Chart View For January, 2021
            </h4>
            <StateChart data={data} />
          </div>
          <div className=" mt-5 mb-4">
            <div className="d-flex justify-content-between items-start mb-3">
              <h4 className="text-start">Tabular View For January, 2021</h4>
              <button
                className="view-details-btn d-block"
                onClick={() => {
                  setCreateModal(true);
                }}
              >
                + New Entry
              </button>
            </div>

            <Table className="mb-5" responsive striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>State Code</th>
                  <th>Date</th>
                  <th>Positive</th>
                  <th>Recovered</th>
                  <th>Death</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((d, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{d?.stateCode}</td>
                    <td>{d?.date}</td>
                    <td>{d?.positive}</td>
                    <td>{d?.recovered ? d?.recovered : "Not Available"}</td>
                    <td>{d?.death}</td>
                    <td>
                      <button
                        onClick={() => {
                          setSelected(d);
                          setUpdateModal(true);
                        }}
                        className="view-details-btn"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setSelected(d);
                          setDeleteModal(true);
                        }}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      )}
      {/* delete */}
      <DeleteModal
        show={deleteModal}
        handleClose={() => setDeleteModal(false)}
        deleteFunc={handleDelete}
      />

      {/* CreateModal */}
      <CreateModal
        show={createModal}
        refetch={refetch}
        setRefetch={setRefetch}
        stateCode={code}
        handleClose={() => setCreateModal(false)}
      />

      {/* update */}
      <UpdateModal
        stateCode={code}
        refetch={refetch}
        setRefetch={setRefetch}
        show={updateModal}
        selected={selected}
        setSelected={setSelected}
        handleClose={() => setUpdateModal(false)}
      />
    </div>
  );
};

export default State;
