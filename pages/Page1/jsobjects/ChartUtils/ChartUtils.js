export default {
	getChartValues() {
		const chartData = getGenderDistibutionByCountry.data;
		return chartData.map(dt => ({
			x: dt.gender,
			y: dt.count
		}));
	},
	getCustomChart() {
		const data = getUserDistByCountry.data;
		const option = {
			xAxis: {
				type: 'category',
				data: data.map(dt => dt.country)
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: data.map(dt => dt.count),
					type: 'bar'
				}
			]
		};
		return option;
	}
}