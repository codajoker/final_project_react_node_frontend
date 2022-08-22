import { NavLink } from 'react-router-dom';
import { translate } from '../../helpers/translate';

import product_dictionary from '../../data/product_dictionary';
import {
  CalorieIntake,
  Head,
  DailyNorm,
  DailyNormValue,
  HeadProducts,
  ProductsList,
  EmptyProducts,
  ButtonStart,
} from './DailyCalorieIntake.slyled';
import { useTranslation } from 'react-i18next';

export default function DailyCalorieIntake({ dailyRate }) {
  const { t } = useTranslation();
  const products = dailyRate.uniqCategories;
  const dailyCalories = dailyRate.dailyCalories;

  return (
    <CalorieIntake>
      <Head>{t('modal.cal_main_title_msg')}</Head>
      <DailyNorm>
        <DailyNormValue>{dailyCalories}</DailyNormValue> {t('calories')}
      </DailyNorm>
      <HeadProducts>{t('modal.cal_sec_title_msg')}</HeadProducts>
      {products.length > 0 ? (
        <ProductsList>
          {products.map((product, index) => {
            return (
              <li key={index}>{translate(product_dictionary, product)}</li>
            );
          })}
        </ProductsList>
      ) : (
        <EmptyProducts>{t('modal.cal_empty_prod_msg')}</EmptyProducts>
      )}
      <NavLink to={'/registration'}>
        <ButtonStart primary>{t('calc_form.submbtn_msg')}</ButtonStart>
      </NavLink>
    </CalorieIntake>
  );
}
