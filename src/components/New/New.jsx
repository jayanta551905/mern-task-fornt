import React, {Fragment, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import {AiOutlineCalendar, AiOutlineEdit, AiOutlineDelete} from "react-icons/ai";
import { useSelector } from 'react-redux';
import { TaskListByStatus } from '../../APIRequest/APIRequest';
import { deleteAlert } from '../../helper/DeleteAlert';

const New = () => {

    useEffect(()=>{
        TaskListByStatus("New")
    },[]);
    
    const newList = useSelector((state)=>state.task.New);

    return (
        <Fragment>
            <Container fluid={true} className="content-body">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h5>New Task</h5>
                    </div>
                    <div className="col-12 float-end col-md-6 col-lg-4 px-2 ">
                        <div className="row">
                            <div className="col-8">
                                <input type="text" className="form-control w-100"/>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    {
                        newList.map((item, i)=>
                        <div key={i.toString()} className="col-12 col-lg-4 col-sm-6 col-md-4 p-2">
                        <div className="card h-100">
                            <div className="card-body">
                                <h6 className="animated fadeInUp">{item.title}</h6>
                                <h6 className="animated fadeInUp">{item.description}</h6>
                                <p className="m-0 p-0 animated fadeInUp">
                                    <AiOutlineCalendar/>{item.createdDate}
                                    <a className="icon-nav text-primary mx-1"><AiOutlineEdit/></a>
                                    <a onClick={()=>deleteAlert(item._id)} className="icon-nav text-danger mx-1"><AiOutlineDelete/></a>
                                    <a className="badge float-end bg-info">{item.status}</a>
                                </p>
                            </div>
                        </div>
                        </div>
                    )}               
                </div>
            </Container>
        </Fragment>
    );
};

export default New;