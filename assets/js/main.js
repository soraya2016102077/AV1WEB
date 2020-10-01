// Tooltips
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
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
});