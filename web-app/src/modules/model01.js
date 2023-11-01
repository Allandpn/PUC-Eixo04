

const ctx1 = document.getElementById('model01');
const ctx2 = document.getElementById('model02');
const ctx3 = document.getElementById('model03');
const ctx4 = document.getElementById('model04');


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

  new Chart(ctx1, {
    type: 'bar',
    data: {
      datasets: [
        {
          label: 'BH - Acervo',
          data: dataEmpUnd,
          backgroundColor: "#EB7766",
          parsing: {
            yAxisKey: "BHorizonte"
          },
          stack: 1
        },
        {
          label: 'BH - Emprestimo',
          data: dataInstUnd,
          backgroundColor: "#EBBCA9",
          parsing: {
            yAxisKey: "BHorizonte"
          },
          stack: 1
        },
        {
          label: 'Contagem - Acervo',
          data: dataEmpUnd,
          backgroundColor: "#6E8BEA",
          parsing: {
            yAxisKey: "Contagem"
          },
          stack: 3
        },
        {
          label: 'Contagem - Emprestimo',
          data: dataInstUnd,
          backgroundColor: "#C0D2EB",
          parsing: {
            yAxisKey: "Contagem"
          },
          stack: 3
        },   
        {
          label: 'Betim - Acervo',
          data: dataEmpUnd,
          backgroundColor: "#EBB571",
          parsing: {
            yAxisKey: "Betim"
          },
          stack: 2
        },
        {
          label: 'Betim - Emprestimo',
          data: dataInstUnd,
          backgroundColor: "#EBDAA9",
          parsing: {
            yAxisKey: "Betim"
          },
          stack: 2
        }             
      ]
    },

  })

})();









(async function () {
  const dataAluUnd = await fetch('http://localhost:3333/api/chart/data3').then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  })

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: dataAluUnd.map(x => x.unidade),
        data: dataAluUnd.map(x => x.alunos),
        backgroundColor: ["#C0D2EB", "#EBDAA9", "#EBBCA9"]
      }
      ]
    },

  })

})();








const mixedChart = new Chart(ctx3, {
  type: 'bar',
  data: {
    datasets: [{
      label: 'Bar Dataset',
      data: [10, 20, 30, 40],
      // this dataset is drawn below
      order: 2
    }, {
      label: 'Line Dataset',
      data: [10, 10, 10, 10],
      type: 'line',
      // this dataset is drawn on top
      order: 1
    }],
    labels: ['January', 'February', 'March', 'April']
  },

});