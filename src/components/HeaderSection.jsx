import React from "react";
import styled from "styled-components";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";

const HeaderSection = ({ isdark, toggleMode }) => {
  return (
    <Mode isdark={isdark}>
      <Devfinder isdark={isdark}>devfinder</Devfinder>
      <DarkAndLight>
        <MoonBtn isdark={isdark} onClick={toggleMode}>
          <SpanDark isdark={isdark}>{isdark ? "LIGHT" : "DARK"}</SpanDark>
          <img
            src={isdark ? sunIcon : moonIcon}
            alt={isdark ? "moon" : "sun"}
          />
        </MoonBtn>
      </DarkAndLight>
    </Mode>
  );
};

export default HeaderSection;

const Mode = styled.div`
  background-color: ${(props) =>
    props.isdark ? "rgba(20, 29, 47, 1)" : "rgba(246, 248, 255, 1)"};
  width: 730px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Devfinder = styled.h2`
  color: ${(props) => (props.isdark ? "#fff" : "rgba(34, 39, 49, 1)")};
  font-size: 26px;
  font-weight: 700;
`;

const DarkAndLight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SpanDark = styled.span`
  color: ${(props) => (props.isdark ? "#fff" : "rgba(105, 124, 154, 1)")};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2.5px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.isdark ? "rgba(144, 164, 212, 1)" : "rgba(34, 39, 49, 1)"}; //
  }
`;

const MoonBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) =>
    props.isdark ? "rgba(20, 29, 47, 1)" : "rgba(246, 248, 255, 1)"};
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }
`;
