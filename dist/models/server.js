"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.users, user_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map