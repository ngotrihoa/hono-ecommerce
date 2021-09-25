import React from 'react';
import Breadcrumb from '../../components/Shared/Breadcrumb/Breadcrumb';
import Helmet from '../../components/Shared/Helmet/Helmet';

function Catalog(props) {
  return (
    <Helmet title="HONO - Catalog">
      <Breadcrumb
        title="Hono - catalog"
        links={[
          { display: 'Home', href: '/' },
          { display: 'Catalog', href: '/catalog' },
        ]}
      />
    </Helmet>
  );
}

export default Catalog;
