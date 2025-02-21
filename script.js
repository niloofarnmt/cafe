document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const roomType = document.querySelector("#roomType").value;
    alert("اتاق " + roomType + " با موفقیت رزرو شد.");
  });
  