import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { SpecificationService } from "../modules/cars/services/CreateSpecificationsService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository; 

specificationRoutes.post("/", (request, response) => {

    const { name, description } = request.body;

    const specificationService = new SpecificationService(specificationRepository);

    specificationService.execute({name, description});

    return response.status(201).send();
})

export { specificationRoutes } 