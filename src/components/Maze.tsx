import { useMaze } from "../hooks/useMaze";
import Cell from "./Cell";

const Maze: React.FC<any> = ({ mazeDimensions, start, exit }) => {

  const [maze] = useMaze(mazeDimensions.width, mazeDimensions.height, start, exit)

  return (
    <div style={{ width: `${(mazeDimensions!.width + 2) * 23}px`, margin: '0 auto' }}>
      <div style={{ padding: '23px' }}>
        {
          maze.map(row =>
            <div style={{ clear: 'both' }}>
              {
                row.map(cell => <Cell {...{ cell }} />)
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Maze;