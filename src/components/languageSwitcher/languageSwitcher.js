import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../i18nConfig';

import styles from './languageSwitcher.module.css'

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleChange = (newLocale) => {
    setSelectedLocale(newLocale);
    setIsOpen(false);

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  const getLanguageLabel = (locale) => {
    switch (locale) {
      case 'en':
        return 'EN';
      case 'ar':
        return 'AR';
      case 'ja':
        return 'JA';
      default:
        return 'FR';
    }
  };

  const availableLocales = ['fr', 'en', 'ar', 'ja'].filter(locale => locale !== selectedLocale);

  return (
    <div className={styles.languageSwitcher} ref={dropdownRef}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        {getLanguageLabel(selectedLocale)}
      </div>
      {isOpen && (
        <ul className={styles.dropdown}>
          {availableLocales.map(locale => (
            <li key={locale} onClick={() => handleChange(locale)}>
              {getLanguageLabel(locale)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
