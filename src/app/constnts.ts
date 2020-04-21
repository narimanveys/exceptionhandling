export const constants = {
    API: {
        Summary : '/summary'
    },
    config: {
        baseUrl: 'https://api.covid19api.com'
    }
};

const resolvePathParams = ( apiEndpoint, pathParams ) => {
    if (pathParams && typeof pathParams === 'object' ) {
        Object.keys(pathParams).map((key, index) => {
            const pattern = ':' + key;
            apiEndpoint = apiEndpoint.replace(pattern, pathParams[key]);
            return apiEndpoint;
        });
    }
    return apiEndpoint;
};

const resource = {};
const init = () => {
    Object.keys(constants.API).map((key, index) =>
        resource[key] = (params) => {
            return constants.config.baseUrl + resolvePathParams(constants.API[key], params);
        }
    );
};

init();
export const $resource = resource;
