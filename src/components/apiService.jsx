const fetchData = async () => {
    const url = import.meta.env.VITE_BASE_URL;
    const response = await fetch(url);
    if(response.status == 200){
        const data = await response.json();
        return data;
    }else{
        alert('Adatbekérés sikertelen!')
    }
};

const addData = async (newData) => {
    const url = import.meta.env.VITE_BASE_URL;
    const response = await fetch(url, {
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

const deleteData = async (id) => {
    const url = import.meta.env.VITE_BASE_URL+`/${id}`;
    const response = await fetch(url, {
        method: 'DELETE'
    });
    return response.status === 200;
};

const updateData = async (id, updatedData) => {
    const url = import.meta.env.VITE_BASE_URL+`/${id}`;
    const response = await fetch(url, {
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
        alert(response.error)
    }  
  };

export { fetchData, addData, deleteData, updateData };