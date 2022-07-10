import path from 'path';
import {
  createLogger,
  format,
  transports,
} from 'winston';

import { pluginId } from '../consts';

const { combine, splat, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp, ...metadata }) => {
  let msg = `${pluginId} ${timestamp} [${level}] : ${typeof message === 'string' ? message : JSON.stringify(message, null, 2)} `;
  if (metadata) {
    msg += typeof metadata === "string" ? metadata: JSON.stringify(metadata, null, 2);
  }
  return msg;
});

const configFileINFO = {
  filename: path.resolve(process.cwd(), 'output', 'event-info.log'),
  level: 'info',
  options: { flags: 'w' },
  format: combine(
    splat(),
    timestamp(),
    myFormat
  )
};

const configFileWARN = {
  filename: path.resolve(process.cwd(), 'output', 'event-warn.log'),
  level: 'warn',
  options: { flags: 'w' },
  format: combine(
    splat(),
    timestamp(),
    myFormat
  )
};

const configFileERROR = {
  filename: path.resolve(process.cwd(), 'output', 'event-error.log'),
  level: 'error',
  options: { flags: 'w' },
  format: combine(
    splat(),
    timestamp(),
    myFormat
  )
};

const configConsole = {
  format: combine(
    format.colorize({all:true}),
    splat(),
    timestamp(),
    myFormat
  )
};

const logger = createLogger({
  transports: [
    new transports.Console(configConsole),
    new transports.File(configFileINFO),
    new transports.File(configFileWARN),
    new transports.File(configFileERROR),
  ]
});

export default logger;
