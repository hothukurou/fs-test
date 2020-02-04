"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
fs_1.default.writeFileSync("./aaaa", "aaa");
var data = fs_1.default.readFileSync("./aaaa", "utf-8");
console.log(data);
