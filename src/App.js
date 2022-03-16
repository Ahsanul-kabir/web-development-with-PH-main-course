import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    { name: 'laptopoo', price: 153000 },
    { name: 'phoneee', price: 93000 },
    { name: 'watchuu', price: 33000 },
    { name: 'tabletoo', price: 5000 },
  ]

  return (
    <div>
      {
        products.map(product => <Product name={product.name} price={product.price} />)
      }

      {/* <Product name='kk' price='4700'></Product>
      <Product name='phone' price='5700'></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
