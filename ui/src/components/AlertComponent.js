import React from "react";
import { Alert } from "react-bootstrap";

const AlertComponent = (props) => {
    const { alertLevel, alertMessage, alertShow, setAlertShow } = props;
    if (alertShow) {
        return (
            <Alert variant={alertLevel} onClose={() => setAlertShow(false)} dismissible>
                <p>{alertMessage}</p>
            </Alert>
        );
    }
}

export default AlertComponent;