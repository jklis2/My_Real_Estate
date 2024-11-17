import { useContext } from 'react';
import Navbar from 'layouts/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from 'layouts/Footer';
import { ThemeContext } from 'contexts/ThemeContext.ts';

export default function RootLayout() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { themeColors } = themeContext;

  return (
    <div className={themeColors.bgColor}>
      <div className="container font-lato m-auto">
        <Navbar textColor={themeColors.textColor} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
