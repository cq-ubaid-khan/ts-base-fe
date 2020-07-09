const getDefaultFetchHeaders = () => ({
  Accept: '*/*',
});

type requestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

const api = (url: string, method: requestMethods, headers = {}, reqBody:string|null = null) => {
  const defaultFetchHeaders = getDefaultFetchHeaders();
  const params: RequestInit = {
    headers: { ...defaultFetchHeaders, ...headers },
    method,
    body: reqBody,
    // mode: 'cors',
    credentials: 'include',
  };
  let responseHeaders: any;
  let responseStatus: any;
  return fetch(url, params)
    .then((res) => {
      responseHeaders = res.headers;
      responseStatus = res.status;
      const type: string | null = res.headers.get('content-type');
      if (type && type.includes('application/json')) {
        return res.json();
      }
      return res.text();
    })
    .then((body) => ({ headers: responseHeaders, body, status: responseStatus }));
};

export const get = (url: string, headers: any) => api(url, 'GET', headers);
export const post = (url: string, headers: any, body: any) => api(url, 'POST', headers, JSON.stringify(body));
export const put = (url: string, headers: any, body: any) => api(url, 'PUT', headers, JSON.stringify(body));
export const del = (url: string, headers: any, body: any) => api(url, 'DELETE', headers, JSON.stringify(body));

export const postFile = (url: string, headers: Headers, body: any) => api(url, 'POST', headers, body);
