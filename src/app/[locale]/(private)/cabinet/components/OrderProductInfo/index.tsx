import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from 'components/common/profile/Section';
import { PaymentUser } from '../PaymentUser';
import { paymentUsers } from '../../(routes)/sellers';

import s from './OrderProductInfo.module.scss';

export const OrderProductInfo = () => {
  const paymentInfo = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.PaymentInfo'
  );
  const price = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.PaymentInfo'
  );
  const time_date = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.PaymentInfo'
  );
  const status = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.PaymentInfo'
  );
  const payment_code = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.PaymentInfo'
  );
  const payment_status = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.PaymentInfo'
  );
  const card_number = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.PaymentInfo'
  );
  const method = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.PaymentInfo'
  );
  return (
    <Section.Block>
      <Section.BlockHeader>
        <h3>{paymentInfo('title')}</h3>
      </Section.BlockHeader>
      <Section.BlockBody>
        <ul className={s.users}>
          {paymentUsers.map(
            ({ userId, userStatus, avatarURL, userName, userEmail }) => (
              <li className={s.user} key={userId}>
                <PaymentUser
                  userStatus={userStatus}
                  avatarURL={avatarURL}
                  userName={userName}
                  userEmail={userEmail}
                  chatButton={true}
                />
              </li>
            )
          )}
        </ul>
        <div className={s.content}>
          <div className={s.info}>
            <div className={s.info__item}>
              <h4 className={s.title}>{price('price')}</h4>
              <div className={s.info__item_subtitle}>$252.00</div>
            </div>
            <div className={s.info__item}>
              <h4 className={s.title}>{time_date('time_date')}</h4>
              <div className={s.info__item_subtitle}>3 Sep 2023 15:30</div>
            </div>
            <div className={s.info__item}>
              <h4 className={s.title}>{method('method')}</h4>
              <div className={s.info__item_subtitle}>Credit Card</div>
            </div>
          </div>
          <div className={s.status}>
            <h4 className={s.title}>{status('status')}</h4>
            <p className={s.status__text}>Sold</p>
          </div>
          <div className={s.payment_code}>
            <h4 className={s.title}>{payment_code('payment_code')}</h4>
            <p>2666DEF3000ZZXCE3</p>
          </div>
          <div className={s.payment_status}>
            <h4 className={s.title}>{payment_status('payment_status')}</h4>
            <p>Success</p>
          </div>
          <div className={s.card_number}>
            <h4 className={s.title}>{card_number('card_number')}</h4>
            <p>1155 **** **** 2001</p>
          </div>
        </div>
      </Section.BlockBody>
    </Section.Block>
  );
};
