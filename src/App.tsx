import React, { useEffect, useState } from 'react';
import MazePicker from './components/MazePicker';
import { useMaze } from './hooks/useMaze';
import { Dimensions, Direction } from './types';
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import Error from './components/Error';

function App() {

  const [width, setWidth] = useState(25);
  const [height, setHeight] = useState(25);
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
      {
        mazeDimensions && mazeDimensions.height >= 2 && mazeDimensions.width >= 2 
        ?
        <div style={{ width: `${(mazeDimensions.width + 2) * 23}px`, margin: '0 auto' }}>
          <MazePicker {...{mazeDimensions}} />
        </div>
        : <Error message="Maze dimensions have to be at least 2x2."/>
      }
    </div>
  );
}

export default App;
