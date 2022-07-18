# JAS-Product-Card

Este es un paquete de pruebas de despliegue

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jas-product-card';
```

```
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
```