
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

    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir);
    }

    this.logger = this.getLoggerInstance();
  }

  public log(): Logger{
    return this.logger;
  }

  private getLoggerInstance() : Logger {
    this.logger = createLogger({
      // change level if in dev environment versus production
      level: this.env === 'development' ? 'debug' : 'info',
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
          dirname: this.logDir,
          filename: `%DATE%-results.log`,
          json: true,
          datePattern: 'YYYY-MM-DD'
        })
      ]
    });

    return this.logger;
  }  
}






