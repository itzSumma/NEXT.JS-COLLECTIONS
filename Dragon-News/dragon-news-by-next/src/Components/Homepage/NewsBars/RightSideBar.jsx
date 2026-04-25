import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <div>
              <h2><FaGoogle /> Login with Google</h2>

              <h2><FaGithub /> Login with Github</h2>
            </div>
        </div>
    );
};

export default RightSideBar;