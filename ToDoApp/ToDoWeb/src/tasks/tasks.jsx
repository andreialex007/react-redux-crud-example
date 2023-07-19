import {useDispatch, useSelector} from "react-redux";
import React from 'react';
import {addTask, loadTasks, removeTask} from './tasksSlice';

export const Tasks = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.tasks);

    React.useEffect(() => {
        dispatch(loadTasks());
    }, [dispatch]);

    return <>
        {todos.loading && <div>Loading...</div>}
        {!todos.loading && <div>
            <h2>Tasks List</h2>
            <div className="d-flex flex-row gap-1 mb-1" >
                <input type="text" 
                       placeholder="Name of your task"
                       className="form-control flex-grow" 
                       value={todos.newName} 
                       onChange={(e)=>dispatch({type: 'tasks/setNewTaskName', payload: e.target.value})} />
                <span className="btn btn-primary text-nowrap" onClick={()=>dispatch(addTask())} >Add new</span> 
            </div>
            <div>
                {todos.items.length === 0 && <span>Empty list</span>}
                {todos.items.length > 0 && <ul className="list-group">
                    {
                        todos.items.length && todos.items.map(task => <li className="list-group-item d-flex"
                                                                          key={task.id}>
                            <div className="w-100" >
                                {task.name}
                            </div>
                        <div className='btn btn-danger btn-xs text-right remove-btn' onClick={()=>dispatch(removeTask(task.id))} >Remove</div>
                        </li>)
                    }
                </ul>}
            </div>
        </div>}
    </>
}