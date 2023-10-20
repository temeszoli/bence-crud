/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ListItem({tableData}){
    const navigate = useNavigate();

    async function handleClickDel(number){
        var url = import.meta.env.VITE_BASE_URL+'/'+number;
        await fetch(url, {
            method: 'DELETE'
          });
    }

    function handleUpdateClick(item) {
        //HELP ME
    }

    return(
            <tbody>
            {tableData.map(item => <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.birth_date}</td>
                <td>{item.subscribed?'igen':'nem'}</td>
                <td><Button variant="primary">Update</Button></td>
                <td><Button variant="danger" onClick={() => handleClickDel(item.id)}>X</Button></td>
                </tr>)}
            </tbody>     
    );

    
}