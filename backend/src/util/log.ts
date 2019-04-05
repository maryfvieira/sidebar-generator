
import { createLogger, format, transports } from "winston";
import * as dailyRotateFile from "winston-daily-rotate-file";
import * as fs from 'fs';

const logDir = './log';
const env = process.env.NODE_ENV || 'development';

if (!fs.existsSync(this.logDir)) {
    fs.mkdirSync(this.logDir);
}

const dailyRotateFileTransport = new dailyRotateFile({
    dirname: this.logDir,
    filename: `%DATE%-results.log`,
    json: true,
    datePattern: 'YYYY-MM-DD'
  });

  const logger = createLogger({
    // change level if in dev environment versus production
    level: env === 'development' ? 'verbose' : 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.printf(debug => `${debug.timestamp} ${debug.level}: ${debug.message}`)
    ),
    transports: [
      new transports.Console({
        level: 'debug',
        format: format.combine(
          format.colorize(),
          format.printf(
            debug => `${debug.timestamp} ${debug.level}: ${debug.message}`
          )
        )
      }),
      dailyRotateFileTransport
    ]
  });

if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;



