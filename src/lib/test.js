"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var axios_1 = require("axios");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.post('http://localhost:5000/api/v1/chat', { /* your data here */})];
                case 1:
                    response = _a.sent();
                    data = response.data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error during the API call:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var lyrics = function generateRandomValue() {
    return Math.floor(Math.random() * 151) + 150;
};
app.post('/chat/completions', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var writeWrap, simpleW, _i, _a, l, _b, _c, x;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                res.writeHead(200, {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive'
                });
                writeWrap = function (content) { return res.write("data: ".concat(content, "\n\n")); };
                writeWrap(JSON.stringify({ "id": "chatcmpl-123", "object": "chat.completion.chunk", "created": 1694268190, "model": "gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices": [{ "index": 0, "delta": { "role": "assistant", "content": "" }, "logprobs": null, "finish_reason": null }] }));
                simpleW = function (c) {
                    return writeWrap(JSON.stringify({ "id": "chatcmpl-123", "object": "chat.completion.chunk", "created": 1694268190, "model": "gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices": [{ "index": 0, "delta": { "content": c }, "logprobs": null, "finish_reason": null }] }));
                };
                _i = 0, _a = lyrics.split('\n');
                _d.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 7];
                l = _a[_i];
                _b = 0, _c = l.split('\b');
                _d.label = 2;
            case 2:
                if (!(_b < _c.length)) return [3 /*break*/, 5];
                x = _c[_b];
                simpleW(x);
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, generateRandomValue()); })];
            case 3:
                _d.sent();
                _d.label = 4;
            case 4:
                _b++;
                return [3 /*break*/, 2];
            case 5:
                simpleW('\n');
                _d.label = 6;
            case 6:
                _i++;
                return [3 /*break*/, 1];
            case 7:
                writeWrap(JSON.stringify({ "id": "chatcmpl-123", "object": "chat.completion.chunk", "created": 1694268190, "model": "gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices": [{ "index": 0, "delta": {}, "logprobs": null, "finish_reason": "stop" }] }));
                res.write("data: [DONE]\n\n");
                res.end();
                return [2 /*return*/];
        }
    });
}); });
var port = 3500;
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
