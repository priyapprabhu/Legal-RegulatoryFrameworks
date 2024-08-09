function showFramework(id) {
    document.querySelectorAll('.framework').forEach(framework => {
        framework.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

function showDetails(id) {
    const details = document.querySelectorAll('.details');
    details.forEach(detail => {
        detail.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

function toggleRights(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}
