import React from 'react';
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <div>
            <h2>About</h2>
            <Link to="/home">Go to home page</Link>
        </div>
    );
};

export default AboutPage;