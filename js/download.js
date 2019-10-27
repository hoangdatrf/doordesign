var stage = new Konva.Stage({
    container: 'container',
    width: 1000,
    height: 400
});

var layer = new Konva.Layer();
stage.add(layer);

// var imageObj = new Image();
// imageObj.onload = function() {
//   var yoda = new Konva.Image({
//     x: 50,
//     y: 50,
//     image: imageObj,
//     width: 106,
//     height: 118
//   });

//   // add the shape to the layer
//   layer.add(yoda);
//   layer.batchDraw();
// };
// imageObj.src = 'images/Frame2/frame2.png';

function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }

  document.getElementById('save').addEventListener(
    'click',
    function() {
      var dataURL = stage.toDataURL();
      downloadURI(dataURL, 'stage.png');
    },
    false
  );