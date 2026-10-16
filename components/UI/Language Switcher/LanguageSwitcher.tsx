import ReactCountryFlag from 'react-country-flag';
import styles from './LanguageSwitcher.module.css';
export default function LanguageSwitcher() {
  return (
    <div className='flex shrink-0 items-center gap-2 text-sm font-medium'>
      <button
        type='button'
        aria-label='Switch to English'
        className={`flex items-center gap-1.5 cursor-pointer text-muted ${styles['language__button']} hover:text-[#60a5fa] active:text-[#60a5fa] active:border-[rgba(59, 130, 246,_0.35)] active:bg-[rgba(59, 130, 246,_0.12)]`}>

        <ReactCountryFlag countryCode='US' svg aria-label='United States' />
        EN
      </button>

      <span className='text-muted'>/</span>

      <button
        type='button'
        aria-label='Switch to Spanish'
        className={`flex items-center gap-1.5 cursor-pointer text-muted ${styles['language__button']} hover:text-[#60a5fa] active:text-[#60a5fa] active:border-[rgba(59, 130, 246,_0.35)] active:bg-[rgba(59, 130, 246,_0.12)]`}>
        <ReactCountryFlag countryCode='MX' svg aria-label='Mexico' />
        ES
      </button>
    </div>
  );
}
