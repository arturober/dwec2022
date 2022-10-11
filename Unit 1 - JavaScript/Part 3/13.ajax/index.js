const table = document.getElementById("table");
const form = document.getElementById("form");
const imgPreview = document.getElementById("imgPreview");

form.image.addEventListener("change", (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  if (file) reader.readAsDataURL(file);
  reader.addEventListener("load", (e) => {
    imgPreview.src = reader.result;
  });
});


