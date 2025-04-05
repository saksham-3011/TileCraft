<?php
require_once '_database_simulation.php';

// Basic input validation
$product_id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
$product = null;

if ($product_id) {
    $product = get_product_by_id($product_id);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tile Details (PHP Demo)</title>
     <style>
        /* Basic styling for demo */
        .detail-container { display: flex; gap: 20px; }
        .detail-image img { max-width: 300px; height: auto; }
        .detail-info { flex-grow: 1; }
    </style>
</head>
<body>

    <p><a href="products_display.php">< Back to Products</a></p>

    <?php if ($product): ?>
        <h1><?php echo htmlspecialchars($product['name']); ?></h1>
        <div class="detail-container">
            <div class="detail-image">
                <img src="<?php echo htmlspecialchars($product['image']); ?>" alt="<?php echo htmlspecialchars($product['name']); ?>">
            </div>
            <div class="detail-info">
                <p><strong>Category:</strong> <?php echo htmlspecialchars($product['category']); ?></p>
                <p><strong>Description:</strong> <?php echo htmlspecialchars($product['description']); ?></p>
                <p><strong>Dimensions:</strong> <?php echo htmlspecialchars($product['dimensions']); ?></p>
                <p><strong>Price:</strong> $<?php echo number_format($product['price'], 2); ?> / sq ft</p>

                <!-- Add to Cart Form -->
                <form action="cart_logic.php" method="post">
                    <input type="hidden" name="action" value="add">
                    <input type="hidden" name="product_id" value="<?php echo $product['id']; ?>">
                    <label for="quantity">Quantity (sq ft/units):</label>
                    <input type="number" id="quantity" name="quantity" value="1" min="1" required style="width: 60px;">
                    <br><br>
                    <button type="submit">Add to Cart</button>
                </form>
            </div>
        </div>

    <?php else: ?>
        <h1>Product Not Found</h1>
        <p>Sorry, the tile you requested could not be found.</p>
    <?php endif; ?>

</body>
</html>
