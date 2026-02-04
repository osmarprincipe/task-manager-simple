const btn = document.getElementById("completeBtn");

btn.addEventListener("click", () => {
  alert("Task completed! Notification sent.");
});


const btn = document.getElementById("completeBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  alert("Task completed! Notification sent.");
  message.textContent = "Task completed! Notification sent.";
});
