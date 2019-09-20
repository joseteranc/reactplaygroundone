import React from "react";
import styled from "styled-components";

const CardImages1 = styled.img`
  height: 120px;
  width: 133px;
  border-radius: 8px 0px 0px 8px;
  border: black solid 2px;
`;

export default function CardImages({ children }) {
  return <CardImages1>{children}</CardImages1>;
}
