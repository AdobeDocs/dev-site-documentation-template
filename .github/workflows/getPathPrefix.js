module.exports = async ({ core }) => {
  const { GITHUB_WORKSPACE } = process.env;
  const { pathPrefix } = await require(`${GITHUB_WORKSPACE}/gatsby-config.js`);

  try {
    core.setOutput('path_prefix', pathPrefix);
    core.exportVariable('path_prefix', pathPrefix);
  } catch (err) {
    if (!pathPrefix) {
      core.setFailed('Missing path prefix');
    } else if (pathPrefix === '/') {
      core.setFailed('Path prefix "/" is not allowed');
    } else if (!pathPrefix.startsWith('/') || !pathPrefix.endsWith('/')) {
      core.setFailed('Path prefix should start and end with "/"');
    }
  }
};
