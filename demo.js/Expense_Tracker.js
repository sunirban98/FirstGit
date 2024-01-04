// Function to add an expense
function addExpense() {
    const expenseAmount = document.getElementById("expenseAmount").value;
    const expenseCategory = document.getElementById("expenseCategory").value;
    const expenseDescription = document.getElementById("expenseDescription").value;

    if (!expenseAmount || !expenseCategory || !expenseDescription) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new expense object
    const expense = {
      amount: expenseAmount,
      category: expenseCategory,
      description: expenseDescription,
    };

    // Get existing expenses from local storage or create an empty array
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Add the new expense to the array
    expenses.push(expense);

    // Save the updated expenses back to local storage
    localStorage.setItem("expenses", JSON.stringify(expenses));

    // Create a new list item to display the expense
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerHTML = Amount: RS-${expenseAmount}, Category: ${expenseCategory}, Description: ${expenseDescription} <button class="btn btn-primary btn-sm float-right edit">Edit</button><button class="btn btn-danger btn-sm float-right delete">Delete</button>;

    // Append the new item to the expenses list
    const expensesList = document.getElementById("expenses");
    expensesList.appendChild(listItem);

    // Clear input fields
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "";
    document.getElementById("expenseDescription").value = "";
  }

  // Function to remove an expense
  function removeExpense(itemIndex) {
    // Get existing expenses from local storage
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Remove the expense at the specified index
    expenses.splice(itemIndex, 1);

    // Save the updated expenses back to local storage
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  // Function to edit an expense
  function editExpense(itemIndex) {
    // Get existing expenses from local storage
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Prompt the user to edit the expense details
    const editedAmount = prompt("Edit Expense Amount:", expenses[itemIndex].amount);
    const editedCategory = prompt("Edit Expense Category:", expenses[itemIndex].category);
    const editedDescription = prompt("Edit Expense Description:", expenses[itemIndex].description);

    if (editedAmount !== null && editedCategory !== null && editedDescription !== null) {
      // Update the expense object
      expenses[itemIndex].amount = editedAmount;
      expenses[itemIndex].category = editedCategory;
      expenses[itemIndex].description = editedDescription;

      // Save the updated expenses back to local storage
      localStorage.setItem("expenses", JSON.stringify(expenses));

      // Reload the page to reflect the changes (you can also update the list item text instead of reloading)
      location.reload();
    }
  }

  // Event listener for the "Add" button
  const addButton = document.getElementById("addForm");
  addButton.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting
    addExpense(); // Call the function to add an expense
  });

  // Event listener for editing and deleting an expense
  const expensesList = document.getElementById("expenses");
  expensesList.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit")) {
      const listItem = e.target.parentElement;
      const itemIndex = Array.from(expensesList.children).indexOf(listItem);
      editExpense(itemIndex); // Call the function to edit the expense
    } else if (e.target.classList.contains("delete")) {
      const listItem = e.target.parentElement;
      const itemIndex = Array.from(expensesList.children).indexOf(listItem);
      listItem.remove();
      removeExpense(itemIndex); // Call the function to remove the expense from local storage
    }
  });

  // Function to load saved expenses from local storage and display them
  function loadExpenses() {
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const expensesList = document.getElementById("expenses");

    expensesList.innerHTML = ""; // Clear the list to avoid duplicates

    expenses.forEach((expense) => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.innerHTML = Amount: RS-${expense.amount}, Category: ${expense.category}, Description: ${expense.description} <button class="btn btn-primary btn-sm float-right edit">Edit</button><button class="btn btn-danger btn-sm float-right delete">Delete</button>;
      expensesList.appendChild(listItem);
    });
  }

  // Load saved expenses when the page loads
  loadExpenses();