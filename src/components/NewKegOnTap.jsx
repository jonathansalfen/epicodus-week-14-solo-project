import React from 'react';

function NewKegOnTap(props) {
  let _name = null;
  let _brand = null;
  let _type = null;
  let _price = null;
  let _alcoholContent = null;
  let _pintsAvailable = null;
  let _tapLocation = null;

  function handleNewKegOnTapSubmit(event) {
    event.preventDefault();
    props.onNewKegOnTapAddition({
      name: _name.value,
      brand: _brand.value,
      type: _type.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      pintsAvailable: _pintsAvailable.value,
      tapLocation: _tapLocation.value
    });

    _name.value = '';
    _brand.value = '';
    _type.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _pintsAvailable.value = '';
    _tapLocation.value = '';

    console.log(`The event that was submited is ${event}`);
    console.log(event.target.name);
  }

  return(
    <div>
      <p>Add a new keg below:</p>
      <form onSubmit={handleNewKegOnTapSubmit}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}
        />
        <input
          type='text'
          id='brand'
          placeholder='Brewery Brand'
          ref={(input) => {_brand = input;}}
        />
        <input
          type='text'
          id='type'
          placeholder='Brew Type'
          ref={(input) => {_type = input;}}
        />
        <input
          type='integer'
          id='price'
          placeholder='Keg Price'
          ref={(input) => {_price = input;}}
        />
        <input
          type='integer'
          id='alcoholContent'
          placeholder='Alcohol Content'
          ref={(input) => {_alcoholContent = input;}}
        />
        <input
          type='integer'
          id='pintsAvailable'
          placeholder='Total Pints in Keg'
          ref={(input) => {_pintsAvailable = input;}}
        />
        <input
          type='integer'
          id='tapLocation'
          placeholder='Tap Location'
          ref={(input) => {_tapLocation = input;}}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewKegOnTap;
