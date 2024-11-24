const { DistributionAPI } = require('helios-core/common')
const ConfigManager = require('./configmanager')

exports.REMOTE_DISTRO_URL = 'https://cdn.jsdelivr.net/gh/JeremGamingYT/Elysia-Launcher@main/di.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null,
    null,
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api