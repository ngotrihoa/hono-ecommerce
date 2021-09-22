import React from 'react';
import serviceData from '../../assets/fake-data/service';
import Section, { SectionBody } from '../../components/Shared/Section/Section';
import Grid from '../../components/Shared/Grid';

function Service(props) {
  return (
    <Section>
      <div className="section__container">
        <SectionBody>
          <div className="service">
            <Grid col={4} mdCol={2} smCol={1} gap={'30px'}>
              {serviceData.map((item, index) => (
                <div className="service__item" key={index}>
                  <img src={item.image} alt="" />
                  <div className="service__item__title">{item.title}</div>
                  <p className="service__item__description">
                    {item.description}
                  </p>
                </div>
              ))}
            </Grid>
          </div>
        </SectionBody>
      </div>
    </Section>
  );
}

export default Service;
