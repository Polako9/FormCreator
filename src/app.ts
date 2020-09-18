import { LocStorage } from './LocStorage';
import { FieldValue } from './FieldValue';

enum FieldType {
  TEXT_FIELD,
  TEXTAREA_FIELD,
  DATE_FIELD,
  EMAIL_FIELD,
  SELECT_FIELD,
  CHECKBOX_FIELD,
};

interface Field {
  name: string;
  label: FieldLabel;
  type: FieldType;
  value: string;

  rendered_field: HTMLElement;

  render(render_parent: HTMLElement): void;
  getValue(): FieldValue;
};

class FieldLabel {
  name: string;
  rendered_label: HTMLElement;

  constructor(name: string) {
    this.name = name;
    this.rendered_label = document.createElement('label');
    this.rendered_label.innerHTML = this.name;
  }

  render(render_parent: HTMLElement): void {
    render_parent.appendChild(this.rendered_label);
  }
};

class TextField implements Field {
  name: string;
  label: FieldLabel;
  type: FieldType = FieldType.TEXT_FIELD;
  value: string;

  rendered_field: HTMLInputElement;

  constructor(name: string, default_value: string = null) {
    this.name = name;
    this.label = new FieldLabel(this.name);
    this.rendered_field = document.createElement('input');
    this.rendered_field.type = 'text';

    if (default_value != null) {
      this.value = default_value;
      this.rendered_field.value = this.value;
    } else {
      this.value = '';
    }

    this.rendered_field.addEventListener("keypress", () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("click", () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("change", () => { this.onValueChange(); }, false);
  }

  onValueChange(): void {
    this.value = this.rendered_field.value;
  }

  getValue(): FieldValue {
    return new FieldValue(this.name, this.value, this.type);
  }

  render(render_parent: HTMLElement): void {
    this.label.render(render_parent);
    render_parent.appendChild(this.rendered_field);
  }
};

class TextAreaField implements Field {
  name: string;
  label: FieldLabel;
  type: FieldType = FieldType.TEXTAREA_FIELD;
  value: string;

  rendered_field: HTMLTextAreaElement;

  constructor(name: string, default_value: string = null) {
    this.name = name;
    this.label = new FieldLabel(this.name);
    this.rendered_field = document.createElement('textarea');

    if (default_value != null) {
      this.value = default_value;
      this.rendered_field.value = this.value;
    } else {
      this.value = '';
    }

    this.rendered_field.addEventListener("keypress", () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("click", () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("change", () => { this.onValueChange(); }, false);
  }

  onValueChange(): void {
    this.value = this.rendered_field.value;
  }

  getValue(): FieldValue {
    return new FieldValue(this.name, this.value, this.type);
  }

  render(render_parent: HTMLElement): void {
    this.label.render(render_parent);
    render_parent.appendChild(this.rendered_field);
  }
};

class DateField implements Field {
  name: string;
  label: FieldLabel;
  type: FieldType = FieldType.DATE_FIELD;
  value: string;

  rendered_field: HTMLInputElement;

  constructor(name: string, default_value: string = null) {
    this.name = name;
    this.label = new FieldLabel(this.name);
    this.rendered_field = document.createElement('input');
    this.rendered_field.type = 'date';

    if (default_value != null) {
      this.value = default_value;
      this.rendered_field.value = this.value;
    } else {
      this.value = '';
    }

    this.rendered_field.addEventListener("keypress",  () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("click",  () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("change",  () => { this.onValueChange(); }, false);
  }

  onValueChange(): void {
    this.value = this.rendered_field.value;
  }

  getValue(): FieldValue {
    return new FieldValue(this.name, this.value, this.type);
  }

  render(render_parent: HTMLElement): void {
    this.label.render(render_parent);
    render_parent.appendChild(this.rendered_field);
  }
};

class EmailField implements Field {
  name: string;
  label: FieldLabel;
  type: FieldType = FieldType.EMAIL_FIELD;
  value: string;

  rendered_field: HTMLInputElement;

  constructor(name: string, default_value: string = null) {
    this.name = name;
    this.label = new FieldLabel(this.name);
    this.rendered_field = document.createElement('input');
    this.rendered_field.type = 'email';

    if (default_value != null) {
      this.value = default_value;
      this.rendered_field.value = this.value;
    } else {
      this.value = '';
    }

    this.rendered_field.addEventListener("keypress", () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("click", () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("change", () => { this.onValueChange(); }, false);
  }

  onValueChange(): void {
    this.value = this.rendered_field.value;
  }

  getValue(): FieldValue {
    return new FieldValue(this.name, this.value, this.type);
  }

  render(render_parent: HTMLElement): void {
    this.label.render(render_parent);
    render_parent.appendChild(this.rendered_field);
  }
};

class CheckboxField implements Field {
  name: string;
  label: FieldLabel;
  type: FieldType = FieldType.CHECKBOX_FIELD;
  value: string;

  rendered_field: HTMLInputElement;

  constructor(name: string, default_value: string = null) {
    this.name = name;
    this.label = new FieldLabel(this.name);
    this.rendered_field = document.createElement('input');
    this.rendered_field.type = 'checkbox';

    if (default_value != null) {
      this.value = default_value;
      this.rendered_field.checked = (this.value == '1');
    } else {
      this.value = '0';
    }

    this.rendered_field.addEventListener("click", () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("change", () => { this.onValueChange(); }, false);
  }

  onValueChange(): void {
    if (this.rendered_field.checked)
      this.value = '1';
    else
      this.value = '0';
  }

  getValue(): FieldValue {
    return new FieldValue(this.name, this.value, this.type);
  }

  render(render_parent: HTMLElement): void {
    this.label.render(render_parent);
    render_parent.appendChild(this.rendered_field);
  }
};

class SelectField implements Field {
  name: string;
  label: FieldLabel;
  type: FieldType = FieldType.SELECT_FIELD;
  value: string;

  options: string[];
  rendered_field: HTMLSelectElement;

  constructor(name: string, options: string[], default_value: string = null) {
    this.name = name;
    this.options = options;
    this.label = new FieldLabel(this.name);
    this.rendered_field = document.createElement('select');

    let field_options = options.map((option) => {
      let field_option = document.createElement('option');
      field_option.text = option;
      field_option.value = option;
      return field_option;
    });

    if (default_value != null) { 
      for (let i = 0; i < field_options.length; ++i) {
        if (field_options[i].text == default_value) {
          this.value = default_value;
          field_options[i].selected = true;
          break;
        }
      }
    }

    field_options.forEach(foption => {
      this.rendered_field.add(foption);
    });
    this.value = this.rendered_field.value;

    this.rendered_field.addEventListener("click", () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("keypress", () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("selectionchange", () => { this.onValueChange(); }, false);
    this.rendered_field.addEventListener("change", () => { this.onValueChange(); }, false);
  }

  onValueChange(): void {
    this.value = this.rendered_field.value;
  }

  getValue(): FieldValue {
    return new FieldValue(this.name, this.value, this.type, this.options);
  }

  render(render_parent: HTMLElement): void {
    this.label.render(render_parent);
    render_parent.appendChild(this.rendered_field);
  }
};

class Form {
  fields: Field[];

  document_id: string;

  constructor(fields: Field[], document_id: string = null) {
    this.fields = fields;
    this.document_id = document_id;
  }

  getValue(): FieldValue[] {
    let values: FieldValue[] = [];
    this.fields.forEach(field => {
      values.push(field.getValue());
    });
    return values;
  }

  render(render_parent: HTMLElement, isFForm: Boolean = false) {
    let render_form = document.createElement('form');
    this.fields.forEach(field => {
      let div = document.createElement('div');
      field.render(div);
      render_form.appendChild(div);
    });
    render_parent.appendChild(render_form);

    if (isFForm == false) {
      let save_btn = document.createElement('button');
      save_btn.innerHTML = 'Zapisz';
      save_btn.addEventListener("click", () => {  this.save(); }, false);
      render_parent.appendChild(save_btn);
    }
  }

  addField(fvalue: FieldValue): void {
    switch (fvalue.type as FieldType) {
      case FieldType.TEXT_FIELD:
        this.fields.push(
          new TextField(fvalue.name, fvalue.value)
        );
        break;
      case FieldType.TEXTAREA_FIELD:
        this.fields.push(
          new TextAreaField(fvalue.name, fvalue.value)
        );
        break;
      case FieldType.DATE_FIELD:
        this.fields.push(
          new DateField(fvalue.name, fvalue.value)
        );
        break;
      case FieldType.EMAIL_FIELD:
        this.fields.push(
          new EmailField(fvalue.name, fvalue.value)
        );
        break;
      case FieldType.CHECKBOX_FIELD:
        this.fields.push(
          new CheckboxField(fvalue.name, fvalue.value)
        );
        break;
      case FieldType.SELECT_FIELD:
        this.fields.push(
          new SelectField(fvalue.name, fvalue.data, fvalue.value)
        );
        break;
    }
  }

  save(): void {
    let ls = new LocStorage();
    let values = this.getValue();
    ls.saveDocument(values, this.document_id);
    Router.routeTo('index');
  }
};

class FormCreator {
  fforms: Form[];
  render_div: HTMLElement;

  constructor() {
    this.fforms = [];
    this.render_div = document.createElement('div');
  }

  renderDiv(): void {
    this.render_div.innerHTML = '';
    this.fforms.forEach(fform => {
      fform.render(this.render_div, true);
    });

    let add_btn = document.createElement('button');
    add_btn.innerHTML = 'Dodaj pole';
    add_btn.addEventListener("click", () => { this.addFForm(); }, false);
    this.render_div.appendChild(add_btn);

    if (this.fforms.length > 0) {
      let remove_btn = document.createElement('button');
      remove_btn.innerHTML = 'Usuń ostatnie pole';
      remove_btn.addEventListener("click", () => { this.removeFForm(); }, false);
      this.render_div.appendChild(remove_btn);
    }

    let save_btn = document.createElement('button');
    save_btn.innerHTML = 'Zapisz formularz';
    save_btn.addEventListener("click", () => { this.saveForm(); }, false);
    this.render_div.appendChild(save_btn);
  }

  render(render_parent: HTMLElement): void {
    this.renderDiv();
    render_parent.appendChild(this.render_div);
  }

  addFForm(): void {
    this.fforms.push(
      new Form([
        new SelectField('Typ pola', ['TextField', 'TextAreaField', 'DateField', 'EmailField', 'CheckboxField', 'SelectField']),
        new TextField('Nazwa pola'),
        new TextAreaField('Wartość domyślna')
      ])
    );
    this.renderDiv();
  }

  removeFForm(): void {
    this.fforms.pop();
    this.renderDiv();
  }

  saveForm(): void {
    let fields: FieldValue[] = [];
    this.fforms.forEach(fform => {
      if (fform.fields[0].value == "TextField") {
        fields.push(
          new FieldValue(fform.fields[1].value, fform.fields[2].value, FieldType.TEXT_FIELD)
        );
      } else if (fform.fields[0].value == "TextAreaField") {
        fields.push(
          new FieldValue(fform.fields[1].value, fform.fields[2].value, FieldType.TEXTAREA_FIELD)
        );
      }  else if (fform.fields[0].value == "DateField") {
        fields.push(
          new FieldValue(fform.fields[1].value, fform.fields[2].value, FieldType.DATE_FIELD)
        );
      }  else if (fform.fields[0].value == "EmailField") {
        fields.push(
          new FieldValue(fform.fields[1].value, fform.fields[2].value, FieldType.EMAIL_FIELD)
        );
      }  else if (fform.fields[0].value == "CheckboxField") {
        fields.push(
          new FieldValue(fform.fields[1].value, fform.fields[2].value, FieldType.CHECKBOX_FIELD)
        );
      } else if (fform.fields[0].value == "SelectField") {
        let options: string[] = fform.fields[2].value.split(';');
        fields.push(
          new FieldValue(fform.fields[1].value, '', FieldType.SELECT_FIELD, options)
        );
      }
    });

    let ls = new LocStorage();
    ls.saveForm(fields);

    Router.routeTo('index');
  }

  renderFormList(render_parent: HTMLElement): void {
    let table = document.createElement('table');
    let table_row = document.createElement('tr');

    let th = document.createElement('th');
    th.textContent = 'ID Dokumentu';
    table_row.appendChild(th);
    th = document.createElement('th');
    th.textContent = 'Wypełnij';
    table_row.appendChild(th);
    table.appendChild(table_row);

    let ls = new LocStorage();
    let forms = ls.getForms();

    forms.forEach(form => {
      table_row = document.createElement('tr');
      let td = document.createElement('td');
      td.textContent = form;
      table_row.appendChild(td);

      let td_edit_a = document.createElement('a');
      td_edit_a.href = 'new-document.html?id=' + form;
      td_edit_a.textContent = 'edit';

      let td_edit = document.createElement('td');
      td_edit.appendChild(td_edit_a);
      table_row.appendChild(td_edit);

      table.appendChild(table_row);
    });

    render_parent.appendChild(table);
  }
};

// app classes

class DocumentList {
  docs: string[];
  table: HTMLTableElement;

  constructor() {
    this.table = document.createElement('table');
  }

  getDocumentsList(): void {
    let ls = new LocStorage();
    this.docs = ls.getDocuments();
  }

  removeDocument(id: string): void {
    let ls = new LocStorage();
    ls.removeDocument(id);
    this.getDocumentsList();
    this.renderTableContent();
  }

  getDocument(id: string): FieldValue[] {
    let ls = new LocStorage();
    return ls.loadDocument(id);
  }

  renderTableContent(): void {
    this.table.innerHTML = '';
    let table_row = document.createElement('tr');

    let th = document.createElement('th');
    th.textContent = 'ID Dokumentu';
    table_row.appendChild(th);
    th = document.createElement('th');
    th.textContent = 'Edytuj';
    table_row.appendChild(th);
    th = document.createElement('th');
    th.textContent = 'Usuń';
    table_row.appendChild(th);
    this.table.appendChild(table_row);

    this.docs.forEach(doc => {
      table_row = document.createElement('tr');
      let td = document.createElement('td');
      td.textContent = doc;
      table_row.appendChild(td);

      let td_edit_a = document.createElement('a');
      td_edit_a.href = 'edit-document.html?id=' + doc;
      td_edit_a.textContent = 'edit';

      let td_edit = document.createElement('td');
      td_edit.appendChild(td_edit_a);
      let td_remove = document.createElement('td');
      table_row.appendChild(td_edit);

      let td_remove_btn = document.createElement('button');
      td_remove_btn.textContent = 'remove';
      td_remove_btn.addEventListener('click', () => { this.removeDocument(doc); }, false);
      table_row.appendChild(td_remove_btn);

      this.table.appendChild(table_row);
    });
  }

  render(render_parent: HTMLElement): void {
    this.renderTableContent();
    render_parent.appendChild(this.table);
  }
};

class App {
  indexView(): void {
    let urls = [
      ['Nowy formularz', 'new-form.html'],
      ['Lista formularzy', 'form-list.html'],
      ['Lista dokumentów', 'document-list.html'],
    ];

    urls.forEach(url => {
      let url_div = document.createElement('div');
      let url_a = document.createElement('a');
      url_a.innerHTML = url[0];
      url_a.href = url[1];

      url_div.appendChild(url_a);
      document.body.appendChild(url_div);
    });
  }

  editDocumentView(id: string): void {
    let form = new Form([], id);

    let ds = new DocumentList();
    ds.getDocumentsList();
    let fields = ds.getDocument(id);

    fields.forEach(field => {
      form.addField(field);
    });

    form.render(document.body);
  }

  newDocumentView(id): void {
    let form = new Form([]);

    let ls = new LocStorage();
    let fields = ls.loadForm(id);

    fields.forEach(field => {
      form.addField(field);
    });

    form.render(document.body);
  }

  documentListView(): void {
    let dl = new DocumentList();
    dl.getDocumentsList();
    dl.render(document.body);
  }

  newFormView(): void {
    let fc = new FormCreator();
    fc.render(document.body);
  }

  formListView(): void {
    let fc = new FormCreator();
    fc.renderFormList(document.body);
  }
};

class Router {
  public static app: App = new App();

  static route() {
    let route_name = Router.getRouteName();
    if (route_name == 'index') {
      Router.app.indexView();
    } else if (route_name == 'new-document') {
      let id = Router.getParam('id');
      Router.app.newDocumentView(id);
    } else if (route_name == 'document-list') {
      Router.app.documentListView();
    } else if (route_name == 'edit-document') {
      let id = Router.getParam('id');
      Router.app.editDocumentView(id);
    } else if (route_name == 'new-form') {
      Router.app.newFormView();
    } else if (route_name == 'form-list') {
      Router.app.formListView();
    }
  }

  static getRouteName() {
    let url_parts = window.location.pathname.split('/'); //sasa//ssaas//asa [``, sasa , ssaas, asa]
    let url_file = url_parts.pop(); // usuwa ostatni element z tablicy i zwraca go
    let url_file_no_ext = url_file.split('.')[0]; 
    return url_file_no_ext;
  }

  static routeTo(url: string, params: string = '') {
    document.location.href = url + '.html?' + params;
  }

  static getParam(key: string) {
    const query: string = window.location.search.substr(1);
    const urlParams = new URLSearchParams(query);
    return urlParams.get(key);
  }
}

Router.route();