(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Courier New, Courier, monospace;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\n.project-link {\n  -webkit-text-decoration: solid underline 1px;\n          text-decoration: solid underline 1px;\n  color: #48515F;\n}\n\n.anchor {\n  display: block;\n  height: 75px;\n  margin-top: -63px;\n  visibility: hidden;\n}\n\n.contrast-color {\n  background-color: #E69D89;\n}\n\n.contrast-color-two {\n  background-color: #606D80;\n}\n\n.jlogo {\n  width: 34px;\n  height: 43px;\n}\n\nheader {\n  padding: 18vh 1vh 4vh 1vh;\n}\n\nimg {\n  width: 40vh;\n  height: 40vh;\n}\n\n.scholar-img {\n  width: 30vh;\n  height: 30vh;\n}\n\n#darkText a {\n  color: #486BB6;\n}\n\n.navigation {\n  background-color: white;\n}\n\n.section {\n  padding: 10vh 2vh 10vh 2vh;\n}\n\n.title {\n  width: 100%;\n  line-height: 15vh;\n}\n\n.myName {\n  vertical-align: middle;\n  display: inline-block;\n  margin: 0 10vh 0 10vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHNvbGlkIHVuZGVybGluZSAxcHg7XG4gIGNvbG9yOiAjNDg1MTVGO1xufVxuXG4uYW5jaG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNzVweDtcbiAgbWFyZ2luLXRvcDogLTYzcHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNvbnRyYXN0LWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2OUQ4OTtcbn1cblxuLmNvbnRyYXN0LWNvbG9yLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDZEODA7XG59XG5cbi5qbG9nbyB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDQzcHg7XG59XG5cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDE4dmggMXZoIDR2aCAxdmg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA0MHZoO1xuICBoZWlnaHQ6IDQwdmg7XG59XG5cbi5zY2hvbGFyLWltZyB7XG4gIHdpZHRoOiAzMHZoO1xuICBoZWlnaHQ6IDMwdmg7XG59XG5cbiNkYXJrVGV4dCBhIHtcbiAgY29sb3I6ICM0ODZCQjY7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMTB2aCAydmggMTB2aCAydmg7XG59XG5cbi50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMTV2aDtcbn1cblxuLm15TmFtZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwdmggMCAxMHZoO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <!-- Navigation Bar -->\n  <nav class=\"navbar navbar-default fixed-top navigation contrast-color text-light\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#title\"><img class=\"jlogo\" src=\"../../assets/logo.png\" alt=\"logo\"> Janine Jay</a>\n      <ul class=\"nav\">\n        <li><a class=\"nav-link text-dark\" href=\"#experience\">Experience</a></li>\n        <li><a class=\"nav-link text-dark\" href=\"#education\">Education</a></li>\n        <li><a class=\"nav-link text-dark\" href=\"#skills\">Skills</a></li>\n        <li><a class=\"nav-link text-dark\" href=\"#projects\">Projects</a></li>\n        <li><a class=\"nav-link text-dark\" href=\"#contact\">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <header class=\"contrast-color text-white\" id=\"title\">\n    <div class=\" text-center title\">\n      <img src=\"../assets/versailles.jpg\" class=\"rounded border border-light\" alt=\"versailles\">\n      <h1 class=\"myName\"> Janine Jay </h1>\n      <img src=\"../assets/Google.jpg\" class=\"rounded border border-light\" alt=\"google\">\n    </div>\n  </header>\n\n  <section id=\"about\" class=\"section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto text-center\">\n          <p class=\"lead\">Software Engineer ~ Front End Developer ~ UX/UI Designer</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Experience -->\n  <section class=\"contrast-color-two text-light section\">\n    <span class=\"anchor\" id=\"experience\"></span>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <h3>Experience</h3>\n          <br>\n\n          <!-- Liberty Mutual -->\n          <h4>Liberty Mutual Insurance</h4>\n          <p></p>\n          <p><em>Software Engineer</em> ~ Boston, MA September 2018-Present</p>\n          <ul>\n            <li>Joined as part of the TechStart Technology Leadership Development program</li>\n            <li>Full-stack engineer for agile web application development using JavaScript, PostgreSQL, React ,\n              HTML/CSS, Java</li>\n            <li>Created a complex HR compensation web application for our business partners to streamline a service\n              which would manually take multiple weeks into various database functions that run in less than a half hour\n            </li>\n            <li>Created a web application that organized and automated various HR practices and approvals in a\n              traceable, single-source system</li>\n            <li>Uses skills in: AWS, BDD, TDD, Application Monitoring, Data Visualization, Accessibility Development\n            </li>\n          </ul>\n          <br><br>\n\n          <!-- Cigna -->\n          <h4>Cigna Inc.</h4>\n          <p><em>Technical Analyst Intern</em> ~ Bloomfield, CT May-August 2017</p>\n          <ul>\n            <li>TECDP Summer Intern at Cigna working in the Software Engineering and Innovation team as an Application\n              Developer</li>\n            <li>Contributed to a team working on rewriting a company website from AngularJS to Angular 2</li>\n            <li>Worked on the front end development team using HTML, CSS, and TypeScript in an Angular framework for web\n              development for a company-wide movement challenge. This product not only integrated with various movement\n              trackers (Apple Watch, Garmin, etc), but also was so highly regarded, that the team packed and sold it as\n              a general product to the companies commercial clients</li>\n            <li>Worked in User Interface Design for web development using the popular UI tool Sketch</li>\n            <li>Participated in an intern capstone project team by building the entire front end of a web application\n            </li>\n          </ul>\n          <br><br>\n\n          <!-- Houlihan Lawrence -->\n          <h4>Houlihan Lawrence</h4>\n          <p><em>Assistant</em> ~ Greenwich, CT May 2015-August 2016</p>\n          <ul>\n            <li>Worked as an administrative assistant to two popular and highly regarded real estate agents</li>\n            <li>Kept both agents' online listings up to date, maintained information in the local real estate database,\n              created and managed online marketing, assisted in staging of homes, and interfaced with town\n              administrators</li>\n            <li>Utilized my design and computer skills to expand the agents' online presence as well as develop\n              materials for print and distribution</li>\n          </ul>\n          <br><br>\n\n          <!-- MakerBot Inc. -->\n          <h4>MakerBot Inc.</h4>\n          <p><em>Intern / Retail Operator</em> ~ Greenwich, CT Seasonal: June 2014-January 2015</p>\n          <ul>\n            <li>Hired to sell and maintain various 3D printers and scanners in the store</li>\n            <li>Held community events to increase education of 3D printing and its various uses</li>\n            <li>Taught classes on both the printer hardware and 3D modeling software</li>\n            <li>Took away increased skills in customer relations as well as learning new technologies on the spot</li>\n          </ul>\n          <br>\n          <img src=\"../assets/Scholarship_Badge.jpg\" alt=\"GHC Scholar Badge\"\n            class=\"scholar-img rounded border border-light mx-auto d-block\">\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Education -->\n  <section class=\"section\">\n    <span class=\"anchor\" id=\"education\"></span>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <h3>Education</h3>\n          <br>\n\n          <!-- Quinnipiac -->\n          <h4>Quinnipiac University</h4>\n          <h5>BS Software Engineering ~ May 2018 ~ Magna Cum Laude</h5>\n          <h6>Minor in Mathematics</h6>\n          <h6>Relevant Courses:</h6>\n          <ul>\n            <li>Programming and Problem Solving</li>\n            <li>Object Oriented Design</li>\n            <li>Data Structures and Analysis</li>\n            <li>Introduction to Software Development</li>\n            <li>Algorithm Design</li>\n            <li>Software Design and Development</li>\n            <li>Computer Networking</li>\n            <li>Softare and Healthcare</li>\n            <li>Software Requirements Analysis </li>\n            <li>Software Project Management</li>\n            <li>Software Senior Capstone</li>\n          </ul>\n          <h5>Organizations:</h5>\n          <ul>\n            <li>Quinnipiac Computing Club ~ Founding Member & President</li>\n            <li>Quinnipiac Honors Program ~ Member</li>\n            <li>QU Engineering Student Organization ~ Member</li>\n            <li>Alpha Delta Pi ~ Sister & Recruitment Information Manager</li>\n            <li>University Innovation Fellows ~ Fellow</li>\n            <li>Society of Women Engineers ~ Member</li>\n          </ul>\n          <h5>Projects:</h5>\n          <ul>\n            <li><a class=\"project-link\" href=\"https://github.com/janinerjay/QUietNight\">QUiet Night</a></li>\n            <li><a class=\"project-link\" href=\"https://github.com/janinerjay/YodaSpeak\">Yoda Speaks</a></li>\n            <li><a class=\"project-link\" href=\"https://github.com/janinerjay/SER360\">CDS Insulin Project</a></li>\n            <li><a class=\"project-link\" href=\"https://github.com/janinerjay/340-Project\">Buck-Cats</a></li>\n          </ul>\n          <br><br>\n\n          <!-- Queen Mary -->\n          <h5>Queen Mary University of London</h5>\n          <p>During Spring of 2017, I studied in London, England\n            and was priviledged to travel around continental Europe</p>\n          <h6>Relevant Courses:</h6>\n          <ul>\n            <li>Graphical User Interfaces</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Skills -->\n  <section class=\"contrast-color text-light section\">\n    <span class=\"anchor\" id=\"skills\"></span>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <h3>Skills</h3>\n          <br>\n          <ul>\n            <li>HTML/CSS</li>\n            <li>JavaScript</li>\n            <li>TypeScript</li>\n            <li>PostgreSQL</li>\n            <li>React</li>\n            <li>Bootstrap</li>\n            <li>Agile Methodoligies</li>\n            <li>Git</li>\n            <li>Angular</li>\n            <li>Java</li>\n            <li>User Interface Design</li>\n            <li>Object Oriented Design</li>\n            <li>Scala</li>\n            <li>Sketch</li>\n            <li>Android SDK</li>\n            <li>iOS</li>\n            <li>MakerBot 3D Printers</li>\n            <li>Microsoft Office</li>\n          </ul>\n          <br>\n\n          <h5>Special Skills</h5>\n          <ul>\n            <li>Makes a mean peach-blueberry pie</li>\n            <li>Avid snowblader</li>\n            <li>Can rock a dance floor for 5+ hours</li>\n            <li>One of history's greatest minds in the construction of snow forts</li>\n            <li>Can belt \"Carry On My Wayward Son\" at the top of my lungs</li>\n            <li>Master with a soldering iron</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Volunteering -->\n  <section id=\"darkText\" class=\"section\">\n    <span class=\"anchor\" id=\"projects\"></span>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <h3>Volunteering</h3>\n          <br>\n          <h4>Beacon Hill Civic Association</h4>\n          <h5>Green Committee ~ Chair</h5>\n          <p>The Green Committee aims to support and encourage sustainable living for Beacon Hill residents and\n            businesses.</p>\n          <ul>\n            <li>Advocated for a residential curbside composting through the City of Boston which is now starting a pilot\n              program</li>\n            <li>Educated residents on recycling right and responsible consumerism through a weekly newsletter column\n            </li>\n            <li>Ran a table at a local festival with an interactive exhibit to educate local children about composting\n            </li>\n            <li>Most recent initiative is working to encourage zero-waste packaging for local businesses, particularly\n              those in the food and beverage industry</li>\n          </ul>\n          <h5>Young Friends ~ Chair</h5>\n          <p>Young Friends is an organization where we host monthly meetups for young professionals in the neighborhood.\n          </p>\n          <ul>\n            <li>Through consistent outreach, as well as welcoming interactions at our meetups, our attendance is up by\n              50% in the last two years</li>\n            <li>Our online meetups during Covid were well attended due to their engaging atmosphere</li>\n          </ul>\n          <h5>Streets & Sidewalks ~ Co-Chair</h5>\n          <p>The Streets & Sidewalks committee aims to recognize and address issues of maintenance and cleanliness of\n            the historic district of Beacon Hill, and work with the city of Boston officials to rectify any problems.\n          </p>\n          <ul>\n            <li>Created the 'Brick By Brick' initiative, a cleanup effort, as a grassroots effort around the\n              neighborhood</li>\n            <li>Advocated to change trash days from Monday/Friday to Monday/Thursday to be more spread out in the week\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Contact -->\n  <section class=\"contrast-color-two text-light section\">\n    <span class=\"anchor\" id=\"contact\"></span>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mx-auto\">\n          <h3>Contact</h3>\n          <br>\n\n          <h5>I would love to get in touch with you!</h5>\n          <!-- Email -->\n          <a href=\"mailto:janinerjay@icloud.com\">janinerjay@icloud.com</a>\n          <br><br>\n\n          <h4>Around the Web</h4>\n          <!-- GitHub -->\n          <a href=\"https://github.com/janinerjay\" target=\"_blank\">Github</a>\n          <br>\n\n          <!-- Linked In -->\n          <a href=\"https://www.linkedin.com/in/janinerjay\" target=\"_blank\">LinkedIn</a>\n          <br>\n\n          <!-- Resume: Code Version -->\n          <a href=\"../../assets/Jay_Developer_Resume.pdf\" download>My Resume: Developer Version</a>\n          <br>\n\n          <!-- Resume: PR Version -->\n          <a href=\"../../assets/Jay_Resume.pdf\" download>My Resume: HR Version</a>\n\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Footer -->\n  <footer id=\"footer\" class=\"py-5 contrast-color-two text-light\">\n    <div class=\"container\">\n      <p class=\"m-0 text-center text-white\">Copyright &copy; Janine Jay 2022</p>\n    </div>\n    <!-- /.container -->\n  </footer>\n\n  <!-- Custom JavaScript for this theme -->\n  <script src=\"js/scrolling-nav.js\"></script>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jjninja';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/janinerjay/Documents/Personal Website/jjninja/jjninja/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map