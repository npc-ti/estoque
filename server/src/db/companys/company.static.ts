import companyModel from './company.model';
import { company, companyDocument } from './company.types';

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

    public async registerCompany (company: company) {
        if(await companyModel.findOne({cpnj: company.cpnj}))

            throw {err: 'O cpnj já esta cadastrado'};

        const response = await companyModel.create(company);

        return {company: response}
    }
}

export default new Company;