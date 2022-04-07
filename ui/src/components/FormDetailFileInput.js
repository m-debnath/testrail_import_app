import React from "react";
import { Form } from "react-bootstrap";

const FormDetailFileInput = (props) => {
    const { section, idFileName, setDetailFileName, taskInProgress } = props;

    return (
        <>
            <Form.Label>File containing QC test case with steps.xlsx</Form.Label>
            <Form.Control 
                id="formIdFileInput"
                type="file"
                accept=".xlsx"
                disabled={section.name==="Select top section" || idFileName===undefined || idFileName==="" || taskInProgress}
                onChange={(e) => setDetailFileName(e.target.files[0] ? e.target.files[0]: "")}
            />
        </>
    );
}

export default FormDetailFileInput;