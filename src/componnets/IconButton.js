//width: 60px; height 60px; background color: #FFFFFF; border-radious:10px;
//padding: 14; color: #547FB3; box-shadow #0000000, 16%; flexbox: center;
// active: color und backgorund-color inverted

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 14px;
  fill: #547fb3;
  box-shadow: 0px 4px 6px rgba (0, 0, 0.15);
`;

export default function IconButton({ children }) {
  return <Button>{children}</Button>;
}
