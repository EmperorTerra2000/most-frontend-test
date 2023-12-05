import './Filter.css';

import React from 'react';

function Filter() {
  return (
    <>
      <section className='filter'>
        <div className='filter__content'>
          {/* <FilterSearchBox placeholder='От' availableKeywords={availableKeywords} />
          <FilterSearchBox placeholder='Куда' availableKeywords={availableKeywords} /> */}
        </div>
      </section>
    </>
  );
}

/*function LiElement(props) {
  return (
    <li onClick={props.onClick}>{props.name}</li>
  );
}

function FilterSearchBox(props) {
  const refinput = React.useRef(null);
  const [listResult, setListResult] = React.useState([]);

  // событие нажатие клавиши
  const handleKeyUp = (event) => {
    let result = [];
    let inputValue = event.currentTarget.value;

    if (inputValue.length) {
      result = props.availableKeywords.filter((keyword) => {
        return keyword.toLowerCase().includes(inputValue.toLowerCase());
      });
    }

    setListResult(result);
  }

  const handleSelectInput = (event) => {
    if (refinput.current != null) {
      refinput.current.value = event.currentTarget.innerText;

      // обнуляем массив для скрытия списка соответсвий после нажатия
      // самого соответствия кнопкой мыши
      setListResult([]);
    }
  }

  return (
    <div className='filter__search-box'>
      <div className='filter__row'>
        <input ref={refinput} onKeyUp={handleKeyUp} type="text" id="input-box" placeholder={props.placeholder} autoComplete='off'></input>
      </div>
      <div className='filter__result-box'>
        {
          listResult.length === 0 ? '' : (
            <ul>
              {
                listResult && (
                  listResult.map((item, index) => {
                    return (
                      <LiElement key={index} name={item} onClick={handleSelectInput} />
                    )
                  })
                )
              }
            </ul>
          )
        }
      </div>
    </div>
  );
}*/

export default Filter;