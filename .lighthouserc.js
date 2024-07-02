const targetUrls = require('./lighthouse/target-url')

module.exports = {
    ci: {
      collect: {
        url: targetUrls,
        startServerCommand: 'npm run start',
        settings: {
          onlyCategories: ['accessibility', 'triple'],
          configPath: './lighthouse/config.js',
        },
        numberOfRuns: 1,
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  }