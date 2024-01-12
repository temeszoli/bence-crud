import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

export default function HomeComponent(){
    return(
        <div className='mx-auto d-block'>
            <Image className='mx-auto d-block mt-5' src="https://media.tenor.com/DSG9ZID25nsAAAAC/hello-there-general-kenobi.gif"/>
            <div className='mx-auto d-flex flex-column my-3'>
            <h1 className='mt-2 mx-auto'>Projekt lépésekben:</h1>
            <ListGroup as="ol" numbered className='my-3'>
            <ListGroup.Item as="li" variant='primary'>Vite + React Bootstrap + Sass dokumentáció áttekintés</ListGroup.Item>
            <ListGroup.Item as="li" variant='primary'>Komponensek definiálása</ListGroup.Item>
            <ListGroup.Item as="li" variant='primary'>CRUD műveletek megvalósítása komponensen belül</ListGroup.Item>
            <ListGroup.Item as="li" variant='primary'>Első github pages deploy</ListGroup.Item>
            <ListGroup.Item as="li" variant='primary'>Dependency Injection megvalósítása React Context API-al</ListGroup.Item>
            <ListGroup.Item as="li" variant='warning'>Kód refaktorálása typescript kóddá</ListGroup.Item>
            <ListGroup.Item as="li" variant='danger'>Solid elvek alkalmazása, clean kód</ListGroup.Item>
            </ListGroup>
            </div>
        </div>
    );
}