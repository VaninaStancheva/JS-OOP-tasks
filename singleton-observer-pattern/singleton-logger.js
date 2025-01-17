class Logger {
    constructor () {
        if (Logger.instance == null) {
            this.logs = [];
            Logger.instance = this;
        } else {
            console.log('You cannot make another logger instance!');
        }
        return Logger.instance;
    }

    log (message) {
        this.logs.push(message);
        console.log(`${message}`);
    }

    getLogs () {
        console.log(this.logs.join(',')) ;
    }

    printLogCount () {
        console.log(`${this.logs.length} logs`);
    }
}

const logger = new Logger();
Object.freeze(logger);

logger.printLogCount();
logger.log('first');
logger.printLogCount();
logger.log('second');
logger.printLogCount();
logger.getLogs();

const logger2 = new Logger();
logger2.printLogCount();
logger2.log('1-first');
logger2.printLogCount();
logger2.log('2-second');
logger2.printLogCount();
logger2.getLogs();