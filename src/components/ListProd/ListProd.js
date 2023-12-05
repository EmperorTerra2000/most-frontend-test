import './ListProd.css';

import ListProdContent from '../ListProdContent/ListProdContent';
import Filter from '../Filter/Filter';
import api from '../../utils/Api';

import React from 'react';

function ListProd() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    handleImportCards();
  }, []);

  function handleImportCards() {
    api.getCards().then((cards) => {
      setCards(cards.products);
    });
  }

  console.log(cards);

  return (
    <>
      <Filter />
      <ListProdContent
        cards={cards}
        setCards={setCards}
        // onDeleteCard={onDeleteCard}
        // handleAddTask={handleAddTask}
        // handleChangeTheme={handleChangeTheme}
        // handleChangeTodo={handleChangeTodo}
        // handleDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default ListProd;
