import { LocStorage } from '../src/LocStorage';
import { expect } from 'chai';
import 'mocha';

describe('LocStorage', () => {
    it("Should return array of docs", () => {
        let ls = new LocStorage();
        let docs = ls.getDocuments();
        expect(typeof docs).to.equal(typeof []);
    });

    it("Should save document and return its id", () => {
        let ls = new LocStorage();
        let doc_id = ls.saveDocument([], null);
        let doc_no = ls.getDocuments().length;

        expect(typeof doc_id).to.equal(typeof '');
        expect(doc_id).to.contain('document-', 'Incorrect document id');
        expect(doc_no).to.equal(1, 'Document was not saved');
    });
});