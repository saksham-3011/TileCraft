<?php
// THIS FILE HANDLES CART ACTIONS AND REDIRECTS - IT DOESN'T DISPLAY HTML

session_start(); // Start session management MUST BE FIRST
require_once '_database_simulation.php'; // Need product info

// Initialize cart if it doesn't exist
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// Basic input validation
$action = filter_input(INPUT_POST, 'action', FILTER_SANITIZE_STRING);
$product_id = filter_input(INPUT_POST, 'product_id', FILTER_VALIDATE_INT);
$quantity = filter_input(INPUT_POST, 'quantity', FILTER_VALIDATE_INT);

if (!$action || !$product_id) {
    // Invalid request, redirect somewhere safe
    header('Location: products_display.php');
    exit;
}

// Ensure quantity is at least 1 for add/update actions
if (($action === 'add' || $action === 'update') && $quantity < 1) {
    $quantity = 1;
}

// Check if product actually exists (important!)
$product = get_product_by_id($product_id);

if (!$product && ($action === 'add' || $action === 'update')) {
     // Product doesn't exist, redirect with error? For now, just go back.
     header('Location: products_display.php');
     exit;
}


// --- Perform Action ---
switch ($action) {
    case 'add':
        if (isset($_SESSION['cart'][$product_id])) {
            // Product already in cart, increase quantity
            $_SESSION['cart'][$product_id]['quantity'] += $quantity;
        } else {
            // Add new product to cart
            $_SESSION['cart'][$product_id] = [
                'id' => $product_id,
                'quantity' => $quantity
                // We can store name/price here too, or look them up during display
                // 'name' => $product['name'],
                // 'price' => $product['price']
            ];
        }
        // Optional: Set a success message in session
        $_SESSION['message'] = htmlspecialchars($product['name']) . " added to cart.";
        break;

    case 'update':
        if (isset($_SESSION['cart'][$product_id])) {
             if ($quantity > 0) {
                $_SESSION['cart'][$product_id]['quantity'] = $quantity;
                $_SESSION['message'] = "Cart updated.";
             } else {
                 // If quantity is 0 or less, treat as remove
                 unset($_SESSION['cart'][$product_id]);
                 $_SESSION['message'] = "Item removed from cart.";
             }
        }
        break;

    case 'remove':
        if (isset($_SESSION['cart'][$product_id])) {
            unset($_SESSION['cart'][$product_id]);
            $_SESSION['message'] = "Item removed from cart.";
        }
        break;

    default:
        // Unknown action
        break;
}

// --- Redirect ---
// Redirect back to the cart page after action
header('Location: cart_display.php');
exit; // Important: stop script execution after redirect

?>
