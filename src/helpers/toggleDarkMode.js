const bodyClassList = document.getElementsByTagName('body')[0].classList;

export const toggleDarkMode = (isDarkMode, setDarkMode) => {
  setDarkMode(!isDarkMode);
  localStorage.setItem('darkMode', JSON.stringify(!isDarkMode));

  !isDarkMode
    ? bodyClassList.add('darkMode')
    : bodyClassList.remove('darkMode');
};
