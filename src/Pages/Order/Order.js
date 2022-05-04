import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {

        const getOrder = async () => {
            const email = user?.email;
            console.log(email);
            const url = `http://localhost:5000/order?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrder();
    }, [user])
    return (
        <div>
            <h2>Orders Length : {orders.length}</h2>
            <h2>email{user?.email}</h2>
        </div>
    );
};

export default Order;