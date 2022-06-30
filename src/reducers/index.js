import { combineReducers } from "redux";
import changeinventory from "./changeinventory";
import changestate from "./changestate";

const reducers = combineReducers(
    {
        changeinventory,
        changestate
    }
);

export default reducers;