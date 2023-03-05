<?php
$blogs = getBlogData();
if (isset($_SESSION['user'])) {
}
?>
<?php if (isset($_GET["error"])) {  ?>
    <div class="alert alert-danger"> <?php echo $_GET["error"] ?> </div>
<?php } ?>
<?php if (isset($_GET["success"])) {  ?>
    <div class="alert alert-success"> <?php echo $_GET["success"] ?> </div>
<?php } ?>

<div class="post-flex">
    <?php
    foreach ($blogs as $blog) :
        $comment = getCommentsForBlog($blog->blog_ID);;
    ?>


        <article class="post">

            <header>
                <div class="title">
                    <h2><a href=""><?= $blog->title ?></a></h2>
                    <!-- <p><?= $blog->content ?></p> -->
                </div>

                <div class="meta">
                    <time class="published" datetime="${dateTime[i]}"><?= $blog->created_at ?></time>
                    <a href="#" class="author"><span class="name">
                            <?= $blog->username ?>
                        </span><img src="assets/images/<?= $blog->image ?>" alt="${avatarImgAltTag[i]}" /></a>
                </div>
            </header>

            <a href="index.php?page=single&post=<?= $blog->blog_ID ?>" class="image featured"><img src="assets/images/<?= $blog->images ?>" alt="${postImgAltTag[i]}" /></a>
            <p><?= $blog->content ?></p>
            <footer>
                <ul class="actions">
                    <li><a href="index.php?page=single&post=<?= $blog->blog_ID ?>" class="button large">See Post</a></li>
                </ul>
                <ul class="stats" id='footerPost'>
                    <li><a class=" icon solid fa-heart likes" id="b<?= $blog->blog_ID ?>" ss="<?= $blog->blog_ID ?>"><?= getLikes($blog->blog_ID)->Num ?></a></li>
                    <?php if (isset($_SESSION['user'])) : ?>
                        <input type="hidden" id="like" value="<?= $_SESSION['user']->ID ?>">
                    <?php endif ?>
                    <li><a href="index.php?page=single&post=<?= $blog->blog_ID ?>" class="icon solid fa-comment"><?=
                                                                                                                    $comment[0]->Num ?></a></li>
                </ul>
            </footer>
        </article>

    <?php endforeach; ?>
</div>