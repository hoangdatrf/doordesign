function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}

var sources = {
    pt1: 'https://i.imgur.com/DPPBBir.jpg',
    pt2: 'https://i.imgur.com/1vrZQW7.jpg'
};

loadImages(sources, function(images) {
    updateCanvas();
});
var stage = new Konva.Stage({
    container: 'container',
    width: 1000,
    height: 400
});

var layer = new Konva.Layer();
stage.add(layer);

var widthInput = document.getElementById('widthInput');
var heightInput = document.getElementById('heightInput');

// var topFr = './images/Frame2/Frame2T.png';
// var leftFr = './images/Frame2/Frane2L.png';
// var pt = './images/Pattern/pt1.jpg';

function loadImages(sources) {
    var imageObj = new Image();
    imageObj.src = sources;
    imageObj.onload = () => {
        layer.draw();
    };
    return imageObj;
}



function createFrame(frameWidth, frameHeight) {
    var padding = 70;
    var group = new Konva.Group();
    var top = new Konva.Line({
        points: [
            0,
            0,
            frameWidth,
            0,
            frameWidth - padding,
            padding,
            padding,
            padding
        ],
        fillPatternImage: loadImages('https://i.imgur.com/bDDyD4B.jpg'),
    });

    var left = new Konva.Line({
        points: [
            0,
            0,
            padding,
            padding,
            padding,
            frameHeight,
            0,
            frameHeight
        ],
        fillPatternImage: loadImages('https://i.imgur.com/bDDyD4B.jpg'),
    });

    var right = new Konva.Line({
        points: [
            frameWidth,
            0,
            frameWidth,
            frameHeight,
            frameWidth - padding,
            frameHeight,
            frameWidth - padding,
            padding
        ],
        fillPatternImage: loadImages('https://i.imgur.com/bDDyD4B.jpg'),
    });

    var glass = new Konva.Image({
        x: padding,
        y: padding,
        image: loadImages('https://i.imgur.com/bDDyD4B.jpg'),
        width: frameWidth - padding * 2,
        height: frameHeight - padding
    });


    group.add(glass, top, left, right);

    group.find('Line').closed(true);
    return group;
}



function updateCanvas() {
    layer.children.destroy();

    var frameWidth = parseInt(widthInput.value, 10);
    var frameHeight = parseInt(heightInput.value, 10);

    var wr = stage.width() / frameWidth;
    var hr = stage.height() / frameHeight;

    var ratio = Math.min(wr, hr) * 0.8;

    var frameOnScreenWidth = frameWidth * ratio;
    var frameOnScreenHeight = frameHeight * ratio;

    var group = new Konva.Group({});

    group.x(Math.round(stage.width() / 2 - frameOnScreenWidth / 2) + 0.5);
    group.y(Math.round(stage.height() / 2 - frameOnScreenHeight / 2) + 0.5);

    layer.add(group);

    var frameGroup = createFrame(frameWidth, frameHeight);
    frameGroup.scale({ x: ratio, y: ratio });
    group.add(frameGroup);
    layer.draw();
}

widthInput.addEventListener('change', updateCanvas);
widthInput.addEventListener('input', updateCanvas);

heightInput.addEventListener('change', updateCanvas);
heightInput.addEventListener('input', updateCanvas);

// set default value
widthInput.value = 1000;
heightInput.value = 2000;

updateCanvas();