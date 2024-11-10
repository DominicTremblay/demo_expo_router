# Expo Router

- Le système de navigation ne vient pas inclus avec React Native
- On doit utiliser une librairie pour faire la navigation dans notre app


## Le routeur Expo

Le routeur Expo est une bibliothèque de navigation, se superposant à React Native Navigation, qui utilise un système de routage basé sur la structure des fichiers, simplifiant la création et la gestion des écrans et des itinéraires.

- le nom des dossiers et des fichiers représente la structure de la route
- Exemple:

```md
/app
  index.js          ->  /
  accueil.js        ->  /accueil
  /publications
    index.js        ->  /publications
    [publicationId] ->  /publications/1
```

## Installation

`npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`

- [Reference:](https://docs.expo.dev/router/installation/)

- 1. Changer le point d'entree dans `package.json`

`"main": "expo-router/entry"`

- 2. Déplacer `App.js` dans le dossier `app` (créer le dossier `app`)
- 3. Renommer `App.js` pour `index.js`
- 4. Ajouter un scheme dans `App.json` (URL pour applications externes monApp://)

```json
  "scheme":"monApp"
```

## Créer le fichier layout

- 1. Créer `app/_layout`

```js
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
    </Stack>
  )
}

export default Layout
```

## Navigation

### Navigation Stack

La navigation stack (pile) est une méthode de navigation en React Navigation qui organise les écrans dans une pile, où chaque nouvel écran s'empile au-dessus du précédent, permettant de revenir en arrière avec un comportement de "pile LIFO" (dernier entré, premier sorti).


```
+-----------------------+
| Profil utilisateur    |
| (écran actuel)        |
+-----------------------+
           ▲
+-----------------------+
| Détails du film       |
|                       |
+-----------------------+
           ▲
+-----------------------+
| Liste des films       |
|                       |
+-----------------------+
           ▲
+-----------------------+
| Accueil               |
| (écran de départ)     |
+-----------------------+
```

### Navigation Tabs

- Tabs dans le bas de l'écran

## Facons de naviguer

- Avec Link
- Avec le hook useRouter

