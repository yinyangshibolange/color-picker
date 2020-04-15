(function(win) {
  function ColorPicker() {
    this.hex = '#000000';

    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.alpha = 1;

    this.rgb2hex = function(rgb) {
      var aRgb = rgb instanceof Array ? rgb : (rgb.split(',') || [0, 0, 0]);
      var temp;
      if (aRgb.length === 3) {
        return '#' + [
          (temp = Number(aRgb[0]).toString(16)).length == 1 ? ('0' + temp) : temp,
          (temp = Number(aRgb[1]).toString(16)).length == 1 ? ('0' + temp) : temp,
          (temp = Number(aRgb[2]).toString(16)).length == 1 ? ('0' + temp) : temp,
        ].join('');
      } else if (aRgb.length === 4) {
        return '#' + [
          (temp = Number(aRgb[0]).toString(16)).length == 1 ? ('0' + temp) : temp,
          (temp = Number(aRgb[1]).toString(16)).length == 1 ? ('0' + temp) : temp,
          (temp = Number(aRgb[2]).toString(16)).length == 1 ? ('0' + temp) : temp,
          (temp = (Number(aRgb[3]) * 255).toString(16)).length == 1 ? ('0' + temp) : temp,
        ].join('');
      }

    }

    this.hex2rgb = function(hex) {
      let hexTemp = hex.trim().toLowerCase()
      if (hexTemp.length == 3) {
        hexTemp = hexTemp[0] + hexTemp[0] + hexTemp[1] + hexTemp[1] + hexTemp[2] + hexTemp[2];
      }
      if (hexTemp.length === 4)
        hexTemp = hexTemp[0] + hexTemp[0] + hexTemp[1] + hexTemp[1] + hexTemp[2] + hexTemp[2] + hexTemp[3] + hexTemp[3]

      if (hexTemp.length === 6) {
        const temp = {
          r: parseInt(hexTemp[0] + hexTemp[1], 16),
          g: parseInt(hexTemp[2] + hexTemp[3], 16),
          b: parseInt(hexTemp[4] + hexTemp[5], 16),
        }
        return `rgb(${temp.r}, ${temp.g}, ${temp.b}})`
      }

      if (hexTemp.length === 8) {
        const temp = {
          r: parseInt(hexTemp[0] + hexTemp[1], 16),
          g: parseInt(hexTemp[2] + hexTemp[3], 16),
          b: parseInt(hexTemp[4] + hexTemp[5], 16),
          a: parseInt(hexTemp[6] + hexTemp[7], 16) / 255,
        }
        return `rgb(${temp.r}, ${temp.g}, ${temp.b}}, ${temp.a}})`
      }

      return
    }

    this.colorType = function(color) {
      if (color instanceof Array) return 'rgbarr'
      if (color.indexOf('rgb') > -1) return 'rgb'
      if (color.indexOf('#') > -1) return 'hex'
    }

    this.updateColor = function(color) {
      switch (this.colorType(color)) {
        case 'rgb':

          break;
        case 'rgbarr':
          if (color.length === 3) {
            this.r = color[0]
            this.g = color[1]
            this.b = color[2]
          } else if (color.length === 4) {
            this.r = color[0]
            this.g = color[1]
            this.b = color[2]
            this.alpha = color[3]
          }
          break;
        case 'hex':

          break;
        default:

      }
    }
  }

  window.ColorPicker = ColorPicker
})(window)
