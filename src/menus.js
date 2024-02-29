
function toggleMenuContent(contentID) {
    let dropdownContent = document.querySelector(`#${contentID}`);
    dropdownContent.classList.toggle("hidden");
}



export { toggleMenuContent };
