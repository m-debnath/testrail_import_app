import React from "react";
import { Form } from "react-bootstrap";

const FormAttachmentFileInput = (props) => {
    const { detailFileName, setAttachmentFileName, setAppLoading } = props;

    return (
        <>
            <Form.Label>File attachments.zip</Form.Label>
            <Form.Control 
                id="formAttachmentFileInput"
                type="file"
                accept=".zip"
                disabled={detailFileName===""}
                onChange={(e) => setAttachmentFileName(e.target.files[0].name)}
            />
        </>
    );
}

export default FormAttachmentFileInput;