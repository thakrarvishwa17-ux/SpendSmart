let expenseIndex = 1;
let totalAmount= 0;

function addExpense() {

  const amount = document.getElementById("amount").value;
  const reasonInput = document.getElementById("reason").value;
  const list = document.getElementById("list");

  if (amount === "" || reasonInput.trim() === "") {
    alert("Please enter amount and reason");
    return;
  }
  totalAmount += Number(amount);
document.getElementById("total").innerText =
"Total Spent: ₹" + totalAmount;

  const reason = reasonInput.toUpperCase();

  const now = new Date();

  const date = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  const li = document.createElement("li");

  li.innerHTML = `
    <div class="expense-card">
      <div class="expense-main">
        <span class="index">${expenseIndex}.</span>
        <span class="amount">₹${amount}</span>
        <span class="reason">${reason}</span>
        <button class="delete-btn" onclick="deleteExpense(this, ${amount})">❌</button>
      </div>

      <div class="expense-time">
        📅 ${date} • ⏰ ${time}
      </div>
    </div>
  `;

  list.appendChild(li);

  expenseIndex++;

  document.getElementById("amount").value = "";
  document.getElementById("reason").value = "";
}
function deleteExpense(button, amount){

const li = button.closest("li");

li.remove();

totalAmount -= Number(amount);

document.getElementById("total").innerText =
"Total Spent: ₹" + totalAmount;

}
function clearExpenses(){
    document.getElementById("list").innerHTML ="";
    totalamount=0;
    document.getElementById("total").innerText =
    "Total spent: ₹0";
    expenseIndex=1;

}