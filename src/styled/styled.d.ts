import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    black: string;
    gray: string;
    white: string;
    beige: string;
    lightSlate: string;
    orange: string;
    brown: string;
    green: string;
    lightNavy: string;
    slate: string;
    transition: {
      normal: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    media: {
      phone: string;
      phoneLg: string;
      tabPort: string;
      tabLand: string;
    };
    borderRadius: string;
    heading: string;
    todosLength: string;
  }
}
