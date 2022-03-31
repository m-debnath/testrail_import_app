import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const BASE_URL = `${location.origin}/api`;

const FormSuiteSelect = (props) => {
    const { project, suite, setSuite, setAppLoading } = props;

    const [username, setUsername] = useState(sessionData.username);
    const [password, setPassword] = useState(sessionData.password);
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        let unmounted = false;
        async function getSuites() {
            let suites_url = `${BASE_URL}/get_suites/${project}`;
            setSuite("Select suite");
            setLoading(true);
            setAppLoading(true);
            const response = await axios.get(suites_url, {
                auth: {
                    username: username,
                    password: password
                }
            })
            const body = await response.data;
            if (!unmounted) {
                setItems(
                    body.map(( suite ) => ({ label: suite.name, value: suite.id }))
                );
                setLoading(false);
                setAppLoading(false);
            }
        }
        if (project !== "Select project") {
            getSuites().catch(error => {
                console.log(error);
                setAppLoading(false);
            });
        }
        return () => {
            unmounted = true;
        };
    }, [project]);

    return (
        <Form.Select 
            aria-label="Select suite" 
            className="w-100" 
            id="formSuiteSelect"
            disabled={loading}
            value={suite}
            onChange={(e) => setSuite(e.currentTarget.value)}
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