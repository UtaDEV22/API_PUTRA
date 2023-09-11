require("dotenv").config();
// const userModel = require("../model/model_instansi");
const penggunaModel = require("../model/model_pengguna");
const { requestResponse } = require("../utils");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { readFileSync } = require("fs");
const privateKey = readFileSync("./private.key", "utf-8");

let response;

const signin = async ({ TELEPON, PASSWORD }) => {

    const user = await penggunaModel.findOne({ TELEPON: TELEPON }, { _id: false }, { lean: true });
    
    if (user === null) {
        response = { ...requestResponse.unauthorized };
        response.message = "Telepon tidak ditemukan."
        return response;
    }
    
    const comparePassword = await bcrypt.compare(PASSWORD, user.PASSWORD);

    if (!comparePassword) {
        response = { ...requestResponse.unauthorized };
        response.message = "Password salah."
        return response;
    }
    
    const token = jwt.sign(
        {
            GUID: user.GUID,
          ...(user.KODE_INSTANSI && { KODE_INSTANSI: user.KODE_INSTANSI }),
        },
        privateKey,
        {
          algorithm: "RS256",
        },
        {
          expiresIn: "7d",
        }
      );
      // console.log()
    
      const result = {
        ...requestResponse.success,
        data: {
          user,
          // token,
        },
      };
      return result;
};

// const signinPengguna = async ({ USERNAME, PASSWORD }) => {

//     const user = await penggunaModel.findOne({ USERNAME: USERNAME }, { _id: false }, { lean: true });
    
//     if (user === null) {
//         response = { ...requestResponse.unauthorized };
//         response.message = "Username tidak ditemukan."
//         return response;
//     }
    
//     const comparePassword = await bcrypt.compare(PASSWORD, user.PASSWORD);

//     if (!comparePassword) {
//         response = { ...requestResponse.unauthorized };
//         response.message = "Password salah."
//         return response;
//     }
//     console.log(user.GUID)
//     const token = jwt.sign({
//       guid: user.GUID,
//       username: user.USERNAME,
//       password: user.PASSWORD
//     },

//     privateKey,{
//       expiresIn: "7d"
//     });

//     const result = { ...requestResponse.success, data: {
//         user: { ...user },
//         // token
//     }};

//     console.log(result);

//     return result;
// };

module.exports = {
    signin,
    // signinPengguna
};
