import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const BASE_URL = `${location.origin}/api`;

const FormProjectSelect = (props) => {
    const { project, setProject } = props;

    const [username, setUsername] = useState(sessionData.username);
    const [password, setPassword] = useState(sessionData.password);
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        let unmounted = false;
        async function getProjects() {
            let projects_url = `${BASE_URL}/get_projects`;
            const response = await axios.get(projects_url, {
                auth: {
                    username: username,
                    password: password
                }
            })
            const body = await response.data;
            if (!unmounted) {
                setItems(
                    body.map(( project ) => ({ label: project.name, value: project.id }))
                );
                setLoading(false);
            }
        }
        getProjects();
        return () => {
            unmounted = true;
        };
    }, []);

    return (
        <Form.Select 
            aria-label="Select project" 
            className="w-100" 
            autoFocus 
            id="formProjectSelect"
            disabled={loading}
            value={project}
            onChange={(e) => setProject(e.currentTarget.value)}
        >
            <option key="Select project" value="Select project">
                Select project
            </option>
            {items.map(({ label, value }) => (
            <option key={value} value={value}>
                {label}
            </option>
            ))}
        </Form.Select>
    );
}

export default FormProjectSelect;