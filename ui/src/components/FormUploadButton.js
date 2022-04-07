import React from "react";
import { Button } from "react-bootstrap";

const FormUploadButton = (props) => {
    const { section, idFileName, detailFileName, attachmentFileName, taskInProgress } = props;

    return (
        <div className="d-grid">
            <Button 
                if="formUploadButton"
                variant="dark"
                disabled={
                    section.name==="Select top section" || 
                    idFileName===undefined || 
                    idFileName==="" || 
                    detailFileName===undefined || 
                    detailFileName==="" || 
                    attachmentFileName===undefined || 
                    attachmentFileName==="" || 
                    taskInProgress
                }
                size="lg"
                type="submit"
            >
            Upload test cases to Testrail
            </Button>
        </div>
    );
}

export default FormUploadButton;