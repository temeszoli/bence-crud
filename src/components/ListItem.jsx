/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useData } from './DataContext';

export default function ListItem({tableData}){
    const navigate = useNavigate();
    const { removeData } = useData();

    async function handleClickDel(number){
      removeData(number);
    }

    function handleUpdateClick(item) {
        navigate(`/update/${item.id}`)
    }

    return(
            <tbody>
            {tableData.map(item => <tr key={item.id}>
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.email}</td>
                <td className="p-2">{item.phone}</td>
                <td className="p-2">{item.birth_date}</td>
                <td className="p-2">{item.subscribed?'igen':'nem'}</td>
                <td><Button onClick={() => handleUpdateClick(item)} variant="primary">Szerkesztés</Button></td>
                <td><Button variant="danger" onClick={() => handleClickDel(item.id)}>X</Button></td>
                </tr>)}
            </tbody>     
    );   
}