import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  
  test('Debe mostrar el componente con el título Personalizado', () => {
    
    const wrapper = renderer.create(<ProductTitle title="Custom Product" className='custom-class' />);
    expect(wrapper.toJSON()).toMatchSnapshot();

  });

  test('Debe de mostrar el componente conel nombre del producto', () => {
      
      const wrapper = renderer.create(
        <ProductCard product={product1} >
          {
            () => (
              <ProductTitle />
            )
          }
        </ProductCard>
      );
      expect(wrapper.toJSON()).toMatchSnapshot();
  
  });

})