import React, { useState } from "react";
import CollectionPreview from "../../components/CollectionPreview";
import SHOP_DATA from "./shop-data";

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
