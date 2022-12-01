import React from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";

const UserRoot = () => {
    const navigate = useNavigate();
    const logOutHandler = () => {
        navigate('/', {replace: true})
    }
    const userId = 1;
    return (
        <div className="wrapper2">
            <div className="nav">
                <ul>
                    <li>
                        <Link to="info">Info</Link>
                    </li>
                    <li>
                        <Link to={`${userId}/edit`}>Edit</Link>
                    </li>
                    <li onClick={logOutHandler}>logout</li>
                </ul>
            </div>
            <div className="content"><Outlet/></div>
        </div>
    );
};

export default UserRoot;
