"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HostRenderer = function (_a) {
    var content = _a.content;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, content.split(" ").map(function (word, index) {
        var urlPattern = /(https?:\/\/[^\s]+)/g;
        if (urlPattern.test(word)) {
            return (react_1["default"].createElement("span", { key: index },
                react_1["default"].createElement("a", { href: word, target: "_blank", rel: "noopener noreferrer", className: "text-primary underline" }, "302.AI"),
                " "));
        }
        return word + " ";
    })));
};
exports["default"] = HostRenderer;
