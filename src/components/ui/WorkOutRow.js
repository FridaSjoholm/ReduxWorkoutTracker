import { PropTypes } from 'react'
import Runner from 'react-icons/lib/md/directions-run'
import Weights from 'react-icons/lib/md/fitness-center'

const WorkOutRow = ({ workout, date, gym, solo, onRemoveDay=f=>f }) =>
    <tr onDoubleClick={() => onRemoveDay(date)}>
    <td>{date}</td>
    <td>{workout}</td>
    <td>{(gym)? <Weights/> : null}</td>
    <td>{(solo)? <Runner/> : null}</td>
  </tr>

WorkOutRow.propTypes = {
    workout: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    gym: PropTypes.bool,
    solo: PropTypes.bool,
    onRemoveDay: PropTypes.func
}

export default WorkOutRow
