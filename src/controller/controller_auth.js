const authService = require("../services/service_auth");
const { requestResponse } = require("../utils");
const logger = require("../utils/logger");

let response;

const login = async (req, res) => {
    let loginResponse;
    
    try {
        const { TELEPON, PASSWORD } = req.body;
        loginResponse = await authService.signin({ TELEPON, PASSWORD });
        response = { ...loginResponse };
    } catch (error) {
        logger.error(error);
        response = { ...requestResponse.server_error };
    }

    res.status(response.code).json(response);
};

// const loginPengguna = async (req, res) => {
//     let loginResponse;
    
//     try {
//         const { USERNAME, PASSWORD } = req.body;
//         loginResponse = await authService.signinPengguna({ USERNAME, PASSWORD });
//         response = { ...loginResponse };
//     } catch (error) {
//         logger.error(error);
//         response = { ...requestResponse.server_error };
//     }

//     res.status(response.code).json(response);
// };

module.exports = {
    login,
    // loginPengguna
};
