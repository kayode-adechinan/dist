function loadModalComponent() {
  document.querySelector('.page-wrapper').style.zIndex = '-2';
  document.querySelector('#app').style.display = 'flex';
  const event = new Event('loadModalComponent');
  document.dispatchEvent(event);
}

document
  .querySelector('#loadModalComponent')
  .addEventListener('click', loadModalComponent);

function rollBack() {
  //alert('capture');
  //document.querySelector('.page-wrapper').style.removeProperty('zIndex');
  document.querySelector('.page-wrapper').style.zIndex = '9999999999';
}

document.querySelector('.modal-overlay').addEventListener('click', rollBack);
