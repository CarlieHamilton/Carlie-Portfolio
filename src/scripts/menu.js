  const toggleInput = document.getElementById('toggle');

  document.querySelector('.menu').addEventListener('click', () => {
    if (toggleInput.checked) {
      toggleInput.checked = false;
    }
  })