require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prods__ = __webpack_require__(3);



const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const ReviewSchema = new Schema({
    title: String,
    text: String,
    food: { type: Schema.Types.ObjectId, ref: 'food' }
});

const Review = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Review', ReviewSchema);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Food; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__review__ = __webpack_require__(2);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const FoodSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    review: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

const Food = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Food', FoodSchema);



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pug__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_route__ = __webpack_require__(10);




const { PORT, DB_url } = process.env;


const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connect(DB_url);
var db = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('ça marche ici'); // c'est pour tester la connection de mangodb avec un message d'erreur //
});

//PUG//
app.set('views', __WEBPACK_IMPORTED_MODULE_5_path___default.a.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: false }));
app.use(__WEBPACK_IMPORTED_MODULE_3_volleyball___default.a);
app.use("/foodtruck", __WEBPACK_IMPORTED_MODULE_6__routes_route__["a" /* foodRouter */]);

app.listen(PORT, () => {
    console.log(`test!:${PORT}`);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("pug");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foodRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_review__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_prods__ = __webpack_require__(3);




const foodRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

foodRouter.post('/add', (req, res) => {
    const newFood = new __WEBPACK_IMPORTED_MODULE_3__models_prods__["a" /* Food */](req.body);
    newFood.save((err, saveFood) => {
        if (err) res.send(err);
        res.json(savefood);
    });
});

foodRouter.get('/add', (req, res) => {
    res.render('foodtruck');
});
foodRouter.get('/', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_3__models_prods__["a" /* Food */].find({}, (err, foods) => {
        if (err) res.send(err);
        res.render('index');
    });
});

foodRouter.get('/:id', (req, res) => {
    let _id = req.params.id;
    __WEBPACK_IMPORTED_MODULE_3__models_prods__["a" /* Food */].findById({ _id }, (err, food) => {
        if (err) res.send(err);
        res.json(food);
    });
});
foodRouter.delete('/:id', (req, res) => {
    let _id = req.params.id;
    __WEBPACK_IMPORTED_MODULE_3__models_prods__["a" /* Food */].remove({ _id }, (err, result) => {
        if (err) res.send('err');
        res.send('degage');
    });
});

//

foodRouter.post('/review/add/:id', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_3__models_prods__["a" /* Food */].findById(req.params.id, (err, food) => {
        if (err) res.send(err);

        const newReview = new __WEBPACK_IMPORTED_MODULE_2__models_review__["a" /* Review */](req.body);
        newReview.save((err, review) => {
            if (err) res.send(err);
            food.review.push(newReview);
            food.save((err, review) => {
                if (err) res.send(err);
                res.json({ message: 'ajout add' });
            });
        });
    });
});

foodRouter.put('/:id', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_3__models_prods__["a" /* Food */].findById({ _id: req.params.id }, (err, food) => {
        if (err) res.send(err);
        Object.assign(food, req.body).save((err, food) => {
            if (err) res.send(err);
            res.json({ food });
        });
    });
});



/***/ })
/******/ ]);
//# sourceMappingURL=main.map