import { app } from './app';
import { initializeDatabase } from "../config/database";
import { env } from '../config/env';

const bootstrap = async (): Promise<void> => {
  await initializeDatabase();

  app.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`);
  });
};

bootstrap().catch((error: unknown) => {
  console.error('Failed to start application:', error);
  process.exit(1);
});
