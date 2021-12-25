function setOpt(selector, text, value) {
    var node = document.querySelector(selector);
    var opt = document.createElement("option");
    opt.text = text;
    opt.value = value;
    node.add(opt);
    return false;
  }
  
  function T(t) {
    var now = new Date();
    var time;
    switch (t.toLowerCase()) {
      case 'm':
        time = now.getMonth() + 1;
        break;
      case 'd':
        time = now.getDate();
        break;
      case 'y':
        time = now.getFullYear();
        break;
      default:
        break;
    }
    return time;
  }
  for (let i = 2000; i <= T('y'); i++) {
    setOpt('#cboYear', i, i);
  }