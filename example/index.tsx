import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug - Card!!!',
  // img: './coffee-mug.png',
}

const App = () => {
  return (
    <>
      <ProductCard 
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count:4,
          maxCount: 10
        }}
        >
        { ({reset, isMaxCountReached, count, maxCount, increaseBy}) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}          
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
