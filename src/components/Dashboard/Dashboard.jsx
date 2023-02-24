import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SummaryRequest } from '../../APIRequest/APIRequest';

const Dashboard = () => {

    useEffect(()=>{
        SummaryRequest()
    },[])

    const summeryList = useSelector((state)=>state.summary.value);

    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    {
                        summeryList.map((item, i)=>
                        <div className='col-12 col-lg-3 col-sm-6 col-md-3 p-3'>
                            <div className='card h-100'>
                                <div className='card-body'>
                                    <h5 className='animated fadeInUp'>{item._id}</h5>
                                    <h6 className='text-secondary animated fadeInUp'>{item.sum}</h6>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;