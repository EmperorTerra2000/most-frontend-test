import './ListProd.css';

import ListProdContent from '../ListProdContent/ListProdContent';
import Filter from '../Filter/Filter';

import React from 'react';

function ListProd({ cards, cardsView, setCardsView }) {
  return (
    <>
      <Filter cards={cards} cardsView={cardsView} setCardsView={setCardsView} />
      <ListProdContent
        cards={cardsView}
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
