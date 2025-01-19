import { I18nLangs } from '@/types'; // 确保路径正确
import { useTranslation } from 'react-i18next';

const useI18n = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: I18nLangs) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;
  const languages = i18n.languages;

  return { t, changeLanguage, currentLanguage, languages };
};

export { useI18n };
