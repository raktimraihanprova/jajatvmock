import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'jajatv': 'JAJA TV',
          'DISCOVER_JAPAN':'DISCOVER JAPAN',
          'ecmt-header-desc': 'JAJA TV is a story book that gets you closer to deep places and locals in their city.',
          'jajatv-description': 'JAJA TV combines guidebooks, local matchups and convenient coupons into a single app. Come experience TV like never before!',
          'footer-download-text': 'Download app and get coupon free!'
        },
      },
      ja: {
        translation: {
          'jajatv': 'ジャジャTV',
          'DISCOVER_JAPAN':'ディスカバー・ジャパン',
          'ecmt-header-desc': 'JAJA TV は、人々の身近な「ディープ」を配信 するストーリーブックです',
          'jajatv-description': `ガイドブックも、現地の人との出会いも、便利なクーポンもアプリひとつで。今までの常識を超えるテレビ体験`,
          'footer-download-text': 'ダウンロードして今すぐクーポンを GET ！'
        },
      },
    },
    lng: "en",
    fallbackLng: "ja",
  });

export default i18n;