const container = document.getElementById('container')

const rekening = {
  eigenaar: "Jayden de Vries",
  saldo: 20,
  rekeningnummer: "NL103284843838",
  geblokkeerd: false,
  pincode: "3200",
  dagLimiet: 500,
  transacties: [],

  toonSaldo() {
    return this.saldo;
  },

  
  changesaldo(amount) {
    this.saldo += amount

    this.transacties.push(amount)
    return ` het bedrag ${amount} is toegevoegd aan uw rekening`
  }
};

const { eigenaar, saldo } = rekening

rekening.changesaldo(1000);

console.log(rekening.toonSaldo()) 

container.innerHTML = `
<h2>${rekening.eigenaar}</h2>
<h3>${rekening.rekeningnummer}</h3>
<p>${rekening.saldo}</p> verdeting
`;