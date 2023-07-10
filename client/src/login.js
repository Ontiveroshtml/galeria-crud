import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <Fragment>
            <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                <div className='bg-white p-3 rounded w-25'>
                    <form action=''>
                        <div className='mb-3'>
                            <label htmlFor='name'><strong>Nombre</strong></label>
                            <input type="text" placeholder='Ingresa tu nombre' className='form-control rounded-0' required/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='name'><strong>Contraseña</strong></label>
                            <input type="password" placeholder='Ingresa tu nombre' className='form-control rounded-0' required/>
                        </div>
                        <Link to='/Galeria' className='btn btn-success w-100 rounded-0'>Iniciar sesión</Link>
                    </form>
                </div>
            </div>


        </Fragment>
    )
}

export default Login