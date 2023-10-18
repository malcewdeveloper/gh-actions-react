const config = {
    "release": {
      "branches": ["main"],
      "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/github",
        [
          "@semantic-release/exec",
          {
            "prepareCmd": "echo 'Preparing MVP release'"
          }
        ]
      ],
      "extends": "@semantic-release/npm",
      "tagFormat": "${version}-mvp.${next(0)}"
    }
};

module.exports = config;
