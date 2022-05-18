const { Win32ffi, ffi, CPP, L, NULL } = require('../dist');

Win32ffi.assign({
	user32Fns: {
		demo: [],
	},
});

const { CreateThread, MessageBoxW } = new Win32ffi().winFns();

const proc = ffi.Callback(CPP.INT, [CPP.PVOID], (...d) => {
	MessageBoxW(0, L('The Alert Window From Thread'), null, CPP.MB_OK | CPP.MB_ICONEXCLAMATION);
});

const handle = CreateThread(null, 0, proc, NULL, 0, NULL);

console.log(Object.prototype.toString.call(handle));
