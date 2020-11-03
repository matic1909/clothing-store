import React from "react";
import styled from "styled-components";
import CollectionItem from "./CollectionItem";

const CollectionPreviewStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`;

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewStyles>
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, name, price, imageUrl }) => (
          <CollectionItem
            key={id}
            name={name}
            price={price}
            imageUrl={imageUrl}
          />
        ))}
    </div>
  </CollectionPreviewStyles>
);

export default CollectionPreview;
