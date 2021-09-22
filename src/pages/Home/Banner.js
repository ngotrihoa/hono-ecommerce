import React from 'react';
import Section, { SectionBody } from '../../components/Shared/Section/Section';
import Grid from '../../components/Shared/Grid';
import { bannerData1, bannerData2 } from '../../assets/fake-data/banner-data';
import BannerItem from './BannerItem';
function Banner(props) {
  return (
    <Section>
      <SectionBody>
        <Grid col={2} mdCol={1} gap="30px">
          <BannerItem
            className="banner-left"
            item={bannerData1[0]}
            single={true}
            subtitle={true}
          />
          <Grid col={2} smCol={1} gap="30px">
            {bannerData2.map((item, index) => (
              <BannerItem key={index} item={item} />
            ))}
          </Grid>
        </Grid>
      </SectionBody>
    </Section>
  );
}

export default Banner;
