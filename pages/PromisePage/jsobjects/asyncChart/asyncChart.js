export default {
	async fetchChartData () {
		const users = await getUsers.run();
		// const selectedCountry = users_table.selectedRow.country;
		const selectedCountry = users[0].country
		const data = await getGenderDistibutionByCountry.run({ country: selectedCountry });
		console.log("data ", data)
		console.log("HI")
		const chartData = data.map(dt => ({
			x: dt.gender,
			y: dt.count
		}));
		storeValue("asyncChart", chartData)
	},
  funcWitPromise () {
		const selectedCountry = users_table.selectedRow.country;
		getGenderDistibutionByCountry.run({ country: selectedCountry }).then(data => {
			console.log("Data : ", data)
		});
		console.log("hi")
	}
}