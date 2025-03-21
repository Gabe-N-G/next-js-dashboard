import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: { //literally experemental still in 2025, chap 10.
    ppr: 'incremental'
  }
};

export default nextConfig;
