# Progetto Finale

<p align="center">
<img src="https://github.com/kinderp/progetto_finale/blob/main/images/progetto_finale.gif" width="500" height="300" align="center">
</p>

<p align="justify">
Questo repository contiene un esempio di progetto presentabile al colloquio orale.

Il candidato dovrebbe dimostrare di essere in grado di progettare __una semplice applicazione web__ completa di server ed interfaccia grafica. L'applicazione lato back-end dovrebbe esporre __quattro metodi HTTP__:
</p>

1. __GET__: per recuperare una risorsa o la lista delle risorse
2. __POST__: per aggiungere una risorsa
3. __DELETE__: per elimnare una risorsa
4. __PUT__: per aggiornare una risorsa

<p align="justify">
L'interfaccia grafica dovrebbe essere realizzata in <b>HTML/CSS/Javascript</b> ed essere in grado di interagire senza errori con il server.
</p>

## Il progetto d'esempio
<p align="justify">
Questo progetto implementa una semplice applicazione per prendere nota delle domande richieste dalla commissione durante le prove orali.
La HOME (immagine sotto) presenta tre bottoni. Il bottone centrale permette di accedere alla pagina per <b>l'aggiunta di una nuova domanda</b>,
il bottone a destra porta alla pagina che presenta <b>la lista di tutte le domande</b> di cui si è preso nota (le domande in questa pagina possono
essere eliminate o modificate). Il bottone di sinistra preleva <b>una domanda a caso e la mostra sopra i bottoni</b> (da usare per testare la propria preparazione)
</p>

<p align="center">
<img src="https://github.com/kinderp/progetto_finale/blob/main/images/home.jpg" width="300" height="400">
</p>

<p align="justify">
La pagina di aggiunta di una domanda presenta un semplice form HTML dove aggiungere la domanda, la risposta ed un punteggio relativo alla qualità della risposta data dal candidato secondo la commissione
</p>

<p align="center">
<img src="https://github.com/kinderp/progetto_finale/blob/main/images/add.jpg" width="300" height="400">
</p>

<p align="justify">
La pagina della lista di tutte le domande prevede per ogni elemento della lista due bottoni per eliminare ed aggiornare la domanda corrente. Cliccando sul bottone edit si apre una finestra dove sarà possibile modificare i dati precedentemente inseriti. La domanda è eliminata cliccando sul bottone delete.
</p>

<p align="center">
<img src="https://github.com/kinderp/progetto_finale/blob/main/images/list.jpg" width="300" height="400">
</p>

<p align="center">
<img src="https://github.com/kinderp/progetto_finale/blob/main/images/edit.jpg" width="300" height="400">
</p>

## How to run
Per installare le dipendenze ([express.js](https://expressjs.com/) e [sqlite3](https://www.npmjs.com/package/sqlite3)) lanciare `npm install`. Al termine dell'installazione è necessario inizializzare il database con `node create_db.js`. Infine, lanciare il server con `node server.js`

```
npm install
node create_db.js
node server.js
```

Una volta startato il server far puntare il proprio browser al seguente link: http://localhost:8888 
