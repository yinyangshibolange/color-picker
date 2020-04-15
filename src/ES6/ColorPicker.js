export class ColorPicker {
  hex;
  rgb;
  rgba;
  r;
  g;
  b;
  alpha;

  hexmap = {
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
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
    return '#' + [
      (temp = Number(aRgb[0]).toString(16)).length == 1 ? ('0' + temp) : temp,
      (temp = Number(aRgb[1]).toString(16)).length == 1 ? ('0' + temp) : temp,
      (temp = Number(aRgb[2]).toString(16)).length == 1 ? ('0' + temp) : temp,
    ].join('');
  }

  hex2rgb(hex) {
    let hexTemp = hex.trim().toLowerCase()
    if (hexTemp.length == 3) {
      hexTemp = hexTemp[0] + hexTemp[0] + hexTemp[1] + hexTemp[1] + hexTemp[2] + hexTemp[2];
    }
    if (hexTemp.length === 4)
      hexTemp = hexTemp[0] + hexTemp[0] + hexTemp[1] + hexTemp[1] + hexTemp[2] + hexTemp[2] + hexTemp[3] + hexTemp[3]

    if (hexTemp.length === 6)
      return {
        r: parseInt(hexTemp[0] + hexTemp[1], 16),
        g: parseInt(hexTemp[2] + hexTemp[3], 16),
        b: parseInt(hexTemp[4] + hexTemp[5], 16),
      }

    if (hexTemp.length === 8)
      return {
        r: parseInt(hexTemp[0] + hexTemp[1], 16),
        g: parseInt(hexTemp[2] + hexTemp[3], 16),
        b: parseInt(hexTemp[4] + hexTemp[5], 16),
        a: parseInt(hexTemp[6] + hexTemp[7], 16) / 255,
      }
    return
  }

  colorType(color) {
    if (color.indexOf('rgb') > -1) {
      return 'rgb'
    } else if (color.indexOf('#') > -1) {
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
