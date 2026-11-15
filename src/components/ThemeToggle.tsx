import { useEffect, useState, type MouseEvent } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTheme, setTheme, THEME_CHANGE_EVENT, type SiteTheme } from '@/lib/theme';

/**
 * Night / light switch for the menu: a sun–moon pill whose gold knob slides to the active side.
 * The knob position is driven by html[data-theme] in CSS (night-motion.css), so it is right from
 * the first paint; React state only keeps aria-checked and the hint in sync.
 */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const { t } = useLanguage();
  const copy = t.ui.theme;
  const [theme, setThemeState] = useState<SiteTheme>('dark');

  useEffect(() => {
    const sync = () => setThemeState(getTheme());
    sync();
    window.addEventListener(THEME_CHANGE_EVENT, sync);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, sync);
  }, []);

  const isDark = theme === 'dark';
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const fromPointer = event.clientX || event.clientY;
    setTheme(isDark ? 'light' : 'dark', {
      x: fromPointer ? event.clientX : rect.left + rect.width / 2,
      y: fromPointer ? event.clientY : rect.top + rect.height / 2,
    });
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={copy.darkMode}
      title={isDark ? copy.toLight : copy.toDark}
      onClick={onClick}
      className={`theme-switch ${className}`.trim()}
    >
      <span className="theme-switch__knob" aria-hidden="true" />
      <Sun className="theme-switch__icon theme-switch__sun" aria-hidden="true" strokeWidth={2.2} />
      <Moon className="theme-switch__icon theme-switch__moon" aria-hidden="true" strokeWidth={2.2} />
    </button>
  );
}

export default ThemeToggle;
