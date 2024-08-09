const $toggler = document.querySelector(".toggler");
const $sidebar = document.querySelector(".sidebar");
const $main = document.querySelector(".main");
const $closeSidebarButton = document.querySelector(".closeSidebarButton");

$closeSidebarButton.addEventListener("click", () => {
  $sidebar.classList.remove("is-opened");
  $main.classList.remove("shift-right");
});

$toggler.addEventListener("click", () => {
  $sidebar.classList.toggle("is-opened");
  $main.classList.toggle("shift-right");
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
          const users = data.users;
          const tableBody = document.querySelector('#userTable tbody');
          
          users.forEach(user => {
              const row = document.createElement('tr');
              
              const fullNameCell = document.createElement('td');
              fullNameCell.textContent = `${user.firstName} ${user.lastName}`;
              row.appendChild(fullNameCell);
              
              const usernameCell = document.createElement('td');
              usernameCell.textContent = user.username;
              row.appendChild(usernameCell);
              
              const emailCell = document.createElement('td');
              emailCell.textContent = user.email;
              row.appendChild(emailCell);
              
              const optionsCell = document.createElement('td');
              const button1 = document.createElement('button');
              button1.textContent = 'Edit';
              button1.className = 'edit-button';
              
              const button2 = document.createElement('button');
              button2.textContent = 'Delete';
              button2.className = 'delete-button'; 
              
              optionsCell.appendChild(button1);
              optionsCell.appendChild(button2);
              row.appendChild(optionsCell);
              
              tableBody.appendChild(row);
          });
      })
      .catch(error => console.error('Error fetching data:', error));
});


