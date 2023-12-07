class Api {
  constructor(options) {
    this.url = options.url;
  }

  //обработка ответа от сервера
  _handleResponse(res) {
    if (!res.ok) Promise.reject(`Ошибка: ${res.status}`);
    return res.json();
  }

  //список карточек
  getCards() {
    return fetch(`${this.url}/products`, {
      method: 'GET',
    }).then(this._handleResponse);
  }

  //список карточек
  getCardId(id) {
    return fetch(`${this.url}/products/${id}`, {
      method: 'GET',
    }).then(this._handleResponse);
  }

  authorization(username, password) {
    return fetch(`${this.url}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        if (!res.ok) return Promise.reject(`Ошибка: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          return data;
        } else return;
      }); //присваиваем токен JWT к локальному хранилищу localStotage
  }

  //передача токена из локалсторадж на сервер с тем, чтобы проверить на их соответствие
  getContent(token) {
    return fetch(`${this.url}/auth/RESOURCE`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (!res.ok) return Promise.reject(`Ошибка: ${res.status}`);
      return res.json();
    });
  }
}

const api = new Api({
  url: 'https://dummyjson.com',
});

export default api;
