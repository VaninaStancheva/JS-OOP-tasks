class Configuration {
    private static instance: Configuration;
    private config: {};

   public constructor() {
        if (Configuration.instance) {
            throw new Error("Cannot instantiate directly. Use Configuration.getConfig().");
        }
        this.config = {}
    }

    public static getInstance(): Configuration {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance
    }

    public setConfig(key, value) {
        this.config[key] = value;
    }

    public getConfig(key) {
       return this.config[key];
    }

    getAllConfigData() {
       return this.config;
    }

}

const config = Configuration.getInstance();
const config2 = Configuration.getInstance();
//const config3 = new Configuration();

config.setConfig('testKey', 'testValue');
config.setConfig('testKey2', 'testValue2');
console.log(config.getConfig('testKey'));
console.log(config2.getConfig('testKey2'));
console.log(config.getAllConfigData())

