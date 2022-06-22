import { Specification } from "../model/Specification";


interface ISpecificationRepositoryDTO {
    name: String;
    description: String;
}

interface ISpecificationRepository {

    create ({name, description}: ISpecificationRepositoryDTO): void;

    findByName(name: String): Specification;
}


export {ISpecificationRepository, ISpecificationRepositoryDTO }