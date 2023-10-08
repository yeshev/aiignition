import type { Route, Routes } from '@/modules/core/types/routes.types';

export const ROUTES_MAP: Record<Routes, Route> = {
  home: { path: '/', label: 'home' },
  signIn: { path: '/auth/sign-in', label: 'signIn' },
  signUp: { path: '/auth/sign-up', label: 'signUp' },
};
