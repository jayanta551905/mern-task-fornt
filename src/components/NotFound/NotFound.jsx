import React, { Fragment } from 'react';

const NotFound = () => {
    return (
        <Fragment>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-7 col-lg-6 center-screen'>
                        <div className='card w-90 p-4'>
                            <div className='card-body'>
                                <h5>OPPS! Page Not Found</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default NotFound;