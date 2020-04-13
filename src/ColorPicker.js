export class ColorPicker {
  hex;
  rgb;
  rgba;
  r;
  g;
  b;
  alpha;

  hexmap = {
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    f: 14,
    e: 15,
  }

  constructor(color) {

  }

rgb2hex(rgb) {
      var aRgb = rgb instanceof Array ? rgb : (rgb.split(',') || [0, 0, 0]);
      var temp;
      return [
          (temp = Number(aRgb[0]).toString(16)).length == 1 ? ('0' + temp) : temp,
          (temp = Number(aRgb[1]).toString(16)).length == 1 ? ('0' + temp) : temp,
          (temp = Number(aRgb[2]).toString(16)).length == 1 ? ('0' + temp) : temp,
      ].join('');
  }

hex2rgb(hex) {
      if(hex.length == 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      return [
          parseInt(hex[0] + hex[1], 16),
          parseInt(hex[2] + hex[3], 16),
          parseInt(hex[4] + hex[5], 16),
      ].join();
  }

  hex2rgb(color) {
    let colorTemp = color.trim().toLowerCase();
    let rhex = colorTemp.substr(1, 2)
    let ghex = colorTemp.substr(3, 2)
    let bhex = colorTemp.substr(5, 2)
    let alphahex = colorTemp.substr(7, 2)
  let r = this.hexmap[rhex.substr(0, 1)] * 16 + this.hexmap[rhex.substr(1, 1)]
    let g = this.hexmap[ghex.substr(0, 1)] * 16 + this.hexmap[ghex.substr(1, 1)]
      let b = this.hexmap[bhex.substr(0, 1)] * 16 + this.hexmap[bhex.substr(1, 1)]
      let alpha;
      if(alphahex && alphahex.length)
      alpha = this.hexmap[alphahex.substr(0, 1)] * 16 + this.hexmap[alphahex.substr(1, 1)]
  }

  rgb2hex(color) {

  }

  colorType(color) {
    if(color.indexOf('rgb') > -1) {
      return 'rgb'
    } else if(color.indexOf('#') > -1) {
      return 'hex'
    }
  }

  updateColor(color) {
    switch (this.colorType(color)) {
      case 'rgb':

        break;
      case 'hex':

        break;
      default:

    }
  }
}
