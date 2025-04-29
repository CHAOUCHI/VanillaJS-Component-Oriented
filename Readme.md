# Balise Dynamique en JS

Lors de la conception d'un front end, il est important de diviser la logique en plusieurs parties.

Il y a principalement 2 parties:
- la base de données (Service)
- l'interface utilisateur (UI).

J'aurai donc un objet `TaskService` qui contient toutes les fonctions permettant d'accéder au localStorage. 

Et un objet UI contenant toutes les fonctions permettant d'ajouter des nouvelles balises à l'écran. 

L'objet UI utilise la balise `template` qui est une technologie très intéressante pour cloner des du HTML. 

> Voir le point 7 du cours sur le DOM pour le detail sur la balise `template`

