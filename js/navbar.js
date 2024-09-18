function setNavBar(active_element)
{
    navbar = document.getElementById('navbar');

    innerHTML = '<nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">'    
    innerHTML +='    <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">'
    innerHTML +='        <img src="img/StylusLogo.jpg" style="height: 100%; width: 100%;">'
    innerHTML +='    </a>'
    innerHTML +='    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">'
    innerHTML +='        <span class="navbar-toggler-icon"></span>'
    innerHTML +='    </button>'
    innerHTML +='    <div class="collapse navbar-collapse" id="navbarCollapse">'
    innerHTML +='        <div class="navbar-nav ms-auto p-4 p-lg-0">'
    innerHTML +='            <a id="nav_home" href="index.html" class="nav-item nav-link">Home</a>'
    innerHTML +='            <a id="nav_about" href="about.html" class="nav-item nav-link">About</a>'
    innerHTML +='            <div class="nav-item dropdown">'
    innerHTML +='                <a id="nav_products" href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</a>'
    innerHTML +='                <div class="dropdown-menu fade-up m-0">'
    innerHTML +='                    <a id="nav_kitchen" href="kitchen.html" class="dropdown-item">Kitchen Hardware</a>'
    innerHTML +='                    <a id="nav_glass" href="glass.html" class="dropdown-item">Glass Hardware</a>'
    innerHTML +='                    <a id="nav_furniture" href="furniture.html" class="dropdown-item">Furniture Hardware</a>'
    innerHTML +='                    <a id="nav_aluminum" href="AluminumProfiles.html" class="dropdown-item">Aluminum Profiles</a>'
    innerHTML +='                </div>'
    innerHTML +='            </div>'
    innerHTML +='            <a href="contact.html" class="nav-item nav-link">Contact</a>'
    innerHTML +='        </div>'
    innerHTML +='    </div>'
    innerHTML +='</nav>'
    
    navbar.innerHTML = innerHTML
    active_menu_item = document.getElementById(active_element)
    active_menu_item.className = active_menu_item.className + ' active'
}





