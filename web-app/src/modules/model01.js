

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

  const data = {
    datasets: [
      {
        label: 'BH - Acervo',
        data: dataEmpUnd,
        backgroundColor: "#4472C4",
        parsing: {
          yAxisKey: "BHorizonte"
        },
        stack: 1
      },
      {
        label: 'BH - Emprestimo',
        data: dataInstUnd,
        backgroundColor: "#4473c496",
        parsing: {
          yAxisKey: "BHorizonte"
        },
        stack: 1
      },
      {
        label: 'Contagem - Acervo',
        data: dataEmpUnd,
        backgroundColor: "#ED7D31",
        parsing: {
          yAxisKey: "Contagem"
        },
        stack: 3
      },
      {
        label: 'Contagem - Emprestimo',
        data: dataInstUnd,
        backgroundColor: "#ed7c318e",
        parsing: {
          yAxisKey: "Contagem"
        },
        stack: 3
      },   
      {
        label: 'Betim - Acervo',
        data: dataEmpUnd,
        backgroundColor: "#A5A5A5",
        parsing: {
          yAxisKey: "Betim"
        },
        stack: 2
      },
      {
        label: 'Betim - Emprestimo',
        data: dataInstUnd,
        backgroundColor: "#a5a5a583",
        parsing: {
          yAxisKey: "Betim"
        },
        stack: 2
      }             
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
      aspectRatio: 1
    }
  })
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

 
  const data = {
    labels: dataMatUnd.map(x => x.ano),
    datasets: [
      {
        label: 'Belo Horizonte',
        data: dataMatUnd.map(x=>x.BHorizonte),
        backgroundColor: "#4472C4",
        tension: 0.1,
      },
      {
        label: 'Contagem',
        data: dataMatUnd.map(x=>x.Betim),
        backgroundColor: "#ED7D31",
        tension: 0.1
      },
      {
        label: 'Betim',
        data: dataMatUnd.map(x=>x.Contagem),
        backgroundColor: "#A5A5A5",
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
          beginAtZero: true
        }
      },
      aspectRatio: 1
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

 
  const data = {
    labels: dataPrefInstUnd.map(x => x.instrumento),
    datasets: [
      {
        label: "Belo Horizonte",
        data: dataPrefInstUnd.map(x=>x.BHorizonte),
        backgroundColor: "#4473c43b",
        fill: true,
        borderColor: '#4473c491',
        pointBackgroundColor: '#4473c491',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4473c491'
      },
      {
        label: "Betim",
        data: dataPrefInstUnd.map(x=>x.Betim),
        backgroundColor: "#a5a5a54f",        
        fill: true,
        borderColor: '#a5a5a5b4',
        pointBackgroundColor: '#a5a5a5b4',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#a5a5a5b4'
      },
      {
        label: "Contagem",
        data: dataPrefInstUnd.map(x=>x.Contagem),
        backgroundColor: "#ed7c3149",        
        fill: true,
        borderColor: '#ed7c31ab',
        pointBackgroundColor: '#ed7c31ab',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ed7c31ab'
      },
    ]
  }
  console.log(data)

  const maps = new Chart(ctx4, {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      plugins: {
        legend: {
          position: "bottom"
        }
      },
    }
  })
})();

