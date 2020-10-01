// Tooltips
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

// MOdal de MEnsagens
$('#myModal').on('shown.bs.modal', function () {
	$('#myInput').trigger('focus')
})

// Chart.js
// Gráfico Média de Notas
let ctx = document.getElementById('mediaNotas').getContext('2d');
let mediaNotas = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['AV1', 'AV2', 'AV3'],
		datasets: [{
			label: 'MÉDIA DE NOTAS',
			data: [7.8, 9.5, 6.5],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
})

let ctx1 = document.getElementById('desvio').getContext('2d');
var desvio = new Chart(ctx1, {
	type: 'line',
	
    data: {
        datasets: [{
            label: 'DESVIO PADRÃO',
            data: [{
                x: 0,
                y: 0
			}, {
                x: 7,
                y: 3
			}, 
			{
                x: 10,
                y: 10
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
})

let ctx2 = document.getElementById('quartil').getContext('2d');
let quartil = new Chart(ctx2, {
	type: 'line',
	data: {
		labels: ['AV1', 'AV2', 'AV3'],
		datasets: [{
			label: 'QUARTIL DE NOTAS',
			data: [7.8, 2.5, 6.5],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
})
let ctx3 = document.getElementById('histograma').getContext('2d');
let histograma = new Chart(ctx3, {
	type: 'bar',
	data: {
		labels: ['AV1', 'AV2', 'AV3'],
		datasets: [{
			label: 'HISTOGRAMA DE NOTAS',
			data: [7.8, 9.5, 6.5],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
})
let ctx4 = document.getElementById('mm').getContext('2d');
let mm = new Chart(ctx4, {
	type: 'horizontalBar',
	data: {
		labels: ['MAIOR', 'MENOR'],
		datasets: [{
			label: 'MAIOR E MENOR NOTAS',
			data: [ 9.5, 4.5],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
})
let ctx5 = document.getElementById('percapro').getContext('2d');
let percapro = new Chart(ctx5, {
	type: 'bar',
	data: {
		labels: ['APROVADOS'],
		datasets: [{
			label: 'PERCENTUAL DE APROVAÇÃO',
			data: [ 91],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
})
;