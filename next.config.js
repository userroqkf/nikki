// /** @type {import('next').NextConfig} */
const nextConfig = {

  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
      config.externals.push({
          '@aws-sdk/signature-v4-multi-region': 'commonjs @aws-sdk/signature-v4-multi-region',
      })

      return config
  },
  images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: '/**',
          },
        ],
        domains: ['nikkihostedcontent.s3.ap-southeast-1.amazonaws.com', "d1su0spwyw95eu.cloudfront.net"],
      },
}

module.exports = nextConfig


// module.exports = {
//   nextConfig,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'picsum.photos',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
// }
