import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const FormDetailFileInput = (props) => {
    const { idFileName, setDetailFileName, setAppLoading } = props;

    return (
        <>
            <Form.Label>File containing QC test case with steps.xlsx</Form.Label>
            <Form.Control 
                id="formIdFileInput"
                type="file"
                accept=".xlsx"
                disabled={idFileName===""}
                onChange={(e) => setDetailFileName(e.target.files[0].name)}
            />
        </>
    );
}

export default FormDetailFileInput;