import React, { useState } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const DirectoyStyles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = () => {
  const [sections, setSections] = useState([
    { title: "hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png", id: 1 },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
    },
  ]);

  return (
    <DirectoyStyles>
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          image={section.imageUrl}
          size={section.size}
        />
      ))}
    </DirectoyStyles>
  );
};

export default Directory;
