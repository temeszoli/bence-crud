import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function ReadComponent(){

    const [peopleData, setPeopleData] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const url = 'https://retoolapi.dev/f8eWT2/people';
        async function fetchdata(){
            var response = await fetch(url);
            var peopleObj = await response.json();
            setPeopleData(peopleObj);
        }
        fetchdata(); 
    }, []);

    function handleClick(e){
        e.preventDefault();

        var readHTML = '';
        peopleData.forEach(element => {
            readHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.phone}</td>
                <td>${element.birth_date}</td>
                <td>${element.birth_date?'igen':'nem'}</td>
                <td><a href='/update'>Update</a></td>
                <td>${<Button variant="danger">X</Button>}</td>
            </tr>`;
        });
        
        document.getElementById('peopleDataTable').innerHTML = readHTML;
    }

    return(
        <div>
            <Button id='btn' className="mx-auto d-block m-2" variant="dark" size="lg" onClick={handleClick}>Adatok betöltése</Button>
            <Table className="table-dark" responsive>
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
                <tbody id='peopleDataTable'>

                </tbody>
            </Table>
        </div>
    );
}