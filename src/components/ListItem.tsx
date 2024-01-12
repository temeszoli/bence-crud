/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useData } from "./DataContext";

interface ListItemProps {
  tableData: {
    id: string;
    name: string;
    email: string;
    phone: string;
    birth_date: string;
    subscribed: boolean;
  }[];
}

const ListItem: React.FC<ListItemProps> = ({ tableData }) => {
  const navigate = useNavigate();
  const { removeData } = useData();

  const handleClickDel = (number: string) => {
    removeData(number);
  };

  const handleUpdateClick = (item: {
    id: string;
    name: string;
    email: string;
    phone: string;
    birth_date: string;
    subscribed: boolean;
  }) => {
    navigate(`/update/${item.id}`);
  };

  return (
    <tbody>
      {tableData.map((item) => (
        <tr key={item.id}>
          <td className="p-2">{item.id}</td>
          <td className="p-2">{item.name}</td>
          <td className="p-2">{item.email}</td>
          <td className="p-2">{item.phone}</td>
          <td className="p-2">{item.birth_date}</td>
          <td className="p-2">{item.subscribed ? "igen" : "nem"}</td>
          <td>
            <Button
              onClick={() => handleUpdateClick(item)}
              variant="primary"
            >
              Szerkesztés
            </Button>
          </td>
          <td>
            <Button
              variant="danger"
              onClick={() => handleClickDel(item.id)}
            >
              X
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ListItem;
