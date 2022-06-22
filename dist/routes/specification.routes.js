"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationRoutes = void 0;
const express_1 = require("express");
const SpecificationRepository_1 = require("../modules/cars/repositories/SpecificationRepository");
const CreateSpecificationsService_1 = require("../modules/cars/services/CreateSpecificationsService");
const specificationRoutes = (0, express_1.Router)();
exports.specificationRoutes = specificationRoutes;
const specificationRepository = new SpecificationRepository_1.SpecificationRepository;
specificationRoutes.get("/", (request, response) => {
    const { name, description } = request.body;
    const specificationService = new CreateSpecificationsService_1.SpecificationService(specificationRepository);
    specificationService.execute({ name, description });
    return response.send().status(201);
});
