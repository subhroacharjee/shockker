"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const SockerManager_1 = require("@LIB/SockerManager");
const Router_1 = require("@LIB/Router");
const Socker = SockerManager_1.SockerManager.getInstance();
exports.Router = Router_1.Router;
exports.default = Socker;
