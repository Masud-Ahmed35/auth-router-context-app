import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to='/' className="btn btn-ghost normal-case text-3xl font-extrabold italic">Awesome Auth</Link>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
                <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to='/registrar' className="btn btn-ghost normal-case text-xl">Registrar</Link>
                {user?.email && <span className='text-success'>Welcome, {user.email}</span>}
                {
                    user?.email ? <button onClick={handleLogOut} className="btn btn-sm normal-case">Sign-Out</button>
                        :
                        <Link to='/login'><button className="btn btn-sm normal-case">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;