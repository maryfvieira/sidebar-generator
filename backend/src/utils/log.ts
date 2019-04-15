
import { createLogger, format, transports, Logger } from "winston";
import dailyRotateFile from "winston-daily-rotate-file";
import DailyRotateFileTransportInstance from "winston-daily-rotate-file";
import * as fs from 'fs';

export class WistomLog{
  
  private dailyRotateFileTransport: any;
  private logDir = './../../log';
  private env = process.env.NODE_ENV || 'development';

  private logger: Logger;

  constructor(){

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    this.logger = this.getLoggerInstance();
  }

  public log(): Logger{
    return logger;
  }

  private getLoggerInstance() : Logger {
    this.logger = createLogger({
      // change level if in dev environment versus production
      level: env === 'development' ? 'debug' : 'info',
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
        new dailyRotateFile({
          dirname: logDir,
          filename: `%DATE%-results.log`,
          json: true,
          datePattern: 'YYYY-MM-DD'
        })
      ]
    });

    return this.logger;
  }  
}

const logDir = './../../log';
const env = process.env.NODE_ENV || 'development';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new dailyRotateFile({
  dirname: logDir,
  filename: `%DATE%-results.log`,
  json: true,
  datePattern: 'YYYY-MM-DD'
});

export const logger = createLogger({
  // change level if in dev environment versus production
  level: env === 'development' ? 'debug' : 'info',
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




