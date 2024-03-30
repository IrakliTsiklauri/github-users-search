import React from "react";
import styled from "styled-components";

const UserBioCard = ({ isDark }) => {
  return (
    <ProfileHead>
      <UserName>
        <Name isDark={isDark}>The Octocat </Name>
        <JoinedDate isDark={isDark}>Joined 25 Jan 2011</JoinedDate>
      </UserName>
      <Link src="#">@octocat</Link>
      <UserBio isDark={isDark}>This profile has no bio</UserBio>
    </ProfileHead>
  );
};

export default UserBioCard;

const ProfileHead = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: ${(props) => (props.isDark ? "#fff" : "rgba(34, 39, 49, 1)")};
`;

const JoinedDate = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 1)" : "rgba(105, 124, 154, 1)"};
`;

const Link = styled.a`
  color: rgba(0, 121, 255, 1);
  font-size: 16px;
  text-decoration: none;
  margin-top: 10px;
`;

const UserBio = styled.p`
  font-size: 15px;
  margin: 30px 0;
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 1)" : "rgba(105, 124, 154, 1)"};
`;
