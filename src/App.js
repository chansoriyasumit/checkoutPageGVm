import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import AddProduct from './components/addProduct'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
const App = () => {
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const [data,setData] = useState({})
    const showModal=()=> {
        setShow(true)
      }
    const handleChange = (inputs) => (e) => {
            const { name, value } = e.target;
            if(inputs=='image'){
            setData(prevState => ({
                ...prevState,
                ['image']: e.target.files[0]
            }));
        }else{
            setData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }
    const addProducts =async()=>{
       const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        await fetch('https://reqres.in/invalid-url', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                alert('please enter valid Add product url which is given by backend')
                console.error('There was an error!', error);
            });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Shopping Cart</h1>
                </div>
            </div>
            <div className='row'>
            <div className="col-md-3">
            <Button onClick={showModal}>
                Add Product
            </Button>
            </div>
            <div className="col-md-6">
                    <Cart />
            </div>
            </div>
            <AddProduct show={show} handleClose={handleClose} handleChange={handleChange} submitData={addProducts}/>
            <div className='row'>
            
            </div>
            
            <div className="row">
                
                <div className="col-md-12">
                    <ProductList />
                </div>
               
            </div>

            <footer>
                <small>
                    made by <a href="https://twitter.com/krzysu">Kris Urbas</a>, source code available on <a href="https://github.com/krzysu/reactjs-shopping-cart">github</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
