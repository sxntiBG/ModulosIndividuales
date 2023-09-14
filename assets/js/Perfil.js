//Editar imagen
const avatarButton = document.getElementById("avatar-button");
const avatarInput = document.getElementById("avatar-input");
const avatarImage = document.getElementById("avatar-image");
const avatarImagePreview = document.getElementById("avatar-image-preview");

avatarButton.addEventListener("click", () => {
  avatarInput.click();
});

avatarInput.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const objectURL = URL.createObjectURL(selectedFile);
    avatarImage.src = objectURL;
    avatarImagePreview.src = objectURL; // Aplicar al avatar preview
  }
});
