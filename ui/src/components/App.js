import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import { Card } from 'react-bootstrap';
import { Form } from "react-bootstrap";
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

    useEffect(() => {
        console.log(project);
        console.log(suite);
        console.log(section);
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