import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const ProgressBarComponent = (props) => {
    const { currentTask } = props;

    let now = parseInt(( currentTask.imported_cases / currentTask.total_cases ) * 100);

    let progressInstance = <></>;
    let statusIcon = <></>;
    let downloadResult = <></>;
    if (currentTask.status === "Complete") {
        progressInstance = <ProgressBar striped now={now} label={`${now}%`} visuallyHidden />;
        statusIcon = <i className="ps-1 fa fa-check" aria-hidden="true"></i>;
        downloadResult = <Row className="mt-2">
            <Col>Download processed file with Testrail Results: <a href={`${location.origin}${currentTask.steps_file_name}`} className="link-secondary">{currentTask.steps_file_name.split("/").at(-1)}</a> </Col>
        </Row>;
    } else if (currentTask.status === "In Progress") {
        progressInstance = <ProgressBar animated now={now} label={`${now}%`} visuallyHidden />;
        statusIcon = <Spinner className="ms-2" animation="border" role="status" size="sm" />;
    } else {
        progressInstance = <ProgressBar striped now={now} label={`${now}%`} visuallyHidden />;
    }

    return(
        <Card className="mb-2 pb-2">
            <Card.Body>
                <Row className="mb-2 align-middle">
                    <Col>Task Id: {currentTask.session_id}</Col>
                    <Col className="text-center">Status: {currentTask.status}{statusIcon}</Col>
                    <Col style={{"text-align": "right"}}>Processed: {currentTask.imported_cases} of {currentTask.total_cases}</Col>
                </Row>
                {progressInstance}
                {downloadResult}
            </Card.Body>
        </Card>
    );
}

export default ProgressBarComponent;