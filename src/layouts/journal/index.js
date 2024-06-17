/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

//import FileUpload from "/project/FlyJournal/src/components/Functions/FileUpload.js";
import "./fileUpload.css";
//import JournalView from "components/Features/JournalView.js";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  ListGroup,
  form,
} from "react-bootstrap";

function Journal() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  /**
   * Functions for uploading & dropping documents
   *
   */
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleFileChange = (e) => {
    setFiles((prevFiles) => [...prevFiles, ...e.target.files]);
  };

  const handleRemoveFile = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    // Example: sending form data to the server using fetch
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const dropzoneStyle = {
    border: "2px dashed #007bff",
    borderRadius: "5px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Journal</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Location Name</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Location Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-3" md="4">
                      <Form.Group>
                        <label>Date</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
                          type="date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Flies Used</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Flies Used"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label># Of Fish Caught</label>
                        <Form.Control defaultValue="0" placeholder="0" type="number"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Notes</label>
                        <Form.Control
                          cols="80"
                          placeholder="Enter Fishing Notes Here."
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* File Drop Section*/}
                  <Container>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Profile Pictures</Form.Label>
                        <div {...getRootProps({ className: "dropzone" })} style={dropzoneStyle}>
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Drop the files here...</p>
                          ) : (
                            <p>Drag 'n' drop some files here, or click to select files</p>
                          )}
                        </div>
                        <Form.Control
                          type="file"
                          onChange={handleFileChange}
                          multiple
                          className="mt-3"
                        />
                        {files.length > 0 && (
                          <ListGroup className="mt-3">
                            {files.map((file, index) => (
                              <ListGroup.Item key={index}>
                                {file.name}
                                <Button
                                  variant="danger"
                                  size="sm"
                                  onClick={() => handleRemoveFile(file)}
                                  className="float-end"
                                >
                                  Remove
                                </Button>
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        )}
                      </Form.Group>
                      <Button variant="primary" type="submit" className="remove-files-button">
                        Save
                      </Button>
                    </Form>
                  </Container>
                  {/* <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Submit
                  </Button> */}
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Journal;
