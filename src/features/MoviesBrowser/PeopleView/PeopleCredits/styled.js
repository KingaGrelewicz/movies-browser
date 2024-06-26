import styled from "styled-components";
import { ReactComponent as PosterIcon } from "../../../../images/CameraIcon.svg";
import { mediaQuery } from "../../../../core/App/theme";

export const PeopleCreditsHeader = styled.h2`
  font-size: 36px;
  margin-top: 64px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 20px;
    margin-left: 16px;
    margin-top: 24px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    max-width: 1199px;
    margin: 24px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    margin: 24px 16px;
  }
`;

export const PeopleCreditsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  gap: 24px;

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    margin: 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 0 8px;
  }
`;

export const PeopleCreditsTile = styled.div`
  width: 324px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.grey};
  display: grid;
  grid-template-rows: auto 1fr;
  transition: 1s;

  &:hover {
    scale: 1.05;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    max-width: 260px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    max-width: 185px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    grid-template-columns: auto 1fr;
    max-width: 475px;
    width: 90%;
  }
`;

export const PeopleCreditsPoster = styled.img`
  width: 100%;
  padding: 16px;
  border-radius: 20px;
  display: block;
  max-width: 324px;
  height: 466px;
  align-self: center;
  margin: 0;

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    max-width: 260px;
    height: 374px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    max-width: 185px;
    height: 278px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding: 8px;
    border-radius: 15px;
  }
`;
export const PeopleCreditsDefaultPoster = styled.div`
  max-width: 292px;
  height: 434px;
  border-radius: 5px;
  margin: 16px;
  background: ${({ theme }) => theme.color.silver};

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    max-width: 260px;
    height: 342px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    padding: 12px;
    max-height: 246px;
    padding: 0;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    width: 168px;
    height: 434px;
    margin: 8px;
  }
`;

export const PeopleCreditsPosterIcon = styled(PosterIcon)`
  stroke: ${({ theme }) => theme.color.white};
  fill: none;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 112px;

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    width: 100px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    width: 86px;
  }
`;

export const PeopleCreditsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  padding: 0 16px;

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;

export const PeopleCreditsMovieTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  word-break: break-word;
  white-space: normal;

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    font-size: 20px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }
`;

export const PeopleCreditsData = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkerGrey};

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    font-size: 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const PeopleCreditsProductionYear = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.color.darkerGrey};

  @media (max-width: ${mediaQuery.breakpoints.tabletHorizontalMax}px) {
    font-size: 16px;
  }

  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
  }

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;
