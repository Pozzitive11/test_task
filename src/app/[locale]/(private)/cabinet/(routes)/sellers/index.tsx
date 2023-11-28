import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ROUTES } from 'constants/routes';
import { Section } from 'components/common/profile/Section';
import { PaymentUser } from 'app/[locale]/(private)/cabinet/components/PaymentUser';
import { ArrowLeft } from 'components/icons/ArrowIcons';
import { SecondaryLinkButton } from 'ui/components/Button';
import { IPaymentUser } from 'types/userTypes';
import ArrowRight from 'assets/images/icons/arrows/arrow-right.svg';
import Nareerat from 'assets/images/payment-user-1.png';
import Devon from 'assets/images/payment-user-2.png';

import s from './Sellers.module.scss';

export const paymentUsers: IPaymentUser[] = [
  {
    userId: 1,
    userStatus: 'Seller',
    avatarURL: Nareerat,
    userName: 'Nareerat Sakuna',
    userEmail: 'smallpaul@me.com',
  },
  {
    userId: 2,
    userStatus: 'Buyer',
    avatarURL: Devon,
    userName: 'Devon Lane',
    userEmail: 'smallpaul@me.com',
  },
];

export const Sellers = () => {
  const title = useTranslations('ProfilePage.Payment.Details');
  const payment_code = useTranslations('ProfilePage.FinancialBalance.Details');
  const status = useTranslations('ProfilePage.FinancialBalance.Details');
  const method = useTranslations('ProfilePage.FinancialBalance.Details');
  const type = useTranslations('ProfilePage.FinancialBalance.Details');
  const amount = useTranslations('ProfilePage.FinancialBalance.Details');
  const time_date = useTranslations('ProfilePage.FinancialBalance.Details');
  const product = useTranslations('ProfilePage.FinancialBalance.Details');
  const to_product = useTranslations('ProfilePage.FinancialBalance.Details');
  return (
    <Section>
      <Section.Header className={s.section__header}>
        <SecondaryLinkButton className={s.button_back} href={'back'}>
          <ArrowLeft />
        </SecondaryLinkButton>
        <h3>{title('title')}</h3>
      </Section.Header>
      <Section.Body>
        <Link href={ROUTES.PRIVATE.SELLERS_PRODUCT_DETAILS}>
          <ul className={s.users}>
            {paymentUsers.map(
              ({ userId, userStatus, avatarURL, userName, userEmail }) => (
                <li className={s.user} key={userId}>
                  <PaymentUser
                    userStatus={userStatus}
                    avatarURL={avatarURL}
                    userName={userName}
                    userEmail={userEmail}
                  />
                </li>
              )
            )}
          </ul>
          <div>
            <div className={s.info}>
              <div className={s.info__top}>
                <div className={s.payment_code}>
                  <h4 className={s.title}>{payment_code('payment_code')}</h4>
                  <p>2666DEF3000ZZXCE3</p>
                </div>
                <div className={s.payment_status}>
                  <h4 className={s.title}>{status('status')}</h4>
                  <p>Success</p>
                </div>
                <div className={s.info__item}>
                  <h4 className={s.title}>{method('method')}</h4>
                  <p>Credit Card</p>
                </div>
                <div className={s.info__item}>
                  <h4 className={s.title}>{type('type')}</h4>
                  <p>Sell product</p>
                </div>
              </div>
              <div className={s.info__bottom}>
                <div className={s.info__item}>
                  <h4 className={s.title}>{amount('amount')}</h4>
                  <p className={s.info__item_subtitle}>$25.00</p>
                </div>
                <div className={s.info__item}>
                  <h4 className={s.title}>{time_date('time_date')}</h4>
                  <p className={s.info__item_subtitle}>31/05/23 15:30</p>
                </div>
                <div className={s.info__item}>
                  <h4 className={s.title}>{product('product')}</h4>
                  <button className={s.info__item_subtitle}>
                    {to_product('to_product')}
                    <Image
                      src={ArrowRight}
                      width={24}
                      height={24}
                      alt="Arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Section.Body>
    </Section>
  );
};
