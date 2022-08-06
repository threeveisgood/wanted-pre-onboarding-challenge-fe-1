import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  black: "#363636",
  gray: "#87878a",
  white: "#fff",
  beige: "#f5f5dc",
  lightSlate: "#ccd6f6",
  orange: "#fcba03",
  brown: "rgba(112, 93, 80, 0.8)",
  lightNavy: "#112240",
  green: "#64ffda",
  slate: "#8892b0",
  transition: {
    normal: "all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
  },
  fontSize: {
    xs: "1.3rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "1.8rem",
    xl: "2rem",
  },
  media: {
    phone: "@media only screen and (max-width: 480px)",
    phoneLg: "@media only screen and (max-width: 600px)",
    tabPort: "@media only screen and (max-width: 768px)",
    tabLand: "@media only screen and (max-width: 1080px)",
  },
  borderRadius: "0.4rem",
  heading: "3.2rem",
  todosLength: "70rem",
};
