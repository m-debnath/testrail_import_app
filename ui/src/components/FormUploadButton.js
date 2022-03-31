import React from "react";
import { Button } from "react-bootstrap";

const FormUploadButton = (props) => {
    const { section, idFileName, detailFileName, setAppLoading } = props;

    return (
        <div className="d-grid">
            <Button 
                if="formUploadButton"
                variant="dark"
                disabled={section==="Select top section" || idFileName==="" || detailFileName===""}
                size="lg"
            >
            Upload test cases to Testrail
            </Button>
        </div>
    );
}

export default FormUploadButton;