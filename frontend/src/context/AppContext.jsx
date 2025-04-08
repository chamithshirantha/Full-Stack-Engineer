import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [tasks, setTasks] = useState([]);


    const getTasks = async () => {
        const response = await axios.get(backendUrl + '/api/v1/tasks');
        console.log(response);
        setTasks(response.data.data);
    }

    const value = {
        backendUrl,
        getTasks,
        tasks
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;