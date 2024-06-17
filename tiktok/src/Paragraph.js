import { useContext } from 'react'
import { ThemeContext } from "./ThemeContext";

function Paragraph() {

    const context = useContext(ThemeContext)

  return (
    <p className={context.theme}>
      The HTMLelement defines a part of text in an alternate voice or mood. The
      content inside is typically displayed in italic.
    </p>
  );
}

export default Paragraph;
