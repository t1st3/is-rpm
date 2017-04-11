import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import isRpm from './';

test('should detect RPM from buffer', t => {
	t.is(isRpm(readChunk.sync(path.join(__dirname, 'fixture.rpm'), 0, 4)), true);
});

test('should not detect RPM on a non-RPM file', t => {
	t.is(isRpm(readChunk.sync(path.join(__dirname, 'fixture.jpg'), 0, 4)), false);
});
