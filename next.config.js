module.exports = {
  future: { webpack5: true },
  basePath: "",
  images: {
    domains: ["benchmark.promotingnepal.com"],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/investor-profile": { page: "/investor-profile" },
    };
  },
};
