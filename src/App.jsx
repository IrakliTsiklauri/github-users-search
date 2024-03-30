import React, { useState } from "react";
import styled from "styled-components";
import InputSection from "./components/InputSection";
import HeaderSection from "./components/HeaderSection";
import UserBioCard from "./components/UserBioCard";
import ProfileInfoCard from "./components/ProfileInfoCard";
import UserSocialCard from "./components/UserSocialCard";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark((prevMode) => !prevMode);
  };

  return (
    <Body isDark={isDark}>
      <Container isDark={isDark}>
        <HeaderSection isDark={isDark} toggleMode={toggleMode} />
        <InputSection isDark={isDark} />
        <MainSection isDark={isDark}>
          <ProfileImgDiv>
            <ProfileImg src="/images/cat.png" alt="profile img" />
          </ProfileImgDiv>
          <ProfileInfo>
            <UserBioCard isDark={isDark} />
            <ProfileInfoCard isDark={isDark} />
            <UserSocialCard isDark={isDark} />
          </ProfileInfo>
        </MainSection>
      </Container>
    </Body>
  );
}

export default App;

const Body = styled.body`
  font-family: "Space Mono", monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) =>
    props.isDark ? "rgba(20, 29, 47, 1)" : "rgba(246, 248, 255, 1)"};
`;

const Container = styled.div`
  background-color: ${(props) =>
    props.isDark ? "rgba(20, 29, 47, 1)" : "rgba(246, 248, 255, 1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainSection = styled.div`
  width: 730px;
  background-color: ${(props) =>
    props.isDark ? "rgba(30, 42, 71, 1)" : "rgba(254, 254, 254, 1)"};
  box-shadow: ${(props) =>
    props.isDark
      ? ""
      : "0px 16px 30px -10px rgba(70, 96, 187, 0.2)"}; //0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  border-radius: 15px;
  padding: 40px;
  display: flex;
`;

const ProfileImgDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
`;

const ProfileInfo = styled.div`
  margin-left: 40px;
  width: 100%;
`;
