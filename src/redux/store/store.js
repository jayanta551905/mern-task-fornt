import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state/settings-slice";
import taskReducer from "../state/task-slice";
// import summaryReducer from "../state/summary-slice";
// import profileReducer from "../state/profile-slice";
// task:taskReducer,summary:summaryReducer,profile:profileReducer
export default configureStore({
    reducer:{
        settings: settingsReducer, 
        task: taskReducer
    }
})