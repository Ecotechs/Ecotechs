document.addEventListener('DOMContentLoaded', function() {
    // Menu button functionality
    const menuButton = document.querySelector('.menu-button');
    const menuContent = document.querySelector('.menu-content');

    menuButton.addEventListener('click', function() {
        menuContent.style.left = '0px';
        menuButton.style.display = 'none';
    });

    // Close button functionality
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        menuContent.style.left = '-300px';
        setTimeout(() => {
            menuButton.style.display = 'flex';
        }, 300);
    });

    // Navigation buttons
    const homeButton = document.querySelector('.home-button');
    const loginButton = document.querySelector('.login-button');

    homeButton.addEventListener('click', function() {
        window.location.href = 'Página inicial.html';
    });

    loginButton.addEventListener('click', function() {
        window.location.href = 'Untitled-3.html';
    });

    // Menu items hover effects
    const menuItems = document.querySelectorAll('.menu-content li');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#008000';
        });

        item.addEventListener('mouseleave', function() {
            this.style.color = '#90EE90';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'white';
            this.style.color = '#006400';
        });

        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.color = 'white';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuContent.contains(event.target) && 
            !menuButton.contains(event.target) && 
            menuContent.style.left === '0px') {
            menuContent.style.left = '-300px';
            setTimeout(() => {
                menuButton.style.display = 'flex';
            }, 300);
        }
    });
});



