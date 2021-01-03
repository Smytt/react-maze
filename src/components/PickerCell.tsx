import _ from 'lodash';
import { Direction, PickerCell as PickerCellType, Point } from "../types"
import '../css/cell.css'
import { useContext } from "react"
import { SelectedCellsContext } from "../providers/SelectedCellsProvider"

const PickerCell: React.FC<Props> = ({ type, point }) => {

  const { points, addPoint } = useContext(SelectedCellsContext)

  console.log('point')

  const selectCell = () => {
    addPoint(point)
  }

  return (
    <div className={`cell ${type} ${_.some(points, point) ? 'selected' : ''}`} onClick={selectCell}>
    </div>
  )
}

interface Props {
  type: PickerCellType,
  point?: Point,
}

export default PickerCell