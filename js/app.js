$("#summernote").summernote({
  placeholder: "Text Here",
  tabsize: 2,
  height: 120,
  toolbar: [
    ["style", ["style"]],
    ["font", ["bold", "underline", "clear"]],
    ["color", ["color"]],
    ["para", ["ul", "ol", "paragraph"]],
    ["table", ["table"]],
    ["insert", ["link", "picture", "video"]],
    ["view", ["fullscreen", "codeview", "help"]],
  ],
});

// const toggleButton = document.getElementById("toggle-button");
// const elementToToggle = document.getElementById("element-to-toggle");

// toggleButton.addEventListener("click", () => {
//   elementToToggle.classList.toggle("d_hidden");
// });

// const checkbox = document.getElementById("show_lesson_steps");
// const element = document.querySelectorAll(".toogle-step");

// checkbox.addEventListener("change", () => {
//   if (checkbox.checked) {
//     element.forEach((item) => {
//       item.classList.remove("d_hidden");
//     });
//   } else {
//     element.forEach((item) => {
//       item.classList.add("d_hidden");
//     });
//   }
// });
