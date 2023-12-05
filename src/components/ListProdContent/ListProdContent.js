import './ListProdContent.css';

import React from 'react';
import Card from '../Card/Card';

// import Card from '../Card/Card';

function ListProdContent({
  cards,
  // onDeleteCard,
  // handleAddTask,
  // handleChangeTheme,
  // handleChangeTodo,
  // handleDeleteTodo,
}) {
  console.log(cards);
  // function onChange(sourceId, sourceIndex, targetIndex) {
  //   const nextState = swap(cards, sourceIndex, targetIndex);
  //   setCards(nextState);
  // }

  return (
    <>
      <section className="list-prod-content">
        <div className="list-prod-content__content">
          <ul className="list-prod-content__list">
            {cards && cards.map((item, index) => <Card key={item.id} data={item} />)}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ListProdContent;
