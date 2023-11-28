import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { MinorButton } from 'ui/components/Button';
import { ROUTES } from 'constants/routes';
import { IBoughtProduct } from 'types/userTypes';

import s from './BoughtProducts.module.scss';

interface BoughtProducts {
  products: IBoughtProduct[];
}

export const BoughtProducts: FC<BoughtProducts> = ({ products }) => {
  const see_details = useTranslations('ProfilePage.BoughtProducts');

  return (
    <ul className={s.products}>
      {products.map(({ imgURL, title, date, productId }) => (
        <li className={s.product} key={productId}>
          <Link href={ROUTES.PRIVATE.BOUGHT_PRODUCTS}>
            <Image
              className={s.product__image}
              src={imgURL}
              width={170}
              height={48}
              alt={title}
            />
            <h4 className={s.product__title}>{title}</h4>
            <span className={s.product__date}>{date}</span>
            <MinorButton className={s.product__button}>
              {see_details('see_details')}
            </MinorButton>
          </Link>
        </li>
      ))}
    </ul>
  );
};
