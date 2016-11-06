var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {toolbox: document.getElementById('toolbox')});
var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';

  function myUpdateFunction(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code);
    eval(code);
  }
  workspace.addChangeListener(myUpdateFunction);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);


function set_clothes(clothes, selection) {

  
  switch (clothes) {
    case "Outfit":
      $('#barebody').show();
      if (selection === 'hacker') {
        $('.outfit').hide();
        $('#barebody').hide();
        $('#hacker').show();
      }
      else if (selection === 'firefighter') {
        $('.outfit').hide();
        $('#barebody').hide();
        $('#hacker').show();
        $('#firefighter').show();
      }
      else if (selection === 'doctor') {
        $('.outfit').hide();
        $('#barebody').hide();
        $('#hacker').show();
        $('#doctor').show();
      }
      else if (selection === 'business_suit' || selection === 'chef' || selection === 'astronaut') {
        $('.outfit').hide();
        $('#barebody').show();
        $('#' + selection).show();
      }
      break;
    case "Hat":

        $('.hat').hide();

      if (selection === 'firefighter_hat' || selection === 'chef_hat' || selection === 'astronaut_hat') {
        $('.hat').hide();
        $('#' + selection).show();
      }
      break;
    case "Accessory":

        $('.accessory').hide();
      
      if (selection === 'surgeon_mask') {
        $('accessory').hide();
        $('#' + selection).show();
      }
      
      break;
  }
}

