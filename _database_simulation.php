<?php
// --- Simulated Database (Replace with actual DB connection and queries) ---

function get_products_db() {
    // In a real app, this would query your database
    return [
        1 => [
            'id' => 1,
            'name' => 'Antique Black Marble Tile',
            'description' => 'A luxurious black marble tile with subtle white veining. A classic choice for high-end interiors.',
            'price' => 5.10, // Per sq. ft
            'image' => 'images/antiqueBlack.jpg',
            'category' => 'Floor Tiles',
            'dimensions' => '12x24 inches'
        ],
        2 => [
            'id' => 2,
            'name' => 'Red Marble Rosso Levanto',
            'description' => 'Rich red marble effect tile with striking white veins. Adds a touch of vintage luxury to any space.',
            'price' => 4.66,
            'image' => 'images/redMarble.jpg',
            'category' => 'Wall Tiles',
            'dimensions' => '24x48 inches'
        ],
        3 => [
            'id' => 3,
            'name' => 'Green Marble Verde Aqua',
            'description' => 'Subtle green marble look with delicate patterns. Ideal for serene and elegant bathroom designs.',
            'price' => 2.80,
            'image' => 'images/greenMarble.jpg',
            'category' => 'Wall Tiles',
            'dimensions' => '12x24 inches'
        ],
        4 => [
            'id' => 4,
            'name' => 'Glossy White Subway Tile',
            'description' => 'A timeless classic. This glossy white subway tile is a clean, versatile choice for kitchens and baths.',
            'price' => 2.80,
            'image' => 'images/glossyWhite.jpg',
            'category' => 'Wall Tiles',
            'dimensions' => '3x6 inches'
        ],
        5 => [
            'id' => 5,
            'name' => 'Outdoor Textured Stone',
            'description' => 'Extremely durable textured stone-look tile, perfect for patios, walkways, and other outdoor areas.',
            'price' => 4.25,
            'image' => 'images/outdoorTextured.jpg',
            'category' => 'Outdoor Tiles',
            'dimensions' => '16x16 inches'
        ],
        6 => [
            'id' => 6,
            'name' => 'Blue Mosaic Accent Tile',
            'description' => 'A vibrant blue glass mosaic tile for creating stunning accent walls, backsplashes, and borders.',
            'price' => 5.60,
            'image' => 'images/blueMosaic.jpg',
            'category' => 'Mosaics',
            'dimensions' => '12x12 inches sheet'
        ],
        7 => [
            'id' => 7,
            'name' => 'Terraelino Concrete Tile',
            'description' => 'A modern concrete-look tile with a soft, matte finish. Ideal for a minimalist or industrial aesthetic.',
            'price' => 3.50,
            'image' => 'images/terraelinoMenta.jpg',
            'category' => 'Floor Tiles',
            'dimensions' => '24x24 inches'
        ],
        8 => [
            'id' => 8,
            'name' => 'Matte Finish Grey Tile',
            'description' => 'A versatile matte grey porcelain tile, perfect for modern floors and walls.',
            'price' => 4.35,
            'image' => 'images/matteFinishGrey.jpg',
            'category' => 'Floor Tiles',
            'dimensions' => '12x24 inches'
        ],
        9 => [
            'id' => 9,
            'name' => 'Statuario Natural',
            'description' => 'A classic white marble tile with beautiful gray veining, inspired by Italian marble.',
            'price' => 4.35,
            'image' => 'https://nexiontiles.com/wp-content/uploads/2021/04/statuario-naturale-1.jpg',
            'category' => 'Wall Tiles',
            'dimensions' => '24x48 inches'
        ],
        10 => [
            'id' => 10,
            'name' => 'Breccia Capraia',
            'description' => 'A light tile with a swirling pattern of beige, grey, and brown tones, adding warmth and sophistication.',
            'price' => 4.35,
            'image' => 'https://nexiontiles.com/wp-content/uploads/2021/04/breccia-capraia-naturale.jpg',
            'category' => 'Floor Tiles',
            'dimensions' => '24x24 inches'
        ],
        11 => [
            'id' => 11,
            'name' => 'Marquina Natural',
            'description' => 'A rich, dark tile with delicate white veins, creating a dramatic and elegant look.',
            'price' => 4.35,
            'image' => 'https://nexiontiles.com/wp-content/uploads/2021/04/marquina-naturale.jpg',
            'category' => 'Wall Tiles',
            'dimensions' => '24x48 inches'
        ],
        12 => [
            'id' => 12,
            'name' => 'Travertino Natural',
            'description' => 'A natural-look tile inspired by classic travertine stone, featuring warm, earthy tones.',
            'price' => 4.35,
            'image' => 'https://nexiontiles.com/wp-content/uploads/2021/04/travertino-naturale.jpg',
            'category' => 'Outdoor Tiles',
            'dimensions' => '12x24 inches'
        ]
    ];
}

function get_product_by_id($id) {
    $products = get_products_db();
    return $products[$id] ?? null;
}
