import { DairyProductListItem } from '../DairyProductListItem/DairyProductListItem';
import { ProductsList, ProductsListThumb, ProductsQuote, ProductsFigure, ProductsAuthor } from './DairyProductList.styled';

import { useEffect, useState } from 'react';
import { quotes } from '../../quotes';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const DairyProductList = ({ products, date }) => {
  const [quoteIndex, setQuoteIndex] = useState(getRandomInt(quotes.length));
  useEffect(() => {
    setQuoteIndex(getRandomInt(quotes.length));
  }, [date]);
  const quote = quotes[quoteIndex];
  return (
    <>
      {products.length !== 0 ? (
        <ProductsListThumb>
          <ProductsList>
            {products.map(product => (
              <DairyProductListItem
                key={product._id}
                product={product}
                date={date}
              />
            ))}
          </ProductsList>
        </ProductsListThumb>
      ) : (
        <ProductsFigure>
          <ProductsQuote>
            <p>  {quote.text}</p>
          
          </ProductsQuote>
          <ProductsAuthor>{quote.author}</ProductsAuthor>
        </ProductsFigure>
      )}
    </>
  );
};
