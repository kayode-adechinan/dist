
function loadModalComponent(){
    const event = new Event('loadModalComponent');
    document.dispatchEvent(event);
}


document
  .querySelector('#loadModalComponent')
  .addEventListener('click', loadModalComponent);