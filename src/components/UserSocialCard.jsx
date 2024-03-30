import React from "react";
import styled from "styled-components";

const UserSocialCard = ({ isDark }) => {
  return (
    <Footer>
      <LeftFooter>
        <SocialLinks>
          <img src="/images/icon-location.svg" alt="location" />
          <SocialSpan isDark={isDark}>San Francisco</SocialSpan>
        </SocialLinks>
        <SocialLinks>
          <img src="/images/icon-website.svg" alt="location" />
          <SocialSpan isDark={isDark}>https://github.blog</SocialSpan>
        </SocialLinks>
      </LeftFooter>
      <RightFooter>
        <SocialLinks>
          <img src="/images/icon-twitter.svg" alt="location" />
          <SocialSpan isDark={isDark}>Not Available</SocialSpan>
        </SocialLinks>
        <SocialLinks>
          <img src="/images/icon-company.svg" alt="location" />
          <SocialSpan isDark={isDark}>@github</SocialSpan>
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
    props.isDark ? "rgba(255, 255, 255, 1)" : "rgba(75, 106, 155, 1)"};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
