export default {
	getGenderOption() {
		const genders = getUniqueGenders.data;
		return genders.map(dt => ({
			label: dt.gender,
			value: dt.gender
		}))
	}
}