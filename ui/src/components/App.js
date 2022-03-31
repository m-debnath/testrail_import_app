import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import { Card } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import FormProjectSelect from './FormProjectSelect';
import FormSuiteSelect from "./FormSuiteSelect";
import FormSectionSelect from "./FormSectionSelect";
import FormIdFileInput from "./FormIdFileInput";
import FormDetailFileInput from "./FormDetailFileInput";
import FormAttachmentFileInput from "./FormAttachmentFileInput";
import FormRetrySwitch from "./FormRetrySwitch";
import FormUploadButton from "./FormUploadButton";

const BASE_URL = `${location.origin}/api`;

const renderProjectTip = (props) => (
    <Tooltip id="project-tooltip" {...props}>
    <div className="mb-1">
    Test cases and sub-sections will be created under the section you select.
    </div>
    <div>
    If you can't find the required section, open Testrail and create it.
    </div>
    </Tooltip>
);

const renderFileTip = (props) => (
    <Tooltip id="file-tooltip" {...props}>
    <div className="mb-2">
    Files must be in <span className="text-warning">.xlsx</span> format. <br></br>
    If you have files with .xls extension, don't just rename it to .xlsx. <br></br>
    Open the file in Microsoft Excel and save it in .xlsx format.
    </div>
    <div className="mb-2">
    The data must be in a worksheet named <span className="text-warning">Query1</span>.
    </div>
    <div>
    Gather all the attachment folders under a folder named <span className="text-warning">attachments</span>. <br></br>
    Then, convert the folder into <span className="text-warning">attachments.zip</span> archive and upload.
    </div>
    </Tooltip>
);

const App = (props) => {
    const [username, setUsername] = useState(sessionData.username);
    const [password, setPassword] = useState(sessionData.password);
    const [project, setProject] = useState("Select project");
    const [suite, setSuite] = useState("Select suite");
    const [section, setSection] = useState("Select top section");
    const [idFileName, setIdFileName] = useState("");
    const [detailFileName, setDetailFileName] = useState("");
    const [attachmentFileName, setAttachmentFileName] = useState("");
    const [retrySwitch, setRetrySwitch] = useState(false);
    const [apploading, setAppLoading] = useState(false);
    

    useEffect(() => {
        console.log(project);
        console.log(suite);
        console.log(section);
        console.log(idFileName);
        console.log(detailFileName);
        console.log(attachmentFileName);
        console.log(retrySwitch);
        console.log(apploading);
    });

    return (
        <div>
            <Form>
                <Card>
                <Card.Body>
                        <legend className="border-bottom mb-4 legend">Please select Testrail project, test suite and top section.&nbsp;
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderProjectTip}
                            >
                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                            </OverlayTrigger>
                        </legend>
                        <Form.Group className="mb-4" controlId="formProject">
                            <FormProjectSelect 
                                project={project}
                                setProject={setProject}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formSuite">
                            <FormSuiteSelect 
                                project={project}
                                suite={suite}
                                setSuite={setSuite}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formSection">
                            <FormSectionSelect 
                                project={project}
                                suite={suite}
                                section={section}
                                setSection={setSection}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                        <legend className="border-bottom mb-4 legend">Please upload the spreadsheets and attachments exported from HP ALM.&nbsp;
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderFileTip}
                            >
                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                            </OverlayTrigger>
                        </legend>
                        <Form.Group className="mb-3" controlId="formIdFile">
                            <FormIdFileInput 
                                section={section}
                                idFileName={idFileName}
                                setIdFileName={setIdFileName}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDetailFile">
                            <FormDetailFileInput
                                section={section}
                                idFileName={idFileName}
                                setDetailFileName={setDetailFileName}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAttachmentFile">
                            <FormAttachmentFileInput
                                section={section}
                                idFileName={idFileName}
                                detailFileName={detailFileName}
                                setAttachmentFileName={setAttachmentFileName}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formRetrySwitch">
                            <FormRetrySwitch
                                section={section}
                                idFileName={idFileName}
                                detailFileName={detailFileName}
                                setRetrySwitch={setRetrySwitch}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formUpload">
                            <FormUploadButton
                                section={section}
                                idFileName={idFileName}
                                detailFileName={detailFileName}
                                setAppLoading={setAppLoading}
                            />
                        </Form.Group>
                </Card.Body>
                </Card>
            </Form>
            <Modal 
                show={apploading} 
                backdrop="static" 
                keyboard={false} 
                animation={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Container fluid>
                            <Row>
                                <Col className="text-center align-middle">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                </Col>
                            </Row>
                        </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);