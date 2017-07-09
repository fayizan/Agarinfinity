/**
 * This code rightfully belongs to Chris Peirce
 */


  /**
   * @param {number} delta
   * @param {number} from
   * @param {number} x
   * @param {number} to
   * @param {number} b
   * @param {number} a
   * @return {undefined}
   */
  function reset(delta, from, x, to, b, a) {
    if (a - b == 24) {
      if (x - delta > 14E3) {
        if (to - from > 14E3) {
          /** @type {number} */
          this[match[4]] = this[match[5]] - x;
          /** @type {number} */
          this[match[6]] = this[match[5]] - to;
          /** @type {boolean} */
          this[match[7]] = true;
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function minimapUpdate() {
    if (this[match[8]] != null) {
      /** @type {number} */
      var moveX = (this[match[9]] + 14142 / 2) / 14142 * 100;
      /** @type {number} */
      var moveY = (this[match[10]] + 14142 / 2) / 14142 * 100;
      socket1({
        type : match[11],
        x : moveX,
        y : moveY,
        server : this[match[8]],
        spawned : this[match[12]],
        bot : false,
        name : this[match[13]],
        tag : this[match[14]]
      });
    }
  }
  /**
   * @return {?}
   */
  function getRandomSkin() {
    var argv = Object[match[16]](this[match[15]]);
    if (argv[match[17]] > 0) {
      return this[match[15]][argv[argv[match[17]] * Math[match[19]]() << 0]][match[18]];
    } else {
      return match[20];
    }
  }
  /**
   * @param {?} a
   * @param {?} value
   * @return {?}
   */
  function ok(a, value) {
    /** @type {number} */
    var leftMargin = document[match[23]](match[22])[match[21]] / 2;
    /** @type {number} */
    var topMargin = document[match[23]](match[22])[match[24]] / 2;
    return{
      x : a - this[match[9]] + leftMargin,
      y : value - this[match[10]] + topMargin
    };
  }
  /**
   * @param {number} x
   * @param {number} y
   * @return {?}
   */
  function newCoord(x, y) {
    /** @type {number} */
    var delta = document[match[23]](match[22])[match[21]] / 2;
    /** @type {number} */
    var parentY = document[match[23]](match[22])[match[24]] / 2;
    return{
      x : this[match[9]] + (x - delta) / this[match[25]],
      y : this[match[10]] + (y - parentY) / this[match[25]]
    };
  }
  /**
   * @param {number} failing_message
   * @return {?}
   */
  function report(failing_message) {
    var off = Math[match[26]](30, ~~(failing_message * 0.2));
    /** @type {number} */
    var prefix = ~~(off / 60);
    /** @type {number} */
    var minutes = off % 60;
    return prefix + match[27] + minutes;
  }
  /**
   * @param {?} currentValue
   * @return {?}
   */
  function formatResult(currentValue) {
    /** @type {number} */
    var sMarkup = 2.2 * Math[match[28]](currentValue, -0.439);
    return sMarkup;
  }
  /**
   * @param {?} currentValue
   * @return {?}
   */
  function upload(currentValue) {
    var upload = Math[match[29]](Math[match[28]](currentValue, 2) / 100);
    return upload;
  }
  /**
   * @param {?} currentValue
   * @return {?}
   */
  function restoreScript(currentValue) {
    var elem = Math[match[29]](10 * Math[match[30]](currentValue));
    return elem;
  }
  /**
   * @return {undefined}
   */
  function _0x10592() {
    if (arguments[match[17]] && (arguments[0][match[34]] && arguments[0][match[34]][match[37]](document[match[36]][match[35]], match[3]) == match[38])) {
      arguments[0][match[34]] = match[3];
    }
    this[match[31]][match[39]](this, arguments);
  }
  /**
   * @return {undefined}
   */
  function _0x105EC() {
    if (match[42] === arguments[0]) {
      /** @type {number} */
      A1[match[43]] = 1;
      A1[match[44]] = match[3];
    } else {
      if (A1[match[43]] <= 10 && arguments[0][match[46]](A1[match[43]] + match[45]) == 0) {
        A1[match[44]] += arguments[0] + match[47];
        A1[match[43]]++;
      }
    }
    this[match[40]][match[39]](this, arguments);
  }
  /**
   * @return {undefined}
   */
  function _0x10646() {
    this[match[48]][match[39]](this, arguments);
  }
  /**
   * @param {?} options
   * @return {?}
   */
  function generate(options) {
    return Boolean(options[match[51]] > 64 && options[match[51]] < 91 || (options[match[51]] > 96 && options[match[51]] < 123 || !(options[match[51]] > 31 && (options[match[51]] < 48 || options[match[51]] > 57))));
  }
  /**
   * @param {?} walkers
   * @return {undefined}
   */
  function with_walkers(walkers) {
    if (A1[match[53]] != null) {
      if (A1[match[53]][match[54]]) {
        A1[match[53]][match[56]](match[55], walkers);
      }
    }
  }
  /**
   * @param {?} opt_obj2
   * @return {undefined}
   */
  function insertBefore(opt_obj2) {
    if (A1[match[57]] != null) {
      if (A1[match[57]][match[54]]) {
        A1[match[57]][match[56]](match[55], opt_obj2);
      }
    }
  }
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  function defaultEasingClass(deepDataAndEvents) {
    this[match[58]](deepDataAndEvents);
  }
  /**
   * @return {?}
   */
  function woot() {
    if (this[match[59]]) {
      var left = Date[match[60]]();
      var right = this[match[61]] + this[match[59]];
      if (left >= right) {
        /** @type {number} */
        this[match[59]] = 0;
        return this[match[62]];
      } else {
        if (this[match[63]]) {
          this[match[62]] = this[match[63]]();
        }
        return this[match[62]] - (this[match[62]] - this[match[64]]) * (right - left) / this[match[59]];
      }
    } else {
      return this[match[62]];
    }
  }
  /**
   * @param {?} val
   * @param {?} v
   * @return {undefined}
   */
  function setter(val, v) {
    if (val != this[match[62]]) {
      this[match[64]] = this[match[65]]();
      this[match[62]] = val;
      this[match[59]] = v;
      this[match[63]] = undefined;
      this[match[61]] = Date[match[60]]();
    }
  }
  /**
   * @param {?} cs1
   * @param {?} lerp
   * @return {undefined}
   */
  function follow(cs1, lerp) {
    this[match[64]] = this[match[65]]();
    this[match[63]] = cs1;
    this[match[59]] = lerp;
    this[match[61]] = Date[match[60]]();
  }
  /**
   * @param {?} idt
   * @return {undefined}
   */
  function toString(idt) {
    this[match[64]] = idt;
    this[match[62]] = idt;
    /** @type {number} */
    this[match[59]] = 0;
    this[match[61]] = Date[match[60]]();
  }
  /**
   * @return {undefined}
   */
  function parse() {
    if (agarioJS[match[70]] == 4) {
      var compare = agarioJS[match[71]];
      compare = compare[match[37]](/((var)\s(\w+?)={}),/, match[72]);
      compare = compare[match[37]](/if\(\w+?\.keyCode==32.*?"nick"\){\w+?\.preventDefault\(\)}/, match[3]);
      compare = compare[match[37]](/var\s\w+?=window\.document\.createElement\("script"\);.*?setAttribute.*?agario\.core\.js.*?;window\.document\.head\.appendChild\(\w+?\);/, match[73]);
      eval(compare);
      /** @type {XMLHttpRequest} */
      var dojo = new XMLHttpRequest;
      dojo[match[68]](match[66], match[74], true);
      /**
       * @return {undefined}
       */
      dojo[match[69]] = function() {
        if (dojo[match[70]] == 4) {
          var compare = dojo[match[71]];
          compare = compare[match[37]](/<script.*?src=".*?agario\.js.*?><\/script>/, match[3]);
          compare = compare[match[37]](/<script.*?src=".*?agario\.core\.js.*?><\/script>/, match[75]);
          compare = compare[match[37]](/<script.*?>[\s]*?.*?window\.NREUM[\s\S]*?<\/script>/, match[3]);
          compare = compare[match[37]](/(<\/html>)/, match[76]);
          document[match[68]]();
          document[match[58]](compare);
          document[match[77]]();
          /** @type {number} */
          var poll = setInterval(function() {
            if (window[match[78]] && (window[match[79]] && MC[match[80]])) {
              clearInterval(poll);
              replaceHTML();
            }
          }, 250);
          /** @type {number} */
          var theAnimationID = setInterval(function() {
            if (A1[match[81]]) {
              clearInterval(theAnimationID);
              setInterval(function() {
                if (window[match[79]] && (MC[match[82]] && MC[match[82]]())) {
                  A1[match[81]][match[87]][match[86]][match[85]][match[84]](match[83]);
                }
              }, 1 * 60 * 1E3);
            }
          }, 250);
        }
      };
      dojo[match[88]](null);
    }
  }
  /**
   * @param {?} element
   * @param {?} value
   * @return {undefined}
   */
  function setValue(element, value) {
    var listeners = document[match[90]](match[89])[0];
    var data = document[match[92]](match[91]);
    data[match[93]] = match[94];
    data[match[34]] = element;
    data[match[95]] = value;
    listeners[match[96]](data);
  }
  /**
   * @param {?} n
   * @return {undefined}
   */
  function createRegularNGon(n) {
    var object = document[match[90]](match[89])[0];
    var $cookies = object[match[90]](match[91]);
    /** @type {number} */
    var key = 0;
    for (;key < $cookies[match[17]];key++) {
      var value = $cookies[key];
      if (value[match[34]] == n) {
        object[match[97]](value);
        break;
      }
    }
  }
  /**
   * @param {?} limit
   * @param {?} element
   * @return {undefined}
   */
  function getElementsByTagName(limit, element) {
    var _0x118E8 = document[match[90]](match[89])[0];
    var data = document[match[92]](match[98]);
    data[match[99]] = match[100];
    data[match[93]] = match[101];
    data[match[102]] = limit;
    data[match[95]] = element;
    document[match[90]](match[89])[0][match[96]](data);
  }
  /**
   * @param {?} headers
   * @return {?}
   */
  function xhr(headers) {
    return headers[match[37]](/\w\S*/g, function(argv) {
      return argv[match[104]](0)[match[103]]() + argv[match[106]](1)[match[105]]();
    });
  }
  /**
   * @param {?} argv
   * @return {?}
   */
  function format(argv) {
    return match[107] + (match[109] + (16777215 ^ parseInt(argv[match[111]](1), 16))[match[110]](16))[match[108]](-6);
  }
  /**
   * @param {number} obj
   * @param {number} ignoreMethodDoesntExist
   * @param {number} methodName
   * @return {?}
   */
  function spyOn(obj, ignoreMethodDoesntExist, methodName) {
    return match[107] + ((1 << 24) + (obj << 16) + (ignoreMethodDoesntExist << 8) + methodName)[match[110]](16)[match[108]](1);
  }
  /**
   * @param {?} marker
   * @return {?}
   */
  function decode(marker) {
    return decodeURIComponent(((new RegExp(match[115] + marker + match[116] + match[117]))[match[114]](location[match[113]]) || [null, match[3]])[1][match[37]](/\+/g, match[112])) || null;
  }
  /**
   * @param {?} object
   * @return {?}
   */
  function clone(object) {
    var b = object[match[119]];
    var a = match[3];
    if (window[match[120]]) {
      if (object[match[93]] == match[41]) {
        if (A1[match[43]] <= 10 && b[match[46]](A1[match[43]] + match[45]) == 0) {
          a = b[match[121]](/\d{1,2}\.\s/)[0];
          b = b[match[37]](a, match[3]);
        }
      }
      if (b == defaultNick) {
        b = A1[match[122]];
      }
      b = a + b;
    }
    return b;
  }
  /**
   * @return {undefined}
   */
  function onSuccess() {
    $(match[126])[match[125]]()[match[124]](match[89]);
    $(match[128])[match[127]]();
    $(match[131])[match[130]](match[129]);
    $(match[134])[match[133]](match[132]);
    $(match[136])[match[133]](match[135]);
    $(match[138])[match[133]](match[137]);
    $(match[140])[match[133]](match[139]);
    $(match[142])[match[133]](match[141]);
    $(match[144])[match[133]](match[143]);
    $(match[126])[match[130]](match[145]);
    $(match[126])[match[148]]({
      "width" : match[146],
      "float" : match[147]
    });
    $(match[159])[match[158]](match[149], match[150], match[151], match[152], match[153], match[154], match[155], match[156], match[157]);
    $(match[161])[match[160]]();
    $(match[164])[match[163]](match[162]);
    $(match[168])[match[167]]()[match[148]](match[165], match[166]);
    $(window)[match[170]](function() {
      if (window[match[169]]) {
        resetBallsHolder();
      }
    });
    if (!A1[match[171]]) {
      $(match[172])[match[148]](match[21], match[146]);
      $(match[173])[match[160]]();
      $(match[174])[match[167]]()[match[148]](match[165], match[166]);
      for (;$(match[176])[match[175]]()[0][match[177]][match[105]]() == match[178];) {
        $(match[176])[match[175]]()[match[127]]();
      }
      for (;$(match[179])[match[175]]()[0][match[177]][match[105]]() == match[178];) {
        $(match[179])[match[175]]()[match[127]]();
      }
    }
    click();
  }
  /**
   * @return {undefined}
   */
  function click() {
    setValue(match[180] + Date[match[60]]());
    getElementsByTagName(match[181]);
    launch();
  }
  /**
   * @return {undefined}
   */
  function getAsset() {
    /** @type {XMLHttpRequest} */
    var dojo = new XMLHttpRequest;
    dojo[match[68]](match[66], match[182], true);
    /**
     * @return {undefined}
     */
    dojo[match[69]] = function() {
      if (dojo[match[70]] == 4) {
        var compare = dojo[match[71]];
        coreScript = compare;
        compare = compare[match[37]](/(var\s(.?)=new\sWebSocket\(.+?\)\;)/, match[183]);
        compare = compare[match[37]](/(if\(\w\.MC&&\w\.MC\.onPlayerSpawn\))/, match[184]);
        compare = compare[match[37]](/(if\(\w\.MC&&\w\.MC\.onPlayerDeath\))/, match[185]);
        compare = compare[match[37]](/(setTarget:function\((\w),(\w)\)){/, match[186]);
        compare = compare[match[37]](/(var\s(\w+?)=new\sImage)\;\w+?\.src=(\w+?\(\w+?\))\;/, match[187]);
        compare = compare[match[37]](/((\w+?)=\+\(\(\w\[\w\+\d+>>\d.*;(\w+?)=\+\(\(\w\[.*\/2\|\d\)\|0\)\/\w\+\s\+\w\[\w\+\d+>>3\];)/, match[188]);
        compare = compare[match[37]](/(proxyMobileData:function\((\w)\)){/, match[189]);
        compare = compare[match[37]](/(connect:function\((\w)\)){/, match[190]);
        compare = compare[match[37]](/(sendNick:function\((\w)\)){/, match[191]);
        compare = compare[match[37]](/(\w\.\w\[\w\]\.([A-Za-z]+?))\((\w\(\w\))/g, match[192]);
        compare = compare[match[37]](/if\((\+\w\[\w>>3\])<1\.0\){/i, match[193]);
        compare = compare[match[37]](/(do{\w=\+\w\[\(\w\[\w>>2\]\|0\)\+\d+>>2];\w=\w\+\s*)(\+\(~~\+\w\(\+\(\w\*\w\/100\.0\)\)\|0\))(;\w=\w\+4\|0}while\(\(\w\|0\)!=\(\w\|0\)\);(\w)=(\w);)/i, match[194]);
        compare = compare[match[37]](/(\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);\w\[\w\+(\d+)>>3]=(\w);)/i, match[195]);
        compare = compare[match[37]](/([\w$]+\(\d+,\w\[\w>>2\]\|0,(\+\w),(\+\w)\)\|0;[\w$]+\(\d+,\w\[\w>>2\]\|0,\+-(\+\w\[\w\+\d+>>3\]),\+-(\+\w\[\w\+\d+>>3\])\)\|0;)/i, match[196]);
        compare = compare[match[37]](/((\w+?)=\+\(\(\w\[\w\+\d+>>\d.*;(\w+?)=\+\(\(\w\[.*\/2\|\d\)\|0\)\/\w\+\s\+\w\[\w\+\d+>>3\];)/, match[197]);
        compare = compare[match[37]](/(if\(\w<=)(20\.0)(\){\w=\w;return})(if\(!(\w)\){if\(\(\w\[\d+\]\|0\)!=\(\w\[\d+\]\|0\)\){\w=\w;return}if\(\(\w\[\w\+\d+>>0\]\|0\)!=0\?\(\w\[\w>>0\]\|0\)==0:0\){\w=\w;return}})((\w\[\w>>2\])=~~\+[\w$]+\(\+\((\w)\*\w\/100\.0\)\);)/i, match[198]);
        compare = compare[match[37]](/(\w=~~\(\+\(\w\[\w\+\d+>>2\]\|0\)\/\w)\);([\w$]+\(\w\)\|0;)(\w=~~\(\+\(\w\[\w\+\d+>>2\]\|0\)\/\w)\);(if\(!\w\){\w=\w;return})/i, match[199]);
        compare = compare[match[37]](/(function\s*([\w$]+)\(\w\){return\s*[\w$]+\(\w,\w\)})/i, match[200]);
        compare = compare[match[37]](/(if\(\(\w\[\d+\]\|0\)!=0\?\(\w\[\d+\]\|\w\[(\w)\+\d+>>0\]\)<<24>>24==0:0\))((\w)=\w\[(\w)\+\d+>>2\]\|0;)else/i, match[201]);
        compare = compare[match[37]](/(\w=0;\w=\w\[\w\+(\d+)>>2\]\|0;\w=\w\[(\d+)\]\|0;\w=\w\[\d+\]\|0;)(\w:do)/i, match[202]);
        compare = compare[match[37]](/do\s*if\((\w)\){((\w)=!\((\+\w\[\w>>2\])<=20\.0\);)([\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;[\w$]+\(\d+,\w\[\w>>2]\|0,(\+\(\+\w\[\w>>2\]\)),(\+\(\+\w\[\w>>2\]\)),\+\(\+\w\[\w>>2\])\+5\.0(\),0\.0,6\.283185307179586,0\)\|0;[\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;\w=\w\[\w>>2\]\|0;)if\(\w\){([\w$]+\(\d+,\w\|0,(\w&255\|0),(\w&255\|0),(\w&255\|0)\)\|0;)([\w$]+\(\d+,\w\[\w>>2]\|0\)\|0;)/i, match[203]);
        eval(compare);
      }
    };
    dojo[match[88]](null);
  }
  /**
   * @return {undefined}
   */
  function launch() {
    /**
     * @return {undefined}
     */
    function process() {
      setTimeout(process, 1E3 / 60);
      A1[match[256]] = argv[match[257]]();
    }
    /**
     * @param {?} name
     * @param {?} relpath
     * @param {?} easing
     * @param {boolean} dataAndEvents
     * @param {boolean} err
     * @param {string} key
     * @param {?} res
     * @return {undefined}
     */
    function cmdAdd(name, relpath, easing, dataAndEvents, err, key, res) {
      if (A1[match[923]] != name) {
        try {
          if ($(match[107] + name)[match[17]]) {
            if (dataAndEvents && (err || res == A1[match[14]])) {
              $(match[107] + name)[match[936]]();
            } else {
              $(match[107] + name)[match[160]]();
            }
            if (err) {
              document[match[23]](name)[match[217]][match[937]] = relpath + match[938];
              document[match[23]](name)[match[217]][match[939]] = easing + match[938];
            } else {
              if (key != null) {
                /** @type {number} */
                var marker = (-getTextWidth(key, match[940]) + 10) / 2;
                var value = document[match[92]](match[276]);
                value[match[217]][match[941]] = match[942] + marker + match[943];
                var camelKey = document[match[944]](key);
                value[match[96]](camelKey);
                document[match[23]](name)[match[804]] = value[match[945]];
              }
              if (!playerObj[name]) {
                playerObj[name] = {
                  x : new defaultEasingClass(relpath),
                  y : new defaultEasingClass(easing)
                };
              } else {
                playerObj[name][match[209]][match[946]](relpath, 2E3);
                playerObj[name][match[211]][match[946]](easing, 2E3);
              }
            }
          } else {
            var cfg = document[match[92]](match[800]);
            cfg[match[206]] = name;
            var comment = match[947];
            if (err) {
              comment += match[948];
              cfg[match[217]][match[941]] = comment;
            } else {
              if (!err) {
                comment += match[949];
                cfg[match[217]][match[941]] = comment;
              }
            }
            document[match[23]](match[950])[match[96]](cfg);
            $(match[107] + name)[match[160]]();
          }
        } catch (x) {
          console[match[1]](x);
        }
      }
    }
    /**
     * @return {undefined}
     */
    function init() {
      var fnName = EnvConfig[match[955]];
      /** @type {null} */
      var _0x13562 = null;
      /** @type {XMLHttpRequest} */
      var req = new XMLHttpRequest;
      req[match[68]](match[66], match[956] + EnvConfig[match[957]] + match[958] + Date[match[60]](), true);
      /**
       * @return {undefined}
       */
      req[match[69]] = function() {
        if (req[match[70]] == 4) {
          latestID = req[match[71]];
          /** @type {number} */
          oldLatestID = 264;
          _0x13562 = fnName + match[959] + oldLatestID + match[959];
          fnName += match[959] + latestID + match[959];
          /** @type {XMLHttpRequest} */
          var argv = new XMLHttpRequest;
          argv[match[68]](match[66], fnName + match[960], true);
          /**
           * @return {undefined}
           */
          argv[match[69]] = function() {
            if (argv[match[70]] == 4) {
              var cfg = JSON[match[823]](argv[match[71]]);
              var value = cfg[match[962]][match[961]];
              var defaultProcessor = cfg[match[962]][match[963]];
              var object = cfg[match[962]][match[964]];
              /** @type {XMLHttpRequest} */
              var req = new XMLHttpRequest;
              req[match[68]](match[66], fnName + match[965], true);
              /**
               * @return {undefined}
               */
              req[match[69]] = function() {
                if (req[match[70]] == 4) {
                  var cfg = JSON[match[823]](req[match[71]]);
                  /** @type {number} */
                  var section = 0;
                  for (;section < value[match[17]];section++) {
                    if (value[section][match[966]] != match[967] || !value[section][match[968]]) {
                      var __ = value[section][match[969]];
                      var x = xhr((cfg[match[970]][match[873]](value[section][match[877]]) ? cfg[match[970]][value[section][match[877]]] : value[section][match[877]][match[37]](match[971], match[3]))[match[37]](/([^\w]|_)/g, match[803]));
                      var y = object[match[866]](function(argv) {
                        return argv[match[206]] == __;
                      })[0] && object[match[866]](function(argv) {
                        return argv[match[206]] == __;
                      })[0][match[972]] || 0;
                      var srcTerminal = defaultProcessor[match[866]](function(argv) {
                        return argv[match[973]] == __;
                      })[0] && (typeof defaultProcessor[match[866]](function(argv) {
                        return argv[match[973]] == __;
                      })[0][match[974]] == match[975] && fnName + defaultProcessor[match[866]](function(argv) {
                        return argv[match[973]] == __;
                      })[0][match[974]][match[37]](match[976], match[3]) + match[977]) || match[3];
                      var key = x + match[978] + y;
                      if (value[section][match[968]]) {
                        key += match[978] + xhr(value[section][match[968]][match[37]](/([^\w]|_)/g, match[803]));
                      }
                      if (y > 0) {
                        A1[match[867]][key] = {
                          id : __,
                          title : x,
                          src : srcTerminal,
                          price : y
                        };
                        var res = document[match[92]](match[979]);
                        res[match[879]] = key;
                        res[match[824]] = key;
                        document[match[23]](match[981])[match[980]](res);
                      }
                    }
                  }
                  var relatedTarget = $(match[982]);
                  var r20 = $(match[984])[match[983]](function(a, b) {
                    return a[match[879]] == b[match[879]] ? 0 : a[match[879]] < b[match[879]] ? -1 : 1;
                  });
                  $(match[176])[match[817]](r20)[match[985]](relatedTarget);
                  /** @type {number} */
                  $(match[176])[match[65]](0)[match[986]] = 0;
                }
              };
              req[match[88]](null);
            }
          };
          argv[match[88]](null);
        }
      };
      req[match[88]](null);
    }
    /**
     * @return {undefined}
     */
    function handler() {
      setInterval(function() {
        if (A1[match[226]]) {
          var argv = document[match[1015]](innerWidth / 2, innerHeight / 2);
          if (!A1[match[12]] || argv[match[206]] == match[1016]) {
            if (window[match[79]]) {
              MC[match[819]]($(match[818])[match[224]]());
            }
          }
        }
      }, 1E3);
      setInterval(function() {
        if (A1[match[212]] != null) {
          socket1({
            type : match[932]
          });
        }
      }, 3E3);
      setInterval(function() {
        socket2({
          type : match[954]
        });
      }, 100);
      setInterval(function() {
        updatePos();
      }, 40);
      setInterval(function() {
        updateTarget();
      }, 40);
      setInterval(function() {
        /** @type {number} */
        var index = parseInt((A1[match[9]] + 14142 / 2) / 14142 * 100);
        /** @type {number} */
        var num2 = parseInt((A1[match[10]] + 14142 / 2) / 14142 * 100);
        currentLocation = getLocation(index, num2);
      }, 250);
      setInterval(function() {
        if (A1[match[171]]) {
          /**
           * @param {Object} key
           * @param {Object} data
           * @return {?}
           */
          var dataAttr = function(key, data) {
            if (typeof key == match[1017]) {
              var keywords = {
                "true" : {
                  text : match[1018],
                  color : match[1019]
                },
                "false" : {
                  text : match[1020],
                  color : match[1021]
                }
              };
              return match[1022] + keywords[key][match[1023]] + match[1024] + (data && (typeof data == match[1025] && (data[match[873]](key) && data[key])) || keywords[key][match[879]]) + match[1026];
            }
            return match[1022] + (data || match[1027]) + match[1024] + key + match[1026];
          };
          var which = match[3];
          if (botsOnline) {
            which += match[1028] + dataAttr(botCount, match[1019]);
            which += match[1029] + dataAttr($(match[235])[match[224]]()[match[104]](0)[match[103]]()) + match[1030] + dataAttr($(match[244])[match[1032]](match[1031]), match[1019]);
          }
          which += !botsOnline && match[1028] + dataAttr(botsOnline) || match[3];
          which += match[1029] + dataAttr($(match[231])[match[224]]()[match[104]](0)[match[103]]()) + match[1033] + dataAttr(A1[match[232]]);
          which += match[1029] + dataAttr($(match[225])[match[224]]()[match[104]](0)[match[103]]()) + match[1034] + dataAttr(A1[match[226]]);
          if (botsOnline) {
            which += match[1029] + dataAttr($(match[247])[match[224]]()[match[104]](0)[match[103]]()) + match[1035] + dataAttr(botsFrozen);
            which += match[1029] + dataAttr($(match[234])[match[224]]()[match[104]](0)[match[103]]()) + match[1036] + dataAttr(collectFood);
          }
          which += !botsOnline && match[1037] + dataAttr(botsOnline, {
            "true" : match[1038],
            "false" : match[1039]
          }) || match[3];
          which += !minimapOnline && match[1040] + dataAttr(botsOnline, {
            "true" : match[1038],
            "false" : match[1039]
          }) || match[3];
          which += A1[match[212]] != null && match[1041] + dataAttr(currentUsers) || match[3];
          $(match[1042])[match[817]](which);
        }
        $(match[134])[match[936]]();
        $(match[144])[match[148]]({
          "width" : match[1043],
          "float" : match[937],
          "display" : match[1044]
        });
      }, 250);
      setInterval(function() {
        /** @type {number} */
        var relpath = (A1[match[9]] + 14142 / 2) / 14142 * 100;
        /** @type {number} */
        var ERR_UNKNOWN_REF = (A1[match[10]] + 14142 / 2) / 14142 * 100;
        $(match[1045])[match[148]](match[937], relpath + match[938]);
        $(match[1045])[match[148]](match[939], ERR_UNKNOWN_REF + match[938]);
        /** @type {number} */
        var baseURL = (A1[match[1046]] + 14142 / 2) / 14142 * 100;
        /** @type {number} */
        var section = (A1[match[1047]] + 14142 / 2) / 14142 * 100;
        $(match[1048])[match[148]](match[937], baseURL + match[938]);
        $(match[1048])[match[148]](match[939], section + match[938]);
        try {
          var line;
          for (line in playerObj) {
            if (!playerObj[match[873]](line)) {
              continue;
            }
            var value = playerObj[line];
            if ($(match[107] + line)[match[17]]) {
              $(match[107] + line)[match[148]]({
                "left" : value[match[209]][match[65]]() + match[938],
                "top" : value[match[211]][match[65]]() + match[938]
              });
            }
          }
        } catch (x) {
          console[match[1]](x);
        }
      }, 75);
    }
    setInterval(function() {
      A1[match[204]]();
    }, 2E3);
    document[match[219]](match[205], function(cfg) {
      if (cfg[match[207]][match[206]] == match[208] && (cfg[match[209]] >= window[match[210]] - 50 && cfg[match[211]] <= 50)) {
        if (A1[match[212]] == null) {
          var s = match[3];
          if (localStorage[match[213]]) {
            s = localStorage[match[214]](match[213]);
          }
          /** @type {(null|string)} */
          var r = prompt(match[215], s);
          if (r != null) {
            /** @type {string} */
            A1[match[212]] = r;
            localStorage[match[216]](match[213], A1[match[212]]);
            $(match[168])[match[167]]()[match[218]](match[217]);
          }
        }
      }
    }, false);
    document[match[219]](match[220], function(argv) {
      if ($(match[221])[match[17]]) {
        var _0x12266 = String[match[222]](argv[match[51]]);
        if (argv[match[51]] == 87) {
          if (!fastFeed) {
            /** @type {boolean} */
            fastFeed = true;
            setTimeout(function() {
              window[match[223]]();
            }, feedTimeout);
          }
        }
        if (_0x12266 == $(match[225])[match[224]]()[match[104]](0)[match[103]]()) {
          if (window[match[226]]) {
            autoPlay();
          }
        }
        if (_0x12266 == $(match[227])[match[224]]()[match[104]](0)[match[103]]()) {
          if (window[match[228]]) {
            window[match[228]](2);
          }
        }
        if (_0x12266 == $(match[229])[match[224]]()[match[104]](0)[match[103]]()) {
          if (window[match[228]]) {
            window[match[228]](3);
          }
        }
        if (_0x12266 == $(match[230])[match[224]]()[match[104]](0)[match[103]]()) {
          if (window[match[228]]) {
            window[match[228]](4);
          }
        }
        if (_0x12266 == $(match[231])[match[224]]()[match[104]](0)[match[103]]()) {
          /** @type {boolean} */
          A1[match[232]] = !A1[match[232]];
        }
        if (A1[match[171]]) {
          if (_0x12266 == $(match[233])[match[224]]()[match[104]](0)[match[103]]()) {
            startBots();
          }
          if (_0x12266 == $(match[234])[match[224]]()[match[104]](0)[match[103]]()) {
            /** @type {boolean} */
            collectFood = !collectFood;
          }
          if (_0x12266 == $(match[235])[match[224]]()[match[104]](0)[match[103]]()) {
            if ($(match[238])[match[237]](match[236])) {
              $(match[241])[match[240]](match[239], true);
            } else {
              $(match[244])[match[243]]()[match[243]]()[match[243]]()[match[242]]();
            }
          }
          if (_0x12266 == $(match[245])[match[224]]()[match[104]](0)[match[103]]()) {
            updatePos(true, false);
          }
          if (_0x12266 == $(match[246])[match[224]]()[match[104]](0)[match[103]]()) {
            updatePos(false, true);
          }
          if (_0x12266 == $(match[247])[match[224]]()[match[104]](0)[match[103]]()) {
            if (botsFrozen == true) {
              /** @type {boolean} */
              botsFrozen = false;
            } else {
              /** @type {boolean} */
              botsFrozen = true;
            }
          }
        }
      }
      if (!pressedKeys[match[248]](argv[match[51]])) {
        pressedKeys[match[249]](argv[match[51]]);
      }
    }, false);
    document[match[219]](match[250], function(argv) {
      var _0x12266 = String[match[222]](argv[match[51]]);
      if (argv[match[51]] == 87) {
        /** @type {boolean} */
        fastFeed = false;
      }
      var r20 = pressedKeys[match[46]](argv[match[51]]);
      if (r20 > -1) {
        pressedKeys[match[251]](r20, 1);
      }
    }, false);
    /** @type {Array} */
    pressedKeys = [];
    /** @type {number} */
    currentUsers = 0;
    /** @type {null} */
    currentLocation = null;
    /** @type {boolean} */
    botsFrozen = false;
    /** @type {number} */
    botCount = 0;
    defaultNick = match[252] + Math[match[253]](Math[match[19]]() * 99 + 1);
    /** @type {number} */
    startSplit = 75;
    /** @type {number} */
    startFeed = 250;
    /** @type {number} */
    feedTimeout = startFeed;
    /** @type {boolean} */
    fastFeed = false;
    /** @type {number} */
    speedUp = 3;
    /** @type {number} */
    rotateSpeed = 1E3;
    /** @type {boolean} */
    rotateSkins = false;
    /** @type {number} */
    rotateInterval = 0;
    playerObj = {};
    /** @type {boolean} */
    collectFood = false;
    var argv = {
      startTime : 0,
      frameNumber : 0,
      /**
       * @return {?}
       */
      getFPS : function() {
        this[match[254]]++;
        /** @type {number} */
        var lowestDeltaXY = (Date[match[60]]() - this[match[255]]) / 1E3;
        var lastFPS = Math[match[253]](this[match[254]] / lowestDeltaXY);
        if (lowestDeltaXY > 1) {
          this[match[255]] = Date[match[60]]();
          /** @type {number} */
          this[match[254]] = 0;
        }
        return lastFPS;
      }
    };
    process();
    var _0x12158 = Date[match[60]]()[match[110]]()[match[260]](match[3])[match[259]](function(m1) {
      return String[match[222]](97 + parseInt(m1));
    })[match[258]](match[3]);
    /** @type {Array} */
    var array = [[match[261], match[262], match[263], match[264], match[265], match[266], match[267], match[268], match[269], match[270], match[271], match[272], match[273], match[274], match[275], match[276], match[277], match[278], match[279], match[280], match[281], match[282], match[283], match[209], match[211], match[284]], [match[285], match[286], match[287], match[288], match[289], match[290], match[291], match[292], match[293], match[294], match[295], match[296], match[297], match[298], match[299], 
    match[300], match[301], match[302], match[303], match[304], match[305], match[306], match[307], match[308], match[309], match[310]], [match[311], match[312], match[313], match[314], match[315], match[316], match[317], match[318], match[319], match[320], match[321], match[322], match[323], match[324], match[325], match[326], match[327], match[328], match[329], match[330], match[331], match[332], match[333], match[334], match[335], match[336]], [match[337], match[338], match[339], match[340], match[341], 
    match[342], match[343], match[344], match[345], match[346], match[347], match[348], match[349], match[350], match[351], match[352], match[353], match[354], match[355], match[356], match[357], match[358], match[359], match[360], match[361], match[362]], [match[363], match[364], match[365], match[366], match[367], match[368], match[369], match[370], match[371], match[372], match[373], match[374], match[375], match[376], match[377], match[378], match[379], match[380], match[381], match[382], match[383], 
    match[384], match[385], match[386], match[387], match[388]], [match[389], match[390], match[391], match[392], match[393], match[394], match[395], match[396], match[397], match[398], match[399], match[400], match[401], match[402], match[403], match[404], match[405], match[406], match[407], match[408], match[409], match[410], match[411], match[412], match[413], match[414]], [match[415], match[416], match[417], match[418], match[419], match[420], match[421], match[422], match[423], match[424], match[425], 
    match[426], match[427], match[428], match[429], match[430], match[431], match[432], match[433], match[434], match[435], match[436], match[437], match[438], match[439], match[440]], [match[441], match[442], match[263], match[443], match[444], match[445], match[267], match[446], match[447], match[448], match[449], match[450], match[451], match[452], match[453], match[454], match[277], match[455], match[279], match[456], match[457], match[282], match[458], match[209], match[459], match[284]], [match[261], 
    match[442], match[263], match[264], match[265], match[445], match[267], match[446], match[447], match[270], match[460], match[272], match[451], match[274], match[275], match[276], match[277], match[278], match[461], match[456], match[457], match[282], match[283], match[462], match[211], match[284]], [match[463], match[464], match[465], match[466], match[467], match[468], match[469], match[470], match[471], match[472], match[449], match[272], match[473], match[474], match[475], match[476], match[477], 
    match[478], match[479], match[280], match[480], match[481], match[482], match[483], match[484], match[284]], [match[485], match[486], match[487], match[488], match[489], match[490], match[491], match[492], match[493], match[494], match[495], match[496], match[497], match[498], match[499], match[500], match[501], match[502], match[503], match[504], match[505], match[506], match[507], match[508], match[509], match[510]], [match[441], match[511], match[512], match[443], match[444], match[513], match[514], 
    match[515], match[471], match[516], match[517], match[450], match[518], match[519], match[453], match[454], match[520], match[521], match[479], match[522], match[523], match[524], match[458], match[484], match[525], match[526]], [match[527], match[528], match[529], match[530], match[531], match[532], match[491], match[533], match[534], match[535], match[536], match[537], match[538], match[539], match[540], match[541], match[542], match[543], match[544], match[468], match[545], match[546], match[547], 
    match[548], match[549], match[550]], [match[551], match[277], match[552], match[276], match[553], match[554], match[555], match[556], match[557], match[558], match[559], match[472], match[560], match[281], match[275], match[264], match[262], match[561], match[279], match[562], match[274], match[563], match[564], match[209], match[565], match[284]], [match[566], match[567], match[568], match[530], match[569], match[532], match[570], match[571], match[572], match[573], match[574], match[575], match[576], 
    match[577], match[540], match[578], match[579], match[580], match[581], match[582], match[583], match[546], match[584], match[585], match[586], match[587]], [match[588], match[589], match[590], match[591], match[592], match[593], match[594], match[595], match[493], match[596], match[597], match[598], match[599], match[600], match[601], match[602], match[603], match[604], match[605], match[606], match[607], match[608], match[609], match[610], match[611], match[612]], [match[613], match[262], match[614], 
    match[615], match[616], match[266], match[594], match[268], match[493], match[270], match[597], match[617], match[273], match[600], match[618], match[619], match[277], match[604], match[279], match[620], match[281], match[608], match[621], match[209], match[622], match[623]], [match[624], match[528], match[625], match[626], match[627], match[468], match[628], match[629], match[630], match[535], match[631], match[632], match[633], match[634], match[635], match[636], match[579], match[637], match[638], 
    match[639], match[640], match[546], match[547], match[548], match[641], match[642]], [match[643], match[644], match[645], match[488], match[646], match[647], match[594], match[648], match[649], match[650], match[536], match[651], match[652], match[653], match[654], match[655], match[501], match[656], match[657], match[658], match[659], match[506], match[660], match[661], match[662], match[510]], [match[663], match[664], match[665], match[666], match[667], match[668], match[669], match[670], match[671], 
    match[672], match[673], match[674], match[675], match[676], match[677], match[678], match[679], match[680], match[681], match[682], match[683], match[684], match[685], match[686], match[687], match[688]], [match[689], match[690], match[691], match[692], match[693], match[694], match[695], match[696], match[697], match[698], match[699], match[700], match[701], match[702], match[703], match[704], match[705], match[706], match[707], match[708], match[709], match[710], match[711], match[712], match[713], 
    match[714]], [match[715], match[716], match[717], match[718], match[719], match[720], match[721], match[722], match[723], match[724], match[725], match[726], match[727], match[728], match[729], match[730], match[731], match[732], match[733], match[734], match[735], match[736], match[737], match[738], match[739], match[740]], [match[741], match[742], match[743], match[744], match[745], match[746], match[747], match[748], match[749], match[750], match[751], match[752], match[753], match[754], match[755], 
    match[756], match[757], match[758], match[759], match[760], match[761], match[762], match[763], match[764], match[765], match[766]], [match[767], match[768], match[769], match[770], match[771], match[772], match[773], match[774], match[775], match[776], match[777], match[778], match[779], match[780], match[781], match[782], match[783], match[784], match[785], match[786], match[787], match[788], match[789], match[790], match[791], match[792]]];
    var object = array[0];
    /**
     * @return {undefined}
     */
    window[match[169]] = function() {
      if ($(match[793])[match[17]]) {
        $(match[793])[match[794]]();
        if (window[match[795]]) {
          window[match[795]] = {};
        }
      }
    };
    /**
     * @return {undefined}
     */
    window[match[796]] = function() {
      if (rotateInterval != 0) {
        clearInterval(rotateInterval);
      }
      if (rotateSkins) {
        var _0x123CE = getOwnedSkins();
        /** @type {number} */
        rotateInterval = setInterval(function() {
          A1[match[81]][match[87]][match[86]][match[85]][match[798]](A1[match[797]]());
        }, rotateSpeed);
      }
    };
    /**
     * @param {?} marker
     * @param {?} dataAndEvents
     * @param {?} threshold
     * @return {undefined}
     */
    window[match[799]] = function(marker, dataAndEvents, threshold) {
      var cfg = document[match[92]](match[800]);
      cfg[match[801]] = match[802];
      if (marker) {
        cfg[match[801]] += match[803] + marker;
      }
      cfg[match[804]] = match[805];
      if (dataAndEvents) {
        cfg[match[804]] += dataAndEvents;
      }
      document[match[23]](match[806])[match[96]](cfg);
      var value = document[match[808]](match[807]);
      /** @type {number} */
      var section = 0;
      for (;section < value[match[17]];section++) {
        /**
         * @return {undefined}
         */
        value[section][match[809]] = function() {
          var cfg = this[match[810]];
          cfg[match[217]][match[811]] = match[812];
          setTimeout(function() {
            cfg[match[217]][match[165]] = match[166];
          }, 600);
        };
      }
      if (threshold) {
        setTimeout(function() {
          cfg[match[217]][match[165]] = match[166];
        }, threshold);
      }
    };
    /** @type {boolean} */
    hasStartedAutoPlay = false;
    /**
     * @return {undefined}
     */
    window[match[226]] = function() {
      if (!A1[match[226]]) {
        if (!hasStartedAutoPlay) {
          /** @type {boolean} */
          hasStartedAutoPlay = true;
          addAlert(match[813], match[814] + $(match[225])[match[224]]()[match[104]](0)[match[103]]() + match[815], 7E3);
        }
        /** @type {boolean} */
        A1[match[226]] = true;
        $(match[172])[match[817]](match[816]);
        if (window[match[79]]) {
          MC[match[819]]($(match[818])[match[224]]());
        }
      } else {
        /** @type {boolean} */
        A1[match[226]] = false;
        $(match[172])[match[817]](match[820]);
      }
    };
    /**
     * @return {undefined}
     */
    window[match[821]] = function() {
      try {
        /** @type {boolean} */
        var _0x12590 = false;
        if (localStorage[match[822]]) {
          _0x12590 = JSON[match[823]](localStorage[match[214]](match[822])[match[105]]());
        } else {
          localStorage[match[216]](match[822], false);
        }
        if (_0x12590) {
          A1[match[122]] = document[match[23]](match[122])[match[824]][match[17]] ? document[match[23]](match[122])[match[824]] : match[803];
        } else {
          var _0x12536 = window[match[826]](match[825]);
          if (_0x12536) {
            var _0x125EA = window[match[68]](match[827], match[828]);
            if (_0x125EA) {
              localStorage[match[216]](match[822], true);
              A1[match[122]] = document[match[23]](match[122])[match[824]];
            } else {
              addAlert(null, match[829], 7E3);
            }
          } else {
            document[match[23]](match[122])[match[824]] = A1[match[122]];
          }
        }
      } catch (err) {
      }
    };
    /**
     * @return {undefined}
     */
    window[match[223]] = function() {
      if (fastFeed) {
        if (window[match[830]]) {
          if (core[match[831]]) {
            core[match[831]]();
          }
        }
        /** @type {number} */
        feedTimeout = feedTimeout / speedUp;
        setTimeout(function() {
          window[match[223]]();
        }, feedTimeout);
      } else {
        feedTimeout = startFeed;
      }
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    window[match[228]] = function(dataAndEvents) {
      if (dataAndEvents > 0) {
        core[match[260]]();
        setTimeout(function() {
          repeatSplit(--dataAndEvents);
        }, startSplit);
      }
    };
    /**
     * @return {undefined}
     */
    window[match[832]] = function() {
      if ($(match[833])[match[237]](match[236])) {
        if (window[match[834]]) {
          drawSectors();
        }
      } else {
        if (!$(match[835])[match[237]](match[236])) {
          if (window[match[836]]) {
            drawMapBorders();
          }
        }
      }
    };
    /**
     * @return {undefined}
     */
    window[match[834]] = function() {
      var argv = document[match[23]](match[22]);
      var elem = argv[match[838]](match[837]);
      /** @type {number} */
      var y = A1[match[839]] - A1[match[4]];
      /** @type {number} */
      var offset = A1[match[840]] - A1[match[6]];
      /** @type {number} */
      var a = A1[match[841]] - A1[match[4]];
      /** @type {number} */
      var start = A1[match[842]] - A1[match[6]];
      /** @type {number} */
      var c = 5;
      /** @type {number} */
      var i = 5;
      var value = match[843];
      /** @type {number} */
      var tmp = 40;
      if (A1[match[7]]) {
        var height = Math[match[253]]((a - y) / c);
        var objectRefSize = Math[match[253]]((start - offset) / i);
        var relpath = Math[match[253]](0.5 * objectRefSize);
        /** @type {number} */
        var maxY = 0;
        /** @type {number} */
        var index = 0;
        elem[match[844]] = value;
        elem[match[845]] = value;
        /** @type {number} */
        elem[match[846]] = tmp;
        elem[match[847]]();
        /** @type {number} */
        var length = 0;
        for (;c + 1 > length;length++) {
          /** @type {number} */
          maxY = y + height * length;
          elem[match[848]](length == c ? a : maxY, offset);
          elem[match[849]](length == c ? a : maxY, start);
        }
        /** @type {number} */
        length = 0;
        for (;i + 1 > length;length++) {
          /** @type {number} */
          index = offset + objectRefSize * length;
          elem[match[848]](y - tmp / 2, length == i ? start : index);
          elem[match[849]](a + tmp / 2, length == i ? start : index);
        }
        elem[match[850]]();
        elem[match[851]] = relpath + match[852];
        elem[match[853]] = match[854];
        elem[match[855]] = match[856];
        /** @type {number} */
        length = 0;
        for (;i > length;length++) {
          /** @type {number} */
          var j = 0;
          for (;c > j;j++) {
            var r20 = String[match[222]](65 + length) + (j + 1);
            maxY = Math[match[253]](y + height / 2 + j * height);
            index = Math[match[253]](offset + objectRefSize / 2 + length * objectRefSize);
            elem[match[41]](r20, maxY, index);
          }
        }
      }
    };
    /**
     * @return {undefined}
     */
    window[match[836]] = function() {
      var argv = document[match[23]](match[22]);
      var data = argv[match[838]](match[837]);
      /** @type {number} */
      var dataPointer = A1[match[839]] - A1[match[4]];
      /** @type {number} */
      var relationOptions = A1[match[840]] - A1[match[6]];
      /** @type {number} */
      var r20 = A1[match[841]] - A1[match[4]];
      /** @type {number} */
      var restoreScript = A1[match[842]] - A1[match[6]];
      var value = match[857];
      /** @type {number} */
      var element = 40;
      if (A1[match[7]]) {
        data[match[858]]();
        data[match[844]] = value;
        /** @type {number} */
        data[match[846]] = element;
        data[match[859]] = match[860];
        data[match[861]] = match[860];
        data[match[847]]();
        data[match[848]](dataPointer, relationOptions);
        data[match[849]](r20, relationOptions);
        data[match[849]](r20, restoreScript);
        data[match[849]](dataPointer, restoreScript);
        data[match[862]]();
        data[match[850]]();
        data[match[863]]();
      }
    };
    /**
     * @return {?}
     */
    window[match[864]] = function() {
      var cfg = A1[match[81]][match[87]][match[869]][match[868]][match[867]][match[866]](function(argv) {
        return argv[match[865]] == true;
      });
      A1[match[15]] = {};
      /** @type {number} */
      var uriField = 0;
      for (;uriField < cfg[match[17]];uriField++) {
        A1[match[15]][cfg[uriField][match[870]]] = {
          productID : cfg[uriField][match[871]]
        };
      }
      return A1[match[15]];
    };
    /**
     * @param {(Node|string)} current
     * @return {undefined}
     */
    window[match[872]] = function(current) {
      if (current && A1[match[867]][match[873]](current)) {
        $(match[874])[match[240]](match[34], A1[match[867]][current][match[34]]);
      }
    };
    /**
     * @param {?} section
     * @return {undefined}
     */
    window[match[875]] = function(section) {
      /** @type {boolean} */
      var _0x12B30 = false;
      if (localStorage[match[876]]) {
        _0x12B30 = JSON[match[823]](localStorage[match[214]](match[876])[match[105]]());
      } else {
        localStorage[match[216]](match[876], false);
      }
      if (_0x12B30) {
        if (section != match[3] && A1[match[867]][section]) {
          var marker = A1[match[867]][section][match[877]];
          var sel = A1[match[867]][section][match[206]];
          /** @type {number} */
          var a = parseInt(A1[match[867]][section][match[878]]);
          var matches = getOwnedSkins();
          if (!matches[sel]) {
            /** @type {number} */
            var b = parseInt($(match[880])[match[879]]()[match[37]](/[^0-9]/g, match[3]));
            if (a <= b) {
              var eventName = match[881] + marker + match[882] + a + match[883];
              var subscribers = window[match[826]](eventName);
              if (subscribers) {
                if (window[match[79]]) {
                  MC[match[886]](match[884], {
                    tab : match[885]
                  });
                }
                setTimeout(function() {
                  A1[match[81]][match[87]][match[889]]()[match[888]](match[887], sel);
                }, 600);
              }
            } else {
              addAlert(match[890], match[891] + b + match[892] + (a - b) + match[893], 7E3);
            }
          } else {
            addAlert(match[890], match[894], 7E3);
          }
        } else {
          addAlert(match[890], match[895], 7E3);
        }
      } else {
        subscribers = window[match[826]](match[896]);
        if (subscribers) {
          var _0x125EA = window[match[68]](match[897], match[828]);
          if (_0x125EA) {
            localStorage[match[216]](match[876], true);
          } else {
            addAlert(null, match[829], 7E3);
          }
        }
      }
    };
    /**
     * @param {number} index
     * @return {undefined}
     */
    window[match[898]] = function(index) {
      if (document[match[23]](match[899])[match[824]] != match[3]) {
        /** @type {number} */
        index = parseInt(index) - 1;
        if (typeof array[index] != match[900]) {
          /** @type {number} */
          var key = 0;
          for (;key < object[match[17]];key++) {
            /** @type {RegExp} */
            var stringPrefixes = new RegExp(object[key], match[901]);
            document[match[23]](match[899])[match[824]] = document[match[23]](match[899])[match[824]][match[37]](stringPrefixes, array[index][key]);
          }
          object = array[0];
          /** @type {number} */
          key = 0;
          for (;key < object[match[17]];key++) {
            /** @type {RegExp} */
            stringPrefixes = new RegExp(object[key], match[901]);
            document[match[23]](match[899])[match[824]] = document[match[23]](match[899])[match[824]][match[37]](stringPrefixes, array[index][key]);
          }
          object = array[index];
        } else {
          throw new Error(match[902] + index);
        }
      }
    };
    /**
     * @param {Array} options
     * @return {?}
     */
    window[match[903]] = function(options) {
      var word = match[3];
      /** @type {number} */
      var i = 0;
      for (;i < options[match[17]];i++) {
        var current = getRandomInt(2, 23);
        letter = options[i];
        /** @type {number} */
        var key = 0;
        for (;key < array[current][match[17]];key++) {
          /** @type {RegExp} */
          var rclass = new RegExp(array[0][key], match[901]);
          letter = letter[match[37]](rclass, array[current][key]);
        }
        word += letter;
      }
      return word;
    };
    /**
     * @param {number} near
     * @param {number} far
     * @return {?}
     */
    window[match[904]] = function(near, far) {
      return Math[match[253]](Math[match[19]]() * (far - near + 1)) + near;
    };
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    window[match[905]] = function(dataAndEvents) {
      if (document[match[23]](match[899])[match[824]] != match[3]) {
        var undef = getRandomInt(2, 23);
        $(match[907])[match[224]](undef)[match[906]]();
        getFont(undef);
      }
    };
    /**
     * @param {?} dojo
     * @return {undefined}
     */
    window[match[908]] = function(dojo) {
      var marker = dojo[match[37]](match[910], match[3])[match[37]](match[909], match[3]);
      if (marker != A1[match[8]][match[37]](match[910], match[3])[match[37]](match[909], match[3])) {
        core[match[911]](match[910] + marker);
      }
    };
    /**
     * @param {number} num
     * @param {number} val
     * @return {?}
     */
    window[match[912]] = function(num, val) {
      if (!(0 <= num && (num <= 100 && (0 <= val && val <= 100)))) {
        return match[3];
      }
      /** @type {Array} */
      var value = [[match[913], match[914], match[915]], [match[916], match[917], match[918]], [match[919], match[920], match[921]]];
      /** @type {number} */
      var h = 0;
      for (;h < value[match[17]];h++) {
        var horizontalSegments = value[match[17]];
        if (parseInt(h / horizontalSegments * 100) <= num && num <= parseInt((h + 1) / horizontalSegments * 100)) {
          /** @type {number} */
          var i = 0;
          for (;i < value[h][match[17]];i++) {
            var amount = value[h][match[17]];
            if (parseInt(i / amount * 100) <= val && val <= parseInt((i + 1) / amount * 100)) {
              return value[h][i];
            }
          }
        }
      }
      return match[3];
    };
    A1[match[53]] = io(match[922]);
    /** @type {boolean} */
    minimapOnline = false;
    A1[match[53]][match[926]](match[911], function() {
      A1[match[923]] = A1[match[53]][match[925]][match[924]][match[206]];
      /** @type {boolean} */
      minimapOnline = true;
    });
    A1[match[53]][match[926]](match[55], function(argv) {
      try {
        if (argv[match[93]]) {
          switch(argv[match[93]]) {
            case match[927]:
              if ($(match[107] + argv[match[206]])[match[17]]) {
                $(match[107] + argv[match[206]])[match[127]]();
              }
              if (playerObj[match[873]](argv[match[206]])) {
                delete playerObj[argv[match[206]]];
              }
              break;
            case match[11]:
              cmdAdd(argv[match[206]], argv[match[209]], argv[match[211]], argv[match[928]], argv[match[929]], argv[match[119]], argv[match[930]]);
              break;
            case match[932]:
              currentUsers = argv[match[931]];
              break;
          }
        }
      } catch (x) {
        console[match[1]](x);
      }
    });
    A1[match[53]][match[926]](match[933], function() {
      resetBallsHolder();
      /** @type {boolean} */
      minimapOnline = false;
    });
    /**
     * @param {?} selector
     * @param {?} key
     * @return {?}
     */
    window[match[934]] = function(selector, key) {
      var argv = getTextWidth[match[22]] || (getTextWidth[match[22]] = document[match[92]](match[22]));
      var res = argv[match[838]](match[837]);
      res[match[851]] = key;
      var elem = res[match[935]](selector);
      return elem[match[21]];
    };
    /** @type {boolean} */
    botsOnline = false;
    if (A1[match[171]]) {
      A1[match[57]] = io(match[951]);
      A1[match[57]][match[926]](match[911], function() {
        A1[match[952]] = A1[match[57]][match[925]][match[924]][match[206]];
        /** @type {boolean} */
        botsOnline = true;
        setTimeout(function() {
          socket2({
            type : match[953]
          });
        }, 1500);
      });
      A1[match[57]][match[926]](match[933], function() {
        /** @type {boolean} */
        botsOnline = false;
        resetBallsHolder();
      });
      A1[match[57]][match[926]](match[55], function(argv) {
        try {
          if (argv[match[93]]) {
            switch(argv[match[93]]) {
              case match[927]:
                if ($(match[107] + argv[match[206]])[match[17]]) {
                  $(match[107] + argv[match[206]])[match[127]]();
                }
                if (playerObj[match[873]](argv[match[206]])) {
                  delete playerObj[argv[match[206]]];
                }
                break;
              case match[11]:
                cmdAdd(argv[match[206]], argv[match[209]], argv[match[211]], argv[match[928]], argv[match[929]], argv[match[119]], argv[match[930]]);
                break;
              case match[954]:
                botCount = argv[match[931]];
                break;
            }
          }
        } catch (x) {
          console[match[1]](x);
        }
      });
    }
    init();
    /**
     * @return {undefined}
     */
    window[match[987]] = function() {
      /** @type {Array} */
      var defaultProcessor = [];
      var cfg = document[match[90]](match[988]);
      /** @type {number} */
      var uriField = 0;
      for (;uriField < cfg[match[17]];uriField++) {
        if (cfg[uriField][match[206]]) {
          /** @type {null} */
          var origValue = null;
          if (cfg[uriField][match[93]] == match[989]) {
            origValue = cfg[uriField][match[239]];
          } else {
            origValue = cfg[uriField][match[824]];
          }
          defaultProcessor[match[249]]({
            type : cfg[uriField][match[93]],
            id : cfg[uriField][match[206]],
            value : origValue
          });
        }
      }
      localStorage[match[216]](match[990], JSON[match[991]](defaultProcessor));
    };
    /**
     * @return {undefined}
     */
    window[match[992]] = function() {
      /** @type {Array} */
      var headers = [match[993], match[994], match[995], match[833]];
      /** @type {number} */
      var current = 0;
      for (;current < headers[match[17]];current++) {
        $(headers[current])[match[240]](match[239], false);
        $(headers[current])[match[242]]();
      }
      if (localStorage[match[990]]) {
        var conf = JSON[match[823]](localStorage[match[214]](match[990]));
        /** @type {number} */
        current = 0;
        for (;current < conf[match[17]];current++) {
          var line = conf[current][match[206]];
          var r20 = conf[current][match[824]];
          var lower = conf[current][match[93]];
          if ($(match[107] + line)[match[17]] && line != match[996]) {
            if (lower != match[989]) {
              $(match[107] + line)[match[224]](r20);
            } else {
              $(match[107] + line)[match[240]](match[239], !r20);
              $(match[107] + line)[match[242]]();
            }
          }
        }
      }
      if ($(match[179])[match[224]]() == match[3]) {
        $(match[179])[match[224]](defaultNick);
      }
      A1[match[122]] = $(match[179])[match[224]]();
    };
    restoreStorage();
    /** @type {number} */
    var poll = setInterval(function() {
      if (A1[match[4]] && A1[match[6]]) {
        clearInterval(poll);
      }
      restoreStorage();
    }, 100);
    /**
     * @param {?} dataAndEvents
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    window[match[997]] = function(dataAndEvents, deepDataAndEvents) {
      if (A1[match[8]]) {
        /** @type {number} */
        var moveX = 0;
        /** @type {number} */
        var moveY = 0;
        var _0x133FA = $(match[998])[match[224]]();
        switch(_0x133FA) {
          case match[999]:
            moveX = A1[match[9]];
            moveY = A1[match[10]];
            break;
          case match[1002]:
            moveX = A1[match[1E3]];
            moveY = A1[match[1001]];
            break;
        }
        var values = {
          x : moveX,
          y : moveY,
          ip : A1[match[8]],
          nick : defaultNick,
          frozen : botsFrozen,
          auto : collectFood
        };
        if (dataAndEvents) {
          /** @type {boolean} */
          values[match[260]] = true;
        }
        if (deepDataAndEvents) {
          /** @type {boolean} */
          values[match[831]] = true;
        }
        values[match[93]] = match[1003];
        socket2(values);
      }
    };
    /**
     * @return {undefined}
     */
    window[match[1004]] = function() {
      if (A1[match[226]]) {
        if (A1[match[1005]]) {
          var cfg = {
            balls : Object[match[1008]](A1[match[1007]][match[1006]]),
            my_balls : Object[match[1008]](A1[match[1007]][match[1009]])
          };
          if (!decode(match[1010])) {
            cfg[match[1006]][match[249]]({
              x : A1[match[9]],
              y : A1[match[840]],
              size : A1[match[1012]](A1[match[1011]]) * 1.5,
              cellType : 0
            });
            cfg[match[1006]][match[249]]({
              x : A1[match[9]],
              y : A1[match[842]],
              size : A1[match[1012]](A1[match[1011]]) * 1.5,
              cellType : 0
            });
            cfg[match[1006]][match[249]]({
              x : A1[match[839]],
              y : A1[match[10]],
              size : A1[match[1012]](A1[match[1011]]) * 1.5,
              cellType : 0
            });
            cfg[match[1006]][match[249]]({
              x : A1[match[841]],
              y : A1[match[10]],
              size : A1[match[1012]](A1[match[1011]]) * 1.5,
              cellType : 0
            });
          }
          A1[match[1005]][match[1013]](cfg);
        } else {
          if (window[match[1014]]) {
            A1[match[1005]] = new InfinityAi;
          }
        }
      }
      A1[match[1007]][match[1006]] = {};
      A1[match[1007]][match[1009]] = {};
    };
    handler();
  }
  /** @type {Array} */
  var match = ["Agar/Slither Infinity", "log", "A1", "", "mapOffsetX", "mapOffset", "mapOffsetY", "mapOffsetFixed", "serverIP", "playerX", "playerY", "minimap-update", "hasSpawned", "playerNick", "clanTag", "ownedSkins", "keys", "length", "productID", "random", "skin_empty", "width", "canvas", "getElementById", "height", "viewScale", "max", ":", "pow", "ceil", "sqrt", "_drawImage", "prototype", "drawImage", "src", "protocol", "location", "replace", "//agar.io/img/background.png", 
  "apply", "_fillText", "fillText", "Leaderboard", "leaderboardIndex", "leaderboardData", ". ", "indexOf", "\n", "_strokeText", "strokeText", "isLetterKey", "keyCode", "socket1", "socket", "connected", "command", "emit", "socket2", "write", "timeout", "now", "frTime", "toVal", "following", "frVal", "get", "GET", "//agar.io/mc/agario.js", "open", "onreadystatechange", "readyState", "responseText", "$1;A1.game=$3;$2 ", "window.getCore && getCore();", "//agar.io/", "<script>window.getCore && getCore();\x3c/script>", 
  "$1 <script>window.loaded = true;\x3c/script>", "close", "loaded", "MC", "coreWasLoaded", "game", "isUserLoggedIn", "hourlyBonus", "activateTimedEvent", "shop", "services", "Core", "send", "head", "getElementsByTagName", "script", "createElement", "type", "text/javascript", "onload", "appendChild", "removeChild", "link", "rel", "stylesheet", "text/css", "href", "toUpperCase", "charAt", "toLowerCase", "substr", "#", "slice", "000000", "toString", "substring", "%20", "search", "exec", "[?|&]", "=", 
  "([^&;]+?)(&|#|;|$)", "replaceName", "name", "defaultNick", "match", "botsNick", "replaceHTML", "appendTo", "detach", ".btn-spectate", "remove", "#agario-web-incentive, .diep-cross", "#overlays", "insertBefore", "<style>ul{display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-pack:justify;list-style:none;padding:0;}.hidden{position:absolute!important;clip:rect(1px,1px,1px,1px);padding:0!important;border:0!important;height:1px!important;width:1px!important;overflow:hidden}.alert{padding:20px;background-color:#f44336;color:#fff;opacity:1;transition:opacity .6s;margin-bottom:15px}.alert.success{background-color:#4CAF50}.alert.info{background-color:#2196F3}.alert.warning{background-color:#ff9800}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;transition:.3s}.closebtn:hover{color:#000}#alertBox{position:absolute;width:300px;z-index:999;left:10px;bottom:10px;}#minimap{background:rgba(0,0,0,.8) url(https://i.imgur.com/4dGACLo.png);background-size:100% 100%;width:200px;height:200px;right:0;bottom:0;position:fixed;z-index:1;pointer-events:none}#last_death_pointer,#player_pointer{border-radius:50%;top:50%;left:50%;margin-left:-5px;margin-top:-5px;width:10px;height:10px;position:absolute;pointer-events:none}#player_pointer{background-color:green}#last_death_pointer{background-color:red}#balls_holder,#other_balls_holder{position:relative;width:100%;height:100%;pointer-events:none}#preview-img-area{width:150px;height:150px;border-radius:100%;display:block;box-shadow:0 0 8px rgba(0,0,0,.8);margin:0 auto auto;margin-top:0;background-color:#212121!important}#bots-info{z-index:1;background:rgba(0,0,0,.4);border-radius:15px;width:200px;top:10px;left:10px;display:block;position:fixed;pointer-events:none;text-align:center;font-size:15px;color:#fff;padding:5px;font-family:Ubuntu}#preview-img{border-radius:100%;border-color:#212121!important;width:150px;height:150px;background:#212121!important}img{transition:all .5s ease}</style><div id=minimap><div id=balls_holder><div id=player_pointer></div><div id=last_death_pointer></div><div id=other_balls_holder></div></div></div><div id=bots-info></div><div id=alertBox></div>", 
  '<iframe src="https://discordapp.com/widget?id=174991160274583552&theme=light" class="agario-promo" style="padding: 0px; width: 293px; height: 366px; position: relative;" allowtransparency="true" frameborder="0"></iframe>', "replaceWith", ".agario-promo", '<div id="mainPanel" class="agario-panel disable-mouse">\n<div role="form" novalidate>\n   <div class="form-group clearfix">\n      <div style="float: left; margin-left: 20px;">\n         <h2>A. Infinity</h2>\n      </div>\n      <div style="float: right; margin-top: 10px; height: 40px;">\n         <div id="agarYoutube">\n            <div class="g-ytsubscribe" data-channelid="UCr_r9ypG_wbSI8Ct3GH30tA" data-layout="default" data-count="default"></div>\n         </div>\n         <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">\n            <input type="hidden" name="cmd" value="_s-xclick">\n            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHZwYJKoZIhvcNAQcEoIIHWDCCB1QCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYC3FUpvboADLznAi/7jux2IUsE1EXqF+KwVvYOhd6gMvGbj7I2OpR0FYA0O9HTLqleLK3uVwroyWt9n40vRmNvPxKVKHwxg1viBKItEpzjt/oY6PQuagzO7HVOBU1WweJSfA5G+G+JAvSDQqjIE+cUZ76bGe52QvaTTBMhPGw9ajTELMAkGBSsOAwIaBQAwgeQGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIN6irbq26R9iAgcDN7Xc9K2VuG5urJ0Kg5lWElLXoxOSAVvSurDRbMIpFL26UGQzrJrLhNQUDzKbEb4kdWGsua4++x5mUdQJRQBQfa9wFZZA8OjRSd0bhc8c3v4V+AqtsooqFhqB2Hu3aez7llJvjOYcKJaso1oNcU6ZmWx8L9CDdRevTlUa8vn4HPIbcm3icvNlLaHDT2u/CGJSnrn5ij6tDQbq/g+1i0G7SB2aoyLoaO4NdJkhJh2o977VDn2UEYVi3qLfRVxYYmaSgggOHMIIDgzCCAuygAwIBAgIBADANBgkqhkiG9w0BAQUFADCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wHhcNMDQwMjEzMTAxMzE1WhcNMzUwMjEzMTAxMzE1WjCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMFHTt38RMxLXJyO2SmS+Ndl72T7oKJ4u4uw+6awntALWh03PewmIJuzbALScsTS4sZoS1fKciBGoh11gIfHzylvkdNe/hJl66/RGqrj5rFb08sAABNTzDTiqqNpJeBsYs/c2aiGozptX2RlnBktH+SUNpAajW724Nv2Wvhif6sFAgMBAAGjge4wgeswHQYDVR0OBBYEFJaffLvGbxe9WT9S1wob7BDWZJRrMIG7BgNVHSMEgbMwgbCAFJaffLvGbxe9WT9S1wob7BDWZJRroYGUpIGRMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAIFfOlaagFrl71+jq6OKidbWFSE+Q4FqROvdgIONth+8kSK//Y/4ihuE4Ymvzn5ceE3S/iBSQQMjyvb+s2TWbQYDwcp129OPIbD9epdr4tJOUNiSojw7BHwYRiPh58S1xGlFgHFXwrEBb3dgNbMUa+u4qectsMAXpVHnD9wIyfmHMYIBmjCCAZYCAQEwgZQwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0xNjA3MDUxOTE5NDFaMCMGCSqGSIb3DQEJBDEWBBTztBmRzAbBw4rXVPku6TwWNlN8zTANBgkqhkiG9w0BAQEFAASBgB2nKH0utvVGC096NFWSaSD+Q1r/PrCu2R5ZGNBf3L1OIr4HPjFEoiGj2fA9Iudo23BAdYBj//Dig/EBCdMZNkfXtMuFqzLZG8O5FO4KHm4kqCsS6BMm5fZHyb2nvdlrRg8x+R9ybOn8ZiIwVBXt9DWD6gByN+QgSuPr7rExCJZn-----END PKCS7-----">\n            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\n            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">\n         </form>\n         \x3c!--<div class="clearfix">\n            <div class="fb-like pull-right" data-href="https://www.facebook.com/playagar.io" data-layout="button" data-action="like" data-show-faces="true" data-share="true"></div>\n            </div>--\x3e\n      </div>\n   </div>\n   <ul class="nav nav-tabs  nav-justified">\n      <li class="active"><a data-toggle="pill" href="#play-menu"><i class="material-icons">home</i></a></li>\n      <li><a data-toggle="pill" href="#hacks-menu"><i class="material-icons">blur_on</i></a></li>\n      <li><a data-toggle="pill" href="#settings-menu"><i class="material-icons">settings</i></a></li>\n      <li><a data-toggle="pill" href="#hot-keys-menu"><i class="material-icons">keyboard</i></a></li>\n      <li><a data-toggle="pill" href="#special-menu"><i class="material-icons">panorama_fish_eye</i></a></li>\n   </ul>\n   <div class="tab-content">\n      <br>\n      <div id="play-menu" class="tab-pane fade in active">\n         <div class="form-group clearfix">\n            <div id="locationKnown">\n               <input id="clanTag" class="form-control" placeholder="Team" style="width: 26%; float: left;" maxlength="10" />\n               <input id="nick" class="form-control" placeholder="Nick" style="width: 72%; float: right;" maxlength="15" autofocus />\n               <br><br>\n               <br style="display: block;content: &quot;&quot;;margin-top: 6px;">\n               <select id="font" class="form-control" onchange="getFont($(this).val());" style="width: 61%; float: left;">\n                  <option selected disabled>Select a font</option>\n                  <option value="1">abcdefghijklmnopqrstuvwxyz</option>\n                  <option value="2">&#120094;&#120095;&#120096;&#120097;&#120098;&#120099;&#120100;&#120101;&#120102;&#120103;&#120104;&#120105;&#120106;&#120107;&#120108;&#120109;&#120110;&#120111;&#120112;&#120113;&#120114;&#120115;&#120116;&#120117;&#120118;&#120119;</option>\n                  <option value="3">&#120042;&#120043;&#120044;&#120045;&#119942;&#119943;&#120048;&#120049;&#120050;&#120051;&#120052;&#120053;&#120054;&#120055;&#120056;&#120057;&#120058;&#120059;&#120060;&#120061;&#120062;&#120063;&#120064;&#120065;&#120066;&#120067;</option>\n                  <option value="4">&#119990;&#119991;&#119992;&#119993;&#119890;&#119995;&#119892;&#119997;&#119998;&#119999;&#120000;&#120001;&#120002;&#120003;&#119900;&#120005;&#120006;&#120007;&#120008;&#120009;&#120010;&#120011;&#120012;&#120013;&#120014;&#120015;</option>\n                  <option value="5">&#120016;&#120017;&#120018;&#120019;&#120020;&#120021;&#120022;&#120023;&#120024;&#120025;&#120026;&#120027;&#120028;&#120029;&#120030;&#120031;&#120032;&#120033;&#120034;&#120035;&#120036;&#120037;&#120038;&#120039;&#120040;&#120041;</option>\n                  <option value="6">&#119808;&#119809;&#119810;&#119811;&#119812;&#119813;&#119814;&#119815;&#119816;&#119817;&#119818;&#119819;&#119820;&#119821;&#119822;&#119823;&#119824;&#119825;&#119826;&#119827;&#119828;&#119829;&#119830;&#119831;&#119832;&#119833;</option>\n                  <option value="7">&#119834;&#119835;&#119836;&#119837;&#119838;&#119839;&#119840;&#119841;&#119842;&#119843;&#119844;&#119845;&#119846;&#119847;&#119848;&#119849;&#119850;&#119851;&#119852;&#119853;&#119854;&#119855;&#119856;&#119857;&#119858;&#119859;</option>\n                  <option value="8">&#945;&#1074;c&#8706;&#949;&#1171;g&#1085;&#953;&#1504;&#1082;&#8467;&#1084;&#951;&#963;&#961;q&#1103;s&#1090;&#965;v&#969;x&#1199;z</option>\n                  <option value="9">a&#1074;cde&#1171;g&#1085;&#953;j&#312;l&#1084;nopqr&#1109;&#1090;&#965;vw&#1093;yz</option>\n                  <option value="10">&#3588;&#3666;&#962;&#3668;&#1108;&#358;&#65262;&#1106;&#3648;&#1503;&#1082;l&#3667;&#3616;&#3663;&#1511;&#7907;&#1075;&#3619;t&#3618;&#1513;&#3628;&#1509;&#1488;z</option>\n                  <option value="11">&#5609;&#5623;&#5205;&#5610;&#5620;&#5556;&#484;&#5500;&#5029;&#5262;&#5845;&#5290;&#5616;&#5198;&#5597;&#5229;&#586;&#5511;&#5397;&#428;&#5196;&#5167;&#5615;&amp;&#5741;&#435;&#20057;</option>\n                  <option value="12">&#945;&#595;&#2798;&#8706;&#949;&#402;&#608;&#614;&#3648;&#669;&#1185;&#8467;&#625;&#627;&#963;&#961;&#966;&#2792;&#3619;&#429;&#181;&#1141;&#969;&#1488;&#4327;&#438;</option>\n                  <option value="13">&#916;&#946;&#262;&#272;&#8364;&#8355;&#484;&#294;&#407;&#308;&#1180;&#321;&#924;&#327;&#216;&#420;&#937;&#344;&#350;&#358;&#7918;V&#372;&#1046;&#165;&#381;</option>\n                  <option value="14">&#592;q&#596;p&#477;&#607;&#387;&#613;!&#638;&#670;&#1503;&#623;uodb&#633;s&#647;n&#652;&#653;x&#654;z</option>\n                  <option value="15">&#8371;&#3647;&#8373;&#272;&#582;&#8355;&#8370;&#11367;&#322;J&#8365;&#11360;&#8357;&#8358;&#216;&#8369;Q&#11364;&#8372;&#8366;&#580;V&#8361;&#1278;&#590;&#11371;</option>\n                  <option value="16">&#5079;&#5104;&#4936;&#5044;&#5067;&#5030;&#5046;&#5058;&#5029;&#5088;&#5094;&#5085;&#5047;&#5057;&#5031;&#5038;&#5028;&#5074;&#5077;&#5078;&#5100;&#5065;&#5063;&#4864;&#5033;&#4954;</option>\n                  <option value="17">&#5034;b&#5087;&#5024;&#5036;f&#5046;h&#5029;j&#5094;&#5086;m&#5057;&#5054;&#5090;q&#5074;s&#5062;u&#5065;&#5043;x&#5053;&#5059;</option>\n                  <option value="18">&#258;&#946;&#268;&#270;&#276;&#358;&#286;&#292;&#296;&#308;&#310;&#313;&#1052;&#323;&#336;&#1056;Q&#340;&#346;&#356;&#218;V&#372;&#1046;&#374;&#377;</option>\n                  <option value="19">&#21314;&#20035;&#21274;&#5610;&#20039;&#21315;&#5046;&#21316;&#20008;&#65420;&#1180;&#12581;&#29226;&#20960;&#12566;&#21353;&#586;&#23610;&#19970;&#12562;&#12585;&#5167;&#23665;&#20034;&#12570;&#20057;</option>\n                  <option value="20">&#120120;&#120121;&#8450;&#120123;&#120124;&#120125;&#120126;&#8461;&#120128;&#120129;&#120130;&#120131;&#120132;&#8469;&#120134;&#8473;&#8474;&#8477;&#120138;&#120139;&#120140;&#120141;&#120142;&#120143;&#120144;&#8484;</option>\n                  <option value="21">&#120146;&#120147;&#120148;&#120149;&#120150;&#120151;&#120152;&#120153;&#120154;&#120155;&#120156;&#120157;&#120158;&#120159;&#120160;&#120161;&#120162;&#120163;&#120164;&#120165;&#120166;&#120167;&#120168;&#120169;&#120170;&#120171;</option>\n                  <option value="22">&#9398;&#9399;&#9400;&#9401;&#9402;&#9403;&#9404;&#9405;&#9406;&#9407;&#9408;&#9409;&#9410;&#9411;&#9412;&#9413;&#9414;&#9415;&#9416;&#9417;&#9418;&#9419;&#9420;&#9421;&#9422;&#9423;</option>\n                  <option value="23">&#9424;&#9425;&#9426;&#9427;&#9428;&#9429;&#9430;&#9431;&#9432;&#9433;&#9434;&#9435;&#9436;&#9437;&#9438;&#9439;&#9440;&#9441;&#9442;&#9443;&#9444;&#9445;&#9446;&#9447;&#9448;&#9449;</option>\n                  <option value="24">&#127344;&#127345;&#127346;&#127347;&#127348;&#127349;&#127350;&#127351;&#127352;&#127353;&#127354;&#127355;&#127356;&#127357;&#127358;&#127359;&#127360;&#127361;&#127362;&#127363;&#127364;&#127365;&#127366;&#127367;&#127368;&#127369;</option>\n               </select>\n               <button class="btn btn-primary" style="float: right;" onclick="getRandomFont()"><b>Random Font</b></button>\n               \x3c!--<button class="btn btn-success" style="width: 100%; float: left;" onclick="getRandomWord()"><b>Get Random Nick</b></button><br/><br/>--\x3e\n               <br style="display: block;content: &quot;&quot;;margin-top: 50px;">\n               <div id="locationUnknown"></div>\n               <select id="region" class="form-control" onchange="MC.setRegion($(this).val());" required>\n                  <option selected disabled value="" data-itr="page_region_select"></option>\n                  <option value="US-Atlanta" data-itr="page_region_north_america"></option>\n                  <option value="BR-Brazil" data-itr="page_region_south_america"></option>\n                  <option value="EU-London" data-itr="page_region_europe"></option>\n                  <option value="RU-Russia" data-itr="page_region_russia"></option>\n                  <option value="TK-Turkey" data-itr="page_region_turkey"></option>\n                  <option value="JP-Tokyo" data-itr="page_region_east_asia"></option>\n                  <option value="CN-China" data-itr="page_region_china"></option>\n                  <option value="SG-Singapore" data-itr="page_region_oceania"></option>\n               </select>\n               <select id="gamemode" class="form-control" style="width: 36%; float: right;" onchange="MC.setGameMode($(this).val());" required>\n                  <option value="" data-itr="gamemode_ffa"></option>\n                  <option value=":teams" data-itr="gamemode_teams"></option>\n                  <option value=":experimental" data-itr="gamemode_experimental"></option>\n                  <option value=":party" data-itr="party"></option>\n               </select>\n            </div>\n         </div>\n         <div class="form-group" id="agario-main-buttons">\n            <div class="row">\n               <button type="button" onclick="toggleSettings(); return false;" class="btn btn-info btn-settings"><i class="glyphicon glyphicon-cog"></i>\n               </button>\n               <button disabled type="submit" onclick="MC.setNick(document.getElementById(\'nick\').value); return false;" class="btn btn-play btn-primary btn-needs-server" data-itr="page_play"></button>\n               <button disabled type="submit" onclick="MC.setNick(document.getElementById(\'nick\').value); return false;" class="btn btn-play-guest btn-success btn-needs-server" data-itr="page_play_as_guest"></button>\n               <button disabled type="submit" onclick="toggleSocialLogin(); return false" class="btn btn-warning btn-login-play btn-needs-server" data-itr="page_login_and_play">Login and play</button>\n            </div>\n            <div id="socialLoginContainer" style="display:none;">\n               <div class="row">\n                  <button onclick="facebookLogin(); return false;" class="btn btn-primary btn-login btn-fb">\n                  <span class="social social-facebook fb-icon"></span>\n                  <span class="btn-text" data-itr="page_menu_login_facebook">Login with Facebook</span>\n                  </button>\n               </div>\n               <div class="row">\n                  <button id="gplusLogin" class="btn btn-primary btn-login btn-gplus">\n                  <span class="gplus-icon"></span>\n                  <span class="btn-text" data-itr="page_menu_login_google">Login with Google</span>\n                  </button>\n               </div>\n            </div>\n         </div>\n         <div id="settings" class="checkbox" style="display:none;">\n            <div style="float: left; width: 200px;">\n               <div id="settingsChoice" style="margin-top:6px">\n                  <select id="quality" style="display:none" class="form-control" onchange="MC.setQuality($(this).val());" required>\n                     <option disabled value="" data-itr="page_graphics_title"></option>\n                     <option value="Retina" selected data-itr="page_graphics_retina"></option>\n                     <option value="High" selected data-itr="page_graphics_high"></option>\n                     <option value="Medium" data-itr="page_graphics_medium"></option>\n                     <option value="Low" data-itr="page_graphics_low"></option>\n                     <option value="VeryLow" data-itr="page_graphics_very_low"></option>\n                  </select>\n               </div>\n            </div>\n            <div style="float: right; width: 120px;">\n               \x3c!--<button disabled class="btn btn-warning btn-spectate btn-needs-server" style="width:320px;float:right; !important" data-itr="page_spectate">Spectate</button>--\x3e\n               <button onclick="logout(); return false;" style="width:320px;float:right; !important" class="btn btn-danger btn-logout" data-itr="page_logout">Logout</button>\n            </div>\n            <br clear="both" />\n            <div id="tags-container">\n               <span id="user-id-tag"></span>\n               <span id="version-tag"></span>\n            </div>\n         </div>\n      </div>\n      <div id="hacks-menu" class="tab-pane fade">\n         <div style="float:left;">\n            <button id="autoPlay" style="width: 200px;" class="btn btn-primary" onclick="window.autoPlay && autoPlay();"><b>Start Auto Play</b></button>\n            <br style="display: block;content: &quot;&quot;;margin-top: 6px;">\n            <button id="getBots" style="width: 200px;" class="btn btn-success" onclick="window.getBots && getBots();"><b>Get Bots</b></button>\n            <br style="display: block;content: &quot;&quot;;margin-top: 6px;">\n         </div>\n         <div style="float: right;">\n            <div id="bots-follow">\n               <input type="radio" id="follow-cell" name="follow" value="cell" data-value=" Cell">\n               <label for="follow-cell">Cell</label><br>\n               <input type="radio" id="follow-mouse" name="follow" value="mouse" data-value=" Mouse" checked="checked">\n               <label for="follow-mouse">Mouse</label><br>\n            </div>\n         </div>\n         <br clear="both">\n\t\t <input id="botsNick" class="form-control" placeholder="Name your bots :P" maxlength="15" onchange="renameBots();" style="float:left;width:100%;">\n         <br><br>\n         <select id="skinSelector" class="form-control" onchange="showSkinImage($(this).val());" style="width: 62%; float: left;">\n            <option selected disabled value="">Select a skin to buy</option>\n         </select>\n         <button class="btn btn-info" style="width: 35%; float: right;" onclick="buySkin($(\'#skinSelector\').val());"><b>Buy skin</b></button>\n         <br><br><br>\n         <div id="preview-img-area">\n            <img id="preview-img">\n         </div>\n      </div>\n      <div id="settings-menu" class="tab-pane fade">\n\t     <input id="ip" class="form-control" placeholder="Connect to a server" onblur="serverConnect($(this).val());"/>\n         <div id="options" style="margin-top: 6px; font-size: 12px; display:flex; flex-wrap: wrap; justify-content: center"></div>\n      </div>\n      <div id="hot-keys-menu" class="tab-pane fade">\n         <ul class="nav nav-pills nav-justified">\n            <li class="active"><a data-toggle="pill" href="#main-keys">Main Keys</a></li>\n            <li><a data-toggle="pill" href="#bot-keys">Bot Keys</a></li>\n         </ul>\n         <div class="tab-content" style="overflow-y: auto;">\n            <br>\n            <div id="main-keys" class="tab-pane fade in active">\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Double Split:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="double-split" onkeypress="return isLetterKey(event)" class="form-control" value="A" placeholder="A" maxlength="1"><br/><br/>\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Triple Split:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="triple-split" onkeypress="return isLetterKey(event)" class="form-control" value="D" placeholder="D" maxlength="1"><br/><br/>\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Split 16:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="split-16" onkeypress="return isLetterKey(event)" class="form-control" value="F" placeholder="F" maxlength="1"><br/><br/>\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Freeze Cell:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="freeze-cell" onkeypress="return isLetterKey(event)" class="form-control" value="S" placeholder="S" maxlength="1"><br/><br/>\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Player Auto Play:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="auto-play-key" onkeypress="return isLetterKey(event)" class="form-control" value="V" placeholder="V" maxlength="1"><br/><br/>\n\t\t\t</div>\n            <div id="bot-keys" class="tab-pane fade">\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Start Bots:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="start-bots-key" onkeypress="return isLetterKey(event)" class="form-control" value="Z" placeholder="Z" maxlength="1"><br/><br/>\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Bot\'s Mode:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="bots-mode" onkeypress="return isLetterKey(event)" class="form-control" value="X" placeholder="X" maxlength="1"><br/><br/>\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Bot\'s Split:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="bots-split" onkeypress="return isLetterKey(event)" class="form-control" value="E" placeholder="E" maxlength="1"><br/><br/>\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Bot\'s Feed:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="bots-feed" onkeypress="return isLetterKey(event)" class="form-control" value="R" placeholder="R" maxlength="1"><br/><br/>\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Bot\'s Freeze:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="bots-freeze" onkeypress="return isLetterKey(event)" class="form-control" value="T" placeholder="T" maxlength="1"><br/><br/>\n               <div style="float: left; margin-left: 20px; color: black;">\n                  <h4>Bot\'s Auto Play:</h4>\n               </div>\n               <input style="float:right; width: 15%;" id="collect-food-key" onkeypress="return isLetterKey(event)" class="form-control" value="C" placeholder="C" maxlength="1"><br/><br/>\n\t\t\t</div>\n         </div>\n      </div>\n      <div id="special-menu" class="tab-pane fade">\n         <div id="skin-rotator" style="position:relative;width:221px;">\n            <h4>Skin rotator</h4>\n            <div id="skin-rotator-buttons" class="form-group">\n               <button onclick="rotateSkins=true;skinRotator();" class="btn btn-primary" style="line-height: 24px;">\n               Enable\n               </button>\n               <button onclick="rotateSkins=false;skinRotator();" class="btn btn-danger" style="line-height: 24px;">\n               Disable\n               </button>\n               <br clear="both" />\n            </div>\n            <div class="form-group">\n               <label>Speed</label>\n               <select id="rotateSpeed" class="form-control" onchange="rotateSpeed=document.getElementById(\'rotateSpeed\').value;skinRotator();">\n                  <option value="400">Fastest</option>\n                  <option value="700">Faster</option>\n                  <option value="800">Fast</option>\n                  <option selected value="1000">Normal</option>\n                  <option value="1200">Slow</option>\n                  <option value="1500">Slower</option>\n                  <option value="1800">Slowest</option>\n               </select>\n            </div>\n         </div>\n\t  </div>\n   </div>\n   <div id="instructions"></div>\n   <hr style="margin-top:10px;margin-bottom:10px;" />\n   <center><span class="text-muted">\n      <span>A new extension for Agario!</span><br/>\n      <span><b>Created by Chris Pierce</b></span><br/>\n      <span>A. Infinity &#169; 2016 Chris Pierce</span><br/>\n      </span>\n   </center>\n</div>', 
  "#mainPanel", '<button type="submit" onclick="MC.setNick(document.getElementById(\'nick\').value); return false;" class="btn btn-play btn-primary btn-needs-server" data-itr="play">Play</button>', ".btn-play", '<button type="submit" onclick="MC.setNick(document.getElementById(\'nick\').value); return false;" class="btn btn-play-guest btn-primary btn-needs-server" data-itr="play_as_guest">Play as guest</button>', ".btn-play-guest", '<select id="gamemode" class="form-control" onchange="MC.setGameMode($(this).val());" required=""><option value="" data-itr="gamemode_ffa">FFA</option><option value=":teams" data-itr="gamemode_teams">Teams</option><option value=":experimental" data-itr="gamemode_experimental">Experimental</option><option value=":party" data-itr="party">Party</option> </select>', 
  "#gamemode", '<select id="region" class="form-control" onchange="MC.setRegion($(\'#region\').val());" required=""><option selected="" disabled="" value="" data-itr="region_select"> -- Select a Region -- </option><option value="US-Atlanta" data-itr="region_north_america">North America</option><option value="BR-Brazil" data-itr="region_south_america">South America</option><option value="EU-London" data-itr="region_europe">Europe</option><option value="RU-Russia" data-itr="region_russia">Russia</option><option value="TK-Turkey" data-itr="region_turkey">Turkey</option><option value="JP-Tokyo" data-itr="region_east_asia">East Asia</option><option value="CN-China" data-itr="region_china">China</option><option value="SG-Singapore" data-itr="region_oceania">Oceania</option></select>', 
  "#region", ".btn-logout", "320px", "right", "css", '<label><input type="checkbox" id="noSkins">No skins</label>', '<label><input type="checkbox" id="noNames">No names</label>', '<label><input type="checkbox" id="noColors">No colors</label>', '<label><input type="checkbox" id="showMass">Show mass</label>', '<label><input type="checkbox" id="darkTheme">Dark theme</label>', '<label><input type="checkbox" id="skipStats">Skip stats</label>', '<label><input type="checkbox" id="acidMode" onchange="window.core && core.setAcid && core.setAcid($(this).is(&quot:checked&quot));">Acid mode</label>', 
  '<label><input type="checkbox" id="hideBorders">Hide borders</label>', '<label><input type="checkbox" id="showSectors">Show sectors</label>', "append", "#options", "hide", "#last_death_pointer, #getBots, #autoPlay", "hidden", "addClass", "#advertisement", "display", "none", "parent", 'a[href="#special-menu"]', "resetBallsHolder", "focus", "botsEnabled", "#autoPlay", "#bots-follow, #botsNick, #bots-info", 'a[href="#bot-keys"]', "prev", "#skinSelector", "tagName", "br", "#botsNick", "//agarinfinity.com/infinity_ai.js?ts=", 
  "https://fonts.googleapis.com/icon?family=Material+Icons", "//agar.io/agario.core.js", "$1 window.ws=$2;", 'A1.lastSpawn=Date.now();A1.hasSpawned = true;$("#minimap").show(); $1', 'A1.lastDeath=Date.now();A1.hasSpawned = false;A1.lastDiedX=A1.playerX;A1.lastDiedY=A1.playerY;$("#last_death_pointer").show(); $1', "$1{A1.mousePos={x:$2,y:$3};", "$1;var src=$3;if(A1.oldSkinImgList){var res=src.match(/(https?:\\/\\/configs\\-web\\.agario\\.miniclippt\\.com\\/live\\/v\\d\\/)(\\d+?)(\\/.*?\\.png)/i);if(res&&res.length==4&&A1.oldSkinImgList.hasOwnProperty(res[3])){src=A1.oldSkinImgList[res[3]];}}$2.src=src;", 
  "$1 if(A1.autoPlay){var pos={x:0,y:0};if(A1.playerAi){pos=A1.playerAi.mouse;}$2=pos.x-A1.mapOffsetX;$3=pos.y-A1.mapOffsetY;}else if(A1.cellFrozen){$2=A1.playerX-A1.mapOffsetX;$3=A1.playerY-A1.mapOffsetY;}", "$1{var data=Array.from($2);if(data.length>=100){A1.mobileData=data;}", '$1{console.log("Connecting to: "+$2);A1.hasSpawned=false;$("#ip").val($2);socket1({type:"change-room",newServer:$2,oldServer:A1.serverIP,bot:false});A1.serverIP=$2;window.resetBallsHolder && resetBallsHolder();', '$1{A1.clanTag=$("#clanTag").val();A1.playerNick=$2;window.resetStorage && resetStorage();', 
  '$1(replaceName({type:"$2",name:$3})', "if($1<0){", "A1.playerCellsMass=[]; $1$2; A1.playerCellsMass.push($2)$3 A1.playerMass=$5;", "$1 if(A1.setMapCoords){A1.setMapCoords($3,$5,$7,$9,$2,$8);}", "$1 A1.viewScale=$2;A1.playerX=Math.round($4+A1.mapOffsetX);A1.playerY=Math.round($5+A1.mapOffsetY);if(window.customDraw){window.customDraw();}", "$1 A1.mouseX=$2+A1.mapOffsetX; A1.mouseY=$3+A1.mapOffsetY;", "$140.0$3$6", "$1/0.6);$2$3/0.6);$4", "$1 A1.getString=$2;", "A1.cellMemOffset=$2; $1 $3 else", 
  "$1 A1.idOffset=$2; A1.idMemOffset=$3; $4", 'var cellInfo = {\n\tid: c[A1.cellMemOffset + A1.idOffset >> 2] | 0,\n\tsize: $4,\n\tx: $6 + A1.mapOffsetX,\n\ty: $7 + A1.mapOffsetY,\n\tnick: \'\',\n\tcolor: rgbToHex($10, $11, $12)||null,\n\tisMe: false,\n\tcellType: 0,\n};\ndo\n\tif ($1 = 1, $1) {\n\t\t$2 if (!$3) {\n\t\t\tcellInfo.cellType = 1;\n\t\t\tA1.client.balls[cellInfo.id] = cellInfo;\n\t\t}\n\t\t$5$8 if ($3) {\n\t\t\tvar ctx = document.getElementById("canvas") && document.getElementById("canvas").getContext("2d");\n\t\t\tif (ctx) {\n\t\t\t\tA1.globalAlpha = ctx.globalAlpha;\n\t\t\t\tif (ctx.lineJoin === \'miter\') {\n\t\t\t\t\tcellInfo.cellType = 2;\n\t\t\t\t\tA1.client.balls[cellInfo.id] = cellInfo;\n\t\t\t\t\tctx.fillStyle = "#666666";\n\t\t\t\t\tctx.globalAlpha *= 0.6;\n\t\t\t\t} else {\n\t\t\t\t\tif (A1.cellMemOffset && A1.idOffset && A1.idMemOffset) {\n\t\t\t\t\t\tvar idA = c[A1.cellMemOffset + A1.idOffset >> 2] | 0;\n\t\t\t\t\t\tvar idB = c[A1.idMemOffset] | 0;\n\t\t\t\t\t\tvar idC = c[A1.idMemOffset + 1] | 0;\n\t\t\t\t\t\tloop: do {\n\t\t\t\t\t\t\tif ((idB | 0) != (idC | 0)) {\n\t\t\t\t\t\t\t\twhile (true) {\n\t\t\t\t\t\t\t\t\tif ((c[idB >> 2] | 0) == (idA | 0)) {\n\t\t\t\t\t\t\t\t\t\tbreak loop;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tidB = idB + 4 | 0;\n\t\t\t\t\t\t\t\t\tif ((idB | 0) == (idC | 0)) {\n\t\t\t\t\t\t\t\t\t\tidB = idC;\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} while (false);\n\t\t\t\t\t\tcellInfo.isMe = (idB | 0) != (idC | 0);\n\t\t\t\t\t\tif (cellInfo.isMe) {\n\t\t\t\t\t\t\tA1.client.my_balls[cellInfo.id] = cellInfo;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t$9\n\t\t\t\t\tif (!cellInfo.isMe) {\n\t\t\t\t\t\tA1.client.balls[cellInfo.id] = cellInfo;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t$13ctx.globalAlpha = A1.globalAlpha;\n\t\t\t} else {\n\t\t\t\t$9$13\n\t\t\t}\n\t\t\tbreak;', 
  "minimapUpdate", "mousedown", "id", "target", "overlays", "x", "innerWidth", "y", "pass", "password", "getItem", "Please enter the password.", "setItem", "style", "removeAttr", "addEventListener", "keydown", "#canvas:hover", "fromCharCode", "repeatFeed", "val", "#auto-play-key", "autoPlay", "#double-split", "repeatSplit", "#triple-split", "#split-16", "#freeze-cell", "cellFrozen", "#start-bots-key", "#collect-food-key", "#bots-mode", ":checked", "is", 'input[name$="follow"]:last', "checked", "prop", 
  'input[name$="follow"]:first', "click", "next", "input[name=follow]:checked", "#bots-split", "#bots-feed", "#bots-freeze", "includes", "push", "keyup", "splice", "A1 ", "floor", "frameNumber", "startTime", "fps", "getFPS", "join", "map", "split", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z", "\ud835\udd1e", "\ud835\udd1f", "\ud835\udd20", "\ud835\udd21", "\ud835\udd22", "\ud835\udd23", "\ud835\udd24", "\ud835\udd25", "\ud835\udd26", 
  "\ud835\udd27", "\ud835\udd28", "\ud835\udd29", "\ud835\udd2a", "\ud835\udd2b", "\ud835\udd2c", "\ud835\udd2d", "\ud835\udd2e", "\ud835\udd2f", "\ud835\udd30", "\ud835\udd31", "\ud835\udd32", "\ud835\udd33", "\ud835\udd34", "\ud835\udd35", "\ud835\udd36", "\ud835\udd37", "\ud835\udcea", "\ud835\udceb", "\ud835\udcec", "\ud835\udced", "\ud835\udc86", "\ud835\udc87", "\ud835\udcf0", "\ud835\udcf1", "\ud835\udcf2", "\ud835\udcf3", "\ud835\udcf4", "\ud835\udcf5", "\ud835\udcf6", "\ud835\udcf7", "\ud835\udcf8", 
  "\ud835\udcf9", "\ud835\udcfa", "\ud835\udcfb", "\ud835\udcfc", "\ud835\udcfd", "\ud835\udcfe", "\ud835\udcff", "\ud835\udd00", "\ud835\udd01", "\ud835\udd02", "\ud835\udd03", "\ud835\udcb6", "\ud835\udcb7", "\ud835\udcb8", "\ud835\udcb9", "\ud835\udc52", "\ud835\udcbb", "\ud835\udc54", "\ud835\udcbd", "\ud835\udcbe", "\ud835\udcbf", "\ud835\udcc0", "\ud835\udcc1", "\ud835\udcc2", "\ud835\udcc3", "\ud835\udc5c", "\ud835\udcc5", "\ud835\udcc6", "\ud835\udcc7", "\ud835\udcc8", "\ud835\udcc9", "\ud835\udcca", 
  "\ud835\udccb", "\ud835\udccc", "\ud835\udccd", "\ud835\udcce", "\ud835\udccf", "\ud835\udcd0", "\ud835\udcd1", "\ud835\udcd2", "\ud835\udcd3", "\ud835\udcd4", "\ud835\udcd5", "\ud835\udcd6", "\ud835\udcd7", "\ud835\udcd8", "\ud835\udcd9", "\ud835\udcda", "\ud835\udcdb", "\ud835\udcdc", "\ud835\udcdd", "\ud835\udcde", "\ud835\udcdf", "\ud835\udce0", "\ud835\udce1", "\ud835\udce2", "\ud835\udce3", "\ud835\udce4", "\ud835\udce5", "\ud835\udce6", "\ud835\udce7", "\ud835\udce8", "\ud835\udce9", "\ud835\udc00", 
  "\ud835\udc01", "\ud835\udc02", "\ud835\udc03", "\ud835\udc04", "\ud835\udc05", "\ud835\udc06", "\ud835\udc07", "\ud835\udc08", "\ud835\udc09", "\ud835\udc0a", "\ud835\udc0b", "\ud835\udc0c", "\ud835\udc0d", "\ud835\udc0e", "\ud835\udc0f", "\ud835\udc10", "\ud835\udc11", "\ud835\udc12", "\ud835\udc13", "\ud835\udc14", "\ud835\udc15", "\ud835\udc16", "\ud835\udc17", "\ud835\udc18", "\ud835\udc19", "\ud835\udc1a", "\ud835\udc1b", "\ud835\udc1c", "\ud835\udc1d", "\ud835\udc1e", "\ud835\udc1f", "\ud835\udc20", 
  "\ud835\udc21", "\ud835\udc22", "\ud835\udc23", "\ud835\udc24", "\ud835\udc25", "\ud835\udc26", "\ud835\udc27", "\ud835\udc28", "\ud835\udc29", "\ud835\udc2a", "\ud835\udc2b", "\ud835\udc2c", "\ud835\udc2d", "\ud835\udc2e", "\ud835\udc2f", "\ud835\udc30", "\ud835\udc31", "\ud835\udc32", "\ud835\udc33", "\u03b1", "\u0432", "\u2202", "\u03b5", "\u0493", "\u043d", "\u03b9", "\u05e0", "\u043a", "\u2113", "\u043c", "\u03b7", "\u03c3", "\u03c1", "\u044f", "\u0442", "\u03c5", "\u03c9", "\u04af", "\u0138", 
  "\u0455", "\u0445", "\u0e04", "\u0e52", "\u03c2", "\u0e54", "\u0454", "\u0166", "\ufeee", "\u0452", "\u0e40", "\u05df", "\u0e53", "\u0e20", "\u0e4f", "\u05e7", "\u1ee3", "\u0433", "\u0e23", "\u0e22", "\u05e9", "\u0e2c", "\u05e5", "\u05d0", "\u15e9", "\u15f7", "\u1455", "\u15ea", "\u15f4", "\u15b4", "\u01e4", "\u157c", "\u13a5", "\u148e", "\u16d5", "\u14aa", "\u15f0", "\u144e", "\u15dd", "\u146d", "\u024a", "\u1587", "\u1515", "\u4e05", "\u144c", "\u142f", "\u15ef", "\u166d", "\u01b3", "\u4e59", 
  "\u0253", "\u0aee", "\u0192", "\u0260", "\u0266", "\u029d", "\u04a1", "\u0271", "\u0273", "\u03c6", "\u0ae8", "\u01ad", "\u00b5", "\u0475", "\u10e7", "\u01b6", "\u0394", "\u03b2", "\u0106", "\u0110", "\u20ac", "\u20a3", "\u0126", "\u0197", "\u0134", "\u049c", "\u0141", "\u039c", "\u0147", "\u00d8", "\u01a4", "\u03a9", "\u0158", "\u015e", "\u1eee", "V", "\u0174", "\u0416", "\u00a5", "\u017d", "\u0250", "\u0254", "\u01dd", "\u025f", "\u0183", "\u0265", "!", "\u027e", "\u029e", "\u026f", "\u0279", 
  "\u0287", "\u028c", "\u028d", "\u028e", "\u20b3", "\u0e3f", "\u20b5", "\u0246", "\u20b2", "\u2c67", "\u0142", "J", "\u20ad", "\u2c60", "\u20a5", "\u20a6", "\u20b1", "Q", "\u2c64", "\u20b4", "\u20ae", "\u0244", "\u20a9", "\u04fe", "\u024e", "\u2c6b", "\u13d7", "\u13f0", "\u1348", "\u13b4", "\u13cb", "\u13a6", "\u13b6", "\u13c2", "\u13e0", "\u13e6", "\u13dd", "\u13b7", "\u13c1", "\u13a7", "\u13ae", "\u13a4", "\u13d2", "\u13d5", "\u13d6", "\u13ec", "\u13c9", "\u13c7", "\u1300", "\u13a9", "\u135a", 
  "\u13aa", "\u13df", "\u13a0", "\u13ac", "\u13de", "\u13be", "\u13e2", "\u13c6", "\u13b3", "\u13bd", "\u13c3", "\u0102", "\u010c", "\u010e", "\u0114", "\u011e", "\u0124", "\u0128", "\u0136", "\u0139", "\u041c", "\u0143", "\u0150", "\u0420", "\u0154", "\u015a", "\u0164", "\u00da", "\u0176", "\u0179", "\u5342", "\u4e43", "\u531a", "\u4e47", "\u5343", "\u5344", "\u4e28", "\uff8c", "\u3125", "\u722a", "\u51e0", "\u3116", "\u5369", "\u5c3a", "\u4e02", "\u3112", "\u3129", "\u5c71", "\u4e42", "\u311a", 
  "\ud835\udd38", "\ud835\udd39", "\u2102", "\ud835\udd3b", "\ud835\udd3c", "\ud835\udd3d", "\ud835\udd3e", "\u210d", "\ud835\udd40", "\ud835\udd41", "\ud835\udd42", "\ud835\udd43", "\ud835\udd44", "\u2115", "\ud835\udd46", "\u2119", "\u211a", "\u211d", "\ud835\udd4a", "\ud835\udd4b", "\ud835\udd4c", "\ud835\udd4d", "\ud835\udd4e", "\ud835\udd4f", "\ud835\udd50", "\u2124", "\ud835\udd52", "\ud835\udd53", "\ud835\udd54", "\ud835\udd55", "\ud835\udd56", "\ud835\udd57", "\ud835\udd58", "\ud835\udd59", 
  "\ud835\udd5a", "\ud835\udd5b", "\ud835\udd5c", "\ud835\udd5d", "\ud835\udd5e", "\ud835\udd5f", "\ud835\udd60", "\ud835\udd61", "\ud835\udd62", "\ud835\udd63", "\ud835\udd64", "\ud835\udd65", "\ud835\udd66", "\ud835\udd67", "\ud835\udd68", "\ud835\udd69", "\ud835\udd6a", "\ud835\udd6b", "\u24b6", "\u24b7", "\u24b8", "\u24b9", "\u24ba", "\u24bb", "\u24bc", "\u24bd", "\u24be", "\u24bf", "\u24c0", "\u24c1", "\u24c2", "\u24c3", "\u24c4", "\u24c5", "\u24c6", "\u24c7", "\u24c8", "\u24c9", "\u24ca", "\u24cb", 
  "\u24cc", "\u24cd", "\u24ce", "\u24cf", "\u24d0", "\u24d1", "\u24d2", "\u24d3", "\u24d4", "\u24d5", "\u24d6", "\u24d7", "\u24d8", "\u24d9", "\u24da", "\u24db", "\u24dc", "\u24dd", "\u24de", "\u24df", "\u24e0", "\u24e1", "\u24e2", "\u24e3", "\u24e4", "\u24e5", "\u24e6", "\u24e7", "\u24e8", "\u24e9", "\ud83c\udd70", "\ud83c\udd71", "\ud83c\udd72", "\ud83c\udd73", "\ud83c\udd74", "\ud83c\udd75", "\ud83c\udd76", "\ud83c\udd77", "\ud83c\udd78", "\ud83c\udd79", "\ud83c\udd7a", "\ud83c\udd7b", "\ud83c\udd7c", 
  "\ud83c\udd7d", "\ud83c\udd7e", "\ud83c\udd7f", "\ud83c\udd80", "\ud83c\udd81", "\ud83c\udd82", "\ud83c\udd83", "\ud83c\udd84", "\ud83c\udd85", "\ud83c\udd86", "\ud83c\udd87", "\ud83c\udd88", "\ud83c\udd89", "#other_balls_holder", "empty", "playerObj", "skinRotator", "getRandomSkin", "setSkin", "addAlert", "div", "className", "alert", " ", "innerHTML", '<span class="closebtn">&times;</span>', "alertBox", "closebtn", "getElementsByClassName", "onclick", "parentElement", "opacity", "0", "success", 
  "Auto play has started!\nTo stop auto play, press the ", " key.", "<b>Stop Auto Play</b>", "html", "#nick", "setNick", "<b>Start Auto Play</b>", "renameBots", "canRenameBots", "parse", "value", "You must rate this extension 5 stars to rename bots!\n\nClick OK to rate this extension!\nPlease subscribe to the creator, Chris Pierce, if you enjoy these bots!", "confirm", "https://chrome.google.com/webstore/detail/agarslither-infinity/gnhheoadpkhnhicikbeaikololmoegma/reviews", "_blank", "Please allow popups and refresh the page first!", 
  "core", "eject", "customDraw", "#showSectors", "drawSectors", "#hideBorders", "drawMapBorders", "2d", "getContext", "mapMinX", "mapMinY", "mapMaxX", "mapMaxY", "#333333", "strokeStyle", "fillStyle", "lineWidth", "beginPath", "moveTo", "lineTo", "stroke", "font", "px Ubuntu", "textAlign", "center", "textBaseline", "middle", "#6600FF", "save", "lineCap", "round", "lineJoin", "closePath", "restore", "getOwnedSkins", "owned", "filter", "skinList", "shopSkinsModel", "models", "purchaseId", "productIdToQuantify", 
  "showSkinImage", "hasOwnProperty", "img#preview-img", "buySkin", "canBuySkin", "title", "price", "text", ".agario-wallet-label", "Are you sure you want to buy ", " for ", " coins?\n\nClick 'OK' to buy or click 'Cancel' to stop.\n\nThis is created by Chris Pierce.", "shopSkins", "OWNED", "openShop", "ShopEvent::BUY", "dispatchEventWith", "get_events", "warning", "You can not afford this skin!<br>You only have ", " coins. You need ", " more coins!", "You already have this skin!", "Select a skin first.<br>This tool can be used to buy older holiday skins that are no longer available.<br>This is created by Chris Pierce.", 
  "You must subscribe to the creator, Chris Pierce, to use this feature!\n\nClick OK to subscribe!", "https://www.youtube.com/channel/UCr_r9ypG_wbSI8Ct3GH30tA?sub_confirmation=1", "getFont", "nick", "undefined", "gi", "This font id is not found: ", "fontify", "getRandomInt", "getRandomFont", "change", "#font", "serverConnect", "wss://", "ws://", "connect", "getLocation", "Top Left", "Left", "Bottom Left", "Top", "Middle", "Bottom", "Top Right", "Right", "Bottom Right", "ws://51.255.198.169:1667", 
  "socketID", "engine", "io", "on", "player-disconnect", "spawned", "bot", "tag", "count", "request-users", "disconnect", "getTextWidth", "measureText", "show", "left", "%", "top", "10px Arial", "cssText", "font-size:10px;color:white;bottom:4px;position:absolute;font-family:Arial;width:300px;margin-left:", "px", "createTextNode", "outerHTML", "set", "border-radius: 50%;margin-left:-5px;margin-top:-5px;width: 10px;height: 10px;position: absolute;pointer-events:none;", "background-color: #FF4F00;", 
  "background-color: white;", "other_balls_holder", "ws://127.0.0.1:3000", "socketID2", "new-player", "bot-count", "config_url", "//", "master_url", "/getLatestID?_=", "/", "GameConfiguration.json", "Shop - Skins", "gameConfig", "Visual - Bundles", "Wallet - Soft Purchases", "en_text.json", "visibility", "default", "tab", "originId", "texts", "product_name_skin_", "currencyAmount", "bundleId", "visualSource", "string", ".png", "_hi.png", " - ", "option", "add", "skinSelector", "#skinSelector option:first", 
  "sort", "#skinSelector option:not(:first)", "prepend", "selectedIndex", "resetStorage", "input", "checkbox", "storage", "stringify", "restoreStorage", "#skipStats", "#showMass", "#darkTheme", "gamemode", "updatePos", 'input[name="follow"]:checked', "cell", "mouseX", "mouseY", "mouse", "position-update", "updateTarget", "playerAi", "balls", "client", "values", "my_balls", "ip", "playerMass", "massToSize", "sendUpdate", "InfinityAi", "elementFromPoint", "helloContainer", "boolean", "On", "7FFF00", 
  "Off", "red", '<font color="', "color", '">', "object", "</font>", "white", "Bots: ", "<br>[", "] Follow:", "data-value", "attr", "] Cell Frozen: ", "] Player Auto Play: ", "] Bots Frozen: ", "] Bots Auto Play: ", "<br>Bot Server: ", "Online", "Offline", "<br>Minimap Server: ", "<br>Current Users: ", "#bots-info", "65%", "block", "#player_pointer", "lastDiedX", "lastDiedY", "#last_death_pointer"];
  /** @type {function (?): undefined} */
  AnimatedValue = defaultEasingClass;
  /** @type {function (?, ?): undefined} */
  appendScript = setValue;
  /** @type {function (?): undefined} */
  removeScript = createRegularNGon;
  /** @type {function (?, ?): undefined} */
  appendCSS = getElementsByTagName;
  /** @type {function (?): ?} */
  toTitleCase = xhr;
  /** @type {function (?): ?} */
  getCompColor = format;
  /** @type {function (number, number, number): ?} */
  rgbToHex = spyOn;
  /** @type {function (?): ?} */
  getURLParameter = decode;
  /** @type {function (): undefined} */
  getScripts = click;
  /** @type {function (): undefined} */
  getCore = getAsset;
  /** @type {function (): undefined} */
  startInfinity = launch;
  console[match[1]](match[0]);
  window[match[2]] = {
    serverIP : null,
    socket : null,
    socketID : null,
    socket2 : null,
    socketID2 : null,
    mouseX : 0,
    mouseY : 0,
    playerX : null,
    playerY : null,
    playerNick : match[3],
    playerMass : 0,
    playerCellsMass : [],
    clanTag : match[3],
    botsNick : match[3],
    botsEnabled : false,
    cellFrozen : false,
    autoPlay : false,
    playerAi : null,
    game : null,
    fps : 0,
    mousePos : null,
    mobileData : null,
    lastSpawn : 0,
    lastDeath : 0,
    lastDiedX : null,
    lastDiedY : null,
    images : [],
    oldSkinImgList : null,
    ownedSkins : {},
    skinList : {},
    pass : null,
    hasSpawned : false,
    mapOffset : 7071,
    mapOffsetX : 0,
    mapOffsetY : 0,
    mapOffsetFixed : false,
    mapMinX : -7071,
    mapMinY : -7071,
    mapMaxX : 7071,
    mapMaxY : 7071,
    viewScale : 1,
    leaderboardData : match[3],
    leaderboardIndex : 1,
    client : {
      balls : {},
      my_balls : {},
      options : {}
    },
    /** @type {function (number, number, number, number, number, number): undefined} */
    setMapCoords : reset,
    /** @type {function (): undefined} */
    minimapUpdate : minimapUpdate,
    /** @type {function (): ?} */
    getRandomSkin : getRandomSkin,
    /** @type {function (?, ?): ?} */
    gameToCanvas : ok,
    /** @type {function (number, number): ?} */
    canvasToGame : newCoord,
    /** @type {function (number): ?} */
    calcTTR : report,
    /** @type {function (?): ?} */
    calcMmS : formatResult,
    /** @type {function (?): ?} */
    sizeToMass : upload,
    /** @type {function (?): ?} */
    massToSize : restoreScript
  };
  CanvasRenderingContext2D[match[32]][match[31]] = CanvasRenderingContext2D[match[32]][match[33]];
  /** @type {function (): undefined} */
  CanvasRenderingContext2D[match[32]][match[33]] = _0x10592;
  CanvasRenderingContext2D[match[32]][match[40]] = CanvasRenderingContext2D[match[32]][match[41]];
  /** @type {function (): undefined} */
  CanvasRenderingContext2D[match[32]][match[41]] = _0x105EC;
  CanvasRenderingContext2D[match[32]][match[48]] = CanvasRenderingContext2D[match[32]][match[49]];
  /** @type {function (): undefined} */
  CanvasRenderingContext2D[match[32]][match[49]] = _0x10646;
  /** @type {function (?): ?} */
  window[match[50]] = generate;
  /** @type {function (?): undefined} */
  window[match[52]] = with_walkers;
  /** @type {function (?): undefined} */
  window[match[57]] = insertBefore;
  defaultEasingClass[match[32]] = {
    /** @type {function (): ?} */
    get : woot,
    /** @type {function (?, ?): undefined} */
    set : setter,
    /** @type {function (?, ?): undefined} */
    follow : follow,
    /** @type {function (?): undefined} */
    write : toString
  };
  /** @type {XMLHttpRequest} */
  agarioJS = new XMLHttpRequest;
  agarioJS[match[68]](match[66], match[67], true);
  /** @type {function (): undefined} */
  agarioJS[match[69]] = parse;
  agarioJS[match[88]](null);
  /** @type {function (?): ?} */
  window[match[118]] = clone;
  /** @type {function (): undefined} */
  window[match[123]] = onSuccess;
