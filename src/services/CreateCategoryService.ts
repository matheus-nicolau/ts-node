import { CategoriesRepository } from "../repositories/CategoriesRepository"; 


interface ICategoryService {
    name: string;
    description: string;
}

class CreateCategoryService {

    constructor(private categoriesRepository: CategoriesRepository) {}

       
    execute({name, description}: ICategoryService ): void {
            
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
            
        if(categoryAlreadyExists) {
            throw new Error ("Category already exists!")
        }
        
        this.categoriesRepository.create({ name, description});
    
    }

}

export { CreateCategoryService }