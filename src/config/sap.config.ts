/* istanbul ignore file */

import { ConfigService, registerAs } from '@nestjs/config';
import { SapModulePoolConnectionOptions } from 'nestjs-sap-rfc';

/**
 * Default Minimum pool connection number
 * @type {number}
 * @const DEFAULT_MIN_POOL_CONNECTIONS
 */
const DEFAULT_MIN_POOL_CONNECTIONS = 2;
/**
 * Default Maximum pool connection number
 * @type {number}
 * @const DEFAULT_MAX_POOL_CONNECTIONS
 */
const DEFAULT_MAX_POOL_CONNECTIONS = 4;
/**
 * Component to read environment variable from .env file
 * @type {ConfigService<Record<string, unknown>, false>}
 * @const config
 */
const config = new ConfigService();

export default registerAs(
  'sap',
  () =>
    ({
      poolOptions: {
        low:
          +config.get('SAP_MIN_POOL_CONNECTIONS') ||
          DEFAULT_MIN_POOL_CONNECTIONS,
        high:
          +config.get('SAP_MAX_POOL_CONNECTIONS') ||
          DEFAULT_MAX_POOL_CONNECTIONS,
      },
      connectionParameters: {
        ashost: config.get('SAP_HOST'),
        user: config.get('SAP_USERNAME'),
        passwd: config.get('SAP_PASSWORD'),
        sysnr: config.get('SAP_SYSNR'),
        client: config.get('SAP_CLIENT'),
        lang: config.get('SAP_LANG'),
      },
    } as SapModulePoolConnectionOptions),
);
