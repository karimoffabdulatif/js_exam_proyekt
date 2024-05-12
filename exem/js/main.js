document.getElementById("exit_btn").addEventListener("click", function () {
  document.getElementById("regis").style.display = "block";
  document.getElementById("regis").style.display = "none";
  document.getElementById("data_pages").style.display = "block";
});

document.getElementById("buy_btn").addEventListener("click", function () {
  document.getElementById("regis").style.display = "none";
  document.getElementById("regis").style.display = "block";
});




const form = document.getElementById('regis');
const tableBody = document.getElementById('tableBody');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  

  const where = document.getElementById('where').value;
  const where_to = document.getElementById('where_to').value;
  const day = document.getElementById('d_m_y').value;
  const age = document.getElementById('age').value;
  const child = document.getElementById('childs').value;
  const paymond = document.getElementById('paymond').value;
  
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${where}</td>
    <td>${where_to}</td>
    <td>${day}</td>
    <td>${age}</td>
    <td>${child}</td>
    <td>${paymond}</td>
  `;
  console.log(newRow);
  tableBody.appendChild(newRow);

  alert("So'rovingiz qabul qilindi, Safaringiz behatar bo'lsin")
  
  form.reset();
});
