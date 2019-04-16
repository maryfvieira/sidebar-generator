import { ILog } from "./log";
import { inject } from "inversify";
import TYPES from "constants/TYPES";


export class Exception extends Error {
    readonly statusCode!: number;
    readonly name!: string;
    readonly log: ILog;
  
    constructor(message: object | string, log: ILog) {
      
      if (message instanceof Object) {
        super(JSON.stringify(message));
        log.log().error(JSON.stringify(message));
      } else {
        super(message);
        log.log().error(message);
      }
      this.name = this.constructor.name;
      this.log = log;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export class HTTP400Error extends Exception {
    readonly statusCode = 400;
  
    constructor(message: string | object = "Bad Request", log: ILog) {
      super(message, log);
    }
  }
  
  export class HTTP401Error extends Exception {
    readonly statusCode = 401;
  
    constructor(message: string | object = "Unauthorized", log: ILog) {
      super(message, log);
    }
  }
  
  export class HTTP403Error extends Exception {
    readonly statusCode = 403;
  
    constructor(message: string | object = "Forbidden", log: ILog) {
      super(message, log);
    }
  }
  
  export class HTTP404Error extends Exception {
    readonly statusCode = 404;
  
    constructor(message: string | object = "Not found", log: ILog) {
      super(message, log);
    }

  }

  export class ConnectionDBError extends Exception {
    
    constructor(message: string | object = "ConnectionDBError", log: ILog) {
      super(message, log);

    }
    
  }

