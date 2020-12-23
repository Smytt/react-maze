import { PickerCell as PickerCellType } from "../types"
import '../css/cell.css'
import { useState } from "react"

const PickerCell: React.FC<Props> = ({ type }) => {

  const [selected, setSelected] = useState(false)

  const selectCell = () => {
    setSelected(!selected)
  }

  return (
    <div className={`cell ${type} ${selected ? 'selected' : ''}`} onClick={selectCell}>
    </div>
  )
}

interface Props {
  type: PickerCellType
}

export default PickerCell