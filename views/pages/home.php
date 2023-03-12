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
                        <form id="search-form">

                            <input type="text" placeholder="Search..." id='searchA'>

                        </form>
    <div class="post-flex">

</div>