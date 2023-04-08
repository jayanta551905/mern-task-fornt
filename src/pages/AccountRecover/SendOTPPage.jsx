import React, { Fragment, Suspense, lazy } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
const SendOTP = lazy (()=> import ('../../components/AccountRecover/SendOTP'));

const SendOTPPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <SendOTP/>
            </Suspense>
        </Fragment>
    );
};

export default SendOTPPage;