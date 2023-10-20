import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import ListItem from "./ListItem";
import CreateComponent from "./CreateComponent";

export default function ReadComponent(){

    const [peopleData, setPeopleData] = useState([]);
    const [lastID, setLastID] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetchdata();
    }, []);

    async function fetchdata(){
        const url = import.meta.env.VITE_BASE_URL;
        var response = await fetch(url);
        var peopleObj = await response.json();
        setPeopleData(peopleObj);
        setLastID(peopleObj[peopleObj.length-1].id);
    }

    <CreateComponent lastID={lastID} data={peopleData}/>

    return(
        <div>
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
                <ListItem tableData={peopleData} lastID={lastID}/>
            </Table>
        </div>
    );
}