import {container} from "tsyringe"
import { ElementRepository } from "../../repositories/ElementRepository"
import { ICategoryRepository } from "../../repositories/IcategoryRepository"
import { IElementRepository } from "../../repositories/IElementRepository"
import { CategoriesRepository } from "../../repositories/implementatios/CategoryRepository"

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<IElementRepository>(
    "ElementRepository",
    ElementRepository
);