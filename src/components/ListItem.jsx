/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ListItem({tableData, refreshData }){
    const navigate = useNavigate();

    async function handleClickDel(number){
        const url = import.meta.env.VITE_BASE_URL+'/'+number;
        const response = await fetch(url, {
            method: 'DELETE'
          });

          if(response.status == 200){
            refreshData();
          }else{
            alert('Törlés sikertelen!')
          }
          
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