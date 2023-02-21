import React, { useRef } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useNavigate } from 'react-router';
import { NewTaskRequest } from '../../APIRequest/APIRequest';
import { errorToast, isEmpty } from '../../helper/FormHelper';

const Create = () => {

    let titleRef, taskDesRef = useRef();
    let navigate = useNavigate();
    const CreateNew = () => {
        let title = titleRef.value;
        let description = taskDesRef.value;

        if (isEmpty(title)){
            errorToast("Task Name Required")
        }
        else if (isEmpty(description)){
            errorToast("Task Description Required")
        }
        else{
            NewTaskRequest(title, description).then((result)=>{
                if (result===true){
                    navigate("/new")
                }
            })
        }
    }


    return (
        <Container fluid={true} className="content-body">
            <Row className="d-flex justify-content-center">
                <div className="col-12 col-lg-8 col-sm-12 col-md-8 p-2">
                    <div className="card-body">
                        <h5>Create New</h5>
                        <br/>
                        <input ref={(input)=>titleRef=input} placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                        <br/>
                        <textarea ref={(input)=>taskDesRef=input} rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"/>
                        <br/>
                        <button onClick={CreateNew} className="btn float-end btn-primary">Create</button>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Create;