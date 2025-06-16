const links = document.querySelectorAll('a');
links.forEach(link => {
    if (link.textContent.includes('http://') || link.textContent.includes('https://')) {
        link.style.textDecoration = "underline dashed";
    }
});

document.querySelectorAll('.toggle').forEach(el => {
    el.addEventListener('click', () => {
      const li = el.parentElement;
      li.classList.toggle('open');
    });
});

