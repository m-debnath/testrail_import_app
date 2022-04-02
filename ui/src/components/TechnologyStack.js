import React from "react";
import { Accordion } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const TechnologyStack = (props) => {
    return (
        <>
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