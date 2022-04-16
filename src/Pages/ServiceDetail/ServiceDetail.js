import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const params = useParams();
    return (
        <div>
            <h2>Welcome to detail {params.serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;