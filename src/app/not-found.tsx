'use client';
import Link from 'next/link';

import { ROUTES_MAP } from '@/modules/core/constants/routes';

const NotFound = () => {
  return (
    <div>
      <p>Not found</p>
      <Link href={ROUTES_MAP.home.path}>{ROUTES_MAP.home.label}</Link>
    </div>
  );
};

export default NotFound;
