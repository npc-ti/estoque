import { Document, Model } from "mongoose";

export interface dataChart{
    month: stirng;
    spent: number;
    profit: number;
    amount: number;
}

export interface chart {
    _id?: string;
    dataChart: [];
}

export interface company {
    _id?: string;
    companysName: string;
    cpnj: string;
    companysLogo: string;
    companysCharts: chart[];
}

export interface companyDocument extends Document, company {}
export interface ICompanyModel extends Model<companyDocument> {}
