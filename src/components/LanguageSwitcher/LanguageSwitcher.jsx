import {
  SelectCss,
 } from './LanguageSwitcher.styled';
import i18next from 'i18next';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const [lang, setLang] = useState('');

  useEffect(() => {
    const localeLang = window.localStorage.getItem('i18nextLng');
    if (localeLang.length > 0) {
      setLang('en');
    }
    setLang(localeLang);
  }, []);

  const handleChange = e => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18next.changeLanguage(selectedLang);
  };
  return (
    <SelectCss onChange={handleChange} value={lang}>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="pl">Polski</option>
      <option value="uk">Ukrainian</option>
    </SelectCss>
  );
};

export default LanguageSwitcher;

