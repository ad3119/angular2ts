import{statusPipe} from './../app/scripts/pipes/status';
/*describe('1st tests', () => {
 it('true is true', () => expect(true).toEqual(true));
 it('null is not the same thing as undefined',() => expect(null).not.toEqual(undefined));*/
describe('StatusPipe', () => {
 let pipe:statusPipe;
  beforeEach(() => {
	  pipe = new statusPipe();
  });
  it('transforms "4" to "Completed"', () => {
    expect(pipe.transform('4')).toEqual('Completed');
  });
  it('transforms "0" to "Failed"', () => {
	  expect(pipe.transform('0')).toEqual('Failed');
  });
  it('transforms "2" to "In Progress"', () => {
    expect(pipe.transform('2')).toEqual('In Progress');
  });
//});

