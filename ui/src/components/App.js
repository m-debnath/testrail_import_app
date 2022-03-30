import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import { Card } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import FormProjectSelect from './FormProjectSelect';
import FormSuiteSelect from "./FormSuiteSelect";
import FormSectionSelect from "./FormSectionSelect";

const BASE_URL = `${location.origin}/api`;

const App = (props) => {
    const [username, setUsername] = useState(sessionData.username);
    const [password, setPassword] = useState(sessionData.password);
    const [project, setProject] = useState("Select project");
    const [suite, setSuite] = useState("Select suite");
    const [section, setSection] = useState("Select top section");
    const [apploading, setAppLoading] = useState(false);

    useEffect(() => {
        console.log(project);
        console.log(suite);
        console.log(section);
        console.log(apploading);
    });

    return (
        <div>
            <Form>
                <Card>
                <Card.Body>
                        <legend className="border-bottom mb-4">Please select Testrail project and test suite.</legend>
                        <Form.Group className="mb-4" controlId="formProject">
                            <FormProjectSelect 
                                project={project}
                                setProject={setProject}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formSuite">
                            <FormSuiteSelect 
                                project={project}
                                suite={suite}
                                setSuite={setSuite}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                </Card.Body>
                </Card>
                <Card>
                <Card.Body>
                        <legend className="border-bottom mb-4">Please select the top section.</legend>
                        <p>Test cases and sub-sections will be created under this.</p>
                        <Form.Group className="mb-4" controlId="formSection">
                            <FormSectionSelect 
                                project={project}
                                suite={suite}
                                section={section}
                                setSection={setSection}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                </Card.Body>
                </Card>
            </Form>
            <Modal 
                show={apploading} 
                backdrop="static" 
                keyboard={false} 
                animation={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Container fluid>
                            <Row>
                                <Col className="text-center align-middle">
                                    <Spinner animation="border" role="status">
                                    </Spinner>
                                </Col>
                            </Row>
                        </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);