import {BsGithub} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {GrLinkedin} from 'react-icons/gr';
import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <footer className='bg-dark text-primary p-2 d-flex justify-content-center mt-auto'>
            <div className='m-2'>
                <div>&copy;2023 | <a className='fw-bold' href="/">Bence CRUD</a></div>
                <h1 className='m-2'>
                    <Link to='https://github.com/temeszoli'><BsGithub /></Link>{' '}
                    <a href="mailto:temeszoli18@gmail.com"><AiOutlineMail /></a>{' '}
                    <Link to='https://www.linkedin.com/in/zoltán-temesvári-9635231a7/'><GrLinkedin /></Link>
                </h1>
                <p className='pt-2'>Készítette: Temesvári Zoltán</p>
            </div>
        </footer>
    );
}