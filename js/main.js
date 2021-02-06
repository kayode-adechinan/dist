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

  document.querySelector('.page-wrapper').style.removeProperty('z-index');
  document.querySelector('#app').style.display = 'none';
}

document.querySelector('.modal-overlay').addEventListener('click', rollBack);
