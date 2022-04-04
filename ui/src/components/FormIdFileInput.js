import React from "react";
import { Form } from "react-bootstrap";

const FormIdFileInput = (props) => {
    const { section, setIdFileName, taskInProgress } = props;

    return (
        <>
            <Form.Label>File containing QC test case ids.xlsx</Form.Label>
            <Form.Control 
                id="formIdFileInput"
                type="file"
                accept=".xlsx"
                disabled={section.name==="Select top section" || taskInProgress}
                onChange={(e) => setIdFileName(e.target.files[0] ? e.target.files[0]: "")}
            />
        </>
    );
}

export default FormIdFileInput;