import path from 'path';
import readChunk from 'read-chunk';
import test from 'ava';
import isRpm from './';

test('should detect RPM from buffer', function (t) {
	readChunk(path.join(__dirname, 'fixture.rpm'), 0, 4, function (err, buf) {
		t.is(err, null);
		t.is(isRpm(buf), true);
	});
});

test('should not detect RPM on a non-RPM file', function (t) {
	readChunk(path.join(__dirname, 'fixture.jpg'), 0, 4, function (err, buf) {
		t.is(err, null);
		t.is(isRpm(buf), false);
	});
});
