import { Router } from 'express';

import { usersRoutes } from '../../modules/users/routes/users.routes';
import { HttpStatusCode } from './HttpStatusCode';
import { successResponse } from './responses';

export const routes = Router();

routes.get('/health', (_request, response) => {
  return successResponse({
    response,
    statusCode: HttpStatusCode.OK,
    message: 'Application is healthy.',
    data: { status: 'ok' }
  });
});

routes.use('/api/users', usersRoutes);
