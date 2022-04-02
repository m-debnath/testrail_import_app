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
        setSection({ id: "Select top section", name: "Select top section" });
        setLoading(true);
    }, [project]);

    useEffect(() => {
        let unmounted = false;
        async function getSections() {
            let sections_url = `${BASE_URL}/get_sections/${project.id}&suite_id=${suite.id}`;
            setLoading(true);
            setAppLoading(true);
            const response = await axios.get(sections_url, {
                auth: {
                    username: username,
                    password: password
                }
            });
            const body = await response.data;
            if (!unmounted) {
                setItems(
                    body.map(( section ) => ({ label: section.name, value: section.id }))
                );
                setLoading(false);
                setAppLoading(false);
            }
        }
        if (project.name !== "Select project" && suite.name !== "Select suite") {
            getSections().catch(error => {
                console.log(error);
                setAppLoading(false);
            });
        } else {
            setItems([]);
            setSection({ id: "Select top section", name: "Select top section" });
        }
        return () => {
            unmounted = true;
        };
    }, [suite]);

    return (
        <Form.Select 
            aria-label="Select top section" 
            id="formSectionSelect"
            disabled={loading || suite.name==="Select suite"}
            onChange={(e) => setSection({
                id: e.currentTarget.value,
                name: e.currentTarget.options[e.currentTarget.selectedIndex].text
            })}
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