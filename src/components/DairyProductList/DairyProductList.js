import DairyProductListItem from '../DairyProductListItem/DairyProductListItem';
import {
  ProductsList,
  ProductsListThumb,
  ProductsQuote,
  ProductsFigure,
  ProductsAuthor,
} from './DairyProductList.styled';

import { useEffect, useState } from 'react';
import { quotes } from '../../data/quotes';
import { useTranslation } from 'react-i18next';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function DairyProductList({ products, date }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [quoteIndex, setQuoteIndex] = useState(getRandomInt(quotes.length));
  const [quoteToCurrentLang, setQuoteToCurrentLang] = useState(null);
  useEffect(() => {
    setQuoteIndex(getRandomInt(quotes.length));
  }, [date]);
  
  const quote = quotes[quoteIndex];
  
  useEffect(() => {
    setQuoteToCurrentLang(quote[currentLang])
  }, [currentLang]);

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
            {quoteToCurrentLang && (
              <>
               <ProductsQuote>{quoteToCurrentLang.text}</ProductsQuote>
               <ProductsAuthor>{quoteToCurrentLang.author }</ProductsAuthor>
              </>
            )}
        </ProductsFigure>
      )}
    </>
  );
}
