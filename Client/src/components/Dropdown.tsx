import darkMode from 'assets/icons/darkMode.svg';
import dayMode from 'assets/icons/dayMode.svg';
import changeLanguage from 'assets/icons/changeLanguage.svg';
import logout from 'assets/icons/logout.svg';
import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext.ts';

interface DropdownProps {
  isOpen: boolean;
}

export default function DropdownMenu({ isOpen }: DropdownProps) {
  const themeContext = useContext(ThemeContext);
  if (!isOpen || !themeContext) return null;

  const { toggleTheme, theme, themeColors } = themeContext;
  const { bgColor, textColor, dropDownHover } = themeColors;

  const containerClasses = `${bgColor} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50`;
  const classes = `${textColor} ${dropDownHover} cursor-pointer rounded-lg block px-4 py-2 text-sm flex items-center space-x-2`;
  const themeText = theme === 'light' ? 'Night Mode' : 'Day Mode';
  const themeIcon = theme === 'light' ? darkMode : dayMode;

  return (
    <div className={containerClasses}>
      <div className="py-4 px-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className={`${classes} mb-4`} onClick={toggleTheme}>
          <img src={themeIcon} alt="mode" className={`mr-2 h-6 w-6 ${themeText}`} /> {themeText}
        </div>
        <div className={`${classes} mb-4`}>
          <img src={changeLanguage} alt="change language" className={`mr-2 h-6 w-6 ${themeText}`} /> Language: En
        </div>
        <div className={classes}>
          <img src={logout} alt="logout" className={`mr-2 h-6 w-6 ${themeText}`} /> Logout
        </div>
      </div>
    </div>
  );
}
