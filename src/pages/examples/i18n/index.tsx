import { useI18n } from '@/hooks';
import { I18nLangs } from '@/types';

const I18nExample = () => {
  const { t, changeLanguage, currentLanguage } = useI18n();
  return (
    <div>
      <div>{`当前语言是${currentLanguage}`}</div>
      <div>
        <button onClick={() => changeLanguage(I18nLangs.zh_CN)}>{'点击设置为中文'}</button>
      </div>
      <div>
        <button onClick={() => changeLanguage(I18nLangs.en_US)}>{'点击设置为英文'}</button>
      </div>
      <div>{t('welcome')}</div>
    </div>
  );
};

export default I18nExample;
