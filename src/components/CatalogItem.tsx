import React, { useCallback } from 'react';
import { IProduct } from '../store/modules/cart/types';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';

interface catalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<catalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product])


  return (
    <article>
      <strong>{product.title}</strong>
      <strong>{product.price}</strong>

      <button type="button" onClick={handleAddProductToCart}>Comprar</button>
    </article>
  );
}
export default CatalogItem;