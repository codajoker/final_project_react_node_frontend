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
  const isEnLang = i18n.language === 'en';
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
            <p>{isEnLang ? quote.en.text : quote.uk.text}</p>
          </ProductsQuote>
          <ProductsAuthor>
            {isEnLang ? quote.en.author : quote.uk.author}
          </ProductsAuthor>
        </ProductsFigure>
      )}
    </>
  );
}
