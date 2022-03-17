import {
    request
} from '@/common/js/request-xe.js';
export const getShops = (data) => {
    return request('/api/index/index', 'get', data);
};