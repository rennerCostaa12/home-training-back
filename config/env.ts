import dotenv from 'dotenv';

dotenv.config();

const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key] ?? fallback;

  if (!value) {
    throw new Error(`Environment variable "${key}" is required.`);
  }

  return value;
};

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),
  jwt: {
    secret: getEnv('JWT_SECRET', 'dev-secret'),
    expiresIn: getEnv('JWT_EXPIRES_IN', '1h')
  },
  database: {
    host: getEnv('DB_HOST', 'localhost'),
    port: Number(process.env.DB_PORT ?? 3306),
    name: getEnv('DB_NAME', 'boilerplate_nodejs'),
    user: getEnv('DB_USER', 'root'),
    password: getEnv('DB_PASSWORD', 'root')
  }
};
