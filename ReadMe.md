## Instructions

## Etape 1 : Connection

- Créer un fichier `index.js`
- Connectez-vous à la base de données `mongoose_populate`

## Etape 2 : Modèles

- Créer les modèles qui correspondent au diagramme de classe dans le dossier `models`
- Dans le schéma du modèle `Student` ajouter la référence au modèle `Address`

## Etape 3 : Création en cascade

- Créer en base de données une adresse et récupérer son ID dans la variable `addressId`
- Créer en base de données un.e étudiant.e en incluant l’`addressId` dans la clé `address` du modèle `Student`

## Etape 4 : Récupération

- Avec la méthode `populate` de Mongoose, récupérer à partir de l’ID de l’étudiant un objet avec les informations de l’étudiant et dans la clé `address` on a un objet qui contient les informations de l’adresse liée.
