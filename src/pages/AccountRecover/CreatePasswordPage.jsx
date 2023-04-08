import React, { lazy, Fragment, Suspense } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
const CreatePassword = lazy (()=> import ('../../components/AccountRecover/CreatePassword'));

const CreatePasswordPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <CreatePassword/>
            </Suspense>
        </Fragment>
    );
};

export default CreatePasswordPage;