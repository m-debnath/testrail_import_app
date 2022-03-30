import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import { Card } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import FormProjectSelect from './FormProjectSelect';
import FormSuiteSelect from "./FormSuiteSelect";

const BASE_URL = `${location.origin}/api`;

const App = (props) => {
    const [username, setUsername] = useState(sessionData.username);
    const [password, setPassword] = useState(sessionData.password);
    const [project, setProject] = useState("Select project");
    const [suite, setSuite] = useState("Select suite");

    useEffect(() => {
        console.log(project);
        console.log(suite);
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
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formSuite">
                            <FormSuiteSelect 
                                project={project}
                                suite={suite}
                                setSuite={setSuite}
                            />
                        </Form.Group>
                </Card.Body>
                </Card>
            </Form>
        </div>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);