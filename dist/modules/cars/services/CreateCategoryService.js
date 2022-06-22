"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
class CreateCategoryService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    execute({ name, description }) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }
        this.categoriesRepository.create({ name, description });
    }
}
exports.CreateCategoryService = CreateCategoryService;
