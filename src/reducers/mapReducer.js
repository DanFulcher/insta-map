import {selectPost} from '../actions/mapActions';

const initialState = {
    selectedPost: 'tests',
};

const mapReducer = (state = initialState, action) => {

    if (action.type === selectPost) {
        // return {
        //     ...state,
        //     selectedPost: action.id
        // };
        console.log(action.id);
    }
    return state;
};

export default mapReducer;