const placeholder = 'bg-transparent placeholder-light-primary-accent dark:placeholder-dark-primary-accent placeholder-opacity-50 dark:placeholder-opacity-50';

const getDefaultTheme = () => {
  const base = `transition-colors bg-light-primary text-light-primary-accent dark:bg-dark-primary dark:text-dark-primary-accent`;
  const border = `${base} border-2 border-light-secondary dark:border-dark-secondary`;
  return {
    id: 'default',
    note: border,
    form: base,
    input: placeholder,
    button: base,
  };
};

const getColorTheme = (bg, text, border) => {
  const light = `${bg} text-light-primary-accent transition-colors`;
  const dark = `dark:bg-dark-primary ${text} transition-colors`;
  const base = `${light} ${dark}`;
  return {
    id: `${bg}${text}`,
    note: `${base} border-2 border-transparent ${border}`,
    form: base,
    input: placeholder,
    button: light,
  };
};

export default [
  getDefaultTheme(),
  getColorTheme('bg-red-400', 'dark:text-red-400', 'dark:border-red-400'),
  getColorTheme('bg-amber-200', 'dark:text-amber-200', 'dark:border-amber-200'),
  getColorTheme('bg-green-300', 'dark:text-green-300', 'dark:border-green-300'),
  getColorTheme('bg-lightBlue-300', 'dark:text-lightBlue-300', 'dark:border-lightBlue-300'),
];
