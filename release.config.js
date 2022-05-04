module.exports = {
  branches: ["main"],
  repositoryUrl: "https://github.com/sadrataban/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};
