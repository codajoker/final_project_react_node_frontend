import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Loader } from '../index';
import { translate } from '../../helpers/translate';
import product_dictionary from '../../data/product_dictionary';
import {
  Container,
  Head,
  CalloriesList,
  ProductsList,
  EmptyProducts,
  PersentCalories,
  CalculatorLink,
} from './RightSidebar.styled';
import {
  getCalories,
  getProducts,
} from '../../redux/dailyRate/dailyRateSelectors';
import {
  getDate,
  getIsLoading,
  getProductsList,
} from '../../redux/products/productsSelectors';
import { caloriesToast } from '../../helpers/authToasts';
import { useTranslation } from 'react-i18next';


export default function RightSidebar() {
  const { t } = useTranslation();
  const products = useSelector(getProducts) || [];
  const dailyNormCalories = useSelector(getCalories);
  const productsList = useSelector(getProductsList);
  const isLoading = useSelector(getIsLoading);
  const date = useSelector(getDate)
  const location = useLocation();

  const totalDayCalories = productsList.reduce(
    (total, x) => total + x.calories_kcal,
    0
  );
  let left = dailyNormCalories - totalDayCalories;
  let leftCalories =
    left < 0
      ? t('sidebar.more_cal_norm_msg')
      : left === 0
      ? t('sidebar.have_norm_cal_msg')
      : `${left} ${t('calories')}`;
  const norm_persent =
    dailyNormCalories > 0
      ? ((totalDayCalories * 100) / dailyNormCalories).toFixed(1)
      : 0;
  const numberPersent = Number(norm_persent);
  useEffect(() => {
    if (numberPersent > 100) {
      setTimeout(() => {
        caloriesToast();
      }, 1000);
    }
  }, [numberPersent]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <Head>
              {t('sidebar.for_msg')} {date}
            </Head>
            {dailyNormCalories !== null ? (
              <CalloriesList>
                {location.pathname === '/calculator' ? (
                  <></>
                ) : (
                  <li>
                    <span>{t('sidebar.its_left')}</span>
                    <span>{dailyNormCalories === 0 ? 0 : leftCalories}</span>
                  </li>
                )}

                {location.pathname === '/calculator' ? (
                  <></>
                ) : (
                  <li>
                    <span>{t('sidebar.taken')}</span>
                    <span>
                      {dailyNormCalories === 0 ? 0 : totalDayCalories}{' '}
                      {t('calories')}
                    </span>
                  </li>
                )}
                <li>
                  <span>{t('sidebar.daily_norm')}</span>
                  <span>
                    {dailyNormCalories} {t('calories')}
                  </span>
                </li>
                {location.pathname === '/calculator' ? (
                  <></>
                ) : (
                  <li>
                    <span>{t('sidebar.for_norm')}</span>
                    {norm_persent > 100 ? (
                      <PersentCalories more>{norm_persent} %</PersentCalories>
                    ) : (
                      <PersentCalories>{norm_persent} %</PersentCalories>
                    )}
                  </li>
                )}
              </CalloriesList>
            ) : (
              <Head>
                {' '}
                {t('sidebar.head_msg')}{' '}
                <CalculatorLink to="/calculator">
                  {t('sidebar.form')}
                </CalculatorLink>
                !
              </Head>
            )}
          </div>
          <div>
            <Head>{t('modal.cal_sec_title_msg')}</Head>
            {products.length > 0 ? (
              <ProductsList>
                {products.map((product, index) => {
                  return (
                    <Fragment key={index}>
                      {translate(product_dictionary, product)}
                      {index !== products.length - 1 && ', '}
                    </Fragment>
                  );
                })}
              </ProductsList>
            ) : (
              <EmptyProducts>{t('modal.cal_empty_prod_msg')}</EmptyProducts>
            )}
          </div>
        </>
      )}
    </Container>
  );
}
