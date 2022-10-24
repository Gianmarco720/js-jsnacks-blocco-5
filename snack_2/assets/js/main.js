/* 
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

// creo un array contenene 10 zucchine
const zucchine = [
    {
        varietà: 'nera',
        peso: 0.5,
        lunghezza: 15,
    },

    {
        varietà: 'romanesca',
        peso: 0.3,
        lunghezza: 12,
    },

    {
        varietà: 'fiorentina',
        peso: 0.4,
        lunghezza: 13,
    },

    {
        varietà: 'napoletana',
        peso: 0.5,
        lunghezza: 15,
    },

    {
        varietà: 'tonda',
        peso: 0.8,
        lunghezza: 12,
    },

    {
        varietà: 'trombetta',
        peso: 0.6,
        lunghezza: 23,
    },

    {
        varietà: 'gialla',
        peso: 0.7,
        lunghezza: 11,
    },

    {
        varietà: 'crookneck',
        peso: 0.9,
        lunghezza: 30,
    },

    {
        varietà: 'siciliana',
        peso: 1.2,
        lunghezza: 20,
    },

    {
        varietà: 'rigata pugliese',
        peso: 0.9,
        lunghezza: 15,
    },
]
console.log(zucchine);

// divido in un primo array le zucchine sotto i 15 cm 
const underFifteen = zucchine.filter(zucchina => {
    if (zucchina.lunghezza < 15) {
        return true;
    }
})
console.log(underFifteen);

// divido in un secondo array le zucchine sopra i 15 cm
const overFifteen = zucchine.filter(zucchina => {
    if (zucchina.lunghezza > 15) {
        return true;
    }
})
console.log(overFifteen);

// sommo il primo gruppo di zucchine
let res = 0;
underFifteen.forEach(element => {
    res += element.peso;
})
console.log(`Le zucchine sotto i 15cm pesano: ${res.toFixed(2)} kg`);

// sommo il secondo gruppo di zucchine
overFifteen.forEach(element => {
    res += element.peso;
})
console.log(`Le zucchine sopra i 15cm pesano: ${res.toFixed(2)} kg`);