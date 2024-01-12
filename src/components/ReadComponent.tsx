/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import ListItem from "./ListItem";
import { useData } from "./DataContext";

export default function ReadComponent(){

    const { data, getData } = useData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getData();
    }, []);

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
                <ListItem tableData={data}/>
            </Table>
        </div>
    );
}