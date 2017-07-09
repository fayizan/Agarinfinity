/**
 * This code rightfully belongs to Chris Peirce
 */

/** @type {Array} */
var _$_a9b0 = ["set", "add", "prototype", "x", "y", "angle", "rotate", "length", "atan2", "PI", "angleDeg", "clone", "copy", "cross", "distance", "distanceSq", "sqrt", "dot", "equals", "abs", "lengthSq", "negate", "scale", "normalize", "cos", "sin", "rotateDeg", "setPolar", "setPolarDeg", "sub", "toString", "(", ", ", ")", "mouse", "cells", "viewNodes", "splitCooldown", "valueOf", "size", "sort", "now", "my_balls", "balls", "getLowestCell", "decide", "cellType", "isMotherCell", "push", "largest", 
"core", "split"];
/**
 * @param {?} x
 * @param {?} z
 * @return {undefined}
 */
function Vector2(x, z) {
  this[_$_a9b0[0]](x, z);
}
Vector2[_$_a9b0[2]][_$_a9b0[1]] = function(dataAndEvents, deepDataAndEvents) {
  return dataAndEvents instanceof Vector2 ? (this[_$_a9b0[3]] += dataAndEvents[_$_a9b0[3]], this[_$_a9b0[4]] += dataAndEvents[_$_a9b0[4]]) : (this[_$_a9b0[3]] += dataAndEvents || 0, this[_$_a9b0[4]] += deepDataAndEvents || 0), this;
}, Vector2[_$_a9b0[2]][_$_a9b0[5]] = function(deepDataAndEvents) {
  if (void 0 !== deepDataAndEvents) {
    return this[_$_a9b0[0]](this[_$_a9b0[7]](), 0)[_$_a9b0[6]](deepDataAndEvents);
  }
  var a = Math[_$_a9b0[8]](this[_$_a9b0[4]], this[_$_a9b0[3]]);
  return 0 > a && (a += 2 * Math[_$_a9b0[9]]), a;
}, Vector2[_$_a9b0[2]][_$_a9b0[10]] = function(dataAndEvents) {
  return void 0 !== dataAndEvents ? this[_$_a9b0[5]](dataAndEvents / 180 * Math[_$_a9b0[9]]) : 180 * this[_$_a9b0[5]]() / Math[_$_a9b0[9]];
}, Vector2[_$_a9b0[2]][_$_a9b0[11]] = Vector2[_$_a9b0[2]][_$_a9b0[12]] = function() {
  return new Vector2(this[_$_a9b0[3]], this[_$_a9b0[4]]);
}, Vector2[_$_a9b0[2]][_$_a9b0[13]] = function(m21, m31) {
  return m21 instanceof Vector2 ? this[_$_a9b0[3]] * m21[_$_a9b0[4]] - this[_$_a9b0[4]] * m21[_$_a9b0[3]] : this[_$_a9b0[3]] * m31 - this[_$_a9b0[4]] * m21;
}, Vector2[_$_a9b0[2]][_$_a9b0[14]] = function(heading, fieldName) {
  var currentValue = this[_$_a9b0[15]](heading, fieldName);
  return void 0 === currentValue ? void 0 : Math[_$_a9b0[16]](currentValue);
}, Vector2[_$_a9b0[2]][_$_a9b0[15]] = function(eyex, eyey) {
  var z0;
  var z1;
  if (eyex instanceof Vector2) {
    /** @type {number} */
    z0 = eyex[_$_a9b0[3]] - this[_$_a9b0[3]];
    /** @type {number} */
    z1 = eyex[_$_a9b0[4]] - this[_$_a9b0[4]];
  } else {
    if (void 0 === eyey) {
      return void 0;
    }
    /** @type {number} */
    z0 = eyex - this[_$_a9b0[3]];
    /** @type {number} */
    z1 = eyey - this[_$_a9b0[4]];
  }
  return z0 * z0 + z1 * z1;
}, Vector2[_$_a9b0[2]][_$_a9b0[17]] = function(a5, a4) {
  return a5 instanceof Vector2 ? this[_$_a9b0[3]] * a5[_$_a9b0[3]] + this[_$_a9b0[4]] * a5[_$_a9b0[4]] : this[_$_a9b0[3]] * a5 + this[_$_a9b0[4]] * a4;
}, Vector2[_$_a9b0[2]][_$_a9b0[18]] = function(dataAndEvents, details, threshold) {
  return dataAndEvents instanceof Vector2 ? (details = details || 0, Math[_$_a9b0[19]](this[_$_a9b0[3]] - dataAndEvents[_$_a9b0[3]]) <= details && Math[_$_a9b0[19]](this[_$_a9b0[4]] - dataAndEvents[_$_a9b0[4]]) <= details) : void 0 !== details ? (threshold = threshold || 0, Math[_$_a9b0[19]](this[_$_a9b0[3]] - dataAndEvents) <= threshold && Math[_$_a9b0[19]](this[_$_a9b0[4]] - details) <= threshold) : false;
}, Vector2[_$_a9b0[2]][_$_a9b0[7]] = function() {
  return Math[_$_a9b0[16]](this[_$_a9b0[20]]());
}, Vector2[_$_a9b0[2]][_$_a9b0[20]] = function() {
  return this[_$_a9b0[3]] * this[_$_a9b0[3]] + this[_$_a9b0[4]] * this[_$_a9b0[4]];
}, Vector2[_$_a9b0[2]][_$_a9b0[21]] = function() {
  return this[_$_a9b0[22]](-1);
}, Vector2[_$_a9b0[2]][_$_a9b0[23]] = function() {
  return this[_$_a9b0[22]](1 / this[_$_a9b0[7]]());
}, Vector2[_$_a9b0[2]][_$_a9b0[6]] = function(rad) {
  var cos = Math[_$_a9b0[24]](rad);
  var sin = Math[_$_a9b0[25]](rad);
  return this[_$_a9b0[0]](this[_$_a9b0[3]] * cos - this[_$_a9b0[4]] * sin, this[_$_a9b0[3]] * sin + this[_$_a9b0[4]] * cos);
}, Vector2[_$_a9b0[2]][_$_a9b0[26]] = function(dataAndEvents) {
  return this[_$_a9b0[6]](dataAndEvents / 180 * Math[_$_a9b0[9]]);
}, Vector2[_$_a9b0[2]][_$_a9b0[22]] = function(err2, err) {
  return this[_$_a9b0[3]] *= err2, this[_$_a9b0[4]] *= err || err2, this;
}, Vector2[_$_a9b0[2]][_$_a9b0[0]] = function(dataAndEvents, deepDataAndEvents) {
  return dataAndEvents instanceof Vector2 ? (this[_$_a9b0[3]] = dataAndEvents[_$_a9b0[3]], this[_$_a9b0[4]] = dataAndEvents[_$_a9b0[4]]) : (this[_$_a9b0[3]] = dataAndEvents || 0, this[_$_a9b0[4]] = deepDataAndEvents || 0), this;
}, Vector2[_$_a9b0[2]][_$_a9b0[27]] = function(opt_obj2, deepDataAndEvents) {
  return this[_$_a9b0[0]](deepDataAndEvents, 0)[_$_a9b0[6]](opt_obj2);
}, Vector2[_$_a9b0[2]][_$_a9b0[28]] = function(dataAndEvents, deepDataAndEvents) {
  return this[_$_a9b0[27]](dataAndEvents / 180 * Math[_$_a9b0[9]], deepDataAndEvents);
}, Vector2[_$_a9b0[2]][_$_a9b0[29]] = function(dataAndEvents, deepDataAndEvents) {
  return void 0 !== deepDataAndEvents ? (this[_$_a9b0[3]] -= dataAndEvents, this[_$_a9b0[4]] -= deepDataAndEvents) : (this[_$_a9b0[3]] -= dataAndEvents[_$_a9b0[3]], this[_$_a9b0[4]] -= dataAndEvents[_$_a9b0[4]]), this;
}, Vector2[_$_a9b0[2]][_$_a9b0[30]] = function() {
  return _$_a9b0[31] + this[_$_a9b0[3]] + _$_a9b0[32] + this[_$_a9b0[4]] + _$_a9b0[33];
};
/**
 * @return {undefined}
 */
InfinityAi = function() {
  this[_$_a9b0[34]] = {
    x : 0,
    y : 0
  };
  /** @type {Array} */
  this[_$_a9b0[35]] = [];
  /** @type {Array} */
  this[_$_a9b0[36]] = [];
  /** @type {null} */
  this[_$_a9b0[37]] = null;
};
InfinityAi[_$_a9b0[2]] = {
  /**
   * @return {?}
   */
  getLowestCell : function() {
    if (this[_$_a9b0[35]][_$_a9b0[7]] <= 0) {
      return null;
    }
    var f = this[_$_a9b0[35]][_$_a9b0[38]]();
    f[_$_a9b0[40]](function(mat1, mat0) {
      return mat0[_$_a9b0[39]] - mat1[_$_a9b0[39]];
    });
    return f[0];
  },
  /**
   * @param {?} update
   * @return {undefined}
   */
  sendUpdate : function(update) {
    if (this[_$_a9b0[37]] && Date[_$_a9b0[41]]() - this[_$_a9b0[37]] > 300) {
      /** @type {null} */
      this[_$_a9b0[37]] = null;
    }
    Date[_$_a9b0[41]]();
    this[_$_a9b0[35]] = update[_$_a9b0[42]];
    this[_$_a9b0[36]] = update[_$_a9b0[43]];
    var r20 = this[_$_a9b0[44]]();
    this[_$_a9b0[45]](r20);
  },
  /**
   * @param {?} actualObject
   * @return {undefined}
   */
  decide : function(actualObject) {
    if (!actualObject) {
      return;
    }
    var object = actualObject;
    var loc = new Vector2(0, 0);
    /** @type {boolean} */
    var x = false;
    /** @type {null} */
    var p = null;
    /** @type {Array} */
    var r20 = [];
    /** @type {number} */
    var unlock = 0;
    for (;unlock < this[_$_a9b0[36]][_$_a9b0[7]];unlock++) {
      var cache = this[_$_a9b0[36]][unlock];
      /** @type {number} */
      var key = 0;
      if (cache[_$_a9b0[46]] == 0) {
        if (actualObject[_$_a9b0[39]] > (cache[_$_a9b0[39]] + 4) * 1.15) {
          /** @type {number} */
          key = cache[_$_a9b0[39]] * 2.5;
        } else {
          if (cache[_$_a9b0[39]] + 4 > actualObject[_$_a9b0[39]] * 1.15) {
            /** @type {number} */
            key = -cache[_$_a9b0[39]];
          } else {
            /** @type {number} */
            key = -(cache[_$_a9b0[39]] / actualObject[_$_a9b0[39]]) / 3;
          }
        }
      } else {
        if (cache[_$_a9b0[46]] == 1) {
          /** @type {number} */
          key = 1;
        } else {
          if (cache[_$_a9b0[46]] == 2) {
            if (actualObject[_$_a9b0[39]] > cache[_$_a9b0[39]] * 1.15) {
              if (this[_$_a9b0[35]][_$_a9b0[7]] == 16) {
                /** @type {number} */
                key = cache[_$_a9b0[39]] * 2.5;
              } else {
                /** @type {number} */
                key = -1;
              }
            } else {
              if (cache[_$_a9b0[47]] && cache[_$_a9b0[39]] > actualObject[_$_a9b0[39]] * 1.15) {
                /** @type {number} */
                key = -1;
              }
            }
          } else {
            if (cache[_$_a9b0[46]] == 3) {
              if (actualObject[_$_a9b0[39]] > cache[_$_a9b0[39]] * 1.15) {
                key = cache[_$_a9b0[39]];
              }
            } else {
              key = cache[_$_a9b0[39]];
            }
          }
        }
      }
      if (key == 0) {
        continue;
      }
      var _cache_ = cache;
      var output = new Vector2(_cache_[_$_a9b0[3]] - object[_$_a9b0[3]], _cache_[_$_a9b0[4]] - object[_$_a9b0[4]]);
      var i = output[_$_a9b0[7]]();
      if (key < 0) {
        i -= actualObject[_$_a9b0[39]] + cache[_$_a9b0[39]];
        if (cache[_$_a9b0[46]] == 0) {
          r20[_$_a9b0[48]](cache);
        }
      }
      if (i < 1) {
        /** @type {number} */
        i = 1;
      }
      key /= i;
      var camelKey = output[_$_a9b0[23]]()[_$_a9b0[22]](key);
      if (cache[_$_a9b0[46]] == 0 && (actualObject[_$_a9b0[39]] > (cache[_$_a9b0[39]] + 4) * 1.15 && (actualObject[_$_a9b0[39]] < cache[_$_a9b0[39]] * 5 && (!x && (!this[_$_a9b0[37]] && this[_$_a9b0[35]][_$_a9b0[7]] < 3))))) {
        /** @type {number} */
        var n = 780 + 40 - actualObject[_$_a9b0[39]] / 2 - cache[_$_a9b0[39]];
        if (n > 0 && i < n) {
          p = cache;
          /** @type {boolean} */
          x = true;
        }
      } else {
        loc[_$_a9b0[1]](camelKey);
      }
    }
    loc[_$_a9b0[23]]();
    /** @type {boolean} */
    x = false;
    if (x) {
      if (r20[_$_a9b0[7]] > 0) {
        if (this[_$_a9b0[49]](r20)[_$_a9b0[39]] > actualObject[_$_a9b0[39]] * 1.5) {
          this[_$_a9b0[34]] = {
            x : p[_$_a9b0[3]],
            y : p[_$_a9b0[4]]
          };
          this[_$_a9b0[37]] = Date[_$_a9b0[41]]();
          if (window[_$_a9b0[50]]) {
            if (core[_$_a9b0[51]]) {
              core[_$_a9b0[51]]();
            }
          }
          return;
        }
      } else {
        this[_$_a9b0[34]] = {
          x : p[_$_a9b0[3]],
          y : p[_$_a9b0[4]]
        };
        this[_$_a9b0[37]] = Date[_$_a9b0[41]]();
        if (window[_$_a9b0[50]]) {
          if (core[_$_a9b0[51]]) {
            core[_$_a9b0[51]]();
          }
        }
        return;
      }
    }
    this[_$_a9b0[34]] = {
      x : object[_$_a9b0[3]] + loc[_$_a9b0[3]] * 800,
      y : object[_$_a9b0[4]] + loc[_$_a9b0[4]] * 800
    };
  },
  /**
   * @param {?} dataAndEvents
   * @return {?}
   */
  largest : function(dataAndEvents) {
    var f = dataAndEvents[_$_a9b0[38]]();
    f[_$_a9b0[40]](function(mat1, mat0) {
      return mat0[_$_a9b0[39]] - mat1[_$_a9b0[39]];
    });
    return f[0];
  }
};
