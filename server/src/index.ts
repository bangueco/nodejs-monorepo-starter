import app from "./app"
import config from "./utils/config"
import logger from "./utils/logger"

app.listen(config.SERVER_PORT, () => logger.info(`Server is now connected at PORT:${config.SERVER_PORT}`))