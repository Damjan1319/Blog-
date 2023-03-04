<?php
if (isset($_GET['post'])) :
    $post = getSinglePost($_GET['post']);
    $comment = getCommentsForBlog($_GET['post']);
    $commentData = getCommentContent($_GET['post']);
?>
    <div id="post-1">

        <!-- Post -->
        <article class="post postMax">
            <header>
                <div class="title">
                    <h2><a href="#"><?= $post[0]->title ?></a></h2>
                    <p><?= $post[0]->content ?></p>
                </div>
                <div class="meta">
                    <time class="published"><?= $post[0]->created_at ?></time>
                    <a href="#" class="author"><span class="name"><?= $post[0]->username ?></span><img src="images/avatar.jpg" alt="" /></a>
                </div>
            </header>
            <span class="image featured"><img src="assets/images/<?= $post[0]->images ?>" alt="" /></span>

            <footer>
                <ul class="stats">
                    <li><a class="icon solid fa-heart likes" ss="<?= $post[0]->blog_ID ?>" id="b<?= $post[0]->blog_ID ?>"><?= getLikes($post[0]->blog_ID)->Num ?></a></li>
                    <?php if (isset($_SESSION['user'])) : ?>
                        <input type="hidden" id="like" value="<?= $_SESSION['user']->ID ?>">
                    <?php endif ?>
                    <li><a href="#" class="icon solid fa-comment"><?= $comment[0]->Num ?></a></li>
                </ul>
            </footer>
        </article>
        <?php if (isset($_SESSION['user'])) : ?>
            <form action="models/insert_comment.php" method="post">
                <input type="hidden" value="<?= $_SESSION['user']->ID ?>" name="user">
                <input type="hidden" value="<?= $_GET['post'] ?>" name="post">
                <label for="subject">Comment</label>
                <textarea id="subject" name="comment" placeholder="Write something.." style="height:200px"></textarea>
                <input type="submit" value="Send comment">
            </form>

        <?php endif; ?>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Recent Comments</h4>
            </div>

            <div class="comment-widgets m-b-20">
                <?php
                foreach ($commentData as $comm) :
                ?>
                    <div class="d-flex flex-row comment-row">
                        <div class="p-2"><span class="round"><img src="assets/images/<?= $comm->image ?>" alt="user" width="50"></span></div>
                        <div class="comment-text w-100">
                            <h5><?= $comm->username ?></h5>
                            <div class="comment-footer">
                                <span class="date"><?= $comm->created_at ?></span>

                            </div>
                            <p class="m-b-5 m-t-10"><?= $comm->content ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

    </div>
    </div>
    </div>

    </div>
<?php endif;
if (!isset($_GET['post'])) {
    echo ('<h1>IZABERI POST<h1>');
}
?>