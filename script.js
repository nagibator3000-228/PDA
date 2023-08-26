const socket = io("https://pda-0j64.onrender.com", { transports: ["websocket"] });

var group = '';

socket.on("connect", () => {
   console.log("Conected");

   socket.on("get-task", (data) => {
      let parsed_data = JSON.parse(data);
      console.log(parsed_data);
      document.getElementById("task").innerHTML = `<p>${parsed_data.task}</p>`;
   });

   socket.on("clear", () => {
      document.getElementById("task").innerHTML = ``;
   });
});

socket.on("disconnect", () => {
   console.log("Disconnected from server");
});

$(document).ready(() => {
   var dropdownItems = document.querySelectorAll('.dropdown-item');

   dropdownItems.forEach((item) => {
      item.addEventListener('click', () => {
         if (item.innerText !== 'No Group') {
            group = item.innerText;
            let btn = document.querySelector('.dropdown-toggle');
            btn.innerText = group;
            socket.emit("join", group);
         } else {
            setTimeout(() => {
               location.reload();
            }, 1000);
         }
      });
   });
   setInterval(check_stats, 144 / 1000);
});

function check_stats() {
   if (parseInt(document.getElementById("health").innerText) < 51) {
      document.getElementById("health").classList.add("text-warning");
      document.getElementById("health").classList.remove("text-success");
      document.getElementById("health").classList.remove("text-danger");
   } else if (parseInt(document.getElementById("health").innerText) < 26) {
      document.getElementById("health").classList.add("text-danger");
      document.getElementById("health").classList.remove("text-success");
      document.getElementById("health").classList.remove("text-warning");
   } else if (parseInt(document.getElementById("health").innerText) < 0) {
      document.getElementById("health").innerText = 0;
      document.getElementById("health").classList.remove("text-warning");
      document.getElementById("health").classList.add("text-success");
      document.getElementById("health").classList.remove("text-danger");
   } else {
      document.getElementById("health").classList.remove("text-warning");
      document.getElementById("health").classList.add("text-success");
      document.getElementById("health").classList.remove("text-danger");
   }

   if (parseInt(document.getElementById("rad").innerText) > 49) {
      document.getElementById("rad").classList.add("text-warning");
      document.getElementById("rad").classList.remove("text-success");
      document.getElementById("rad").classList.remove("text-danger");
   } else if (parseInt(document.getElementById("rad").innerText) > 99) {
      document.getElementById("rad").classList.add("text-danger");
      document.getElementById("rad").classList.remove("text-success");
      document.getElementById("rad").classList.remove("text-warning");
   } else if (parseInt(document.getElementById("rad").innerText) < 20) {
      document.getElementById("rad").innerText = 20;
      document.getElementById("rad").classList.remove("text-warning");
      document.getElementById("rad").classList.add("text-success");
      document.getElementById("rad").classList.remove("text-danger");
   } else {
      document.getElementById("rad").classList.remove("text-warning");
      document.getElementById("rad").classList.add("text-success");
      document.getElementById("rad").classList.remove("text-danger");
   }

   if (parseInt(document.getElementById("bio").innerText) > 29){
      document.getElementById("bio").classList.add("text-warning");
      document.getElementById("bio").classList.remove("text-success");
      document.getElementById("bio").classList.remove("text-danger");
   } else if (parseInt(document.getElementById("bio").innerText) > 79) {
      document.getElementById("bio").classList.add("text-danger");
      document.getElementById("bio").classList.remove("text-success");
      document.getElementById("bio").classList.remove("text-warning");
   } else if (parseInt(document.getElementById("bio").innerText) < 0) {
      document.getElementById("bio").innerText = 0;
      document.getElementById("bio").classList.remove("text-warning");
      document.getElementById("bio").classList.add("text-success");
      document.getElementById("bio").classList.remove("text-danger");
   } else {
      document.getElementById("bio").classList.remove("text-warning");
      document.getElementById("bio").classList.add("text-success");
      document.getElementById("bio").classList.remove("text-danger");
   }

   if (parseInt(document.getElementById("psy").innerText) > 99) {
      document.getElementById("psy").classList.add("text-warning");
      document.getElementById("psy").classList.remove("text-success");
      document.getElementById("psy").classList.remove("text-danger");
   } else if (parseInt(document.getElementById("psy").innerText) > 199) {
      document.getElementById("psy").classList.add("text-danger");
      document.getElementById("psy").classList.remove("text-success");
      document.getElementById("psy").classList.remove("text-warning");
   } else if (parseInt(document.getElementById("psy").innerText) < 0) {
      document.getElementById("psy").innerText = 0;
      document.getElementById("psy").classList.remove("text-warning");
      document.getElementById("psy").classList.add("text-success");
      document.getElementById("psy").classList.remove("text-danger");
   } else {
      document.getElementById("psy").classList.remove("text-warning");
      document.getElementById("psy").classList.add("text-success");
      document.getElementById("psy").classList.remove("text-danger");
   }
   
   if (parseInt(document.getElementById("temp").innerText) > 49) {
      document.getElementById("temp").classList.add("text-warning");
      document.getElementById("temp").classList.remove("text-success");
      document.getElementById("temp").classList.remove("text-danger");
   } else if (parseInt(document.getElementById("temp").innerText) > 129) {
      document.getElementById("temp").classList.add("text-danger");
      document.getElementById("temp").classList.remove("text-success");
      document.getElementById("temp").classList.remove("text-warning");
   } else if (parseInt(document.getElementById("temp").innerText) < 23) {
      document.getElementById("temp").innerText = 23;
      document.getElementById("temp").classList.remove("text-warning");
      document.getElementById("temp").classList.add("text-success");
      document.getElementById("temp").classList.remove("text-danger");
   } else {
      document.getElementById("temp").classList.remove("text-warning");
      document.getElementById("temp").classList.add("text-success");
      document.getElementById("temp").classList.remove("text-danger");
   }
}
