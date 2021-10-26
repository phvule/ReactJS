import React, { Component } from 'react';
import Product from './components/Products';
class App extends Component {
  showAlert(){
    alert('This is App Component!'); 
  }
  render() { 
      // const heading = React.createElement('h1',{className:'header'},'Hello, Le Phuoc Vu!');
      var products = [
        {
          id: 1,
          name: 'Product 1',
          price: 10,
          stock: 'in stock'
        },
        {
          id: 2,
          name: 'Product 2',
          price: 20,
          stock: 'out of stock'
        },
        {
          id: 3,
          name: 'Product 3',
          price: 30,
          stock: 'in stock'
        },
      ];
      
      let rows = products.map((product, index) => {
        let result = '';
        if(product.stock === 'in stock'){
          result = <Product 
                      key={product.id}
                      name={product.name} 
                      price={product.price} 
                      stock={product.stock}
                    />
        }
        return result;
      });

      return(
        <div className='container'>
            {rows}
            <div className="actions">
              <button className="btn-action" onClick={ this.showAlert }>Click</button>
            </div>
        </div>
      )
  }
}

export default App;
