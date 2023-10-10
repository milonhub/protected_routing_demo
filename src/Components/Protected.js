import React from 'react';

import { Navigate } from 'react-router-dom';

const Protected = ({isLogded, children}) => {
     console.log(isLogded);
    if(!isLogded) {
        return <Navigate to='/' replace />
    } 
    
    return children;
    
}

export default Protected;