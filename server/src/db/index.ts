import { Mongoose, connect, disconnect } from 'mongoose';

class mongoDb {
    uri: string;
    db: Mongoose | undefined;

    constructor() {
        const { dbPass, dbName, dbUser } =  process.env;
        this.uri = `mongodb+srv://${ dbUser }:${ dbPass }@cluster0.5ntvk.mongodb.net/${ dbName }/?retryWrites=true`;
        this.db = undefined;
    }

    public async connection () {
        try{
            if(this.db)
                return;
        
        const connection = await connect(this.uri,{
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
          });
        
          this.db = connection;
        }
        catch(err){
            throw err;
        }
    }
    public async disconnect () {
        if(!this.db)
            return;
            await disconnect();
    }
    public dataBase () {
        if(this.db)
            return this.db;

        throw "Database not created";
    }
}

export default new mongoDb