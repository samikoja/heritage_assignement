import React, {useRef, useEffect} from 'react'
import Paper from 'paper';
import Draw from './Draw';

export const Canvas = (props) => {
  const canvasRef = useRef(null)

   useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
    Draw();
  }, []);

  return (
   <canvas ref={canvasRef} {...props} id="canvas" resize="true" width={500} height={500} style={{backgroundColor: 'green'}} />
  )
}

Canvas.prototype = {

}
