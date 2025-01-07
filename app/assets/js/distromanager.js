const { DistributionAPI } = require('helios-core/common')
const ConfigManager = require('./configmanager')

exports.REMOTE_DISTRO_URL = 'https://raw.githubusercontent.com/JeremGamingYT/Elysia-Launcher@main/dist4.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null,
    null,
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api