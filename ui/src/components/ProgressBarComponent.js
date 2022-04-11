import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const humanizeDuration = (duration) => {
    let op = [];
    duration = duration.split(`.`)[0];

    let hh = duration.split(`:`)[0];
    let mm = duration.split(`:`)[1];
    let ss = duration.split(`:`)[2];

    hh = hh === '00' ? '' : hh.startsWith('0') ? hh[1] + 'h' : hh + 'h';
    mm = mm === '00' ? '' : mm.startsWith('0') ? mm[1] + 'm' : mm + 'm';
    ss = ss === '00' ? '' : ss.startsWith('0') ? ss[1] + 's' : ss + 's';

    op.push(hh);
    op.push(mm);
    op.push(ss);

    return op.join(' ').trim();
}

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
    let elapsedTime = <></>;
    if (currentTask.status === "Complete" || currentTask.status === "Failed" || currentTask.status === "Cancelled") {
        progressInstance = <ProgressBar striped now={now} label={`${now}%`} visuallyHidden />;
        if (currentTask.status === "Complete") {
            elapsedTime = <>d in {humanizeDuration(currentTask.elapsed_time)}.</>;
            statusIcon = <i className="ps-1 fa fa-check" aria-hidden="true"></i>;
        }
        if (currentTask.imported_cases > 0) {
            downloadResult = <Row className="mt-2">
                <Col>Download processed file with Testrail information: <a href={`${location.origin}${currentTask.steps_file_name}`} className="link-secondary">{currentTask.steps_file_name.split("/").at(-1)}</a> </Col>
            </Row>;
        }
        if (currentTask.status === "Failed") {
            statusIcon = <i className="ps-1 fa fa-exclamation-circle" aria-hidden="true"></i>;
            statusMessage = <Row className="mt-2">
                <Col className="text-danger">Error: {currentTask.status_message}</Col>
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
                    <Col xs={6} className="text-center">Status: {currentTask.status}{elapsedTime}{statusIcon}</Col>
                    <Col style={{"textAlign": "right"}}>Processed: {currentTask.imported_cases} of {currentTask.total_cases}</Col>
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