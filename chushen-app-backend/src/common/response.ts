export function success<T>(data: T) {
  return {
    code: 0,
    data
  };
}

export function failure(message: string, code = 500) {
  return {
    code,
    message,
    data: null
  };
}
