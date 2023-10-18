// /** @type {import('next').NextConfig} */
const nextConfig = {

  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack, nextRuntime}) => {
      config.externals.push({
          '@aws-sdk/signature-v4-multi-region': 'commonjs @aws-sdk/signature-v4-multi-region',
      })

      if (isServer && nextRuntime === "nodejs")
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ })
      );

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
