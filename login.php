<?php
// Démarrer la session
session_start();

// Vérification si l'utilisateur est déjà connecté
if (isset($_SESSION['user_logged_in']) && $_SESSION['user_logged_in'] === true) {
    header("Location: dashboard.php"); // Rediriger vers le tableau de bord si déjà connecté
    exit;
}

// Traitement du formulaire de connexion
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];  // Récupérer le nom d'utilisateur
    $password = $_POST['password'];  // Récupérer le mot de passe

    // Vérification de l'utilisateur (à remplacer par une vérification avec une base de données)
    if ($username == "user" && $password == "password") {
        // Connexion réussie, créer une variable de session
        $_SESSION['user_logged_in'] = true;
        $_SESSION['username'] = $username;

        // Rediriger vers une page protégée après la connexion réussie
        header("Location: dashboard.php");
        exit;
    } else {
        echo "Nom d'utilisateur ou mot de passe incorrect.";
    }
}
?>

<!-- Formulaire de connexion -->
<form method="post">
    <label for="username">Nom d'utilisateur :</label>
    <input type="text" name="username" id="username" required>
    <br>
    <label for="password">Mot de passe :</label>
    <input type="password" name="password" id="password" required>
    <br>
    <button type="submit">Se connecter</button>
</form>
