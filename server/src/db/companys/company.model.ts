import mongoose from 'mongoose';
import { companyDocument } from './company.types';
import { model } from 'mongoose';
import { companySchema } from './company.schema';

const companyModel = model <companyDocument> ('company', companySchema, 'companys' );

export default companyModel;