'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-16 rounded-full border border-white/15 bg-white/5" aria-hidden />;

  const dark = resolvedTheme === 'dark';
  return (
    <button
      type="button"
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="theme-toggle"
    >
      <Sun className={dark ? 'opacity-50' : 'opacity-100'} size={14} />
      <span className={`theme-thumb ${dark ? 'theme-thumb-dark' : ''}`}>
        {dark ? <Moon size={13} /> : <Sun size={13} />}
      </span>
      <Moon className={dark ? 'opacity-100' : 'opacity-50'} size={14} />
    </button>
  );
}
