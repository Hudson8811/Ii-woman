const switch_content = document.querySelector('.switch-content-header');
document.querySelector('.switcher-content-header').addEventListener('input', (e) => {
	switch_content.style.setProperty('--position', `${e.target.value}%`);
})