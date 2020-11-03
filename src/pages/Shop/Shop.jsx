import React, { useState } from 'react';
import CollectionPreview from '../../components/CollectionPreview';
import SHOP_DATA from './shop-data';

const Shop = () => {
  // eslint-disable-next-line no-unused-vars
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div>
      {collections.map(({ id, title, routeName, items }) => (
        <CollectionPreview
          key={id}
          title={title}
          routeName={routeName}
          items={items}
        />
      ))}
    </div>
  );
};

export default Shop;
