import Realm from 'realm';

const BillScheme = {
  name: 'Bill',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name:  'string',
    status: 'string',
    value: 'float',
    maturity: 'date'
  }
};

export default new Realm({
  schema: [ BillScheme ]
});