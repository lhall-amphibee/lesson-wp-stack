<?php
/**
 * Displays the post header
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

// Don't show the title if the post-format is `aside` or `status`.
$post_format = get_post_format();
if ( 'aside' === $post_format || 'status' === $post_format ) {
	return;
}
?>

<header class="entry-header">
	<?php
	the_title( sprintf( '<h2 class="entry-title default-max-width"><a href="%s">', esc_url( get_permalink() ) ), '</a></h2>' );
	twenty_twenty_one_post_thumbnail();
	?>
    <div class="meta-data flex justify-between">
        <?php
        $area_object = get_field_object('area');
        $choices = $area_object['choices'];
        $value = get_field('area');
        ?>
        <div class="project-area"><?php echo $choices[$value]; ?></div>
        <div class="project-date"><?php echo get_post_meta(get_the_ID(), 'custom_date_field', true) ?></div>
    </div>
</header><!-- .entry-header -->
