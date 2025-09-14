var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/@amplitude/analytics-core/lib/esm/types/event/event.js
var IdentifyOperation;
(function(IdentifyOperation4) {
  IdentifyOperation4["SET"] = "$set";
  IdentifyOperation4["SET_ONCE"] = "$setOnce";
  IdentifyOperation4["ADD"] = "$add";
  IdentifyOperation4["APPEND"] = "$append";
  IdentifyOperation4["PREPEND"] = "$prepend";
  IdentifyOperation4["REMOVE"] = "$remove";
  IdentifyOperation4["PREINSERT"] = "$preInsert";
  IdentifyOperation4["POSTINSERT"] = "$postInsert";
  IdentifyOperation4["UNSET"] = "$unset";
  IdentifyOperation4["CLEAR_ALL"] = "$clearAll";
})(IdentifyOperation || (IdentifyOperation = {}));
var SpecialEventType;
(function(SpecialEventType3) {
  SpecialEventType3["IDENTIFY"] = "$identify";
  SpecialEventType3["GROUP_IDENTIFY"] = "$groupidentify";
  SpecialEventType3["REVENUE"] = "revenue_amount";
})(SpecialEventType || (SpecialEventType = {}));

// node_modules/@amplitude/analytics-core/lib/esm/types/constants.js
var UNSET_VALUE = "-";
var AMPLITUDE_PREFIX = "AMP";
var STORAGE_PREFIX = "".concat(AMPLITUDE_PREFIX, "_unsent");
var AMPLITUDE_SERVER_URL = "https://api2.amplitude.com/2/httpapi";
var EU_AMPLITUDE_SERVER_URL = "https://api.eu.amplitude.com/2/httpapi";
var AMPLITUDE_BATCH_SERVER_URL = "https://api2.amplitude.com/batch";
var EU_AMPLITUDE_BATCH_SERVER_URL = "https://api.eu.amplitude.com/batch";

// node_modules/@amplitude/analytics-core/lib/esm/utils/valid-properties.js
var MAX_PROPERTY_KEYS = 1e3;
var isValidObject = function(properties) {
  if (Object.keys(properties).length > MAX_PROPERTY_KEYS) {
    return false;
  }
  for (var key in properties) {
    var value = properties[key];
    if (!isValidProperties(key, value))
      return false;
  }
  return true;
};
var isValidProperties = function(property, value) {
  var e_1, _a;
  if (typeof property !== "string")
    return false;
  if (Array.isArray(value)) {
    var isValid = true;
    try {
      for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
        var valueElement = value_1_1.value;
        if (Array.isArray(valueElement)) {
          return false;
        } else if (typeof valueElement === "object") {
          isValid = isValid && isValidObject(valueElement);
        } else if (!["number", "string"].includes(typeof valueElement)) {
          return false;
        }
        if (!isValid) {
          return false;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  } else if (value === null || value === void 0) {
    return false;
  } else if (typeof value === "object") {
    return isValidObject(value);
  } else if (!["number", "string", "boolean"].includes(typeof value)) {
    return false;
  }
  return true;
};

// node_modules/@amplitude/analytics-core/lib/esm/identify.js
var Identify = (
  /** @class */
  function() {
    function Identify2() {
      this._propertySet = /* @__PURE__ */ new Set();
      this._properties = {};
    }
    Identify2.prototype.getUserProperties = function() {
      return __assign({}, this._properties);
    };
    Identify2.prototype.set = function(property, value) {
      this._safeSet(IdentifyOperation2.SET, property, value);
      return this;
    };
    Identify2.prototype.setOnce = function(property, value) {
      this._safeSet(IdentifyOperation2.SET_ONCE, property, value);
      return this;
    };
    Identify2.prototype.append = function(property, value) {
      this._safeSet(IdentifyOperation2.APPEND, property, value);
      return this;
    };
    Identify2.prototype.prepend = function(property, value) {
      this._safeSet(IdentifyOperation2.PREPEND, property, value);
      return this;
    };
    Identify2.prototype.postInsert = function(property, value) {
      this._safeSet(IdentifyOperation2.POSTINSERT, property, value);
      return this;
    };
    Identify2.prototype.preInsert = function(property, value) {
      this._safeSet(IdentifyOperation2.PREINSERT, property, value);
      return this;
    };
    Identify2.prototype.remove = function(property, value) {
      this._safeSet(IdentifyOperation2.REMOVE, property, value);
      return this;
    };
    Identify2.prototype.add = function(property, value) {
      this._safeSet(IdentifyOperation2.ADD, property, value);
      return this;
    };
    Identify2.prototype.unset = function(property) {
      this._safeSet(IdentifyOperation2.UNSET, property, UNSET_VALUE);
      return this;
    };
    Identify2.prototype.clearAll = function() {
      this._properties = {};
      this._properties[IdentifyOperation2.CLEAR_ALL] = UNSET_VALUE;
      return this;
    };
    Identify2.prototype._safeSet = function(operation, property, value) {
      if (this._validate(operation, property, value)) {
        var userPropertyMap = this._properties[operation];
        if (userPropertyMap === void 0) {
          userPropertyMap = {};
          this._properties[operation] = userPropertyMap;
        }
        userPropertyMap[property] = value;
        this._propertySet.add(property);
        return true;
      }
      return false;
    };
    Identify2.prototype._validate = function(operation, property, value) {
      if (this._properties[IdentifyOperation2.CLEAR_ALL] !== void 0) {
        return false;
      }
      if (this._propertySet.has(property)) {
        return false;
      }
      if (operation === IdentifyOperation2.ADD) {
        return typeof value === "number";
      }
      if (operation !== IdentifyOperation2.UNSET && operation !== IdentifyOperation2.REMOVE) {
        return isValidProperties(property, value);
      }
      return true;
    };
    return Identify2;
  }()
);
var IdentifyOperation2;
(function(IdentifyOperation4) {
  IdentifyOperation4["SET"] = "$set";
  IdentifyOperation4["SET_ONCE"] = "$setOnce";
  IdentifyOperation4["ADD"] = "$add";
  IdentifyOperation4["APPEND"] = "$append";
  IdentifyOperation4["PREPEND"] = "$prepend";
  IdentifyOperation4["REMOVE"] = "$remove";
  IdentifyOperation4["PREINSERT"] = "$preInsert";
  IdentifyOperation4["POSTINSERT"] = "$postInsert";
  IdentifyOperation4["UNSET"] = "$unset";
  IdentifyOperation4["CLEAR_ALL"] = "$clearAll";
})(IdentifyOperation2 || (IdentifyOperation2 = {}));
var OrderedIdentifyOperations = [
  IdentifyOperation2.CLEAR_ALL,
  IdentifyOperation2.UNSET,
  IdentifyOperation2.SET,
  IdentifyOperation2.SET_ONCE,
  IdentifyOperation2.ADD,
  IdentifyOperation2.APPEND,
  IdentifyOperation2.PREPEND,
  IdentifyOperation2.PREINSERT,
  IdentifyOperation2.POSTINSERT,
  IdentifyOperation2.REMOVE
];

// node_modules/@amplitude/analytics-core/lib/esm/types/messages.js
var SUCCESS_MESSAGE = "Event tracked successfully";
var UNEXPECTED_ERROR_MESSAGE = "Unexpected error occurred";
var MAX_RETRIES_EXCEEDED_MESSAGE = "Event rejected due to exceeded retry count";
var OPT_OUT_MESSAGE = "Event skipped due to optOut config";
var MISSING_API_KEY_MESSAGE = "Event rejected due to missing API key";
var INVALID_API_KEY = "Invalid API key";
var CLIENT_NOT_INITIALIZED = "Client not initialized";

// node_modules/@amplitude/analytics-core/lib/esm/types/status.js
var Status;
(function(Status3) {
  Status3["Unknown"] = "unknown";
  Status3["Skipped"] = "skipped";
  Status3["Success"] = "success";
  Status3["RateLimit"] = "rate_limit";
  Status3["PayloadTooLarge"] = "payload_too_large";
  Status3["Invalid"] = "invalid";
  Status3["Failed"] = "failed";
  Status3["Timeout"] = "Timeout";
  Status3["SystemError"] = "SystemError";
})(Status || (Status = {}));

// node_modules/@amplitude/analytics-core/lib/esm/utils/result-builder.js
var buildResult = function(event, code, message) {
  if (code === void 0) {
    code = 0;
  }
  if (message === void 0) {
    message = Status.Unknown;
  }
  return { event, code, message };
};

// node_modules/@amplitude/analytics-core/lib/esm/global-scope.js
var getGlobalScope = function() {
  var ampIntegrationContextName = "ampIntegrationContext";
  if (typeof globalThis !== "undefined" && typeof globalThis[ampIntegrationContextName] !== "undefined") {
    return globalThis[ampIntegrationContextName];
  }
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return void 0;
};

// node_modules/@amplitude/analytics-core/lib/esm/utils/uuid.js
var legacyUUID = function(a) {
  return a ? (
    // a random number from 0 to 15
    (a ^ // unless b is 8,
    Math.random() * // in which case
    16 >> // a random number from
    a / 4).toString(16)
  ) : (
    // or otherwise a concatenated string:
    (String(1e7) + // 10000000 +
    String(-1e3) + // -1000 +
    String(-4e3) + // -4000 +
    String(-8e3) + // -80000000 +
    String(-1e11)).replace(
      // replacing
      /[018]/g,
      // zeroes, ones, and eights with
      UUID
    )
  );
};
var hex = __spreadArray([], __read(Array(256).keys()), false).map(function(index) {
  return index.toString(16).padStart(2, "0");
});
var UUID = function(a) {
  var _a;
  var globalScope = getGlobalScope();
  if (!((_a = globalScope === null || globalScope === void 0 ? void 0 : globalScope.crypto) === null || _a === void 0 ? void 0 : _a.getRandomValues)) {
    return legacyUUID(a);
  }
  var r = globalScope.crypto.getRandomValues(new Uint8Array(16));
  r[6] = r[6] & 15 | 64;
  r[8] = r[8] & 63 | 128;
  return __spreadArray([], __read(r.entries()), false).map(function(_a2) {
    var _b = __read(_a2, 2), index = _b[0], int = _b[1];
    return [4, 6, 8, 10].includes(index) ? "-".concat(hex[int]) : hex[int];
  }).join("");
};

// node_modules/@amplitude/analytics-core/lib/esm/timeline.js
var Timeline = (
  /** @class */
  function() {
    function Timeline2(client) {
      this.client = client;
      this.queue = [];
      this.applying = false;
      this.plugins = [];
    }
    Timeline2.prototype.register = function(plugin, config) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              if (this.plugins.some(function(existingPlugin) {
                return existingPlugin.name === plugin.name;
              })) {
                config.loggerProvider.warn("Plugin with name ".concat(plugin.name, " already exists, skipping registration"));
                return [
                  2
                  /*return*/
                ];
              }
              if (plugin.name === void 0) {
                plugin.name = UUID();
                config.loggerProvider.warn("Plugin name is undefined. \n      Generating a random UUID for plugin name: ".concat(plugin.name, ". \n      Set a name for the plugin to prevent it from being added multiple times."));
              }
              plugin.type = (_a = plugin.type) !== null && _a !== void 0 ? _a : "enrichment";
              return [4, (_b = plugin.setup) === null || _b === void 0 ? void 0 : _b.call(plugin, config, this.client)];
            case 1:
              _c.sent();
              this.plugins.push(plugin);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Timeline2.prototype.deregister = function(pluginName, config) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var index, plugin;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              index = this.plugins.findIndex(function(plugin2) {
                return plugin2.name === pluginName;
              });
              if (index === -1) {
                config.loggerProvider.warn("Plugin with name ".concat(pluginName, " does not exist, skipping deregistration"));
                return [
                  2
                  /*return*/
                ];
              }
              plugin = this.plugins[index];
              this.plugins.splice(index, 1);
              return [4, (_a = plugin.teardown) === null || _a === void 0 ? void 0 : _a.call(plugin)];
            case 1:
              _b.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Timeline2.prototype.reset = function(client) {
      this.applying = false;
      var plugins = this.plugins;
      plugins.map(function(plugin) {
        var _a;
        return (_a = plugin.teardown) === null || _a === void 0 ? void 0 : _a.call(plugin);
      });
      this.plugins = [];
      this.client = client;
    };
    Timeline2.prototype.push = function(event) {
      var _this = this;
      return new Promise(function(resolve) {
        _this.queue.push([event, resolve]);
        _this.scheduleApply(0);
      });
    };
    Timeline2.prototype.scheduleApply = function(timeout) {
      var _this = this;
      if (this.applying)
        return;
      this.applying = true;
      setTimeout(function() {
        void _this.apply(_this.queue.shift()).then(function() {
          _this.applying = false;
          if (_this.queue.length > 0) {
            _this.scheduleApply(0);
          }
        });
      }, timeout);
    };
    Timeline2.prototype.apply = function(item) {
      return __awaiter(this, void 0, void 0, function() {
        var _a, event, _b, resolve, before, before_1, before_1_1, plugin, e, e_1_1, enrichment, enrichment_1, enrichment_1_1, plugin, e, e_2_1, destination, executeDestinations;
        var e_1, _c, e_2, _d;
        return __generator(this, function(_e) {
          switch (_e.label) {
            case 0:
              if (!item) {
                return [
                  2
                  /*return*/
                ];
              }
              _a = __read(item, 1), event = _a[0];
              _b = __read(item, 2), resolve = _b[1];
              before = this.plugins.filter(function(plugin2) {
                return plugin2.type === "before";
              });
              _e.label = 1;
            case 1:
              _e.trys.push([1, 6, 7, 8]);
              before_1 = __values(before), before_1_1 = before_1.next();
              _e.label = 2;
            case 2:
              if (!!before_1_1.done) return [3, 5];
              plugin = before_1_1.value;
              if (!plugin.execute) {
                return [3, 4];
              }
              return [4, plugin.execute(__assign({}, event))];
            case 3:
              e = _e.sent();
              if (e === null) {
                resolve({ event, code: 0, message: "" });
                return [
                  2
                  /*return*/
                ];
              } else {
                event = e;
              }
              _e.label = 4;
            case 4:
              before_1_1 = before_1.next();
              return [3, 2];
            case 5:
              return [3, 8];
            case 6:
              e_1_1 = _e.sent();
              e_1 = { error: e_1_1 };
              return [3, 8];
            case 7:
              try {
                if (before_1_1 && !before_1_1.done && (_c = before_1.return)) _c.call(before_1);
              } finally {
                if (e_1) throw e_1.error;
              }
              return [
                7
                /*endfinally*/
              ];
            case 8:
              enrichment = this.plugins.filter(function(plugin2) {
                return plugin2.type === "enrichment" || plugin2.type === void 0;
              });
              _e.label = 9;
            case 9:
              _e.trys.push([9, 14, 15, 16]);
              enrichment_1 = __values(enrichment), enrichment_1_1 = enrichment_1.next();
              _e.label = 10;
            case 10:
              if (!!enrichment_1_1.done) return [3, 13];
              plugin = enrichment_1_1.value;
              if (!plugin.execute) {
                return [3, 12];
              }
              return [4, plugin.execute(__assign({}, event))];
            case 11:
              e = _e.sent();
              if (e === null) {
                resolve({ event, code: 0, message: "" });
                return [
                  2
                  /*return*/
                ];
              } else {
                event = e;
              }
              _e.label = 12;
            case 12:
              enrichment_1_1 = enrichment_1.next();
              return [3, 10];
            case 13:
              return [3, 16];
            case 14:
              e_2_1 = _e.sent();
              e_2 = { error: e_2_1 };
              return [3, 16];
            case 15:
              try {
                if (enrichment_1_1 && !enrichment_1_1.done && (_d = enrichment_1.return)) _d.call(enrichment_1);
              } finally {
                if (e_2) throw e_2.error;
              }
              return [
                7
                /*endfinally*/
              ];
            case 16:
              destination = this.plugins.filter(function(plugin2) {
                return plugin2.type === "destination";
              });
              executeDestinations = destination.map(function(plugin2) {
                var eventClone = __assign({}, event);
                return plugin2.execute(eventClone).catch(function(e2) {
                  return buildResult(eventClone, 0, String(e2));
                });
              });
              void Promise.all(executeDestinations).then(function(_a2) {
                var _b2 = __read(_a2, 1), result = _b2[0];
                var resolveResult = result || buildResult(event, 100, "Event not tracked, no destination plugins on the instance");
                resolve(resolveResult);
              });
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Timeline2.prototype.flush = function() {
      return __awaiter(this, void 0, void 0, function() {
        var queue, destination, executeDestinations;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              queue = this.queue;
              this.queue = [];
              return [4, Promise.all(queue.map(function(item) {
                return _this.apply(item);
              }))];
            case 1:
              _a.sent();
              destination = this.plugins.filter(function(plugin) {
                return plugin.type === "destination";
              });
              executeDestinations = destination.map(function(plugin) {
                return plugin.flush && plugin.flush();
              });
              return [4, Promise.all(executeDestinations)];
            case 2:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Timeline2.prototype.onIdentityChanged = function(identity) {
      this.plugins.forEach(function(plugin) {
        var _a;
        void ((_a = plugin.onIdentityChanged) === null || _a === void 0 ? void 0 : _a.call(plugin, identity));
      });
    };
    Timeline2.prototype.onSessionIdChanged = function(sessionId) {
      this.plugins.forEach(function(plugin) {
        var _a;
        void ((_a = plugin.onSessionIdChanged) === null || _a === void 0 ? void 0 : _a.call(plugin, sessionId));
      });
    };
    Timeline2.prototype.onOptOutChanged = function(optOut) {
      this.plugins.forEach(function(plugin) {
        var _a;
        void ((_a = plugin.onOptOutChanged) === null || _a === void 0 ? void 0 : _a.call(plugin, optOut));
      });
    };
    return Timeline2;
  }()
);

// node_modules/@amplitude/analytics-core/lib/esm/utils/event-builder.js
var createTrackEvent = function(eventInput, eventProperties, eventOptions) {
  var baseEvent = typeof eventInput === "string" ? { event_type: eventInput } : eventInput;
  return __assign(__assign(__assign({}, baseEvent), eventOptions), eventProperties && { event_properties: eventProperties });
};
var createIdentifyEvent = function(identify2, eventOptions) {
  var identifyEvent = __assign(__assign({}, eventOptions), { event_type: SpecialEventType.IDENTIFY, user_properties: identify2.getUserProperties() });
  return identifyEvent;
};
var createGroupIdentifyEvent = function(groupType, groupName, identify2, eventOptions) {
  var _a;
  var groupIdentify2 = __assign(__assign({}, eventOptions), { event_type: SpecialEventType.GROUP_IDENTIFY, group_properties: identify2.getUserProperties(), groups: (_a = {}, _a[groupType] = groupName, _a) });
  return groupIdentify2;
};
var createGroupEvent = function(groupType, groupName, eventOptions) {
  var _a;
  var identify2 = new Identify();
  identify2.set(groupType, groupName);
  var groupEvent = __assign(__assign({}, eventOptions), { event_type: SpecialEventType.IDENTIFY, user_properties: identify2.getUserProperties(), groups: (_a = {}, _a[groupType] = groupName, _a) });
  return groupEvent;
};
var createRevenueEvent = function(revenue2, eventOptions) {
  return __assign(__assign({}, eventOptions), { event_type: SpecialEventType.REVENUE, event_properties: revenue2.getEventProperties() });
};

// node_modules/@amplitude/analytics-core/lib/esm/utils/return-wrapper.js
var returnWrapper = function(awaitable) {
  return {
    promise: awaitable || Promise.resolve()
  };
};

// node_modules/@amplitude/analytics-core/lib/esm/core-client.js
var AmplitudeCore = (
  /** @class */
  function() {
    function AmplitudeCore2(name) {
      if (name === void 0) {
        name = "$default";
      }
      this.initializing = false;
      this.isReady = false;
      this.q = [];
      this.dispatchQ = [];
      this.logEvent = this.track.bind(this);
      this.timeline = new Timeline(this);
      this.name = name;
    }
    AmplitudeCore2.prototype._init = function(config) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.config = config;
              this.timeline.reset(this);
              return [4, this.runQueuedFunctions("q")];
            case 1:
              _a.sent();
              this.isReady = true;
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    AmplitudeCore2.prototype.runQueuedFunctions = function(queueName) {
      return __awaiter(this, void 0, void 0, function() {
        var queuedFunctions, queuedFunctions_1, queuedFunctions_1_1, queuedFunction, val, e_1_1;
        var e_1, _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              queuedFunctions = this[queueName];
              this[queueName] = [];
              _b.label = 1;
            case 1:
              _b.trys.push([1, 8, 9, 10]);
              queuedFunctions_1 = __values(queuedFunctions), queuedFunctions_1_1 = queuedFunctions_1.next();
              _b.label = 2;
            case 2:
              if (!!queuedFunctions_1_1.done) return [3, 7];
              queuedFunction = queuedFunctions_1_1.value;
              val = queuedFunction();
              if (!(val && "promise" in val)) return [3, 4];
              return [4, val.promise];
            case 3:
              _b.sent();
              return [3, 6];
            case 4:
              return [4, val];
            case 5:
              _b.sent();
              _b.label = 6;
            case 6:
              queuedFunctions_1_1 = queuedFunctions_1.next();
              return [3, 2];
            case 7:
              return [3, 10];
            case 8:
              e_1_1 = _b.sent();
              e_1 = { error: e_1_1 };
              return [3, 10];
            case 9:
              try {
                if (queuedFunctions_1_1 && !queuedFunctions_1_1.done && (_a = queuedFunctions_1.return)) _a.call(queuedFunctions_1);
              } finally {
                if (e_1) throw e_1.error;
              }
              return [
                7
                /*endfinally*/
              ];
            case 10:
              if (!this[queueName].length) return [3, 12];
              return [4, this.runQueuedFunctions(queueName)];
            case 11:
              _b.sent();
              _b.label = 12;
            case 12:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    AmplitudeCore2.prototype.track = function(eventInput, eventProperties, eventOptions) {
      var event = createTrackEvent(eventInput, eventProperties, eventOptions);
      return returnWrapper(this.dispatch(event));
    };
    AmplitudeCore2.prototype.identify = function(identify2, eventOptions) {
      var event = createIdentifyEvent(identify2, eventOptions);
      return returnWrapper(this.dispatch(event));
    };
    AmplitudeCore2.prototype.groupIdentify = function(groupType, groupName, identify2, eventOptions) {
      var event = createGroupIdentifyEvent(groupType, groupName, identify2, eventOptions);
      return returnWrapper(this.dispatch(event));
    };
    AmplitudeCore2.prototype.setGroup = function(groupType, groupName, eventOptions) {
      var event = createGroupEvent(groupType, groupName, eventOptions);
      return returnWrapper(this.dispatch(event));
    };
    AmplitudeCore2.prototype.revenue = function(revenue2, eventOptions) {
      var event = createRevenueEvent(revenue2, eventOptions);
      return returnWrapper(this.dispatch(event));
    };
    AmplitudeCore2.prototype.add = function(plugin) {
      if (!this.isReady) {
        this.q.push(this._addPlugin.bind(this, plugin));
        return returnWrapper();
      }
      return this._addPlugin(plugin);
    };
    AmplitudeCore2.prototype._addPlugin = function(plugin) {
      return returnWrapper(this.timeline.register(plugin, this.config));
    };
    AmplitudeCore2.prototype.remove = function(pluginName) {
      if (!this.isReady) {
        this.q.push(this._removePlugin.bind(this, pluginName));
        return returnWrapper();
      }
      return this._removePlugin(pluginName);
    };
    AmplitudeCore2.prototype._removePlugin = function(pluginName) {
      return returnWrapper(this.timeline.deregister(pluginName, this.config));
    };
    AmplitudeCore2.prototype.dispatchWithCallback = function(event, callback) {
      if (!this.isReady) {
        return callback(buildResult(event, 0, CLIENT_NOT_INITIALIZED));
      }
      void this.process(event).then(callback);
    };
    AmplitudeCore2.prototype.dispatch = function(event) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          if (!this.isReady) {
            return [2, new Promise(function(resolve) {
              _this.dispatchQ.push(_this.dispatchWithCallback.bind(_this, event, resolve));
            })];
          }
          return [2, this.process(event)];
        });
      });
    };
    AmplitudeCore2.prototype.getOperationAppliedUserProperties = function(userProperties) {
      var updatedProperties = {};
      if (userProperties === void 0) {
        return updatedProperties;
      }
      var nonOpProperties = {};
      Object.keys(userProperties).forEach(function(key) {
        if (!Object.values(IdentifyOperation).includes(key)) {
          nonOpProperties[key] = userProperties[key];
        }
      });
      OrderedIdentifyOperations.forEach(function(operation) {
        if (!Object.keys(userProperties).includes(operation))
          return;
        var opProperties = userProperties[operation];
        switch (operation) {
          case IdentifyOperation.CLEAR_ALL:
            Object.keys(updatedProperties).forEach(function(prop) {
              delete updatedProperties[prop];
            });
            break;
          case IdentifyOperation.UNSET:
            Object.keys(opProperties).forEach(function(prop) {
              delete updatedProperties[prop];
            });
            break;
          case IdentifyOperation.SET:
            Object.assign(updatedProperties, opProperties);
            break;
        }
      });
      Object.assign(updatedProperties, nonOpProperties);
      return updatedProperties;
    };
    AmplitudeCore2.prototype.process = function(event) {
      return __awaiter(this, void 0, void 0, function() {
        var userProperties, result, e_2, message, result;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              if (this.config.optOut) {
                return [2, buildResult(event, 0, OPT_OUT_MESSAGE)];
              }
              if (event.event_type === SpecialEventType.IDENTIFY) {
                userProperties = this.getOperationAppliedUserProperties(event.user_properties);
                this.timeline.onIdentityChanged({ userProperties });
              }
              return [4, this.timeline.push(event)];
            case 1:
              result = _a.sent();
              result.code === 200 ? this.config.loggerProvider.log(result.message) : result.code === 100 ? this.config.loggerProvider.warn(result.message) : this.config.loggerProvider.error(result.message);
              return [2, result];
            case 2:
              e_2 = _a.sent();
              message = String(e_2);
              this.config.loggerProvider.error(message);
              result = buildResult(event, 0, message);
              return [2, result];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    AmplitudeCore2.prototype.setOptOut = function(optOut) {
      if (!this.isReady) {
        this.q.push(this._setOptOut.bind(this, Boolean(optOut)));
        return;
      }
      this._setOptOut(optOut);
    };
    AmplitudeCore2.prototype._setOptOut = function(optOut) {
      if (this.config.optOut !== optOut) {
        this.timeline.onOptOutChanged(optOut);
        this.config.optOut = Boolean(optOut);
      }
    };
    AmplitudeCore2.prototype.flush = function() {
      return returnWrapper(this.timeline.flush());
    };
    AmplitudeCore2.prototype.plugin = function(name) {
      var plugin = this.timeline.plugins.find(function(plugin2) {
        return plugin2.name === name;
      });
      if (plugin === void 0) {
        this.config.loggerProvider.debug("Cannot find plugin with name ".concat(name));
        return void 0;
      }
      return plugin;
    };
    return AmplitudeCore2;
  }()
);

// node_modules/@amplitude/analytics-core/lib/esm/revenue.js
var Revenue = (
  /** @class */
  function() {
    function Revenue2() {
      this.productId = "";
      this.quantity = 1;
      this.price = 0;
    }
    Revenue2.prototype.setProductId = function(productId) {
      this.productId = productId;
      return this;
    };
    Revenue2.prototype.setQuantity = function(quantity) {
      if (quantity > 0) {
        this.quantity = quantity;
      }
      return this;
    };
    Revenue2.prototype.setPrice = function(price) {
      this.price = price;
      return this;
    };
    Revenue2.prototype.setRevenueType = function(revenueType) {
      this.revenueType = revenueType;
      return this;
    };
    Revenue2.prototype.setCurrency = function(currency) {
      this.currency = currency;
      return this;
    };
    Revenue2.prototype.setRevenue = function(revenue2) {
      this.revenue = revenue2;
      return this;
    };
    Revenue2.prototype.setReceipt = function(receipt) {
      this.receipt = receipt;
      return this;
    };
    Revenue2.prototype.setReceiptSig = function(receiptSig) {
      this.receiptSig = receiptSig;
      return this;
    };
    Revenue2.prototype.setEventProperties = function(properties) {
      if (isValidObject(properties)) {
        this.properties = properties;
      }
      return this;
    };
    Revenue2.prototype.getEventProperties = function() {
      var eventProperties = this.properties ? __assign({}, this.properties) : {};
      eventProperties[RevenueProperty.REVENUE_PRODUCT_ID] = this.productId;
      eventProperties[RevenueProperty.REVENUE_QUANTITY] = this.quantity;
      eventProperties[RevenueProperty.REVENUE_PRICE] = this.price;
      eventProperties[RevenueProperty.REVENUE_TYPE] = this.revenueType;
      eventProperties[RevenueProperty.REVENUE_CURRENCY] = this.currency;
      eventProperties[RevenueProperty.REVENUE] = this.revenue;
      eventProperties[RevenueProperty.RECEIPT] = this.receipt;
      eventProperties[RevenueProperty.RECEIPT_SIG] = this.receiptSig;
      return eventProperties;
    };
    return Revenue2;
  }()
);
var RevenueProperty;
(function(RevenueProperty3) {
  RevenueProperty3["REVENUE_PRODUCT_ID"] = "$productId";
  RevenueProperty3["REVENUE_QUANTITY"] = "$quantity";
  RevenueProperty3["REVENUE_PRICE"] = "$price";
  RevenueProperty3["REVENUE_TYPE"] = "$revenueType";
  RevenueProperty3["REVENUE_CURRENCY"] = "$currency";
  RevenueProperty3["REVENUE"] = "$revenue";
  RevenueProperty3["RECEIPT"] = "$receipt";
  RevenueProperty3["RECEIPT_SIG"] = "$receiptSig";
})(RevenueProperty || (RevenueProperty = {}));

// node_modules/@amplitude/analytics-core/lib/esm/utils/chunk.js
var chunk = function(arr, size) {
  var chunkSize = Math.max(size, 1);
  return arr.reduce(function(chunks, element, index) {
    var chunkIndex = Math.floor(index / chunkSize);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    chunks[chunkIndex].push(element);
    return chunks;
  }, []);
};

// node_modules/@amplitude/analytics-core/lib/esm/types/loglevel.js
var LogLevel;
(function(LogLevel3) {
  LogLevel3[LogLevel3["None"] = 0] = "None";
  LogLevel3[LogLevel3["Error"] = 1] = "Error";
  LogLevel3[LogLevel3["Warn"] = 2] = "Warn";
  LogLevel3[LogLevel3["Verbose"] = 3] = "Verbose";
  LogLevel3[LogLevel3["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));

// node_modules/@amplitude/analytics-core/lib/esm/logger.js
var PREFIX = "Amplitude Logger ";
var Logger = (
  /** @class */
  function() {
    function Logger2() {
      this.logLevel = LogLevel.None;
    }
    Logger2.prototype.disable = function() {
      this.logLevel = LogLevel.None;
    };
    Logger2.prototype.enable = function(logLevel) {
      if (logLevel === void 0) {
        logLevel = LogLevel.Warn;
      }
      this.logLevel = logLevel;
    };
    Logger2.prototype.log = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.logLevel < LogLevel.Verbose) {
        return;
      }
      console.log("".concat(PREFIX, "[Log]: ").concat(args.join(" ")));
    };
    Logger2.prototype.warn = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.logLevel < LogLevel.Warn) {
        return;
      }
      console.warn("".concat(PREFIX, "[Warn]: ").concat(args.join(" ")));
    };
    Logger2.prototype.error = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.logLevel < LogLevel.Error) {
        return;
      }
      console.error("".concat(PREFIX, "[Error]: ").concat(args.join(" ")));
    };
    Logger2.prototype.debug = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (this.logLevel < LogLevel.Debug) {
        return;
      }
      console.log("".concat(PREFIX, "[Debug]: ").concat(args.join(" ")));
    };
    return Logger2;
  }()
);

// node_modules/@amplitude/analytics-core/lib/esm/config.js
var getDefaultConfig = function() {
  return {
    flushMaxRetries: 12,
    flushQueueSize: 200,
    flushIntervalMillis: 1e4,
    instanceName: "$default_instance",
    logLevel: LogLevel.Warn,
    loggerProvider: new Logger(),
    offline: false,
    optOut: false,
    serverUrl: AMPLITUDE_SERVER_URL,
    serverZone: "US",
    useBatch: false
  };
};
var Config = (
  /** @class */
  function() {
    function Config2(options) {
      var _a, _b, _c, _d;
      this._optOut = false;
      var defaultConfig = getDefaultConfig();
      this.apiKey = options.apiKey;
      this.flushIntervalMillis = (_a = options.flushIntervalMillis) !== null && _a !== void 0 ? _a : defaultConfig.flushIntervalMillis;
      this.flushMaxRetries = options.flushMaxRetries || defaultConfig.flushMaxRetries;
      this.flushQueueSize = options.flushQueueSize || defaultConfig.flushQueueSize;
      this.instanceName = options.instanceName || defaultConfig.instanceName;
      this.loggerProvider = options.loggerProvider || defaultConfig.loggerProvider;
      this.logLevel = (_b = options.logLevel) !== null && _b !== void 0 ? _b : defaultConfig.logLevel;
      this.minIdLength = options.minIdLength;
      this.plan = options.plan;
      this.ingestionMetadata = options.ingestionMetadata;
      this.offline = options.offline !== void 0 ? options.offline : defaultConfig.offline;
      this.optOut = (_c = options.optOut) !== null && _c !== void 0 ? _c : defaultConfig.optOut;
      this.serverUrl = options.serverUrl;
      this.serverZone = options.serverZone || defaultConfig.serverZone;
      this.storageProvider = options.storageProvider;
      this.transportProvider = options.transportProvider;
      this.useBatch = (_d = options.useBatch) !== null && _d !== void 0 ? _d : defaultConfig.useBatch;
      this.loggerProvider.enable(this.logLevel);
      var serverConfig = createServerConfig(options.serverUrl, options.serverZone, options.useBatch);
      this.serverZone = serverConfig.serverZone;
      this.serverUrl = serverConfig.serverUrl;
    }
    Object.defineProperty(Config2.prototype, "optOut", {
      get: function() {
        return this._optOut;
      },
      set: function(optOut) {
        this._optOut = optOut;
      },
      enumerable: false,
      configurable: true
    });
    return Config2;
  }()
);
var getServerUrl = function(serverZone, useBatch) {
  if (serverZone === "EU") {
    return useBatch ? EU_AMPLITUDE_BATCH_SERVER_URL : EU_AMPLITUDE_SERVER_URL;
  }
  return useBatch ? AMPLITUDE_BATCH_SERVER_URL : AMPLITUDE_SERVER_URL;
};
var createServerConfig = function(serverUrl, serverZone, useBatch) {
  if (serverUrl === void 0) {
    serverUrl = "";
  }
  if (serverZone === void 0) {
    serverZone = getDefaultConfig().serverZone;
  }
  if (useBatch === void 0) {
    useBatch = getDefaultConfig().useBatch;
  }
  if (serverUrl) {
    return { serverUrl, serverZone: void 0 };
  }
  var _serverZone = ["US", "EU"].includes(serverZone) ? serverZone : getDefaultConfig().serverZone;
  return {
    serverZone: _serverZone,
    serverUrl: getServerUrl(_serverZone, useBatch)
  };
};
var RequestMetadata = (
  /** @class */
  function() {
    function RequestMetadata2() {
      this.sdk = {
        metrics: {
          histogram: {}
        }
      };
    }
    RequestMetadata2.prototype.recordHistogram = function(key, value) {
      this.sdk.metrics.histogram[key] = value;
    };
    return RequestMetadata2;
  }()
);

// node_modules/@amplitude/analytics-core/lib/esm/plugins/destination.js
function getErrorMessage(error) {
  if (error instanceof Error)
    return error.message;
  return String(error);
}
function getResponseBodyString(res) {
  var responseBodyString = "";
  try {
    if ("body" in res) {
      responseBodyString = JSON.stringify(res.body, null, 2);
    }
  } catch (_a) {
  }
  return responseBodyString;
}
var Destination = (
  /** @class */
  function() {
    function Destination2() {
      this.name = "amplitude";
      this.type = "destination";
      this.retryTimeout = 1e3;
      this.throttleTimeout = 3e4;
      this.storageKey = "";
      this.scheduleId = null;
      this.scheduledTimeout = 0;
      this.flushId = null;
      this.queue = [];
    }
    Destination2.prototype.setup = function(config) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var unsent;
        var _this = this;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.config = config;
              this.storageKey = "".concat(STORAGE_PREFIX, "_").concat(this.config.apiKey.substring(0, 10));
              return [4, (_a = this.config.storageProvider) === null || _a === void 0 ? void 0 : _a.get(this.storageKey)];
            case 1:
              unsent = _b.sent();
              if (unsent && unsent.length > 0) {
                void Promise.all(unsent.map(function(event) {
                  return _this.execute(event);
                })).catch();
              }
              return [2, Promise.resolve(void 0)];
          }
        });
      });
    };
    Destination2.prototype.execute = function(event) {
      var _this = this;
      if (!event.insert_id) {
        event.insert_id = UUID();
      }
      return new Promise(function(resolve) {
        var context = {
          event,
          attempts: 0,
          callback: function(result) {
            return resolve(result);
          },
          timeout: 0
        };
        _this.queue.push(context);
        _this.schedule(_this.config.flushIntervalMillis);
        _this.saveEvents();
      });
    };
    Destination2.prototype.removeEventsExceedFlushMaxRetries = function(list) {
      var _this = this;
      return list.filter(function(context) {
        context.attempts += 1;
        if (context.attempts < _this.config.flushMaxRetries) {
          return true;
        }
        void _this.fulfillRequest([context], 500, MAX_RETRIES_EXCEEDED_MESSAGE);
        return false;
      });
    };
    Destination2.prototype.scheduleEvents = function(list) {
      var _this = this;
      list.forEach(function(context) {
        _this.schedule(context.timeout === 0 ? _this.config.flushIntervalMillis : context.timeout);
      });
    };
    Destination2.prototype.schedule = function(timeout) {
      var _this = this;
      if (this.config.offline) {
        return;
      }
      if (this.scheduleId === null || this.scheduleId && timeout > this.scheduledTimeout) {
        if (this.scheduleId) {
          clearTimeout(this.scheduleId);
        }
        this.scheduledTimeout = timeout;
        this.scheduleId = setTimeout(function() {
          _this.queue = _this.queue.map(function(context) {
            context.timeout = 0;
            return context;
          });
          void _this.flush(true);
        }, timeout);
        return;
      }
    };
    Destination2.prototype.resetSchedule = function() {
      this.scheduleId = null;
      this.scheduledTimeout = 0;
    };
    Destination2.prototype.flush = function(useRetry) {
      if (useRetry === void 0) {
        useRetry = false;
      }
      return __awaiter(this, void 0, void 0, function() {
        var list, later, batches;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (this.config.offline) {
                this.resetSchedule();
                this.config.loggerProvider.debug("Skipping flush while offline.");
                return [
                  2
                  /*return*/
                ];
              }
              if (this.flushId) {
                this.resetSchedule();
                this.config.loggerProvider.debug("Skipping flush because previous flush has not resolved.");
                return [
                  2
                  /*return*/
                ];
              }
              this.flushId = this.scheduleId;
              this.resetSchedule();
              list = [];
              later = [];
              this.queue.forEach(function(context) {
                return context.timeout === 0 ? list.push(context) : later.push(context);
              });
              batches = chunk(list, this.config.flushQueueSize);
              return [4, batches.reduce(function(promise, batch) {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a2) {
                    switch (_a2.label) {
                      case 0:
                        return [4, promise];
                      case 1:
                        _a2.sent();
                        return [4, this.send(batch, useRetry)];
                      case 2:
                        return [2, _a2.sent()];
                    }
                  });
                });
              }, Promise.resolve())];
            case 1:
              _a.sent();
              this.flushId = null;
              this.scheduleEvents(this.queue);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Destination2.prototype.send = function(list, useRetry) {
      if (useRetry === void 0) {
        useRetry = true;
      }
      return __awaiter(this, void 0, void 0, function() {
        var payload, serverUrl, res, e_1, errorMessage;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.config.apiKey) {
                return [2, this.fulfillRequest(list, 400, MISSING_API_KEY_MESSAGE)];
              }
              payload = {
                api_key: this.config.apiKey,
                events: list.map(function(context) {
                  var _a2 = context.event, extra = _a2.extra, eventWithoutExtra = __rest(_a2, ["extra"]);
                  return eventWithoutExtra;
                }),
                options: {
                  min_id_length: this.config.minIdLength
                },
                client_upload_time: (/* @__PURE__ */ new Date()).toISOString(),
                request_metadata: this.config.requestMetadata
              };
              this.config.requestMetadata = new RequestMetadata();
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              serverUrl = createServerConfig(this.config.serverUrl, this.config.serverZone, this.config.useBatch).serverUrl;
              return [4, this.config.transportProvider.send(serverUrl, payload)];
            case 2:
              res = _a.sent();
              if (res === null) {
                this.fulfillRequest(list, 0, UNEXPECTED_ERROR_MESSAGE);
                return [
                  2
                  /*return*/
                ];
              }
              if (!useRetry) {
                if ("body" in res) {
                  this.fulfillRequest(list, res.statusCode, "".concat(res.status, ": ").concat(getResponseBodyString(res)));
                } else {
                  this.fulfillRequest(list, res.statusCode, res.status);
                }
                return [
                  2
                  /*return*/
                ];
              }
              this.handleResponse(res, list);
              return [3, 4];
            case 3:
              e_1 = _a.sent();
              errorMessage = getErrorMessage(e_1);
              this.config.loggerProvider.error(errorMessage);
              this.handleResponse({ status: Status.Failed, statusCode: 0 }, list);
              return [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Destination2.prototype.handleResponse = function(res, list) {
      var status = res.status;
      switch (status) {
        case Status.Success: {
          this.handleSuccessResponse(res, list);
          break;
        }
        case Status.Invalid: {
          this.handleInvalidResponse(res, list);
          break;
        }
        case Status.PayloadTooLarge: {
          this.handlePayloadTooLargeResponse(res, list);
          break;
        }
        case Status.RateLimit: {
          this.handleRateLimitResponse(res, list);
          break;
        }
        default: {
          this.config.loggerProvider.warn(`{code: 0, error: "Status '`.concat(status, "' provided for ").concat(list.length, ' events"}'));
          this.handleOtherResponse(list);
          break;
        }
      }
    };
    Destination2.prototype.handleSuccessResponse = function(res, list) {
      this.fulfillRequest(list, res.statusCode, SUCCESS_MESSAGE);
    };
    Destination2.prototype.handleInvalidResponse = function(res, list) {
      var _this = this;
      if (res.body.missingField || res.body.error.startsWith(INVALID_API_KEY)) {
        this.fulfillRequest(list, res.statusCode, res.body.error);
        return;
      }
      var dropIndex = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(Object.values(res.body.eventsWithInvalidFields)), false), __read(Object.values(res.body.eventsWithMissingFields)), false), __read(Object.values(res.body.eventsWithInvalidIdLengths)), false), __read(res.body.silencedEvents), false).flat();
      var dropIndexSet = new Set(dropIndex);
      var retry = list.filter(function(context, index) {
        if (dropIndexSet.has(index)) {
          _this.fulfillRequest([context], res.statusCode, res.body.error);
          return;
        }
        return true;
      });
      if (retry.length > 0) {
        this.config.loggerProvider.warn(getResponseBodyString(res));
      }
      var tryable = this.removeEventsExceedFlushMaxRetries(retry);
      this.scheduleEvents(tryable);
    };
    Destination2.prototype.handlePayloadTooLargeResponse = function(res, list) {
      if (list.length === 1) {
        this.fulfillRequest(list, res.statusCode, res.body.error);
        return;
      }
      this.config.loggerProvider.warn(getResponseBodyString(res));
      this.config.flushQueueSize /= 2;
      var tryable = this.removeEventsExceedFlushMaxRetries(list);
      this.scheduleEvents(tryable);
    };
    Destination2.prototype.handleRateLimitResponse = function(res, list) {
      var _this = this;
      var dropUserIds = Object.keys(res.body.exceededDailyQuotaUsers);
      var dropDeviceIds = Object.keys(res.body.exceededDailyQuotaDevices);
      var throttledIndex = res.body.throttledEvents;
      var dropUserIdsSet = new Set(dropUserIds);
      var dropDeviceIdsSet = new Set(dropDeviceIds);
      var throttledIndexSet = new Set(throttledIndex);
      var retry = list.filter(function(context, index) {
        if (context.event.user_id && dropUserIdsSet.has(context.event.user_id) || context.event.device_id && dropDeviceIdsSet.has(context.event.device_id)) {
          _this.fulfillRequest([context], res.statusCode, res.body.error);
          return;
        }
        if (throttledIndexSet.has(index)) {
          context.timeout = _this.throttleTimeout;
        }
        return true;
      });
      if (retry.length > 0) {
        this.config.loggerProvider.warn(getResponseBodyString(res));
      }
      var tryable = this.removeEventsExceedFlushMaxRetries(retry);
      this.scheduleEvents(tryable);
    };
    Destination2.prototype.handleOtherResponse = function(list) {
      var _this = this;
      var later = list.map(function(context) {
        context.timeout = context.attempts * _this.retryTimeout;
        return context;
      });
      var tryable = this.removeEventsExceedFlushMaxRetries(later);
      this.scheduleEvents(tryable);
    };
    Destination2.prototype.fulfillRequest = function(list, code, message) {
      this.removeEvents(list);
      list.forEach(function(context) {
        return context.callback(buildResult(context.event, code, message));
      });
    };
    Destination2.prototype.saveEvents = function() {
      if (!this.config.storageProvider) {
        return;
      }
      var updatedEvents = this.queue.map(function(context) {
        return context.event;
      });
      void this.config.storageProvider.set(this.storageKey, updatedEvents);
    };
    Destination2.prototype.removeEvents = function(eventsToRemove) {
      this.queue = this.queue.filter(function(queuedContext) {
        return !eventsToRemove.some(function(context) {
          return context.event.insert_id === queuedContext.event.insert_id;
        });
      });
      this.saveEvents();
    };
    return Destination2;
  }()
);

// node_modules/@amplitude/analytics-connector/dist/analytics-connector.esm.js
var ApplicationContextProviderImpl = (
  /** @class */
  function() {
    function ApplicationContextProviderImpl2() {
    }
    ApplicationContextProviderImpl2.prototype.getApplicationContext = function() {
      return {
        versionName: this.versionName,
        language: getLanguage(),
        platform: "Web",
        os: void 0,
        deviceModel: void 0
      };
    };
    return ApplicationContextProviderImpl2;
  }()
);
var getLanguage = function() {
  return typeof navigator !== "undefined" && (navigator.languages && navigator.languages[0] || navigator.language) || "";
};
var EventBridgeImpl = (
  /** @class */
  function() {
    function EventBridgeImpl2() {
      this.queue = [];
    }
    EventBridgeImpl2.prototype.logEvent = function(event) {
      if (!this.receiver) {
        if (this.queue.length < 512) {
          this.queue.push(event);
        }
      } else {
        this.receiver(event);
      }
    };
    EventBridgeImpl2.prototype.setEventReceiver = function(receiver) {
      this.receiver = receiver;
      if (this.queue.length > 0) {
        this.queue.forEach(function(event) {
          receiver(event);
        });
        this.queue = [];
      }
    };
    return EventBridgeImpl2;
  }()
);
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
function __values2(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
var isEqual = function(obj1, obj2) {
  var e_1, _a;
  var primitive = ["string", "number", "boolean", "undefined"];
  var typeA = typeof obj1;
  var typeB = typeof obj2;
  if (typeA !== typeB) {
    return false;
  }
  try {
    for (var primitive_1 = __values2(primitive), primitive_1_1 = primitive_1.next(); !primitive_1_1.done; primitive_1_1 = primitive_1.next()) {
      var p = primitive_1_1.value;
      if (p === typeA) {
        return obj1 === obj2;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (primitive_1_1 && !primitive_1_1.done && (_a = primitive_1.return)) _a.call(primitive_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  if (obj1 == null && obj2 == null) {
    return true;
  } else if (obj1 == null || obj2 == null) {
    return false;
  }
  if (obj1.length !== obj2.length) {
    return false;
  }
  var isArrayA = Array.isArray(obj1);
  var isArrayB = Array.isArray(obj2);
  if (isArrayA !== isArrayB) {
    return false;
  }
  if (isArrayA && isArrayB) {
    for (var i = 0; i < obj1.length; i++) {
      if (!isEqual(obj1[i], obj2[i])) {
        return false;
      }
    }
  } else {
    var sorted1 = Object.keys(obj1).sort();
    var sorted2 = Object.keys(obj2).sort();
    if (!isEqual(sorted1, sorted2)) {
      return false;
    }
    var result_1 = true;
    Object.keys(obj1).forEach(function(key) {
      if (!isEqual(obj1[key], obj2[key])) {
        result_1 = false;
      }
    });
    return result_1;
  }
  return true;
};
var ID_OP_SET = "$set";
var ID_OP_UNSET = "$unset";
var ID_OP_CLEAR_ALL = "$clearAll";
if (!Object.entries) {
  Object.entries = function(obj) {
    var ownProps = Object.keys(obj);
    var i = ownProps.length;
    var resArray = new Array(i);
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }
    return resArray;
  };
}
var IdentityStoreImpl = (
  /** @class */
  function() {
    function IdentityStoreImpl2() {
      this.identity = { userProperties: {} };
      this.listeners = /* @__PURE__ */ new Set();
    }
    IdentityStoreImpl2.prototype.editIdentity = function() {
      var self2 = this;
      var actingUserProperties = __assign2({}, this.identity.userProperties);
      var actingIdentity = __assign2(__assign2({}, this.identity), { userProperties: actingUserProperties });
      return {
        setUserId: function(userId) {
          actingIdentity.userId = userId;
          return this;
        },
        setDeviceId: function(deviceId) {
          actingIdentity.deviceId = deviceId;
          return this;
        },
        setUserProperties: function(userProperties) {
          actingIdentity.userProperties = userProperties;
          return this;
        },
        setOptOut: function(optOut) {
          actingIdentity.optOut = optOut;
          return this;
        },
        updateUserProperties: function(actions) {
          var e_1, _a, e_2, _b, e_3, _c;
          var actingProperties = actingIdentity.userProperties || {};
          try {
            for (var _d = __values2(Object.entries(actions)), _e = _d.next(); !_e.done; _e = _d.next()) {
              var _f = __read2(_e.value, 2), action = _f[0], properties = _f[1];
              switch (action) {
                case ID_OP_SET:
                  try {
                    for (var _g = (e_2 = void 0, __values2(Object.entries(properties))), _h = _g.next(); !_h.done; _h = _g.next()) {
                      var _j = __read2(_h.value, 2), key = _j[0], value = _j[1];
                      actingProperties[key] = value;
                    }
                  } catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                  } finally {
                    try {
                      if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                    } finally {
                      if (e_2) throw e_2.error;
                    }
                  }
                  break;
                case ID_OP_UNSET:
                  try {
                    for (var _k = (e_3 = void 0, __values2(Object.keys(properties))), _l = _k.next(); !_l.done; _l = _k.next()) {
                      var key = _l.value;
                      delete actingProperties[key];
                    }
                  } catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                  } finally {
                    try {
                      if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
                    } finally {
                      if (e_3) throw e_3.error;
                    }
                  }
                  break;
                case ID_OP_CLEAR_ALL:
                  actingProperties = {};
                  break;
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          actingIdentity.userProperties = actingProperties;
          return this;
        },
        commit: function() {
          self2.setIdentity(actingIdentity);
          return this;
        }
      };
    };
    IdentityStoreImpl2.prototype.getIdentity = function() {
      return __assign2({}, this.identity);
    };
    IdentityStoreImpl2.prototype.setIdentity = function(identity) {
      var originalIdentity = __assign2({}, this.identity);
      this.identity = __assign2({}, identity);
      if (!isEqual(originalIdentity, this.identity)) {
        this.listeners.forEach(function(listener) {
          listener(identity);
        });
      }
    };
    IdentityStoreImpl2.prototype.addIdentityListener = function(listener) {
      this.listeners.add(listener);
    };
    IdentityStoreImpl2.prototype.removeIdentityListener = function(listener) {
      this.listeners.delete(listener);
    };
    return IdentityStoreImpl2;
  }()
);
var safeGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : self;
var AnalyticsConnector = (
  /** @class */
  function() {
    function AnalyticsConnector2() {
      this.identityStore = new IdentityStoreImpl();
      this.eventBridge = new EventBridgeImpl();
      this.applicationContextProvider = new ApplicationContextProviderImpl();
    }
    AnalyticsConnector2.getInstance = function(instanceName) {
      if (!safeGlobal["analyticsConnectorInstances"]) {
        safeGlobal["analyticsConnectorInstances"] = {};
      }
      if (!safeGlobal["analyticsConnectorInstances"][instanceName]) {
        safeGlobal["analyticsConnectorInstances"][instanceName] = new AnalyticsConnector2();
      }
      return safeGlobal["analyticsConnectorInstances"][instanceName];
    };
    return AnalyticsConnector2;
  }()
);

// node_modules/@amplitude/analytics-core/lib/esm/utils/debug.js
var getStacktrace = function(ignoreDepth) {
  if (ignoreDepth === void 0) {
    ignoreDepth = 0;
  }
  var trace = new Error().stack || "";
  return trace.split("\n").slice(2 + ignoreDepth).map(function(text) {
    return text.trim();
  });
};
var getClientLogConfig = function(client) {
  return function() {
    var _a = __assign({}, client.config), logger = _a.loggerProvider, logLevel = _a.logLevel;
    return {
      logger,
      logLevel
    };
  };
};
var getValueByStringPath = function(obj, path) {
  var e_1, _a;
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  try {
    for (var _b = __values(path.split(".")), _c = _b.next(); !_c.done; _c = _b.next()) {
      var attr = _c.value;
      if (attr in obj) {
        obj = obj[attr];
      } else {
        return;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return obj;
};
var getClientStates = function(client, paths) {
  return function() {
    var e_2, _a;
    var res = {};
    try {
      for (var paths_1 = __values(paths), paths_1_1 = paths_1.next(); !paths_1_1.done; paths_1_1 = paths_1.next()) {
        var path = paths_1_1.value;
        res[path] = getValueByStringPath(client, path);
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (paths_1_1 && !paths_1_1.done && (_a = paths_1.return)) _a.call(paths_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    return res;
  };
};
var debugWrapper = function(fn, fnName, getLogConfig, getStates, fnContext) {
  if (fnContext === void 0) {
    fnContext = null;
  }
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var _a = getLogConfig(), logger = _a.logger, logLevel = _a.logLevel;
    if (logLevel && logLevel < LogLevel.Debug || !logLevel || !logger) {
      return fn.apply(fnContext, args);
    }
    var debugContext = {
      type: "invoke public method",
      name: fnName,
      args,
      stacktrace: getStacktrace(1),
      time: {
        start: (/* @__PURE__ */ new Date()).toISOString()
      },
      states: {}
    };
    if (getStates && debugContext.states) {
      debugContext.states.before = getStates();
    }
    var result = fn.apply(fnContext, args);
    if (result && result.promise) {
      result.promise.then(function() {
        if (getStates && debugContext.states) {
          debugContext.states.after = getStates();
        }
        if (debugContext.time) {
          debugContext.time.end = (/* @__PURE__ */ new Date()).toISOString();
        }
        logger.debug(JSON.stringify(debugContext, null, 2));
      });
    } else {
      if (getStates && debugContext.states) {
        debugContext.states.after = getStates();
      }
      if (debugContext.time) {
        debugContext.time.end = (/* @__PURE__ */ new Date()).toISOString();
      }
      logger.debug(JSON.stringify(debugContext, null, 2));
    }
    return result;
  };
};

// node_modules/@amplitude/analytics-core/lib/esm/storage/memory.js
var MemoryStorage = (
  /** @class */
  function() {
    function MemoryStorage2() {
      this.memoryStorage = /* @__PURE__ */ new Map();
    }
    MemoryStorage2.prototype.isEnabled = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, true];
        });
      });
    };
    MemoryStorage2.prototype.get = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.memoryStorage.get(key)];
        });
      });
    };
    MemoryStorage2.prototype.getRaw = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        var value;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.get(key)];
            case 1:
              value = _a.sent();
              return [2, value ? JSON.stringify(value) : void 0];
          }
        });
      });
    };
    MemoryStorage2.prototype.set = function(key, value) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          this.memoryStorage.set(key, value);
          return [
            2
            /*return*/
          ];
        });
      });
    };
    MemoryStorage2.prototype.remove = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          this.memoryStorage.delete(key);
          return [
            2
            /*return*/
          ];
        });
      });
    };
    MemoryStorage2.prototype.reset = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          this.memoryStorage.clear();
          return [
            2
            /*return*/
          ];
        });
      });
    };
    return MemoryStorage2;
  }()
);

// node_modules/@amplitude/analytics-core/lib/esm/transports/base.js
var BaseTransport = (
  /** @class */
  function() {
    function BaseTransport2() {
    }
    BaseTransport2.prototype.send = function(_serverUrl, _payload) {
      return Promise.resolve(null);
    };
    BaseTransport2.prototype.buildResponse = function(responseJSON) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
      if (typeof responseJSON !== "object") {
        return null;
      }
      var statusCode = responseJSON.code || 0;
      var status = this.buildStatus(statusCode);
      switch (status) {
        case Status.Success:
          return {
            status,
            statusCode,
            body: {
              eventsIngested: (_a = responseJSON.events_ingested) !== null && _a !== void 0 ? _a : 0,
              payloadSizeBytes: (_b = responseJSON.payload_size_bytes) !== null && _b !== void 0 ? _b : 0,
              serverUploadTime: (_c = responseJSON.server_upload_time) !== null && _c !== void 0 ? _c : 0
            }
          };
        case Status.Invalid:
          return {
            status,
            statusCode,
            body: {
              error: (_d = responseJSON.error) !== null && _d !== void 0 ? _d : "",
              missingField: (_e = responseJSON.missing_field) !== null && _e !== void 0 ? _e : "",
              eventsWithInvalidFields: (_f = responseJSON.events_with_invalid_fields) !== null && _f !== void 0 ? _f : {},
              eventsWithMissingFields: (_g = responseJSON.events_with_missing_fields) !== null && _g !== void 0 ? _g : {},
              eventsWithInvalidIdLengths: (_h = responseJSON.events_with_invalid_id_lengths) !== null && _h !== void 0 ? _h : {},
              epsThreshold: (_j = responseJSON.eps_threshold) !== null && _j !== void 0 ? _j : 0,
              exceededDailyQuotaDevices: (_k = responseJSON.exceeded_daily_quota_devices) !== null && _k !== void 0 ? _k : {},
              silencedDevices: (_l = responseJSON.silenced_devices) !== null && _l !== void 0 ? _l : [],
              silencedEvents: (_m = responseJSON.silenced_events) !== null && _m !== void 0 ? _m : [],
              throttledDevices: (_o = responseJSON.throttled_devices) !== null && _o !== void 0 ? _o : {},
              throttledEvents: (_p = responseJSON.throttled_events) !== null && _p !== void 0 ? _p : []
            }
          };
        case Status.PayloadTooLarge:
          return {
            status,
            statusCode,
            body: {
              error: (_q = responseJSON.error) !== null && _q !== void 0 ? _q : ""
            }
          };
        case Status.RateLimit:
          return {
            status,
            statusCode,
            body: {
              error: (_r = responseJSON.error) !== null && _r !== void 0 ? _r : "",
              epsThreshold: (_s = responseJSON.eps_threshold) !== null && _s !== void 0 ? _s : 0,
              throttledDevices: (_t = responseJSON.throttled_devices) !== null && _t !== void 0 ? _t : {},
              throttledUsers: (_u = responseJSON.throttled_users) !== null && _u !== void 0 ? _u : {},
              exceededDailyQuotaDevices: (_v = responseJSON.exceeded_daily_quota_devices) !== null && _v !== void 0 ? _v : {},
              exceededDailyQuotaUsers: (_w = responseJSON.exceeded_daily_quota_users) !== null && _w !== void 0 ? _w : {},
              throttledEvents: (_x = responseJSON.throttled_events) !== null && _x !== void 0 ? _x : []
            }
          };
        case Status.Timeout:
        default:
          return {
            status,
            statusCode
          };
      }
    };
    BaseTransport2.prototype.buildStatus = function(code) {
      if (code >= 200 && code < 300) {
        return Status.Success;
      }
      if (code === 429) {
        return Status.RateLimit;
      }
      if (code === 413) {
        return Status.PayloadTooLarge;
      }
      if (code === 408) {
        return Status.Timeout;
      }
      if (code >= 400 && code < 500) {
        return Status.Invalid;
      }
      if (code >= 500) {
        return Status.Failed;
      }
      return Status.Unknown;
    };
    return BaseTransport2;
  }()
);

// node_modules/@amplitude/analytics-client-common/lib/esm/global-scope.js
var getGlobalScope2 = function() {
  var ampIntegrationContextName = "ampIntegrationContext";
  if (typeof globalThis !== "undefined" && typeof globalThis[ampIntegrationContextName] !== "undefined") {
    return globalThis[ampIntegrationContextName];
  }
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return void 0;
};

// node_modules/@amplitude/analytics-client-common/lib/esm/query-params.js
var getQueryParams = function() {
  var _a;
  var globalScope = getGlobalScope2();
  if (!((_a = globalScope === null || globalScope === void 0 ? void 0 : globalScope.location) === null || _a === void 0 ? void 0 : _a.search)) {
    return {};
  }
  var pairs = globalScope.location.search.substring(1).split("&").filter(Boolean);
  var params = pairs.reduce(function(acc, curr) {
    var query = curr.split("=", 2);
    var key = tryDecodeURIComponent(query[0]);
    var value = tryDecodeURIComponent(query[1]);
    if (!value) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  return params;
};
var tryDecodeURIComponent = function(value) {
  if (value === void 0) {
    value = "";
  }
  try {
    return decodeURIComponent(value);
  } catch (_a) {
    return "";
  }
};

// node_modules/@amplitude/analytics-client-common/lib/esm/attribution/constants.js
var UTM_CAMPAIGN = "utm_campaign";
var UTM_CONTENT = "utm_content";
var UTM_ID = "utm_id";
var UTM_MEDIUM = "utm_medium";
var UTM_SOURCE = "utm_source";
var UTM_TERM = "utm_term";
var DCLID = "dclid";
var FBCLID = "fbclid";
var GBRAID = "gbraid";
var GCLID = "gclid";
var KO_CLICK_ID = "ko_click_id";
var LI_FAT_ID = "li_fat_id";
var MSCLKID = "msclkid";
var RDT_CID = "rtd_cid";
var TTCLID = "ttclid";
var TWCLID = "twclid";
var WBRAID = "wbraid";
var BASE_CAMPAIGN = {
  utm_campaign: void 0,
  utm_content: void 0,
  utm_id: void 0,
  utm_medium: void 0,
  utm_source: void 0,
  utm_term: void 0,
  referrer: void 0,
  referring_domain: void 0,
  dclid: void 0,
  gbraid: void 0,
  gclid: void 0,
  fbclid: void 0,
  ko_click_id: void 0,
  li_fat_id: void 0,
  msclkid: void 0,
  rtd_cid: void 0,
  ttclid: void 0,
  twclid: void 0,
  wbraid: void 0
};

// node_modules/@amplitude/analytics-client-common/lib/esm/attribution/campaign-parser.js
var CampaignParser = (
  /** @class */
  function() {
    function CampaignParser2() {
    }
    CampaignParser2.prototype.parse = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, __assign(__assign(__assign(__assign({}, BASE_CAMPAIGN), this.getUtmParam()), this.getReferrer()), this.getClickIds())];
        });
      });
    };
    CampaignParser2.prototype.getUtmParam = function() {
      var params = getQueryParams();
      var utmCampaign = params[UTM_CAMPAIGN];
      var utmContent = params[UTM_CONTENT];
      var utmId = params[UTM_ID];
      var utmMedium = params[UTM_MEDIUM];
      var utmSource = params[UTM_SOURCE];
      var utmTerm = params[UTM_TERM];
      return {
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_id: utmId,
        utm_medium: utmMedium,
        utm_source: utmSource,
        utm_term: utmTerm
      };
    };
    CampaignParser2.prototype.getReferrer = function() {
      var _a, _b;
      var data = {
        referrer: void 0,
        referring_domain: void 0
      };
      try {
        data.referrer = document.referrer || void 0;
        data.referring_domain = (_b = (_a = data.referrer) === null || _a === void 0 ? void 0 : _a.split("/")[2]) !== null && _b !== void 0 ? _b : void 0;
      } catch (_c) {
      }
      return data;
    };
    CampaignParser2.prototype.getClickIds = function() {
      var _a;
      var params = getQueryParams();
      return _a = {}, _a[DCLID] = params[DCLID], _a[FBCLID] = params[FBCLID], _a[GBRAID] = params[GBRAID], _a[GCLID] = params[GCLID], _a[KO_CLICK_ID] = params[KO_CLICK_ID], _a[LI_FAT_ID] = params[LI_FAT_ID], _a[MSCLKID] = params[MSCLKID], _a[RDT_CID] = params[RDT_CID], _a[TTCLID] = params[TTCLID], _a[TWCLID] = params[TWCLID], _a[WBRAID] = params[WBRAID], _a;
    };
    return CampaignParser2;
  }()
);

// node_modules/@amplitude/analytics-client-common/lib/esm/cookie-name.js
var getCookieName = function(apiKey, postKey, limit) {
  if (postKey === void 0) {
    postKey = "";
  }
  if (limit === void 0) {
    limit = 10;
  }
  return [AMPLITUDE_PREFIX, postKey, apiKey.substring(0, limit)].filter(Boolean).join("_");
};
var getOldCookieName = function(apiKey) {
  return "".concat(AMPLITUDE_PREFIX.toLowerCase(), "_").concat(apiKey.substring(0, 6));
};

// node_modules/@amplitude/analytics-client-common/lib/esm/attribution/helpers.js
var domainWithoutSubdomain = function(domain) {
  var parts = domain.split(".");
  if (parts.length <= 2) {
    return domain;
  }
  return parts.slice(parts.length - 2, parts.length).join(".");
};
var isDirectTraffic = function(current) {
  return Object.values(current).every(function(value) {
    return !value;
  });
};
var isNewCampaign = function(current, previous, options, logger, isNewSession2) {
  if (isNewSession2 === void 0) {
    isNewSession2 = true;
  }
  var referrer = current.referrer, referring_domain = current.referring_domain, currentCampaign = __rest(current, ["referrer", "referring_domain"]);
  var _a = previous || {}, _previous_referrer = _a.referrer, prevReferringDomain = _a.referring_domain, previousCampaign = __rest(_a, ["referrer", "referring_domain"]);
  if (isExcludedReferrer(options.excludeReferrers, current.referring_domain)) {
    logger.debug("This is not a new campaign because ".concat(current.referring_domain, " is in the exclude referrer list."));
    return false;
  }
  if (!isNewSession2 && isDirectTraffic(current) && previous) {
    logger.debug("This is not a new campaign because this is a direct traffic in the same session.");
    return false;
  }
  var hasNewCampaign = JSON.stringify(currentCampaign) !== JSON.stringify(previousCampaign);
  var hasNewDomain = domainWithoutSubdomain(referring_domain || "") !== domainWithoutSubdomain(prevReferringDomain || "");
  var result = !previous || hasNewCampaign || hasNewDomain;
  if (!result) {
    logger.debug("This is not a new campaign because it's the same as the previous one.");
  } else {
    logger.debug("This is a new campaign. An $identify event will be sent.");
  }
  return result;
};
var isExcludedReferrer = function(excludeReferrers, referringDomain) {
  if (excludeReferrers === void 0) {
    excludeReferrers = [];
  }
  if (referringDomain === void 0) {
    referringDomain = "";
  }
  return excludeReferrers.some(function(value) {
    return value instanceof RegExp ? value.test(referringDomain) : value === referringDomain;
  });
};
var createCampaignEvent = function(campaign, options) {
  var campaignParameters = __assign(__assign({}, BASE_CAMPAIGN), campaign);
  var identifyEvent = Object.entries(campaignParameters).reduce(function(identify2, _a) {
    var _b;
    var _c = __read(_a, 2), key = _c[0], value = _c[1];
    identify2.setOnce("initial_".concat(key), (_b = value !== null && value !== void 0 ? value : options.initialEmptyValue) !== null && _b !== void 0 ? _b : "EMPTY");
    if (value) {
      return identify2.set(key, value);
    }
    return identify2.unset(key);
  }, new Identify());
  return createIdentifyEvent(identifyEvent);
};
var getDefaultExcludedReferrers = function(cookieDomain) {
  var domain = cookieDomain;
  if (domain) {
    if (domain.startsWith(".")) {
      domain = domain.substring(1);
    }
    return [new RegExp("".concat(domain.replace(".", "\\."), "$"))];
  }
  return [];
};

// node_modules/@amplitude/analytics-client-common/lib/esm/storage/helpers.js
var getStorageKey = function(apiKey, postKey, limit) {
  if (postKey === void 0) {
    postKey = "";
  }
  if (limit === void 0) {
    limit = 10;
  }
  return [AMPLITUDE_PREFIX, postKey, apiKey.substring(0, limit)].filter(Boolean).join("_");
};

// node_modules/@amplitude/analytics-client-common/lib/esm/session.js
var isNewSession = function(sessionTimeout, lastEventTime) {
  if (lastEventTime === void 0) {
    lastEventTime = Date.now();
  }
  var currentTime = Date.now();
  var timeSinceLastEvent = currentTime - lastEventTime;
  return timeSinceLastEvent > sessionTimeout;
};

// node_modules/@amplitude/analytics-client-common/lib/esm/attribution/web-attribution.js
var WebAttribution = (
  /** @class */
  function() {
    function WebAttribution2(options, config) {
      var _a;
      this.shouldTrackNewCampaign = false;
      this.options = __assign({ initialEmptyValue: "EMPTY", resetSessionOnNewCampaign: false, excludeReferrers: getDefaultExcludedReferrers((_a = config.cookieOptions) === null || _a === void 0 ? void 0 : _a.domain) }, options);
      this.storage = config.cookieStorage;
      this.storageKey = getStorageKey(config.apiKey, "MKTG");
      this.currentCampaign = BASE_CAMPAIGN;
      this.sessionTimeout = config.sessionTimeout;
      this.lastEventTime = config.lastEventTime;
      this.logger = config.loggerProvider;
      config.loggerProvider.log("Installing web attribution tracking.");
    }
    WebAttribution2.prototype.init = function() {
      return __awaiter(this, void 0, void 0, function() {
        var isEventInNewSession;
        var _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this.fetchCampaign()];
            case 1:
              _a = __read.apply(void 0, [_b.sent(), 2]), this.currentCampaign = _a[0], this.previousCampaign = _a[1];
              isEventInNewSession = !this.lastEventTime ? true : isNewSession(this.sessionTimeout, this.lastEventTime);
              if (!isNewCampaign(this.currentCampaign, this.previousCampaign, this.options, this.logger, isEventInNewSession)) return [3, 3];
              this.shouldTrackNewCampaign = true;
              return [4, this.storage.set(this.storageKey, this.currentCampaign)];
            case 2:
              _b.sent();
              _b.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    WebAttribution2.prototype.fetchCampaign = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, Promise.all([new CampaignParser().parse(), this.storage.get(this.storageKey)])];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    WebAttribution2.prototype.generateCampaignEvent = function(event_id) {
      this.shouldTrackNewCampaign = false;
      var campaignEvent = createCampaignEvent(this.currentCampaign, this.options);
      if (event_id) {
        campaignEvent.event_id = event_id;
      }
      return campaignEvent;
    };
    WebAttribution2.prototype.shouldSetSessionIdOnNewCampaign = function() {
      return this.shouldTrackNewCampaign && !!this.options.resetSessionOnNewCampaign;
    };
    return WebAttribution2;
  }()
);

// node_modules/@amplitude/analytics-client-common/lib/esm/storage/cookie.js
var CookieStorage = (
  /** @class */
  function() {
    function CookieStorage2(options) {
      this.options = __assign({}, options);
    }
    CookieStorage2.prototype.isEnabled = function() {
      return __awaiter(this, void 0, void 0, function() {
        var testStrorage, testKey, value, _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!getGlobalScope2()) {
                return [2, false];
              }
              CookieStorage2.testValue = String(Date.now());
              testStrorage = new CookieStorage2(this.options);
              testKey = "AMP_TEST";
              _b.label = 1;
            case 1:
              _b.trys.push([1, 4, 5, 7]);
              return [4, testStrorage.set(testKey, CookieStorage2.testValue)];
            case 2:
              _b.sent();
              return [4, testStrorage.get(testKey)];
            case 3:
              value = _b.sent();
              return [2, value === CookieStorage2.testValue];
            case 4:
              _a = _b.sent();
              return [2, false];
            case 5:
              return [4, testStrorage.remove(testKey)];
            case 6:
              _b.sent();
              return [
                7
                /*endfinally*/
              ];
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CookieStorage2.prototype.get = function(key) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var value, decodedValue;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this.getRaw(key)];
            case 1:
              value = _b.sent();
              if (!value) {
                return [2, void 0];
              }
              try {
                decodedValue = (_a = decodeCookiesAsDefault(value)) !== null && _a !== void 0 ? _a : decodeCookiesWithDoubleUrlEncoding(value);
                if (decodedValue === void 0) {
                  console.error("Amplitude Logger [Error]: Failed to decode cookie value for key: ".concat(key, ", value: ").concat(value));
                  return [2, void 0];
                }
                return [2, JSON.parse(decodedValue)];
              } catch (_c) {
                console.error("Amplitude Logger [Error]: Failed to parse cookie value for key: ".concat(key, ", value: ").concat(value));
                return [2, void 0];
              }
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CookieStorage2.prototype.getRaw = function(key) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var globalScope, cookie, match;
        return __generator(this, function(_c) {
          globalScope = getGlobalScope2();
          cookie = (_b = (_a = globalScope === null || globalScope === void 0 ? void 0 : globalScope.document) === null || _a === void 0 ? void 0 : _a.cookie.split("; ")) !== null && _b !== void 0 ? _b : [];
          match = cookie.find(function(c) {
            return c.indexOf(key + "=") === 0;
          });
          if (!match) {
            return [2, void 0];
          }
          return [2, match.substring(key.length + 1)];
        });
      });
    };
    CookieStorage2.prototype.set = function(key, value) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var expirationDays, expires, expireDate, date, str, globalScope, errorMessage;
        return __generator(this, function(_b) {
          try {
            expirationDays = (_a = this.options.expirationDays) !== null && _a !== void 0 ? _a : 0;
            expires = value !== null ? expirationDays : -1;
            expireDate = void 0;
            if (expires) {
              date = /* @__PURE__ */ new Date();
              date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1e3);
              expireDate = date;
            }
            str = "".concat(key, "=").concat(btoa(encodeURIComponent(JSON.stringify(value))));
            if (expireDate) {
              str += "; expires=".concat(expireDate.toUTCString());
            }
            str += "; path=/";
            if (this.options.domain) {
              str += "; domain=".concat(this.options.domain);
            }
            if (this.options.secure) {
              str += "; Secure";
            }
            if (this.options.sameSite) {
              str += "; SameSite=".concat(this.options.sameSite);
            }
            globalScope = getGlobalScope2();
            if (globalScope) {
              globalScope.document.cookie = str;
            }
          } catch (error) {
            errorMessage = error instanceof Error ? error.message : String(error);
            console.error("Amplitude Logger [Error]: Failed to set cookie for key: ".concat(key, ". Error: ").concat(errorMessage));
          }
          return [
            2
            /*return*/
          ];
        });
      });
    };
    CookieStorage2.prototype.remove = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.set(key, null)];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CookieStorage2.prototype.reset = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [
            2
            /*return*/
          ];
        });
      });
    };
    return CookieStorage2;
  }()
);
var decodeCookiesAsDefault = function(value) {
  try {
    return decodeURIComponent(atob(value));
  } catch (_a) {
    return void 0;
  }
};
var decodeCookiesWithDoubleUrlEncoding = function(value) {
  try {
    return decodeURIComponent(atob(decodeURIComponent(value)));
  } catch (_a) {
    return void 0;
  }
};

// node_modules/@amplitude/analytics-client-common/lib/esm/transports/fetch.js
var FetchTransport = (
  /** @class */
  function(_super) {
    __extends(FetchTransport2, _super);
    function FetchTransport2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    FetchTransport2.prototype.send = function(serverUrl, payload) {
      return __awaiter(this, void 0, void 0, function() {
        var options, response, responseText;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (typeof fetch === "undefined") {
                throw new Error("FetchTransport is not supported");
              }
              options = {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "*/*"
                },
                body: JSON.stringify(payload),
                method: "POST"
              };
              return [4, fetch(serverUrl, options)];
            case 1:
              response = _a.sent();
              return [4, response.text()];
            case 2:
              responseText = _a.sent();
              try {
                return [2, this.buildResponse(JSON.parse(responseText))];
              } catch (_b) {
                return [2, this.buildResponse({ code: response.status })];
              }
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    return FetchTransport2;
  }(BaseTransport)
);

// node_modules/@amplitude/analytics-client-common/lib/esm/analytics-connector.js
var getAnalyticsConnector = function(instanceName) {
  if (instanceName === void 0) {
    instanceName = "$default_instance";
  }
  return AnalyticsConnector.getInstance(instanceName);
};
var setConnectorUserId = function(userId, instanceName) {
  getAnalyticsConnector(instanceName).identityStore.editIdentity().setUserId(userId).commit();
};
var setConnectorDeviceId = function(deviceId, instanceName) {
  getAnalyticsConnector(instanceName).identityStore.editIdentity().setDeviceId(deviceId).commit();
};

// node_modules/@amplitude/analytics-client-common/lib/esm/plugins/identity.js
var IdentityEventSender = (
  /** @class */
  function() {
    function IdentityEventSender2() {
      this.name = "identity";
      this.type = "before";
      this.identityStore = getAnalyticsConnector().identityStore;
    }
    IdentityEventSender2.prototype.execute = function(context) {
      return __awaiter(this, void 0, void 0, function() {
        var userProperties;
        return __generator(this, function(_a) {
          userProperties = context.user_properties;
          if (userProperties) {
            this.identityStore.editIdentity().updateUserProperties(userProperties).commit();
          }
          return [2, context];
        });
      });
    };
    IdentityEventSender2.prototype.setup = function(config) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          if (config.instanceName) {
            this.identityStore = getAnalyticsConnector(config.instanceName).identityStore;
          }
          return [
            2
            /*return*/
          ];
        });
      });
    };
    return IdentityEventSender2;
  }()
);

// node_modules/@amplitude/analytics-client-common/lib/esm/language.js
var getLanguage2 = function() {
  var _a, _b, _c, _d;
  if (typeof navigator === "undefined")
    return "";
  var userLanguage = navigator.userLanguage;
  return (_d = (_c = (_b = (_a = navigator.languages) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : navigator.language) !== null && _c !== void 0 ? _c : userLanguage) !== null && _d !== void 0 ? _d : "";
};

// node_modules/@amplitude/analytics-client-common/lib/esm/default-tracking.js
var isTrackingEnabled = function(autocapture, event) {
  if (typeof autocapture === "boolean") {
    return autocapture;
  }
  if ((autocapture === null || autocapture === void 0 ? void 0 : autocapture[event]) === false) {
    return false;
  }
  return true;
};
var isAttributionTrackingEnabled = function(autocapture) {
  return isTrackingEnabled(autocapture, "attribution");
};
var isFileDownloadTrackingEnabled = function(autocapture) {
  return isTrackingEnabled(autocapture, "fileDownloads");
};
var isFormInteractionTrackingEnabled = function(autocapture) {
  return isTrackingEnabled(autocapture, "formInteractions");
};
var isPageViewTrackingEnabled = function(autocapture) {
  return isTrackingEnabled(autocapture, "pageViews");
};
var isSessionTrackingEnabled = function(autocapture) {
  return isTrackingEnabled(autocapture, "sessions");
};
var getPageViewTrackingConfig = function(config) {
  var trackOn = function() {
    return false;
  };
  var trackHistoryChanges = void 0;
  var eventType;
  var pageCounter = config.pageCounter;
  var isDefaultPageViewTrackingEnabled = isPageViewTrackingEnabled(config.defaultTracking);
  if (isDefaultPageViewTrackingEnabled) {
    trackOn = void 0;
    eventType = void 0;
    if (config.defaultTracking && typeof config.defaultTracking === "object" && config.defaultTracking.pageViews && typeof config.defaultTracking.pageViews === "object") {
      if ("trackOn" in config.defaultTracking.pageViews) {
        trackOn = config.defaultTracking.pageViews.trackOn;
      }
      if ("trackHistoryChanges" in config.defaultTracking.pageViews) {
        trackHistoryChanges = config.defaultTracking.pageViews.trackHistoryChanges;
      }
      if ("eventType" in config.defaultTracking.pageViews && config.defaultTracking.pageViews.eventType) {
        eventType = config.defaultTracking.pageViews.eventType;
      }
    }
  }
  return {
    trackOn,
    trackHistoryChanges,
    eventType,
    pageCounter
  };
};
var getAttributionTrackingConfig = function(config) {
  if (isAttributionTrackingEnabled(config.defaultTracking) && config.defaultTracking && typeof config.defaultTracking === "object" && config.defaultTracking.attribution && typeof config.defaultTracking.attribution === "object") {
    return __assign({}, config.defaultTracking.attribution);
  }
  return {};
};

// node_modules/@amplitude/analytics-types/lib/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  DEFAULT_ACTION_CLICK_ALLOWLIST: () => DEFAULT_ACTION_CLICK_ALLOWLIST,
  DEFAULT_CSS_SELECTOR_ALLOWLIST: () => DEFAULT_CSS_SELECTOR_ALLOWLIST,
  DEFAULT_DATA_ATTRIBUTE_PREFIX: () => DEFAULT_DATA_ATTRIBUTE_PREFIX,
  IdentifyOperation: () => IdentifyOperation3,
  LogLevel: () => LogLevel2,
  OfflineDisabled: () => OfflineDisabled,
  RevenueProperty: () => RevenueProperty2,
  ServerZone: () => ServerZone,
  SpecialEventType: () => SpecialEventType2,
  Status: () => Status2
});

// node_modules/@amplitude/analytics-types/lib/esm/event.js
var IdentifyOperation3;
(function(IdentifyOperation4) {
  IdentifyOperation4["SET"] = "$set";
  IdentifyOperation4["SET_ONCE"] = "$setOnce";
  IdentifyOperation4["ADD"] = "$add";
  IdentifyOperation4["APPEND"] = "$append";
  IdentifyOperation4["PREPEND"] = "$prepend";
  IdentifyOperation4["REMOVE"] = "$remove";
  IdentifyOperation4["PREINSERT"] = "$preInsert";
  IdentifyOperation4["POSTINSERT"] = "$postInsert";
  IdentifyOperation4["UNSET"] = "$unset";
  IdentifyOperation4["CLEAR_ALL"] = "$clearAll";
})(IdentifyOperation3 || (IdentifyOperation3 = {}));
var RevenueProperty2;
(function(RevenueProperty3) {
  RevenueProperty3["REVENUE_PRODUCT_ID"] = "$productId";
  RevenueProperty3["REVENUE_QUANTITY"] = "$quantity";
  RevenueProperty3["REVENUE_PRICE"] = "$price";
  RevenueProperty3["REVENUE_TYPE"] = "$revenueType";
  RevenueProperty3["REVENUE_CURRENCY"] = "$currency";
  RevenueProperty3["REVENUE"] = "$revenue";
})(RevenueProperty2 || (RevenueProperty2 = {}));
var SpecialEventType2;
(function(SpecialEventType3) {
  SpecialEventType3["IDENTIFY"] = "$identify";
  SpecialEventType3["GROUP_IDENTIFY"] = "$groupidentify";
  SpecialEventType3["REVENUE"] = "revenue_amount";
})(SpecialEventType2 || (SpecialEventType2 = {}));

// node_modules/@amplitude/analytics-types/lib/esm/logger.js
var LogLevel2;
(function(LogLevel3) {
  LogLevel3[LogLevel3["None"] = 0] = "None";
  LogLevel3[LogLevel3["Error"] = 1] = "Error";
  LogLevel3[LogLevel3["Warn"] = 2] = "Warn";
  LogLevel3[LogLevel3["Verbose"] = 3] = "Verbose";
  LogLevel3[LogLevel3["Debug"] = 4] = "Debug";
})(LogLevel2 || (LogLevel2 = {}));

// node_modules/@amplitude/analytics-types/lib/esm/server-zone.js
var ServerZone;
(function(ServerZone2) {
  ServerZone2["US"] = "US";
  ServerZone2["EU"] = "EU";
})(ServerZone || (ServerZone = {}));

// node_modules/@amplitude/analytics-types/lib/esm/status.js
var Status2;
(function(Status3) {
  Status3["Unknown"] = "unknown";
  Status3["Skipped"] = "skipped";
  Status3["Success"] = "success";
  Status3["RateLimit"] = "rate_limit";
  Status3["PayloadTooLarge"] = "payload_too_large";
  Status3["Invalid"] = "invalid";
  Status3["Failed"] = "failed";
  Status3["Timeout"] = "Timeout";
  Status3["SystemError"] = "SystemError";
})(Status2 || (Status2 = {}));

// node_modules/@amplitude/analytics-types/lib/esm/offline.js
var OfflineDisabled = null;

// node_modules/@amplitude/analytics-types/lib/esm/element-interactions.js
var DEFAULT_CSS_SELECTOR_ALLOWLIST = [
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "label",
  "video",
  "audio",
  '[contenteditable="true" i]',
  "[data-amp-default-track]",
  ".amp-default-track"
];
var DEFAULT_DATA_ATTRIBUTE_PREFIX = "data-amp-track-";
var DEFAULT_ACTION_CLICK_ALLOWLIST = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"];

// node_modules/@amplitude/analytics-browser/lib/esm/utils/snippet-helper.js
var runQueuedFunctions = function(instance, queue) {
  convertProxyObjectToRealObject(instance, queue);
};
var convertProxyObjectToRealObject = function(instance, queue) {
  for (var i = 0; i < queue.length; i++) {
    var _a = queue[i], name_1 = _a.name, args = _a.args, resolve = _a.resolve;
    var fn = instance && instance[name_1];
    if (typeof fn === "function") {
      var result = fn.apply(instance, args);
      if (typeof resolve === "function") {
        resolve(result === null || result === void 0 ? void 0 : result.promise);
      }
    }
  }
  return instance;
};
var isInstanceProxy = function(instance) {
  var instanceProxy = instance;
  return instanceProxy && instanceProxy._q !== void 0;
};

// node_modules/@amplitude/analytics-browser/lib/esm/version.js
var VERSION = "2.8.0";

// node_modules/@amplitude/analytics-browser/lib/esm/plugins/context.js
var BROWSER_PLATFORM = "Web";
var IP_ADDRESS = "$remote";
var Context = (
  /** @class */
  function() {
    function Context2() {
      this.name = "@amplitude/plugin-context-browser";
      this.type = "before";
      this.library = "amplitude-ts/".concat(VERSION);
      if (typeof navigator !== "undefined") {
        this.userAgent = navigator.userAgent;
      }
    }
    Context2.prototype.setup = function(config) {
      this.config = config;
      return Promise.resolve(void 0);
    };
    Context2.prototype.execute = function(context) {
      var _a, _b;
      return __awaiter(this, void 0, void 0, function() {
        var time, lastEventId, nextEventId, event;
        return __generator(this, function(_c) {
          time = (/* @__PURE__ */ new Date()).getTime();
          lastEventId = (_a = this.config.lastEventId) !== null && _a !== void 0 ? _a : -1;
          nextEventId = (_b = context.event_id) !== null && _b !== void 0 ? _b : lastEventId + 1;
          this.config.lastEventId = nextEventId;
          if (!context.time) {
            this.config.lastEventTime = time;
          }
          event = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ user_id: this.config.userId, device_id: this.config.deviceId, session_id: this.config.sessionId, time }, this.config.appVersion && { app_version: this.config.appVersion }), this.config.trackingOptions.platform && { platform: BROWSER_PLATFORM }), this.config.trackingOptions.language && { language: getLanguage2() }), this.config.trackingOptions.ipAddress && { ip: IP_ADDRESS }), { insert_id: UUID(), partner_id: this.config.partnerId, plan: this.config.plan }), this.config.ingestionMetadata && {
            ingestion_metadata: {
              source_name: this.config.ingestionMetadata.sourceName,
              source_version: this.config.ingestionMetadata.sourceVersion
            }
          }), context), { event_id: nextEventId, library: this.library, user_agent: this.userAgent });
          return [2, event];
        });
      });
    };
    return Context2;
  }()
);

// node_modules/@amplitude/analytics-browser/lib/esm/storage/browser-storage.js
var BrowserStorage = (
  /** @class */
  function() {
    function BrowserStorage2(storage) {
      this.storage = storage;
    }
    BrowserStorage2.prototype.isEnabled = function() {
      return __awaiter(this, void 0, void 0, function() {
        var random, testStorage, testKey, value, _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!this.storage) {
                return [2, false];
              }
              random = String(Date.now());
              testStorage = new BrowserStorage2(this.storage);
              testKey = "AMP_TEST";
              _b.label = 1;
            case 1:
              _b.trys.push([1, 4, 5, 7]);
              return [4, testStorage.set(testKey, random)];
            case 2:
              _b.sent();
              return [4, testStorage.get(testKey)];
            case 3:
              value = _b.sent();
              return [2, value === random];
            case 4:
              _a = _b.sent();
              return [2, false];
            case 5:
              return [4, testStorage.remove(testKey)];
            case 6:
              _b.sent();
              return [
                7
                /*endfinally*/
              ];
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserStorage2.prototype.get = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        var value, _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 2, , 3]);
              return [4, this.getRaw(key)];
            case 1:
              value = _b.sent();
              if (!value) {
                return [2, void 0];
              }
              return [2, JSON.parse(value)];
            case 2:
              _a = _b.sent();
              console.error("[Amplitude] Error: Could not get value from storage");
              return [2, void 0];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserStorage2.prototype.getRaw = function(key) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_b) {
          return [2, ((_a = this.storage) === null || _a === void 0 ? void 0 : _a.getItem(key)) || void 0];
        });
      });
    };
    BrowserStorage2.prototype.set = function(key, value) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_b) {
          try {
            (_a = this.storage) === null || _a === void 0 ? void 0 : _a.setItem(key, JSON.stringify(value));
          } catch (_c) {
          }
          return [
            2
            /*return*/
          ];
        });
      });
    };
    BrowserStorage2.prototype.remove = function(key) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_b) {
          try {
            (_a = this.storage) === null || _a === void 0 ? void 0 : _a.removeItem(key);
          } catch (_c) {
          }
          return [
            2
            /*return*/
          ];
        });
      });
    };
    BrowserStorage2.prototype.reset = function() {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_b) {
          try {
            (_a = this.storage) === null || _a === void 0 ? void 0 : _a.clear();
          } catch (_c) {
          }
          return [
            2
            /*return*/
          ];
        });
      });
    };
    return BrowserStorage2;
  }()
);

// node_modules/@amplitude/analytics-browser/lib/esm/storage/local-storage.js
var MAX_ARRAY_LENGTH = 1e3;
var LocalStorage = (
  /** @class */
  function(_super) {
    __extends(LocalStorage2, _super);
    function LocalStorage2(config) {
      var _this = this;
      var _a;
      _this = _super.call(this, (_a = getGlobalScope2()) === null || _a === void 0 ? void 0 : _a.localStorage) || this;
      _this.loggerProvider = config === null || config === void 0 ? void 0 : config.loggerProvider;
      return _this;
    }
    LocalStorage2.prototype.set = function(key, value) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var droppedEventsCount;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (!(Array.isArray(value) && value.length > MAX_ARRAY_LENGTH)) return [3, 2];
              droppedEventsCount = value.length - MAX_ARRAY_LENGTH;
              return [4, _super.prototype.set.call(this, key, value.slice(0, MAX_ARRAY_LENGTH))];
            case 1:
              _b.sent();
              (_a = this.loggerProvider) === null || _a === void 0 ? void 0 : _a.error("Failed to save ".concat(droppedEventsCount, " events because the queue length exceeded ").concat(MAX_ARRAY_LENGTH, "."));
              return [3, 4];
            case 2:
              return [4, _super.prototype.set.call(this, key, value)];
            case 3:
              _b.sent();
              _b.label = 4;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    return LocalStorage2;
  }(BrowserStorage)
);

// node_modules/@amplitude/analytics-browser/lib/esm/storage/session-storage.js
var SessionStorage = (
  /** @class */
  function(_super) {
    __extends(SessionStorage2, _super);
    function SessionStorage2() {
      var _a;
      return _super.call(this, (_a = getGlobalScope2()) === null || _a === void 0 ? void 0 : _a.sessionStorage) || this;
    }
    return SessionStorage2;
  }(BrowserStorage)
);

// node_modules/@amplitude/analytics-browser/lib/esm/transports/xhr.js
var XHRTransport = (
  /** @class */
  function(_super) {
    __extends(XHRTransport2, _super);
    function XHRTransport2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {
        done: 4
      };
      return _this;
    }
    XHRTransport2.prototype.send = function(serverUrl, payload) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve, reject) {
            if (typeof XMLHttpRequest === "undefined") {
              reject(new Error("XHRTransport is not supported."));
            }
            var xhr = new XMLHttpRequest();
            xhr.open("POST", serverUrl, true);
            xhr.onreadystatechange = function() {
              if (xhr.readyState === _this.state.done) {
                try {
                  var responsePayload = xhr.responseText;
                  var parsedResponsePayload = JSON.parse(responsePayload);
                  var result = _this.buildResponse(parsedResponsePayload);
                  resolve(result);
                } catch (e) {
                  reject(e);
                }
              }
            };
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Accept", "*/*");
            xhr.send(JSON.stringify(payload));
          })];
        });
      });
    };
    return XHRTransport2;
  }(BaseTransport)
);

// node_modules/@amplitude/analytics-browser/lib/esm/transports/send-beacon.js
var SendBeaconTransport = (
  /** @class */
  function(_super) {
    __extends(SendBeaconTransport2, _super);
    function SendBeaconTransport2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SendBeaconTransport2.prototype.send = function(serverUrl, payload) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve, reject) {
            var globalScope = getGlobalScope2();
            if (!(globalScope === null || globalScope === void 0 ? void 0 : globalScope.navigator.sendBeacon)) {
              throw new Error("SendBeaconTransport is not supported");
            }
            try {
              var data = JSON.stringify(payload);
              var success = globalScope.navigator.sendBeacon(serverUrl, JSON.stringify(payload));
              if (success) {
                return resolve(_this.buildResponse({
                  code: 200,
                  events_ingested: payload.events.length,
                  payload_size_bytes: data.length,
                  server_upload_time: Date.now()
                }));
              }
              return resolve(_this.buildResponse({ code: 500 }));
            } catch (e) {
              reject(e);
            }
          })];
        });
      });
    };
    return SendBeaconTransport2;
  }(BaseTransport)
);

// node_modules/@amplitude/analytics-browser/lib/esm/cookie-migration/index.js
var parseLegacyCookies = function(apiKey, cookieStorage, deleteLegacyCookies) {
  if (deleteLegacyCookies === void 0) {
    deleteLegacyCookies = true;
  }
  return __awaiter(void 0, void 0, void 0, function() {
    var cookieName, cookies, _a, deviceId, userId, optOut, sessionId, lastEventTime, lastEventId;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          cookieName = getOldCookieName(apiKey);
          return [4, cookieStorage.getRaw(cookieName)];
        case 1:
          cookies = _b.sent();
          if (!cookies) {
            return [2, {
              optOut: false
            }];
          }
          if (!deleteLegacyCookies) return [3, 3];
          return [4, cookieStorage.remove(cookieName)];
        case 2:
          _b.sent();
          _b.label = 3;
        case 3:
          _a = __read(cookies.split("."), 6), deviceId = _a[0], userId = _a[1], optOut = _a[2], sessionId = _a[3], lastEventTime = _a[4], lastEventId = _a[5];
          return [2, {
            deviceId,
            userId: decode(userId),
            sessionId: parseTime(sessionId),
            lastEventId: parseTime(lastEventId),
            lastEventTime: parseTime(lastEventTime),
            optOut: Boolean(optOut)
          }];
      }
    });
  });
};
var parseTime = function(num) {
  var integer = parseInt(num, 32);
  if (isNaN(integer)) {
    return void 0;
  }
  return integer;
};
var decode = function(value) {
  if (!atob || !escape || !value) {
    return void 0;
  }
  try {
    return decodeURIComponent(escape(atob(value)));
  } catch (_a) {
    return void 0;
  }
};

// node_modules/@amplitude/analytics-browser/lib/esm/constants.js
var DEFAULT_EVENT_PREFIX = "[Amplitude]";
var DEFAULT_PAGE_VIEW_EVENT = "".concat(DEFAULT_EVENT_PREFIX, " Page Viewed");
var DEFAULT_FORM_START_EVENT = "".concat(DEFAULT_EVENT_PREFIX, " Form Started");
var DEFAULT_FORM_SUBMIT_EVENT = "".concat(DEFAULT_EVENT_PREFIX, " Form Submitted");
var DEFAULT_FILE_DOWNLOAD_EVENT = "".concat(DEFAULT_EVENT_PREFIX, " File Downloaded");
var DEFAULT_SESSION_START_EVENT = "session_start";
var DEFAULT_SESSION_END_EVENT = "session_end";
var FILE_EXTENSION = "".concat(DEFAULT_EVENT_PREFIX, " File Extension");
var FILE_NAME = "".concat(DEFAULT_EVENT_PREFIX, " File Name");
var LINK_ID = "".concat(DEFAULT_EVENT_PREFIX, " Link ID");
var LINK_TEXT = "".concat(DEFAULT_EVENT_PREFIX, " Link Text");
var LINK_URL = "".concat(DEFAULT_EVENT_PREFIX, " Link URL");
var FORM_ID = "".concat(DEFAULT_EVENT_PREFIX, " Form ID");
var FORM_NAME = "".concat(DEFAULT_EVENT_PREFIX, " Form Name");
var FORM_DESTINATION = "".concat(DEFAULT_EVENT_PREFIX, " Form Destination");
var DEFAULT_IDENTITY_STORAGE = "cookie";
var DEFAULT_SERVER_ZONE = "US";

// node_modules/@amplitude/analytics-browser/lib/esm/config.js
var BrowserConfig = (
  /** @class */
  function(_super) {
    __extends(BrowserConfig2, _super);
    function BrowserConfig2(apiKey, appVersion, cookieStorage, cookieOptions, defaultTracking, deviceId, flushIntervalMillis, flushMaxRetries, flushQueueSize, identityStorage, ingestionMetadata, instanceName, lastEventId, lastEventTime, loggerProvider, logLevel, minIdLength, offline, optOut, partnerId, plan, serverUrl, serverZone, sessionId, sessionTimeout, storageProvider, trackingOptions, transport, useBatch, userId, pageCounter) {
      if (cookieStorage === void 0) {
        cookieStorage = new MemoryStorage();
      }
      if (cookieOptions === void 0) {
        cookieOptions = {
          domain: "",
          expiration: 365,
          sameSite: "Lax",
          secure: false,
          upgrade: true
        };
      }
      if (flushIntervalMillis === void 0) {
        flushIntervalMillis = 1e3;
      }
      if (flushMaxRetries === void 0) {
        flushMaxRetries = 5;
      }
      if (flushQueueSize === void 0) {
        flushQueueSize = 30;
      }
      if (identityStorage === void 0) {
        identityStorage = DEFAULT_IDENTITY_STORAGE;
      }
      if (loggerProvider === void 0) {
        loggerProvider = new Logger();
      }
      if (logLevel === void 0) {
        logLevel = LogLevel2.Warn;
      }
      if (offline === void 0) {
        offline = false;
      }
      if (optOut === void 0) {
        optOut = false;
      }
      if (serverUrl === void 0) {
        serverUrl = "";
      }
      if (serverZone === void 0) {
        serverZone = DEFAULT_SERVER_ZONE;
      }
      if (sessionTimeout === void 0) {
        sessionTimeout = 30 * 60 * 1e3;
      }
      if (storageProvider === void 0) {
        storageProvider = new LocalStorage({ loggerProvider });
      }
      if (trackingOptions === void 0) {
        trackingOptions = {
          ipAddress: true,
          language: true,
          platform: true
        };
      }
      if (transport === void 0) {
        transport = "fetch";
      }
      if (useBatch === void 0) {
        useBatch = false;
      }
      var _this = _super.call(this, { apiKey, storageProvider, transportProvider: createTransport(transport) }) || this;
      _this.apiKey = apiKey;
      _this.appVersion = appVersion;
      _this.cookieOptions = cookieOptions;
      _this.defaultTracking = defaultTracking;
      _this.flushIntervalMillis = flushIntervalMillis;
      _this.flushMaxRetries = flushMaxRetries;
      _this.flushQueueSize = flushQueueSize;
      _this.identityStorage = identityStorage;
      _this.ingestionMetadata = ingestionMetadata;
      _this.instanceName = instanceName;
      _this.loggerProvider = loggerProvider;
      _this.logLevel = logLevel;
      _this.minIdLength = minIdLength;
      _this.offline = offline;
      _this.partnerId = partnerId;
      _this.plan = plan;
      _this.serverUrl = serverUrl;
      _this.serverZone = serverZone;
      _this.sessionTimeout = sessionTimeout;
      _this.storageProvider = storageProvider;
      _this.trackingOptions = trackingOptions;
      _this.transport = transport;
      _this.useBatch = useBatch;
      _this._optOut = false;
      _this._cookieStorage = cookieStorage;
      _this.deviceId = deviceId;
      _this.lastEventId = lastEventId;
      _this.lastEventTime = lastEventTime;
      _this.optOut = optOut;
      _this.sessionId = sessionId;
      _this.pageCounter = pageCounter;
      _this.userId = userId;
      _this.loggerProvider.enable(_this.logLevel);
      return _this;
    }
    Object.defineProperty(BrowserConfig2.prototype, "cookieStorage", {
      get: function() {
        return this._cookieStorage;
      },
      set: function(cookieStorage) {
        if (this._cookieStorage !== cookieStorage) {
          this._cookieStorage = cookieStorage;
          this.updateStorage();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserConfig2.prototype, "deviceId", {
      get: function() {
        return this._deviceId;
      },
      set: function(deviceId) {
        if (this._deviceId !== deviceId) {
          this._deviceId = deviceId;
          this.updateStorage();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserConfig2.prototype, "userId", {
      get: function() {
        return this._userId;
      },
      set: function(userId) {
        if (this._userId !== userId) {
          this._userId = userId;
          this.updateStorage();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserConfig2.prototype, "sessionId", {
      get: function() {
        return this._sessionId;
      },
      set: function(sessionId) {
        if (this._sessionId !== sessionId) {
          this._sessionId = sessionId;
          this.updateStorage();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserConfig2.prototype, "optOut", {
      get: function() {
        return this._optOut;
      },
      set: function(optOut) {
        if (this._optOut !== optOut) {
          this._optOut = optOut;
          this.updateStorage();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserConfig2.prototype, "lastEventTime", {
      get: function() {
        return this._lastEventTime;
      },
      set: function(lastEventTime) {
        if (this._lastEventTime !== lastEventTime) {
          this._lastEventTime = lastEventTime;
          this.updateStorage();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserConfig2.prototype, "lastEventId", {
      get: function() {
        return this._lastEventId;
      },
      set: function(lastEventId) {
        if (this._lastEventId !== lastEventId) {
          this._lastEventId = lastEventId;
          this.updateStorage();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BrowserConfig2.prototype, "pageCounter", {
      get: function() {
        return this._pageCounter;
      },
      set: function(pageCounter) {
        if (this._pageCounter !== pageCounter) {
          this._pageCounter = pageCounter;
          this.updateStorage();
        }
      },
      enumerable: false,
      configurable: true
    });
    BrowserConfig2.prototype.updateStorage = function() {
      var cache = {
        deviceId: this._deviceId,
        userId: this._userId,
        sessionId: this._sessionId,
        optOut: this._optOut,
        lastEventTime: this._lastEventTime,
        lastEventId: this._lastEventId,
        pageCounter: this._pageCounter
      };
      void this.cookieStorage.set(getCookieName(this.apiKey), cache);
    };
    return BrowserConfig2;
  }(Config)
);
var useBrowserConfig = function(apiKey, options, amplitudeInstance) {
  if (options === void 0) {
    options = {};
  }
  return __awaiter(void 0, void 0, void 0, function() {
    var identityStorage, cookieOptions, _a, _b, cookieStorage, legacyCookies, previousCookies, queryParams, deviceId, lastEventId, lastEventTime, optOut, sessionId, userId, trackingOptions, pageCounter;
    var _c;
    var _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
    return __generator(this, function(_3) {
      switch (_3.label) {
        case 0:
          identityStorage = options.identityStorage || DEFAULT_IDENTITY_STORAGE;
          _c = {};
          if (!(identityStorage !== DEFAULT_IDENTITY_STORAGE)) return [3, 1];
          _a = "";
          return [3, 5];
        case 1:
          if (!((_e = (_d = options.cookieOptions) === null || _d === void 0 ? void 0 : _d.domain) !== null && _e !== void 0)) return [3, 2];
          _b = _e;
          return [3, 4];
        case 2:
          return [4, getTopLevelDomain()];
        case 3:
          _b = _3.sent();
          _3.label = 4;
        case 4:
          _a = _b;
          _3.label = 5;
        case 5:
          cookieOptions = __assign.apply(void 0, [(_c.domain = _a, _c.expiration = 365, _c.sameSite = "Lax", _c.secure = false, _c.upgrade = true, _c), options.cookieOptions]);
          cookieStorage = createCookieStorage(options.identityStorage, cookieOptions);
          return [4, parseLegacyCookies(apiKey, cookieStorage, (_g = (_f = options.cookieOptions) === null || _f === void 0 ? void 0 : _f.upgrade) !== null && _g !== void 0 ? _g : true)];
        case 6:
          legacyCookies = _3.sent();
          return [4, cookieStorage.get(getCookieName(apiKey))];
        case 7:
          previousCookies = _3.sent();
          queryParams = getQueryParams();
          deviceId = (_m = (_l = (_k = (_j = (_h = options.deviceId) !== null && _h !== void 0 ? _h : queryParams.ampDeviceId) !== null && _j !== void 0 ? _j : queryParams.deviceId) !== null && _k !== void 0 ? _k : previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.deviceId) !== null && _l !== void 0 ? _l : legacyCookies.deviceId) !== null && _m !== void 0 ? _m : UUID();
          lastEventId = (_o = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.lastEventId) !== null && _o !== void 0 ? _o : legacyCookies.lastEventId;
          lastEventTime = (_p = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.lastEventTime) !== null && _p !== void 0 ? _p : legacyCookies.lastEventTime;
          optOut = (_r = (_q = options.optOut) !== null && _q !== void 0 ? _q : previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.optOut) !== null && _r !== void 0 ? _r : legacyCookies.optOut;
          sessionId = (_s = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.sessionId) !== null && _s !== void 0 ? _s : legacyCookies.sessionId;
          userId = (_u = (_t = options.userId) !== null && _t !== void 0 ? _t : previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.userId) !== null && _u !== void 0 ? _u : legacyCookies.userId;
          amplitudeInstance.previousSessionDeviceId = (_v = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.deviceId) !== null && _v !== void 0 ? _v : legacyCookies.deviceId;
          amplitudeInstance.previousSessionUserId = (_w = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.userId) !== null && _w !== void 0 ? _w : legacyCookies.userId;
          trackingOptions = {
            ipAddress: (_y = (_x = options.trackingOptions) === null || _x === void 0 ? void 0 : _x.ipAddress) !== null && _y !== void 0 ? _y : true,
            language: (_0 = (_z = options.trackingOptions) === null || _z === void 0 ? void 0 : _z.language) !== null && _0 !== void 0 ? _0 : true,
            platform: (_2 = (_1 = options.trackingOptions) === null || _1 === void 0 ? void 0 : _1.platform) !== null && _2 !== void 0 ? _2 : true
          };
          pageCounter = previousCookies === null || previousCookies === void 0 ? void 0 : previousCookies.pageCounter;
          return [2, new BrowserConfig(apiKey, options.appVersion, cookieStorage, cookieOptions, options.defaultTracking, deviceId, options.flushIntervalMillis, options.flushMaxRetries, options.flushQueueSize, identityStorage, options.ingestionMetadata, options.instanceName, lastEventId, lastEventTime, options.loggerProvider, options.logLevel, options.minIdLength, options.offline, optOut, options.partnerId, options.plan, options.serverUrl, options.serverZone, sessionId, options.sessionTimeout, options.storageProvider, trackingOptions, options.transport, options.useBatch, userId, pageCounter)];
      }
    });
  });
};
var createCookieStorage = function(identityStorage, cookieOptions) {
  if (identityStorage === void 0) {
    identityStorage = DEFAULT_IDENTITY_STORAGE;
  }
  if (cookieOptions === void 0) {
    cookieOptions = {};
  }
  switch (identityStorage) {
    case "localStorage":
      return new LocalStorage();
    case "sessionStorage":
      return new SessionStorage();
    case "none":
      return new MemoryStorage();
    case "cookie":
    default:
      return new CookieStorage(__assign(__assign({}, cookieOptions), { expirationDays: cookieOptions.expiration }));
  }
};
var createTransport = function(transport) {
  if (transport === "xhr") {
    return new XHRTransport();
  }
  if (transport === "beacon") {
    return new SendBeaconTransport();
  }
  return new FetchTransport();
};
var getTopLevelDomain = function(url) {
  return __awaiter(void 0, void 0, void 0, function() {
    var host, parts, levels, storageKey, i, i, domain, options, storage, value;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, new CookieStorage().isEnabled()];
        case 1:
          if (!_a.sent() || !url && (typeof location === "undefined" || !location.hostname)) {
            return [2, ""];
          }
          host = url !== null && url !== void 0 ? url : location.hostname;
          parts = host.split(".");
          levels = [];
          storageKey = "AMP_TLDTEST";
          for (i = parts.length - 2; i >= 0; --i) {
            levels.push(parts.slice(i).join("."));
          }
          i = 0;
          _a.label = 2;
        case 2:
          if (!(i < levels.length)) return [3, 7];
          domain = levels[i];
          options = { domain: "." + domain };
          storage = new CookieStorage(options);
          return [4, storage.set(storageKey, 1)];
        case 3:
          _a.sent();
          return [4, storage.get(storageKey)];
        case 4:
          value = _a.sent();
          if (!value) return [3, 6];
          return [4, storage.remove(storageKey)];
        case 5:
          _a.sent();
          return [2, "." + domain];
        case 6:
          i++;
          return [3, 2];
        case 7:
          return [2, ""];
      }
    });
  });
};

// node_modules/@amplitude/plugin-page-view-tracking-browser/lib/esm/utils.js
var omitUndefined = function(input) {
  var obj = {};
  for (var key in input) {
    var val = input[key];
    if (val) {
      obj[key] = val;
    }
  }
  return obj;
};

// node_modules/@amplitude/plugin-page-view-tracking-browser/lib/esm/page-view-tracking.js
var defaultPageViewEvent = "[Amplitude] Page Viewed";
var pageViewTrackingPlugin = function(options) {
  if (options === void 0) {
    options = {};
  }
  var amplitude;
  var globalScope = getGlobalScope2();
  var loggerProvider = void 0;
  var pushState;
  var localConfig;
  var trackOn = options.trackOn, trackHistoryChanges = options.trackHistoryChanges, _a = options.eventType, eventType = _a === void 0 ? defaultPageViewEvent : _a;
  var getDecodeURI = function(locationStr) {
    var decodedLocationStr = locationStr;
    try {
      decodedLocationStr = decodeURI(locationStr);
    } catch (e) {
      loggerProvider === null || loggerProvider === void 0 ? void 0 : loggerProvider.error("Malformed URI sequence: ", e);
    }
    return decodedLocationStr;
  };
  var createPageViewEvent = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var locationHREF, _a2;
      var _b;
      return __generator(this, function(_c) {
        switch (_c.label) {
          case 0:
            locationHREF = getDecodeURI(typeof location !== "undefined" && location.href || "");
            _b = {
              event_type: eventType
            };
            _a2 = [{}];
            return [4, getCampaignParams()];
          case 1:
            return [2, (_b.event_properties = __assign.apply(void 0, [__assign.apply(void 0, _a2.concat([_c.sent()])), { "[Amplitude] Page Domain": (
              /* istanbul ignore next */
              typeof location !== "undefined" && location.hostname || ""
            ), "[Amplitude] Page Location": locationHREF, "[Amplitude] Page Path": (
              /* istanbul ignore next */
              typeof location !== "undefined" && getDecodeURI(location.pathname) || ""
            ), "[Amplitude] Page Title": (
              /* istanbul ignore next */
              typeof document !== "undefined" && document.title || ""
            ), "[Amplitude] Page URL": locationHREF.split("?")[0] }]), _b)];
        }
      });
    });
  };
  var shouldTrackOnPageLoad = function() {
    return typeof trackOn === "undefined" || typeof trackOn === "function" && trackOn();
  };
  var previousURL = typeof location !== "undefined" ? location.href : null;
  var trackHistoryPageView = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var newURL, shouldTrackPageView, _a2, _b, _c;
      return __generator(this, function(_d) {
        switch (_d.label) {
          case 0:
            newURL = location.href;
            shouldTrackPageView = shouldTrackHistoryPageView(trackHistoryChanges, newURL, previousURL || "") && shouldTrackOnPageLoad();
            previousURL = newURL;
            if (!shouldTrackPageView) return [3, 4];
            loggerProvider === null || loggerProvider === void 0 ? void 0 : loggerProvider.log("Tracking page view event");
            if (!(amplitude === null || amplitude === void 0)) return [3, 1];
            _a2 = void 0;
            return [3, 3];
          case 1:
            _c = (_b = amplitude).track;
            return [4, createPageViewEvent()];
          case 2:
            _a2 = _c.apply(_b, [_d.sent()]);
            _d.label = 3;
          case 3:
            _a2;
            _d.label = 4;
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  var trackHistoryPageViewWrapper = function() {
    void trackHistoryPageView();
  };
  var plugin = {
    name: "@amplitude/plugin-page-view-tracking-browser",
    type: "enrichment",
    setup: function(config, client) {
      return __awaiter(void 0, void 0, void 0, function() {
        var _a2, _b;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              amplitude = client;
              localConfig = config;
              loggerProvider = config.loggerProvider;
              loggerProvider.log("Installing @amplitude/plugin-page-view-tracking-browser");
              if (globalScope) {
                globalScope.addEventListener("popstate", trackHistoryPageViewWrapper);
                pushState = globalScope.history.pushState;
                globalScope.history.pushState = new Proxy(globalScope.history.pushState, {
                  apply: function(target, thisArg, _a3) {
                    var _b2 = __read(_a3, 3), state = _b2[0], unused = _b2[1], url = _b2[2];
                    target.apply(thisArg, [state, unused, url]);
                    void trackHistoryPageView();
                  }
                });
              }
              if (!shouldTrackOnPageLoad()) return [3, 2];
              loggerProvider.log("Tracking page view event");
              _b = (_a2 = amplitude).track;
              return [4, createPageViewEvent()];
            case 1:
              _b.apply(_a2, [_c.sent()]);
              _c.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    },
    execute: function(event) {
      return __awaiter(void 0, void 0, void 0, function() {
        var pageViewEvent;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              if (!(trackOn === "attribution" && isCampaignEvent(event))) return [3, 2];
              loggerProvider === null || loggerProvider === void 0 ? void 0 : loggerProvider.log("Enriching campaign event to page view event with campaign parameters");
              return [4, createPageViewEvent()];
            case 1:
              pageViewEvent = _a2.sent();
              event.event_type = pageViewEvent.event_type;
              event.event_properties = __assign(__assign({}, event.event_properties), pageViewEvent.event_properties);
              _a2.label = 2;
            case 2:
              if (localConfig && event.event_type === eventType) {
                localConfig.pageCounter = !localConfig.pageCounter ? 1 : localConfig.pageCounter + 1;
                event.event_properties = __assign(__assign({}, event.event_properties), { "[Amplitude] Page Counter": localConfig.pageCounter });
              }
              return [2, event];
          }
        });
      });
    },
    teardown: function() {
      return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(_a2) {
          if (globalScope) {
            globalScope.removeEventListener("popstate", trackHistoryPageViewWrapper);
            if (pushState) {
              globalScope.history.pushState = pushState;
            }
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }
  };
  return plugin;
};
var getCampaignParams = function() {
  return __awaiter(void 0, void 0, void 0, function() {
    var _a;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _a = omitUndefined;
          return [4, new CampaignParser().parse()];
        case 1:
          return [2, _a.apply(void 0, [_b.sent()])];
      }
    });
  });
};
var isCampaignEvent = function(event) {
  if (event.event_type === "$identify" && event.user_properties) {
    var properties = event.user_properties;
    var $set = properties[IdentifyOperation3.SET] || {};
    var $unset = properties[IdentifyOperation3.UNSET] || {};
    var userProperties_1 = __spreadArray(__spreadArray([], __read(Object.keys($set)), false), __read(Object.keys($unset)), false);
    return Object.keys(BASE_CAMPAIGN).every(function(value) {
      return userProperties_1.includes(value);
    });
  }
  return false;
};
var shouldTrackHistoryPageView = function(trackingOption, newURLStr, oldURLStr) {
  switch (trackingOption) {
    case "pathOnly": {
      if (oldURLStr == "")
        return true;
      var newURL = new URL(newURLStr);
      var oldURL = new URL(oldURLStr);
      var newBaseStr = newURL.origin + newURL.pathname;
      var oldBaseStr = oldURL.origin + oldURL.pathname;
      return newBaseStr !== oldBaseStr;
    }
    default:
      return newURLStr !== oldURLStr;
  }
};

// node_modules/@amplitude/analytics-browser/lib/esm/plugins/form-interaction-tracking.js
var formInteractionTracking = function() {
  var observer;
  var eventListeners = [];
  var addEventListener = function(element, type2, handler) {
    element.addEventListener(type2, handler);
    eventListeners.push({
      element,
      type: type2,
      handler
    });
  };
  var removeClickListeners = function() {
    eventListeners.forEach(function(_a) {
      var element = _a.element, type2 = _a.type, handler = _a.handler;
      element === null || element === void 0 ? void 0 : element.removeEventListener(type2, handler);
    });
    eventListeners = [];
  };
  var name = "@amplitude/plugin-form-interaction-tracking-browser";
  var type = "enrichment";
  var setup = function(config, amplitude) {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        window.addEventListener("load", function() {
          if (!amplitude) {
            config.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked.");
            return;
          }
          if (typeof document === "undefined") {
            return;
          }
          var addFormInteractionListener = function(form) {
            var hasFormChanged = false;
            addEventListener(form, "change", function() {
              var _a2;
              if (!hasFormChanged) {
                amplitude.track(DEFAULT_FORM_START_EVENT, (_a2 = {}, _a2[FORM_ID] = stringOrUndefined(form.id), _a2[FORM_NAME] = stringOrUndefined(form.name), _a2[FORM_DESTINATION] = form.action, _a2));
              }
              hasFormChanged = true;
            });
            addEventListener(form, "submit", function() {
              var _a2, _b;
              if (!hasFormChanged) {
                amplitude.track(DEFAULT_FORM_START_EVENT, (_a2 = {}, _a2[FORM_ID] = stringOrUndefined(form.id), _a2[FORM_NAME] = stringOrUndefined(form.name), _a2[FORM_DESTINATION] = form.action, _a2));
              }
              amplitude.track(DEFAULT_FORM_SUBMIT_EVENT, (_b = {}, _b[FORM_ID] = stringOrUndefined(form.id), _b[FORM_NAME] = stringOrUndefined(form.name), _b[FORM_DESTINATION] = form.action, _b));
              hasFormChanged = false;
            });
          };
          var forms = Array.from(document.getElementsByTagName("form"));
          forms.forEach(addFormInteractionListener);
          if (typeof MutationObserver !== "undefined") {
            observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                  if (node.nodeName === "FORM") {
                    addFormInteractionListener(node);
                  }
                  if ("querySelectorAll" in node && typeof node.querySelectorAll === "function") {
                    Array.from(node.querySelectorAll("form")).map(addFormInteractionListener);
                  }
                });
              });
            });
            observer.observe(document.body, {
              subtree: true,
              childList: true
            });
          }
        });
        return [
          2
          /*return*/
        ];
      });
    });
  };
  var execute = function(event) {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, event];
      });
    });
  };
  var teardown = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        observer === null || observer === void 0 ? void 0 : observer.disconnect();
        removeClickListeners();
        return [
          2
          /*return*/
        ];
      });
    });
  };
  return {
    name,
    type,
    setup,
    execute,
    teardown
  };
};
var stringOrUndefined = function(name) {
  if (typeof name !== "string") {
    return void 0;
  }
  return name;
};

// node_modules/@amplitude/analytics-browser/lib/esm/plugins/file-download-tracking.js
var fileDownloadTracking = function() {
  var observer;
  var eventListeners = [];
  var addEventListener = function(element, type2, handler) {
    element.addEventListener(type2, handler);
    eventListeners.push({
      element,
      type: type2,
      handler
    });
  };
  var removeClickListeners = function() {
    eventListeners.forEach(function(_a) {
      var element = _a.element, type2 = _a.type, handler = _a.handler;
      element === null || element === void 0 ? void 0 : element.removeEventListener(type2, handler);
    });
    eventListeners = [];
  };
  var name = "@amplitude/plugin-file-download-tracking-browser";
  var type = "enrichment";
  var setup = function(config, amplitude) {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        window.addEventListener("load", function() {
          if (!amplitude) {
            config.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked.");
            return;
          }
          if (typeof document === "undefined") {
            return;
          }
          var addFileDownloadListener = function(a) {
            var url;
            try {
              url = new URL(a.href, window.location.href);
            } catch (_a2) {
              return;
            }
            var result = ext.exec(url.href);
            var fileExtension = result === null || result === void 0 ? void 0 : result[1];
            if (fileExtension) {
              addEventListener(a, "click", function() {
                var _a2;
                if (fileExtension) {
                  amplitude.track(DEFAULT_FILE_DOWNLOAD_EVENT, (_a2 = {}, _a2[FILE_EXTENSION] = fileExtension, _a2[FILE_NAME] = url.pathname, _a2[LINK_ID] = a.id, _a2[LINK_TEXT] = a.text, _a2[LINK_URL] = a.href, _a2));
                }
              });
            }
          };
          var ext = /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$/;
          var links = Array.from(document.getElementsByTagName("a"));
          links.forEach(addFileDownloadListener);
          if (typeof MutationObserver !== "undefined") {
            observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                  if (node.nodeName === "A") {
                    addFileDownloadListener(node);
                  }
                  if ("querySelectorAll" in node && typeof node.querySelectorAll === "function") {
                    Array.from(node.querySelectorAll("a")).map(addFileDownloadListener);
                  }
                });
              });
            });
            observer.observe(document.body, {
              subtree: true,
              childList: true
            });
          }
        });
        return [
          2
          /*return*/
        ];
      });
    });
  };
  var execute = function(event) {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2, event];
      });
    });
  };
  var teardown = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        observer === null || observer === void 0 ? void 0 : observer.disconnect();
        removeClickListeners();
        return [
          2
          /*return*/
        ];
      });
    });
  };
  return {
    name,
    type,
    setup,
    execute,
    teardown
  };
};

// node_modules/@amplitude/analytics-browser/lib/esm/det-notification.js
var notified = false;
var detNotify = function(config) {
  if (notified || config.defaultTracking !== void 0) {
    return;
  }
  var message = "`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details.";
  config.loggerProvider.warn(message);
  notified = true;
};

// node_modules/@amplitude/analytics-browser/lib/esm/plugins/network-connectivity-checker.js
var networkConnectivityCheckerPlugin = function() {
  var name = "@amplitude/plugin-network-checker-browser";
  var type = "before";
  var globalScope = getGlobalScope2();
  var eventListeners = [];
  var addNetworkListener = function(type2, handler) {
    if (globalScope) {
      globalScope.addEventListener(type2, handler);
      eventListeners.push({
        type: type2,
        handler
      });
    }
  };
  var removeNetworkListeners = function() {
    eventListeners.forEach(function(_a) {
      var type2 = _a.type, handler = _a.handler;
      if (globalScope) {
        globalScope.removeEventListener(type2, handler);
      }
    });
    eventListeners = [];
  };
  var setup = function(config, amplitude) {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        config.offline = !navigator.onLine;
        addNetworkListener("online", function() {
          config.loggerProvider.debug("Network connectivity changed to online.");
          config.offline = false;
          setTimeout(function() {
            amplitude.flush();
          }, config.flushIntervalMillis);
        });
        addNetworkListener("offline", function() {
          config.loggerProvider.debug("Network connectivity changed to offline.");
          config.offline = true;
        });
        return [
          2
          /*return*/
        ];
      });
    });
  };
  var teardown = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        removeNetworkListeners();
        return [
          2
          /*return*/
        ];
      });
    });
  };
  return {
    name,
    type,
    setup,
    teardown
  };
};

// node_modules/@amplitude/analytics-browser/lib/esm/browser-client.js
var AmplitudeBrowser = (
  /** @class */
  function(_super) {
    __extends(AmplitudeBrowser2, _super);
    function AmplitudeBrowser2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    AmplitudeBrowser2.prototype.init = function(apiKey, userIdOrOptions, maybeOptions) {
      if (apiKey === void 0) {
        apiKey = "";
      }
      var userId;
      var options;
      if (arguments.length > 2) {
        userId = userIdOrOptions;
        options = maybeOptions;
      } else {
        if (typeof userIdOrOptions === "string") {
          userId = userIdOrOptions;
          options = void 0;
        } else {
          userId = userIdOrOptions === null || userIdOrOptions === void 0 ? void 0 : userIdOrOptions.userId;
          options = userIdOrOptions;
        }
      }
      return returnWrapper(this._init(__assign(__assign({}, options), { userId, apiKey })));
    };
    AmplitudeBrowser2.prototype._init = function(options) {
      var _a, _b, _c;
      return __awaiter(this, void 0, void 0, function() {
        var browserOptions, attributionTrackingOptions, queryParams, querySessionId, connector;
        var _this = this;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              if (this.initializing) {
                return [
                  2
                  /*return*/
                ];
              }
              this.initializing = true;
              return [4, useBrowserConfig(options.apiKey, options, this)];
            case 1:
              browserOptions = _d.sent();
              return [4, _super.prototype._init.call(this, browserOptions)];
            case 2:
              _d.sent();
              if (!isAttributionTrackingEnabled(this.config.defaultTracking)) return [3, 4];
              attributionTrackingOptions = getAttributionTrackingConfig(this.config);
              this.webAttribution = new WebAttribution(attributionTrackingOptions, this.config);
              return [4, this.webAttribution.init()];
            case 3:
              _d.sent();
              _d.label = 4;
            case 4:
              queryParams = getQueryParams();
              querySessionId = Number.isNaN(Number(queryParams.ampSessionId)) ? void 0 : Number(queryParams.ampSessionId);
              this.setSessionId((_c = (_b = (_a = options.sessionId) !== null && _a !== void 0 ? _a : querySessionId) !== null && _b !== void 0 ? _b : this.config.sessionId) !== null && _c !== void 0 ? _c : Date.now());
              connector = getAnalyticsConnector(options.instanceName);
              connector.identityStore.setIdentity({
                userId: this.config.userId,
                deviceId: this.config.deviceId
              });
              if (!(this.config.offline !== OfflineDisabled)) return [3, 6];
              return [4, this.add(networkConnectivityCheckerPlugin()).promise];
            case 5:
              _d.sent();
              _d.label = 6;
            case 6:
              return [4, this.add(new Destination()).promise];
            case 7:
              _d.sent();
              return [4, this.add(new Context()).promise];
            case 8:
              _d.sent();
              return [4, this.add(new IdentityEventSender()).promise];
            case 9:
              _d.sent();
              detNotify(this.config);
              if (!isFileDownloadTrackingEnabled(this.config.defaultTracking)) return [3, 11];
              return [4, this.add(fileDownloadTracking()).promise];
            case 10:
              _d.sent();
              _d.label = 11;
            case 11:
              if (!isFormInteractionTrackingEnabled(this.config.defaultTracking)) return [3, 13];
              return [4, this.add(formInteractionTracking()).promise];
            case 12:
              _d.sent();
              _d.label = 13;
            case 13:
              if (!isPageViewTrackingEnabled(this.config.defaultTracking)) return [3, 15];
              return [4, this.add(pageViewTrackingPlugin(getPageViewTrackingConfig(this.config))).promise];
            case 14:
              _d.sent();
              _d.label = 15;
            case 15:
              this.initializing = false;
              return [4, this.runQueuedFunctions("dispatchQ")];
            case 16:
              _d.sent();
              connector.eventBridge.setEventReceiver(function(event) {
                void _this.track(event.eventType, event.eventProperties);
              });
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    AmplitudeBrowser2.prototype.getUserId = function() {
      var _a;
      return (_a = this.config) === null || _a === void 0 ? void 0 : _a.userId;
    };
    AmplitudeBrowser2.prototype.setUserId = function(userId) {
      if (!this.config) {
        this.q.push(this.setUserId.bind(this, userId));
        return;
      }
      if (userId !== this.config.userId || userId === void 0) {
        this.config.userId = userId;
        setConnectorUserId(userId, this.config.instanceName);
      }
    };
    AmplitudeBrowser2.prototype.getDeviceId = function() {
      var _a;
      return (_a = this.config) === null || _a === void 0 ? void 0 : _a.deviceId;
    };
    AmplitudeBrowser2.prototype.setDeviceId = function(deviceId) {
      if (!this.config) {
        this.q.push(this.setDeviceId.bind(this, deviceId));
        return;
      }
      this.config.deviceId = deviceId;
      setConnectorDeviceId(deviceId, this.config.instanceName);
    };
    AmplitudeBrowser2.prototype.reset = function() {
      this.setDeviceId(UUID());
      this.setUserId(void 0);
    };
    AmplitudeBrowser2.prototype.getSessionId = function() {
      var _a;
      return (_a = this.config) === null || _a === void 0 ? void 0 : _a.sessionId;
    };
    AmplitudeBrowser2.prototype.setSessionId = function(sessionId) {
      var _a;
      var promises = [];
      if (!this.config) {
        this.q.push(this.setSessionId.bind(this, sessionId));
        return returnWrapper(Promise.resolve());
      }
      if (sessionId === this.config.sessionId) {
        return returnWrapper(Promise.resolve());
      }
      var previousSessionId = this.getSessionId();
      var lastEventTime = this.config.lastEventTime;
      var lastEventId = (_a = this.config.lastEventId) !== null && _a !== void 0 ? _a : -1;
      this.config.sessionId = sessionId;
      this.config.lastEventTime = void 0;
      this.config.pageCounter = 0;
      if (isSessionTrackingEnabled(this.config.defaultTracking)) {
        if (previousSessionId && lastEventTime) {
          promises.push(this.track(DEFAULT_SESSION_END_EVENT, void 0, {
            device_id: this.previousSessionDeviceId,
            event_id: ++lastEventId,
            session_id: previousSessionId,
            time: lastEventTime + 1,
            user_id: this.previousSessionUserId
          }).promise);
        }
        this.config.lastEventTime = this.config.sessionId;
      }
      var isCampaignEventTracked = this.trackCampaignEventIfNeeded(++lastEventId, promises);
      if (isSessionTrackingEnabled(this.config.defaultTracking)) {
        promises.push(this.track(DEFAULT_SESSION_START_EVENT, void 0, {
          event_id: isCampaignEventTracked ? ++lastEventId : lastEventId,
          session_id: this.config.sessionId,
          time: this.config.lastEventTime
        }).promise);
      }
      this.previousSessionDeviceId = this.config.deviceId;
      this.previousSessionUserId = this.config.userId;
      return returnWrapper(Promise.all(promises));
    };
    AmplitudeBrowser2.prototype.extendSession = function() {
      if (!this.config) {
        this.q.push(this.extendSession.bind(this));
        return;
      }
      this.config.lastEventTime = Date.now();
    };
    AmplitudeBrowser2.prototype.setTransport = function(transport) {
      if (!this.config) {
        this.q.push(this.setTransport.bind(this, transport));
        return;
      }
      this.config.transportProvider = createTransport(transport);
    };
    AmplitudeBrowser2.prototype.identify = function(identify2, eventOptions) {
      if (isInstanceProxy(identify2)) {
        var queue = identify2._q;
        identify2._q = [];
        identify2 = convertProxyObjectToRealObject(new Identify(), queue);
      }
      if (eventOptions === null || eventOptions === void 0 ? void 0 : eventOptions.user_id) {
        this.setUserId(eventOptions.user_id);
      }
      if (eventOptions === null || eventOptions === void 0 ? void 0 : eventOptions.device_id) {
        this.setDeviceId(eventOptions.device_id);
      }
      return _super.prototype.identify.call(this, identify2, eventOptions);
    };
    AmplitudeBrowser2.prototype.groupIdentify = function(groupType, groupName, identify2, eventOptions) {
      if (isInstanceProxy(identify2)) {
        var queue = identify2._q;
        identify2._q = [];
        identify2 = convertProxyObjectToRealObject(new Identify(), queue);
      }
      return _super.prototype.groupIdentify.call(this, groupType, groupName, identify2, eventOptions);
    };
    AmplitudeBrowser2.prototype.revenue = function(revenue2, eventOptions) {
      if (isInstanceProxy(revenue2)) {
        var queue = revenue2._q;
        revenue2._q = [];
        revenue2 = convertProxyObjectToRealObject(new Revenue(), queue);
      }
      return _super.prototype.revenue.call(this, revenue2, eventOptions);
    };
    AmplitudeBrowser2.prototype.trackCampaignEventIfNeeded = function(lastEventId, promises) {
      if (!this.webAttribution || !this.webAttribution.shouldTrackNewCampaign) {
        return false;
      }
      var campaignEvent = this.webAttribution.generateCampaignEvent(lastEventId);
      if (promises) {
        promises.push(this.track(campaignEvent).promise);
      } else {
        this.track(campaignEvent);
      }
      this.config.loggerProvider.log("Tracking attribution.");
      return true;
    };
    AmplitudeBrowser2.prototype.process = function(event) {
      return __awaiter(this, void 0, void 0, function() {
        var currentTime, isEventInNewSession, shouldSetSessionIdOnNewCampaign;
        return __generator(this, function(_a) {
          currentTime = Date.now();
          isEventInNewSession = isNewSession(this.config.sessionTimeout, this.config.lastEventTime);
          shouldSetSessionIdOnNewCampaign = this.webAttribution && this.webAttribution.shouldSetSessionIdOnNewCampaign();
          if (event.event_type !== DEFAULT_SESSION_START_EVENT && event.event_type !== DEFAULT_SESSION_END_EVENT && (!event.session_id || event.session_id === this.getSessionId())) {
            if (isEventInNewSession || shouldSetSessionIdOnNewCampaign) {
              this.setSessionId(currentTime);
              if (shouldSetSessionIdOnNewCampaign) {
                this.config.loggerProvider.log("Created a new session for new campaign.");
              }
            } else if (!isEventInNewSession) {
              this.trackCampaignEventIfNeeded();
            }
          }
          return [2, _super.prototype.process.call(this, event)];
        });
      });
    };
    return AmplitudeBrowser2;
  }(AmplitudeCore)
);

// node_modules/@amplitude/analytics-browser/lib/esm/browser-client-factory.js
var createInstance = function() {
  var client = new AmplitudeBrowser();
  return {
    init: debugWrapper(client.init.bind(client), "init", getClientLogConfig(client), getClientStates(client, ["config"])),
    add: debugWrapper(client.add.bind(client), "add", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.plugins"])),
    remove: debugWrapper(client.remove.bind(client), "remove", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.plugins"])),
    track: debugWrapper(client.track.bind(client), "track", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
    logEvent: debugWrapper(client.logEvent.bind(client), "logEvent", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
    identify: debugWrapper(client.identify.bind(client), "identify", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
    groupIdentify: debugWrapper(client.groupIdentify.bind(client), "groupIdentify", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
    setGroup: debugWrapper(client.setGroup.bind(client), "setGroup", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
    revenue: debugWrapper(client.revenue.bind(client), "revenue", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
    flush: debugWrapper(client.flush.bind(client), "flush", getClientLogConfig(client), getClientStates(client, ["config.apiKey", "timeline.queue.length"])),
    getUserId: debugWrapper(client.getUserId.bind(client), "getUserId", getClientLogConfig(client), getClientStates(client, ["config", "config.userId"])),
    setUserId: debugWrapper(client.setUserId.bind(client), "setUserId", getClientLogConfig(client), getClientStates(client, ["config", "config.userId"])),
    getDeviceId: debugWrapper(client.getDeviceId.bind(client), "getDeviceId", getClientLogConfig(client), getClientStates(client, ["config", "config.deviceId"])),
    setDeviceId: debugWrapper(client.setDeviceId.bind(client), "setDeviceId", getClientLogConfig(client), getClientStates(client, ["config", "config.deviceId"])),
    reset: debugWrapper(client.reset.bind(client), "reset", getClientLogConfig(client), getClientStates(client, ["config", "config.userId", "config.deviceId"])),
    getSessionId: debugWrapper(client.getSessionId.bind(client), "getSessionId", getClientLogConfig(client), getClientStates(client, ["config"])),
    setSessionId: debugWrapper(client.setSessionId.bind(client), "setSessionId", getClientLogConfig(client), getClientStates(client, ["config"])),
    extendSession: debugWrapper(client.extendSession.bind(client), "extendSession", getClientLogConfig(client), getClientStates(client, ["config"])),
    setOptOut: debugWrapper(client.setOptOut.bind(client), "setOptOut", getClientLogConfig(client), getClientStates(client, ["config"])),
    setTransport: debugWrapper(client.setTransport.bind(client), "setTransport", getClientLogConfig(client), getClientStates(client, ["config"]))
  };
};
var browser_client_factory_default = createInstance();

// node_modules/@amplitude/analytics-browser/lib/esm/index.js
var add = browser_client_factory_default.add;
var extendSession = browser_client_factory_default.extendSession;
var flush = browser_client_factory_default.flush;
var getDeviceId = browser_client_factory_default.getDeviceId;
var getSessionId = browser_client_factory_default.getSessionId;
var getUserId = browser_client_factory_default.getUserId;
var groupIdentify = browser_client_factory_default.groupIdentify;
var identify = browser_client_factory_default.identify;
var init = browser_client_factory_default.init;
var logEvent = browser_client_factory_default.logEvent;
var remove = browser_client_factory_default.remove;
var reset = browser_client_factory_default.reset;
var revenue = browser_client_factory_default.revenue;
var setDeviceId = browser_client_factory_default.setDeviceId;
var setGroup = browser_client_factory_default.setGroup;
var setOptOut = browser_client_factory_default.setOptOut;
var setSessionId = browser_client_factory_default.setSessionId;
var setTransport = browser_client_factory_default.setTransport;
var setUserId = browser_client_factory_default.setUserId;
var track = browser_client_factory_default.track;
export {
  Identify,
  Revenue,
  esm_exports as Types,
  add,
  createInstance,
  extendSession,
  flush,
  getDeviceId,
  getSessionId,
  getUserId,
  groupIdentify,
  identify,
  init,
  logEvent,
  remove,
  reset,
  revenue,
  runQueuedFunctions,
  setDeviceId,
  setGroup,
  setOptOut,
  setSessionId,
  setTransport,
  setUserId,
  track
};
