"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationService = void 0;
class SpecificationService {
    constructor(specificationrepository) {
        this.specificationrepository = specificationrepository;
    }
    execute({ name, description }) {
        const specificationAlredyExists = this.specificationrepository.findByName(name);
        if (specificationAlredyExists) {
            throw new Error('Specification already exists !');
        }
        this.specificationrepository.create({ name, description });
    }
}
exports.SpecificationService = SpecificationService;
