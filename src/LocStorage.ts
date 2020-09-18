import { FieldValue } from './FieldValue';

interface DataStorage {
  saveDocument(values: FieldValue[], document_id: string): string;
  loadDocument(id: string): FieldValue[];
  getDocuments(): string[];
};

export class LocStorage implements DataStorage {
  saveDocument(values: FieldValue[], document_id: string): string {
    let id: string;
    if (document_id != null) {
      this.removeDocument(document_id);
      id = document_id;
    }
    else
      id = 'document-' + Date.now();

    localStorage.setItem(id, JSON.stringify(values));

    let docs = this.getDocuments();
    docs.push(id);
    localStorage.setItem('docs', JSON.stringify(docs));

    return id;
  }

  loadDocument(id: string): FieldValue[] {
    return JSON.parse(localStorage.getItem(id));
  }

  removeDocument(id: string): void {
    localStorage.removeItem(id);
    let docs = JSON.parse(localStorage.getItem('docs'));
    localStorage.setItem('docs', JSON.stringify(docs.filter(doc => doc != id)))
  }

  getDocuments(): string[] {
    let docs = JSON.parse(localStorage.getItem('docs'));
    if (docs == null)
      return [];
    return docs;
  }

  saveForm(fields: FieldValue[]): void {
    let id = 'form-' + Date.now();
    localStorage.setItem(id, JSON.stringify(fields));

    let forms = this.getForms();
    forms.push(id);
    localStorage.setItem('forms', JSON.stringify(forms));
  }

  getForms(): string[] {
    let forms = JSON.parse(localStorage.getItem('forms'));
    if (forms == null)
      return [];
    return forms;
  }

  loadForm(id: string) {
    return JSON.parse(localStorage.getItem(id));
  }
};