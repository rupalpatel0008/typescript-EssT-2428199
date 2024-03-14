var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isAuthenticated: function () {
        return true;
    },
    isInRole: function (role) {
        return this.roles.contains(role);
    }
};
function authorize(role) {
    return function authorizeDecorator(target, property, descriptor) {
        var wrapped = descriptor.value;
        descriptor.value = function () {
            if (!currentUser.isAuthenticated()) {
                throw Error("User is not authenticated");
            }
            if (!currentUser.isInRole(role)) {
                throw Error("User not in role ".concat(role));
            }
            return wrapped.apply(this, arguments);
        };
    };
}
function freeze(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
function singleton(constructor) {
    var _a;
    return _a = /** @class */ (function (_super) {
            __extends(Singleton, _super);
            function Singleton() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                if (_a._instance) {
                    throw Error("Duplicate instance");
                }
                _a._instance = _this;
                return _this;
            }
            return Singleton;
        }(constructor)),
        _a._instance = null,
        _a;
}
var ContactRepository = function () {
    var _classDecorators = [freeze, singleton];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getContactById_decorators;
    var _save_decorators;
    var ContactRepository = _classThis = /** @class */ (function () {
        function ContactRepository_1() {
            this.contacts = (__runInitializers(this, _instanceExtraInitializers), []);
        }
        ContactRepository_1.prototype.getContactById = function (id) {
            var contact = this.contacts.find(function (x) { return x.id === id; });
            return contact;
        };
        ContactRepository_1.prototype.save = function (contact) {
            var existing = this.getContactById(contact.id);
            if (existing) {
                Object.assign(existing, contact);
            }
            else {
                this.contacts.push(contact);
            }
        };
        return ContactRepository_1;
    }());
    __setFunctionName(_classThis, "ContactRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getContactById_decorators = [authorize("ContactViewer")];
        _save_decorators = [authorize("ContactEditor")];
        __esDecorate(_classThis, null, _getContactById_decorators, { kind: "method", name: "getContactById", static: false, private: false, access: { has: function (obj) { return "getContactById" in obj; }, get: function (obj) { return obj.getContactById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _save_decorators, { kind: "method", name: "save", static: false, private: false, access: { has: function (obj) { return "save" in obj; }, get: function (obj) { return obj.save; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ContactRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ContactRepository = _classThis;
}();
