
  const normalizeResponse = (res) => res.data;
  const normalizeError = (error) => {
    if (error.isAxiosError && error.response) return error.response.data;
    throw error;
  };

  module.exports = {
    normalizeResponse,
    normalizeError,
  }