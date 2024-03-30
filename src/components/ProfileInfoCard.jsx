import React from "react";
import styled from "styled-components";

const ProfileInfoCard = ({ isDark }) => {
  return (
    <FollowersSection isDark={isDark}>
      <ReposDiv>
        <SpanFollowers isDark={isDark}>Repos</SpanFollowers>
        <SpanData isDark={isDark}>8</SpanData>
      </ReposDiv>
      <ReposDiv>
        <SpanFollowers isDark={isDark}>Followers</SpanFollowers>
        <SpanData isDark={isDark}>3938</SpanData>
      </ReposDiv>
      <ReposDiv>
        <SpanFollowers isDark={isDark}>Following</SpanFollowers>
        <SpanData isDark={isDark}>9</SpanData>
      </ReposDiv>
    </FollowersSection>
  );
};

export default ProfileInfoCard;

const FollowersSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${(props) =>
    props.isDark ? "rgba(20, 29, 47, 1)" : "rgba(246, 248, 255, 1)"};
  border-radius: 12px;
`;

const ReposDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SpanFollowers = styled.div`
  font-size: 13px;
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 1)" : "rgba(75, 106, 155, 1)"};
`;

const SpanData = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${(props) =>
    props.isDark ? "rgba(255, 255, 255, 1)" : "rgba(43, 52, 66, 1)"};
`;
