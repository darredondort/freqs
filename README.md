# freqs
Simple word analysis tool. Count word frequencies in txt and export to csv.


Based on [@waltfy / word-freq](https://github.com/waltfy/word-freq)

___ 

## Install:
Install [Node.js](https://nodejs.org/en/download/) 

Clone or download repo.
```
git clone https://github.com/darredondort/freqs.git
```

Change directory to *freqs*.

```
cd freqs
```

Install npm dependencies
```
npm install
```
___

## Usage

Paste text into `input.txt` file.

Run main script
```
npm start
```

Resulting frequencies, word table stored in `freqs.csv`
| freq        | word           |
| ------------- |:-------------:|
|       12       |      la         |
|      10        |      cucaracha  |
|       9        |      no         |
|       8        |      porque     |


____

## Roadmap

### 0.0.1:
- Import text string from `.txt`.
- Count word frecuencies in string with [word-freq](https://github.com/waltfy/word-freq).
- Parse and export `.csv`.


### Backlog:
 - Sort frequencies list from highest to lowest.
 - Remove conflicting accents and special characters.
 - Check for and remove English and Spanish stopwords.
 - CLI version.
 
____

## License

[MIT © Diego Arredondo](../LICENSE)
