
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import UseSignOutHook from '../../Hooks/UseSignoutHook';
import './DropdownMenuForUser.scss';
export default function DropdownMenuForUser({ UserName }) {

    const { SignOut } = UseSignOutHook()

    return (


        <div className='LoginReg'>
            <div className='loginDiv' >
                {
                    UserName ?
                        <>
                            <button className='mainLink'> {UserName} <FontAwesomeIcon icon="chevron-down" className="icon"  /> </button>
                            <div className='SubMenu'>
                                <Link to="/AccountInfo"> My Account  </Link>
                                <button onClick={SignOut} style={{ cursor: 'pointer' }}> SignOut </button>
                            </div>
                        </>
                        :
                        <Link to="/login" className='mainLink'> Login/Register </Link>
                }

            </div >

        </div > 
    )
}
