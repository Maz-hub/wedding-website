// RSVP form conditional fields

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".rsvp-form");

  if (!form) return;

  // Get form elements
  const extraGuestRadios = form.querySelectorAll('input[name="extra_guest"]');
  const extraGuestNameField = document.getElementById("extraGuestNameField");

  const dietarySelect = document.getElementById("diet");
  const dietaryOtherField = document.getElementById("dietDetailsField");

  // Initially hide conditional fields
  if (extraGuestNameField) extraGuestNameField.style.display = "none";
  if (dietaryOtherField) dietaryOtherField.style.display = "none";

  // Handle extra guest toggle
  extraGuestRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      if (e.target.value === "Yes") {
        extraGuestNameField.style.display = "block";
      } else {
        extraGuestNameField.style.display = "none";
        // Clear the input when hiding
        const input = extraGuestNameField.querySelector("input");
        if (input) input.value = "";
      }
    });
  });

  // Handle dietary requirements toggle
  if (dietarySelect) {
    dietarySelect.addEventListener("change", (e) => {
      if (e.target.value === "Other") {
        dietaryOtherField.style.display = "block";
      } else {
        dietaryOtherField.style.display = "none";
        // Clear the input when hiding
        const input = dietaryOtherField.querySelector("input");
        if (input) input.value = "";
      }
    });
  }
});
