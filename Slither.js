/**
 * This code rightfully belongs to Chris Peirce
 */

(function() {
  /**
   * @return {undefined}
   */
  function minimapUpdate() {
    if (this[match[4]] != null) {
      /** @type {number} */
      var moveX = this[match[5]] / 43200 * 100;
      /** @type {number} */
      var moveY = this[match[6]] / 43200 * 100;
      socket1({
        type : match[7],
        x : moveX,
        y : moveY,
        server : this[match[4]],
        spawned : this[match[8]],
        bot : false,
        name : this[match[9]],
        tag : match[3]
      });
    }
  }
  /**
   * @return {?}
   */
  function method() {
    if (arguments[match[12]] && arguments[0][match[13]]() == match[14]) {
      arguments[0] = match[15];
    }
    return document[match[10]][match[16]](this, arguments);
  }
  /**
   * @param {?} deepDataAndEvents
   * @return {undefined}
   */
  function modelProperties(deepDataAndEvents) {
    this[match[20]](deepDataAndEvents);
  }
  /**
   * @return {?}
   */
  function woot() {
    if (this[match[22]]) {
      var left = Date[match[23]]();
      var right = this[match[24]] + this[match[22]];
      if (left >= right) {
        /** @type {number} */
        this[match[22]] = 0;
        return this[match[25]];
      } else {
        if (this[match[26]]) {
          this[match[25]] = this[match[26]]();
        }
        return this[match[25]] - (this[match[25]] - this[match[27]]) * (right - left) / this[match[22]];
      }
    } else {
      return this[match[25]];
    }
  }
  /**
   * @param {?} val
   * @param {?} v
   * @return {undefined}
   */
  function setter(val, v) {
    if (val != this[match[25]]) {
      this[match[27]] = this[match[28]]();
      this[match[25]] = val;
      this[match[22]] = v;
      this[match[26]] = undefined;
      this[match[24]] = Date[match[23]]();
    }
  }
  /**
   * @param {?} cs1
   * @param {?} lerp
   * @return {undefined}
   */
  function follow(cs1, lerp) {
    this[match[27]] = this[match[28]]();
    this[match[26]] = cs1;
    this[match[22]] = lerp;
    this[match[24]] = Date[match[23]]();
  }
  /**
   * @param {?} idt
   * @return {undefined}
   */
  function toString(idt) {
    this[match[27]] = idt;
    this[match[25]] = idt;
    /** @type {number} */
    this[match[22]] = 0;
    this[match[24]] = Date[match[23]]();
  }
  /**
   * @return {undefined}
   */
  function _0x26639() {
    if (xmlhttp[match[33]] == 4) {
      var compare = xmlhttp[match[34]];
      compare = compare[match[36]](/<body.*?>/, match[35]);
      document[match[31]]();
      document[match[20]](compare);
      document[match[37]]();
    }
  }
  /**
   * @param {?} opt_obj2
   * @return {undefined}
   */
  function insertBefore(opt_obj2) {
    if (S1[match[40]] != null) {
      if (S1[match[40]][match[41]]) {
        S1[match[40]][match[43]](match[42], opt_obj2);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function prepare() {
    /**
     * @param {?} elem
     * @return {undefined}
     */
    function restoreScript(elem) {
      if (window[match[61]]) {
        window[match[61]] *= Math[match[64]](0.9, elem[match[62]] / -120 || (elem[match[63]] / 2 || 0));
      }
    }
    $(match[46])[match[45]](match[44]);
    $(match[48])[match[47]]();
    $(window)[match[50]](function() {
      if (window[match[49]]) {
        resetBallsHolder();
      }
    });
    /**
     * @return {undefined}
     */
    window[match[49]] = function() {
      if ($(match[51])[match[12]]) {
        $(match[51])[match[52]]();
        if (window[match[53]]) {
          window[match[53]] = {};
        }
      }
    };
    $(document)[match[57]](function(config) {
      S1[match[54]] = {
        x : config[match[55]],
        y : config[match[56]]
      };
    });
    document[match[44]][match[59]](match[58], restoreScript);
    document[match[44]][match[59]](match[60], restoreScript);
    connect();
  }
  /**
   * @return {undefined}
   */
  function connect() {
    /**
     * @param {?} details
     * @param {?} failing_message
     * @param {?} d
     * @return {undefined}
     */
    function report(details, failing_message, d) {
      var cfg = document[match[11]](match[15]);
      cfg[match[82]] = match[83];
      if (details) {
        cfg[match[82]] += match[84] + details;
      }
      cfg[match[85]] = match[86];
      if (failing_message) {
        cfg[match[85]] += failing_message;
      }
      document[match[89]](match[88])[match[87]](cfg);
      var value = document[match[91]](match[90]);
      /** @type {number} */
      var section = 0;
      for (;section < value[match[12]];section++) {
        /**
         * @return {undefined}
         */
        value[section][match[92]] = function() {
          var cfg = this[match[93]];
          cfg[match[95]][match[94]] = match[96];
          setTimeout(function() {
            cfg[match[95]][match[97]] = match[98];
          }, 600);
        };
      }
      if (d) {
        setTimeout(function() {
          cfg[match[95]][match[97]] = match[98];
        }, d);
      }
    }
    /**
     * @param {?} name
     * @param {?} n
     * @param {?} dbname
     * @param {boolean} description
     * @param {boolean} path
     * @param {string} b
     * @param {?} opt_connectCb
     * @return {undefined}
     */
    function connect(name, n, dbname, description, path, b, opt_connectCb) {
      if (A1[match[100]] != name) {
        try {
          if ($(match[105] + name)[match[12]]) {
            if (description && (path || opt_connectCb == A1[match[125]])) {
              $(match[105] + name)[match[126]]();
            } else {
              $(match[105] + name)[match[47]]();
            }
            if (path) {
              document[match[89]](name)[match[95]][match[127]] = n + match[128];
              document[match[89]](name)[match[95]][match[129]] = dbname + match[128];
            } else {
              if (b != null) {
                /** @type {number} */
                var marker = (-getTextWidth(b, match[130]) + 10) / 2;
                var value = document[match[11]](match[131]);
                value[match[95]][match[132]] = match[133] + marker + match[134];
                var bp = document[match[135]](b);
                value[match[87]](bp);
                document[match[89]](name)[match[85]] = value[match[136]];
              }
              if (!map[name]) {
                map[name] = {
                  x : new modelProperties(n),
                  y : new modelProperties(dbname)
                };
              } else {
                map[name][match[111]][match[137]](n, 2E3);
                map[name][match[112]][match[137]](dbname, 2E3);
              }
            }
          } else {
            var cfg = document[match[11]](match[15]);
            cfg[match[67]] = name;
            var comment = match[138];
            if (path) {
              comment += match[139];
              cfg[match[95]][match[132]] = comment;
            } else {
              if (!path) {
                comment += match[140];
                cfg[match[95]][match[132]] = comment;
              }
            }
            document[match[89]](match[141])[match[87]](cfg);
            $(match[105] + name)[match[47]]();
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
      setInterval(function() {
        if (snake) {
          /** @type {boolean} */
          S1[match[74]] = true;
          /** @type {boolean} */
          S1[match[8]] = true;
          S1[match[5]] = Math[match[143]](snake[match[142]]);
          S1[match[6]] = Math[match[143]](snake[match[144]]);
          if (S1[match[54]]) {
            S1[match[145]] = Math[match[143]]((S1[match[54]][match[111]] - window[match[146]] / 2) / window[match[61]] + S1[match[5]]);
            S1[match[147]] = Math[match[143]]((S1[match[54]][match[112]] - window[match[146]] / 2) / window[match[61]] + S1[match[6]]);
          }
          S1[match[148]] = snake[match[67]];
          try {
            /** @type {number} */
            S1[match[149]] = parseInt(localStorage[match[150]]);
          } catch (c) {
          }
        } else {
          if (S1[match[74]]) {
            /** @type {boolean} */
            S1[match[8]] = false;
            S1[match[151]] = S1[match[5]];
            S1[match[152]] = S1[match[6]];
            $(match[48])[match[126]]();
          }
        }
      }, 50);
      setInterval(function() {
        /** @type {number} */
        var relpath = S1[match[5]] / 43200 * 100;
        /** @type {number} */
        var ERR_UNKNOWN_REF = S1[match[6]] / 43200 * 100;
        $(match[154])[match[153]](match[127], relpath + match[128]);
        $(match[154])[match[153]](match[129], ERR_UNKNOWN_REF + match[128]);
        /** @type {number} */
        var baseURL = S1[match[151]] / 43200 * 100;
        /** @type {number} */
        var section = S1[match[152]] / 43200 * 100;
        $(match[48])[match[153]](match[127], baseURL + match[128]);
        $(match[48])[match[153]](match[129], section + match[128]);
        try {
          var letter;
          for (letter in map) {
            if (!map[match[107]](letter)) {
              continue;
            }
            var value = map[letter];
            if ($(match[105] + letter)[match[12]]) {
              $(match[105] + letter)[match[153]]({
                "left" : value[match[111]][match[28]]() + match[128],
                "top" : value[match[112]][match[28]]() + match[128]
              });
            }
          }
        } catch (x) {
          console[match[1]](x);
        }
      }, 75);
      setInterval(function() {
        /**
         * @param {string} name
         * @param {Object} params
         * @return {?}
         */
        function done(name, params) {
          if (typeof name == match[155]) {
            var values = {
              "true" : {
                text : match[156],
                color : match[157]
              },
              "false" : {
                text : match[158],
                color : match[159]
              }
            };
            return match[160] + values[name][match[161]] + match[162] + (params && (typeof params == match[163] && (params[match[107]](name) && params[name])) || values[name][match[164]]) + match[165];
          }
          return match[160] + (params || match[166]) + match[162] + name + match[165];
        }
        var later = match[3];
        later += match[167];
        later += match[168] + S1[match[4]];
        later += match[169] + S1[match[5]] + match[170] + S1[match[6]];
        later += match[171];
        later += match[172];
        later += !minimapOnline && match[173] + done(botsOnline, {
          "true" : match[174],
          "false" : match[175]
        }) || match[3];
        $(match[177])[match[176]](later);
      }, 250);
    }
    setInterval(function() {
      S1[match[65]]();
    }, 2E3);
    document[match[59]](match[66], function(cfg) {
      if (cfg[match[68]][match[67]] != match[69]) {
        switch(cfg[match[71]]) {
          case 71:
            setSkin(snake, 42);
            break;
          case 67:
            /** @type {(null|string)} */
            var stamp = prompt(match[70], S1[match[4]]);
            if (stamp != null && stamp != S1[match[4]]) {
              connect(stamp);
            }
            break;
        }
      }
    }, false);
    /** @type {number} */
    var filter = 0;
    var map = {};
    window[match[72]] = window[match[73]];
    /**
     * @param {?} subKey
     * @return {undefined}
     */
    window[match[73]] = function(subKey) {
      if (!S1[match[74]]) {
        _connect();
      }
      /** @type {null} */
      var result = null;
      if (subKey) {
        result = subKey;
      } else {
        result = bso[match[75]] + match[76] + bso[match[77]];
      }
      if (result != S1[match[4]]) {
        socket1({
          type : match[78],
          newServer : result,
          oldServer : S1[match[4]],
          bot : false
        });
        /** @type {null} */
        S1[match[4]] = result;
      }
      S1[match[9]] = $(match[80])[match[79]]();
      result = result[match[81]](match[76]);
      forceServer(result[0], result[1]);
      _connect();
      resetBallsHolder();
    };
    /** @type {boolean} */
    minimapOnline = false;
    S1[match[40]] = io(match[99]);
    /** @type {number} */
    currentUserInterval = 0;
    /** @type {boolean} */
    minimapOnline = false;
    S1[match[40]][match[103]](match[73], function() {
      S1[match[100]] = S1[match[40]][match[102]][match[101]][match[67]];
      /** @type {boolean} */
      minimapOnline = true;
    });
    S1[match[40]][match[103]](match[42], function(filters) {
      if (filters[match[104]]) {
        switch(filters[match[104]]) {
          case match[108]:
            if ($(match[105] + filters[match[67]])[match[12]]) {
              $(match[105] + filters[match[67]])[match[106]]();
            }
            if (map[match[107]](filters[match[67]])) {
              delete map[filters[match[67]]];
            }
            break;
          case match[110]:
            filter = filters[match[109]];
            break;
          case match[7]:
            connect(filters[match[67]], filters[match[111]], filters[match[112]], filters[match[113]], filters[match[114]], filters[match[115]], filters[match[116]]);
            break;
        }
      }
    });
    S1[match[40]][match[103]](match[117], function() {
      resetBallsHolder();
      /** @type {boolean} */
      minimapOnline = false;
    });
    /**
     * @param {?} selector
     * @param {?} key
     * @return {?}
     */
    window[match[118]] = function(selector, key) {
      var argv = getTextWidth[match[119]] || (getTextWidth[match[119]] = document[match[11]](match[119]));
      var res = argv[match[121]](match[120]);
      res[match[122]] = key;
      var elem = res[match[123]](selector);
      return elem[match[124]];
    };
    init();
  }
  /** @type {Array} */
  var match = ["Agar/Slither Infinity is created by Chris Pierce", "log", "S1", "", "serverIP", "playerX", "playerY", "minimap-update", "hasSpawned", "playerNick", "_createElement", "createElement", "length", "toLowerCase", "iframe", "div", "apply", "edttsg", "1", "setItem", "write", "prototype", "timeout", "now", "frTime", "toVal", "following", "frVal", "get", "GET", "http://slither.io/", "open", "onreadystatechange", "readyState", "responseText", '<body onload="window.replaceHTML();" style="background-image: url(http://i.imgur.com/ZzLhNgY.jpg);background-repeat: no-repeat;background-attachment: fixed;background-position: center;">', 
  "replace", "close", "send", "socket1", "socket", "connected", "command", "emit", "body", "appendTo", "<style>.alert{padding:20px;background-color:#f44336;color:#fff;opacity:1;transition:opacity .6s;margin-bottom:15px}.alert.success{background-color:#4CAF50}.alert.info{background-color:#2196F3}.alert.warning{background-color:#ff9800}.closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:20px;cursor:pointer;transition:.3s}.closebtn:hover{color:#000}#alertBox{position:absolute;width:300px;z-index:999;right:10px;bottom:10px;}#minimap{background:rgba(0,0,0,0) url(http://i.imgur.com/G6xr9dz.png); background-size:100%100%;width:250px;height:250px;left:10px;bottom:50px;position:fixed;z-index:999;pointer-events:none;}#last_death_pointer,#player_pointer{border-radius:50%;top:50%;left:50%;margin-left:-5px;margin-top:-5px;width:10px;height:10px;position:absolute;pointer-events:none}#player_pointer{background-color:green}#last_death_pointer{background-color:red}#balls_holder,#other_balls_holder{position:relative;width:100%;height:100%;pointer-events:none}#preview-img-area{width:150px;height:150px;border-radius:100%;display:block;box-shadow:0 0 8px rgba(0,0,0,.8);margin:0 auto auto;margin-top:0;background-color:#212121!important}#keys-info{z-index:999;background:rgba(0,0,0,0);border-radius:15px;width:250px;top:10px;left:10px;display:block;position:fixed;pointer-events:none;text-align:left;font-size:13px;color:#fff;padding:5px;font-family:Arial;font-weight: bold;}#preview-img{border-radius:100%;border-color:#212121!important;width:150px;height:150px;background:#212121!important}img{transition:all .5s ease}</style><div id=minimap class=nsi><div id=balls_holder><div id=player_pointer></div><div id=last_death_pointer></div><div id=other_balls_holder></div></div></div><div id=keys-info class=nsi></div><div id=alertBox class=nsi></div>", 
  "hide", "#last_death_pointer", "resetBallsHolder", "focus", "#other_balls_holder", "empty", "playerObj", "mousePos", "pageX", "pageY", "mousemove", "mousewheel", "addEventListener", "DOMMouseScroll", "gsc", "wheelDelta", "detail", "pow", "minimapUpdate", "keydown", "id", "target", "nick", "Enter server IP.", "keyCode", "_connect", "connect", "firstGameStarted", "ip", ":", "po", "change-room", "val", "#nick", "split", "className", "alert", " ", "innerHTML", '<span class="closebtn">&times;</span>', 
  "appendChild", "alertBox", "getElementById", "closebtn", "getElementsByClassName", "onclick", "parentElement", "opacity", "style", "0", "display", "none", "http://51.255.198.169:1667", "socketID", "engine", "io", "on", "type", "#", "remove", "hasOwnProperty", "player-disconnect", "count", "request-users", "x", "y", "spawned", "bot", "name", "tag", "disconnect", "getTextWidth", "canvas", "2d", "getContext", "font", "measureText", "width", "clanTag", "show", "left", "%", "top", "10px Arial", "p", 
  "cssText", "font-size:10px;color:white;bottom:4px;position:absolute;font-family:Arial;width:300px;margin-left:", "px", "createTextNode", "outerHTML", "set", "border-radius: 50%;margin-left:-5px;margin-top:-5px;width: 10px;height: 10px;position: absolute;pointer-events:none;", "background-color: #FF4F00;", "background-color: white;", "other_balls_holder", "xx", "round", "yy", "mouseX", "innerWidth", "mouseY", "playerID", "mySkin", "snakercv", "lastDiedX", "lastDiedY", "css", "#player_pointer", "boolean", 
  "On", "7FFF00", "Off", "red", '<font color="', "color", '">', "object", "text", "</font>", "white", "SLITHER INFINITY", "<br>IP: ", "<br>X: ", ", Y: ", "<br>[G] Google Play Skin", "<br>[C] Change server IP", "<br>Minimap Server: ", "Online", "Offline", "html", "#keys-info"];
  /** @type {function (?): undefined} */
  AnimatedValue = modelProperties;
  /** @type {function (): undefined} */
  replaceHTML = prepare;
  /** @type {function (): undefined} */
  startInfinity = connect;
  console[match[1]](match[0]);
  window[match[2]] = {
    socket : null,
    socketID : null,
    serverIP : null,
    playerID : null,
    playerNick : match[3],
    playerX : 21600,
    playerY : 21600,
    mouseX : 21600,
    mouseY : 21600,
    lastDiedX : null,
    lastDiedY : null,
    mySkin : null,
    mousePos : null,
    hasSpawned : false,
    firstGameStarted : false,
    /** @type {function (): undefined} */
    minimapUpdate : minimapUpdate
  };
  document[match[10]] = document[match[11]];
  /** @type {function (): ?} */
  document[match[11]] = method;
  localStorage[match[19]](match[17], match[18]);
  modelProperties[match[21]] = {
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
  xmlhttp = new XMLHttpRequest;
  xmlhttp[match[31]](match[29], match[30], true);
  /** @type {function (): undefined} */
  xmlhttp[match[32]] = _0x26639;
  xmlhttp[match[38]](null);
  /** @type {function (?): undefined} */
  window[match[39]] = insertBefore;
});
