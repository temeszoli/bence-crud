/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, ReactNode } from "react";
import { fetchData, addData, deleteData, updateData } from "./apiService";

interface Data {
    id: string;
    name: string;
    email: string;
    phone: string;
    birth_date: string;
    subscribed: boolean;
    // További adatmezők megadása...
}

interface DataContextProps {
    data: Data[];
    getData: () => Promise<void>;
    addNewData: (newData: any) => Promise<void>;
    removeData: (id: string) => Promise<void>;
    updateExistingData: (id: string, updatedData: any) => Promise<void>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<Data[]>([]);
  
    const getData = async () => {
        const newData = await fetchData();
        setData(newData);
    };

    const addNewData = async (newData: any) => {
        const addedData = await addData(newData);
        setData((prevData) => [...prevData, addedData]);
    };

    const removeData = async (id: string) => {
        const isDeleted = await deleteData(id);
        if (isDeleted) {
            setData((prevData) => prevData.filter((item) => item.id !== id));
        }
    };

    const updateExistingData = async (id: string, updatedData: any) => {
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
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
  };