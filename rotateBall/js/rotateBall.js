window.onload = function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var cenX = width / 2;
  var cenY = height / 2;
    var stage = new Konva.Stage({
      container: "demo",
      width:width,
      height: height
    });
    var layer = new Konva.Layer();
    stage.add(layer);
      //=================静止部分================================
     var outerCircle1 = new Konva.Circle({
      x: cenX,
      y: cenY,
      radius: 430 / 2,
      stroke: '#55276D',
      dash: [4,4]
      });
     layer.add(outerCircle1);
     var outerCircle2 = new Konva.Circle({
      x: cenX,
      y: cenY,
      radius: 274 / 2,
      stroke: '#E0E4EE',
      dash: [4,4]
     });
     layer.add(outerCircle2);
     var outerCircle3 = new Konva.Circle({
      x: cenX,
      y: cenY,
      radius: 252 / 2,
      stroke: '#2A3466',
      dash: [8,4]
     });
     layer.add(outerCircle3);
     var innerRing = new Konva.Ring({
      x: cenX,
      y: cenY,
      innerRadius: 130 / 2,
      outerRadius: 180 / 2,
      fill: 'black',
      opacity: 0.1
    });
     layer.add(innerRing);
     var innerCircle = new Konva.Circle({
      x: cenX,
      y: cenY,
      radius: 130 / 2,
      fill: "#2A3466"
     });
     layer.add(innerCircle);
     var webQuanZhan = new Konva.Text({
        x: cenX - innerCircle.radius(),
        y: cenY - 10,
        width: innerCircle.radius() * 2,
        text: '个人技能',
        fontSize: 23,
        fontFamily: 'Calibri',
        fill: 'white',
        align: 'center'
      });
     layer.add(webQuanZhan);
     //=====================静止部分=======================================
     //封装每个会运动的小球
     //====================测试group是否封装成功=================================
     // var group1 = new Group({
     //  x: 100,
     //  y: 100,
     //  innerRadius: 50,
     //  outerRadius: 100,
     //  innerFill: "red",
     //  outerFill: "yellow",
     //  text: "MySelf",
     //  fontSize: 20,
     // });
     // group1.render();
     // group1.addToGroupOrLayer(layer);
     //====================测试group是否封装成功=================================

     //页面会动的部分分为两个部分一个部分是顺时针，我们单独给一个group
     //另一个是逆时针，我们也单独给一个group
     var outGroup = new Konva.Group({
      x: cenX,
      y: cenY,
     });
     layer.add(outGroup);
    var outSmallCircleR = 100 / 2;
    var innerSmallCricleR =  78 / 2;
    //第一个圆我们给o度
     var webAppGroup = new Group({
          x: 430 / 2 * Math.cos( 0 * Math.PI / 180),
          y: 430 / 2 * Math.sin( 0 * Math.PI / 180),
          innerRadius: outSmallCircleR,
          outerRadius: innerSmallCricleR,
          innerFill: "#F274D3",
          outerFill: "#EFD9E9",
          text: "HTML",
          fontSize: 30,
     });
     webAppGroup.render();
     webAppGroup.addToGroupOrLayer(outGroup);
     var abcGroup = new Group({
          x: 430 / 2 * Math.cos( 72 * Math.PI / 180),
          y: 430 / 2 * Math.sin( 72 * Math.PI / 180),
          innerRadius: outSmallCircleR,
          outerRadius: innerSmallCricleR,
          innerFill: "#2EC6F8",
          outerFill: "#D2E9F1",
          text: "CSS",
          fontSize: 30,
     });
     abcGroup.render();
     abcGroup.addToGroupOrLayer(outGroup);
     var defGroup = new Group({
          x: 430 / 2 * Math.cos( 72 * 2 * Math.PI / 180),
          y: 430 / 2 * Math.sin( 72 * 2 * Math.PI / 180),
          innerRadius: outSmallCircleR,
          outerRadius: innerSmallCricleR,
          innerFill: "#58F091",
          outerFill: "#CCF1DA",
          text: "JavaScript",
          fontSize: 30,
     });
     defGroup.render();
     defGroup.addToGroupOrLayer(outGroup);
     var ghiGroup = new Group({
          x: 430 / 2 * Math.cos( 72 * 3 * Math.PI / 180),
          y: 430 / 2 * Math.sin( 72 * 3 * Math.PI / 180),
          innerRadius: outSmallCircleR,
          outerRadius: innerSmallCricleR,
          innerFill: "#7463F2",
          outerFill: "#D5D1F3",
          text: "AJAX",
          fontSize: 30,
     });
     ghiGroup.render();
     ghiGroup.addToGroupOrLayer(outGroup);
     var jklGroup = new Group({
          x: 430 / 2 * Math.cos( 72 * 4 * Math.PI / 180),
          y: 430 / 2 * Math.sin( 72 * 4 * Math.PI / 180),
          innerRadius: outSmallCircleR,
          outerRadius: innerSmallCricleR,
          innerFill: "#F2637A",
          outerFill: "#F6D0D7",
          text: "jQuery",
          fontSize: 30,
     });
     jklGroup.render();
     jklGroup.addToGroupOrLayer(outGroup);
     //第一组完成
     //第二组
     var innerGroup = new Konva.Group({
      x: cenX,
      y: cenY
     });
     layer.add(innerGroup);
    var htmlGroup = new Group({
          x: 252 / 2 * Math.cos(  0 * Math.PI / 180),
          y: 252 / 2 * Math.sin(  0 * Math.PI / 180),
          innerRadius: outSmallCircleR * 2 / 3,
          outerRadius: innerSmallCricleR * 2 / 3,
          innerFill: "#AA50F6",
          outerFill: "#E4D2F4",
          text: "HTML5",
          fontSize: 20,
     });
     htmlGroup.render();
     htmlGroup.addToGroupOrLayer(innerGroup);
      var cssGroup = new Group({
          x: 252 / 2 * Math.cos( 90 * Math.PI / 180),
          y: 252 / 2 * Math.sin( 90 * Math.PI / 180),
          innerRadius: outSmallCircleR * 2 / 3,
          outerRadius: innerSmallCricleR * 2 / 3,
          innerFill: "#26F6DB",
          outerFill: "#C9F0EB",
          text: "CSS3",
          fontSize: 20,
     });
     cssGroup.render();
     cssGroup.addToGroupOrLayer(innerGroup);
      var jsGroup = new Group({
          x: 252 / 2 * Math.cos( 90 * 2 * Math.PI / 180),
          y: 252 / 2 * Math.sin( 90 * 2 * Math.PI / 180),
          innerRadius: outSmallCircleR * 2 / 3,
          outerRadius: innerSmallCricleR * 2 / 3,
          innerFill: "#F6DE10",
          outerFill: "#F3EDBE",
          text: "Bootstrap",
          fontSize: 20,
     });
     jsGroup.render();
     jsGroup.addToGroupOrLayer(innerGroup);
      var jqGroup = new Group({
          x: 252 / 2 * Math.cos( 90 * 3 * Math.PI / 180),
          y: 252 / 2 * Math.sin( 90 * 3 * Math.PI / 180),
          innerRadius: outSmallCircleR * 2 / 3,
          outerRadius: innerSmallCricleR * 2 / 3,
          innerFill: "#F5531B",
          outerFill: "#F5CCBD",
          text: "Node.js",
          fontSize: 20,
     });
     jqGroup.render();
     jqGroup.addToGroupOrLayer(innerGroup);
    layer.draw();
    var angle = 100;
    var animation = new Konva.Animation(function(frame){
      //得到一个timeDiff时间内，group转了多少度
      var rotateAngle = frame.timeDiff * angle / 1000;
      //让外面的层开始转动
      outGroup.rotate(rotateAngle);
      //让文字开始转
     var outArr =  outGroup.getChildren();
     for (var i = 0; i < outArr.length; i++) {
        outArr[i].rotate(-rotateAngle);
     }
     innerGroup.rotate(-rotateAngle);
      //让文字开始转
     var innerArr =  innerGroup.getChildren();
     for (var i = 0; i < innerArr.length; i++) {
        innerArr[i].rotate(rotateAngle);
     }
    },layer);
    animation.start();
    layer.addEventListener("mouseover",function(){
      angle = 10;
    });
     layer.addEventListener("mouseleave",function(){
      angle = 100;
    });
}

