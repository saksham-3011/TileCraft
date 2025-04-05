<?php
// --- Simulated Database (Replace with actual DB connection and queries) ---

function get_products_db() {
    // In a real app, this would query your database
    return [
        1 => [
            'id' => 1,
            'name' => 'Matte Finish Grey Tile',
            'description' => 'A versatile matte grey porcelain tile, perfect for modern floors and walls.',
            'price' => 3.50, // Per sq ft or unit
            'image' => 'https://nexiontiles.com/wp-content/uploads/2022/09/gabbro_sfumato_minimale.jpg',
            'category' => 'Floor Tiles',
            'dimensions' => '12x24 inches'
        ],
        2 => [
            'id' => 2,
            'name' => 'Red Marble Rosso Levanto',
            'description' => 'Rich red marble effect tile with striking veins. Adds luxury to any space.',
            'price' => 4.66, // Per sq ft or unit
            'image' => 'https://nexiontiles.com/wp-content/uploads/2021/06/rosso-levanto-naturale.jpg',
            'category' => 'Wall Tiles',
            'dimensions' => '24x48 inches'
        ],
        3 => [
            'id' => 3,
            'name' => 'Green Marble Verde Aqua',
            'description' => 'Subtle green marble look with delicate patterns. Ideal for bathrooms.',
            'price' => 2.80, // Per sq ft or unit
            'image' => 'https://nexiontiles.com/wp-content/uploads/2022/09/signature_quarzo_verde_acqua_minimale.jpg',
            'category' => 'Wall Tiles',
            'dimensions' => '12x24 inches'
        ],
        4 => [
            'id' => 4,
            'name' => 'Glossy White Subway Tile',
            'description' => 'Classic and clean glossy white subway tile. Timeless choice for kitchens and baths.',
            'price' => 2.80, // Per sq ft or unit
            'image' => 'https://nexiontiles.com/wp-content/uploads/2021/04/statuario-naturale-1.jpg',
            'category' => 'Wall Tiles',
            'dimensions' => '3x6 inches'
        ],
        5 => [
            'id' => 5,
            'name' => 'Outdoor Textured Stone',
            'description' => 'Durable textured stone-look tile, perfect for patios and outdoor areas.',
            'price' => 4.25, // Per sq ft or unit
            'image' => 'https://nexiontiles.com/wp-content/uploads/2021/06/runa-black.jpg',
            'category' => 'Outdoor Tiles',
            'dimensions' => '16x16 inches'
        ],
        6 => [
            'id' => 6,
            'name' => 'Blue Mosaic Accent Tile',
            'description' => 'Vibrant blue glass mosaic tile for creating stunning accent walls or backsplashes.',
            'price' => 5.60, // Per sq ft or sheet
            'image' => 'https://nexiontiles.com/wp-content/uploads/2021/06/terraelino_ginepro.jpg',
            'category' => 'Mosaics',
            'dimensions' => '12x12 inches sheet'
        ],
    ];
}

function get_product_by_id($id) {
    $products = get_products_db();
    return $products[$id] ?? null; // Return null if ID not found
}

?>
