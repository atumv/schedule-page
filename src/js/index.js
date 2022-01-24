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
  eventDesc = document.querySelector('.list-event-description-container'),
  eventAddBtn = document.querySelector('.list-event-add'),
  addBtnContainer = document.querySelector('.list-event-add-btn-container'),
  addBtn = document.querySelector('.list-event-add-btn'),
  addBtnIcon = document.querySelector('.list-event-add-btn-icon'),
  speakers = document.querySelector('.speakers'),
  scheduleViewBtn = document.querySelector('.toggle-view-btn'),
  scheduleView = document.querySelector('.schedule-view'),
  addToCalendarBtn = document.querySelectorAll('.add-to-calendar-btn');

toggleDescBtn.addEventListener('click', toggleDescriptionShow);
addBtnContainer.addEventListener('click', toggleSubscription);
scheduleViewBtn.addEventListener('click', toggleScheduleView);
addToCalendarBtn.forEach((btn) =>
  btn.addEventListener('click', toggleAddToCalendar)
);

function toggleAddToCalendar(e) {
  e.target.classList.toggle('add-to-calendar-btn-enabled');
  e.target.classList.contains('add-to-calendar-btn-enabled')
    ? (e.target.innerHTML = 'В календаре')
    : (e.target.innerHTML = 'Добавить <br />в календарь');
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

function toggleSubscription() {
  addBtn.classList.toggle('list-event-add-btn-enabled');
  addBtnIcon.classList.toggle('list-event-add-btn-enabled');
  addBtn.classList.contains('list-event-add-btn-enabled')
    ? (addBtn.innerHTML = 'Добавлено')
    : (addBtn.innerHTML = 'Добавить');
}

window.addEventListener(
  'resize',
  function () {
    if (window.innerWidth <= 992) {
      speakers.append(eventAddBtn);
      eventAddBtn.classList.add('');
    } else {
      eventDesc.append(eventAddBtn);
    }
  },
  true
);
