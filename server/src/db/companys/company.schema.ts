import {Schema} from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const companySchema = new Schema ({
    _id: {
        type: String,
        default: () => uuidv4(),
    },
    companysName:{
        type: String,
    },
    cpnj:{
        type: String,
        unique: true,
    },
    companysLogo: {
        type: String,
    },
    companysCharts: {
        type:Array,
    }
}) 