import companyModel from './company.model';
import { companyDocument } from './company.types';

class Company {

    public async getCompany (companyId: string): Promise<companyDocument | any> {
        try{
            const company = await companyModel.findOne({_id: companyId});
            
            if(!company)
                throw {err: 'Companhia não encontrada'};
            
            return company;
        }
        catch(err){
            throw err;
        }
    }
}

export default new Company;