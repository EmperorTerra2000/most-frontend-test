import './Filter.css';

import React from 'react';

function Filter({ cards, setCardsView, cardsView }) {
  const [valueCategory, setValueCategory] = React.useState('');

  return (
    <>
      <section className="filter">
        <div className="filter__content">
          <BlockSort cardsView={cardsView} setCardsView={setCardsView} />
          <BlockFilter
            placeholder="Фильтр (выбрать)"
            setValueCategory={setValueCategory}
            cards={cards}
            setCardsView={setCardsView}
          />
          <FilterSearchBox
            placeholder="Поиск (введите слово)"
            valueCategory={valueCategory}
            cards={cards}
            setCardsView={setCardsView}
          />
        </div>
      </section>
    </>
  );
}

function BlockSort(props) {
  const [isDescendingActive, setIsDescendingActive] = React.useState(false);
  const [isAskendingActive, setIsAskendingActive] = React.useState(false);

  const compareDescending = (a, b) => {
    return Number(b.price) - Number(a.price);
  };

  const compareAscending = (a, b) => {
    return Number(a.price) - Number(b.price);
  };

  const handleClickSort = (event) => {
    if (event.currentTarget.id === 'descending') {
      setIsAskendingActive(false);
      setIsDescendingActive(true);

      props.setCardsView((data) => {
        const dataToSort = [...data];
        dataToSort.sort(compareDescending);
        return dataToSort;
      });
    } else if (event.currentTarget.id === 'askending') {
      setIsDescendingActive(false);
      setIsAskendingActive(true);

      props.setCardsView((data) => {
        const dataToSort = [...data];
        dataToSort.sort(compareAscending);
        return dataToSort;
      });
    }
  };

  return (
    <>
      <div className="filter__block-sort">
        <p className="filter__block-sort_title">Сортировать по стоимости:</p>
        <div className="filter__block-sort_box">
          <p
            className={`filter__block-sort_el ${
              isDescendingActive ? 'filter__block-sort_el_active' : ''
            }`}
            onClick={handleClickSort}
            id="descending">
            по убыванию
          </p>
          <p
            className={`filter__block-sort_el ${
              isAskendingActive ? 'filter__block-sort_el_active' : ''
            }`}
            onClick={handleClickSort}
            id="askending">
            по возрастанию
          </p>
        </div>
      </div>
    </>
  );
}

function BlockFilter(props) {
  const refinput = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  let listFilters = props.cards.map((item, index) => {
    return item.category;
  });

  // Удаление одинаковых элементов массива
  listFilters = listFilters.filter(
    (value, index, self) => index === self.findIndex((t) => t === value),
  );

  listFilters.unshift('Отключить фильтр');

  const handleClickBlockFilter = (event) => {
    setIsVisible(!isVisible);
  };

  const handleSelectInput = (event) => {
    if (refinput.current != null) {
      if (event.currentTarget.innerText === 'Отключить фильтр') {
        refinput.current.value = '';
        props.setValueCategory('');
        props.setCardsView(props.cards);
      } else {
        const valueFilter = event.currentTarget.innerText;
        refinput.current.value = valueFilter;
        props.setValueCategory(valueFilter);

        props.setCardsView(
          props.cards.filter((el) => {
            return el.category.toLowerCase().includes(valueFilter.toLowerCase());
          }),
        );
      }

      setIsVisible(!isVisible);
    }
  };

  return (
    <>
      <div
        className="filter__search-box filter__search-box_type_block-filter"
        onClick={handleClickBlockFilter}>
        <div className="filter__row filter__row_type_block-filter">
          <input
            onClick={handleClickBlockFilter}
            ref={refinput}
            type="text"
            id="input-box"
            disabled
            placeholder={props.placeholder}
            autoComplete="off"></input>
        </div>
        <div
          className={`filter__result-box filter__result-box_type_block-filter ${
            isVisible ? 'filter__result-box_active' : ''
          }`}>
          <ul>
            {listFilters &&
              listFilters.map((item, index) => {
                return <LiElement key={index} name={item} onClick={handleSelectInput} />;
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

function FilterSearchBox(props) {
  const refinput = React.useRef(null);
  const [cardsSearch, setCardsSearch] = React.useState([]);

  // событие нажатие клавиши
  const handleKeyUp = (event) => {
    let result = [];
    let inputValue = event.currentTarget.value;

    if (inputValue.length) {
      result = cardsFilter(inputValue);
    }

    setCardsSearch(result);
  };

  const handleSelectInput = (event) => {
    if (refinput.current != null) {
      const valueResult = event.currentTarget.innerText;
      refinput.current.value = valueResult;

      // обнуляем массив для скрытия списка соответствий после нажатия
      // элемента соответствия кнопкой мыши
      setCardsSearch([]);

      props.setCardsView(cardsFilter(valueResult));
    }
  };

  const cardsFilter = (value) => {
    return props.cards.filter((el) => {
      if (props.valueCategory) {
        return (
          el.title.toLowerCase().includes(value.toLowerCase()) &&
          el.category === props.valueCategory
        );
      } else {
        return el.title.toLowerCase().includes(value.toLowerCase());
      }
    });
  };

  return (
    <div className="filter__search-box">
      <div className="filter__row">
        <input
          ref={refinput}
          onKeyUp={handleKeyUp}
          type="text"
          id="input-box"
          placeholder={props.placeholder}
          autoComplete="off"></input>
      </div>
      <div className="filter__result-box">
        {cardsSearch.length === 0 ? (
          ''
        ) : (
          <ul>
            {cardsSearch &&
              cardsSearch.map((item, index) => {
                return <LiElement key={index} name={item.title} onClick={handleSelectInput} />;
              })}
          </ul>
        )}
      </div>
    </div>
  );
}

function LiElement(props) {
  return <li onClick={props.onClick}>{props.name}</li>;
}

export default Filter;
