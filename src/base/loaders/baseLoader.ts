import { configs, otherConfigs } from '../../../configs/config';

export const appEnv = 'development';
export const appConfigs = otherConfigs;
export const appEnvConfig = configs.getEnvObj(appEnv);
