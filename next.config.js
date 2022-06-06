/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru", "se"],
    defaultLocale: "ru",
  },
};

module.exports = nextConfig;
