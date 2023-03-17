import { ThemeContextProvider } from './contexts/ThemeContext';
import { LanguageContextProvider } from './contexts/LanguageContext';
import './styles.css'
import Container from './Container';

function App() {
  return (
    <div>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <Container />
        </ThemeContextProvider>
      </LanguageContextProvider>

    </div>
  );
}

export default App;
