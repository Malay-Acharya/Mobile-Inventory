import { combineReducers } from "redux";
import changeinventory from "./changeinventory";
import changestate from "./changestate";
import changeview from "./changeview";

const reducers = combineReducers(
    {
        changeinventory,
        changestate,
        changeview
    }
);

export default reducers;