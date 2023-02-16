import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../components/Header";
import "../styles/globals.css";

const GlobalStyle = createGlobalStyle`
`;

export const theme = {
  COLORS: {
    WHITE: "#ffffff",
    GRAY_100: "#e1e1e6",
    GRAY_300: "#a8a8b3",
    GRAY_900: "#121214",
    CYAN_500: "#61dafb",
    YELLOW_500: "#eba417",
  },
  FONTS: ["sans-serif", "Roboto"],
  FONT_SIZES: {
    SM: "1em",
    MD: "2em",
    LG: "3em",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}
