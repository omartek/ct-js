const defaultProject = require('./defaultProject');

/**
 * @returns {Promise<string>} A promise that resolves into the absolute path
 * to the projects' directory
 */
const getDefaultProjectDir = function (): Promise<string> {
    const {getProjectsDir} = require('./../../platformUtils');
    return getProjectsDir();
};

const getExamplesDir = function (): string {
    const path = require('path');
    try {
        require('gulp');
        // Most likely, we are in a dev environment
        return path.join((nw.App as any).startPath, 'src/examples');
    } catch (e) {
        return path.join((nw.App as any).startPath, 'examples');
    }
};

/**
 * Returns a path that does not end with `.ict`
 * @param  {string} projPath
 * @returns {string}
 */
const getProjectDir = function (projPath: string): string {
    return projPath.replace(/\.ict$/, '');
};

/**
 * Returns a path to the project's thumbnail.
 * @param {string} projPath
 * @param {boolean} [fs] Whether to return a filesystem path (true) or a URL (false; default).
 */
const getProjectThumbnail = function (projPath: string, fs?: boolean) {
    const path = require('path');
    projPath = getProjectDir(projPath);
    if (fs) {
        return path.join(projPath, 'img', 'splash.png');
    }
    return `file://${projPath.replace(/\\/g, '/')}/img/splash.png`;
};

/**
 * Returns a path that ends with `.ict` file
 * @param  {string} projPath
 * @returns {string}
 */
const getProjectIct = function (projPath: string): string {
    if (!(/\.ict$/.test(projPath))) {
        return projPath + '.ict';
    }
    return projPath;
};

let projectPath: string | void = void 0;
const getProjectPath = () => projectPath;
const setProjectPath = (newPath: string) => {
    projectPath = newPath;
};

module.exports = {
    defaultProject,
    getDefaultProjectDir,
    getProjectThumbnail,
    getProjectIct,
    getProjectDir,
    getExamplesDir,
    getProjectPath,
    setProjectPath
};
