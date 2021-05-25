import React from 'react';

export const useRequest = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async ({ requestAPI }) => {
    let response;
    let data;
    try {
      setError(null);
      setLoading(true);
      response = await requestAPI;
      data = response.data;
      if (response.status !== 200) throw new Error(response.data.message);
    } catch (error) {
      console.log('ERRADO: ', error.message);
      data = null;
      setError(error.message);
    } finally {
      setData(data);
      setLoading(false);
      return { response, data };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};
