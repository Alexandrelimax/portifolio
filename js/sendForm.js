const form = document.querySelector("#contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = form.querySelector('[name="name"]');
  const email = form.querySelector('[name="email"]');
  const message = form.querySelector('[name="message"]');

  const fields = [name.value, email.value, message.value];
  if (checkIsEmpty(fields)) return;

  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  const reqConfig = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  try {
    const response = await fetch("../api/contactForm.js", reqConfig);
    if (!response.ok) throw new Error("Ops! Deu ruim, tente mais tarde");

    const data = await response.json();
    feedbackMessage(data.message, "success");
    resetInput(formData);
  } catch (error) {
    const errorMessage = formatErrorMessage(error.message);
    feedbackMessage(errorMessage, "failed");
  }

});

function checkIsEmpty(fields) {
  return fields.some((field) => field.trim() === "");
}

function feedbackMessage(message, status) {
  const check = document.querySelector(".message");
  if (check) return;

  const div = document.createElement("div");
  div.classList.add(`message`);
  div.classList.add(`${status}`);

  div.innerHTML = `<span>${message}</span>`;

  const parent = form.parentNode;
  parent.insertBefore(div, form);

  setTimeout(() => {
    div.remove();
  }, 2000);
}

function resetInput(input) {
  for (const key in input) {
    input[key].value = "";
  }
}

function formatErrorMessage(message) {
  const data = message.replace("Error : ", "");
  return data;
}
