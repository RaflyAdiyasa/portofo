import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark'); // default dark

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;