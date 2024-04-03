import React from "react";
import styled from "styled-components";

const UserSocialCard = ({ isdark, usersData }) => {
  return (
    <Footer>
      <LeftFooter>
        <SocialLinks>
          <img src="/images/icon-location.svg" alt="location" />
          <SocialSpan isdark={isdark}>
            {usersData?.location ? `${usersData?.location}` : "Not Available"}
          </SocialSpan>
        </SocialLinks>
        <SocialLinks>
          <img src="/images/icon-website.svg" alt="location" />
          <SocialSpan isdark={isdark}>
            {usersData?.blog ? `${usersData?.blog}` : "Not Available"}
          </SocialSpan>
        </SocialLinks>
      </LeftFooter>
      <RightFooter>
        <SocialLinks>
          <img src="/images/icon-twitter.svg" alt="location" />
          <SocialSpan isdark={isdark}>
            {usersData?.twitter_username
              ? `${usersData?.twitter_username}`
              : "Not Available"}
          </SocialSpan>
        </SocialLinks>
        <SocialLinks>
          <img src="/images/icon-company.svg" alt="location" />
          <SocialSpan isdark={isdark}>
            {usersData?.company ? `${usersData?.company}` : "Not Available"}
          </SocialSpan>
        </SocialLinks>
      </RightFooter>
    </Footer>
  );
};

export default UserSocialCard;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const LeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RightFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialSpan = styled.div`
  font-size: 15px;
  color: ${(props) =>
    props.isdark ? "rgba(255, 255, 255, 1)" : "rgba(75, 106, 155, 1)"};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
