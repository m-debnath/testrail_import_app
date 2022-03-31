import React from "react";
import { Form } from "react-bootstrap";

const FormIdFileInput = (props) => {
    const { section, idFileName, setIdFileName, setAppLoading } = props;

    return (
        <>
            <Form.Label>File containing QC test case ids.xlsx</Form.Label>
            <Form.Control 
                id="formIdFileInput"
                type="file"
                accept=".xlsx"
                disabled={section==="Select top section"}
                onChange={(e) => setIdFileName(e.target.files[0] ? e.target.files[0].name: "")}
            />
        </>
    );
}

export default FormIdFileInput;