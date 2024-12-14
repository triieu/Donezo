import createDataContext from "./createDataContext";

const initialState = {
    tasks: []
};

const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {...state, 
                tasks: [ ...state.tasks,
                    { 
                        id: Math.floor(Math.random() * 9999), 
                        title: action.payload.title,
                        completed: false
                    }
                ]
            };
        case 'DELETE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, ...action.payload.updates } : task
                )
            };
        case 'TASK_COMPLETED':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
                ),
            }
        default:
            return state;
    }
}

// if there's some specific operation you want your components to have, define the operations in the context file
const addTask = (dispatch) => {
    return (title, date) => { 
        dispatch({
            type: 'ADD_TASK',
            payload: { title }
        });
    }
}

const deleteTask = (dispatch) => {
    return (id) => {
        dispatch({ type: 'DELETE_TASK', payload: id })
    }
}

const updateTask = (dispatch) => {
    return (id, updates) => {
        dispatch({type: 'UPDATE_TASK', payload: { id, updates}});
    }
}

const taskCompleted = (dispatch) => {
    return (id) => {
        dispatch({type: 'TASK_COMPLETED', payload: id });
    }
}

export const {Context, Provider} = createDataContext(taskReducer, 
                                    {addTask, deleteTask, updateTask, taskCompleted}, 
                                    initialState);