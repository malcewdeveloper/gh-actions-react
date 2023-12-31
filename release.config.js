const config = {
    branches: ['main'],
    branches: ['main', 'develop'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        ["@semantic-release/git", {
            "assets": ["build/*.js", "build/*.js.map"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        '@semantic-release/github',
    ]
};

module.exports = config;

