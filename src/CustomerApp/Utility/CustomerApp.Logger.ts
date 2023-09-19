export interface ILogger{
    Log();
}
export class BaseLogger implements ILogger{
    Log(){
        console.log("Base logger")
    }
}
export class ConsoleLogger extends BaseLogger{
    Log() {
        console.log("Using console logger")
    }
}

export class DbLogger extends BaseLogger{
    Log() {
    console.log("Using Db logger")
    }
}

export class FileLogger extends BaseLogger{
    Log() {
    console.log("Using file logger")
    }
}