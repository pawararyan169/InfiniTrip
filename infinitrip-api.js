/**
 * INFINITRIP PHP API client (XAMPP). Same-origin: site at /Kartick/ → API at /Kartick/api/
 */
(function () {
    function apiBase() {
        var p = window.location.pathname.replace(/\/[^/]*$/, '');
        return (p || '') + '/api';
    }

    function buildUrl(route) {
        var q = route.indexOf('?');
        var path = q === -1 ? route : route.slice(0, q);
        var extra = q === -1 ? '' : '&' + route.slice(q + 1);
        return apiBase() + '/index.php?route=' + encodeURIComponent(path) + extra;
    }

    /**
     * @param {string} route e.g. "otp/context?purpose=signup&targetId=1"
     * @param {{ method?: string, body?: object }} [options]
     * @returns {Promise<object>}
     */
    async function request(route, options) {
        options = options || {};
        var method = options.method || 'GET';
        var fetchOpts = { method: method, credentials: 'include' };
        if (options.body != null && method !== 'GET') {
            fetchOpts.headers = { 'Content-Type': 'application/json' };
            fetchOpts.body = JSON.stringify(options.body);
        }
        var res = await fetch(buildUrl(route), fetchOpts);
        var data = {};
        try {
            data = await res.json();
        } catch (e) {
            data = { ok: false, error: 'Invalid server response' };
        }
        return data;
    }

    window.InfiniTripApi = {
        base: apiBase,
        request: request
    };
})();
