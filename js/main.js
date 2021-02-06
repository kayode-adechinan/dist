
function loadModalComponent(){

    document.querySelector('#app').style.display = 'flex';
    const event = new Event('loadModalComponent');
    document.dispatchEvent(event);
}


document
  .querySelector('#loadModalComponent')
  .addEventListener('click', loadModalComponent);