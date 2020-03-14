/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConnectionsManager.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ConnectionsManager.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function roundRect(ctx, x, y, width, height, radius, fill, text) {
  if (typeof radius === 'undefined') {
    radius = 5;
  }

  if (typeof radius === 'number') {
    radius = {
      tl: radius,
      tr: radius,
      br: radius,
      bl: radius
    };
  } else {
    var defaultRadius = {
      tl: 0,
      tr: 0,
      br: 0,
      bl: 0
    };

    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }

  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.fillText(text, x + 10, y + 35);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      videos: Object,
      createModal: false,
      deleteModal: false,
      unPicked: '',
      origin: '',
      destination: '',
      connectionTodelete: '',
      connections: Object,
      connectionsText: [],
      connected: '',
      root: false,
      chosenRoot: '',
      rootNumber: Number,
      meta: '',
      rectangles: {},
      mx: '',
      my: '',
      dragok: '',
      startX: '',
      startY: '',
      offsetX: '',
      offsetY: '',
      activeVideo: ''
    };
  },
  props: {
    json_videos: String,
    episode_id: '',
    token: String,
    json_connections: String,
    root_number: String
  },
  watch: {
    activeVideo: function activeVideo(id) {
      console.log('wow');

      if (id) {
        for (var i in this.rectangles) {
          var r = this.rectangles[i];

          if (r.isActive) {
            r.isActive = false;
          }

          if (i == id) {
            r.isActive = true;
          }
        }

        this.drawConnections('update');
      }
    }
  },
  methods: {
    createConnection: function createConnection() {
      var self = this;
      var origin = this.videos[this.origin].id;
      var destination = this.videos[this.destination].id;
      axios.post('/connection/add', {
        'entry_id': origin,
        'out_id': destination,
        'episode_id': parseInt(self.episode_id)
      }).then(function (response) {
        console.log(response.data);
        self.connections = response.data;
        self.createModal = false;
        self.drawConnections('update');
        self.$emit("redraw_connections", response.data);
      })["catch"](function (error) {
        console.log(error);
        self.createModal = false;
      });
    },
    deleteInitiate: function deleteInitiate() {
      this.deleteModal = true;
      var self = this;
      this.connections.forEach(function (item) {
        var connection = {};
        connection.id = item.id;
        var entry = item.entry_id;
        var out = item.out_id;
        self.videos.forEach(function (video) {
          if (video.id == entry) {
            connection.name = 'From: ' + video.name;
            return;
          }

          if (video.id == out) {
            connection.name += ' To: ' + video.name;
          }
        });
        self.connectionsText.push(connection);
      });
      console.log(self.connectionsText);
    },
    deleteConnection: function deleteConnection() {
      var id = this.connectionTodelete;
      var self = this;
      axios.post('/connection/delete', {
        'connection_id': id,
        'episode_id': parseInt(self.episode_id)
      }).then(function (response) {
        console.log(response.data);
        self.connections = response.data;
        self.deleteModal = false;
        self.drawConnections('update');
        self.$emit("redraw_connections", response.data);
      })["catch"](function (error) {
        console.log(error);
        self.deleteModal = false;
      });
    },
    setRoot: function setRoot() {
      var id = this.videos[this.chosenRoot].id;
      var self = this;
      axios.post('/episode/setroot', {
        'id': id,
        'episode_id': parseInt(self.episode_id)
      }).then(function (response) {
        console.log(response.data);
        self.root = false;
        self.rootNumber = response.data.root_video;
        self.videos.forEach(function (item) {
          if (item.id == response.data.root_video) {
            self.rectangles[item.id].isActive = true;
          } else {
            self.rectangles[item.id].isActive = false;
          }
        });
        self.drawConnections('update');
        self.$emit("set_root", response.data.root_video);
      })["catch"](function (error) {
        console.log(error);
        self.root = false;
      });
    },
    updatePosition: function updatePosition(data) {
      var self = this;
      axios.post('/video/edit', data).then(function (response) {
        var info = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    select: function select(e) {
      var _this = this;

      // tell the browser we're handling this mouse event
      e.preventDefault();
      e.stopPropagation(); // get the current mouse position

      var mx = parseInt(e.clientX - this.offsetX);
      var my = parseInt(e.clientY - this.offsetY); // test each rect to see if mouse is inside

      var flag = true;

      var _loop = function _loop(i) {
        var r = _this.rectangles[i]; // if yes, navigate preview to this rectangle

        if (mx > r.x && mx < r.x + r.width && my > r.y && my < r.y + r.height) {
          r.isActive = true;
          flag = false;
          var target;

          _this.videos.forEach(function (item) {
            if (item.id == i) {
              target = item;
            }

            ;
          });

          _this.$emit("change_target", target);
        } else {
          r.isActive = false;
        }
      };

      for (var i in this.rectangles) {
        _loop(i);
      }

      if (flag) {
        var parent = document.querySelector('.parent');
        parent.scrollTo(mx, my);
      }

      this.drawConnections('update');
    },
    myDown: function myDown(e) {
      // tell the browser we're handling this mouse event
      e.preventDefault();
      e.stopPropagation(); // get the current mouse position

      var parent = document.querySelector('.parent');
      this.px = parent.scrollLeft;
      this.py = parent.scrollTop;
      this.mx = parseInt(e.clientX - this.offsetX);
      this.my = parseInt(e.clientY - this.offsetY);
      parent.style.cursor = "grabbing"; // test each rect to see if mouse is inside

      this.dragok = false;

      for (var i in this.rectangles) {
        var r = this.rectangles[i]; // if yes, set that rects isDragging=true

        if (this.mx > r.x && this.mx < r.x + r.width && this.my > r.y && this.my < r.y + r.height) {
          this.dragok = true;
          r.isDragging = true;
        }
      }

      if (!this.dragok) {
        this.dragCanvas = true;
      } // save the current mouse position


      this.startX = this.mx;
      this.startY = this.my;
    },
    myUp: function myUp(e) {
      // tell the browser we're handling this mouse event
      e.preventDefault();
      e.stopPropagation();
      var canvas = document.getElementById("canvas");
      var BB = canvas.getBoundingClientRect();
      this.offsetX = BB.left;
      this.offsetY = BB.top;
      var parent = document.querySelector('.parent');
      parent.style.cursor = "auto"; // clear all the dragging flags

      this.dragok = false;
      this.dragCanvas = false;

      for (var i in this.rectangles) {
        if (this.rectangles[i].isDragging) {
          this.rectangles[i].isDragging = false;
          var position = {
            x: this.rectangles[i].x,
            y: this.rectangles[i].y
          };
          position = JSON.stringify(position);
          var request = {
            meta: position,
            id: i
          };
          this.updatePosition(request);
        }
      }
    },
    canvasMove: function canvasMove(dx, dy) {
      var parent = document.querySelector('.parent');
      var x = parent.scrollLeft;
      var y = parent.scrollTop;
      parent.scrollTo(x - dx, y - dy);
    },
    myMove: function myMove(e) {
      // tell the browser we're handling this mouse event
      e.preventDefault();
      e.stopPropagation(); // get the current mouse position

      this.mx = parseInt(e.clientX - this.offsetX);
      this.my = parseInt(e.clientY - this.offsetY); // calculate the distance the mouse has moved
      // since the last mousemove

      var dx = this.mx - this.startX;
      var dy = this.my - this.startY;

      if (this.dragCanvas) {
        this.canvasMove(dx, dy);
      } // move each rect that isDragging 
      // by the distance the mouse has moved
      // since the last mousemove


      for (var i in this.rectangles) {
        if (this.rectangles[i].isDragging) {
          this.rectangles[i].x += dx;
          this.rectangles[i].y += dy;
        }
      } // reset the starting mouse position for the next mousemove


      this.startX = this.mx;
      this.startY = this.my;

      if (this.dragok) {
        this.drawConnections('update');
      }
    },
    drawConnections: function drawConnections(type) {
      var self = this;
      var canvas = document.getElementById("canvas");
      var box = canvas.getContext("2d");
      box.clearRect(0, 0, 5000, 1000);
      var BB = canvas.getBoundingClientRect();
      this.offsetX = BB.left;
      this.offsetY = BB.top;
      this.meta.connections = [this.unPicked];
      var x = 20;
      var y = 0;
      var count = 0;
      this.videos.forEach(function (item) {
        var meta = JSON.parse(item.meta);
        var rectangle = canvas.getContext("2d");
        rectangle.font = "15px Arial";

        if (meta.x == undefined) {
          if (type == 'update') {
            if (self.rectangles[item.id].isActive) {
              roundRect(rectangle, self.rectangles[item.id].x, self.rectangles[item.id].y, 190, 70, 30, "#FFC300", item.name);
            } else {
              roundRect(rectangle, self.rectangles[item.id].x, self.rectangles[item.id].y, 190, 70, 30, "#BD4E4E", item.name);
            }
          } else {
            y = count * 60 + 10;
            count++;

            if (item.id == self.rootNumber) {
              roundRect(rectangle, x, y, 190, 70, 30, "#FFC300", item.name);
            } else {
              roundRect(rectangle, x, y, 190, 70, 30, "#BD4E4E", item.name);
            }

            if (item.id == self.rootNumber) {
              self.rectangles[item.id] = {
                isDragging: false,
                isActive: true,
                x: x,
                y: y,
                name: item.name,
                width: 190,
                height: 70
              };
            } else {
              self.rectangles[item.id] = {
                isDragging: false,
                isActive: false,
                x: x,
                y: y,
                name: item.name,
                width: 190,
                height: 70
              };
            }
          }
        } else {
          if (type == 'update') {
            if (self.rectangles[item.id].isActive) {
              roundRect(rectangle, self.rectangles[item.id].x, self.rectangles[item.id].y, 190, 70, 30, "#FFC300", item.name);
            } else {
              roundRect(rectangle, self.rectangles[item.id].x, self.rectangles[item.id].y, 190, 70, 30, "#BD4E4E", item.name);
            }
          } else {
            if (item.id == self.rootNumber) {
              roundRect(rectangle, meta.x, meta.y, 190, 70, 30, "#FFC300", item.name);
            } else {
              roundRect(rectangle, meta.x, meta.y, 190, 70, 30, "#BD4E4E", item.name);
            }

            if (item.id == self.rootNumber) {
              self.rectangles[item.id] = {
                isDragging: false,
                isActive: true,
                x: meta.x,
                y: meta.y,
                name: item.name,
                width: 190,
                height: 70
              };
            } else {
              self.rectangles[item.id] = {
                isDragging: false,
                isActive: false,
                x: meta.x,
                y: meta.y,
                name: item.name,
                width: 190,
                height: 70
              };
            }
          }
        }
      });
      this.connections.forEach(function (item) {
        var context = canvas.getContext('2d');
        context.strokeStyle = "#CCC4C6";
        var origin = self.rectangles[item.entry_id];
        var destination = self.rectangles[item.out_id];
        context.beginPath();
        var headlen = 20; // length of head in pixels

        var dx = destination.x - origin.x;
        var dy = destination.y + 35 - origin.y + 35;
        var angle = Math.atan2(dy, dx);

        if (origin.x <= destination.x) {
          if (origin.y >= destination.y) {
            context.moveTo(origin.x + 190, origin.y + 35);
            context.lineTo(destination.x, destination.y + 70);
            context.lineTo(destination.x - headlen * Math.cos(angle - Math.PI / 6), destination.y + 70 - headlen * Math.sin(angle - Math.PI / 6));
            context.moveTo(destination.x, destination.y + 70);
            context.lineTo(destination.x - headlen * Math.cos(angle + Math.PI / 6), destination.y + 70 - headlen * Math.sin(angle + Math.PI / 6));
          } else {
            context.moveTo(origin.x + 190, origin.y + 35);
            context.lineTo(destination.x, destination.y);
            context.lineTo(destination.x - headlen * Math.cos(angle - Math.PI / 6), destination.y - headlen * Math.sin(angle - Math.PI / 6));
            context.moveTo(destination.x, destination.y);
            context.lineTo(destination.x - headlen * Math.cos(angle + Math.PI / 6), destination.y - headlen * Math.sin(angle + Math.PI / 6));
          }
        } else {
          if (origin.y >= destination.y) {
            context.moveTo(origin.x, origin.y + 35);
            context.lineTo(destination.x + 190, destination.y + 70);
            context.lineTo(destination.x + 190 - headlen * Math.cos(angle - Math.PI / 6), destination.y + 70 - headlen * Math.sin(angle - Math.PI / 6));
            context.moveTo(destination.x + 190, destination.y + 70);
            context.lineTo(destination.x + 190 - headlen * Math.cos(angle + Math.PI / 6), destination.y + 70 - headlen * Math.sin(angle + Math.PI / 6));
          } else {
            context.moveTo(origin.x, origin.y + 35);
            context.lineTo(destination.x + 190, destination.y);
            context.lineTo(destination.x + 190 - headlen * Math.cos(angle - Math.PI / 6), destination.y - headlen * Math.sin(angle - Math.PI / 6));
            context.moveTo(destination.x + 190, destination.y);
            context.lineTo(destination.x + 190 - headlen * Math.cos(angle + Math.PI / 6), destination.y - headlen * Math.sin(angle + Math.PI / 6));
          }
        }

        context.stroke();
      });
      canvas.onmousedown = this.myDown;
      canvas.onmouseup = this.myUp;
      canvas.onmousemove = this.myMove;
      canvas.ondblclick = this.select;
    }
  },
  mounted: function mounted() {
    this.videos = JSON.parse(this.json_videos);
    this.connections = JSON.parse(this.json_connections);
    this.rootNumber = parseInt(this.root_number);
    var videos = {};
    this.videos.forEach(function (item) {
      var id = item.id;
      videos[id] = item;
    });
    this.meta = {
      videos: videos
    };
    this.unPicked = JSON.parse(JSON.stringify(this.meta.videos));

    if (this.rootNumber != 0) {
      delete this.unPicked[this.rootNumber];
    }

    this.drawConnections('mount');
    document.querySelector('.parent').scrollTo(0, 0);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CustomForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  props: {
    option: String,
    project_id: String,
    episode_id: String,
    route: String,
    token: String
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditorPreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditorPreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
=======
>>>>>>> 6d614cf1115e55b54fa7ddfcd175bd420d191b5d
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log(this.episode);
  },
  data: function data() {
    return {
      /*
      src: String,
      videos: Object,
      connections: Object,
      //rootNumber: Number,
      id: Number,
      // options: Array, // ОТРЕФАКТОРЕНО В COMPUTED.OPTIONS
      rootClass: 'active'
      scaled: false,
      */
      height: "48vh%",
      show_options: false
    };
  },
  props: {
    /*
    json_videos: String,
    root_number: String,
    json_connections: String,
    episode_id: Number,
    */
    project_preview: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    },
    episode: Object
  },
  computed: {
    /*
    options() {
    	let options = [];
    		let connections = this.episode.videos[this.episode.current_video_id].connections;
    		if(connections) {
    		console.log(connections)
    		//options.push()
    	}
    		return options;
    }
    */
  },
  methods: {
    end_video: function end_video(id) {
      this.show_options = true;
    },
<<<<<<< HEAD
    set_next_options: function set_next_options(id) {// # ОТРЕФАКТОРЕНО В COMPUTED.OPTIONS

      /*
      if(Array.isArray(this.connections)) {
      	this.rebuild()
      }
      let connections = this.connections[id]     
      let options = []   
      let self = this
      if(connections != undefined) {
      	connections.forEach(function(item) {
      		self.videos[item.out_id].class = 'non-active'
      		options.push(self.videos[item.out_id])
      		console.log(self.videos[item.out_id])
      	})
      	this.options = options
      }
      */
=======
    preload_videos: function preload_videos() {
      this.options.forEach(function (item) {
        axios.get(item.url_horizontal, {
          responseType: 'blob'
        }).then(function (response) {
          var source = URL.createObjectURL(response.data);
          item.url_horizontal = source;
          console.log(item.url_horizontal);
        });
      });
    },
    set_next_options: function set_next_options(id) {
      if (Array.isArray(this.connections)) {
        this.rebuild();
      }

      var connections = this.connections[id];
      var options = [];
      var self = this;

      if (connections != undefined) {
        connections.forEach(function (item) {
          self.videos[item.out_id]["class"] = 'non-active';
          options.push(self.videos[item.out_id]);
        });
        this.options = options;
      }

      this.preload_videos();
>>>>>>> 6d614cf1115e55b54fa7ddfcd175bd420d191b5d
    },
    rebuild: function rebuild() {
      /*
      let connections = {}
      this.connections.forEach(function(item) {
      	let id = item.entry_id
      	if (connections.hasOwnProperty(item.entry_id)) {
      	connections[item.entry_id].push(item)
      	}
      	else {
      		let layer = []
      		layer.push(item)
      		connections[item.entry_id] = layer
      	}
      })
      this.connections = connections
      */
    },
    choose: function choose(video) {
<<<<<<< HEAD
      this.episode.current_video_id = video.id;
      /*
      this.rootClass = 'non-active'
      this.options.forEach(function(item) {
      	if(item.id == video.id) {
      		item.class = 'active'
      	}
      })
      this.id = video.id
      this.options = []
      this.show_options = false
      let target = this.id
      this.$emit("change_target_preview", target)
      this.set_next_options(this.id)
      */
    }
  },
  watch: {
    /*
    rootNumber: function(id) {
    	if (id) {
    		this.id = this.rootNumber
    		this.src = this.videos[this.rootNumber].url
    		this.show_options = false
    		this.set_next_options(this.id)
    		this.cover = false
    		this.completion = 0
    	}
=======
      this.src = video.url_horizontal;
      this.id = video.id;
      this.options = [];
      this.show_options = false;
      var target = this.id;
      this.$emit("change_target_preview", target);
      this.set_next_options(this.id);
    }
  },
  watch: {
    rootNumber: function rootNumber(id) {
      if (id) {
        this.id = this.rootNumber;
        this.src = this.videos[this.rootNumber].url_horizontal;
        this.show_options = false;
        this.set_next_options(this.id);
        this.cover = false;
        this.completion = 0;
      }
>>>>>>> 6d614cf1115e55b54fa7ddfcd175bd420d191b5d
    }
    */
  },
  beforeMount: function beforeMount() {
    if (this.project_preview) {
      this.height = "100vh%";
    } //console.log(this.episode)

    /*
    this.videos = JSON.parse(this.json_videos)
    this.connections = JSON.parse(this.json_connections)
    this.rootNumber = parseInt(this.root_number)
    this.id = this.rootNumber
    let videos = {}
    this.videos.forEach(function(item) {
    	let id = item.id;
    	videos[id] = item;
    })
    this.videos = videos
    this.src = this.videos[this.rootNumber].url
    this.rebuild()
    */

<<<<<<< HEAD
=======
    this.videos = JSON.parse(this.json_videos);
    this.connections = JSON.parse(this.json_connections);
    this.rootNumber = parseInt(this.root_number);
    this.id = this.rootNumber;
    var videos = {};
    this.videos.forEach(function (item) {
      var id = item.id;
      videos[id] = item;
    });
    this.videos = videos;
    this.src = this.videos[this.rootNumber].url_horizontal;
    this.rebuild();
  },
  mounted: function mounted() {
    var self = this;
    window.addEventListener("orientationchange", function () {
      if (screen.orientation.angle == 90) {
        self.src = self.videos[self.rootNumber].url_horizontal;
        console.log(self.src);
      } else {
        self.src = self.videos[self.rootNumber].url_vertical;
        console.log(self.src);
      }
    });
>>>>>>> 6d614cf1115e55b54fa7ddfcd175bd420d191b5d
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProgressBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: Number,
      "default": 0
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      completion: 0,
      cover: true
    };
  },
  props: {
    source: String,
    id: Number,
    first: Boolean
  },
  methods: {
    playpause: function playpause(event) {
      if (this.$refs.videoElement.paused) {
        this.$refs.videoElement.play();
        this.cover = false;
      } else {
        this.$refs.videoElement.pause();
        this.cover = true;
      }
    },
    onTimeUpdate: function onTimeUpdate() {
      var video = this.$refs.videoElement;

      if (!isNaN(video.duration)) {
        var percent_complete = video.currentTime / video.duration;
        this.completion = percent_complete;
      }
    },
    onEnd: function onEnd() {
      console.log('Video end');
      this.$emit("end_video"); //this.$emit("end_video", this.id)
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#manager-root[data-v-08416e43] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column wrap;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    align-content: flex-start;\n}\n.controls[data-v-08416e43] {\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    width: 300px;\n    margin: 0 0 0 -150px;\n}\n.parent[data-v-08416e43] {\n    padding: 0;\n    overflow: hidden;\n}\n.layer[data-v-08416e43] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column;\n}\n.video[data-v-08416e43] {\n    background: #f00;\n    width: 100px;\n    height: 50px;\n    margin-bottom: 20px;\n    margin-right: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.active[data-v-02862bc0] {\r\n\tposition: static;\n}\n.non-active[data-v-02862bc0] {\r\n\tposition: absolute;\r\n\tleft: -9000px;\n}\n.preview[data-v-02862bc0] {\r\n\tposition: relative;\r\n\theight: 100%;\n}\n.chooseOptions[data-v-02862bc0] {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t        flex-flow: row wrap;\r\n\tz-index: 500;\r\n\tjustify-content: space-around;\r\n\theight: 100%;\r\n\tz-index: 1000;\n}\n.option[data-v-02862bc0] {\r\n\tposition: relative;\n}\n.option-background[data-v-02862bc0] {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t-webkit-box-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t        align-items: center;\r\n\tbackground: rgba(155,0,0,0.7);\r\n\tcursor: pointer;\r\n\tborder-radius: 10px;\r\n\t-webkit-transition: background .3s, -webkit-transform .3s;\r\n\ttransition: background .3s, -webkit-transform .3s;\r\n\ttransition: background .3s, transform .3s;\r\n\ttransition: background .3s, transform .3s, -webkit-transform .3s;\n}\n.option-background[data-v-02862bc0]:hover {\r\n\t-webkit-transform: scale(1.05);\r\n\t        transform: scale(1.05);\r\n\tbackground: rgba(155,0,0,0.8);\n}\r\n", ""]);
=======
exports.push([module.i, "\n.active[data-v-02862bc0] {\n    position: static;\n}\n.non-active[data-v-02862bc0] {\n    position: absolute;\n    left: -9000px;\n}\n.preview[data-v-02862bc0] {\n    position: relative;\n    height: 100%;\n}\n.chooseOptions[data-v-02862bc0] {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    z-index: 500;\n    justify-content: space-around;\n    height: 100%;\n    z-index: 1000;\n}\n.option[data-v-02862bc0] {\n    position: relative;\n}\n.option-background[data-v-02862bc0] {\n    display: -webkit-box;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    background: rgba(155,0,0,0.7);\n    cursor: pointer;\n    border-radius: 10px;\n    -webkit-transition: background .3s, -webkit-transform .3s;\n    transition: background .3s, -webkit-transform .3s;\n    transition: background .3s, transform .3s;\n    transition: background .3s, transform .3s, -webkit-transform .3s;\n}\n.option-background[data-v-02862bc0]:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    background: rgba(155,0,0,0.8);\n}\n", ""]);
>>>>>>> 6d614cf1115e55b54fa7ddfcd175bd420d191b5d

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.progressbar[data-v-d4a6a2ea] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 300;\r\n  height: 10px;\r\n  width: 100%;\r\n  background: #fff;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  overflow: hidden;\r\n  border-radius: 5px;\n}\n.filled-bar[data-v-d4a6a2ea] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  height: 100%;\r\n  width: 100%;\r\n  background: #000;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nvideo[data-v-9e3bdfbe] {\n    height: 100%;\n    width: auto;\n    max-width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConnectionsManager.vue?vue&type=template&id=08416e43&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ConnectionsManager.vue?vue&type=template&id=08416e43&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { height: "100%" }, attrs: { id: "manager-root" } },
    [
      _c("div", { staticClass: "controls" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-sm",
            staticStyle: { position: "fixed", bottom: "10px", left: "35%" },
            on: {
              click: function($event) {
                _vm.createModal = true
              }
            }
          },
          [_vm._v(" \n            Add connection\n        ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-sm",
            staticStyle: { position: "fixed", bottom: "10px", left: "45%" },
            on: { click: _vm.deleteInitiate }
          },
          [_vm._v(" \n            Delete connection\n        ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-sm",
            staticStyle: { position: "fixed", bottom: "10px", left: "55%" },
            on: {
              click: function($event) {
                _vm.root = true
              }
            }
          },
          [_vm._v(" \n            Set root\n        ")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.root,
              expression: "root"
            }
          ],
          staticClass: "dialog"
        },
        [
          _c("h2", [_vm._v("\n            Set root\n        ")]),
          _vm._v("\n        From: \n        "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.chosenRoot,
                  expression: "chosenRoot"
                }
              ],
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.chosenRoot = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            _vm._l(_vm.videos, function(video, index) {
              return _c("option", { domProps: { value: index } }, [
                _vm._v(
                  "\n                " +
                    _vm._s(video.name) +
                    " (" +
                    _vm._s(video.filename) +
                    ")\n            "
                )
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("button", { on: { click: _vm.setRoot } }, [
            _vm._v("\n            Set root\n        ")
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block btn-sm",
              staticStyle: {
                position: "absolute",
                left: "20px",
                bottom: "20px",
                right: "20px",
                width: "auto"
              },
              on: {
                click: function($event) {
                  _vm.root = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.createModal,
              expression: "createModal"
            }
          ],
          staticClass: "dialog"
        },
        [
          _c("h2", [_vm._v("\n            Connection\n        ")]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-9" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.origin,
                      expression: "origin"
                    }
                  ],
                  staticClass: "form-control",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.origin = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.videos, function(video, index) {
                  return _c("option", { domProps: { value: index } }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(video.name) +
                        " (" +
                        _vm._s(video.filename) +
                        ")\n                    "
                    )
                  ])
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-9" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.destination,
                      expression: "destination"
                    }
                  ],
                  staticClass: "form-control",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.destination = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.videos, function(video, index) {
                  return _c("option", { domProps: { value: index } }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(video.name) +
                        " (" +
                        _vm._s(video.filename) +
                        ")\n                    "
                    )
                  ])
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block btn-sm",
              staticStyle: {
                position: "absolute",
                left: "20px",
                bottom: "20px",
                right: "20px",
                width: "auto"
              },
              on: {
                click: function($event) {
                  _vm.createModal = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block btn-sm",
              on: { click: _vm.createConnection }
            },
            [_vm._v("\n            Add connection\n        ")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.deleteModal,
              expression: "deleteModal"
            }
          ],
          staticClass: "dialog"
        },
        [
          _c("h2", [_vm._v("\n            Connection delete\n        ")]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-9" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.connectionTodelete,
                      expression: "connectionTodelete"
                    }
                  ],
                  staticClass: "form-control",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.connectionTodelete = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.connectionsText, function(connection, index) {
                  return _c("option", { domProps: { value: connection.id } }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(connection.name) +
                        " \n                    "
                    )
                  ])
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block btn-sm",
              staticStyle: {
                position: "absolute",
                left: "20px",
                bottom: "20px",
                right: "20px",
                width: "auto"
              },
              on: {
                click: function($event) {
                  _vm.deleteModal = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block btn-sm",
              on: { click: _vm.deleteConnection }
            },
            [_vm._v("\n            Delete connection\n        ")]
          )
        ]
      ),
      _vm._v(" "),
      _vm._m(3)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("label", { staticClass: "col-form-label" }, [_vm._v("From:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("label", { staticClass: "col-form-label" }, [_vm._v("To:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("label", { staticClass: "col-form-label" }, [_vm._v("Connection:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "parent ebb-content",
        staticStyle: {
          position: "overflow: hidden",
          width: "100%",
          height: "100%"
        }
      },
      [_c("canvas", { attrs: { id: "canvas", width: "5000", height: "1000" } })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomForm.vue?vue&type=template&id=006eb400&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CustomForm.vue?vue&type=template&id=006eb400& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.option == "video"
      ? _c(
          "form",
          {
            attrs: {
              action: _vm.route,
              method: "POST",
              enctype: "multipart/form-data"
            }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "project_id" },
              domProps: { value: _vm.project_id }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "episode_id" },
              domProps: { value: _vm.episode_id }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "meta", value: "{}" }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "_token" },
              domProps: { value: _vm.token }
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "btn btn-primary btn-block btn-sm",
              attrs: { type: "submit", value: "Upload" }
            })
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.option == "episode"
      ? _c(
          "form",
          {
            attrs: {
              action: _vm.route,
              method: "POST",
              enctype: "multipart/form-data"
            }
          },
          [
            _vm._m(2),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "project_id" },
              domProps: { value: _vm.project_id }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "_token" },
              domProps: { value: _vm.token }
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "btn btn-primary btn-block btn-sm",
              attrs: { type: "submit", value: "Create episode" }
            })
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.option == "page"
      ? _c(
          "form",
          {
            attrs: {
              action: _vm.route,
              method: "POST",
              enctype: "multipart/form-data"
            }
          },
          [
            _vm._v("\n\t\t\tВот здесь тебе нужно всякое сделать Витя\n\t\t\t"),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "project_id" },
              domProps: { value: _vm.project_id }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: "_token" },
              domProps: { value: _vm.token }
            }),
            _vm._v(" "),
            _c("input", { attrs: { type: "submit", value: "Create page" } })
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c("label", { staticClass: "col-form-label" }, [_vm._v("Name:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", required: "", name: "name" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c("label", { staticClass: "col-form-label" }, [
          _vm._v("Horizontal video:")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "file", name: "horizontal_video", required: "" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c("label", { staticClass: "col-form-label" }, [
          _vm._v("Vertical video:")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "file", name: "vertical_video" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c("label", { staticClass: "col-form-label" }, [_vm._v("Name:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-9" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", required: "", name: "name" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditorPreview.vue?vue&type=template&id=02862bc0&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/EditorPreview.vue?vue&type=template&id=02862bc0&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "preview", style: { height: _vm.height } }, [
    _c(
      "div",
      {
        staticClass: "embed-responsive embed-responsive-16by9",
        attrs: { id: "video-holder" }
      },
      [
        _c("video-player", {
          ref: "videoPlayer",
          attrs: {
            source: _vm.episode.videos[_vm.episode.current_video_id].url
          },
          on: { end_video: _vm.end_video }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show_options,
            expression: "show_options"
          }
        ],
        staticClass: "chooseOptions row"
      },
      _vm._l(
        _vm.episode.videos[_vm.episode.current_video_id].connections,
        function(option) {
          return _c(
            "div",
            {
              staticClass: "col-md-6 option p-3",
              on: {
                click: function($event) {
                  return _vm.choose(option)
                }
              }
            },
            [
              _c("div", { staticClass: "option-background" }, [
                _vm._v("\n\t\t\t\t" + _vm._s(option.name) + "\n\t\t\t")
              ])
            ]
          )
        }
      ),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "progressbar" }, [
    _c("div", {
      staticClass: "filled-bar",
      style: { transform: "translate3d(-" + (1 - _vm.value) * 100 + "%, 0, 0)" }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "root_video_component" },
    [
      _c("video", {
        ref: "videoElement",
        attrs: {
          src: _vm.source,
          id: "video",
          preload: "auto",
          muted: "",
          autoplay: ""
        },
        domProps: { muted: true },
        on: {
          ended: _vm.onEnd,
          click: _vm.playpause,
          timeupdate: function($event) {
            return _vm.onTimeUpdate()
          }
        }
      }),
      _vm._v(" "),
      _c("progress-bar", { attrs: { value: _vm.completion } }),
      _vm._v(" "),
      _c(
        "svg",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.cover,
              expression: "cover"
            }
          ],
          ref: "svg",
          staticClass: "video-overlay-play-button",
          attrs: { viewBox: "0 0 200 200", alt: "Play video" },
          on: { click: _vm.playpause }
        },
        [
          _c("circle", {
            attrs: {
              cx: "100",
              cy: "100",
              r: "90",
              fill: "none",
              "stroke-width": "15",
              stroke: "#fff"
            }
          }),
          _vm._v(" "),
          _c("polygon", {
            attrs: { points: "70, 55 70, 145 145, 100", fill: "#fff" }
          })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.component('video-player', __webpack_require__(/*! ./components/VideoPlayer.vue */ "./resources/js/components/VideoPlayer.vue")["default"]);
Vue.component('custom-form', __webpack_require__(/*! ./components/CustomForm.vue */ "./resources/js/components/CustomForm.vue")["default"]);
Vue.component('connection-manager', __webpack_require__(/*! ./components/ConnectionsManager.vue */ "./resources/js/components/ConnectionsManager.vue")["default"]);
Vue.component('editor-preview', __webpack_require__(/*! ./components/EditorPreview.vue */ "./resources/js/components/EditorPreview.vue")["default"]);
Vue.component('progress-bar', __webpack_require__(/*! ./components/ProgressBar.vue */ "./resources/js/components/ProgressBar.vue")["default"]); //require('./video');

/***/ }),

/***/ "./resources/js/components/ConnectionsManager.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/ConnectionsManager.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConnectionsManager_vue_vue_type_template_id_08416e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConnectionsManager.vue?vue&type=template&id=08416e43&scoped=true& */ "./resources/js/components/ConnectionsManager.vue?vue&type=template&id=08416e43&scoped=true&");
/* harmony import */ var _ConnectionsManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectionsManager.vue?vue&type=script&lang=js& */ "./resources/js/components/ConnectionsManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ConnectionsManager_vue_vue_type_style_index_0_id_08416e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css& */ "./resources/js/components/ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConnectionsManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConnectionsManager_vue_vue_type_template_id_08416e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConnectionsManager_vue_vue_type_template_id_08416e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08416e43",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ConnectionsManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ConnectionsManager.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ConnectionsManager.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ConnectionsManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConnectionsManager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_style_index_0_id_08416e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConnectionsManager.vue?vue&type=style&index=0&id=08416e43&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_style_index_0_id_08416e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_style_index_0_id_08416e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_style_index_0_id_08416e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_style_index_0_id_08416e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_style_index_0_id_08416e43_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ConnectionsManager.vue?vue&type=template&id=08416e43&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/ConnectionsManager.vue?vue&type=template&id=08416e43&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_template_id_08416e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ConnectionsManager.vue?vue&type=template&id=08416e43&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ConnectionsManager.vue?vue&type=template&id=08416e43&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_template_id_08416e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConnectionsManager_vue_vue_type_template_id_08416e43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CustomForm.vue":
/*!************************************************!*\
  !*** ./resources/js/components/CustomForm.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomForm_vue_vue_type_template_id_006eb400___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomForm.vue?vue&type=template&id=006eb400& */ "./resources/js/components/CustomForm.vue?vue&type=template&id=006eb400&");
/* harmony import */ var _CustomForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomForm.vue?vue&type=script&lang=js& */ "./resources/js/components/CustomForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomForm_vue_vue_type_template_id_006eb400___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomForm_vue_vue_type_template_id_006eb400___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CustomForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CustomForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/CustomForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CustomForm.vue?vue&type=template&id=006eb400&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/CustomForm.vue?vue&type=template&id=006eb400& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomForm_vue_vue_type_template_id_006eb400___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CustomForm.vue?vue&type=template&id=006eb400& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CustomForm.vue?vue&type=template&id=006eb400&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomForm_vue_vue_type_template_id_006eb400___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomForm_vue_vue_type_template_id_006eb400___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/EditorPreview.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/EditorPreview.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditorPreview_vue_vue_type_template_id_02862bc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorPreview.vue?vue&type=template&id=02862bc0&scoped=true& */ "./resources/js/components/EditorPreview.vue?vue&type=template&id=02862bc0&scoped=true&");
/* harmony import */ var _EditorPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorPreview.vue?vue&type=script&lang=js& */ "./resources/js/components/EditorPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditorPreview_vue_vue_type_style_index_0_id_02862bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css& */ "./resources/js/components/EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditorPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditorPreview_vue_vue_type_template_id_02862bc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditorPreview_vue_vue_type_template_id_02862bc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02862bc0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/EditorPreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/EditorPreview.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/EditorPreview.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EditorPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditorPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_style_index_0_id_02862bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditorPreview.vue?vue&type=style&index=0&id=02862bc0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_style_index_0_id_02862bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_style_index_0_id_02862bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_style_index_0_id_02862bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_style_index_0_id_02862bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_style_index_0_id_02862bc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/EditorPreview.vue?vue&type=template&id=02862bc0&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/EditorPreview.vue?vue&type=template&id=02862bc0&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_template_id_02862bc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./EditorPreview.vue?vue&type=template&id=02862bc0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/EditorPreview.vue?vue&type=template&id=02862bc0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_template_id_02862bc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorPreview_vue_vue_type_template_id_02862bc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ProgressBar.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true& */ "./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true&");
/* harmony import */ var _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=script&lang=js& */ "./resources/js/components/ProgressBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& */ "./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d4a6a2ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProgressBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProgressBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProgressBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProgressBar.vue?vue&type=style&index=0&id=d4a6a2ea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_d4a6a2ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProgressBar.vue?vue&type=template&id=d4a6a2ea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_d4a6a2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPlayer_vue_vue_type_template_id_9e3bdfbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true& */ "./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true&");
/* harmony import */ var _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=script&lang=js& */ "./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css& */ "./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoPlayer_vue_vue_type_template_id_9e3bdfbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoPlayer_vue_vue_type_template_id_9e3bdfbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9e3bdfbe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VideoPlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_9e3bdfbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_9e3bdfbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPlayer_vue_vue_type_template_id_9e3bdfbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/vendor.scss":
/*!************************************!*\
  !*** ./resources/sass/vendor.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/vendor.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\interactor\interactor\resources\js\app.js */"./resources/js/app.js");
__webpack_require__(/*! C:\interactor\interactor\resources\sass\app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! C:\interactor\interactor\resources\sass\vendor.scss */"./resources/sass/vendor.scss");


/***/ })

/******/ });