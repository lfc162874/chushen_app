export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
  }
}

export function notFound(message = 'resource not found') {
  return new ApiError(404, message);
}
