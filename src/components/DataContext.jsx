/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { fetchData, addData, deleteData, updateData } from "./apiService";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
  
    const getData = async () => {
        const newData = await fetchData();
        setData(newData);
    };

    const addNewData = async (newData) => {
        const addedData = await addData(newData);
        setData((prevData) => [...prevData, addedData]);
    };

    const removeData = async (id) => {
        const isDeleted = await deleteData(id);
        if (isDeleted) {
            setData((prevData) => prevData.filter((item) => item.id !== id));
        }
    };

    const updateExistingData = async (id, updatedData) => {
        const updated = await updateData(id, updatedData);
        setData((prevData) => prevData.map((item) => (item.id === id ? updated : item)));
    };

    return (
        <DataContext.Provider value={{ data, getData, addNewData, removeData, updateExistingData }}>
          {children}
        </DataContext.Provider>
      );
}

export const useData = () => {
    return useContext(DataContext);
  };