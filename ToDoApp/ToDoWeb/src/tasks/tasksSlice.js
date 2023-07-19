import axios from "axios";

const initialState = {
    items: [],
    loading: false,
    newName: ""
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'tasks/setItems': {
            return {
                ...state,
                items: action.payload
            };
        }
        case 'tasks/loadingOn': {
            return {
                ...state,
                loading: true
            };
        }
        case 'tasks/loadingOff': {
            return {
                ...state,
                loading: false
            };
        }
        case 'tasks/setNewTaskName': {
            return {
                ...state,
                newName: action.payload
            };
        }
        default:
            return state;
    }
}

export function loadTasks() {
    return async function (dispatch, getState) {
        dispatch({type: 'tasks/loadingOn'});
        const response = await axios.get('/Tasks')
        dispatch({type: 'tasks/setItems', payload: response.data});
        dispatch({type: 'tasks/loadingOff'});
    }
}
export function addTask() {
    return async function (dispatch, getState) {
        dispatch({type: 'tasks/loadingOn'});
        let state = getState();
        const response = await axios.post('/tasks/add', {name: state.tasks.newName})
        dispatch({type: 'tasks/setItems', payload: response.data});
        dispatch({type: 'tasks/setNewTaskName', payload: ''})
        dispatch({type: 'tasks/loadingOff'});
    }
}
export function removeTask(id) {
    return async function (dispatch, getState) {
        dispatch({type: 'tasks/loadingOn'});
        const response = await axios.delete('/tasks/' + id)
        dispatch({type: 'tasks/setItems', payload: response.data});
        dispatch({type: 'tasks/loadingOff'});
    }
}
