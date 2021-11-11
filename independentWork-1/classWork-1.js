import './App.css'

const birthData = [
	['Andrey Rumiantsev', '1995-10-11T08:13:51.376Z', '10'],
	['Ivan Alexandrov', '1994-07-09T08:13:51.376Z', '700'],
	['Oleg Kravchenko', '2021-11-11T08:13:51.376Z', '850'],
	['Evgenii Ponasenkov', '1982-03-13T08:13:51.376Z', '850'],
]
const nowDate = new Date()
const nowMonth = nowDate.getMonth() + 1
const nowDay = nowDate.getDate()

const getHolidayPrizes = (param0, param1, param2) => {
	const userDate = new Date(param1)
	const userMonth = userDate.getMonth() + 1
	const userDay = userDate.getDate()

	if (userDay === nowDay && userMonth === nowMonth) {
		let premia = Math.ceil((param2 / 10 + nowDay * nowMonth) / 5) * 5
		return `Сегодня день рождение у ${param0}!, его премия составляет: ${premia}`
	}
}

function App() {
	return (
		<div>
			{birthData.map(([f, s, t], index) => (
				<div key={index}>{getHolidayPrizes(f, s, t)}</div>
			))}
		</div>
	)
}

export default App
