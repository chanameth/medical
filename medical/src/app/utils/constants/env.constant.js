require('../../configs/dotenv.config')

export const ENV=  { 
    ENV: process.env.NODE_ENV,
    APP_PORT: process.env.APP_PORT,
    DB_CONFIG : JSON.parse(process.env.DB_CONFIG)
};