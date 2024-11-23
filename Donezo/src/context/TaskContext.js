import createDataContext from "./createDataContext";

const initialState = [
    {
      tasks: []
    }
];

const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [...state, 
                { 
                    id: Math.floor(Math.random() * 9999), 
                    title: action.payload,
                    completed: false
                }
            ];
        case 'DELETE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, ...action.payload.updates } : task
                )
            };
        default:
            return state;
    }
}

// if there's some specific operation you want your components to have, define the operations in the context file
const addTask = (dispatch) => {
    return (title) => {
        console.log("addTask called with title:", title); 
        dispatch({
            type: 'ADD_TASK',
            payload: title
        });
    }
}

const deleteTask = (dispatch) => {
    return (id) => {
        dispatch({ type: 'DELETE_TASK', payload: id })
    }
}

//DO THIS
const updateTask = (dispatch) => {
    return (id, updates) => {
        dispatch({type: 'UPDATE_TASK', payload: { id, updates}});
    }
}

export const {Context, Provider} = createDataContext(taskReducer, 
                                    {addTask, deleteTask, updateTask}, 
                                    initialState);