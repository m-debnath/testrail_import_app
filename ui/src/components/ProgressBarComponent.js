import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const ProgressBarComponent = (props) => {
    const { currentTask } = props;

    let now = 0.0;
    if (currentTask.total_cases !== 0) {
        now = (( currentTask.imported_cases / currentTask.total_cases ) * 100).toFixed(2);
    }

    let progressInstance = <></>;
    let statusIcon = <></>;
    let downloadResult = <></>;
    let statusMessage = <></>;
    if (currentTask.status === "Complete" || currentTask.status === "Failed" || currentTask.status === "Cancelled") {
        progressInstance = <ProgressBar striped now={now} label={`${now}%`} visuallyHidden />;
        if (currentTask.status === "Complete") {
            statusIcon = <i className="ps-1 fa fa-check" aria-hidden="true"></i>;
        }
        downloadResult = <Row className="mt-2">
            <Col>Download processed file with Testrail information: <a href={`${location.origin}${currentTask.steps_file_name}`} className="link-secondary">{currentTask.steps_file_name.split("/").at(-1)}</a> </Col>
        </Row>;
        if (currentTask.status === "Failed") {
            statusIcon = <i className="ps-1 fa fa-exclamation-circle" aria-hidden="true"></i>;
            statusMessage = <Row className="mt-2">
                <Col>Status Message: {currentTask.status_message}</Col>
            </Row>;
        }
    } else if (currentTask.status === "In Progress") {
        progressInstance = <ProgressBar animated now={now} label={`${now}%`} visuallyHidden />;
        statusIcon = <Spinner className="ms-2" animation="border" role="status" size="sm" />;
    } else {
        progressInstance = <ProgressBar striped now={now} label={`${now}%`} visuallyHidden />;
    }

    return(
        <div>
        {currentTask.session_id !== "" ? 
        <Card className="mb-2 pb-2">
            <Card.Body>
                <Row className="mb-2 align-middle">
                    <Col>Task Id: {currentTask.session_id}</Col>
                    <Col className="text-center">Status: {currentTask.status}{statusIcon}</Col>
                    <Col style={{"text-align": "right"}}>Processed: {currentTask.imported_cases} of {currentTask.total_cases}</Col>
                </Row>
                {progressInstance}
                {downloadResult}
                {statusMessage}
            </Card.Body>
        </Card> : <></>}
        </div>
    );
}

export default ProgressBarComponent;