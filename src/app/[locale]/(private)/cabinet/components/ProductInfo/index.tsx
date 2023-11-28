import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from 'components/common/profile/Section';
import ProductsInfo from 'assets/images/product-info.png';
import Image from 'next/image';

import s from './ProductInfo.module.scss';

export const ProductInfo = () => {
  const productInfo = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.ProductInfo'
  );
  const category = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.ProductInfo'
  );
  const server = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.ProductInfo'
  );
  const short_description = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.ProductInfo'
  );
  const detailed_description = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.ProductInfo'
  );
  const instruction_title = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.ProductInfo.Instruction'
  );
  const first_step = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.ProductInfo.Instruction'
  );
  const second_step = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.ProductInfo.Instruction'
  );
  const third_step = useTranslations(
    'ProfilePage.BoughtProducts.ProductDetail.ProductInfo.Instruction'
  );
  return (
    <Section.Block>
      <Section.BlockHeader>
        <h3>{productInfo('title')}</h3>
      </Section.BlockHeader>
      <Section.BlockBody>
        <Image
          className={s.image}
          src={ProductsInfo}
          width={408}
          height={160}
          alt={'Back 4 Blood'}
        />
        <div className={s.content}>
          <div className={s.info}>
            <div className={s.info__item}>
              <h4 className={s.title}>{category('category')}</h4>
              <div className={s.info__item_subtitle}>Back 4 Blood</div>
            </div>
            <div className={s.info__item}>
              <h4 className={s.title}>{category('type')}</h4>
              <div className={s.info__item_subtitle}>Account</div>
            </div>
          </div>
          <div className={s.server}>
            <h4 className={s.title}>{server('server')}</h4>
            <p>(US) Blue Dragon</p>
          </div>
          <div className={s.description_short}>
            <h4 className={s.title}>
              {short_description('short_description')}
            </h4>
            <p>❤️‍🔥1000 Gold [GLOBAL] [SAFE]❤️‍🔥</p>
          </div>
          <div className={s.description_detailed}>
            <h4 className={s.title}>
              {detailed_description('detailed_description')}
            </h4>
            <p>❤️‍🔥in this offer you will get 1000 Gold❤️‍🔥</p>
            <br />
            {instruction_title('title')}
            <ol className={s.list}>
              <li>{first_step('first_step')}</li>
              <li>{second_step('second_step')}</li>
              <li>{third_step('third_step')}</li>
            </ol>
          </div>
        </div>
      </Section.BlockBody>
    </Section.Block>
  );
};
