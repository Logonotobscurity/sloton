
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn4.iconfinder.com',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'uxwing.com',
      },
      {
        protocol: 'https',
        hostname: 'iconlogovector.com',
      },
      {
        protocol: 'https',
        hostname: 'icon2.cleanpng.com',
      },
      {
        protocol: 'https',
        hostname: 'registry.npmmirror.com',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'azure.microsoft.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'firebase.google.com',
      },
      {
        protocol: 'https',
        hostname: 'sredevops.org',
      },
      {
        protocol: 'https',
        hostname: 'git-scm.com',
      },
      {
        protocol: 'https',
        hostname: 'biglinden.com',
      },
       {
        protocol: 'https',
        hostname: 'deepforgeai.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-uploads.huggingface.co',
      },
      {
        protocol: 'https',
        hostname: 'logowik.com',
      },
      {
        protocol: 'https',
        hostname: 'static.stocktitan.net',
      },
      {
        protocol: 'https',
        hostname: 'techgalaxy.business.blog',
      },
      {
        protocol: 'https',
        hostname: 'contauro.com',
      },
      {
        protocol: 'https',
        hostname: 'primarymarkets.com',
      },
      {
        protocol: 'https',
        hostname: 'clock-software.com',
      },
      {
        protocol: 'https',
        hostname: 'espysys.com',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'ciberspring.com',
      },
      {
        protocol: 'https',
        hostname: 'media.tekpon.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.bizclikmedia.net',
      },
      {
        protocol: 'https',
        hostname: 'futurumgroup.com',
      },
      {
        protocol: 'https',
        hostname: 'masteriyo.com',
      },
      {
        protocol: 'https',
        hostname: 'bucketwebebis.s3.eu-north-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'veloarchia.odoo.com',
      },
      {
        protocol: 'https',
        hostname: 'e-time.it',
      },
      {
        protocol: 'https',
        hostname: 'business.feefo.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'www.quoleady.com',
      },
      {
        protocol: 'https',
        hostname: 'images.surferseo.art',
      },
    ],
  },
};

export default nextConfig;
