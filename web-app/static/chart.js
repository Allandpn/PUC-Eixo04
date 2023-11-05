

const ctx1 = document.getElementById('model01');
const ctx2 = document.getElementById('model02');
const ctx3 = document.getElementById('model03');
const ctx4 = document.getElementById('model04');




//consulta de quantidade de instrumentos e quantidade emprestada por unidade
(async function () {
  const dataEmpUnd = await fetch('http://localhost:3333/api/chart/data2').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
  const dataInstUnd = await fetch('http://localhost:3333/api/chart/data1').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
  const unidadesId = await fetch('http://localhost:3333/api/chart/data11').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })

  const data = {
    datasets: [
      {
        label: unidadesId[0].unidade,
        data: dataEmpUnd,
        backgroundColor: "#4472C4",
        parsing: {
          yAxisKey: unidadesId[0].unidade
        },
        stack: 1
      },
      {
        label: unidadesId[0].unidade,
        data: dataInstUnd,
        backgroundColor: "#4473c496",
        parsing: {
          yAxisKey: unidadesId[0].unidade
        },
        stack: 1
      },
      {
        label: unidadesId[1].unidade,
        data: dataEmpUnd,
        backgroundColor: "#ED7D31",
        parsing: {
          yAxisKey: unidadesId[1].unidade
        },
        stack: 3
      },
      {
        label: unidadesId[1].unidade,
        data: dataInstUnd,
        backgroundColor: "#ed7c318e",
        parsing: {
          yAxisKey: unidadesId[1].unidade
        },
        stack: 3
      },   
    ]
  }

  const maps = new Chart(ctx1, {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      },   
      
    }
  })

  document.getElementById("unidadeId0").textContent = unidadesId[0].unidade
  document.getElementById("unidadeId1").textContent = unidadesId[1].unidade

})();




//mapa de alunos por unidade
(async function () {
  const dataAluUnd = await fetch('http://localhost:3333/api/chart/data3').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
  


   const data = {
    labels: dataAluUnd.map(x => x.unidade),
    datasets: [{
      data: dataAluUnd.map(x => x.alunos),
      backgroundColor: ["#4472C4", "#A5A5A5", "#ED7D31"]
    }]
  }

  const maps = new Chart(ctx2, {
    type: 'doughnut',
    data: data,
    options: {
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  })

})();




//mapa de matriculas por unidade
(async function () {
  const dataMatUnd = await fetch('http://localhost:3333/api/chart/data4').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
  const unidadesId = await fetch('http://localhost:3333/api/chart/data11').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })

  
  const data = {
    labels: dataMatUnd.map(x => x.ano),
    datasets: [
      {
        label: unidadesId[0].unidade,
        data: dataMatUnd.map(x=>x[unidadesId[0].unidade]),
        backgroundColor: "#4472C4",
        tension: 0.1,
      },
      {
        label: unidadesId[1].unidade,
        data: dataMatUnd.map(x=>x[unidadesId[1].unidade]),
        backgroundColor: "#ED7D31",
        tension: 0.1
      },
    ]
  }

  const maps = new Chart(ctx3, {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: {
          position: "bottom"
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      },
    }
  })
})();






//mapa popularidade instrumentos por unidade 
(async function () {
  const dataPrefInstUnd = await fetch('http://localhost:3333/api/chart/data5').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
  const unidadesId = await fetch('http://localhost:3333/api/chart/data11').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })


 
  const data = {
    labels: dataPrefInstUnd.map(x => x.instrumento),
    datasets: [
      {
        label: unidadesId[0].unidade,
        data: dataPrefInstUnd.map(x=>x[unidadesId[0].unidade]),
        backgroundColor: "#4473c43b",
        fill: true,
        borderColor: '#4473c491',
        pointBackgroundColor: '#4473c491',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4473c491'
      },
      {
        label: unidadesId[1].unidade,
        data: dataPrefInstUnd.map(x=>x[unidadesId[1].unidade]),
        backgroundColor: "#a5a5a54f",        
        fill: true,
        borderColor: '#a5a5a5b4',
        pointBackgroundColor: '#a5a5a5b4',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#a5a5a5b4'
      },
    ]
  }
 

  const maps = new Chart(ctx4, {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 1
        }
      },
      plugins: {
        legend: {
          position: "bottom"
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  })
})();




//preenche quadros superiores do dashboard
(async function() {
  //retorna total de alunos
  const totalAlunos = await fetch('http://localhost:3333/api/chart/data6').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })

  //retorna media de idade
  const mdIdaAlunos = await fetch('http://localhost:3333/api/chart/data7').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })

  //retorna total de instrumentos
  const totalInstrumentos = await fetch('http://localhost:3333/api/chart/data8').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })

   //retorna total de turmas
   const totalTurmas = await fetch('http://localhost:3333/api/chart/data9').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })

  //retorna instrumento mais popular
  const popInstrumento = await fetch('http://localhost:3333/api/chart/data10').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })



 
  const element1 = document.getElementById("totalAlunosdash")
  element1.textContent = totalAlunos

  const element2 = document.getElementById("mediaIdadedash")
  element2.textContent = mdIdaAlunos.x

  const element3 = document.getElementById("totalInstrdash")
  element3.textContent = totalInstrumentos

  const element4 = document.getElementById("totalTurmasdash")
  element4.textContent = totalTurmas

  const element5 = document.getElementById("popInstrdash")
  element5.textContent = popInstrumento

  


})();


