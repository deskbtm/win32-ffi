import { libloaderApiFns } from './lib_loader_api_fns';
import { sysInfoApiFns } from './sys_info_api';
import { processThreadsApiFns } from './process_threads_api_fns';
import { errHandlingApi } from './err_handling_api';

export const kernel32Fns = Object.assign({}, libloaderApiFns, sysInfoApiFns, processThreadsApiFns, errHandlingApi);

export * from './lib_loader_api_type';