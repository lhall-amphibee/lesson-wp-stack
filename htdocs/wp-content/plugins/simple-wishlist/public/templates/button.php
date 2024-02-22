<a
    class="wishlist-add-product" href="#"
    data-productid="<?php echo get_the_ID(); ?>"
    data-nonce="<?php echo wp_create_nonce('wishlist-toggle'); ?>"
    data-action="wishlist-add"
>
    <img src="<?php echo home_url('wp-content/plugins/simple-wishlist/public/assets/img/heart.png') ?>" alt="Not in wishlist" height="60px" >
</a>
