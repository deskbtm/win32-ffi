import { LibLoaderApiFns } from './lib_loader_api_fns';
import { SysInfoApiFns } from './sys_info_api';
import { ProcessThreadsApiFns } from './process_threads_api_fns';
import { ErrHandlingApi } from './err_handling_api';

export * from './lib_loader_api_type';

export type Kernel32Fns = LibLoaderApiFns &
	SysInfoApiFns &
	ProcessThreadsApiFns &
	ErrHandlingApi;
