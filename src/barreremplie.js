import Chart from 'chart.js/auto'

(async function () {
    let db = data[2].data
    // const filtree = db.filter(d => d.name === "ACE");

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
        console.log(test2)
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
        console.log(nbrUNKNOWN)
        let test2 = nbrObjet(nbrUNKNOWN)
        console.log(test2)
        let nouveau = {
            nbrUNKNOWN: test2
        }
        prblmProgrammeTotalUNKNOWN.push(nouveau)
    };
    console.log(prblmProgrammeTotalUNKNOWN)
    let prblmProgrammeTotalUNKNOWNDef = prblmProgrammeTotalUNKNOWN.map(d => d.nbrUNKNOWN)


    // Pour avoir le nombre de problème UNSAT par chaque programme
    let prblmProgrammeTotalUNSAT = []
    for (let x = 0; x < 10; x++) {
        let nbrUNSAT = dataProgramme(labelNamesProgramme[x]).filter(d => d.status === "UNSAT")
        // let nbrUNSAT = dataProgramme("ACE").filter(d => d.status === "UNSAT")
        console.log(nbrUNSAT)
        let test2 = nbrObjet(nbrUNSAT)
        console.log(test2)
        let nouveau = {
            nbrUNSAT: test2
        }
        prblmProgrammeTotalUNSAT.push(nouveau)
    };
    console.log(prblmProgrammeTotalUNSAT)
    let prblmProgrammeTotalUNSATDef = prblmProgrammeTotalUNSAT.map(d => d.nbrUNSAT)


    // let datasets = ['countSat', 'countUnknown', 'countUnsat'].map((status, index) => ({
    //     label: status,
    //     data: http://programNames.map(program => programResults[program][status]),
    //     backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)',
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)'
    //     ][index],
    //     borderColor: 'rgba(255, 255, 255, 1)',
    //     borderWidth: 1,
    //     offset: index * 5 // Espacement entre les barres du même programme
    // }));


    console.log(labelNamesProgramme)

    new Chart(
        document.getElementById('barreremplie'),
        {
            type: 'bar',
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
                        borderWidth: 1,
                        offset: index * 5
                    },
                    {
                        type: 'bar',
                        label: 'Problèmes UNKKNOW',
                        data: prblmProgrammeTotalUNKNOWNDef,
                        borderColor: '#36A2EB',
                        backgroundColor: '#FF9932',
                        borderWidth: 1,
                        offset: index * 5
                    },
                    {
                        type: 'bar',
                        label: 'Problèmes UNSAT',
                        data: prblmProgrammeTotalUNSATDef,
                        borderColor: '#36A2EB',
                        backgroundColor: '#FF3C32',
                        borderWidth: 1,
                        offset: index * 5
                    },
                    {
                        type: 'bar',
                        label: 'Problèmes résolus',
                        data: prblmProgrammeTotalSATDef,
                        borderColor: '#36A2EB',
                        backgroundColor: '#00D7A1',
                        borderWidth: 1,
                        offset: index * 5
                    }
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white' // Couleur du texte de l'axe y
                        },
                        grid: {
                            color: 'white' // Couleur des lignes de la grille de l'axe y
                        }
                    },
                    x: {
                        stacked: true, // Barres empilées horizontalement
                        ticks: {
                            color: 'white' // Couleur du texte de l'axe x
                        },
                        grid: {
                            color: 'white' // Couleur des lignes de la grille de l'axe x
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white' // Couleur du texte de la légende
                        }
                    }
                }
            }
        }
    );
})









// import Chart from 'chart.js/auto';

// console.log(data);
// let db = data[2].data;

// // Noms des programmes
// const programNames = [...new Set(http://db.map(d => http://d.name))];
// console.log(programNames);

// // Récupérer les datas d'un programme particulier
// function dataOf(program) {
//     let programData = db.filter(d => http://d.name === program);
//     return programData;
// }

// // Récupérer les résultats
// let programResults = {};

// // Parcourir chaque programme pour compter les occurrences de chaque statut
// for (const program of programNames) {
//     programResults[program] = {
//         countSat: 0,
//         countUnknown: 0,
//         countUnsat: 0
//     };

//     for (const d of dataOf(program)) {
//         if (d.status === "SAT") {
//             programResults[program].countSat++;
//         } else if (d.status === "UNSAT") {
//             programResults[program].countUnsat++;
//         } else {
//             programResults[program].countUnknown++;
//         }
//     }
// }

// console.log(programResults);

// // Inverser les labels et les valeurs à partir de programResults
// let labels = programNames;
// let datasets = ['countSat', 'countUnknown', 'countUnsat'].map((status, index) => ({
//     label: status,
//     data: programNames.map(program => programResults[program][status]),
//     backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)'
//     ][index],
//     borderColor: 'rgba(255, 255, 255, 1)',
//     borderWidth: 1,
//     offset: index * 5 // Espacement entre les barres du même programme
// }));



// new Chart(
//     document.getElementById('acquisitions'),
//     {
//         type: 'bar',
//         data: {
//             labels: labels,
//             datasets: datasets
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true,
//                     ticks: {
//                         color: 'white' // Couleur du texte de l'axe y
//                     },
//                     grid: {
//                         color: 'white' // Couleur des lignes de la grille de l'axe y
//                     }
//                 },
//                 x: {
//                     stacked: true, // Barres empilées horizontalement
//                     ticks: {
//                         color: 'white' // Couleur du texte de l'axe x
//                     },
//                     grid: {
//                         color: 'white' // Couleur des lignes de la grille de l'axe x
//                     }
//                 }
//             },
//             plugins: {
//                 legend: {
//                     labels: {
//                         color: 'white' // Couleur du texte de la légende
//                     }
//                 }
//             }
//         }
//     }
// );