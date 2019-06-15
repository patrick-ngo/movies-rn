export const Exception = (status: any, message: any) => ({
  name: 'Exception',
  status,
  message,
  toString() {
    return `${this.name}: ${this.status} - ${this.message}`;
  },
});

export const constructQueryWithParams = (params: any) =>
  Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');

function getHeaders() {
      return {
        'Content-Type': 'application/json',
      };
}

const handleResponse = async (_: any, response: any) => {
  switch (response.status) {
    case 200:
      try {
        // ServerTime.syncWithServerTime(response.headers.get('Date')); // Sync device time to server time
        return response.json();
      } catch (error) {
        // Log error in parsing json response
        return null;
      }
    default: {
      throw Exception(response.status, ''); // error 401 unauthorized
    }
  }
};


export const post = async (url: string, body: any) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: getHeaders(),
  });
  return handleResponse(url, response);
};

export const get = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: getHeaders(),
  });
  return handleResponse(url, response);
};