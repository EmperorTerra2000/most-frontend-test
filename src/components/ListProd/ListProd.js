import './ListProd.css';

import ListProdContent from '../ListProdContent/ListProdContent';
import Filter from '../Filter/Filter';

import React from 'react';

function ListProd({ cards }) {
  return (
    <>
      <Filter />
      <ListProdContent
        cards={cards}
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
