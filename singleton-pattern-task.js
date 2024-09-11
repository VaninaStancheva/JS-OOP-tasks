var Configuration = /** @class */ (function () {
    function Configuration() {
        if (Configuration.instance) {
            throw new Error("Cannot instantiate directly. Use Configuration.getConfig().");
        }
        this.config = {};
    }
    Configuration.getInstance = function () {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance;
    };
    Configuration.prototype.setConfig = function (key, value) {
        this.config[key] = value;
    };
    Configuration.prototype.getConfig = function (key) {
        return this.config[key];
    };
    Configuration.prototype.getAllConfigData = function () {
        return this.config;
    };
    return Configuration;
}());
var config = Configuration.getInstance();
var config2 = Configuration.getInstance();
//const config3 = new Configuration();
config.setConfig('testKey', 'testValue');
config.setConfig('testKey2', 'testValue2');
console.log(config.getConfig('testKey'));
console.log(config2.getConfig('testKey2'));
console.log(config.getAllConfigData());
