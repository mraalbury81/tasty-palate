// Mailto-based “form submit”
// This works on a fully static site with zero backend.
// It opens the visitor's email client pre-filled with the details.

const form = document.getElementById("cateringForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fd = new FormData(form);

  const menus = fd.getAll("menu");
  const bodyLines = [
    `Name: ${fd.get("name")}`,
    `Organization: ${fd.get("org") || "-"}`,
    `Email: ${fd.get("email")}`,
    `Phone: ${fd.get("phone") || "-"}`,
    `Event Date: ${fd.get("date")}`,
    `Location: ${fd.get("location")}`,
    `Estimated Attendance: ${fd.get("attendance")}`,
    `Service Type: ${fd.get("serviceType")}`,
    `Menu Interests: ${menus.length ? menus.join(", ") : "-"}`,
    "",
    "Notes:",
    `${fd.get("notes") || "-"}`,
  ];

  const subject = encodeURIComponent("Tasty Palate Catering Request");
  const body = encodeURIComponent(bodyLines.join("\n"));

  window.location.href = `mailto:anthony@alburyholdings.com?subject=${subject}&body=${body}`;
});

/*
OPTION B (recommended): Real form submit (no email app) using Formspree
1) Create a free Formspree form and copy your endpoint URL.
2) Replace the form tag in index.html with:
   <form class="form" action="https://formspree.io/f/XXXXYYYY" method="POST">
3) Remove this entire script.js file (or comment out the listener).
*/
