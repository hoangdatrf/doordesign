      var stage = new Konva.Stage({
          container: 'container',
          width: 1000,
          height: 400
      });

      var layer = new Konva.Layer();
      stage.add(layer);

      var widthInput = document.getElementById('widthInput');
      var heightInput = document.getElementById('heightInput');

      var topFr = './images/Frame4/FrameT.jpg';
      var leftFr = './images/Frame4/FrameL.jpg';
      var rightFr = './images/Frame4/FrameR.jpg';

      var topFr2 = './images/Frame2/Frame2T.png';
      var leftFr2 = './images/Frame2/Frame2R.png';
      var rightFr2 = './images/Frame2/Frame2R.png';
      var botFr2 = './images/Frame2/Frame2B.png';

      var pt = './images/Pattern/pt1.jpg';

      function createFrame(frameWidth, frameHeight, ftop, fleft, fright, fpt) {
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
              fillPatternScaleX: frameWidth,
              fillPatternScaleY: frameHeight,
          });
          var ptop = new Image();
          ptop.src = ftop;
          ptop.onload = function() {
              top.fillPatternImage(ptop);
              layer.draw();
          };

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
              fillPatternScaleX: frameWidth,
              fillPatternScaleY: frameHeight,
          });
          var pleft = new Image();
          pleft.src = fleft;
          pleft.onload = function() {
              left.fillPatternImage(pleft);
              layer.draw();
          };


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
              fillPatternScaleX: frameWidth,
              fillPatternScaleY: frameHeight,
          });
          var pright = new Image();
          pright.src = fright;
          pright.onload = function() {
              right.fillPatternImage(pright);
              layer.draw();
          };

          var glass = new Konva.Rect({
              x: padding,
              y: padding,
              width: frameWidth - padding * 2,
              height: frameHeight - padding
          });
          var pter = new Image();
          pter.src = fpt;
          pter.onload = function() {
              glass.fillPatternImage(pter);
              layer.draw();
          };


          group.add(glass, top, left, right);

          group.find('Line').closed(true);
          return group;
      }

      function createFrame2(frameWidth, frameHeight, ftop2, fleft2, fright2, fbot2, fpt2) {
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
              fillPatternScaleX: frameWidth,
              fillPatternScaleY: frameHeight,
          });
          var ptop = new Image();
          ptop.src = ftop2;
          ptop.onload = function() {
              top.fillPatternImage(ptop);
              layer.draw();
          };

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
              fillPatternScaleX: 5,
              fillPatternScaleY: 4,
          });
          var pleft = new Image();
          pleft.src = fleft2;
          pleft.onload = function() {
              left.fillPatternImage(pleft);
              layer.draw();
          };


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
              fillPatternScaleX: 4,
              fillPatternScaleY: 5,
          });
          var pright = new Image();
          pright.src = fright2;
          pright.onload = function() {
              right.fillPatternImage(pright);
              layer.draw();
          };

          var bottom = new Konva.Line({
          points: [
            0,
            frameHeight,
            padding,
            frameHeight - padding,
            frameWidth - padding,
            frameHeight - padding,
            frameWidth,
            frameHeight
          ],
              fillPatternScaleX: 4,
              fillPatternScaleY: 5
          });
          var pbot = new Image();
          pbot.src = fbot2;
          pbot.onload = function() {
              bottom.fillPatternImage(pbot);
              layer.draw();
          };


          var glass = new Konva.Rect({
          x: padding,
          y: padding,
          width: frameWidth - padding * 2,
          height: frameHeight - padding * 2
          });
          var pter = new Image();
          pter.src = fpt2;
          pter.onload = function() {
              glass.fillPatternImage(pter);
              layer.draw();
          };


          group.add(glass, top, left, bottom, right);

          group.find('Line').closed(true);
          return group;
      }



      function changepattern(souce) {
          pt = souce;
          updateCanvas();
      }

      function changeframe1() {

          updateCanvas2();
      }

      function changeframe2() {
          topFr = './images/Frame3/Frame3T.png';
          leftFr = './images/Frame3/Frame3L.png';
          rightFr = './images/Frame3/Frame3L.png';
          updateCanvas();
      }

      function changeframe3() {
          topFr = './images/Frame4/FrameT.jpg';
          leftFr = './images/Frame4/FrameL.jpg';
          rightFr = './images/Frame4/FrameR.jpg';
          updateCanvas();
      }


      function updateCanvas() {
          layer.children.destroy();

          var frameWidth = parseInt(widthInput.value, 10) * 250;
          var frameHeight = parseInt(heightInput.value, 10) * 250;

          var wr = stage.width() / frameWidth;
          var hr = stage.height() / frameHeight;

          var ratio = Math.min(wr, hr) * 0.7;

          var frameOnScreenWidth = frameWidth * ratio;
          var frameOnScreenHeight = frameHeight * ratio;

          var group = new Konva.Group({});
          group.y(50);
          group.x(100);

          layer.add(group);

          var frameGroup = createFrame(frameWidth, frameHeight, topFr, leftFr, rightFr, pt);
          frameGroup.scale({ x: ratio, y: ratio });
          group.add(frameGroup);
          layer.draw();
      }

      function updateCanvas2() {
          layer.children.destroy();

          var frameWidth = parseInt(widthInput.value, 10) * 250;
          var frameHeight = parseInt(heightInput.value, 10) * 250;

          var wr = stage.width() / frameWidth;
          var hr = stage.height() / frameHeight;

          var ratio = Math.min(wr, hr) * 0.8;

          var frameOnScreenWidth = frameWidth * ratio;
          var frameOnScreenHeight = frameHeight * ratio;

          var group = new Konva.Group({});
          group.y(50);
          group.x(100);

          layer.add(group);

          var frameGroup = createFrame2(frameWidth, frameHeight, topFr2, leftFr2, rightFr2, botFr2, pt);
          frameGroup.scale({ x: ratio, y: ratio });
          group.add(frameGroup);
          layer.draw();
      }

      widthInput.addEventListener('change', updateCanvas);
      widthInput.addEventListener('input', updateCanvas);

      heightInput.addEventListener('change', updateCanvas);
      heightInput.addEventListener('input', updateCanvas);

      // set default value
      widthInput.value = 5;
      heightInput.value = 7;

      updateCanvas();