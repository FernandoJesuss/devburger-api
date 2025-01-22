// import * as Yup from "yup";
// import User from "../models/User";

// class SessionController {
//   async store(request, response) {
//     const schema = Yup.object({
//       email: Yup.string().email().required(),
//       password: Yup.string().min(6).required(),
//     });

//     const isValid = await schema.isValid(request.body);

//     const emailOrPasswordIncorrect = () =>
//       response
//         .status(401)
//         .json({ error: "Make sure you password are correct" });

//     if (!isValid) {
//       return emailOrPasswordIncorrect();
//     }

//     const { email, password } = request.body;

//     const user = await User.findOne({
//       where: {
//         email,
//       },
//     });

//     if (!user) {
//       return emailOrPasswordIncorrect();
//     }

//     const isSamePassword = await user.checkPassword(password);

//     if (!isSamePassword) {
//       return emailOrPasswordIncorrect();
//     }

//     return response.status(201).json({
//       id: user.id,
//       name: user.name,
//       email,
//       admin: user.admin,
//     });
//   }
// }

// export default new SessionController();





import * as Yup from "yup";
import User from "../models/User";

class SessionController {
  async store(request, response) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid(request.body);

    const emailOrPasswordIncorrect = () =>
      response.status(401).json({ error: "E-mail ou senha incorretos." });

    if (!isValid) {
      return response.status(400).json({ error: "Dados inválidos." });
    }

    const { email, password } = request.body;

    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return emailOrPasswordIncorrect();
      }

      const isSamePassword = await user.checkPassword(password);

      if (!isSamePassword) {
        return emailOrPasswordIncorrect();
      }

      return response.status(200).json({
        id: user.id,
        name: user.name,
        email,
        admin: user.admin,
      });
    } catch (error) {
      return response.status(500).json({ error: "Erro ao processar a solicitação." });
    }
  }
}

export default new SessionController();

