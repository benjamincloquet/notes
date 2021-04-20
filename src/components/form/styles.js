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

const getColorTheme = (color) => {
  const light = `bg-${color} text-light-primary-accent transition-colors`;
  const dark = `dark:bg-dark-primary dark:text-${color} transition-colors`;
  const base = `${light} ${dark}`;
  return {
    id: color,
    note: `${base} border-2 border-transparent dark:border-${color}`,
    form: base,
    input: placeholder,
    button: light,
  };
};

export default [getDefaultTheme(), getColorTheme('red-400'), getColorTheme('amber-200'), getColorTheme('green-300'), getColorTheme('lightBlue-300')];
