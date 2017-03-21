import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { addDay, suggestWorkOutNames, clearSuggestions } from '../../actions'

const mapStateToProps = (state, props) =>
	({
		suggestions: state.workOutNames.suggestions,
		fetching: state.workOutNames.fetching,
		router: props.router
	})

const mapDispatchToProps = dispatch =>
	({
		onNewDay({workout,date,gym,solo}) {
			dispatch(
				addDay(workout, date, gym, solo)
			)
		},
		onChange(value) {
			if (value) {
				dispatch(
					suggestWorkoutNames(value)
				)
			} else {
				dispatch(
					clearSuggestions()
				)
			}
		},
		onClear() {
			dispatch(
				clearSuggestions()
			)
		}
	})

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)

export default withRouter(Container)
