import { PropTypes } from 'react'
import Runner from 'react-icons/lib/md/directions-run'
import Weights from 'react-icons/lib/md/fitness-center'
import Calendar from 'react-icons/lib/fa/calendar'
import '../../stylesheets/WorkOutCount.scss'

const WorkOutCount = ({ total=0, gym=0, solo=0 }) =>
    <div className="work-out-count">
        <div className="total-days">
            <span>{total}</span>
            <Calendar />
            <span>days</span>
        </div>
        <div className="gym-days">
            <span>{gym}</span>
            <Weights />
            <span>gym</span>
        </div>
        <div className="solo-days">
            <span>{solo}</span>
            <Runner />
            <span>solo</span>
        </div>
    </div>

WorkOutCount.propTypes = {
    total: PropTypes.number,
    gym: PropTypes.number,
    solo: PropTypes.number
}

export default WorkOutCount
