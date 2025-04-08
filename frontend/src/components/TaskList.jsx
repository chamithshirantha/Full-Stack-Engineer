
import axios from 'axios';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const TaskList = ({ tasks }) => {
    const {backendUrl, getTasks} = useContext(AppContext);

    const complete = async (id) => {
        try {
            const response = await axios.put(backendUrl + `/api/v1/task/${id}`);
            console.log(response);
            if (response.status === 200) {
                getTasks();
                toast.success(response.data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 h-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Tasks</h2>
            <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors flex justify-between items-center"
                    >
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">{task.title}</h3>
                            <p className="text-gray-600 mt-1">{task.description}</p>
                        </div>
                        <button onClick={() => complete(task.id)} className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
                            Done
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;