import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Toast } from "react-bootstrap";
import moment from 'moment';

const TechnologyStack = (props) => {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    return (
        <>
        <Toast show={showA} onClose={toggleShowA} className="w-100 mb-3">
        <Toast.Header closeButton={false}>
            <i className="fa fa-comments me-2" aria-hidden="true"></i>
            <strong className="me-auto">Announcement</strong>
            <small>{moment("20220411", "YYYYMMDD").fromNow()}</small>
        </Toast.Header>
        <Toast.Body>Importing is now allowed only for <strong>Siebel CRM</strong> project with custom fields. Test Cases will be created as Regression type.</Toast.Body>
        </Toast>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <legend className="text-center ps-4">Technology stack</legend>
                </Accordion.Header>
                <Accordion.Body>
                    <Row className="mt-4 mb-3">
                        <Col className="text-center"><img height="60" src={`${static_root}images/django_icon.png`}></img></Col>
                        <Col className="text-center"><img height="60" src={`${static_root}images/django_rest_framework_icon.png`}></img></Col>
                        <Col className="text-center"><img height="60" src={`${static_root}images/react_icon.png`}></img></Col>
                    </Row>
                    <Row className="mt-4 mb-3">
                        <Col className="text-center"><img height="60" src={`${static_root}images/bootstrap_icon.png`}></img></Col>
                        <Col className="text-center"><img height="60" src={`${static_root}images/docker_icon.png`}></img></Col>
                        <Col className="text-center"><img height="60" src={`${static_root}images/mysql_icon.png`}></img></Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
    );
}

export default TechnologyStack;