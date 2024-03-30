import React from "react";
import styled from "styled-components";

const InputSection = ({ isDark }) => {
  return (
    <InputArea isDark={isDark}>
      <Input
        isDark={isDark}
        type="text"
        placeholder="Search GitHub username…"
      />
      <SearchImg src="/images/icon-search.svg" alt="rearch icon" />
      <Button>Search</Button>
    </InputArea>
  );
};

export default InputSection;

const InputArea = styled.div`
  position: relative;
  box-shadow: ${(props) =>
    props.isDark ? "none" : "0px 16px 30px -10px rgba(70, 96, 187, 0.2)"};
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 720px;
  padding: 20px 75px;
  border: none;
  border-radius: 15px;
  outline: none;
  background-color: ${(props) =>
    props.isDark ? "rgba(30, 42, 71, 1)" : "#fff"};
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 1)" : "#rgba(75, 106, 155, 1)"};

  &::placeholder {
    color: rgba(75, 106, 155, 1);
    font-size: 18px;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 2%;
  top: 13%;
  border: none;
  border-radius: 12px;
  padding: 13px;
  background-color: rgba(0, 121, 255, 1);
  color: #fff;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: rgba(96, 171, 255, 1);
  }
`;

const SearchImg = styled.img`
  position: absolute;
  left: 4%;
  top: 35%;
`;
