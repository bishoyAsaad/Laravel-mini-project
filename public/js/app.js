(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


__webpack_require__(/*! ./main */ "./resources/js/main.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-menu').css('bottom', function () {
  var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prev().height();
  return value;
}).addClass('d-none');
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-menu').addClass('d-none');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-menu-toggle').click(function (e) {
  e.stopPropagation();

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next('.c-menu').hasClass('d-none')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-menu').addClass('d-none');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next('.c-menu').removeClass('d-none');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-menu').addClass('d-none');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.edit-comment').click(function () {
  var content = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.comment').find('.content');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#post" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value')).val(content.text().trim());
  var el = "<input value=" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(content).attr('value') + " type='hidden' name='comment_id'/>";
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#post" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value')).parent().append(el);
  window.scrollTo(0, jquery__WEBPACK_IMPORTED_MODULE_0___default()("#post" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value')).offset().top - window.outerHeight / 2);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#post" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value')).closest('.add-comment').find('.text').text('Edit Comment');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.edit-post').click(function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postModal').modal();
  var parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.post');
  var title = parent.find('.post-title').text().trim();
  var content = parent.find('.post-content').text().trim();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postModal').find('#title').val(title);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postModal').find('#content').val(content);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postModal').find('#post_id').val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value'));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postModal').find('#submitBtn').text('Edit');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.new-post').click(function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postModal').modal();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postModal').find('#title').val("");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postModal').find('#content').val("");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postModal').find('#post_id').val("");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#postModal').find('#submitBtn').text('Create');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.delete-post').click(function (e) {
  if (confirm('Are you sure you want to delete this Post ?')) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/post', {
      params: {
        post_id: e.currentTarget.attributes['value'].value
      }
    }).then(window.location.reload());
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.delete-user').click(function () {
  if (confirm('Are you sure you want to delete this User, his Comments and Posts ?')) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]('/user/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value')).then(window.location.reload());
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.edit-user').click(function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').modal();
  var el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.user');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').find('#user_id').val(el.attr('value'));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').find('#name').val(el.find('.name').text().trim());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').find('#email').val(el.find('.email').text().trim());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').find('#role').val(role(el.find('.role').text().trim()));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').find('#submitBtn').text('Edit');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('#add-user').click(function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').modal();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').find('#user_id').val("");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').find('#name').val("");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').find('#email').val("");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').find('#role').val("");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#userModal').find('#submitBtn').text('Create');
});

function role(string) {
  if (string == 'Admin') {
    return 1;
  } else if (string == 'Author') {
    return 2;
  } else {
    return 3;
  }
}

window.filter = function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.user').addClass('d-table-row').removeClass('d-none');

  if (e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.user').each(function (i, el) {
      if (role(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find('.role').text().trim()) != e) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).toggleClass('d-table-row d-none');
      }
    });
  }
};

var isTimeoutSet = false;

window.search = function (e) {
  if (e.value != "") {
    if (!isTimeoutSet) {
      isTimeoutSet = true;
      setTimeout(function () {
        if (e.value != "") {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/search?query=' + e.value).then(function (res) {
            console.log(res);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-dropdown').show();
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-dropdown').find('.content').empty();
            res.data.forEach(function (data) {
              var title = data.title.slice(0, 45) + ' ...';
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-dropdown').find('.content').append("<a href='/post/" + data.id + "'>\
                            <li class='p-1 border border-primary rounded m-1'>" + title + "</li>\
                            </a>");
            });

            if (res.data.length == 0) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-dropdown').find('.content').append('No Posts Found');
            }
          });
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-dropdown').hide();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-dropdown').find('.content').empty();
        }

        isTimeoutSet = false;
      }, 500);
    }
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-dropdown').hide();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-dropdown').find('.content').empty();
  }
};

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-dropdown').hide();

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/momentum/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /var/www/html/momentum/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);