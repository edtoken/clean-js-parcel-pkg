import config from './config';

export default {
    methodA() {
        return 'methodA-response';
    },
    methodB(arg) {
        return 'methodB-' + String(arg);
    },
    methodC() {
        return config.SOME_ENV_VARIABLE;
    },
};
