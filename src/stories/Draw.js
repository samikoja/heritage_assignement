import Paper from "paper";
import text from './assets/text.svg'

const Draw = () => {
let object
    Paper.project.importSVG(text, function(item) {
      console.log('item: ', item, 'object: ', object);
    object = item
    object.scale(0.7)
    object.position = new Paper.Point(object.bounds.width/2, object.bounds.height/2)
    object.fillColor = 'yellow'
    object.angle = 5
    })

  Paper.view.draw();
};

export default Draw;