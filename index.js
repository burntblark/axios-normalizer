
  const normalizeResponse = (res) => res.data;
  const normalizeError = (error) => {
    if (error.response && !error.request) return error.response.data;
    throw error;
  };

  module.exports = {
    normalizeResponse,
    normalizeError,
  }