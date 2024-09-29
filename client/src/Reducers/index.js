import {combineReducers} from "redux";
import authreducer from "./auth";
import currentuserreducer from "./currentuser.js";
import chanelreducer from "./channel.js";
import videoreducer from "./video.js";
import commentreducer from "./comment.js";
import historyreducer from "./history.js";
import likedvideoreducer from "./likedvideo.js";
import watchlaterreducer from "./watchlater.js";
export default combineReducers({
    authreducer,
    currentuserreducer,
    videoreducer,
    chanelreducer,
    commentreducer,
    historyreducer,
    likedvideoreducer,
    watchlaterreducer
});