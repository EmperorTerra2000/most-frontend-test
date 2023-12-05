class Api {
  constructor(options) {
    this.url = options.url;
  }

  //обработка ответа от сервера
  _handleResponse(res) {
    if (!res.ok) Promise.reject(`Ошибка: ${res.status}`);
    return res.json();
  }

  //импорт из файла
  getCards() {
    return fetch(`${this.url}/products`, {
      method: 'GET',
    }).then(this._handleResponse);
  }
}

const api = new Api({
  url: 'https://dummyjson.com',
});

export default api;
