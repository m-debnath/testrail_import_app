import React from "react";
import { Form } from "react-bootstrap";

const FormAttachmentFileInput = (props) => {
    const { section, idFileName, detailFileName, setAttachmentFileName, taskInProgress } = props;

    return (
        <>
            <Form.Label>File attachments.zip</Form.Label>
            <Form.Control 
                id="formAttachmentFileInput"
                type="file"
                accept=".zip"
                disabled={
                    section.name==="Select top section" || 
                    idFileName===undefined || 
                    idFileName==="" || 
                    detailFileName===undefined || 
                    detailFileName==="" || 
                    taskInProgress
                }
                onChange={(e) => setAttachmentFileName(e.target.files[0] ? e.target.files[0]: "")}
            />
        </>
    );
}

export default FormAttachmentFileInput;