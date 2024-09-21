const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file"); // Corrected id name
const imageView = document.getElementById("img-view"); // Corrected id name
inputFile.addEventListener("change", uploadImage);
function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = "";
  imageView.style.border = "none";
}
dropArea.addEventListener("dragover", function(e) {
  e.preventDefault();
});
dropArea.addEventListener("drop", function(e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage();
});
const showDetails = document.querySelector(".showDetails");
document.querySelector(".geo-btn").addEventListener("click" , ()=>{
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        // console.log(position.coords.latitude);
        const {latitude , longitude} = position.coords;
        showDetails.textContent = `latitude ${latitude} and longitude ${location.coords.longitude}`;
      },
      (error)=>{
        console.log(error.message);
      }
    )
  }
})