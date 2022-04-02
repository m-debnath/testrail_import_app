import React from "react";
import { Form } from "react-bootstrap";

const FormRetrySwitch = (props) => {
    const { section, idFileName, detailFileName, setRetrySwitch, setAppLoading } = props;

    return (
        <>
        <Form.Label>Re-upload test cases?</Form.Label>
        <Form.Check 
            disabled={section.name==="Select top section" || idFileName===undefined || detailFileName===undefined}
            type="switch"
            label="This will reprocess the test cases even if they have Testrail id populated in the test steps .xlsx file."
            id="formRetrywitchInput"
            onChange={(e) => setRetrySwitch(e.target.checked)}
        />
      </>
    );
}

export default FormRetrySwitch;