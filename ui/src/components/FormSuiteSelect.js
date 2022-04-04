import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const BASE_URL = `${location.origin}/api`;

const FormSuiteSelect = (props) => {
    const { project, setSuite, setAppLoading, taskInProgress } = props;

    const [username, setUsername] = useState(sessionData.username);
    const [password, setPassword] = useState(sessionData.password);
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        let unmounted = false;
        async function getSuites() {
            let suites_url = `${BASE_URL}/get_suites/${project.id}`;
            setSuite({ id: "Select suite", name: "Select suite" });
            setLoading(true);
            setAppLoading(true);
            const response = await axios.get(suites_url, {
                auth: {
                    username: username,
                    password: password
                }
            });
            const body = await response.data;
            if (!unmounted) {
                setItems(
                    body.map(( suite ) => ({ label: suite.name, value: suite.id }))
                );
                setLoading(false);
                setAppLoading(false);
            }
        }
        if (project.name !== "Select project") {
            getSuites().catch(error => {
                console.log(error);
                setAppLoading(false);
            });
        } else {
            setItems([]);
            setSuite({ id: "Select suite", name: "Select suite" });
        }
        return () => {
            unmounted = true;
        };
    }, [project]);

    return (
        <Form.Select 
            aria-label="Select suite" 
            id="formSuiteSelect"
            disabled={loading || project.name==="Select project" || taskInProgress}
            onChange={(e) => setSuite({
                id: e.currentTarget.value,
                name: e.currentTarget.options[e.currentTarget.selectedIndex].text
            })}
        >
            <option key="Select suite" value="Select suite">
                Select suite
            </option>
            {items.map(({ label, value }) => (
            <option key={value} value={value}>
                {label}
            </option>
            ))}
        </Form.Select>
    );
}

export default FormSuiteSelect;