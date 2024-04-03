import React from "react";
import styled from "styled-components";

const ProfileInfoCard = ({ isdark, usersData }) => {
  return (
    <FollowersSection isdark={isdark}>
      <ReposDiv>
        <SpanFollowers isdark={isdark}>Repos</SpanFollowers>
        <SpanData isdark={isdark}>
          {usersData?.public_repos ? `${usersData?.public_repos}` : "0"}
        </SpanData>
      </ReposDiv>
      <ReposDiv>
        <SpanFollowers isdark={isdark}>Followers</SpanFollowers>
        <SpanData isdark={isdark}>
          {usersData?.followers ? `${usersData?.followers}` : "0"}
        </SpanData>
      </ReposDiv>
      <ReposDiv>
        <SpanFollowers isdark={isdark}>Following</SpanFollowers>
        <SpanData isdark={isdark}>
          {usersData?.following ? `${usersData?.following}` : "0"}
        </SpanData>
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
    props.isdark ? "rgba(20, 29, 47, 1)" : "rgba(246, 248, 255, 1)"};
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
    props.isdark ? "rgba(255, 255, 255, 1)" : "rgba(75, 106, 155, 1)"};
`;

const SpanData = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${(props) =>
    props.isdark ? "rgba(255, 255, 255, 1)" : "rgba(43, 52, 66, 1)"};
`;
