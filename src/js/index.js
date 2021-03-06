import '../styles/style.scss';

const slickOptions = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '.speakers-next-btn',
  variableWidth: true,
};

$(document).ready(function () {
  $('.speakers-container').slick(slickOptions);
});

const list = document.querySelector('.list'),
  table = document.querySelector('.table'),
  toggleDescBtn = document.querySelector('.list-event-program-toggle-btn'),
  desc = document.querySelector('.list-event-program-description'),
  addBtnContainers = document.querySelectorAll('.list-event-add-btn-container'),
  addButtons = document.querySelectorAll('.list-event-add-btn'),
  addButtonIcons = document.querySelectorAll('.list-event-add-btn-icon'),
  scheduleViewBtn = document.querySelector('.toggle-view-btn'),
  scheduleView = document.querySelector('.schedule-view'),
  addToCalendarBtn = document.querySelectorAll('.add-to-calendar-btn');

addToCalendarBtn.forEach((btn) =>
  btn.addEventListener('click', toggleAddToCalendar)
);
addBtnContainers.forEach((container) =>
  container.addEventListener('click', toggleSubscription)
);
scheduleViewBtn.addEventListener('click', toggleScheduleView);
toggleDescBtn.addEventListener('click', toggleDescriptionShow);

function toggleAddToCalendar(e) {
  e.target.classList.toggle('add-to-calendar-btn-enabled');
  e.target.classList.contains('add-to-calendar-btn-enabled')
    ? (e.target.innerHTML = 'В календаре')
    : (e.target.innerHTML = 'Добавить <br />в календарь');
}

function toggleSubscription() {
  addButtons.forEach((btn) => {
    btn.classList.toggle('list-event-add-btn-enabled');
    btn.classList.contains('list-event-add-btn-enabled')
      ? (btn.innerHTML = 'Добавлено')
      : (btn.innerHTML = 'Добавить');
  });
  addButtonIcons.forEach((icon) =>
    icon.classList.toggle('list-event-add-btn-enabled')
  );
}

function toggleScheduleView() {
  list.classList.toggle('hidden');
  table.classList.toggle('hidden');
  list.classList.contains('hidden')
    ? (scheduleView.innerText = 'Список')
    : (scheduleView.innerText = 'Таблица');
}

function toggleDescriptionShow() {
  desc.classList.toggle('hidden');
  toggleDescBtn.classList.toggle('border-bottom-reset');
}
