// document.addEventListener('DOMContentLoaded', () => {

//     console.log("TileCraft Script Loaded");

//     // --- Product Data (Simulated Database) ---
//     // FINAL, COMPLETE, AND MANUALLY VERIFIED LIST OF 51 PRODUCTS
// const products = {
//     1: { id: 1, name: 'Alchimia Pearl', description: 'A luminous pearl-effect tile that adds a touch of elegance to any wall.', price: 8.90, image: 'images/alchimiaPearl.jpg', category: 'Wall Tiles', dimensions: '12x36 inches' },
//     2: { id: 2, name: 'Antique Black Marble', description: 'A luxurious black marble tile with subtle white veining for high-end interiors.', price: 5.10, image: 'images/antiqueBlack.jpg', category: 'Floor Tiles', dimensions: '12x24 inches' },
//     3: { id: 3, name: 'Black Beach Pebble', description: 'Smooth, black pebbles arranged on a mesh for easy installation.', price: 10.50, image: 'images/blackBeach.jpg', category: 'Mosaics', dimensions: '12x12 inches sheet' },
//     4: { id: 4, name: 'Blue Mosaic', description: 'A vibrant blue glass mosaic tile for stunning accent walls and backsplashes.', price: 5.60, image: 'images/blueMosaic.jpg', category: 'Mosaics', dimensions: '12x12 inches sheet' },
//     5: { id: 5, name: 'Botto Almond', description: 'A soft almond-colored porcelain tile, versatile for both floors and walls.', price: 4.80, image: 'images/bottoAlmond.jpg', category: 'Floor Tiles', dimensions: '24x24 inches' },
//     6: { id: 6, name: 'Breccia Capraia', description: 'A light tile with a swirling pattern of beige, grey, and brown tones.', price: 6.33, image: 'images\BrecciaCapraia.jpeg', category: 'Floor Tiles', dimensions: '24x24 inches' },
//     7: { id: 7, name: 'Brick Red', description: 'A rustic red brick-look tile, perfect for an industrial or traditional feature wall.', price: 5.15, image: 'images/brickRed.jpg', category: 'Wall Tiles', dimensions: '3x8 inches' },
//     8: { id: 8, name: 'Calcutta Prism', description: 'A geometric marble-look tile with a unique, eye-catching prism pattern.', price: 6.80, image: 'images/calcuttaPrism.webp', category: 'Floor Tiles', dimensions: '16x16 inches' },
//     9: { id: 9, name: 'Trasore Camel', description: 'A warm camel-colored tile with a subtle texture, ideal for cozy living spaces.', price: 6.55, image: 'images/camelTexture.webp', category: 'Floor Tiles', dimensions: '12x24 inches' },
//     10: { id: 10, name: 'Cardo Thunder', description: 'A dark, dramatic floor tile with a subtle metallic sheen for a bold statement.', price: 6.99, image: 'images/cardoThunder.webp', category: 'Floor Tiles', dimensions: '12x24 inches' },
//     11: { id: 11, name: 'Cementi Beige', description: 'A warm beige concrete-look tile with a durable matte finish.', price: 5.60, image: 'images/cementiBeige.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
//     12: { id: 12, name: 'Charcoal Outdoor', description: 'Dark, durable slate perfect for contemporary outdoor patios and walkways.', price: 6.95, image: 'images/charcoalOutdoor.jpg', category: 'Outdoor Tiles', dimensions: '12x24 inches' },
//     13: { id: 13, name: 'Cobblestone', description: 'Gives a rustic, old-world charm to driveways and garden paths.', price: 4.50, image: 'images/cobbleStone.jpg', category: 'Outdoor Tiles', dimensions: '6x6 inches' },
//     14: { id: 14, name: 'Crysta Pearl', description: 'A high-gloss wall tile with an iridescent, pearly finish.', price: 6.20, image: 'images/crystaPearl.jpg', category: 'Wall Tiles', dimensions: '12x24 inches' },
//     15: { id: 15, name: 'Dacite Ash', description: 'A neutral grey stone-look tile suitable for floors and walls.', price: 5.44, image: 'images/daciteAsh.webp', category: 'Floor Tiles', dimensions: '18x36 inches' },
//     16: { id: 16, name: 'Desert Beige', description: 'A subtle and warm beige tile with a non-reflective matte surface.', price: 4.10, image: 'images/desertBeige.jpg', category: 'Floor Tiles', dimensions: '18x18 inches' },
//     17: { id: 17, name: 'Doveltalia', description: 'A contemporary grey stone effect tile, perfect for minimalist designs.', price: 5.95, image: 'images/doveltalia.jpg', category: 'Floor Tiles', dimensions: '24x24 inches' },
//     18: { id: 18, name: 'Glossy White', description: 'A timeless classic subway tile, a versatile choice for kitchens and baths.', price: 2.80, image: 'images/glossyWhite.jpg', category: 'Wall Tiles', dimensions: '3x6 inches' },
//     19: { id: 19, name: 'Green Marble', description: 'Subtle green marble look with delicate patterns. Ideal for serene bathroom designs.', price: 2.80, image: 'images/greenMarble.jpg', category: 'Wall Tiles', dimensions: '12x24 inches' },
//     20: { id: 20, name: 'Iron Coffee', description: 'Deep iron and coffee tones give this tile a rustic, earthy texture.', price: 8.21, image: 'images/ironCoffee.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
//     21: { id: 21, name: 'Laurent Slate', description: 'Elegant black slate with fine white veining for a sophisticated look.', price: 7.80, image: 'images/laurentSlate.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
//     22: { id: 22, name: 'Marfig Bianco', description: 'Classic Italian Carrara marble look with soft grey veining.', price: 7.10, image: 'images/marfigBianco.jpg', category: 'Floor Tiles', dimensions: '24x24 inches' },
//     23: { id: 23, name: 'Markstone Sand', description: 'A multi-toned stone tile with a natural, inviting feel.', price: 7.33, image: 'images/markstoneSand.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
//     24: { id: 24, name: 'Marquina Natural', description: 'A rich, dark tile with delicate white veins, creating a dramatic, elegant look.', price: 4.77, image: 'images/MarquinaNatural.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
//     25: { id: 25, name: 'Matte Finish Grey', description: 'A versatile matte grey porcelain tile, perfect for modern floors and walls.', price: 4.35, image: 'images/mattefinishGrey.jpg', category: 'Floor Tiles', dimensions: '12x24 inches' },
//     26: { id: 26, name: 'Onega Silver', description: 'A striking tile with linear silver veins on a white background.', price: 6.60, image: 'images/onegaSilver.jpg', category: 'Wall Tiles', dimensions: '12x24 inches' },
//     27: { id: 27, name: 'Onyx Sky', description: 'A beautiful polished tile that mimics the soft blue and white clouds of the sky.', price: 9.15, image: 'images/onyxSky.jpg', category: 'Wall Tiles', dimensions: '24x24 inches' },
//     28: { id: 28, name: 'Onyx Viola', description: 'Dramatic purple and gold veining make this a stunning statement piece.', price: 9.50, image: 'images/onyxViola.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
//     29: { id: 29, name: 'Outdoor Textured', description: 'Extremely durable textured stone-look tile, perfect for patios and walkways.', price: 4.25, image: 'images/outdoorTextured.jpg', category: 'Outdoor Tiles', dimensions: '16x16 inches' },
//     30: { id: 30, name: 'Pulpis Graphite', description: 'A polished, dark grey tile for a sleek and modern interior.', price: 6.85, image: 'images/pulpisGraphite.jpg', category: 'Floor Tiles', dimensions: '24x48 inches' },
//     31: { id: 31, name: 'Quartzite Sand', description: 'A beautiful sandstone-look tile with subtle texture and color variation.', price: 6.80, image: 'images/quartZite.webp', category: 'Floor Tiles', dimensions: '18x36 inches' },
//     32: { id: 32, name: 'Red Marble', description: 'Rich red marble effect tile with striking white veins. Adds a touch of vintage luxury.', price: 4.66, image: 'images/redMarble.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
//     33: { id: 33, name: 'Roma Empire', description: 'A classic travertine look with rich, warm tones inspired by ancient Rome.', price: 7.40, image: 'images/romaEmpire.jpg', category: 'Floor Tiles', dimensions: '18x36 inches' },
//     34: { id: 34, name: 'Rustic Stone', description: 'A mosaic sheet featuring rugged, multi-colored stone pieces.', price: 9.80, image: 'images/rusticStone.jpg', category: 'Mosaics', dimensions: '12x12 inches sheet' },
//     35: { id: 35, name: 'Statuario Natural', description: 'A classic white marble tile with beautiful gray veining, inspired by Italian marble.', price: 5.20, image: 'images/StatuarioNatural.jpeg', category: 'Wall Tiles', dimensions: '24x48 inches' },
//     36: { id: 36, name: 'Stone Outdoor', description: 'A versatile and hard-wearing natural stone tile for any outdoor application.', price: 5.75, image: 'images/stoneOutdoor.jpg', category: 'Outdoor Tiles', dimensions: '16x16 inches' },
//     37: { id: 37, name: 'Terracotta Outdoor', description: 'Classic terracotta tile that brings warmth to patios and sunrooms.', price: 3.99, image: 'images/terracottaOutdoor.jpg', category: 'Outdoor Tiles', dimensions: '12x12 inches' },
//     38: { id: 38, name: 'Terraelino Menta', description: 'A modern concrete-look tile with a soft, matte finish for an industrial aesthetic.', price: 3.50, image: 'images/terraelinoMenta.jpg', category: 'Floor Tiles', dimensions: '24x24 inches' },
//     39: { id: 39, name: 'Terra Outdoor', description: 'Heavy-duty paver with a textured finish for excellent slip resistance.', price: 4.90, image: 'images/terraOutdoor.jpg', category: 'Outdoor Tiles', dimensions: '16x16 inches' },
//     40: { id: 40, name: 'Tiaki Green', description: 'A deep green marble with intricate white and gold veining for a luxury feel.', price: 8.75, image: 'images/tiakiGreen.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
//     41: { id: 41, name: 'Trasore Beige', description: 'A light beige tile with a soft texture, perfect for modern spaces.', price: 6.50, image: 'images/trasoreBeige.jpg', category: 'Floor Tiles', dimensions: '12x24 inches' },
//     42: { id: 42, name: 'Travertino Natural', description: 'A natural-look tile inspired by classic travertine stone, with warm, earthy tones.', price: 2.25, image: 'images/travertinoNatural.jpg', category: 'Outdoor Tiles', dimensions: '12x24 inches' },
//     43: { id: 43, name: 'Venus Beach', description: 'A light, sandy-colored tile that evokes a calm, coastal feeling.', price: 5.30, image: 'images/venusBeach.jpg', category: 'Floor Tiles', dimensions: '16x16 inches' },
//     44: { id: 44, name: 'Marquinalet', description: 'A fine porcelain tile with a deep black base and sharp white veining.', price: 5.85, image: 'images/marquinalet.jpg', category: 'Wall Tiles', dimensions: '24x48 inches'},
//     45: { id: 45, name: 'Outdoor Pulpis', description: 'A durable outdoor tile with the sophisticated look of Pulpis marble.', price: 7.20, image: 'images/outdoorPulpis.jpg', category: 'Outdoor Tiles', dimensions: '24x24 inches'},
//     46: { id: 46, name: 'Stone Terra', description: 'A rich, earthy tile combining the durability of stone with a terracotta finish.', price: 5.55, image: 'images/stoneTerra.jpg', category: 'Outdoor Tiles', dimensions: '18x18 inches'},
//     47: { id: 47, name: 'Red Brick', description: 'Classic red brick porcelain tile for interior and exterior walls.', price: 6.10, image: 'images/redBrick.jpg', category: 'Wall Tiles', dimensions: '4x8 inches'},
//     48: { id: 48, name: 'Trasore Light', description: 'A lighter variant of the Trasore series, offering a bright and airy feel.', price: 6.40, image: 'images/trasoreLight.jpg', category: 'Floor Tiles', dimensions: '12x24 inches'},
//     49: { id: 49, name: 'Almond Beige', description: 'A soft, inviting beige tile perfect for creating a warm atmosphere.', price: 4.95, image: 'images/almondBeige.jpg', category: 'Floor Tiles', dimensions: '24x24 inches'},
//     50: { id: 50, name: 'Empire Stone', description: 'A grand, large-format tile that mimics the look of ancient imperial stone.', price: 8.30, image: 'images/empireStone.jpg', category: 'Floor Tiles', dimensions: '30x30 inches'},
//     51: { id: 51, name: 'Beach Sand', description: 'A fine-grained porcelain tile with the look and feel of smooth beach sand.', price: 5.40, image: 'images/beachSand.jpg', category: 'Floor Tiles', dimensions: '18x18 inches'}
// };

//     // --- Dynamic Product Page Logic ---
//     function getProductIdFromUrl() {
//         const urlParams = new URLSearchParams(window.location.search);
//         return parseInt(urlParams.get('id'));
//     }

//     function renderProductPage() {
//         const productId = getProductIdFromUrl();
//         const product = products[productId];

//         if (product) {
//             // FIX: Added backticks (`) for template literals
//             document.title = `${product.name} - TileCraft`;
//             document.getElementById('product-page-title').textContent = product.name;
//             document.getElementById('breadcrumb-product-name').textContent = product.name;
//             document.getElementById('product-name').textContent = product.name;
//             document.getElementById('product-image').src = product.image;
//             document.getElementById('product-image').alt = product.name;
//             document.getElementById('product-title').textContent = product.name;
//             // FIX: Added backticks (`) for template literals
//             document.getElementById('product-price').textContent = `$${product.price.toFixed(2)} / sq. ft`;
//             document.getElementById('product-description').textContent = product.description;
//             document.getElementById('product-category').textContent = product.category;
//             document.getElementById('product-dimensions').textContent = product.dimensions;
//             document.getElementById('add-to-cart-button').dataset.productId = product.id;
//         } else {
//             document.getElementById('product-page-title').textContent = 'Product Not Found';
//             document.getElementById('product-name').textContent = 'Product Not Found';
//             document.getElementById('breadcrumb-product-name').textContent = 'Error';
//             const productDetailContainer = document.querySelector('.product-detail-container');
//             if (productDetailContainer) {
//                 productDetailContainer.innerHTML = '<p class="text-center" style="font-size: 1.25rem;">Sorry, the tile you were looking for could not be found.</p>';
//             }
//         }
//     }

//     if (window.location.pathname.includes('productDetails.html')) { // Adjusted to match your actual file name
//         renderProductPage();
//     }


//     // --- 1. Mobile Navigation Toggle ---
//     const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
//     const primaryNavigation = document.getElementById('primary-navigation');
//     const hamburgerIcon = document.querySelector('.hamburger-icon');

//     if (mobileNavToggle && primaryNavigation && hamburgerIcon) {
//         mobileNavToggle.addEventListener('click', () => {
//             const isExpanded = primaryNavigation.classList.toggle('active');
//             mobileNavToggle.setAttribute('aria-expanded', isExpanded);

//             if (isExpanded) {
//                 hamburgerIcon.classList.remove('fa-bars');
//                 hamburgerIcon.classList.add('fa-times');
//             } else {
//                 hamburgerIcon.classList.remove('fa-times');
//                 hamburgerIcon.classList.add('fa-bars');
//                 closeAllMobileSubmenus();
//             }
//         });
//     }

//     // --- 2. Mobile Submenu Toggle ---
//     const mobileDropdownToggles = document.querySelectorAll('#primary-navigation .nav-item.dropdown > .nav-link');

//     mobileDropdownToggles.forEach(toggle => {
//         toggle.addEventListener('click', (e) => {
//             if (window.innerWidth <= 992 && primaryNavigation.classList.contains('active')) {
//                 e.preventDefault();
//                 const parentDropdown = toggle.closest('.nav-item.dropdown');
//                 if (parentDropdown) {
//                     if (!parentDropdown.classList.contains('open')) {
//                         closeAllMobileSubmenus();
//                     }
//                     parentDropdown.classList.toggle('open');
//                 }
//             }
//         });
//     });

//     function closeAllMobileSubmenus() {
//         document.querySelectorAll('#primary-navigation .nav-item.dropdown.open').forEach(openDropdown => {
//             openDropdown.classList.remove('open');
//         });
//     }

//     document.addEventListener('click', (event) => {
//         if (primaryNavigation && primaryNavigation.classList.contains('active')) {
//             const isClickInsideNav = primaryNavigation.contains(event.target);
//             const isClickOnToggle = mobileNavToggle.contains(event.target);

//             if (!isClickInsideNav && !isClickOnToggle) {
//                 primaryNavigation.classList.remove('active');
//                 mobileNavToggle.setAttribute('aria-expanded', 'false');
//                 hamburgerIcon.classList.remove('fa-times');
//                 hamburgerIcon.classList.add('fa-bars');
//                 closeAllMobileSubmenus();
//             }
//         }
//     });


//     // --- 3. Search Bar Toggle ---
//     const searchToggle = document.querySelector('.search-toggle');
//     const searchBar = document.querySelector('.search-bar');
//     const searchInput = searchBar ? searchBar.querySelector('input[type="search"]') : null;

//     if (searchToggle && searchBar) {
//         searchToggle.addEventListener('click', (e) => {
//             e.stopPropagation();
//             searchBar.classList.toggle('active');
//             if (searchBar.classList.contains('active') && searchInput) {
//                 searchInput.focus();
//             }
//         });

//         document.addEventListener('click', (event) => {
//             if (searchBar.classList.contains('active')) {
//                 const isClickInsideSearch = searchBar.contains(event.target);
//                 const isClickOnToggle = searchToggle.contains(event.target);

//                 if (!isClickInsideSearch && !isClickOnToggle) {
//                     searchBar.classList.remove('active');
//                 }
//             }
//         });
//         searchBar.addEventListener('click', (e) => {
//             e.stopPropagation();
//         });
//     }

//     // --- 4. Sticky Header Class ---
//     const siteHeader = document.querySelector('.site-header');
//     if (siteHeader) {
//         window.addEventListener('scroll', () => {
//             if (window.scrollY > 50) {
//                 siteHeader.classList.add('scrolled');
//             } else {
//                 siteHeader.classList.remove('scrolled');
//             }
//         });
//     }

//     // --- 5. "Add to Cart" Functionality ---
//     function getCartFromLocalStorage() {
//         const cart = localStorage.getItem('tilecraft-cart');
//         return cart ? JSON.parse(cart) : {};
//     }

//     function saveCartToLocalStorage(cart) {
//         localStorage.setItem('tilecraft-cart', JSON.stringify(cart));
//     }
    
//     function updateCartCount() {
//         const cart = getCartFromLocalStorage();
//         const cartItemCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
//         const cartCountElement = document.querySelector('.cart-count');
//         if (cartCountElement) {
//             cartCountElement.textContent = cartItemCount;
//             cartCountElement.style.display = cartItemCount > 0 ? 'flex' : 'none';
//         }
//     }

//     const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const productId = button.dataset.productId;
//             // On grid pages, quantity is always 1. On product detail page, it would read an input.
//             const quantityInput = document.getElementById('product-quantity');
//             const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
            
//             const cart = getCartFromLocalStorage();
//             if (cart[productId]) {
//                 cart[productId].quantity += quantity;
//             } else {
//                 cart[productId] = {
//                     id: productId,
//                     quantity: quantity
//                 };
//             }
//             saveCartToLocalStorage(cart);
//             updateCartCount();

//             const originalText = button.textContent;
//             button.textContent = 'Added!';
//             button.disabled = true;
//             setTimeout(() => {
//                 button.textContent = originalText;
//                 button.disabled = false;
//             }, 1500);
//         });
//     });

//     // --- Cart Page Rendering & Logic ---
//     function renderCartPage() {
//         const cart = getCartFromLocalStorage();
//         const cartTableBody = document.getElementById('cart-table-body');
//         const cartContainer = document.querySelector('.cart-container');
//         const cartEmptyMessage = document.querySelector('.cart-empty');
//         let subtotal = 0;

//         if (!cartTableBody) return;

//         cartTableBody.innerHTML = ''; 

//         const productIds = Object.keys(cart);
//         if (productIds.length === 0) {
//             if(cartContainer) cartContainer.style.display = 'none';
//             if(cartEmptyMessage) cartEmptyMessage.style.display = 'block';
//         } else {
//             if(cartContainer) cartContainer.style.display = 'flex';
//             if(cartEmptyMessage) cartEmptyMessage.style.display = 'none';

//             productIds.forEach(productId => {
//                 const item = cart[productId];
//                 const product = products[productId];
//                 if (product) {
//                     const itemSubtotal = product.price * item.quantity;
//                     subtotal += itemSubtotal;

//                     const row = document.createElement('tr');
//                     row.classList.add('cart-item');
//                     row.dataset.productId = productId;
//                     row.innerHTML = `
//                         <td class="cart-item-image">
//                             <a href="productDetails.html?id=${product.id}">
//                                 <img src="${product.image}" alt="${product.name}">
//                             </a>
//                         </td>
//                         <td class="cart-item-details">
//                             <a href="productDetails.html?id=${product.id}" class="cart-item-title">${product.name}</a>
//                         </td>
//                         <td class="cart-item-price">$${product.price.toFixed(2)}</td>
//                         <td class="cart-item-quantity">
//                             <div class="quantity-input">
//                                 <button class="qty-btn minus" aria-label="Decrease quantity">-</button>
//                                 <input type="number" value="${item.quantity}" min="1" step="1" aria-label="Quantity in square feet or units">
//                                 <button class="qty-btn plus" aria-label="Increase quantity">+</button>
//                             </div>
//                         </td>
//                         <td class="cart-item-subtotal">$${itemSubtotal.toFixed(2)}</td>
//                         <td class="cart-item-remove">
//                             <button class="remove-item-btn" aria-label="Remove item">×</button>
//                         </td>
//                     `;
//                     cartTableBody.appendChild(row);
//                 }
//             });
            
//             const summarySubtotalElement = document.querySelector('.summary-subtotal');
//             const summaryTotalElement = document.querySelector('.total-value');
//             if (summarySubtotalElement) {
//                 summarySubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
//             }
//             if (summaryTotalElement) {
//                 summaryTotalElement.textContent = `$${subtotal.toFixed(2)}`;
//             }
//         }
//     }

//     const cartTable = document.querySelector('.cart-table');
//     if (cartTable) {
//         cartTable.addEventListener('click', (event) => {
//             const target = event.target;
//             const row = target.closest('.cart-item');
//             if (!row) return;
//             const productId = row.dataset.productId;
//             let cart = getCartFromLocalStorage();

//             if (target.classList.contains('qty-btn')) {
//                 const input = row.querySelector('input[type="number"]');
//                 let newQuantity = parseInt(input.value);

//                 if (target.classList.contains('plus')) {
//                     newQuantity++;
//                 } else if (target.classList.contains('minus')) {
//                     newQuantity--;
//                 }

//                 if (newQuantity > 0) {
//                     input.value = newQuantity;
//                     cart[productId].quantity = newQuantity;
//                 } else {
//                     delete cart[productId];
//                 }
//                 saveCartToLocalStorage(cart);
//                 renderCartPage();
//                 updateCartCount();

//             } else if (target.classList.contains('remove-item-btn')) {
//                 delete cart[productId];
//                 saveCartToLocalStorage(cart);
//                 renderCartPage();
//                 updateCartCount();
//             }
//         });
//     }
    
//     if (window.location.pathname.includes('cart.html')) {
//         renderCartPage();
//     }
    
//     updateCartCount();
    
//     // --- 6. Footer Year Update ---
//     const currentYearElement = document.getElementById('current-year');
//     if (currentYearElement) {
//         currentYearElement.textContent = new Date().getFullYear();
//     }

//     // --- 7. Account Page Navigation Logic ---
//     const accountNav = document.querySelector('.account-navigation');
//     const accountPanels = document.querySelectorAll('.account-panel');

//     if (accountNav && accountPanels.length > 0) {
//         accountNav.addEventListener('click', (event) => {
//             const targetLink = event.target.closest('.account-nav-link');
//             if (targetLink && targetLink.getAttribute('href').startsWith('#')) {
//                 event.preventDefault();

//                 document.querySelectorAll('.account-nav-link').forEach(link => {
//                     link.classList.remove('active');
//                 });
//                 accountPanels.forEach(panel => {
//                     panel.classList.remove('active');
//                 });

//                 targetLink.classList.add('active');
//                 const panelId = targetLink.dataset.panelId;
//                 const targetPanel = document.getElementById(panelId);
//                 if (targetPanel) {
//                     targetPanel.classList.add('active');
//                 }
//             }
//         });
        
//         // Load correct panel on page load (from URL hash)
//         const initialPanelId = window.location.hash.substring(1) || 'dashboard';
//         // FIX: Added quotes to the query selector string
//         const initialLink = document.querySelector(`.account-nav-link[data-panel-id="${initialPanelId}"]`);
//         const initialPanel = document.getElementById(initialPanelId);

//         if (initialLink && initialPanel) {
//             document.querySelectorAll('.account-nav-link').forEach(link => link.classList.remove('active'));
//             document.querySelectorAll('.account-panel').forEach(panel => panel.classList.remove('active'));
//             initialLink.classList.add('active');
//             initialPanel.classList.add('active');
//         }
//     }

// });


// pp33.js (optimized for reliability & correct cart images)
// Replace your existing pp33.js with this file.
// Key improvements:
// - Ensures product ID types are normalized (Number).
// - Fixes image path typos (backslashes -> forward slashes).
// - Defensive behavior when a product id isn't found.
// - Robust cart rendering and event delegation for quantity/ removal.
// - Updates header cart count everywhere.

(function () {
  'use strict';

  console.log('TileCraft optimized script loaded');

  // ---------------------------
  // Product data (51 products)
  // NOTE: I fixed obvious path typos (use forward slashes). If any image
  // filename differs from your folder, update the image filenames to match.
  // ---------------------------
  const products = {
    1: { id: 1, name: 'Alchimia Pearl', description: 'A luminous pearl-effect tile that adds a touch of elegance to any wall.', price: 8.90, image: 'images/alchimiaPearl.webp', category: 'Wall Tiles', dimensions: '12x36 inches' },
    2: { id: 2, name: 'Antique Black Marble', description: 'A luxurious black marble tile with subtle white veining for high-end interiors.', price: 5.10, image: 'images/antiqueBlack.jpg', category: 'Floor Tiles', dimensions: '12x24 inches' },
    3: { id: 3, name: 'Black Beach Pebble', description: 'Smooth, black pebbles arranged on a mesh for easy installation.', price: 10.50, image: 'images/blackBeach.webp', category: 'Mosaics', dimensions: '12x12 inches sheet' },
    4: { id: 4, name: 'Blue Mosaic', description: 'A vibrant blue glass mosaic tile for stunning accent walls and backsplashes.', price: 5.60, image: 'images/blueMosaic.jpg', category: 'Mosaics', dimensions: '12x12 inches sheet' },
    5: { id: 5, name: 'Botto Almond', description: 'A soft almond-colored porcelain tile, versatile for both floors and walls.', price: 4.80, image: 'images/bottoAlmond.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    6: { id: 6, name: 'Breccia Capraia', description: 'A light tile with a swirling pattern of beige, grey, and brown tones.', price: 6.33, image: 'images/BrecciaCapraia.jpeg', category: 'Floor Tiles', dimensions: '24x24 inches' },
    7: { id: 7, name: 'Brick Red', description: 'A rustic red brick-look tile, perfect for an industrial or traditional feature wall.', price: 5.15, image: 'images/brickRed.jpg', category: 'Wall Tiles', dimensions: '3x8 inches' },
    8: { id: 8, name: 'Calcutta Prism', description: 'A geometric marble-look tile with a unique, eye-catching prism pattern.', price: 6.80, image: 'images/calcuttaPrism.webp', category: 'Floor Tiles', dimensions: '16x16 inches' },
    9: { id: 9, name: 'Trasore Camel', description: 'A warm camel-colored tile with a subtle texture, ideal for cozy living spaces.', price: 6.55, image: 'images/camelTexture.webp', category: 'Floor Tiles', dimensions: '12x24 inches' },
    10: { id: 10, name: 'Cardo Thunder', description: 'A dark, dramatic floor tile with a subtle metallic sheen for a bold statement.', price: 6.99, image: 'images/cardoThunder.webp', category: 'Floor Tiles', dimensions: '12x24 inches' },
    11: { id: 11, name: 'Cementi Beige', description: 'A warm beige concrete-look tile with a durable matte finish.', price: 5.60, image: 'images/cementiBeige.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    12: { id: 12, name: 'Charcoal Outdoor', description: 'Dark, durable slate perfect for contemporary outdoor patios and walkways.', price: 6.95, image: 'images/charcoalOutdoor.webp', category: 'Outdoor Tiles', dimensions: '12x24 inches' },
    13: { id: 13, name: 'Cobblestone', description: 'Gives a rustic, old-world charm to driveways and garden paths.', price: 4.50, image: 'images/cobbleStone.webp', category: 'Outdoor Tiles', dimensions: '6x6 inches' },
    14: { id: 14, name: 'Crysta Pearl', description: 'A high-gloss wall tile with an iridescent, pearly finish.', price: 6.20, image: 'images/crystaPearl.webp', category: 'Wall Tiles', dimensions: '12x24 inches' },
    15: { id: 15, name: 'Dacite Ash', description: 'A neutral grey stone-look tile suitable for floors and walls.', price: 5.44, image: 'images/daciteAsh.webp', category: 'Floor Tiles', dimensions: '18x36 inches' },
    16: { id: 16, name: 'Desert Beige', description: 'A subtle and warm beige tile with a non-reflective matte surface.', price: 4.10, image: 'images/desertBeige.webp', category: 'Floor Tiles', dimensions: '18x18 inches' },
    17: { id: 17, name: 'Doveltalia', description: 'A contemporary grey stone effect tile, perfect for minimalist designs.', price: 5.95, image: 'images/doveltalia.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    18: { id: 18, name: 'Glossy White', description: 'A timeless classic subway tile, a versatile choice for kitchens and baths.', price: 2.80, image: 'images/glossyWhite.jpg', category: 'Wall Tiles', dimensions: '3x6 inches' },
    19: { id: 19, name: 'Green Marble', description: 'Subtle green marble look with delicate patterns. Ideal for serene bathroom designs.', price: 2.80, image: 'images/greenMarble.jpg', category: 'Wall Tiles', dimensions: '12x24 inches' },
    20: { id: 20, name: 'Iron Coffee', description: 'Deep iron and coffee tones give this tile a rustic, earthy texture.', price: 8.21, image: 'images/ironCoffee.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    21: { id: 21, name: 'Laurent Slate', description: 'Elegant black slate with fine white veining for a sophisticated look.', price: 7.80, image: 'images/laurentSlate.webp', category: 'Wall Tiles', dimensions: '24x48 inches' },
    22: { id: 22, name: 'Marfig Bianco', description: 'Classic Italian Carrara marble look with soft grey veining.', price: 7.10, image: 'images/marfigBianco.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    23: { id: 23, name: 'Markstone Sand', description: 'A multi-toned stone tile with a natural, inviting feel.', price: 7.33, image: 'images/markstoneSand.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    24: { id: 24, name: 'Marquina Natural', description: 'A rich, dark tile with delicate white veins, creating a dramatic, elegant look.', price: 4.77, image: 'images/MarquinaNatural.webp', category: 'Wall Tiles', dimensions: '24x48 inches' },
    25: { id: 25, name: 'Matte Finish Grey', description: 'A versatile matte grey porcelain tile, perfect for modern floors and walls.', price: 4.35, image: 'images/mattefinishGrey.jpg', category: 'Floor Tiles', dimensions: '12x24 inches' },
    26: { id: 26, name: 'Onega Silver', description: 'A striking tile with linear silver veins on a white background.', price: 6.60, image: 'images/onegaSilver.webp', category: 'Wall Tiles', dimensions: '12x24 inches' },
    27: { id: 27, name: 'Onyx Sky', description: 'A beautiful polished tile that mimics the soft blue and white clouds of the sky.', price: 9.15, image: 'images/onyxSky.webp', category: 'Wall Tiles', dimensions: '24x24 inches' },
    28: { id: 28, name: 'Onyx Viola', description: 'Dramatic purple and gold veining make this a stunning statement piece.', price: 9.50, image: 'images/onyxViola.webp', category: 'Wall Tiles', dimensions: '24x48 inches' },
    29: { id: 29, name: 'Outdoor Textured', description: 'Extremely durable textured stone-look tile, perfect for patios and walkways.', price: 4.25, image: 'images/outdoorTextured.webp', category: 'Outdoor Tiles', dimensions: '16x16 inches' },
    30: { id: 30, name: 'Pulpis Graphite', description: 'A polished, dark grey tile for a sleek and modern interior.', price: 6.85, image: 'images/pulpisGraphite.webp', category: 'Floor Tiles', dimensions: '24x48 inches' },
    31: { id: 31, name: 'Quartzite Sand', description: 'A beautiful sandstone-look tile with subtle texture and color variation.', price: 6.80, image: 'images/quartZite.webp', category: 'Floor Tiles', dimensions: '18x36 inches' },
    32: { id: 32, name: 'Red Marble', description: 'Rich red marble effect tile with striking white veins. Adds a touch of vintage luxury.', price: 4.66, image: 'images/redMarble.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
    33: { id: 33, name: 'Roma Empire', description: 'A classic travertine look with rich, warm tones inspired by ancient Rome.', price: 7.40, image: 'images/romaEmpire.jpg', category: 'Floor Tiles', dimensions: '18x36 inches' },
    34: { id: 34, name: 'Rustic Stone', description: 'A mosaic sheet featuring rugged, multi-colored stone pieces.', price: 9.80, image: 'images/rusticStone.webp', category: 'Mosaics', dimensions: '12x12 inches sheet' },
    35: { id: 35, name: 'Statuario Natural', description: 'A classic white marble tile with beautiful gray veining, inspired by Italian marble.', price: 5.20, image: 'images/StatuarioNatural.jpeg', category: 'Wall Tiles', dimensions: '24x48 inches' },
    36: { id: 36, name: 'Stone Outdoor', description: 'A versatile and hard-wearing natural stone tile for any outdoor application.', price: 5.75, image: 'images/stoneOutdoor.webp', category: 'Outdoor Tiles', dimensions: '16x16 inches' },
    37: { id: 37, name: 'Terracotta Outdoor', description: 'Classic terracotta tile that brings warmth to patios and sunrooms.', price: 3.99, image: 'images/terracottaOutdoor.webp', category: 'Outdoor Tiles', dimensions: '12x12 inches' },
    38: { id: 38, name: 'Terraelino Menta', description: 'A modern concrete-look tile with a soft, matte finish for an industrial aesthetic.', price: 3.50, image: 'images/terraelinoMenta.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    39: { id: 39, name: 'Terra Outdoor', description: 'Heavy-duty paver with a textured finish for excellent slip resistance.', price: 4.90, image: 'images/terraOutdoor.webp', category: 'Outdoor Tiles', dimensions: '16x16 inches' },
    40: { id: 40, name: 'Tiaki Green', description: 'A deep green marble with intricate white and gold veining for a luxury feel.', price: 8.75, image: 'images/tiakiGreen.webp', category: 'Wall Tiles', dimensions: '24x48 inches' },
    41: { id: 41, name: 'Trasore Beige', description: 'A light beige tile with a soft texture, perfect for modern spaces.', price: 6.50, image: 'images/trasoreBeige.webp', category: 'Floor Tiles', dimensions: '12x24 inches' },
    42: { id: 42, name: 'Travertino Natural', description: 'A natural-look tile inspired by classic travertine stone, with warm, earthy tones.', price: 2.25, image: 'images/travertinoNatural.webp', category: 'Outdoor Tiles', dimensions: '12x24 inches' },
    43: { id: 43, name: 'Venus Beach', description: 'A light, sandy-colored tile that evokes a calm, coastal feeling.', price: 5.30, image: 'images/venusBeach.webp', category: 'Floor Tiles', dimensions: '16x16 inches' },
    44: { id: 44, name: 'Marquinalet', description: 'A fine porcelain tile with a deep black base and sharp white veining.', price: 5.85, image: 'images/marquinalet.webp', category: 'Wall Tiles', dimensions: '24x48 inches' },
    45: { id: 45, name: 'Outdoor Pulpis', description: 'A durable outdoor tile with the sophisticated look of Pulpis marble.', price: 7.20, image: 'images/outdoorPulpis.webp', category: 'Outdoor Tiles', dimensions: '24x24 inches' },
    46: { id: 46, name: 'Stone Terra', description: 'A rich, earthy tile combining the durability of stone with a terracotta finish.', price: 5.55, image: 'images/stoneTerra.webp', category: 'Outdoor Tiles', dimensions: '18x18 inches' },
    47: { id: 47, name: 'Red Brick', description: 'Classic red brick porcelain tile for interior and exterior walls.', price: 6.10, image: 'images/redBrick.jpg', category: 'Wall Tiles', dimensions: '4x8 inches' },
    48: { id: 48, name: 'Trasore Light', description: 'A lighter variant of the Trasore series, offering a bright and airy feel.', price: 6.40, image: 'images/trasoreLight.webp', category: 'Floor Tiles', dimensions: '12x24 inches' },
    49: { id: 49, name: 'Almond Beige', description: 'A soft, inviting beige tile perfect for creating a warm atmosphere.', price: 4.95, image: 'images/almondBeige.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    50: { id: 50, name: 'Empire Stone', description: 'A grand, large-format tile that mimics the look of ancient imperial stone.', price: 8.30, image: 'images/empireStone.webp', category: 'Floor Tiles', dimensions: '30x30 inches' },
    51: { id: 51, name: 'Beach Sand', description: 'A fine-grained porcelain tile with the look and feel of smooth beach sand.', price: 5.40, image: 'images/beachSand.webp', category: 'Floor Tiles', dimensions: '18x18 inches' }
  };

  // Placeholder image to use when a product image is missing
  const PLACEHOLDER_IMAGE = 'images/image-placeholder.png'; // add this to your images folder or change to an existing placeholder

  // ---------------------------
  // Local Storage helpers
  // ---------------------------
  const CART_KEY = 'tilecraft-cart';

  function getCartFromLocalStorage() {
    try {
      const cartRaw = localStorage.getItem(CART_KEY);
      return cartRaw ? JSON.parse(cartRaw) : {};
    } catch (e) {
      console.warn('Failed to parse cart from localStorage', e);
      return {};
    }
  }

  function saveCartToLocalStorage(cart) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }

  function normalizeId(id) {
    // Accept number or string, return Number if possible, otherwise null
    const n = typeof id === 'number' ? id : parseInt(String(id), 10);
    return Number.isFinite(n) ? n : null;
  }

  // Update header cart count display
  function updateCartCount() {
    const cart = getCartFromLocalStorage();
    const count = Object.values(cart).reduce((sum, it) => sum + (it.quantity || 0), 0);
    const cartCountElem = document.querySelectorAll('.cart-count');
    cartCountElem.forEach(el => {
      if (count > 0) {
        el.textContent = String(count);
        el.style.display = 'flex';
      } else {
        // keep it hidden when zero for a cleaner UI
        el.textContent = '0';
        el.style.display = 'none';
      }
    });
  }

  // ---------------------------
  // Add to cart logic
  // ---------------------------
  function addToCartById(rawId, quantity = 1) {
    const id = normalizeId(rawId);
    if (id === null) {
      console.warn('Invalid product id:', rawId);
      return { success: false, message: 'Invalid product id' };
    }

    const product = products[id];
    if (!product) {
      console.warn(`Product ${id} not found in product list.`);
      return { success: false, message: 'Product not found' };
    }

    const cart = getCartFromLocalStorage();
    if (cart[id]) {
      cart[id].quantity = (cart[id].quantity || 0) + quantity;
    } else {
      cart[id] = { id: id, quantity: quantity };
    }
    saveCartToLocalStorage(cart);
    updateCartCount();

    return { success: true, product };
  }

  // Attach "add to cart" handlers to all .add-to-cart-btn on the page
  function attachAddToCartButtons() {
    // Use current DOM content - buttons could appear on many pages
    const buttons = document.querySelectorAll('.add-to-cart-btn');

    buttons.forEach(button => {
      // remove previous listeners to avoid double-binding when script reloads
      button.replaceWith(button.cloneNode(true));
    });

    // requery after clone
    const freshButtons = document.querySelectorAll('.add-to-cart-btn');

    freshButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();

        // prefer dataset.productId; fallback to data-product-id attribute
        const rawId = button.dataset.productId ?? button.getAttribute('data-product-id');
        const qtyInputSelector = button.closest('.product-card') ? button.closest('.product-card').querySelector('input[type="number"]') : null;
        const rawQty = qtyInputSelector ? parseInt(qtyInputSelector.value, 10) : null;
        const quantity = Number.isFinite(rawQty) && rawQty > 0 ? rawQty : 1;

        const result = addToCartById(rawId, quantity);
        if (result.success) {
          // Visual feedback
          const originalText = button.textContent;
          button.textContent = 'Added!';
          button.disabled = true;
          setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
          }, 1200);
        } else {
          // Show a simple user-friendly message (replace with a toast if you have one)
          alert(result.message || 'Unable to add product to cart.');
        }
      });
    });
  }

  // ---------------------------
  // Product detail page rendering (if productDetails.html is used)
  // ---------------------------
  function getProductIdFromUrl() {
    try {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id') ?? params.get('product') ?? params.get('productId');
      return normalizeId(id);
    } catch (e) {
      return null;
    }
  }

  function renderProductPageIfNeeded() {
    if (!window.location.pathname.includes('productDetails.html') && !window.location.pathname.includes('product_detail_display.php')) {
      return;
    }

    const productId = getProductIdFromUrl();
    if (!productId) return;

    const product = products[productId];
    const pageTitleElem = document.getElementById('product-page-title');
    if (!product) {
      if (pageTitleElem) pageTitleElem.textContent = 'Product Not Found';
      console.warn('Product detail requested but not in product list:', productId);
      return;
    }

    // populate known elements if present
    if (pageTitleElem) pageTitleElem.textContent = `${product.name} - TileCraft`;
    const breadcrumbName = document.getElementById('breadcrumb-product-name');
    if (breadcrumbName) breadcrumbName.textContent = product.name;
    const productName = document.getElementById('product-name');
    if (productName) productName.textContent = product.name;
    const productImage = document.getElementById('product-image');
    if (productImage) {
      productImage.src = product.image;
      productImage.alt = product.name;
      productImage.onerror = function () {
        this.onerror = null;
        this.src = PLACEHOLDER_IMAGE;
      };
    }
    const productTitle = document.getElementById('product-title');
    if (productTitle) productTitle.textContent = product.name;
    const productPrice = document.getElementById('product-price');
    if (productPrice) productPrice.textContent = `$${product.price.toFixed(2)} / sq. ft`;
    const productDescription = document.getElementById('product-description');
    if (productDescription) productDescription.textContent = product.description;
    const productCategory = document.getElementById('product-category');
    if (productCategory) productCategory.textContent = product.category;
    const productDimensions = document.getElementById('product-dimensions');
    if (productDimensions) productDimensions.textContent = product.dimensions;

    const addToCartBtn = document.getElementById('add-to-cart-button');
    if (addToCartBtn) {
      addToCartBtn.dataset.productId = String(productId);
      // attach handler if not already attached
      addToCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const qtyInput = document.getElementById('product-quantity');
        const q = qtyInput ? parseInt(qtyInput.value, 10) : 1;
        addToCartById(productId, Number.isFinite(q) && q > 0 ? q : 1);
        updateCartCount();
        // quick UI feedback
        const old = addToCartBtn.textContent;
        addToCartBtn.textContent = 'Added!';
        addToCartBtn.disabled = true;
        setTimeout(() => {
          addToCartBtn.textContent = old;
          addToCartBtn.disabled = false;
        }, 1000);
      });
    }
  }

  // ---------------------------
  // Cart page rendering & interactions
  // ---------------------------
  function renderCartPageIfNeeded() {
    if (!window.location.pathname.includes('cart.html') && !window.location.pathname.includes('cart.php') && !window.location.pathname.includes('cart_logic.php')) {
      return;
    }

    const cart = getCartFromLocalStorage();
    const cartTableBody = document.getElementById('cart-table-body');
    const cartContainer = document.querySelector('.cart-container');
    const cartEmptyMessage = document.querySelector('.cart-empty');
    let subtotal = 0;

    if (!cartTableBody) return;

    // Clear current rows
    cartTableBody.innerHTML = '';

    const productIds = Object.keys(cart);
    if (productIds.length === 0) {
      // show empty state
      if (cartContainer) cartContainer.style.display = 'none';
      if (cartEmptyMessage) cartEmptyMessage.style.display = 'block';
      // update totals
      const summarySubtotalElem = document.querySelector('.summary-subtotal');
      const summaryTotalElem = document.querySelector('.total-value');
      if (summarySubtotalElem) summarySubtotalElem.textContent = '$0.00';
      if (summaryTotalElem) summaryTotalElem.textContent = '$0.00';
      return;
    } else {
      if (cartContainer) cartContainer.style.display = '';
      if (cartEmptyMessage) cartEmptyMessage.style.display = 'none';
    }

    productIds.forEach(pidStr => {
      const pid = normalizeId(pidStr);
      const item = cart[pidStr];
      if (!item) return;
      const product = products[pid];
      if (!product) {
        console.warn('Product in cart not found in products list:', pid);
        return;
      }

      const itemQty = Number.isFinite(item.quantity) ? item.quantity : 1;
      const itemSubtotal = product.price * itemQty;
      subtotal += itemSubtotal;

      const tr = document.createElement('tr');
      tr.classList.add('cart-item');
      tr.dataset.productId = String(pid);

      // build the cells
      tr.innerHTML = `
        <td class="cart-item-image">
          <a href="productDetails.html?id=${pid}">
            <img src="${product.image}" alt="${escapeHtml(product.name)}" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMAGE}';" style="max-width:80px;display:block;">
          </a>
        </td>
        <td class="cart-item-details">
          <a href="productDetails.html?id=${pid}" class="cart-item-title">${escapeHtml(product.name)}</a>
        </td>
        <td class="cart-item-price">$${product.price.toFixed(2)}</td>
        <td class="cart-item-quantity">
          <div class="quantity-input">
            <button class="qty-btn minus" aria-label="Decrease quantity">-</button>
            <input type="number" value="${itemQty}" min="1" step="1" aria-label="Quantity in square feet or units">
            <button class="qty-btn plus" aria-label="Increase quantity">+</button>
          </div>
        </td>
        <td class="cart-item-subtotal">$${itemSubtotal.toFixed(2)}</td>
        <td class="cart-item-remove">
          <button class="remove-item-btn" aria-label="Remove item">×</button>
        </td>
      `;
      cartTableBody.appendChild(tr);
    });

    // Update totals
    const summarySubtotalElement = document.querySelector('.summary-subtotal');
    const summaryTotalElement = document.querySelector('.total-value');
    if (summarySubtotalElement) summarySubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (summaryTotalElement) summaryTotalElement.textContent = `$${subtotal.toFixed(2)}`;

    // Attach delegated listeners for plus/minus/quantity/change/remove
    cartTableBody.removeEventListener('click', cartTableClickHandler);
    cartTableBody.removeEventListener('input', cartTableInputHandler);

    cartTableBody.addEventListener('click', cartTableClickHandler);
    cartTableBody.addEventListener('input', cartTableInputHandler);
  }

  // Event handler helpers for cart table
  function cartTableClickHandler(e) {
    const btn = e.target.closest('.qty-btn, .remove-item-btn');
    if (!btn) return;
    const row = btn.closest('tr.cart-item');
    if (!row) return;
    const pid = row.dataset.productId;
    const cart = getCartFromLocalStorage();

    if (btn.classList.contains('remove-item-btn')) {
      // remove entire item
      delete cart[pid];
      saveCartToLocalStorage(cart);
      renderCartPageIfNeeded();
      updateCartCount();
      return;
    }

    if (btn.classList.contains('plus') || btn.classList.contains('minus')) {
      const qtyInput = row.querySelector('input[type="number"]');
      if (!qtyInput) return;
      let qty = parseInt(qtyInput.value, 10) || 1;
      if (btn.classList.contains('plus')) qty += 1;
      if (btn.classList.contains('minus')) qty = Math.max(1, qty - 1);
      qtyInput.value = qty;
      // update cart
      if (cart[pid]) {
        cart[pid].quantity = qty;
        saveCartToLocalStorage(cart);
        // update row subtotal
        const product = products[normalizeId(pid)];
        if (product) {
          const subtotalCell = row.querySelector('.cart-item-subtotal');
          if (subtotalCell) subtotalCell.textContent = `$${(product.price * qty).toFixed(2)}`;
        }
      }
      // recompute totals
      recalcCartTotals();
      updateCartCount();
    }
  }

  function cartTableInputHandler(e) {
    const input = e.target;
    if (input.tagName !== 'INPUT' || input.type !== 'number') return;
    const row = input.closest('tr.cart-item');
    if (!row) return;
    const pid = row.dataset.productId;
    let qty = parseInt(input.value, 10);
    if (!Number.isFinite(qty) || qty < 1) {
      qty = 1;
      input.value = 1;
    }
    const cart = getCartFromLocalStorage();
    if (cart[pid]) {
      cart[pid].quantity = qty;
      saveCartToLocalStorage(cart);
      // update row subtotal
      const product = products[normalizeId(pid)];
      if (product) {
        const subtotalCell = row.querySelector('.cart-item-subtotal');
        if (subtotalCell) subtotalCell.textContent = `$${(product.price * qty).toFixed(2)}`;
      }
      recalcCartTotals();
      updateCartCount();
    }
  }

  function recalcCartTotals() {
    const cart = getCartFromLocalStorage();
    let subtotal = 0;
    Object.keys(cart).forEach(pidStr => {
      const pItem = cart[pidStr];
      const product = products[normalizeId(pidStr)];
      if (product) {
        subtotal += (product.price * (pItem.quantity || 0));
      }
    });
    const summarySubtotalElement = document.querySelector('.summary-subtotal');
    const summaryTotalElement = document.querySelector('.total-value');
    if (summarySubtotalElement) summarySubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (summaryTotalElement) summaryTotalElement.textContent = `$${subtotal.toFixed(2)}`;
  }

  // Utility - escape for injection-safe text in innerHTML contexts where needed
  function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, function (m) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
    });
  }

  // ---------------------------
  // Initialization
  // ---------------------------
  function init() {
    attachAddToCartButtons();
    renderProductPageIfNeeded();
    renderCartPageIfNeeded();
    updateCartCount();

    // Re-attach add-to-cart buttons if new content is injected later
    // (for example if you use AJAX to load product lists)
    // Listen once for DOM changes - if you load content dynamically often,
    // consider a MutationObserver that re-attaches listeners.
    document.addEventListener('DOMContentLoaded', () => {
      attachAddToCartButtons();
      updateCartCount();
    });
  }

  // Run init
  init();

  // Expose a small API for debugging from console if necessary:
  window.tilecraft = {
    products,
    addToCartById,
    getCartFromLocalStorage,
    saveCartToLocalStorage,
    updateCartCount,
    renderCartPageIfNeeded
  };
});

// --- FAQ Accordion Logic ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            
            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0px';
            }
        });
    })();