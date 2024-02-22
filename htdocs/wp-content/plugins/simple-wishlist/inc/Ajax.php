<?php
/**
 * This file is part of the AmphiBee package.
 * (c) AmphiBee <contact@amhibee.fr>
 */


namespace SimpleWishlist;

class Ajax
{
    public function register()
    {
        add_action( 'wp_ajax_simple_wishlist_toggle', [$this, 'simple_wishlist_toggle'] );
        add_action( 'wp_ajax_nopriv_simple_wishlist_toggle', [$this, 'simple_wishlist_toggle'] );
    }
    
    public function simple_wishlist_toggle()
    {
        if(
            ! isset( $_REQUEST['nonce'] ) or
            ! wp_verify_nonce( $_REQUEST['nonce'], 'wishlist-toggle' ) or 
            ! get_current_user_id()
        ) {
            wp_send_json_error( "Error while performing this action", 403 );
        }

        $wishlist = get_user_meta(get_current_user_id(), 'wishlist') ?? [];
        
        if (!is_array($wishlist)) {
            $wishlist = [];
        }

        $product_id = $_POST['productid'];
        
        if (in_array($product_id, $wishlist)) {
            unset($wishlist[$product_id]);
        } else {
            $wishlist[] = (int) $product_id;
        }
        
        update_user_meta(get_current_user_id(), 'wishlist', $wishlist);

        $result = [
            'success' => true,
            'in_wishlist' => in_array((int) $product_id, $wishlist, true),
            'message' => 'Added to wishlist',
            'icon' => home_url('wp-content/plugins/simple-wishlist/public/assets/img/heart-active.png')
        ];
        
        wp_send_json_success( $result );
    }
}
