import Chart from 'chart.js/auto'

(async function () {
  let db = data[2].data
  const filtree = db.filter(d => d.name === "ACE");

  function dataProgramme(programme) {
    let db = data[2].data
    const result = db.filter(d => d.name === programme);
    return result
  }

  let test = dataProgramme("ACE")

  let label = dataProgramme("ACE").map(d => d.benchmark_id)
  let value = dataProgramme("ACE").map(d => d.time)

  let nbrSAT = dataProgramme("ACE").filter(d => d.status === "SAT")


  // Pour avoir le tableau avec les noms des programmes individuellement
  let nameFrequence = [];
  db.forEach(item => {
    const name = item.name;
    let nouveau = {
      name: name
    };
    nameFrequence.push(nouveau)
  });
  let uniqueNames = {};
  let NamesProgramme = nameFrequence.filter(obj => {
    if (!uniqueNames[obj.name]) {
      uniqueNames[obj.name] = true;
      return true;
    }
    return false;
  });


  // labelNamesProgramme est un tableau avec juste les noms des Programme
  let labelNamesProgramme = NamesProgramme.map(d => d.name)


  // Fonction pour avoir le nombre d'élément qu'il y a dans l'objet
  function nbrObjet(x) {
    let count = 0;
    for (let properties in x) {
      count = count + 1
    }
    return count
  }


  // Pour avoir le nombre total de problème que chaque programme à examiné
  let prblmTotal = []
  for (let x = 0; x < 10; x++) {
    let y = dataProgramme(labelNamesProgramme[x])
    // console.log(y)
    let test2 = nbrObjet(y)
    // console.log(test2)
    let nouveau = {
      prblmTotal: test2
    }
    prblmTotal.push(nouveau)
  };
  // console.log(prblmTotal)
  let prblmTotalDef = prblmTotal.map(d => d.prblmTotal)


  // Pour avoir le nombre de problème SAT par chaque programme
  let prblmProgrammeTotalSAT = []
  for (let x = 0; x < 10; x++) {
    let nbrSAT = dataProgramme(labelNamesProgramme[x]).filter(d => d.status === "SAT")
    // let nbrSAT = dataProgramme("ACE").filter(d => d.status === "SAT")
    // console.log(nbrSAT)
    let test2 = nbrObjet(nbrSAT)
    // console.log(test2)
    let nouveau = {
      nbrSAT: test2
    }
    prblmProgrammeTotalSAT.push(nouveau)
  };
  // console.log(prblmProgrammeTotalSAT)
  let prblmProgrammeTotalSATDef = prblmProgrammeTotalSAT.map(d => d.nbrSAT)


  // Pour avoir le nombre de problème UNKNOWN par chaque programme
  let prblmProgrammeTotalUNKNOWN = []
  for (let x = 0; x < 10; x++) {
    let nbrUNKNOWN = dataProgramme(labelNamesProgramme[x]).filter(d => d.status === "UNKNOWN")
    // let nbrUNKNOWN = dataProgramme("ACE").filter(d => d.status === "UNKNOWN")
    // console.log(nbrUNKNOWN)
    let test2 = nbrObjet(nbrUNKNOWN)
    // console.log(test2)
    let nouveau = {
      nbrUNKNOWN: test2
    }
    prblmProgrammeTotalUNKNOWN.push(nouveau)
  };
  // console.log(prblmProgrammeTotalUNKNOWN)
  let prblmProgrammeTotalUNKNOWNDef = prblmProgrammeTotalUNKNOWN.map(d => d.nbrUNKNOWN)


  // Pour avoir le nombre de problème UNSAT par chaque programme
  let prblmProgrammeTotalUNSAT = []
  for (let x = 0; x < 10; x++) {
    let nbrUNSAT = dataProgramme(labelNamesProgramme[x]).filter(d => d.status === "UNSAT")
    // let nbrUNSAT = dataProgramme("ACE").filter(d => d.status === "UNSAT")
    // console.log(nbrUNSAT)
    let test2 = nbrObjet(nbrUNSAT)
    // console.log(test2)
    let nouveau = {
      nbrUNSAT: test2
    }
    prblmProgrammeTotalUNSAT.push(nouveau)
  };
  // console.log(prblmProgrammeTotalUNSAT)
  let prblmProgrammeTotalUNSATDef = prblmProgrammeTotalUNSAT.map(d => d.nbrUNSAT)

  console.log("zzzzzz")

  new Chart(
    document.getElementById('barres'),
    {
      data: {
        labels: labelNamesProgramme,
        datasets: [
          {
            type: 'bar',
            label: 'Nombre total de problèmes',
            data: prblmTotalDef,
            // data: nbrSAT
            borderColor: '#36A2EB',
            backgroundColor: '#C9C9C9',
          },
          {
            type: 'bar',
            label: 'Problèmes UNKKNOW',
            data: prblmProgrammeTotalUNKNOWNDef,
            borderColor: '#36A2EB',
            backgroundColor: '#FF9932',
          },
          {
            type: 'bar',
            label: 'Problèmes UNSAT',
            data: prblmProgrammeTotalUNSATDef,
            borderColor: '#36A2EB',
            backgroundColor: '#FF3C32',
          },
          {
            type: 'bar',
            label: 'Problèmes résolus',
            data: prblmProgrammeTotalSATDef,
            borderColor: '#36A2EB',
            backgroundColor: '#00D7A1',
          }
        ]
      }
    }
  );

  new Chart(
    document.getElementById('barreremplie'),
    {
      data: {
        labels: labelNamesProgramme,
        datasets: [
          {
            type: 'polarArea',
            label: 'Problèmes résolus',
            data: prblmProgrammeTotalSATDef,
            borderColor: '#36A2EB',
            backgroundColor: '#00D7A1',
          }
        ]
      }
    }
  );

  
})();

