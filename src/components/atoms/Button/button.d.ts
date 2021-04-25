import { TextProps } from "../Text";

type ButtonProps = TextProps & {
  link?: string;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default ButtonProps;
