"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var TemplateSchema = new _mongoose.default.Schema({
  name: String,
  date: String
}, {
  collection: "templates",
  versionKey: false,
  strict: false
});

var _default = _mongoose.default.model("templates", TemplateSchema);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdGVtcGxhdGUuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJkYXRlIiwiY29sbGVjdGlvbiIsInZlcnNpb25LZXkiLCJzdHJpY3QiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLElBQUlDLGtCQUFTQyxNQUFiLENBQ3JCO0FBQ0VDLEVBQUFBLElBQUksRUFBRUMsTUFEUjtBQUVFQyxFQUFBQSxJQUFJLEVBQUVEO0FBRlIsQ0FEcUIsRUFLckI7QUFBRUUsRUFBQUEsVUFBVSxFQUFFLFdBQWQ7QUFBMkJDLEVBQUFBLFVBQVUsRUFBRSxLQUF2QztBQUE4Q0MsRUFBQUEsTUFBTSxFQUFFO0FBQXRELENBTHFCLENBQXZCOztlQVFlUCxrQkFBU1EsS0FBVCxDQUFlLFdBQWYsRUFBNEJULGNBQTVCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFRlbXBsYXRlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIG5hbWU6IFN0cmluZyxcbiAgICBkYXRlOiBTdHJpbmdcbiAgfSxcbiAgeyBjb2xsZWN0aW9uOiBcInRlbXBsYXRlc1wiLCB2ZXJzaW9uS2V5OiBmYWxzZSwgc3RyaWN0OiBmYWxzZSB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcInRlbXBsYXRlc1wiLCBUZW1wbGF0ZVNjaGVtYSk7XG4iXX0=