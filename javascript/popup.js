document.addEventListener("DOMContentLoaded", function () {
    const popupTrigger = document.getElementById("popupTrigger");
    const popupContainer = document.getElementById("popupContainer");
    const popupImage = document.getElementById("popupImage");
    const popupTitle = document.getElementById("popupTitle");
    const popupButton = document.getElementById("popupButton");

    const popupContent = {
        image: "images/wwf panda.png",
        title: "HJÆLP DYRENE I DAG",
        link: "https://wwf.dk/kaemper-for/"
    };

    popupTrigger.addEventListener("click", function (event) {
        event.preventDefault(); // Forhindrer standard linkadfærd
        showPopup();
    });

    function showPopup() {
        popupImage.src = popupContent.image;
        popupTitle.textContent = popupContent.title;
        popupButton.href = popupContent.link;
        popupContainer.style.display = "block";
    }

    // Luk pop-up når der klikkes udenfor den
    document.addEventListener("click", function (event) {
        if (event.target === popupContainer) {
            hidePopup();
        }
    });

    function hidePopup() {
        popupContainer.style.display = "none";
    }
});