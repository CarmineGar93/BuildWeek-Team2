function hidden(e, i) {
    const element = document.getElementById(e);
    const icon = document.getElementById(i);

    if (element.style.display === 'block') {
        element.style.display = 'none';
        icon.style.transform = '';
    } else {
        element.style.display = 'block';
        icon.style.transform = 'rotate(90deg)';
    }
}
