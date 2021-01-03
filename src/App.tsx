import React, { useEffect, useState } from 'react';
import MazePicker from './components/MazePicker';
import { useMaze } from './hooks/useMaze';
import { Dimensions, Direction } from './types';
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import SelectedCellsProvider from './providers/SelectedCellsProvider';
import GenerationButton from './components/GenerationButton';
import MazeContainer from './components/MazeContainer';

function App() {
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(15);
  const [mazeDimensions, setMazeDimensions] = useState<Dimensions>()

  useEffect(() => {
    setMazeDimensions({
      width, height
    })
  }, [width, height])

  return (
    <div>
      <div style={{ width: '500px', margin: '25px auto' }}>
        <InputGroup className="my-4">
          <InputGroupAddon addonType="prepend" >
            <InputGroupText>Width</InputGroupText>
          </InputGroupAddon>
          <Input value={width} onChange={(e) => setWidth(+e.target.value)} />
        </InputGroup>
        <InputGroup className="my-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Height</InputGroupText>
          </InputGroupAddon>
          <Input value={height} onChange={(e) => setHeight(+e.target.value)} />
        </InputGroup>
        {/* <Button className="w-100" type="submit" onClick={showMazePicker}>Generate</Button> */}
      </div>
      <SelectedCellsProvider>
        <MazeContainer {...{ mazeDimensions }} />
        {/* <div style={{ width: '500px', margin: '25px auto' }}>
          <GenerationButton />
        </div> */}
      </SelectedCellsProvider>
    </div>
  );
}

export default App;
