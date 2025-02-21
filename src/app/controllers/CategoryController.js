
// import * as Yup from "yup";


// class ProductController {
//     async store(request, response) {
//         const schema = Yup.object({
//             name: Yup.string().required(),
//             price: Yup.number().required(),
//             category: Yup.string().required(),
//         });

//         try {
//             schema.validateSync(request, body, { abortEarly: false });
//         } catch (err) {
//             return response.status(400).json({ error: err.errors });
//         }
//         return response.status(201).json({ message: "ok" });

//     }
// }

// export default new ProductController();





import * as Yup from "yup";
import Category from "../models/Category";

class CategoryController {
    async store(request, response) {
        const schema = Yup.object({
            name: Yup.string().required(),
             });

             

        try {
            
            await schema.validate(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors }); 
        }

      
        const { name } = request.body;

        const category = await Category.create({
            name,
          
        });

        return response.status(201).json(category);
    }
    async index(request, response) {
        const categories = await Category.findAll();

        

        return response.json(categories);
    }
}

export default new CategoryController();
