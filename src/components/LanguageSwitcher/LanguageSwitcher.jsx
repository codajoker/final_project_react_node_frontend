import { CustomSelect } from './LanguageSwitcher.styled';
import LanguageIcon from '@mui/icons-material/Language';
import i18next from 'i18next';

const options = [
  { value: 'en', label:  'En' },
  { value: 'de', label: 'De' },
  { value: 'pl', label: 'Pl' },
  { value: 'uk', label: 'Uk' },
]
const LanguageSwitcher = () => {
  const { changeLanguage} = i18next;


  const handleChange = options => {
    const selectedLang = options.value;
    changeLanguage(selectedLang);
  };
  return (
    <CustomSelect
      onChange={handleChange}
      classNamePrefix={'react-select'}
      isSearchable={false}
      placeholder={<LanguageIcon color='primary' />}
      options={options}
      controlShouldRenderValue={false} />
)
};

export default LanguageSwitcher;








