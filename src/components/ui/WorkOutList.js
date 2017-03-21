import { PropTypes } from 'react'
import { Link } from 'react-router'
import WorkOutRow from './WorkOutRow'
import Runner from 'react-icons/lib/md/directions-run'
import Weights from 'react-icons/lib/md/fitness-center'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import '../../stylesheets/WorkOutList.scss'

const WorkOutList = ({ days, filter, onRemoveDay=f=>f }) => {

    const filteredDays = (!filter || !filter.match(/gym|solo/)) ?
        days :
        days.filter(day => day[filter])

    const activeFilterStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className="work-out-list">
            <table>
                <caption>double click to remove</caption>
                <thead>
                <tr>
                  <th>Date</th>
                  <th>Workout</th>
                  <th>Gym</th>
                  <th>Solo</th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link to="/list-days" style={(!filter) ? activeFilterStyle : null}>All Days</Link>
                        <Link to="/list-days/gym" activeStyle={activeFilterStyle}>Gym Days</Link>
                        <Link to="/list-days/solo" activeStyle={activeFilterStyle}>Solo Days</Link>
                    </td>
                </tr>
                </thead>
                <tbody>
                {filteredDays.map((day, i) =>
                    <WorkOutRow key={i} {...day} onRemoveDay={onRemoveDay} />
                )}
                </tbody>
            </table>
        </div>
    )
}

WorkOutList.propTypes = {
    filter: PropTypes.oneOf(['gym', 'solo']),
    onRemoveDay: PropTypes.func,
    days: (props) => (!Array.isArray(props.days)) ?
        new Error("WorkOutList days property must be an array") :
        (!props.days.length) ?
            new Error("WorkOutList days array must contain at least one record") :
            null
}

export default WorkOutList
