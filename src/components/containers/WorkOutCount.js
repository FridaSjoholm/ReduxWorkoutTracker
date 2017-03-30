import WorkOutCount from '../ui/WorkOutCount'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {

	return {
		total: state.allWorkOuts.length,
		gym: state.allWorkOuts.filter(day => day.gym).length,
		solo: state.allWorkOuts.filter(day => day.solo).length
	}

}

const Container = connect(mapStateToProps)(WorkOutCount)

export default Container
