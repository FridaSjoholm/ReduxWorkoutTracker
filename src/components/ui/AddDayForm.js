import { PropTypes } from 'react'
import Autocomplete from './Autocomplete'
import '../../stylesheets/AddDayForm.scss'

const AddDayForm = ({ suggestions=[], onNewDay=f=>f, onChange=f=>f, onClear=f=>f, fetching=false, router}) => {

    let _workout, _date, _gym, _solo

    const submit = e => {
        e.preventDefault()
        onNewDay({
            workout: _workout.value,
            date: _date.value.toString(),
            gym: _gym.checked,
            solo: _solo.checked
        })


        const addAnother = confirm(`${_workout.value} on ${_date.value.toString()} added. Add another?`)

        if (!addAnother) {
            router.push('/')
        }

        _workout.value = ''
        _date.value = ''
        _gym.checked = false
        _solo.checked = false

    }

    return (
        <form onSubmit={submit} className="add-day">

            <label htmlFor="date">workout Name</label>

            <Autocomplete ref={input => _workout = input}
                          suggestions={suggestions}
                          onChange={() => onChange(_workout.value)}
                          fetching={fetching}
                          onClear={onClear}
            />

            <label htmlFor="date">Date</label>
            <input id="date"
                   type="date"
                   ref={input => _date = input}
                   required/>

            <div>
                <input id="gym-day"
                       ref={input => _gym = input}
                       type="checkbox"/>
                <label htmlFor="gym-day">Gym</label>
            </div>

            <div>
                <input id="solo-day"
                       ref={input => _solo = input}
                       type="checkbox"/>
                <label htmlFor="solo-day">Solo</label>
            </div>

            <button>Add Day</button>

        </form>
    )
}

AddDayForm.propTypes = {
    suggestions: PropTypes.array,
    onNewDay: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    router: PropTypes.object
}

export default AddDayForm
