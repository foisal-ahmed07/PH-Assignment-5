document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// donation to noakhali
document.getElementById("donate-btn1").addEventListener("click", function () {
  const donationAmount = parseFloat(
    document.getElementById("input-donation1").value
  );
  document.getElementById("input-donation1").value = " ";
  const primaryAmount = parseFloat(
    document.getElementById("primary-amount").innerText
  );

  // input validation
  if (
    isNaN(donationAmount) ||
    donationAmount <= 0 ||
    donationAmount > primaryAmount
  ) {
    return alert("Please enter a valid donation amount.");
  }

  const balanceAmount = primaryAmount - donationAmount;
  document.getElementById("primary-amount").innerText = balanceAmount;

  const previousDonateAmount = parseFloat(
    document.getElementById("previous-donate-amount").innerText
  );
  const newDonateAmount = previousDonateAmount + donationAmount;
  document.getElementById("previous-donate-amount").innerText = newDonateAmount;

  const donationCard = document
    .getElementById("donation-card")
    .classList.remove("hidden");

  document.getElementById("donate-amount").innerText = donationAmount;

  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("donation-card").classList.add("hidden");
  });

  //   // history
  const historyContainer = document.getElementById("history-container");
  const historyItem = document.createElement("div");
  historyItem.className = "border-2 rounded-xl  p-4 space-y-3 mb-5 ";
  historyItem.innerHTML = `
  <p class= "text-2xl font-bold">${donationAmount} Donate for Flood at Noakhali, Bangladesh</p>
  <P>Date:${new Date()}</P>

  `;
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// donation to feni
document.getElementById("donate-btn2").addEventListener("click", function () {
  const donationAmount = parseFloat(
    document.getElementById("input-donation2").value
  );
  document.getElementById("input-donation2").value = " ";

  const primaryAmount = parseFloat(
    document.getElementById("primary-amount").innerText
  );

  // input validation
  if (
    isNaN(donationAmount) ||
    donationAmount <= 0 ||
    donationAmount > primaryAmount
  ) {
    return alert("Please enter a valid donation amount.");
  }

  const balanceAmount = primaryAmount - donationAmount;
  document.getElementById("primary-amount").innerText = balanceAmount;

  const previousDonateAmount = parseFloat(
    document.getElementById("previous-donate-amount-feni").innerText
  );
  const newDonateAmount = previousDonateAmount + donationAmount;
  document.getElementById("previous-donate-amount-feni").innerText =
    newDonateAmount;

  const donationCard = document
    .getElementById("donation-card")
    .classList.remove("hidden");
  document.getElementById("donate-amount").innerText = donationAmount;

  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("donation-card").classList.add("hidden");
  });

  //   // history
  const historyContainer = document.getElementById("history-container");
  const historyItem = document.createElement("div");
  historyItem.className = "border-2 rounded-xl  p-4 space-y-3 mb-5 ";
  historyItem.innerHTML = `
   <p class= "text-2xl font-bold">${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
   <P>Date:${new Date()}</P>
 
   `;
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// donation to Quota Movement
document.getElementById("donate-btn3").addEventListener("click", function () {
  const donationAmount = parseFloat(
    document.getElementById("input-donation3").value
  );
  document.getElementById("input-donation3").value = " ";

  const primaryAmount = parseFloat(
    document.getElementById("primary-amount").innerText
  );

  // input validation
  if (
    isNaN(donationAmount) ||
    donationAmount <= 0 ||
    donationAmount > primaryAmount
  ) {
    return alert("Please enter a valid donation amount.");
  }

  const balanceAmount = primaryAmount - donationAmount;
  document.getElementById("primary-amount").innerText = balanceAmount;

  const previousDonateAmount = parseFloat(
    document.getElementById("previous-donate-amount-quota").innerText
  );
  const newDonateAmount = previousDonateAmount + donationAmount;
  document.getElementById("previous-donate-amount-quota").innerText =
    newDonateAmount;

  const donationCard = document
    .getElementById("donation-card")
    .classList.remove("hidden");
  document.getElementById("donate-amount").innerText = donationAmount;

  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("donation-card").classList.add("hidden");
  });
  //   // history create
  const historyContainer = document.getElementById("history-container");
  const historyItem = document.createElement("div");
  historyItem.className = "border-2 rounded-xl  p-4 space-y-3 mb-5 ";
  historyItem.innerHTML = `
   <p class= "text-2xl font-bold">${donationAmount} Aid for Injured in the Quota Movement</p>
   <P>Date:${new Date()}</P>
 
   `;
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});


// history 

const historyTab = document.getElementById("history-tab");
const donation = document.getElementById("donation-tab");

// click history button
historyTab.addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.classList.remove("hidden");
  historyTab.classList.add("btn", "bg-[#B4F461]", "px-12", "font-bold");
  historyTab.classList.remove("bg-transparent");
  donation.classList.remove("bg-[#B4F461]", "font-bold");
  document.getElementById("section").classList.add("hidden");
});

// click donation button
donation.addEventListener("click", function () {
  document.getElementById("section").classList.remove("hidden");
  document.getElementById("history-container").classList.add("hidden");
  donation.classList.add("btn", "bg-[#B4F461]", "px-12", "font-bold");
  historyTab.classList.remove("bg-[#B4F461]", "font-bold");
});
