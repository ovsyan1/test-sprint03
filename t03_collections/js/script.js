// --- if you want test, just uncomment ---- //
const guestList = new WeakSet();

let kirill = {},
    vasilii = {},
    dmitrii = {},
    olga = {},
    oleh = {};

guestList.add(kirill);
guestList.add(vasilii);
guestList.add(dmitrii);
guestList.add(olga);
guestList.add(oleh);
//console.log(guestList.has(kirill))// you can check if somebody in or not
//console.log(guestList.size)//privat info, it will not tell you size
//console.log(guestList.delete(dmitrii))//you can remove someone, try it

const menu = new Map();

menu.set('pizza', '10$')
menu.set('salat', '7.50$')
menu.set('ice-cream', '2.75$')
menu.set('pasta', '11.50$')
menu.set('soup', '2.30$')

// -------- you can ask to name every available dish and its price, one after the other -------//
 //for(let[key, item] of menu)
 //console.log(key + ' ' + item)
 // ---- iterate check ------ //


const bankVault = new WeakMap();

const o12345 = {},
      o67890 = {},
      o04321 = {},
      o55555 = {},
      o33333 = {};

      bankVault.set(o12345, 'Gold');
      bankVault.set(o67890, 'Silver');
      bankVault.set(o04321, 'Bronze');
      bankVault.set(o55555, 'UAH');
      bankVault.set(o33333, '$');
// ---- the only way to see the contents of a box, is to provide its correct credentials ----- //
       //console.log(bankVault.get(o33333))
       // ----- test --- find elements ---- //


const coinCollection = new Set();

coinCollection.add(1)
coinCollection.add(20)
coinCollection.add(30)
coinCollection.add(40)
coinCollection.add(50)

// ------- if you want, you can see the entire collection ------ //
 //for(let item of coinCollection)console.log(item)