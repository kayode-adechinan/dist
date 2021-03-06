function loadModalComponent() {
  document.querySelector('.page-wrapper').style.zIndex = '-2';
  document.querySelector('#app').style.display = 'flex';
  const event = new Event('loadModalComponent');
  document.dispatchEvent(event);
}

const buttons = document.querySelectorAll('.loadmodalcomponent');

buttons.forEach(element => {
  element.addEventListener('click', loadModalComponent);
});

/*
document
  .querySelector('.loadmodalcomponent')
  .addEventListener('click', loadModalComponent);
  */

function rollBack() {
  //alert('capture');

  document.querySelector('.page-wrapper').style.removeProperty('z-index');
  document.querySelector('#app').style.display = 'none';
  const event = new Event('loadModalComponent');
  document.dispatchEvent(event);
}

document.querySelector('.modal-overlay').addEventListener('click', rollBack);
