import _ from "lodash";

import { FETCH_POSTS, FETCH_POST } from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
            break;
        case FETCH_POST:
            // ES5 syntax
            // const post = action.payload.data;
            // const newState = { ...state, };
            // newState[post.id] = post;

            // ES6 Syntax
            return { ...state, [action.payload.data.id]: action.payload.data }; // [] makes a new key
            break;
        default:
            return state;
    }
};