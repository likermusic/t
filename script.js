let dayId = 1;
document.querySelector(".add-day")?.addEventListener("click", function () {
  if (dayId > 6) {
    let a = "☺"; //  ☹
    alert(`Кто этот безумец, который хочет учиться всю неделю? ${a}`);
    return;
  }
  const textDay = document.querySelector(".text-day").value;
  const markupDay = `<div class="row">
  <div class="accordion-item col-6 border border-0" id="${dayId}">
                        <h2 class="accordion-header">
                        <button
                            class="accordion-button border
                           "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse${dayId}"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            ${textDay}
                        </button>
                        </h2>
                        <div id="collapse${dayId}" class="accordion-collapse collapse">
                            <ul
                                class="accordion-body list-group list-group-numbered list-group-flush"
                            >
                            </ul>
                        </div>
                       </div>
                       <div class="col-6">
                            <input type="text" class="text-lesson mt-2 w-75 form-control align-bottom" placeholder="Название урока"/>  
                            <button class="btn btn-outline-primary add-lesson">Добавить</button>                        
                       </div> 
                       </div>
                       `;

  document
    .querySelector(".accordion")
    ?.insertAdjacentHTML("beforeend", markupDay);
  document.querySelector(".text-day").value = "";
  dayId++;
});

document.querySelector(".accordion").addEventListener("click", function (e) {
  if (e.target.matches(".add-lesson")) {
    const textLesson =
      e.target.parentElement.querySelector(".text-lesson").value;
    const markupKLesson = `
        <li class="list-group-item list-group-item-action">${textLesson}</li>
        `;
    e.target
      .closest(".row")
      .querySelector(".accordion-item .accordion-body")
      .insertAdjacentHTML("beforeend", markupKLesson);
    e.target.closest(".row").querySelector(".text-lesson").value = "";
  }
});

{
  /* <div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
  <button
    class="accordion-button"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseOne"
    aria-expanded="true"
    aria-controls="collapseOne"
  >
    Accordion Item #1
  </button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse">
  <ul
    class="accordion-body list-group list-group-numbered list-group-flush"
  >
    <li class="list-group-item list-group-item-action">An item</li>
    <li class="list-group-item list-group-item-action">
      A second item
    </li>
    <li class="list-group-item list-group-item-action">
      A third item
    </li>
    <li class="list-group-item list-group-item-action">
      A fourth item
    </li>
    <li class="list-group-item list-group-item-action">
      And a fifth one
    </li>
  </ul>
</div>
</div> */
}
