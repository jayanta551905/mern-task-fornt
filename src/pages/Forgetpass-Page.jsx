import React, {Fragment, lazy, Suspense} from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Forgetpass = lazy(() => import('../components/Forgetpass/Forgetpass'));

const ForgetpassPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Forgetpass/>
            </Suspense>
        </Fragment>
    );
};

export default ForgetpassPage;