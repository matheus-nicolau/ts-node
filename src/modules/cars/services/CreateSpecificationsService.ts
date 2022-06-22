import { send } from "process";
import { ISpecificationRepository } from "../repositories/ISpecificationRepository"

interface Repository {
    name: String;
    description: String;
}

class SpecificationService {

    constructor(private specificationrepository: ISpecificationRepository){}

    execute({name, description}) {

        const specificationAlredyExists = this.specificationrepository.findByName(name);

        if(specificationAlredyExists) {
            throw new Error('Specification already exists !');
            
        }

        this.specificationrepository.create({name, description});
    }
}

export { SpecificationService }