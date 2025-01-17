class ConnectionStatus {
    private static instance: ConnectionStatus;
    private status: boolean;

    public constructor() {
        if (ConnectionStatus.instance) {
            throw new Error("Cannot instantiate directly. Use ConnectionStatus.getConnectionStatus().");
        }
        this.status = false;
    }

    public static getInstance () {
        if (!ConnectionStatus.instance) {
            ConnectionStatus.instance = new ConnectionStatus();
        }
        return ConnectionStatus.instance;
    }

    public connectToDatabase () {
        if (!this.status) {
            console.log("Connecting to the database...");
            this.status = true;
            console.log("Database connection established.");
        } else {
            console.log("Already connected to the database.");
        }
    }

    public disconnectFromDatabase () {
        console.log("Disconnected from the database.")
        return this.status = false;
    }

    public getConnectionStatus(): boolean {
        return this.status;
    }
}

const dbManager1 = ConnectionStatus.getInstance();
const dbManager2 = ConnectionStatus.getInstance();


console.log(dbManager1 === dbManager2);
dbManager1.connectToDatabase();
console.log(`Connection Status: ${dbManager1.getConnectionStatus()}`);
dbManager2.disconnectFromDatabase();
console.log(`Connection Status: ${dbManager1.getConnectionStatus()}`);

