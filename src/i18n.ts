import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { en_US, zh_CN } from './locales';
import { I18nLangs } from './types';

i18n
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: I18nLangs.en_US,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en_US: { translation: en_US },
      zh_CN: { translation: zh_CN }
    }
  });

export default i18n;
