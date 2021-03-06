import React from "react";
import styled, { css } from "styled-components";
import Colors from "./Colors";

export type TextProps = {
  children: string | string[] | number;
  level: number;
  width?: number | string;
  height?: number | string;
  weight?: number | string;
  align?: string;
  color?: Colors;
  deco?: string;
  line?: number | string;
};

function Text(props: TextProps) {
  return <StyledText {...props}>{props.children}</StyledText>;
}

const StyledText = styled.p`
  ${(props: TextProps) => css`
    width: ${props.width};
    height: ${props.height};
    font-weight: ${props.weight};
    text-align: ${props.align};
    font-size: ${1.6 + props.level * 0.2}rem;
    color: ${props.color};
    margin: 0;
    padding: 0;
    text-decoration: ${props.deco};
    font-family: "Noto Sans KR", sans-serif;
    line-height: ${props.line};
  `}
`;

export default React.memo(Text);
