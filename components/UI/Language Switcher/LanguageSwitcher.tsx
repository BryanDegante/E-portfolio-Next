
'use client';

import ReactCountryFlag from 'react-country-flag';
import styles from './LanguageSwitcher.module.css';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setLanguage } from '@/redux/slices/languageSlice';

type LanguageSwitcherProps ={
  onClick?: () => void;
}

export default function LanguageSwitcher({onClick}: LanguageSwitcherProps) {
  const language = useSelector(
    (state: RootState) => state.language.language
  );
  const dispatch = useDispatch();

  return (
    <div className="flex shrink-0 items-center gap-2 text-sm font-medium">
      <button
        type="button"
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
        onClick={() => {dispatch(setLanguage('en'))
          onClick?.();
        }}
        className={`flex cursor-pointer items-center gap-1.5 text-muted ${
          styles['language__button']
        } ${language === 'en' ? styles.active : ''}`}
      >
        <ReactCountryFlag
          countryCode="US"
          svg
          aria-label="United States"
        />
        EN
      </button>

      <span className="text-muted">/</span>

      <button
        type="button"
        aria-label="Switch to Spanish"
        aria-pressed={language === 'es'}
        onClick={() => {dispatch(setLanguage('es'))
          onClick?.();
        }}
        className={`flex cursor-pointer items-center gap-1.5 text-muted ${
          styles['language__button']
        } ${language === 'es' ? styles.active : ''}`}
      >
        <ReactCountryFlag
          countryCode="MX"
          svg
          aria-label="Mexico"
        />
        ES
      </button>
    </div>
  );
}
