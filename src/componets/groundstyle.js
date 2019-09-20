import React from "react";
import styled from "styled-components";

const Title = styled.header`
  background: #f2600c;
  height: 30px;
  width: 100%;
  padding: 0.2 px;
  margin: 1;
  text-align: space-around;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  align-items: center;
  justify-content: center;
`;
const HeadInfo = styled.h1`
  margin: 0;
  color: #343434;
  font-weight: normal;
  font-family: "Ultra", sans-serif;
  font-size: 26px;
  line-height: 32px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
`;

const NewH2 = styled.h2`
  font-weight: normal;
  font-family: "Ultra", sans-serif;
  font-size: 18px;
  line-height: 27px;
  text-shadow: 0 1px white, 0 2px #577;
`;
function Header() {
  return (
    <Title>
      <HeadInfo>
        <HeadInfo>Hello World.</HeadInfo>
        <NewH2>lots of new stuff</NewH2>
        <NewH2>to learn </NewH2>
        <NewH2>And Apply</NewH2>
      </HeadInfo>
    </Title>
  );
}
export default Header;
