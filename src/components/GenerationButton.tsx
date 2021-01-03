import { useContext } from "react"
import { Button } from "reactstrap";
import { SelectedCellsContext } from "../providers/SelectedCellsProvider"

const GenerationButton = () => {
  const {points} = useContext(SelectedCellsContext);

  const disabled = points.length !== 2;

  const generateMaze = () => {

  }

  return (
    <div>
      {
        <Button className="w-100 mt-4" color="primary" disabled={disabled} onClick={() => generateMaze()}>Generate maze!</Button>
      }
    </div>
  )
}

export default GenerationButton