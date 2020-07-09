const development = {
  host: () => '127.0.0.1',
  port: () => '5321',
  bk: {
    host: () => 'http://api.lead-gen.com',
    port: () => '4321',
    fullUrl: () => 'http://localhost:4321',
  },
};

type EnvConfig = typeof development;
// const testing: EnvConfig = { };

export const otherConfigs = {
  auth: {
    cookieName: () => 'ts-bk-cookie',
  },
};

export const configs = {
  getEnvObj: (envString:string): EnvConfig => {
    if (envString === 'development') { return development; }
    // if (envString === 'testing') { return testing; }
    throw new Error(`Unexpected envString of ${envString}. Valid values are 'development', 'testing'`);
  },
};
