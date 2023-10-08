import type { Route, Routes } from '@/modules/core/types/routes.types';

export const ROUTES_MAP: Record<Routes, Route> = {
  home: { path: '/', label: 'Home' },
  signIn: { path: '/auth/sign-in', label: 'Sign in' },
  signUp: { path: '/auth/sign-up', label: 'Sign up' },
};
