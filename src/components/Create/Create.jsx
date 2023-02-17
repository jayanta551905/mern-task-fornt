import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Create = () => {
    return (
        <Container fluid={true} className="content-body">
            <Row className="d-flex justify-content-center">
                <div className="col-12 col-lg-8 col-sm-12 col-md-8 p-2">
                    <div className="card-body">
                        <h5>Create New</h5>
                        <br/>
                        <input placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                        <br/>
                        <textarea rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"/>
                        <br/>
                        <button className="btn float-end btn-primary">Create</button>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Create;