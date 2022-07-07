import { CategoriesRepository } from "../repositories/CategoriesRepository";


interface IRequest {
  name: string;
  description: string;
}


class CreateCategoryService {
  constructor(private categoriesRepository : CategoriesRepository){

  }
  execute({description, name}:IRequest): void{
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)
    
  // verificar se a categoria ja existe
    if(categoryAlreadyExists){
      throw new Error("Category Already exists!")
    }
  
  
    this.categoriesRepository.create({name, description})
  }
}

export {CreateCategoryService}