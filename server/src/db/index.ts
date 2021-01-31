import mongoose,{ Mongoose, disconnect } from 'mongoose';
import { config } from 'dotenv';

let db: typeof mongoose;
config();
class mongoDb {
    uri: string;

    constructor() {
        const { dbPass, dbName, dbUser } =  process.env;
        this.uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.5ntvk.mongodb.net/tests?retryWrites=true&w=majority`;
        
    }

    public async connection (){
        try{
            if(db)
                return db;
        
        const connection = await mongoose.connect(this.uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
          });
          db = connection;
          mongoose.Promise = global.Promise

        }
        catch(err){
            throw err;
        }
    }
    public async disconnect () {
        if(!db)
            return;
            await disconnect();
    }
    public dataBase () {
            return db;
    }
}

export default new mongoDb