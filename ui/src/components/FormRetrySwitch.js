import React from "react";
import { Form } from "react-bootstrap";

const FormRetrySwitch = (props) => {
    const { section, idFileName, detailFileName, attachmentFileName, setRetrySwitch, taskInProgress } = props;

    return (
        <>
        <Form.Label>Re-upload test cases?</Form.Label>
        <Form.Check 
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
            type="switch"
            label="This will reprocess the test cases even if they have Testrail id populated in the test steps .xlsx file."
            id="formRetrywitchInput"
            defaultChecked
            onChange={(e) => setRetrySwitch(e.target.checked)}
        />
      </>
    );
}

export default FormRetrySwitch;