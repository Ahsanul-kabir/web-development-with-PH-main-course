import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

/*
const products = [
    {name: 'laptopoo', price: 153000},
    {name: 'phoneee', price: 93000},
    {name: 'watchuu', price: 33000},
    {name: 'tabletoo', price: 5000},
  ]
*/


/* {
//   products.map(product=> <Product name={product.name} price={product.price}></Product>)
// }
// <Product name="laptop" price="47000"></Product>
// <Product name="phone" price="75000"></Product>
// <Product name="watch" price="3500"></Product>
*/

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
