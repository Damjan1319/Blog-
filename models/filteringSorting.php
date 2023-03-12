<?php

header('content:aplication/json');
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    include('../config/conection.php');
    try {
        $query = "SELECT * FROM `blogs` AS b INNER JOIN `users` u ON b.author_ID = u.ID WHERE `u`.`status` = 1";

        $params = [];

        if (isset($_GET['search'])) {

            $query .= " AND (`b`.`title` LIKE ?)";

            $search = "%" . $_GET['search'] . "%";

            array_push($params, $search);
        }


//$orderValues = ['1', '2', '3', '4'];
//
//if (isset($_GET['sortOrder'])) {
//
//    $order = $_GET['sortOrder'];
//
//    if (in_array($order, $orderValues)) {
//
//        $text = '';
//
//        switch ($order) {
//
//            case '1':
//
//                $text = "p.imeProdukta";
//
//                break;
//
//                case '2':
//
//                    $text = "p.imeProdukta DESC";
//
//                    break;
//
//                    case '3':
//
//                        $text = "c.nova";
//
//                        break;
//
//                        case '4':
//
//                            $text = "c.nova DESC";
//
//                            break;
//
//        }
//
//        $query .= " ORDER BY $text";
//
//    }
//
//}

// executing the query

global $conn;

        $exec = $conn->prepare($query);

        $exec->execute($params);

        $result = $exec->fetchAll();

        $numOfBlogs = count($result);

        // getting only 6 blogs

$blogsPerPage = $_GET['blogsPerPage'];

$page = ($_GET['page'] - 1) * $blogsPerPage;

$blogs = [];

for ($i = $page; $i < $blogsPerPage + $page; $i++) {

    if ($i >= count($result)) break;

    array_push($blogs, $result[$i]);

}

// response

$response = ['blogs' => $blogs, 'num' => $numOfBlogs];

echo json_encode($response);

http_response_code(200);

    } catch (PDOException $ex) {
        http_response_code(500);
    }
} else {
    http_response_code(404);
}



