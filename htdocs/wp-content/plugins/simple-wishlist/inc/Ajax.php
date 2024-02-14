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
        add_action( 'wp_ajax_simple_wishlist_toggle', 'simple_wishlist_toggle' );
    }
    
    public function simple_wishlist_toggle()
    {
        if(
            ! isset( $_REQUEST['nonce'] ) or
            ! wp_verify_nonce( $_REQUEST['nonce'], 'wishlist-toggle' )
        ) {
            wp_send_json_error( "Error while performing this action", 403 );
        }

        $result = [
            'message' => 'Added to wishlist',
            'icon' => home_url('wp-content/plugins/simple-wishlist/public/assets/img/heart-active.png')
        ];
        wp_send_json_success( $result );
    }
}
