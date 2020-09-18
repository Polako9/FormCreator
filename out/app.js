var app =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/LocStorage.ts
;
var LocStorage = /** @class */ (function () {
    function LocStorage() {
    }
    LocStorage.prototype.saveDocument = function (values, document_id) {
        var id;
        if (document_id != null) {
            this.removeDocument(document_id);
            id = document_id;
        }
        else
            id = 'document-' + Date.now();
        localStorage.setItem(id, JSON.stringify(values));
        var docs = this.getDocuments();
        docs.push(id);
        localStorage.setItem('docs', JSON.stringify(docs));
        return id;
    };
    LocStorage.prototype.loadDocument = function (id) {
        return JSON.parse(localStorage.getItem(id));
    };
    LocStorage.prototype.removeDocument = function (id) {
        localStorage.removeItem(id);
        var docs = JSON.parse(localStorage.getItem('docs'));
        localStorage.setItem('docs', JSON.stringify(docs.filter(function (doc) { return doc != id; })));
    };
    LocStorage.prototype.getDocuments = function () {
        var docs = JSON.parse(localStorage.getItem('docs'));
        if (docs == null)
            return [];
        return docs;
    };
    LocStorage.prototype.saveForm = function (fields) {
        var id = 'form-' + Date.now();
        localStorage.setItem(id, JSON.stringify(fields));
        var forms = this.getForms();
        forms.push(id);
        localStorage.setItem('forms', JSON.stringify(forms));
    };
    LocStorage.prototype.getForms = function () {
        var forms = JSON.parse(localStorage.getItem('forms'));
        if (forms == null)
            return [];
        return forms;
    };
    LocStorage.prototype.loadForm = function (id) {
        return JSON.parse(localStorage.getItem(id));
    };
    return LocStorage;
}());

;

// CONCATENATED MODULE: ./src/FieldValue.ts
var FieldValue = /** @class */ (function () {
    function FieldValue(name, value, type, data) {
        if (data === void 0) { data = null; }
        this.name = name;
        this.value = value;
        this.type = type;
        this.data = data;
    }
    return FieldValue;
}());

;

// CONCATENATED MODULE: ./src/app.ts


// fields
var FieldType;
(function (FieldType) {
    FieldType[FieldType["TEXT_FIELD"] = 0] = "TEXT_FIELD";
    FieldType[FieldType["TEXTAREA_FIELD"] = 1] = "TEXTAREA_FIELD";
    FieldType[FieldType["DATE_FIELD"] = 2] = "DATE_FIELD";
    FieldType[FieldType["EMAIL_FIELD"] = 3] = "EMAIL_FIELD";
    FieldType[FieldType["SELECT_FIELD"] = 4] = "SELECT_FIELD";
    FieldType[FieldType["CHECKBOX_FIELD"] = 5] = "CHECKBOX_FIELD";
})(FieldType || (FieldType = {}));
;
;
var FieldLabel = /** @class */ (function () {
    function FieldLabel(name) {
        this.name = name;
        this.rendered_label = document.createElement('label');
        this.rendered_label.innerHTML = this.name;
    }
    FieldLabel.prototype.render = function (render_parent) {
        render_parent.appendChild(this.rendered_label);
    };
    return FieldLabel;
}());
;
var app_TextField = /** @class */ (function () {
    function TextField(name, default_value) {
        if (default_value === void 0) { default_value = null; }
        this.type = FieldType.TEXT_FIELD;
        this.name = name;
        this.label = new FieldLabel(this.name);
        this.rendered_field = document.createElement('input');
        this.rendered_field.type = 'text';
        if (default_value != null) {
            this.value = default_value;
            this.rendered_field.value = this.value;
        }
        else {
            this.value = '';
        }
        var __this = this;
        this.rendered_field.addEventListener("keypress", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("click", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("change", function () { __this.onValueChange(); }, false);
    }
    TextField.prototype.onValueChange = function () {
        this.value = this.rendered_field.value;
    };
    TextField.prototype.getValue = function () {
        return new FieldValue(this.name, this.value, this.type);
    };
    TextField.prototype.render = function (render_parent) {
        this.label.render(render_parent);
        render_parent.appendChild(this.rendered_field);
    };
    return TextField;
}());
;
var app_TextAreaField = /** @class */ (function () {
    function TextAreaField(name, default_value) {
        if (default_value === void 0) { default_value = null; }
        this.type = FieldType.TEXTAREA_FIELD;
        this.name = name;
        this.label = new FieldLabel(this.name);
        this.rendered_field = document.createElement('textarea');
        if (default_value != null) {
            this.value = default_value;
            this.rendered_field.value = this.value;
        }
        else {
            this.value = '';
        }
        var __this = this;
        this.rendered_field.addEventListener("keypress", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("click", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("change", function () { __this.onValueChange(); }, false);
    }
    TextAreaField.prototype.onValueChange = function () {
        this.value = this.rendered_field.value;
    };
    TextAreaField.prototype.getValue = function () {
        return new FieldValue(this.name, this.value, this.type);
    };
    TextAreaField.prototype.render = function (render_parent) {
        this.label.render(render_parent);
        render_parent.appendChild(this.rendered_field);
    };
    return TextAreaField;
}());
;
var app_DateField = /** @class */ (function () {
    function DateField(name, default_value) {
        if (default_value === void 0) { default_value = null; }
        this.type = FieldType.DATE_FIELD;
        this.name = name;
        this.label = new FieldLabel(this.name);
        this.rendered_field = document.createElement('input');
        this.rendered_field.type = 'date';
        if (default_value != null) {
            this.value = default_value;
            this.rendered_field.value = this.value;
        }
        else {
            this.value = '';
        }
        var __this = this;
        this.rendered_field.addEventListener("keypress", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("click", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("change", function () { __this.onValueChange(); }, false);
    }
    DateField.prototype.onValueChange = function () {
        this.value = this.rendered_field.value;
    };
    DateField.prototype.getValue = function () {
        return new FieldValue(this.name, this.value, this.type);
    };
    DateField.prototype.render = function (render_parent) {
        this.label.render(render_parent);
        render_parent.appendChild(this.rendered_field);
    };
    return DateField;
}());
;
var app_EmailField = /** @class */ (function () {
    function EmailField(name, default_value) {
        if (default_value === void 0) { default_value = null; }
        this.type = FieldType.EMAIL_FIELD;
        this.name = name;
        this.label = new FieldLabel(this.name);
        this.rendered_field = document.createElement('input');
        this.rendered_field.type = 'email';
        if (default_value != null) {
            this.value = default_value;
            this.rendered_field.value = this.value;
        }
        else {
            this.value = '';
        }
        var __this = this;
        this.rendered_field.addEventListener("keypress", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("click", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("change", function () { __this.onValueChange(); }, false);
    }
    EmailField.prototype.onValueChange = function () {
        this.value = this.rendered_field.value;
    };
    EmailField.prototype.getValue = function () {
        return new FieldValue(this.name, this.value, this.type);
    };
    EmailField.prototype.render = function (render_parent) {
        this.label.render(render_parent);
        render_parent.appendChild(this.rendered_field);
    };
    return EmailField;
}());
;
var app_CheckboxField = /** @class */ (function () {
    function CheckboxField(name, default_value) {
        if (default_value === void 0) { default_value = null; }
        this.type = FieldType.CHECKBOX_FIELD;
        this.name = name;
        this.label = new FieldLabel(this.name);
        this.rendered_field = document.createElement('input');
        this.rendered_field.type = 'checkbox';
        if (default_value != null) {
            this.value = default_value;
            this.rendered_field.checked = (this.value == '1');
        }
        else {
            this.value = '0';
        }
        var __this = this;
        this.rendered_field.addEventListener("click", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("change", function () { __this.onValueChange(); }, false);
    }
    CheckboxField.prototype.onValueChange = function () {
        if (this.rendered_field.checked)
            this.value = '1';
        else
            this.value = '0';
    };
    CheckboxField.prototype.getValue = function () {
        return new FieldValue(this.name, this.value, this.type);
    };
    CheckboxField.prototype.render = function (render_parent) {
        this.label.render(render_parent);
        render_parent.appendChild(this.rendered_field);
    };
    return CheckboxField;
}());
;
var app_SelectField = /** @class */ (function () {
    function SelectField(name, options, default_value) {
        var _this_1 = this;
        if (default_value === void 0) { default_value = null; }
        this.type = FieldType.SELECT_FIELD;
        this.name = name;
        this.options = options;
        this.label = new FieldLabel(this.name);
        this.rendered_field = document.createElement('select');
        var field_options = [];
        options.forEach(function (option) {
            var field_option = document.createElement('option');
            field_option.text = option;
            field_option.value = option;
            field_options.push(field_option);
        });
        if (default_value != null) {
            for (var i = 0; i < field_options.length; ++i) {
                if (field_options[i].text == default_value) {
                    this.value = default_value;
                    field_options[i].selected = true;
                    break;
                }
            }
        }
        field_options.forEach(function (foption) {
            _this_1.rendered_field.add(foption);
        });
        this.value = this.rendered_field.value;
        var __this = this;
        this.rendered_field.addEventListener("click", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("keypress", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("selectionchange", function () { __this.onValueChange(); }, false);
        this.rendered_field.addEventListener("change", function () { __this.onValueChange(); }, false);
    }
    SelectField.prototype.onValueChange = function () {
        this.value = this.rendered_field.value;
    };
    SelectField.prototype.getValue = function () {
        return new FieldValue(this.name, this.value, this.type, this.options);
    };
    SelectField.prototype.render = function (render_parent) {
        this.label.render(render_parent);
        render_parent.appendChild(this.rendered_field);
    };
    return SelectField;
}());
;
var app_Form = /** @class */ (function () {
    function Form(fields, document_id) {
        if (document_id === void 0) { document_id = null; }
        this.fields = fields;
        this.document_id = document_id;
    }
    Form.prototype.getValue = function () {
        var values = [];
        this.fields.forEach(function (field) {
            values.push(field.getValue());
        });
        return values;
    };
    Form.prototype.render = function (render_parent, isFForm) {
        if (isFForm === void 0) { isFForm = false; }
        var render_form = document.createElement('form');
        this.fields.forEach(function (field) {
            var div = document.createElement('div');
            field.render(div);
            render_form.appendChild(div);
        });
        render_parent.appendChild(render_form);
        if (isFForm == false) {
            var __this_1 = this;
            var save_btn = document.createElement('button');
            save_btn.innerHTML = 'Zapisz';
            save_btn.addEventListener("click", function () { __this_1.save(); }, false);
            render_parent.appendChild(save_btn);
        }
    };
    Form.prototype.addField = function (fvalue) {
        switch (fvalue.type) {
            case FieldType.TEXT_FIELD:
                this.fields.push(new app_TextField(fvalue.name, fvalue.value));
                break;
            case FieldType.TEXTAREA_FIELD:
                this.fields.push(new app_TextAreaField(fvalue.name, fvalue.value));
                break;
            case FieldType.DATE_FIELD:
                this.fields.push(new app_DateField(fvalue.name, fvalue.value));
                break;
            case FieldType.EMAIL_FIELD:
                this.fields.push(new app_EmailField(fvalue.name, fvalue.value));
                break;
            case FieldType.CHECKBOX_FIELD:
                this.fields.push(new app_CheckboxField(fvalue.name, fvalue.value));
                break;
            case FieldType.SELECT_FIELD:
                this.fields.push(new app_SelectField(fvalue.name, fvalue.data, fvalue.value));
                break;
        }
    };
    Form.prototype.save = function () {
        var ls = new LocStorage();
        var values = this.getValue();
        ls.saveDocument(values, this.document_id);
        document.location.href = 'index.html';
    };
    return Form;
}());
;
var app_FormCreator = /** @class */ (function () {
    function FormCreator() {
        this.fforms = [];
        this.render_div = document.createElement('div');
    }
    FormCreator.prototype.renderDiv = function () {
        var _this_1 = this;
        this.render_div.innerHTML = '';
        this.fforms.forEach(function (fform) {
            fform.render(_this_1.render_div, true);
        });
        var __this = this;
        var add_btn = document.createElement('button');
        add_btn.innerHTML = 'Dodaj pole';
        add_btn.addEventListener("click", function () { __this.addFForm(); }, false);
        this.render_div.appendChild(add_btn);
        if (this.fforms.length > 0) {
            var remove_btn = document.createElement('button');
            remove_btn.innerHTML = 'Usuń ostatnie pole';
            remove_btn.addEventListener("click", function () { __this.removeFForm(); }, false);
            this.render_div.appendChild(remove_btn);
        }
        var save_btn = document.createElement('button');
        save_btn.innerHTML = 'Zapisz formularz';
        save_btn.addEventListener("click", function () { __this.saveForm(); }, false);
        this.render_div.appendChild(save_btn);
    };
    FormCreator.prototype.render = function (render_parent) {
        this.renderDiv();
        render_parent.appendChild(this.render_div);
    };
    FormCreator.prototype.addFForm = function () {
        this.fforms.push(new app_Form([
            new app_SelectField('Typ pola', ['TextField', 'TextAreaField', 'DateField', 'EmailField', 'CheckboxField', 'SelectField']),
            new app_TextField('Nazwa pola'),
            new app_TextAreaField('Wartość domyślna')
        ]));
        this.renderDiv();
    };
    FormCreator.prototype.removeFForm = function () {
        this.fforms.pop();
        this.renderDiv();
    };
    FormCreator.prototype.saveForm = function () {
        var fields = [];
        this.fforms.forEach(function (fform) {
            if (fform.fields[0].value == "TextField") {
                fields.push(new FieldValue(fform.fields[1].value, fform.fields[2].value, FieldType.TEXT_FIELD));
            }
            else if (fform.fields[0].value == "TextAreaField") {
                fields.push(new FieldValue(fform.fields[1].value, fform.fields[2].value, FieldType.TEXTAREA_FIELD));
            }
            else if (fform.fields[0].value == "DateField") {
                fields.push(new FieldValue(fform.fields[1].value, fform.fields[2].value, FieldType.DATE_FIELD));
            }
            else if (fform.fields[0].value == "EmailField") {
                fields.push(new FieldValue(fform.fields[1].value, fform.fields[2].value, FieldType.EMAIL_FIELD));
            }
            else if (fform.fields[0].value == "CheckboxField") {
                fields.push(new FieldValue(fform.fields[1].value, fform.fields[2].value, FieldType.CHECKBOX_FIELD));
            }
            else if (fform.fields[0].value == "SelectField") {
                var options = fform.fields[2].value.split(';');
                fields.push(new FieldValue(fform.fields[1].value, '', FieldType.SELECT_FIELD, options));
            }
        });
        var ls = new LocStorage();
        ls.saveForm(fields);
        Router.routeTo('index');
    };
    FormCreator.prototype.renderFormList = function (render_parent) {
        var table = document.createElement('table');
        var table_row = document.createElement('tr');
        var th = document.createElement('th');
        th.textContent = 'ID Dokumentu';
        table_row.appendChild(th);
        th = document.createElement('th');
        th.textContent = 'Wypełnij';
        table_row.appendChild(th);
        table.appendChild(table_row);
        var ls = new LocStorage();
        var forms = ls.getForms();
        forms.forEach(function (form) {
            table_row = document.createElement('tr');
            var td = document.createElement('td');
            td.textContent = form;
            table_row.appendChild(td);
            var td_edit_a = document.createElement('a');
            td_edit_a.href = 'new-document.html?id=' + form;
            td_edit_a.textContent = 'edit';
            var td_edit = document.createElement('td');
            td_edit.appendChild(td_edit_a);
            var td_remove = document.createElement('td');
            table_row.appendChild(td_edit);
            table.appendChild(table_row);
        });
        render_parent.appendChild(table);
    };
    return FormCreator;
}());
;
// app classes
var app_DocumentList = /** @class */ (function () {
    function DocumentList() {
        this.table = document.createElement('table');
    }
    DocumentList.prototype.getDocumentsList = function () {
        var ls = new LocStorage();
        this.docs = ls.getDocuments();
    };
    DocumentList.prototype.removeDocument = function (id) {
        var ls = new LocStorage();
        ls.removeDocument(id);
        this.getDocumentsList();
        this.renderTableContent();
    };
    DocumentList.prototype.getDocument = function (id) {
        var ls = new LocStorage();
        return ls.loadDocument(id);
    };
    DocumentList.prototype.renderTableContent = function () {
        var _this_1 = this;
        this.table.innerHTML = '';
        var table_row = document.createElement('tr');
        var th = document.createElement('th');
        th.textContent = 'ID Dokumentu';
        table_row.appendChild(th);
        th = document.createElement('th');
        th.textContent = 'Edytuj';
        table_row.appendChild(th);
        th = document.createElement('th');
        th.textContent = 'Usuń';
        table_row.appendChild(th);
        this.table.appendChild(table_row);
        this.docs.forEach(function (doc) {
            table_row = document.createElement('tr');
            var td = document.createElement('td');
            td.textContent = doc;
            table_row.appendChild(td);
            var td_edit_a = document.createElement('a');
            td_edit_a.href = 'edit-document.html?id=' + doc;
            td_edit_a.textContent = 'edit';
            var td_edit = document.createElement('td');
            td_edit.appendChild(td_edit_a);
            var td_remove = document.createElement('td');
            table_row.appendChild(td_edit);
            var td_remove_btn = document.createElement('button');
            td_remove_btn.textContent = 'remove';
            var _this = _this_1;
            td_remove_btn.addEventListener('click', function () { _this.removeDocument(doc); }, false);
            table_row.appendChild(td_remove_btn);
            _this_1.table.appendChild(table_row);
        });
    };
    DocumentList.prototype.render = function (render_parent) {
        this.renderTableContent();
        render_parent.appendChild(this.table);
    };
    return DocumentList;
}());
;
var app_App = /** @class */ (function () {
    function App() {
    }
    App.prototype.indexView = function () {
        var urls = [
            ['Nowy formularz', 'new-form.html'],
            ['Lista formularzy', 'form-list.html'],
            ['Lista dokumentów', 'document-list.html'],
        ];
        urls.forEach(function (url) {
            var url_div = document.createElement('div');
            var url_a = document.createElement('a');
            url_a.innerHTML = url[0];
            url_a.href = url[1];
            url_div.appendChild(url_a);
            document.body.appendChild(url_div);
        });
    };
    App.prototype.editDocumentView = function (id) {
        var form = new app_Form([], id);
        var ds = new app_DocumentList();
        ds.getDocumentsList();
        var fields = ds.getDocument(id);
        fields.forEach(function (field) {
            form.addField(field);
        });
        form.render(document.body);
    };
    App.prototype.newDocumentView = function (id) {
        var form = new app_Form([]);
        var ls = new LocStorage();
        var fields = ls.loadForm(id);
        fields.forEach(function (field) {
            form.addField(field);
        });
        form.render(document.body);
    };
    App.prototype.documentListView = function () {
        var dl = new app_DocumentList();
        dl.getDocumentsList();
        dl.render(document.body);
    };
    App.prototype.newFormView = function () {
        var fc = new app_FormCreator();
        fc.render(document.body);
    };
    App.prototype.formListView = function () {
        var fc = new app_FormCreator();
        fc.renderFormList(document.body);
    };
    return App;
}());
;
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.route = function () {
        var route_name = Router.getRouteName();
        if (route_name == 'index') {
            Router.app.indexView();
        }
        else if (route_name == 'new-document') {
            var id = Router.getParam('id');
            Router.app.newDocumentView(id);
        }
        else if (route_name == 'document-list') {
            Router.app.documentListView();
        }
        else if (route_name == 'edit-document') {
            var id = Router.getParam('id');
            Router.app.editDocumentView(id);
        }
        else if (route_name == 'new-form') {
            Router.app.newFormView();
        }
        else if (route_name == 'form-list') {
            Router.app.formListView();
        }
    };
    Router.getRouteName = function () {
        var url_parts = window.location.pathname.split('/');
        var url_file = url_parts[url_parts.length - 1];
        var url_file_no_ext = url_file.split('.')[0];
        return url_file_no_ext;
    };
    Router.routeTo = function (url, params) {
        if (params === void 0) { params = ''; }
        document.location.href = url + '.html?' + params;
    };
    Router.getParam = function (key) {
        var query = window.location.search.substr(1);
        var urlParams = new URLSearchParams(query);
        return urlParams.get(key);
    };
    Router.app = new app_App();
    return Router;
}());
Router.route();


/***/ })
/******/ ]);