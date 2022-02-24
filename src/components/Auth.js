export const BASE_URL = "https://auth.nomoreparties.co";

const request = ({url, method = 'POST', token, body}) => {
  const config = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...!!token && { 'Authorization': `Bearer ${token}` },
    },
    ...!!body && { body: JSON.stringify(body) },
  }
  return fetch(`${BASE_URL}${url}`, config)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      
      return Promise.reject(`Ошибка: ${response.status}`);
    });
}

export const register = (email, password) => {
  return request({
    url: '/signup',
    body: { email, password },
  })
};

export const authorize = (email, password) => {
  return request({
    url: '/signin',
    body: { email, password },
  })
};

export const getContent = token => {
  return request({
    url: '/users/me',
    method: 'GET',
    token,
  })
};
