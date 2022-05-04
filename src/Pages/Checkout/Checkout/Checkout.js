import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const Checkout = () => {
    const { serviceId } = useParams();

    const [service] = useServiceDetails(serviceId);

    console.log(service);

    return (
        <div>
            <h2>Please Order: {service.name}</h2>

            <form className='w-50 mx-auto'>
                <input type="text" name="name" placeholder='name' required />
            </form>
        </div>
    );
};

export default Checkout;