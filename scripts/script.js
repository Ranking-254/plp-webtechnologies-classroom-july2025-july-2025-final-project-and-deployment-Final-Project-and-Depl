function showSection(sectionId) {
    // hide all sections
    document.querySelectorAll('.page').forEach(sec => sec.style.display = 'none');
    // show clicked one
    document.getElementById(sectionId).style.display = 'block';
    console.log("Switched to section:", sectionId);
}

