import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const BASE_URL = `${location.origin}/api`;

const FormSectionSelect = (props) => {
    const { project, suite, section, setSection, setAppLoading } = props;

    const [username, setUsername] = useState(sessionData.username);
    const [password, setPassword] = useState(sessionData.password);
    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        setSection("Select top section");
        setLoading(true);
    }, [project]);

    useEffect(() => {
        let unmounted = false;
        async function getSections() {
            let sections_url = `${BASE_URL}/get_sections/${project}&suite_id=${suite}`;
            setLoading(true);
            setAppLoading(true);
            const response = await axios.get(sections_url, {
                auth: {
                    username: username,
                    password: password
                }
            })
            const body = await response.data;
            if (!unmounted) {
                setItems(
                    body.map(( section ) => ({ label: section.name, value: section.id }))
                );
                setLoading(false);
                setAppLoading(false);
            }
        }
        if (project !== "Select project" && suite !== "Select suite") {
            getSections();
        }
        return () => {
            unmounted = true;
        };
    }, [suite]);

    return (
        <Form.Select 
            aria-label="Select top section" 
            className="w-100" 
            id="formSectionSelect"
            disabled={loading}
            value={section}
            onChange={(e) => setSection(e.currentTarget.value)}
        >
            <option key="Select top section" value="Select top section">
                Select top section
            </option>
            {items.map(({ label, value }) => (
            <option key={value} value={value}>
                {label}
            </option>
            ))}
        </Form.Select>
    );
}

export default FormSectionSelect;