const baseURL = import.meta.env.VITE_BASE_URL as string;

const fetchData = async (): Promise<any> => {
    const url: string = baseURL;
    const response: Response = await fetch(url);
    if(response.status == 200){
        const data = await response.json();
        return data;
    }else{
        alert('Adatbekérés sikertelen!')
    }
};

const addData = async (newData: any): Promise<any> => {
    const url: string = baseURL;
    const response: Response = await fetch(url, {
        method: 'POST',
        body: newData,
        headers: {
          'Content-Type': 'application/json'
        }
    });

    if(response.status == 201){
        const data = await response.json();
        console.log('Létrehozás sikeres!');
        return data;       
    }else{
        alert('Létrehozás sikertelen!');
    }  
};

const deleteData = async (id: string): Promise<boolean> => {
    const url: string = baseURL+`/${id}`;
    const response: Response = await fetch(url, {
        method: 'DELETE'
    });
    return response.status === 200;
};

const updateData = async (id: string, updatedData: any) => {
    const url: string = baseURL+`/${id}`;
    const response: Response = await fetch(url, {
        method: 'PUT',
        body: updatedData,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    if (response.status == 200) {
        const data = await response.json();
        return data;
    }else{
        alert('Adatmódosítás sikertelen!')
    }  
  };

export { fetchData, addData, deleteData, updateData };