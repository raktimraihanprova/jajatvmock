import { useTranslation } from 'react-i18next';
import './index.scss';

const LanguageBlock = () =>{
  const { i18n } = useTranslation();

  return (
    <div className='a-language-block'>
    <div className={'a-language-text-en ' + (i18n.language === 'en' ? 'a-language-text-active' : '' )} onClick={()=> i18n.changeLanguage('en')}>EN</div>
    <div className={'a-language-text-ja ' + (i18n.language === 'ja' ? 'a-language-text-active' : '' )} onClick={()=> i18n.changeLanguage('ja')}>JP</div>
  </div>
  );
}

export default LanguageBlock;
