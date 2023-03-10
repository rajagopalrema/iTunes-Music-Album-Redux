import { combineReducers } from "redux";
import musicalbumreducer from "./MusicAlbumReducer";

const rootreducer = combineReducers({
    musicalData: musicalbumreducer,
});

export default rootreducer;

