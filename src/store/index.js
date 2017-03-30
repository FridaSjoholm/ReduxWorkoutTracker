import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('Workouts', store.getState().allWorkOuts.length)
	result = next(action)

	let { allWorkOuts, goal, errors, workOutNames } = store.getState()

	console.log(`

		workouts: ${allWorkOuts.length}
		goal: ${goal}
		fetching: ${workOutNames.fetching}
		suggestions: ${workOutNames.suggestions}
		errors: ${errors.length}

	`)

	console.groupEnd()

	return result

}

export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}
