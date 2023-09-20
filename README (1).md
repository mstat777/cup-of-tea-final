# CUP OF TEA

## projet de fin de formation FSJS

L'objectif est de concevoir une application complète en utilisant un maximum des compétences acquises au cours de cette formation.

Les maquettes sont fournis.
**modifier la nav en :** *accueil | thés | about | connexion*
**qui devra bien entendu être dynamique**

Commencez par réaliser un MCD puis créez votre base de données et y insérez les données via phpMyAdmin.

Les urls (dans le front) devront être sexy ! Prévoir un champs supplémentaire pour ça :
*ex: http://localhost:3000/produit/thé-noir/1* mieux que *http://localhost:3000/produit/1*
> indiquera qu'on est sur la page du produit thé noir avec l'id, donc la récupération en BDD de ce thé devra se faire sous condition de 2 champs, nom du produit ET (id ou uuid)
ça limitera également les accès en changeant l'id dans l'url.


Installer React + NodeJS, et les modules requis

React permettra le routing sur les pages : 
- **accueil** *maquette home*
- **thés** *maquette listing*
- **thé** *maquette product* (page dynamique)
- **about** *maquette about*
- **connexion | création compte** 

La page d'accueil devra afficher :
- la nouveauté (dernier thé inséré)
- le best-seller (celui qui a été le plus commandé)
- le coup de coeur (champ géré en bdd)

La page "thés" présente **tous les thés rangés par catégorie**.

La page "thé", permettra le choix du conditionnement et de l'ajout au panier.

La page about :
- niveau facile, insertion dans le composant du contenu en brut
- niveau avancée, insertion dynamique ; le contenu est stocké dans un objet JS (ou JSON) dans un fichier séparé et inséré dynamiquement, on doit pouvoir écrire dans l'objet et le composant injectera le contenu dynamiquement !

**L'authentification :**
Un utilisateur doit pouvoir créer un compte, se connecter et visualiser ses commandes antérieures.
La sécurité à des routes spécifique de l'utilisateur se fera via un token (**module jsonwebtoken**).

**Le panier** 
Sa gestion se fait grâce à un reducer et est stocké dans le localstorage.
Y accéder permettra de visualiser son contenu et on pourra alors valider la commande, ce qui enverra l'intégralité du panier en base de données et videra le localstorage.

Le css :

- FONT -> Amaranth
- **css-module**
ou 
- **styled-components**

## BONUS 

**BACK-OFFICE**
Celui ci permettra le crud des thés et la visualisation des commandes. Seul un utilisateur authentifié en tant qu'administrateur aura accès à ces fonctionnalités.

**STRIPE**
API pour la gestion des paiements
https://stripe.com/fr