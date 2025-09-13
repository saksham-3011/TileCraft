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






// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






// document.addEventListener('DOMContentLoaded', () => {

//     console.log("TileCraft Script Loaded");

//     // --- Product Data (Simulated Database) ---
//     const products = {
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

//     // --- Inspiration Data ---
//     const inspirationImages = [
//         { title: 'Modern Kitchen Splashback', caption: 'Featuring our Glossy White Subway Tile for a clean, timeless look.', image: 'https://nexiontiles.com/wp-content/uploads/2022/09/bologna-white_minimale.jpg' },
//         { title: 'Elegant Bathroom Retreat', caption: 'Statuario Natural tiles create a luxurious, spa-like atmosphere in this master bathroom.', image: 'https://nexiontiles.com/wp-content/uploads/2021/06/calacatta-gold-naturale.jpg' },
//         { title: 'Chic Outdoor Patio', caption: 'Durable Outdoor Textured Stone tiles seamlessly extend the living space outside.', image: 'https://nexiontiles.com/wp-content/uploads/2021/06/runa-black.jpg' },
//         { title: 'Statement Floor Design', caption: 'Using our Breccia Capraia tiles to add a touch of sophistication to a modern entryway.', image: 'https://nexiontiles.com/wp-content/uploads/2021/04/breccia-capraia-naturale.jpg' },
//         { title: 'Vibrant Mosaic Accent Wall', caption: 'Blue Mosaic Accent Tiles transform this space into a focal point with a pop of color.', image: 'https://nexiontiles.com/wp-content/uploads/2022/09/terraelino_ginepro_minimale.jpg' },
//         { title: 'Industrial Loft Bathroom', caption: 'The Matte Finish Grey Tile is a perfect choice for an urban, minimalist design.', image: 'https://nexiontiles.com/wp-content/uploads/2022/09/gabbro_sfumato_minimale.jpg' }
//     ];

//     // --- Dynamic Product Page Logic ---
//     function getProductIdFromUrl() {
//         const urlParams = new URLSearchParams(window.location.search);
//         return parseInt(urlParams.get('id'));
//     }

//     function renderProductPage() {
//         const productId = getProductIdFromUrl();
//         const product = products[productId];

//         if (product) {
//             document.title = `${product.name} - TileCraft`;
//             document.getElementById('product-page-title').textContent = product.name;
//             document.getElementById('breadcrumb-product-name').textContent = product.name;
//             document.getElementById('product-name').textContent = product.name;
//             document.getElementById('product-image').src = product.image;
//             document.getElementById('product-image').alt = product.name;
//             document.getElementById('product-title').textContent = product.name;
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

//     if (window.location.pathname.includes('product-detail.html')) {
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
//     } else {
//         console.warn("Mobile navigation elements not found.");
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
//     } else {
//         console.warn("Search toggle or search bar elements not found.");
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

//     // --- 5. "Add to Cart" Functionality (Updated) ---
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

//     // Attach event listeners for all "Add to Cart" buttons
//     // Using event delegation to handle dynamically added buttons
//     document.addEventListener('click', (event) => {
//         const button = event.target.closest('.add-to-cart-btn');
//         if (!button) return;

//         const productId = button.dataset.productId;
//         const quantityInput = document.getElementById('product-quantity');
//         const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
        
//         const cart = getCartFromLocalStorage();
//         if (cart[productId]) {
//             cart[productId].quantity += quantity;
//         } else {
//             cart[productId] = {
//                 id: productId,
//                 quantity: quantity
//             };
//         }
//         saveCartToLocalStorage(cart);
//         updateCartCount();

//         // Optional: Provide visual feedback
//         const originalText = button.textContent;
//         button.textContent = 'Added!';
//         button.disabled = true;
//         setTimeout(() => {
//             button.textContent = originalText;
//             button.disabled = false;
//         }, 1500);
//     });

//     // --- Cart Page Rendering & Logic ---
//     function renderCartPage() {
//         const cart = getCartFromLocalStorage();
//         const cartTableBody = document.getElementById('cart-table-body');
//         const cartContainer = document.querySelector('.cart-container');
//         const cartEmptyMessage = document.querySelector('.cart-empty');
//         let subtotal = 0;
//         const shippingCost = 15.00;

//         if (!cartTableBody) return;

//         cartTableBody.innerHTML = '';

//         const productIds = Object.keys(cart);
//         if (productIds.length === 0) {
//             cartContainer.style.display = 'none';
//             cartEmptyMessage.style.display = 'block';
//         } else {
//             cartContainer.style.display = 'flex';
//             cartEmptyMessage.style.display = 'none';

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
//                             <a href="product-detail.html?id=${product.id}">
//                                 <img src="${product.image}" alt="${product.name}">
//                             </a>
//                         </td>
//                         <td class="cart-item-details">
//                             <a href="product-detail.html?id=${product.id}" class="cart-item-title">${product.name}</a>
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
//             const summaryShippingElement = document.querySelector('.summary-shipping');
//             const summaryTotalElement = document.querySelector('.total-value');

//             if (summarySubtotalElement) {
//                 summarySubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
//             }
//             if (summaryShippingElement) {
//                 summaryShippingElement.textContent = `$${subtotal > 0 ? shippingCost.toFixed(2) : '0.00'}`;
//             }
//             if (summaryTotalElement) {
//                 const total = subtotal > 0 ? subtotal + shippingCost : 0;
//                 summaryTotalElement.textContent = `$${total.toFixed(2)}`;
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
//     } else {
//         console.warn("Element with ID 'current-year' not found.");
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

//         const initialPanelId = window.location.hash.substring(1) || 'dashboard';
//         const initialLink = document.querySelector(`.account-nav-link[data-panel-id="${initialPanelId}"]`);
//         const initialPanel = document.getElementById(initialPanelId);

//         if (initialLink && initialPanel) {
//             document.querySelectorAll('.account-nav-link').forEach(link => link.classList.remove('active'));
//             document.querySelectorAll('.account-panel').forEach(panel => panel.classList.remove('active'));
//             initialLink.classList.add('active');
//             initialPanel.classList.add('active');
//         }
//     }
    
//     // --- Category Pages Rendering Logic ---
//     function sortProducts(products, sortValue) {
//         const sorted = [...products];
//         switch (sortValue) {
//             case 'low-high':
//                 return sorted.sort((a, b) => a.price - b.price);
//             case 'high-low':
//                 return sorted.sort((a, b) => b.price - a.price);
//             case 'popularity':
//             case 'default':
//             default:
//                 return sorted.sort((a, b) => a.id - b.id);
//         }
//     }

//     function renderCategoryPage() {
//         const body = document.body;
//         const category = body.dataset.category;
//         const productGrid = document.getElementById('category-product-grid');
//         const productCountElement = document.querySelector('.product-count');
//         const sortBySelect = document.getElementById('sort-by');
//         const sortValue = sortBySelect ? sortBySelect.value : 'default';

//         if (!category || !productGrid) return;
        
//         const filteredProducts = category === 'All Tiles' ? Object.values(products) : Object.values(products).filter(product => product.category === category);
        
//         const sortedProducts = sortProducts(filteredProducts, sortValue);

//         productGrid.innerHTML = '';

//         if (sortedProducts.length > 0) {
//             productCountElement.textContent = `Showing ${sortedProducts.length} tiles in this category`;
            
//             sortedProducts.forEach(product => {
//                 const article = document.createElement('article');
//                 article.classList.add('product-card');
//                 article.innerHTML = `
//                     <a href="product-detail.html?id=${product.id}" class="product-link">
//                         <img src="${product.image}" alt="${product.name}" class="product-image" />
//                         <div class="product-info">
//                             <h3 class="product-title">${product.name}</h3>
//                             <p class="product-price">$${product.price.toFixed(2)} / sq. ft</p>
//                         </div>
//                     </a>
//                     <button class="btn btn-secondary btn-sm add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
//                 `;
//                 productGrid.appendChild(article);
//             });
//         } else {
//             productCountElement.textContent = `No tiles found in this category.`;
//             productGrid.innerHTML = `<p class="text-center">Sorry, there are no products to display in this category right now. Please check back later!</p>`;
//         }
//     }

//     const categoryPages = ['AllTiles.html', 'category-wall.html', 'category-floor.html', 'category-mosaic.html', 'category-outdoor.html'];
//     if (categoryPages.some(page => window.location.pathname.includes(page))) {
//         renderCategoryPage();

//         const sortBySelect = document.getElementById('sort-by');
//         if (sortBySelect) {
//             sortBySelect.addEventListener('change', () => {
//                 renderCategoryPage();
//             });
//         }
//     }

//     // --- Inspiration Page Rendering Logic ---
//     function renderInspirationPage() {
//         const inspirationGrid = document.getElementById('inspiration-grid');
//         if (!inspirationGrid) return;
        
//         inspirationImages.forEach(item => {
//             const card = document.createElement('div');
//             card.classList.add('inspiration-card');
//             card.innerHTML = `
//                 <img src="${item.image}" alt="${item.title}" />
//                 <div class="inspiration-overlay">
//                     <h3 class="inspiration-title">${item.title}</h3>
//                     <p class="inspiration-caption">${item.caption}</p>
//                 </div>
//             `;
//             inspirationGrid.appendChild(card);
//         });
//     }

//     if (window.location.pathname.includes('inspiration.html')) {
//         renderInspirationPage();
//     }
    
//     // --- Checkout Page Rendering & Logic ---
//     function renderCheckoutPage() {
//         const cart = getCartFromLocalStorage();
//         const orderItemList = document.getElementById('order-item-list');
//         let subtotal = 0;
//         const shippingCost = 15.00;
        
//         if (!orderItemList) return;
        
//         orderItemList.innerHTML = '';

//         const productIds = Object.keys(cart);
        
//         if (productIds.length > 0) {
//             productIds.forEach(productId => {
//                 const item = cart[productId];
//                 const product = products[productId];
//                 if (product) {
//                     const itemSubtotal = product.price * item.quantity;
//                     subtotal += itemSubtotal;

//                     const li = document.createElement('li');
//                     li.classList.add('order-item');
//                     li.innerHTML = `
//                         <img src="${product.image}" alt="${product.name}" class="order-item-image">
//                         <div class="order-item-details">
//                             <span class="order-item-name">${product.name}</span>
//                             <span class="order-item-qty">Qty: ${item.quantity}</span>
//                         </div>
//                         <span class="order-item-price">$${itemSubtotal.toFixed(2)}</span>
//                     `;
//                     orderItemList.appendChild(li);
//                 }
//             });
//         }
        
//         const summarySubtotalElement = document.querySelector('.order-summary-card .summary-row .summary-value');
//         const summaryShippingElement = document.querySelector('.order-summary-card .summary-row:nth-child(3) .summary-value');
//         const summaryTotalElement = document.querySelector('.order-summary-card .total-row .summary-value');

//         if (summarySubtotalElement) {
//             summarySubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
//         }
//         if (summaryShippingElement) {
//             summaryShippingElement.textContent = `$${subtotal > 0 ? shippingCost.toFixed(2) : '0.00'}`;
//         }
//         if (summaryTotalElement) {
//             const total = subtotal > 0 ? subtotal + shippingCost : 0;
//             summaryTotalElement.textContent = `$${total.toFixed(2)}`;
//         }
//     }
    
//     if (window.location.pathname.includes('checkout.html')) {
//         renderCheckoutPage();
//     }

// });







// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






document.addEventListener('DOMContentLoaded', () => {

    console.log("TileCraft Script Loaded");

    // --- Product Data (Simulated Database) ---
    const products = {
    1: { id: 1, name: 'Alchimia Pearl', description: 'A luminous pearl-effect tile that adds a touch of elegance to any wall.', price: 8.90, image: 'images/alchimiaPearl.jpg', category: 'Wall Tiles', dimensions: '12x36 inches' },
    2: { id: 2, name: 'Antique Black Marble', description: 'A luxurious black marble tile with subtle white veining for high-end interiors.', price: 5.10, image: 'images/antiqueBlack.jpg', category: 'Floor Tiles', dimensions: '12x24 inches' },
    3: { id: 3, name: 'Black Beach Pebble', description: 'Smooth, black pebbles arranged on a mesh for easy installation.', price: 10.50, image: 'images/blackBeach.jpg', category: 'Mosaics', dimensions: '12x12 inches sheet' },
    4: { id: 4, name: 'Blue Mosaic', description: 'A vibrant blue glass mosaic tile for stunning accent walls and backsplashes.', price: 5.60, image: 'images/blueMosaic.jpg', category: 'Mosaics', dimensions: '12x12 inches sheet' },
    5: { id: 5, name: 'Botto Almond', description: 'A soft almond-colored porcelain tile, versatile for both floors and walls.', price: 4.80, image: 'images/bottoAlmond.jpg', category: 'Floor Tiles', dimensions: '24x24 inches' },
    6: { id: 6, name: 'Breccia Capraia', description: 'A light tile with a swirling pattern of beige, grey, and brown tones.', price: 6.33, image: 'images\BrecciaCapraia.jpeg', category: 'Floor Tiles', dimensions: '24x24 inches' },
    7: { id: 7, name: 'Brick Red', description: 'A rustic red brick-look tile, perfect for an industrial or traditional feature wall.', price: 5.15, image: 'images/brickRed.jpg', category: 'Wall Tiles', dimensions: '3x8 inches' },
    8: { id: 8, name: 'Calcutta Prism', description: 'A geometric marble-look tile with a unique, eye-catching prism pattern.', price: 6.80, image: 'images/calcuttaPrism.webp', category: 'Floor Tiles', dimensions: '16x16 inches' },
    9: { id: 9, name: 'Trasore Camel', description: 'A warm camel-colored tile with a subtle texture, ideal for cozy living spaces.', price: 6.55, image: 'images/camelTexture.webp', category: 'Floor Tiles', dimensions: '12x24 inches' },
    10: { id: 10, name: 'Cardo Thunder', description: 'A dark, dramatic floor tile with a subtle metallic sheen for a bold statement.', price: 6.99, image: 'images/cardoThunder.webp', category: 'Floor Tiles', dimensions: '12x24 inches' },
    11: { id: 11, name: 'Cementi Beige', description: 'A warm beige concrete-look tile with a durable matte finish.', price: 5.60, image: 'images/cementiBeige.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    12: { id: 12, name: 'Charcoal Outdoor', description: 'Dark, durable slate perfect for contemporary outdoor patios and walkways.', price: 6.95, image: 'images/charcoalOutdoor.jpg', category: 'Outdoor Tiles', dimensions: '12x24 inches' },
    13: { id: 13, name: 'Cobblestone', description: 'Gives a rustic, old-world charm to driveways and garden paths.', price: 4.50, image: 'images/cobbleStone.jpg', category: 'Outdoor Tiles', dimensions: '6x6 inches' },
    14: { id: 14, name: 'Crysta Pearl', description: 'A high-gloss wall tile with an iridescent, pearly finish.', price: 6.20, image: 'images/crystaPearl.jpg', category: 'Wall Tiles', dimensions: '12x24 inches' },
    15: { id: 15, name: 'Dacite Ash', description: 'A neutral grey stone-look tile suitable for floors and walls.', price: 5.44, image: 'images/daciteAsh.webp', category: 'Floor Tiles', dimensions: '18x36 inches' },
    16: { id: 16, name: 'Desert Beige', description: 'A subtle and warm beige tile with a non-reflective matte surface.', price: 4.10, image: 'images/desertBeige.jpg', category: 'Floor Tiles', dimensions: '18x18 inches' },
    17: { id: 17, name: 'Doveltalia', description: 'A contemporary grey stone effect tile, perfect for minimalist designs.', price: 5.95, image: 'images/doveltalia.jpg', category: 'Floor Tiles', dimensions: '24x24 inches' },
    18: { id: 18, name: 'Glossy White', description: 'A timeless classic subway tile, a versatile choice for kitchens and baths.', price: 2.80, image: 'images/glossyWhite.jpg', category: 'Wall Tiles', dimensions: '3x6 inches' },
    19: { id: 19, name: 'Green Marble', description: 'Subtle green marble look with delicate patterns. Ideal for serene bathroom designs.', price: 2.80, image: 'images/greenMarble.jpg', category: 'Wall Tiles', dimensions: '12x24 inches' },
    20: { id: 20, name: 'Iron Coffee', description: 'Deep iron and coffee tones give this tile a rustic, earthy texture.', price: 8.21, image: 'images/ironCoffee.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    21: { id: 21, name: 'Laurent Slate', description: 'Elegant black slate with fine white veining for a sophisticated look.', price: 7.80, image: 'images/laurentSlate.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
    22: { id: 22, name: 'Marfig Bianco', description: 'Classic Italian Carrara marble look with soft grey veining.', price: 7.10, image: 'images/marfigBianco.jpg', category: 'Floor Tiles', dimensions: '24x24 inches' },
    23: { id: 23, name: 'Markstone Sand', description: 'A multi-toned stone tile with a natural, inviting feel.', price: 7.33, image: 'images/markstoneSand.webp', category: 'Floor Tiles', dimensions: '24x24 inches' },
    24: { id: 24, name: 'Marquina Natural', description: 'A rich, dark tile with delicate white veins, creating a dramatic, elegant look.', price: 4.77, image: 'images/MarquinaNatural.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
    25: { id: 25, name: 'Matte Finish Grey', description: 'A versatile matte grey porcelain tile, perfect for modern floors and walls.', price: 4.35, image: 'images/mattefinishGrey.jpg', category: 'Floor Tiles', dimensions: '12x24 inches' },
    26: { id: 26, name: 'Onega Silver', description: 'A striking tile with linear silver veins on a white background.', price: 6.60, image: 'images/onegaSilver.jpg', category: 'Wall Tiles', dimensions: '12x24 inches' },
    27: { id: 27, name: 'Onyx Sky', description: 'A beautiful polished tile that mimics the soft blue and white clouds of the sky.', price: 9.15, image: 'images/onyxSky.jpg', category: 'Wall Tiles', dimensions: '24x24 inches' },
    28: { id: 28, name: 'Onyx Viola', description: 'Dramatic purple and gold veining make this a stunning statement piece.', price: 9.50, image: 'images/onyxViola.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
    29: { id: 29, name: 'Outdoor Textured', description: 'Extremely durable textured stone-look tile, perfect for patios and walkways.', price: 4.25, image: 'images/outdoorTextured.jpg', category: 'Outdoor Tiles', dimensions: '16x16 inches' },
    30: { id: 30, name: 'Pulpis Graphite', description: 'A polished, dark grey tile for a sleek and modern interior.', price: 6.85, image: 'images/pulpisGraphite.jpg', category: 'Floor Tiles', dimensions: '24x48 inches' },
    31: { id: 31, name: 'Quartzite Sand', description: 'A beautiful sandstone-look tile with subtle texture and color variation.', price: 6.80, image: 'images/quartZite.webp', category: 'Floor Tiles', dimensions: '18x36 inches' },
    32: { id: 32, name: 'Red Marble', description: 'Rich red marble effect tile with striking white veins. Adds a touch of vintage luxury.', price: 4.66, image: 'images/redMarble.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
    33: { id: 33, name: 'Roma Empire', description: 'A classic travertine look with rich, warm tones inspired by ancient Rome.', price: 7.40, image: 'images/romaEmpire.jpg', category: 'Floor Tiles', dimensions: '18x36 inches' },
    34: { id: 34, name: 'Rustic Stone', description: 'A mosaic sheet featuring rugged, multi-colored stone pieces.', price: 9.80, image: 'images/rusticStone.jpg', category: 'Mosaics', dimensions: '12x12 inches sheet' },
    35: { id: 35, name: 'Statuario Natural', description: 'A classic white marble tile with beautiful gray veining, inspired by Italian marble.', price: 5.20, image: 'images/StatuarioNatural.jpeg', category: 'Wall Tiles', dimensions: '24x48 inches' },
    36: { id: 36, name: 'Stone Outdoor', description: 'A versatile and hard-wearing natural stone tile for any outdoor application.', price: 5.75, image: 'images/stoneOutdoor.jpg', category: 'Outdoor Tiles', dimensions: '16x16 inches' },
    37: { id: 37, name: 'Terracotta Outdoor', description: 'Classic terracotta tile that brings warmth to patios and sunrooms.', price: 3.99, image: 'images/terracottaOutdoor.jpg', category: 'Outdoor Tiles', dimensions: '12x12 inches' },
    38: { id: 38, name: 'Terraelino Menta', description: 'A modern concrete-look tile with a soft, matte finish for an industrial aesthetic.', price: 3.50, image: 'images/terraelinoMenta.jpg', category: 'Floor Tiles', dimensions: '24x24 inches' },
    39: { id: 39, name: 'Terra Outdoor', description: 'Heavy-duty paver with a textured finish for excellent slip resistance.', price: 4.90, image: 'images/terraOutdoor.jpg', category: 'Outdoor Tiles', dimensions: '16x16 inches' },
    40: { id: 40, name: 'Tiaki Green', description: 'A deep green marble with intricate white and gold veining for a luxury feel.', price: 8.75, image: 'images/tiakiGreen.jpg', category: 'Wall Tiles', dimensions: '24x48 inches' },
    41: { id: 41, name: 'Trasore Beige', description: 'A light beige tile with a soft texture, perfect for modern spaces.', price: 6.50, image: 'images/trasoreBeige.jpg', category: 'Floor Tiles', dimensions: '12x24 inches' },
    42: { id: 42, name: 'Travertino Natural', description: 'A natural-look tile inspired by classic travertine stone, with warm, earthy tones.', price: 2.25, image: 'images/travertinoNatural.jpg', category: 'Outdoor Tiles', dimensions: '12x24 inches' },
    43: { id: 43, name: 'Venus Beach', description: 'A light, sandy-colored tile that evokes a calm, coastal feeling.', price: 5.30, image: 'images/venusBeach.jpg', category: 'Floor Tiles', dimensions: '16x16 inches' },
    44: { id: 44, name: 'Marquinalet', description: 'A fine porcelain tile with a deep black base and sharp white veining.', price: 5.85, image: 'images/marquinalet.jpg', category: 'Wall Tiles', dimensions: '24x48 inches'},
    45: { id: 45, name: 'Outdoor Pulpis', description: 'A durable outdoor tile with the sophisticated look of Pulpis marble.', price: 7.20, image: 'images/outdoorPulpis.jpg', category: 'Outdoor Tiles', dimensions: '24x24 inches'},
    46: { id: 46, name: 'Stone Terra', description: 'A rich, earthy tile combining the durability of stone with a terracotta finish.', price: 5.55, image: 'images/stoneTerra.jpg', category: 'Outdoor Tiles', dimensions: '18x18 inches'},
    47: { id: 47, name: 'Red Brick', description: 'Classic red brick porcelain tile for interior and exterior walls.', price: 6.10, image: 'images/redBrick.jpg', category: 'Wall Tiles', dimensions: '4x8 inches'},
    48: { id: 48, name: 'Trasore Light', description: 'A lighter variant of the Trasore series, offering a bright and airy feel.', price: 6.40, image: 'images/trasoreLight.jpg', category: 'Floor Tiles', dimensions: '12x24 inches'},
    49: { id: 49, name: 'Almond Beige', description: 'A soft, inviting beige tile perfect for creating a warm atmosphere.', price: 4.95, image: 'images/almondBeige.jpg', category: 'Floor Tiles', dimensions: '24x24 inches'},
    50: { id: 50, name: 'Empire Stone', description: 'A grand, large-format tile that mimics the look of ancient imperial stone.', price: 8.30, image: 'images/empireStone.jpg', category: 'Floor Tiles', dimensions: '30x30 inches'},
    51: { id: 51, name: 'Beach Sand', description: 'A fine-grained porcelain tile with the look and feel of smooth beach sand.', price: 5.40, image: 'images/beachSand.jpg', category: 'Floor Tiles', dimensions: '18x18 inches'}
};


    // --- Inspiration Data ---
    const inspirationImages = [
        { title: 'Modern Kitchen Splashback', caption: 'Featuring our Glossy White Subway Tile for a clean, timeless look.', image: 'https://nexiontiles.com/wp-content/uploads/2022/09/bologna-white_minimale.jpg' },
        { title: 'Elegant Bathroom Retreat', caption: 'Statuario Natural tiles create a luxurious, spa-like atmosphere in this master bathroom.', image: 'https://nexiontiles.com/wp-content/uploads/2021/06/calacatta-gold-naturale.jpg' },
        { title: 'Chic Outdoor Patio', caption: 'Durable Outdoor Textured Stone tiles seamlessly extend the living space outside.', image: 'https://nexiontiles.com/wp-content/uploads/2021/06/runa-black.jpg' },
        { title: 'Statement Floor Design', caption: 'Using our Breccia Capraia tiles to add a touch of sophistication to a modern entryway.', image: 'https://nexiontiles.com/wp-content/uploads/2021/04/breccia-capraia-naturale.jpg' },
        { title: 'Vibrant Mosaic Accent Wall', caption: 'Blue Mosaic Accent Tiles transform this space into a focal point with a pop of color.', image: 'https://nexiontiles.com/wp-content/uploads/2022/09/terraelino_ginepro_minimale.jpg' },
        { title: 'Industrial Loft Bathroom', caption: 'The Matte Finish Grey Tile is a perfect choice for an urban, minimalist design.', image: 'https://nexiontiles.com/wp-content/uploads/2022/09/gabbro_sfumato_minimale.jpg' }
    ];

    // --- Dynamic Product Page Logic ---
    function getProductIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get('id'));
    }

    function renderProductPage() {
        const productId = getProductIdFromUrl();
        const product = products[productId];

        if (product) {
            document.title = `${product.name} - TileCraft`;
            document.getElementById('product-page-title').textContent = product.name;
            document.getElementById('breadcrumb-product-name').textContent = product.name;
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-image').alt = product.name;
            document.getElementById('product-title').textContent = product.name;
            document.getElementById('product-price').textContent = `$${product.price.toFixed(2)} / sq. ft`;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-category').textContent = product.category;
            document.getElementById('product-dimensions').textContent = product.dimensions;
            document.getElementById('add-to-cart-button').dataset.productId = product.id;
        } else {
            document.getElementById('product-page-title').textContent = 'Product Not Found';
            document.getElementById('product-name').textContent = 'Product Not Found';
            document.getElementById('breadcrumb-product-name').textContent = 'Error';
            const productDetailContainer = document.querySelector('.product-detail-container');
            if (productDetailContainer) {
                productDetailContainer.innerHTML = '<p class="text-center" style="font-size: 1.25rem;">Sorry, the tile you were looking for could not be found.</p>';
            }
        }
    }

    if (window.location.pathname.includes('product-detail.html')) {
        renderProductPage();
    }


    // --- 1. Mobile Navigation Toggle ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNavigation = document.getElementById('primary-navigation');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if (mobileNavToggle && primaryNavigation && hamburgerIcon) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = primaryNavigation.classList.toggle('active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);

            if (isExpanded) {
                hamburgerIcon.classList.remove('fa-bars');
                hamburgerIcon.classList.add('fa-times');
            } else {
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
                closeAllMobileSubmenus();
            }
        });
    } else {
        console.warn("Mobile navigation elements not found.");
    }

    // --- 2. Mobile Submenu Toggle ---
    const mobileDropdownToggles = document.querySelectorAll('#primary-navigation .nav-item.dropdown > .nav-link');

    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 992 && primaryNavigation.classList.contains('active')) {
                e.preventDefault();
                const parentDropdown = toggle.closest('.nav-item.dropdown');
                if (parentDropdown) {
                    if (!parentDropdown.classList.contains('open')) {
                        closeAllMobileSubmenus();
                    }
                    parentDropdown.classList.toggle('open');
                }
            }
        });
    });

    function closeAllMobileSubmenus() {
        document.querySelectorAll('#primary-navigation .nav-item.dropdown.open').forEach(openDropdown => {
            openDropdown.classList.remove('open');
        });
    }

    document.addEventListener('click', (event) => {
        if (primaryNavigation && primaryNavigation.classList.contains('active')) {
            const isClickInsideNav = primaryNavigation.contains(event.target);
            const isClickOnToggle = mobileNavToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle) {
                primaryNavigation.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
                closeAllMobileSubmenus();
            }
        }
    });


    // --- 3. Search Bar Toggle ---
    const searchToggle = document.querySelector('.search-toggle');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = searchBar ? searchBar.querySelector('input[type="search"]') : null;

    if (searchToggle && searchBar) {
        searchToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active') && searchInput) {
                searchInput.focus();
            }
        });

        document.addEventListener('click', (event) => {
            if (searchBar.classList.contains('active')) {
                const isClickInsideSearch = searchBar.contains(event.target);
                const isClickOnToggle = searchToggle.contains(event.target);

                if (!isClickInsideSearch && !isClickOnToggle) {
                    searchBar.classList.remove('active');
                }
            }
        });
        searchBar.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    } else {
        console.warn("Search toggle or search bar elements not found.");
    }

    // --- 4. Sticky Header Class ---
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }

    // --- 5. "Add to Cart" Functionality (Updated) ---
    function getCartFromLocalStorage() {
        const cart = localStorage.getItem('tilecraft-cart');
        return cart ? JSON.parse(cart) : {};
    }

    function saveCartToLocalStorage(cart) {
        localStorage.setItem('tilecraft-cart', JSON.stringify(cart));
    }
    
    function updateCartCount() {
        const cart = getCartFromLocalStorage();
        const cartItemCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cartItemCount;
            cartCountElement.style.display = cartItemCount > 0 ? 'flex' : 'none';
        }
    }

    // Using event delegation to handle dynamically added buttons
    document.addEventListener('click', (event) => {
        const button = event.target.closest('.add-to-cart-btn');
        if (!button) return;

        const productId = button.dataset.productId;
        const quantityInput = document.getElementById('product-quantity');
        const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
        
        const cart = getCartFromLocalStorage();
        if (cart[productId]) {
            cart[productId].quantity += quantity;
        } else {
            cart[productId] = {
                id: productId,
                quantity: quantity
            };
        }
        saveCartToLocalStorage(cart);
        updateCartCount();

        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.disabled = true;
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    });

    // --- Cart Page Rendering & Logic ---
    function renderCartPage() {
        const cart = getCartFromLocalStorage();
        const cartTableBody = document.getElementById('cart-table-body');
        const cartContainer = document.querySelector('.cart-container');
        const cartEmptyMessage = document.querySelector('.cart-empty');
        let subtotal = 0;
        const shippingCost = 15.00;

        if (!cartTableBody) return;

        cartTableBody.innerHTML = '';

        const productIds = Object.keys(cart);
        if (productIds.length === 0) {
            if (cartContainer) cartContainer.style.display = 'none';
            if (cartEmptyMessage) cartEmptyMessage.style.display = 'block';
        } else {
            if (cartContainer) cartContainer.style.display = 'flex';
            if (cartEmptyMessage) cartEmptyMessage.style.display = 'none';

            productIds.forEach(productId => {
                const item = cart[productId];
                const product = products[productId];
                if (product) {
                    const itemSubtotal = product.price * item.quantity;
                    subtotal += itemSubtotal;

                    const row = document.createElement('tr');
                    row.classList.add('cart-item');
                    row.dataset.productId = productId;
                    row.innerHTML = `
                        <td class="cart-item-image">
                            <a href="product-detail.html?id=${product.id}">
                                <img src="${product.image}" alt="${product.name}">
                            </a>
                        </td>
                        <td class="cart-item-details">
                            <a href="product-detail.html?id=${product.id}" class="cart-item-title">${product.name}</a>
                        </td>
                        <td class="cart-item-price">$${product.price.toFixed(2)}</td>
                        <td class="cart-item-quantity">
                            <div class="quantity-input">
                                <button class="qty-btn minus" aria-label="Decrease quantity">-</button>
                                <input type="number" value="${item.quantity}" min="1" step="1" aria-label="Quantity in square feet or units">
                                <button class="qty-btn plus" aria-label="Increase quantity">+</button>
                            </div>
                        </td>
                        <td class="cart-item-subtotal">$${itemSubtotal.toFixed(2)}</td>
                        <td class="cart-item-remove">
                            <button class="remove-item-btn" aria-label="Remove item">×</button>
                        </td>
                    `;
                    cartTableBody.appendChild(row);
                }
            });
            
            const summarySubtotalElement = document.querySelector('.summary-subtotal');
            const summaryShippingElement = document.querySelector('.summary-shipping');
            const summaryTotalElement = document.querySelector('.total-value');

            if (summarySubtotalElement) {
                summarySubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
            }
            if (summaryShippingElement) {
                summaryShippingElement.textContent = `$${subtotal > 0 ? shippingCost.toFixed(2) : '0.00'}`;
            }
            if (summaryTotalElement) {
                const total = subtotal > 0 ? subtotal + shippingCost : 0;
                summaryTotalElement.textContent = `$${total.toFixed(2)}`;
            }
        }
    }

    const cartTable = document.querySelector('.cart-table');
    if (cartTable) {
        cartTable.addEventListener('click', (event) => {
            const target = event.target;
            const row = target.closest('.cart-item');
            if (!row) return;
            const productId = row.dataset.productId;
            let cart = getCartFromLocalStorage();

            if (target.classList.contains('qty-btn')) {
                const input = row.querySelector('input[type="number"]');
                let newQuantity = parseInt(input.value);

                if (target.classList.contains('plus')) {
                    newQuantity++;
                } else if (target.classList.contains('minus')) {
                    newQuantity--;
                }

                if (newQuantity > 0) {
                    input.value = newQuantity;
                    cart[productId].quantity = newQuantity;
                } else {
                    delete cart[productId];
                }
                saveCartToLocalStorage(cart);
                renderCartPage();
                updateCartCount();

            } else if (target.classList.contains('remove-item-btn')) {
                delete cart[productId];
                saveCartToLocalStorage(cart);
                renderCartPage();
                updateCartCount();
            }
        });
    }
    
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
    
    updateCartCount();
    
    // --- 6. Footer Year Update ---
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // --- 7. Account Page Navigation Logic ---
    const accountNav = document.querySelector('.account-navigation');
    const accountPanels = document.querySelectorAll('.account-panel');

    if (accountNav && accountPanels.length > 0) {
        accountNav.addEventListener('click', (event) => {
            const targetLink = event.target.closest('.account-nav-link');
            if (targetLink && targetLink.getAttribute('href').startsWith('#')) {
                event.preventDefault();

                document.querySelectorAll('.account-nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                accountPanels.forEach(panel => {
                    panel.classList.remove('active');
                });

                targetLink.classList.add('active');
                const panelId = targetLink.dataset.panelId;
                const targetPanel = document.getElementById(panelId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            }
        });

        const initialPanelId = window.location.hash.substring(1) || 'dashboard';
        const initialLink = document.querySelector(`.account-nav-link[data-panel-id="${initialPanelId}"]`);
        const initialPanel = document.getElementById(initialPanelId);

        if (initialLink && initialPanel) {
            document.querySelectorAll('.account-nav-link').forEach(link => link.classList.remove('active'));
            document.querySelectorAll('.account-panel').forEach(panel => panel.classList.remove('active'));
            initialLink.classList.add('active');
            initialPanel.classList.add('active');
        }
    }

    // --- FAQ Page Accordion Logic ---
    const faqContainer = document.querySelector('.faq-container');
    if (faqContainer) {
        faqContainer.addEventListener('click', (event) => {
            const question = event.target.closest('.faq-question');
            if (question) {
                const answer = question.nextElementSibling;
                const activeQuestion = faqContainer.querySelector('.faq-question.active');

                if (activeQuestion && activeQuestion !== question) {
                    activeQuestion.classList.remove('active');
                    activeQuestion.nextElementSibling.style.maxHeight = '0';
                }
                
                question.classList.toggle('active');
                if (question.classList.contains('active')) {
                    answer.style.maxHeight = `${answer.scrollHeight}px`;
                } else {
                    answer.style.maxHeight = '0';
                }
            }
        });
    }

});
