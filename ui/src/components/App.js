import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import { Card } from 'react-bootstrap';
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const BASE_URL = `${location.origin}/api`;

const App = (props) => {
    const [username, setUsername] = useState(sessionData.username);
    const [password, setPassword] = useState(sessionData.password);
    const [projects, setProjects] = useState();

    useEffect(() => {
        let projects_url = `${BASE_URL}/get_projects`
        let projects = [];
        let more_projects = true;
        // while (more_projects) {
            axios.get(projects_url, {
                auth: {
                    username: username,
                    password: password
                }
            }).then(resp => {
                projects.push(...resp.data.projects);
                console.log(resp.data._links.next);
                if (resp.data._links.next) {
                    next_url = resp.data._links.next.replace('"next": "/api/v2', '"next": "');
                    projects_url = `${BASE_URL}${next_url}`;
                } else {
                    more_projects = false;
                }
            });
        // }
        console.log(more_projects);
        console.log(projects);
    }, []);

    return (
        <div>
            <Card>
            <Card.Body>
                <Card.Title>Please select Testrail project and test suite.</Card.Title>
                <Container>
                    <Row className="mt-4">
                        <Col>
                            <DropdownButton id="dropdown-select-project" title="Select project" variant="dark">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else big value</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col>
                            <DropdownButton id="dropdown-select-suite" title="Select test suite" variant="dark">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            </Card>
        </div>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);