document.addEventListener('DOMContentLoaded', function() {
    // 1. Toggle del menú lateral con animación
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (toggleSidebar && sidebar && mainContent) {
        toggleSidebar.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            
            // Animación suave
            if (sidebar.classList.contains('collapsed')) {
                sidebar.style.transform = 'translateX(0)';
                mainContent.style.marginLeft = '80px';
            } else {
                sidebar.style.transform = 'translateX(0)';
                mainContent.style.marginLeft = '280px';
            }
            
            // Cambiar ícono
            const icon = this.querySelector('i');
            if (sidebar.classList.contains('collapsed')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-chevron-right');
            } else {
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Función para manejar la navegación
    function navigateTo(url) {
        window.location.href = url;
    }

    // 3. Mapeo de rutas para el menú
    const menuRoutes = {
        'finanzas': '/Pro-Agro/Sitios/Finanzas.html',
        'nóminas': '/Pro-Agro/Sitios/Nominas.html', 
        'producción': '/Pro-Agro/Sitios/Produccion.html',
        'embarques': '/Pro-Agro/Sitios/Embarques.html',
        'paros de planta': '/Pro-Agro/Sitios/Paros.html',
        'mantenimiento mayor': '/Pro-Agro/Sitios/mantenimiento mayor.html',
        'cerrar sesión': '/Pro-Agro/Index.html'
    };

    // 4. Configuración de eventos del menú
    const menuItems = document.querySelectorAll('.sidebar-nav li a');
    
    menuItems.forEach(item => {
        const categoryName = item.querySelector('span').textContent.toLowerCase();
        
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Guardar la categoría seleccionada
            localStorage.setItem('selectedCategory', categoryName);
            
            // Remover clase active de todos los items
            menuItems.forEach(i => {
                i.parentElement.classList.remove('active');
            });
            
            // Agregar clase active al item seleccionado
            this.parentElement.classList.add('active');
            
            // Navegar si la ruta existe
            const routeKey = categoryName.toLowerCase();
            if (menuRoutes[routeKey]) {
                navigateTo(menuRoutes[routeKey]);
            } else {
                console.warn(`No hay ruta definida para: ${categoryName}`);
            }
        });
    });

    // 5. Aplicar la clase active al cargar la página
    const selectedCategory = localStorage.getItem('selectedCategory');
    if (selectedCategory) {
        menuItems.forEach(item => {
            const categoryName = item.querySelector('span').textContent.toLowerCase();
            if (categoryName === selectedCategory) {
                item.parentElement.classList.add('active');
            } else {
                item.parentElement.classList.remove('active');
            }
        });
    } else {
        // Si no hay selección previa, activar Finanzas por defecto
        menuItems.forEach(item => {
            const categoryName = item.querySelector('span').textContent.toLowerCase();
            if (categoryName === 'finanzas') {
                item.parentElement.classList.add('active');
            }
        });
    }

    // 6. Animación de entrada inicial
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.animation = 'fadeIn 0.5s ease-out forwards';
    }
});