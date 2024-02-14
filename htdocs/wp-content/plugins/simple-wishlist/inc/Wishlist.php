<?php
/**
 * This file is part of the AmphiBee package.
 * (c) AmphiBee <contact@amhibee.fr>
 */


namespace SimpleWishlist;

class Wishlist
{
    public function register()
    {
        add_action('woocommerce_after_add_to_cart_button', function () {
            ?>
            <a
                class="wishlist-add-product" href="#"
                data-productid="<?php echo get_the_ID(); ?>"
                data-nonce="<?php echo wp_create_nonce('wishlist-toggle'); ?>"
                data-action="wishlist-add"
            >
                <img src="<?php echo home_url('wp-content/plugins/simple-wishlist/public/assets/img/heart.png') ?>" alt="Not in wishlist" height="60px" >
            </a>
            <?php
        });
        
        add_action('wp_enqueue_scripts', function () {
            wp_enqueue_script(
                'simple-wishlist',
                home_url('wp-content/plugins/simple-wishlist/public/assets/js/simple-wishlist.js'), [],
                '1.0',
                true
            );
            
            wp_enqueue_style(
                'simple-wishlist',
                home_url('wp-content/plugins/simple-wishlist/public/assets/css/simple-wishlist.css'), [],
                '1.0',                
            );
        });
    }
}
