"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const CategoriesRepository_1 = require("../modules/cars/repositories/CategoriesRepository");
const CreateCategoryService_1 = require("../modules/cars/services/CreateCategoryService");
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
const categoriesRepository = new CategoriesRepository_1.CategoriesRepository();
categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createCategoryService = new CreateCategoryService_1.CreateCategoryService(categoriesRepository);
    createCategoryService.execute({ name, description });
    return response.status(201).send();
});
categoriesRoutes.get("/", (request, response) => {
    const list = categoriesRepository.list();
    return response.json(list);
});
