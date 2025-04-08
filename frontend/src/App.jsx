
import React, { useContext, useState } from 'react';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import { AppContext } from './context/AppContext';
import { ToastContainer } from 'react-toastify';


const App = () => {

  const {tasks} = useContext(AppContext);


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer/>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Task Management</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Create Task Form */}
          <div className="md:w-2/4">
            <CreateTask />
          </div>

          {/* Right Side - Task List */}
          <div className="md:w-2/4">
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;