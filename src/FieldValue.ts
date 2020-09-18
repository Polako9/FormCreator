export class FieldValue {
  name: string;
  value: string;
  type: any;
  data: any;

  constructor(name: string, value: string, type: any, data: any = null) {
    this.name = name;
    this.value = value;
    this.type = type;
    this.data = data;
  }
};