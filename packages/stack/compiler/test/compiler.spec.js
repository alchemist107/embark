import sinon from 'sinon';
import assert from 'assert';
import { fakeEmbark } from 'embark-testing';
import Compiler from '../src/';

describe('stack/compiler', () => {

  let compiler;

  const { embark, plugins } = fakeEmbark();

  beforeEach(() => {
    compiler = new Compiler(embark, {
      plugins
    });
  });

  it ('should work', () => {

  });
});
