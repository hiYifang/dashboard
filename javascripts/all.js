// 選單收合(sidebar)
const body = document.querySelector('body');
const toggleBtn = document.querySelector('#toggle-btn');
toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('sidebar-toggled');
})

// Modal
const modalByDel = document.querySelector('#deleteModal');
modalByDel.addEventListener('show.bs.modal', (e) => {
  const btn = e.relatedTarget;
  const orderId = btn.dataset.bsOrderId;

  const modalText = modalByDel.querySelector('#deleteText');
  modalText.textContent = orderId;
})