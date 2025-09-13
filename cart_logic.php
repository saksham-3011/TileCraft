<?php
// THIS FILE HANDLES CART ACTIONS AND REDIRECTS - IT DOESN'T DISPLAY HTML

session_start();
require_once '_database_simulation.php';

// Initialize cart if it doesn't exist
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// Basic input validation
$action = filter_input(INPUT_POST, 'action', FILTER_SANITIZE_STRING);
$product_id = filter_input(INPUT_POST, 'product_id', FILTER_VALIDATE_INT);
$quantity = filter_input(INPUT_POST, 'quantity', FILTER_VALIDATE_INT);

if (!$action || !$product_id) {
    header('Location: products_display.php');
    exit;
}

if (($action === 'add' || $action === 'update') && $quantity < 1) {
    $quantity = 1;
}

// Check if product actually exists (important!)
$product = get_product_by_id($product_id);

if (!$product && ($action === 'add' || $action === 'update')) {
     header('Location: products_display.php');
     exit;
}


// --- Perform Action ---
switch ($action) {
    case 'add':
        if (isset($_SESSION['cart'][$product_id])) {
            $_SESSION['cart'][$product_id]['quantity'] += $quantity;
        } else {
            $_SESSION['cart'][$product_id] = [
                'id' => $product_id,
                'quantity' => $quantity
            ];
        }
        $_SESSION['message'] = htmlspecialchars($product['name']) . " added to cart.";
        break;

    case 'update':
        if (isset($_SESSION['cart'][$product_id])) {
             if ($quantity > 0) {
                $_SESSION['cart'][$product_id]['quantity'] = $quantity;
                $_SESSION['message'] = "Cart updated.";
             } else {
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
        break;
}

// --- Redirect ---
header('Location: cart_display.php');
exit;
