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
}

const api = new Api({
  url: 'https://dummyjson.com',
});

export default api;
