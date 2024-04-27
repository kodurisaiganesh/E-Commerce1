"use strict";
(() => {
var exports = {};
exports.id = 9937;
exports.ids = [9937];
exports.modules = {

/***/ 46517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 46792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/address/delete-address/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(36519);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(53488);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/database/index.js
var database = __webpack_require__(17495);
// EXTERNAL MODULE: ./src/middleware/AuthUser.js
var AuthUser = __webpack_require__(93214);
// EXTERNAL MODULE: ./src/models/address.js
var address = __webpack_require__(74911);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(12023);
;// CONCATENATED MODULE: ./src/app/api/address/delete-address/route.js




const dynamic = "force-dynamic";
async function DELETE(req) {
    try {
        await (0,database/* default */.Z)();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        if (!id) {
            return next_response/* default */.Z.json({
                success: false,
                message: "Address ID is required"
            });
        }
        const isAuthUser = await (0,AuthUser/* default */.Z)(req);
        if (isAuthUser) {
            const deletedAddress = await address/* default */.Z.findByIdAndDelete(id);
            if (deletedAddress) {
                return next_response/* default */.Z.json({
                    success: true,
                    message: "Address is deleted successfully"
                });
            } else {
                return next_response/* default */.Z.json({
                    success: false,
                    message: "failed to delete address ! Please try again"
                });
            }
        } else {
            return next_response/* default */.Z.json({
                success: false,
                message: "You are not authenticated"
            });
        }
    } catch (e) {
        console.log(e);
        return next_response/* default */.Z.json({
            success: false,
            message: "Something went wrong ! Please try again later"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Faddress%2Fdelete-address%2Froute&name=app%2Fapi%2Faddress%2Fdelete-address%2Froute&pagePath=private-next-app-dir%2Fapi%2Faddress%2Fdelete-address%2Froute.js&appDir=F%3A%5CProject%5Cmyntra%5Csrc%5Capp&appPaths=%2Fapi%2Faddress%2Fdelete-address%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/address/delete-address/route","pathname":"/api/address/delete-address","filename":"route","bundlePath":"app/api/address/delete-address/route"},"resolvedPagePath":"F:\\Project\\myntra\\src\\app\\api\\address\\delete-address\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/address/delete-address/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1697,8451,2023,6447,2141], () => (__webpack_exec__(46792)));
module.exports = __webpack_exports__;

})();