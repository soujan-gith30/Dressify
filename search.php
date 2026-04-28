<?php
// Establish a database connection (Replace with your database credentials)
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the user's search query
if (isset($_GET['query'])) {
    $searchQuery = $_GET['query'];

    // Perform a database query to search for matching items
    $sql = "SELECT * FROM products WHERE name LIKE '%$searchQuery%' OR description LIKE '%$searchQuery%'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Display search results
        while ($row = $result->fetch_assoc()) {
            echo "Product Name: " . $row['name'] . "<br>";
            echo "Description: " . $row['description'] . "<br><br>";
        }
    } else {
        echo "No results found.";
    }

    $conn->close();
}
?>
