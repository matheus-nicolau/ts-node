"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationRepository = void 0;
const Specification_1 = require("../model/Specification");
class SpecificationRepository {
    constructor() {
        this.specification = [];
    }
    create({ name, description }) {
        const specification = new Specification_1.Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        });
        this.specification.push(specification);
    }
    findByName(name) {
        const specification = this.specification.find(specification => specification.name === name);
        return specification;
    }
}
exports.SpecificationRepository = SpecificationRepository;
