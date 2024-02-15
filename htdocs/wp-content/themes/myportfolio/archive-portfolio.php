<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();

$description = get_the_archive_description();
?>

    <header class="page-header alignwide">
        <?php the_archive_title( '<h1 class="page-title">', '</h1>' ); ?>
        <?php if ( $description ) : ?>
            <div class="archive-description"><?php echo wp_kses_post( wpautop( $description ) ); ?></div>
        <?php endif; ?>
        
        <?php \Portfolio\Filters::display(); ?>
    </header><!-- .page-header -->

<?php if ( have_posts() ) : ?>

    <div class="grid grid-2">
        <?php while ( have_posts() ) : ?>
            <?php the_post(); ?>
            <?php get_template_part( 'template-parts/content/content-portfolio', get_theme_mod( 'display_excerpt_or_full_post', 'excerpt' ) ); ?>
        <?php endwhile; ?>
    </div>

    <?php twenty_twenty_one_the_posts_navigation(); ?>

<?php else : ?>
    <?php get_template_part( 'template-parts/content/content-none' ); ?>
<?php endif; ?>

<?php
get_footer();
