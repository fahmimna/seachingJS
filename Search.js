const array = ["Alice", "Bob", "Charlie", "David", "Eve"];
function booktelp(Name) {
    const index = array.indexOf(Name);
    if (index !== -1) {
        console.log(`Ini dia nama kontaknya ${Name}`);
    } else {
        console.log(`Maaf, kontak ${Name} tidak ada`);
    }
}
booktelp("Bob");