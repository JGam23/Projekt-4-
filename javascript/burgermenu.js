
        document.addEventListener("DOMContentLoaded", function () {
            // Array med menuvalg
            const menuItems = ['Log ud'];
    
            const burgerMenu = document.querySelector('.burger-menu');
            const menu = document.querySelector('.menu');
    
            // Loop gennem menuItems array og opret menuvalg
            menuItems.forEach(function(item) {
                const menuItem = document.createElement('div');
                menuItem.textContent = item;
                menu.appendChild(menuItem);
            });
    
            burgerMenu.addEventListener('click', function () {
                menu.classList.toggle('active');
            });
    
            // Luk menuen når man klikker udenfor menuen
            document.addEventListener('click', function (event) {
                if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
                    menu.classList.remove('active');
                }
            });
        });
    