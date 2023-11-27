import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import "./AllStates.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/api";
import Loading from "../Shared/Loading/Loading";
const AllStates = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${baseUrl}/state`).then((res) => {
      if (res?.data?.status) {
        setData(res?.data?.data);
        setLoading(false);
      }
    });
  }, []);
  return (
    <div>
      <Container>
        <div>
          <div>
            <h3 className="text-start mt-5 mb-4">All The States</h3>
          </div>
        </div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            <Table className="mb-5" responsive striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Country</th>
                  <th>State Name</th>
                  <th>State Code</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((d, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>USA</td>
                    <td>{d?.stateName}</td>
                    <td>{d?.stateCode}</td>
                    <td>
                      <button
                        onClick={() =>
                          navigate(`/state/${d?.stateName}/${d?.stateCode}`)
                        }
                        className="view-details-btn"
                      >
                        View Covid-19 Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Container>
    </div>
  );
};

export default AllStates;
