const APP_CONFIG = {    
    PORT: process.env.PORT,
    JWT_ADMIN: process.env.JWT_SECRET_KEY_ADMIN,
    JWT_VENDOR: process.env.JWT_SECRET_KEY_VENDOR,
    ADMIN_ACCESS_KEY: process.env.ADMIN_ACCESS_KEY_USE_PARAMS,
    VENDOR_ACCESS_KEY: process.env.VENDORE_ACCESS_KEY_USE_PARAMS,
    DB_URL: process.env.DB_URL,
}

module.exports = APP_CONFIG;