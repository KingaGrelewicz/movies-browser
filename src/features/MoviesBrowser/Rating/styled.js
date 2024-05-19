import styled, { css } from "styled-components";
import { mediaQuery } from "../../../core/App/theme";
import { ReactComponent as RatingStar } from "./image/star.svg";

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 8px;
  align-items: end;
  padding: 0;

  ${({ $variant }) =>
    $variant === "backdrop" &&
    css`
      color: ${({ theme }) => theme.color.white};
      font-size: 30px;

      @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
        align-items: center;
      }
    `}

  ${({ $variant }) =>
    $variant === "details" &&
    css`
      color: ${({ theme }) => theme.color.black};
      font-size: 22px;
    `}

  @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
    grid-gap: 4px;
  }
  @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
    grid-gap: 6px;
  }
`;

export const RatingImage = styled(RatingStar)`
  ${({ $variant }) =>
    $variant === "backdrop" &&
    css`
      width: 40px;
      height: 38px;

      @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
        width: 16px;
        height: 16px;
      }

      @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
        width: 18px;
        height: 18px;
      }
    `}
  ${({ $variant }) =>
    $variant === "details" &&
    css`
      width: 24px;
      height: 22px;

      @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
        width: 16px;
        height: 16px;
      }

      @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
        width: 18px;
        height: 18px;
      }
    `}
`;

export const RatingAverage = styled.span`
  ${({ $variant }) =>
    $variant === "backdrop" &&
    css`
      color: ${({ theme }) => theme.color.white};
      font-size: 30px;

      @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
        font-size: 14px;
      }
      @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
        font-size: 18px;
      }
    `}

  ${({ $variant }) =>
    $variant === "details" &&
    css`
      color: ${({ theme }) => theme.color.black};
      font-size: 22px;
      font-weight: bold;

      @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
        font-size: 14px;
      }

      @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
        font-size: 16px;
      }
    `}
`;

export const RatingPoints = styled.span`
  ${({ $variant }) =>
    $variant === "backdrop" &&
    css`
      color: ${({ theme }) => theme.color.white};
      font-size: 16px;

      @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
        font-size: 12px;
      }

      @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
        font-size: 14px;
      }
    `}
  ${({ $variant }) =>
    $variant === "details" &&
    css`
      font-size: 14px;

      @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
        display: none;
      }
      @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
        font-size: 12px;
      }
    `}
`;

export const RatingVotesCount = styled.span`
  ${({ $variant }) =>
    $variant === "backdrop" &&
    css`
      color: ${({ theme }) => theme.color.white};
      font-size: 16px;

      @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
        font-size: 12px;
      }
      @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
        font-size: 12px;
      }
    `}
  ${({ $variant }) =>
    $variant === "details" &&
    css`
      font-size: 14px;

      @media (max-width: ${mediaQuery.breakpoints.mobileMax}px) {
        font-size: 12px;
        color: ${({ theme }) => theme.color.darkerGrey};
      }
      @media (max-width: ${mediaQuery.breakpoints.tabletVerticalMax}px) {
        font-size: 12px;
      }
    `}
`;