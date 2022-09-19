import React from 'react';

const ThemeSwitch = () => {
  var buttons = document.getElementsByClassName('button');
  let arr = [...buttons];

  arr.forEach((element, index) => {
    element.addEventListener('click', () => {
      element.style.opacity = '1';
      if (index == 0) {
        document.getElementsByTagName('body')[0].style.backgroundColor =
          'white';
      } else if (index == 1) {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'teal';
      } else {
        document.getElementsByTagName('body')[0].style.backgroundColor =
          'rgb(92, 204, 125)';
      }
      arr
        .filter(function (item) {
          return item != element;
        })
        .forEach((item) => {
          item.style.opacity = '0';
        });
    });
  });
  return (
    <div>
      <h2>THEME</h2>
      <div className="tri-state-switch">
        <input className="button" type="radio" name="toggle" id="one" />
        <input className="button" type="radio" name="toggle" id="two" />
        <input className="button" type="radio" name="toggle" id="three" />
      </div>
    </div>
  );
};

export default ThemeSwitch;
