import React, { useState } from "react";
import styled from "styled-components";
import InputSection from "./components/InputSection";
import HeaderSection from "./components/HeaderSection";
import UserBioCard from "./components/UserBioCard";
import ProfileInfoCard from "./components/ProfileInfoCard";
import UserSocialCard from "./components/UserSocialCard";
import profileImg from "./images/avatar.png";

function App() {
  const [isdark, setisdark] = useState(false);
  const [query, setQuery] = useState("");
  const [usersData, setUsersData] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  console.log(usersData);

  const toggleMode = () => {
    setisdark((prevMode) => !prevMode);
  };
  const handleSearch = () => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${query}`);
        const data = await res.json();

        if (!data) throw new Error("No results");

        setUsersData(data);
        setErrorMessage("");
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
      }
    };

    fetchData();
  };

  return (
    <Body isdark={isdark}>
      <Container isdark={isdark}>
        <HeaderSection isdark={isdark} toggleMode={toggleMode} />
        <InputSection
          isdark={isdark}
          handleSearch={handleSearch}
          setQuery={setQuery}
        />
        <MainSection isdark={isdark}>
          <ErrorParagraph>
            {errorMessage ? `${errorMessage}` : ""}
          </ErrorParagraph>
          <ProfileImgDiv>
            <ProfileImg
              src={
                usersData?.avatar_url
                  ? `${usersData?.avatar_url}`
                  : `${profileImg}`
              }
              alt="profile img"
            />
          </ProfileImgDiv>
          <ProfileInfo>
            <UserBioCard isdark={isdark} usersData={usersData} />
            <ProfileInfoCard isdark={isdark} usersData={usersData} />
            <UserSocialCard isdark={isdark} usersData={usersData} />
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
    props.isdark ? "rgba(20, 29, 47, 1)" : "rgba(246, 248, 255, 1)"};
`;

const Container = styled.div`
  background-color: ${(props) =>
    props.isdark ? "rgba(20, 29, 47, 1)" : "rgba(246, 248, 255, 1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainSection = styled.div`
  width: 730px;
  background-color: ${(props) =>
    props.isdark ? "rgba(30, 42, 71, 1)" : "rgba(254, 254, 254, 1)"};
  box-shadow: ${(props) =>
    props.isdark
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
  width: 117px;
  height: 117px;
`;

const ProfileInfo = styled.div`
  margin-left: 40px;
  width: 100%;
`;

const ErrorParagraph = styled.p`
  color: red; // Style the error message according to your preference
`;
