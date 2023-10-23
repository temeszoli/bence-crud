/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import ListItem from "./ListItem";
import CreateComponent from "./CreateComponent";
import UpdateComponent from "./UpdateComponent";

export default function ReadComponent(){

    const [peopleData, setPeopleData] = useState([]);
    const [lastID, setLastID] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetchdata();
    }, []);

    async function fetchdata(){
        const url = import.meta.env.VITE_BASE_URL;
        const response = await fetch(url);
        if(response.status == 200){
            const peopleObj = await response.json();
            setPeopleData(peopleObj);
            setLastID(peopleObj[peopleObj.length-1].id);
            <CreateComponent lastID={lastID} data={peopleData} refreshData={refreshData}/>;
            <UpdateComponent refreshData={refreshData}/>;
        }else{
            alert('Adatbekérés sikertelen!')
        }
    }

    const refreshData = async () => {
        await fetchdata();
    };

    return(
        <div className="mx-5">
            <Table className="table-dark mt-3" responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Név</th>
                        <th>Email cím</th>
                        <th>Telefonszám</th>
                        <th>Születési dátum</th>
                        <th>Feliratkozott (i/n)</th>
                        <th>Szerkesztés</th>
                        <th>Törlés</th>
                    </tr>
                </thead>
                <ListItem tableData={peopleData} lastID={lastID} refreshData={refreshData}/>
            </Table>
        </div>
    );
}