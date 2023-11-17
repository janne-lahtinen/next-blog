const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongo_login_name: 'next-blog',
        mongo_password: 'r808Kjmzcp6Yo2IZ',
        mongo_clustername: 'cluster0',
        mongo_database: 'next-blog-dev'
      },
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongo_login_name: 'next-blog',
      mongo_password: 'r808Kjmzcp6Yo2IZ',
      mongo_clustername: 'cluster0',
      mongo_database: 'next-blog'
    },
  }
}

module.exports = nextConfig
