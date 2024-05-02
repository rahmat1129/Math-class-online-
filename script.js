<script src="https://unpkg.com/xlsx@0.16.9/dist/xlsx.full.min.js"></script>
<script>
  const form = document.getElementById("myForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = [
      ["Name", "Email"],
      [nameInput.value, emailInput.value],
    ];

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "formData.xlsx");
  });
</script>