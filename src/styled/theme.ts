import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  black: "#363636",
  gray: "#87878a",
  white: "#fff",
  beige: "#f9ffe3",
  lightSlate: "#ccd6f6",
  orange: "#fcba03",
  brown: "rgba(112, 93, 80, 0.8)",
  lightNavy: "#112240",
  green: "#d4ffde;",
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
  linearGradient:
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  backgroundGradient:
    "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
  borderRadius: "0.4rem",
  heading: "3.2rem",
  todosLength: "70rem",
  boxShadow: "rgba(0, 0, 0, 0.35) 0rem 0.5rem 1.5rem",
};
