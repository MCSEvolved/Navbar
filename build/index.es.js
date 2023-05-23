/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
const byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        const byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length;) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw new DecodeBase64StringError();
            }
            const outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * An error encountered while decoding base64 string.
 */
class DecodeBase64StringError extends Error {
    constructor() {
        super(...arguments);
        this.name = 'DecodeBase64StringError';
    }
}
/**
 * URL-safe base64 encoding
 */
const base64Encode = function (str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
const base64urlEncodeWithoutPadding = function (str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
const base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
/**
 * Attempt to read defaults from a JSON string provided to
 * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
 * The dots are in parens because certain compilers (Vite?) cannot
 * handle seeing that variable in comments.
 * See https://github.com/firebase/firebase-js-sdk/issues/6838
 */
const getDefaultsFromEnvVariable = () => {
    if (typeof process === 'undefined' || typeof process.env === 'undefined') {
        return;
    }
    const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
        return JSON.parse(defaultsJsonString);
    }
};
const getDefaultsFromCookie = () => {
    if (typeof document === 'undefined') {
        return;
    }
    let match;
    try {
        match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    }
    catch (e) {
        // Some environments such as Angular Universal SSR have a
        // `document` object but error on accessing `document.cookie`.
        return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 * @public
 */
const getDefaults = () => {
    try {
        return (getDefaultsFromGlobal() ||
            getDefaultsFromEnvVariable() ||
            getDefaultsFromCookie());
    }
    catch (e) {
        /**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return;
    }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */
const getDefaultEmulatorHost = (productName) => { var _a, _b; return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName]; };
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */
const getDefaultAppConfig = () => { var _a; return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config; };
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */
const getExperimentalSetting = (name) => { var _a; return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name}`]; };

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
    constructor() {
        this.reject = () => { };
        this.resolve = () => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
        return (error, value) => {
            if (error) {
                this.reject(error);
            }
            else {
                this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(() => { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Internet Explorer. */
function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    try {
        return typeof indexedDB === 'object';
    }
    catch (e) {
        return false;
    }
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
            };
            request.onupgradeneeded = () => {
                preExist = false;
            };
            request.onerror = () => {
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */
const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(
    /** The error code for this error. */
    code, message, 
    /** Custom data for this error. */
    customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */
        this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;
function isEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys) {
        if (!bKeys.includes(k)) {
            return false;
        }
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (const k of bKeys) {
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
        if (Array.isArray(value)) {
            value.forEach(arrayVal => {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return params.length ? '&' + params.join('&') : '';
}

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    constructor(executor, onNoObservers) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(() => {
            executor(this);
        })
            .catch(e => {
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer) => {
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer) => {
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer) => {
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error,
                complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
                try {
                    if (this.finalError) {
                        observer.error(this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    }
    forEachObserver(fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            if (this.observers !== undefined && this.observers[i] !== undefined) {
                try {
                    fn(this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    }
    close(err) {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const method of methods) {
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
let Component$1 = class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME$1 = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
class Provider {
    constructor(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    const instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error(`Service ${this.name} is not available`);
            }
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        }
        if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME$1 });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            }
            catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME$1) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services
                .filter(service => 'INTERNAL' in service) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service.INTERNAL.delete()),
            ...services
                .filter(service => '_delete' in service) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service._delete())
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME$1) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME$1) {
        return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
                instanceDeferred.resolve(instance);
            }
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return () => {
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        for (const callback of callbacks) {
            try {
                callback(instance, identifier);
            }
            catch (_a) {
                // ignore errors in the onInit callback
            }
        }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_a) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME$1) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    }
    shouldAutoInitialize() {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */);
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME$1 ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
class ComponentContainer {
    constructor(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A container for all of the Logger instances
 */
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
const defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
        return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
        console[method](`[${now}]  ${instance.name}:`, ...args);
    }
    else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
        }
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler &&
            this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}

const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);

/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    }
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
        }
    })
        .catch(() => { });
    return openPromise;
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
    constructor(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(provider => {
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            }
            else {
                return null;
            }
        })
            .filter(logString => logString)
            .join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */;
}

const name$o = "@firebase/app";
const version$1$1 = "0.9.10";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new Logger('@firebase/app');

const name$n = "@firebase/app-compat";

const name$m = "@firebase/analytics-compat";

const name$l = "@firebase/analytics";

const name$k = "@firebase/app-check-compat";

const name$j = "@firebase/app-check";

const name$i = "@firebase/auth";

const name$h = "@firebase/auth-compat";

const name$g = "@firebase/database";

const name$f = "@firebase/database-compat";

const name$e = "@firebase/functions";

const name$d = "@firebase/functions-compat";

const name$c = "@firebase/installations";

const name$b = "@firebase/installations-compat";

const name$a = "@firebase/messaging";

const name$9 = "@firebase/messaging-compat";

const name$8 = "@firebase/performance";

const name$7 = "@firebase/performance-compat";

const name$6 = "@firebase/remote-config";

const name$5 = "@firebase/remote-config-compat";

const name$4 = "@firebase/storage";

const name$3 = "@firebase/storage-compat";

const name$2 = "@firebase/firestore";

const name$1$1 = "@firebase/firestore-compat";

const name$p = "firebase";
const version$3 = "9.22.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default app name
 *
 * @internal
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$o]: 'fire-core',
    [name$n]: 'fire-core-compat',
    [name$l]: 'fire-analytics',
    [name$m]: 'fire-analytics-compat',
    [name$j]: 'fire-app-check',
    [name$k]: 'fire-app-check-compat',
    [name$i]: 'fire-auth',
    [name$h]: 'fire-auth-compat',
    [name$g]: 'fire-rtdb',
    [name$f]: 'fire-rtdb-compat',
    [name$e]: 'fire-fn',
    [name$d]: 'fire-fn-compat',
    [name$c]: 'fire-iid',
    [name$b]: 'fire-iid-compat',
    [name$a]: 'fire-fcm',
    [name$9]: 'fire-fcm-compat',
    [name$8]: 'fire-perf',
    [name$7]: 'fire-perf-compat',
    [name$6]: 'fire-rc',
    [name$5]: 'fire-rc-compat',
    [name$4]: 'fire-gcs',
    [name$3]: 'fire-gcs-compat',
    [name$2]: 'fire-fst',
    [name$1$1]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [name$p]: 'fire-js-all'
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
const _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values()) {
        _addComponent(app, component);
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    const heartbeatController = app.container
        .getProvider('heartbeat')
        .getImmediate({ optional: true });
    if (heartbeatController) {
        void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    ["no-app" /* AppError.NO_APP */]: "No Firebase App '{$appName}' has been created - " +
        'call initializeApp() first',
    ["bad-app-name" /* AppError.BAD_APP_NAME */]: "Illegal App name: '{$appName}",
    ["duplicate-app" /* AppError.DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* AppError.APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
    ["no-options" /* AppError.NO_OPTIONS */]: 'Need to provide options, when not being deployed to hosting via source.',
    ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.',
    ["idb-open" /* AppError.IDB_OPEN */]: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-get" /* AppError.IDB_GET */]: 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-set" /* AppError.IDB_WRITE */]: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-delete" /* AppError.IDB_DELETE */]: 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.'
};
const ERROR_FACTORY = new ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
    constructor(options, config, container) {
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new Component$1('app', () => this, "PUBLIC" /* ComponentType.PUBLIC */));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */, { appName: this._name });
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
const SDK_VERSION = version$3;
function initializeApp(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = { name };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
    const name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    options || (options = getDefaultAppConfig());
    if (!options) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
    }
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (deepEqual(options, existingApp.options) &&
            deepEqual(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */, { appName: name });
        }
    }
    const container = new ComponentContainer(name);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name);
    if (!app && name === DEFAULT_ENTRY_NAME && getDefaultAppConfig()) {
        return initializeApp();
    }
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, { appName: name });
    }
    return app;
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) {
            warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new Component$1(`${library}-version`, () => ({ library, version }), "VERSION" /* ComponentType.VERSION */));
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME$1 = 'firebase-heartbeat-database';
const DB_VERSION$1 = 1;
const STORE_NAME = 'firebase-heartbeat-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = openDB(DB_NAME$1, DB_VERSION$1, {
            upgrade: (db, oldVersion) => {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        db.createObjectStore(STORE_NAME);
                }
            }
        }).catch(e => {
            throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
                originalErrorMessage: e.message
            });
        });
    }
    return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
    try {
        const db = await getDbPromise();
        const result = await db
            .transaction(STORE_NAME)
            .objectStore(STORE_NAME)
            .get(computeKey(app));
        return result;
    }
    catch (e) {
        if (e instanceof FirebaseError) {
            logger.warn(e.message);
        }
        else {
            const idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */, {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const objectStore = tx.objectStore(STORE_NAME);
        await objectStore.put(heartbeatObject, computeKey(app));
        await tx.done;
    }
    catch (e) {
        if (e instanceof FirebaseError) {
            logger.warn(e.message);
        }
        else {
            const idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */, {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MAX_HEADER_BYTES = 1024;
// 30 days
const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
class HeartbeatServiceImpl {
    constructor(container) {
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */
        this._heartbeatsCache = null;
        const app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then(result => {
            this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    async triggerHeartbeat() {
        const platformLogger = this.container
            .getProvider('platform-logger')
            .getImmediate();
        // This is the "Firebase user agent" string from the platform logger
        // service, not the browser user agent.
        const agent = platformLogger.getPlatformInfoString();
        const date = getUTCDateString();
        if (this._heartbeatsCache === null) {
            this._heartbeatsCache = await this._heartbeatsCachePromise;
        }
        // Do not store a heartbeat if one is already stored for this day
        // or if a header has already been sent today.
        if (this._heartbeatsCache.lastSentHeartbeatDate === date ||
            this._heartbeatsCache.heartbeats.some(singleDateHeartbeat => singleDateHeartbeat.date === date)) {
            return;
        }
        else {
            // There is no entry for this date. Create one.
            this._heartbeatsCache.heartbeats.push({ date, agent });
        }
        // Remove entries older than 30 days.
        this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(singleDateHeartbeat => {
            const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
            const now = Date.now();
            return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
        });
        return this._storage.overwrite(this._heartbeatsCache);
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null) {
            await this._heartbeatsCachePromise;
        }
        // If it's still null or the array is empty, there is no data to send.
        if (this._heartbeatsCache === null ||
            this._heartbeatsCache.heartbeats.length === 0) {
            return '';
        }
        const date = getUTCDateString();
        // Extract as many heartbeats from the cache as will fit under the size limit.
        const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
        const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
        // Store last sent date to prevent another being logged/sent for the same day.
        this._heartbeatsCache.lastSentHeartbeatDate = date;
        if (unsentEntries.length > 0) {
            // Store any unsent entries if they exist.
            this._heartbeatsCache.heartbeats = unsentEntries;
            // This seems more likely than emptying the array (below) to lead to some odd state
            // since the cache isn't empty and this will be called again on the next request,
            // and is probably safest if we await it.
            await this._storage.overwrite(this._heartbeatsCache);
        }
        else {
            this._heartbeatsCache.heartbeats = [];
            // Do not wait for this, to reduce latency.
            void this._storage.overwrite(this._heartbeatsCache);
        }
        return headerString;
    }
}
function getUTCDateString() {
    const today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    const heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
        // Look for an existing entry with the same user agent.
        const heartbeatEntry = heartbeatsToSend.find(hb => hb.agent === singleDateHeartbeat.agent);
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [singleDateHeartbeat.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
            }
        }
        else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    }
    return {
        heartbeatsToSend,
        unsentEntries
    };
}
class HeartbeatStorageImpl {
    constructor(app) {
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
        if (!isIndexedDBAvailable()) {
            return false;
        }
        else {
            return validateIndexedDBOpenable()
                .then(() => true)
                .catch(() => false);
        }
    }
    /**
     * Read all heartbeats.
     */
    async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return { heartbeats: [] };
        }
        else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            return idbHeartbeatObject || { heartbeats: [] };
        }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        }
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats
            });
        }
    }
    // add heartbeats
    async add(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        }
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                    ...existingHeartbeatsObject.heartbeats,
                    ...heartbeatsObject.heartbeats
                ]
            });
        }
    }
}
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */
function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return base64urlEncodeWithoutPadding(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new Component$1('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
    _registerComponent(new Component$1('heartbeat', container => new HeartbeatServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
    // Register `app` package.
    registerVersion(name$o, version$1$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('');

var name$1 = "firebase";
var version$2 = "9.22.0";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerVersion(name$1, version$2, 'app');

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$3=Symbol.for("react.element"),n$3=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r$2=Symbol.for("react.profiler"),t$1=Symbol.for("react.provider"),u$2=Symbol.for("react.context"),v$1=Symbol.for("react.forward_ref"),w$2=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y$2=Symbol.for("react.lazy"),z=Symbol.iterator;function A$1(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$2={};function E$1(a,b,e){this.props=a;this.context=b;this.refs=D$2;this.updater=e||B;}E$1.prototype.isReactComponent={};
E$1.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$1.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F$2(){}F$2.prototype=E$1.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D$2;this.updater=e||B;}var H$1=G.prototype=new F$2;
H$1.constructor=G;C$1(H$1,E$1.prototype);H$1.isPureReactComponent=!0;var I$3=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};
function M$1(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L$1.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$3,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N$2(a,b){return {$$typeof:l$3,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$1(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$3}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R$1(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l$3:case n$3:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$1(h,0):d,I$3(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R$1(c,b,e,"",function(a){return a})):null!=c&&(O$1(c)&&(c=N$2(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$3(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q$1(k,g);h+=R$1(k,b,e,f,c);}else if(f=A$1(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$1(k,g++),h+=R$1(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S$3(a,b,e){if(null==a)return a;var d=[],c=0;R$1(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T$2(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};var Children={map:S$3,forEach:function(a,b,e){S$3(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$3(a,function(){b++;});return b},toArray:function(a){return S$3(a,function(a){return a})||[]},only:function(a){if(!O$1(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};var Component=E$1;var Fragment=p$2;
var Profiler=r$2;var PureComponent=G;var StrictMode=q$1;var Suspense=w$2;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
var cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$1({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L$1.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$3,type:a.type,key:c,ref:k,props:d,_owner:h}};var createContext=function(a){a={$$typeof:u$2,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t$1,_context:a};return a.Consumer=a};var createElement=M$1;var createFactory=function(a){var b=M$1.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};
var forwardRef=function(a){return {$$typeof:v$1,render:a}};var isValidElement=O$1;var lazy=function(a){return {$$typeof:y$2,_payload:{_status:-1,_result:a},_init:T$2}};var memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};var startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};var unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
var useCallback=function(a,b){return U.current.useCallback(a,b)};var useContext=function(a){return U.current.useContext(a)};var useDebugValue=function(){};var useDeferredValue=function(a){return U.current.useDeferredValue(a)};var useEffect=function(a,b){return U.current.useEffect(a,b)};var useId=function(){return U.current.useId()};var useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
var useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};var useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};var useMemo=function(a,b){return U.current.useMemo(a,b)};var useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};var useRef=function(a){return U.current.useRef(a)};var useState=function(a){return U.current.useState(a)};var useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
var useTransition=function(){return U.current.useTransition()};var version$1="18.2.0";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	startTransition: startTransition,
	unstable_act: unstable_act,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useDeferredValue: useDeferredValue,
	useEffect: useEffect,
	useId: useId,
	useImperativeHandle: useImperativeHandle,
	useInsertionEffect: useInsertionEffect,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	useSyncExternalStore: useSyncExternalStore,
	useTransition: useTransition,
	version: version$1
};

var react_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.2.0';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}
});
react_development.Children;
react_development.Component;
react_development.Fragment;
react_development.Profiler;
react_development.PureComponent;
react_development.StrictMode;
react_development.Suspense;
react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
react_development.cloneElement;
react_development.createContext;
react_development.createElement;
react_development.createFactory;
react_development.createRef;
react_development.forwardRef;
react_development.isValidElement;
react_development.lazy;
react_development.memo;
react_development.startTransition;
react_development.unstable_act;
react_development.useCallback;
react_development.useContext;
react_development.useDebugValue;
react_development.useDeferredValue;
react_development.useEffect;
react_development.useId;
react_development.useImperativeHandle;
react_development.useInsertionEffect;
react_development.useLayoutEffect;
react_development.useMemo;
react_development.useReducer;
react_development.useRef;
react_development.useState;
react_development.useSyncExternalStore;
react_development.useTransition;
react_development.version;

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});
react.Children;
react.Component;
var react_3 = react.Fragment;
react.Profiler;
react.PureComponent;
react.StrictMode;
react.Suspense;
react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var react_9 = react.cloneElement;
var react_10 = react.createContext;
var react_11 = react.createElement;
react.createFactory;
var react_13 = react.createRef;
var react_14 = react.forwardRef;
var react_15 = react.isValidElement;
react.lazy;
react.memo;
react.startTransition;
react.unstable_act;
var react_20 = react.useCallback;
var react_21 = react.useContext;
react.useDebugValue;
react.useDeferredValue;
var react_24 = react.useEffect;
react.useId;
react.useImperativeHandle;
react.useInsertionEffect;
var react_28 = react.useLayoutEffect;
var react_29 = react.useMemo;
var react_30 = react.useReducer;
var react_31 = react.useRef;
var react_32 = react.useState;
react.useSyncExternalStore;
react.useTransition;
react.version;

var i$2=Object.defineProperty;var d$3=(t,e,n)=>e in t?i$2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r$1=(t,e,n)=>(d$3(t,typeof e!="symbol"?e+"":e,n),n);let o$4 = class o{constructor(){r$1(this,"current",this.detect());r$1(this,"handoffState","pending");r$1(this,"currentId",0);}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e);}reset(){this.set(this.detect());}nextId(){return ++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete");}get isHandoffComplete(){return this.handoffState==="complete"}};let s$5=new o$4;

let l$2=(e,f)=>{s$5.isServer?react_24(e,f):react_28(e,f);};

function s$4(e){let r=react_31(e);return l$2(()=>{r.current=e;},[e]),r}

function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}));}

function o$3(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t$1={current:!0};return t(()=>{t$1.current&&e[0]();}),r.add(()=>{t$1.current=!1;})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a});})},group(e){let t=o$3();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s();}},dispose(){for(let e of n.splice(0))e();}};return r}

function p$1(){let[e]=react_32(o$3);return react_24(()=>()=>e.dispose(),[e]),e}

let o$2=function(t){let e=s$4(t);return react.useCallback((...r)=>e.current(...r),[e])};

function l$1(){let[e,f]=react_32(s$5.isHandoffComplete);return e&&s$5.isHandoffComplete===!1&&f(!1),react_24(()=>{e!==!0&&f(!0);},[e]),react_24(()=>s$5.handoff(),[]),e}

var o$1;let I$2=(o$1=react.useId)!=null?o$1:function(){let n=l$1(),[e,u]=react.useState(n?()=>s$5.nextId():null);return l$2(()=>{e===null&&u(s$5.nextId());},[e]),e!=null?""+e:void 0};

function u$1(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$1),t}

function e$1(r){return s$5.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

let c$4=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(M||{}),N$1=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N$1||{}),F$1=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(F$1||{});function f$1(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(c$4)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var T$1=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(T$1||{});function h(e,r=0){var t;return e===((t=e$1(e))==null?void 0:t.body)?!1:u$1(r,{[0](){return e.matches(c$4)},[1](){let l=e;for(;l!==null;){if(l.matches(c$4))return !0;l=l.parentElement;}return !1}})}var w$1=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w$1||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="");},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="");},!0));let S$2=["textarea","input"].join(",");function H(e){var r,t;return (t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,S$2))!=null?t:!1}function I$1(e,r=t=>t){return e.slice().sort((t,l)=>{let o=r(t),i=r(l);if(o===null||i===null)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function O(e,r,{sorted:t=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?I$1(e):e:f$1(e);o.length>0&&n.length>1&&(n=n.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let E=(()=>{if(r&5)return 1;if(r&10)return -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(l))-1;if(r&4)return Math.max(0,n.indexOf(l))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=r&32?{preventScroll:!0}:{},d=0,a=n.length,u;do{if(d>=a||d+a<=0)return 0;let s=x+d;if(r&16)s=(s+a)%a;else {if(s<0)return 3;if(s>=a)return 1}u=n[s],u==null||u.focus(p),d+=E;}while(u!==i.activeElement);return r&6&&H(u)&&u.select(),2}

function d$2(e,r,n){let o=s$4(r);react_24(()=>{function t(u){o.current(u);}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n]);}

function L(m,E,c=!0){let i=react_31(!1);react_24(()=>{requestAnimationFrame(()=>{i.current=c;});},[c]);function f(e,o){if(!i.current||e.defaultPrevented)return;let l=function r(t){return typeof t=="function"?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(m),n=o(e);if(n!==null&&n.getRootNode().contains(n)){for(let r of l){if(r===null)continue;let t=r instanceof HTMLElement?r:r.current;if(t!=null&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return !h(n,T$1.Loose)&&n.tabIndex!==-1&&e.preventDefault(),E(e,n)}}let u=react_31(null);d$2("mousedown",e=>{var o,l;i.current&&(u.current=((l=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:l[0])||e.target);},!0),d$2("click",e=>{u.current&&(f(e,()=>u.current),u.current=null);},!0),d$2("blur",e=>f(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0);}

function i$1(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return "button"}function s$3(t,e){let[n,u]=react_32(()=>i$1(t));return l$2(()=>{u(i$1(t));},[t.type,t.as]),l$2(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button");},[n,e]),n}

let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y$1(...t){let n=react_31(t);react_24(()=>{n.current=t;},[t]);let c=o$2(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e);});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}

function e(...n){return n.filter(Boolean).join(" ")}

var S$1=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(S$1||{}),j=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j||{});function X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:f}){let o=N(t,r);if(n)return c$3(o,e,a,f);let u=s!=null?s:0;if(u&2){let{static:l=!1,...p}=o;if(l)return c$3(p,e,a,f)}if(u&1){let{unmount:l=!0,...p}=o;return u$1(l?0:1,{[0](){return null},[1](){return c$3({...p,hidden:!0,style:{display:"none"}},e,a,f)}})}return c$3(o,e,a,f)}function c$3(r,t={},e$1,a){let{as:s=e$1,children:n,refName:f="ref",...o}=g(r,["unmount","static"]),u=r.ref!==void 0?{[f]:r.ref}:{},l=typeof n=="function"?n(t):n;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let p={};if(t){let i=!1,m=[];for(let[y,d]of Object.entries(t))typeof d=="boolean"&&(i=!0),d===!0&&m.push(y);i&&(p["data-headlessui-state"]=m.join(" "));}if(s===react_3&&Object.keys(R(o)).length>0){if(!react_15(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let i=l.props,m=typeof(i==null?void 0:i.className)=="function"?(...d)=>e(i==null?void 0:i.className(...d),o.className):e(i==null?void 0:i.className,o.className),y=m?{className:m}:{};return react_9(l,Object.assign({},N(l.props,R(g(o,["ref"]))),p,u,w(l.ref,u.ref),y))}return react_11(s,Object.assign({},g(o,["ref"]),s!==react_3&&u,s!==react_3&&p),l)}function w(...r){return {ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t);}}}function N(...r){if(r.length===0)return {};if(r.length===1)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?((e[n])!=null||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(s=>[s,void 0])));for(let s in e)Object.assign(t,{[s](n,...f){let o=e[s];for(let u of o){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...f);}}});return t}function D$1(r){var t;return Object.assign(react_14(r),{displayName:(t=r.displayName)!=null?t:r.name})}function R(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function g(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}

function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return !1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return !1;e=e.previousElementSibling;}return !0}

let a="div";var p=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(p||{});function s$2(t,o){let{features:n=1,...e}=t,d={ref:o,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return X({ourProps:d,theirProps:e,slot:{},defaultTag:a,name:"Hidden"})}let c$2=D$1(s$2);

let n$2=react_10(null);n$2.displayName="OpenClosedContext";var d$1=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d$1||{});function C(){return react_21(n$2)}function c$1({value:o,children:r}){return react.createElement(n$2.Provider,{value:o},r)}

var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});

function s$1(e,r,n){let o=s$4(r);react_24(()=>{function t(i){o.current(i);}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n]);}

var s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(s||{});function n$1(){let e=react_31(0);return s$1("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0);},!0),e}

function f(){let e=react_31(!1);return l$2(()=>(e.current=!0,()=>{e.current=!1;}),[]),e}

function n(...e){return react_29(()=>e$1(...e),[...e])}

function E(n,e,a,t){let i=s$4(a);react_24(()=>{n=n!=null?n:window;function r(o){i.current(o);}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t]);}

var Fe=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(Fe||{}),Ie=(t=>(t[t.TogglePopover=0]="TogglePopover",t[t.ClosePopover=1]="ClosePopover",t[t.SetButton=2]="SetButton",t[t.SetButtonId=3]="SetButtonId",t[t.SetPanel=4]="SetPanel",t[t.SetPanelId=5]="SetPanelId",t))(Ie||{});let xe$1={[0]:o=>({...o,popoverState:u$1(o.popoverState,{[0]:1,[1]:0})}),[1](o){return o.popoverState===1?o:{...o,popoverState:1}},[2](o,l){return o.button===l.button?o:{...o,button:l.button}},[3](o,l){return o.buttonId===l.buttonId?o:{...o,buttonId:l.buttonId}},[4](o,l){return o.panel===l.panel?o:{...o,panel:l.panel}},[5](o,l){return o.panelId===l.panelId?o:{...o,panelId:l.panelId}}},le=react_10(null);le.displayName="PopoverContext";function Q(o){let l=react_21(le);if(l===null){let s=new Error(`<${o} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,Q),s}return l}let ae=react_10(null);ae.displayName="PopoverAPIContext";function pe(o){let l=react_21(ae);if(l===null){let s=new Error(`<${o} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,pe),s}return l}let se=react_10(null);se.displayName="PopoverGroupContext";function ve(){return react_21(se)}let Z=react_10(null);Z.displayName="PopoverPanelContext";function Le(){return react_21(Z)}function Me(o,l){return u$1(l.type,xe$1,o,l)}let Be="div";function De$1(o,l){var B;let s=react_31(null),R=y$1(l,T(e=>{s.current=e;})),C=react_31([]),r=react_30(Me,{popoverState:1,buttons:C,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:react_13(),afterPanelSentinel:react_13()}),[{popoverState:t,button:a,buttonId:v,panel:f,panelId:F,beforePanelSentinel:T$2,afterPanelSentinel:d},i]=r,p=n((B=s.current)!=null?B:a),P=react_29(()=>{if(!a||!f)return !1;for(let N of document.querySelectorAll("body > *"))if(Number(N==null?void 0:N.contains(a))^Number(N==null?void 0:N.contains(f)))return !0;let e=f$1(),n=e.indexOf(a),A=(n+e.length-1)%e.length,g=(n+1)%e.length,G=e[A],Te=e[g];return !f.contains(G)&&!f.contains(Te)},[a,f]),S=s$4(v),y=s$4(F),x=react_29(()=>({buttonId:S,panelId:y,close:()=>i({type:1})}),[S,y,i]),O=ve(),L$1=O==null?void 0:O.registerPopover,j=o$2(()=>{var e;return (e=O==null?void 0:O.isFocusWithinPopoverGroup())!=null?e:(p==null?void 0:p.activeElement)&&((a==null?void 0:a.contains(p.activeElement))||(f==null?void 0:f.contains(p.activeElement)))});react_24(()=>L$1==null?void 0:L$1(x),[L$1,x]),E(p==null?void 0:p.defaultView,"focus",e=>{var n,A,g,G;t===0&&(j()||a&&f&&e.target!==window&&((A=(n=T$2.current)==null?void 0:n.contains)!=null&&A.call(n,e.target)||(G=(g=d.current)==null?void 0:g.contains)!=null&&G.call(g,e.target)||i({type:1})));},!0),L([a,f],(e,n)=>{i({type:1}),h(n,T$1.Loose)||(e.preventDefault(),a==null||a.focus());},t===0);let M=o$2(e=>{i({type:1});let n=(()=>e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:a:a)();n==null||n.focus();}),u=react_29(()=>({close:M,isPortalled:P}),[M,P]),m=react_29(()=>({open:t===0,close:M}),[t,M]),E$1=o,c={ref:R};return react.createElement(Z.Provider,{value:null},react.createElement(le.Provider,{value:r},react.createElement(ae.Provider,{value:u},react.createElement(c$1,{value:u$1(t,{[0]:d$1.Open,[1]:d$1.Closed})},X({ourProps:c,theirProps:E$1,slot:m,defaultTag:Be,name:"Popover"})))))}let he="button";function He$1(o$1,l){let s$1=I$2(),{id:R=`headlessui-popover-button-${s$1}`,...C}=o$1,[r$1,t]=Q("Popover.Button"),{isPortalled:a}=pe("Popover.Button"),v=react_31(null),f=`headlessui-focus-sentinel-${I$2()}`,F=ve(),T=F==null?void 0:F.closeOthers,i=Le()!==null;react_24(()=>{if(!i)return t({type:3,buttonId:R}),()=>{t({type:3,buttonId:null});}},[i,R,t]);let[p$1]=react_32(()=>Symbol()),P=y$1(v,l,i?null:e=>{if(e)r$1.buttons.current.push(p$1);else {let n=r$1.buttons.current.indexOf(p$1);n!==-1&&r$1.buttons.current.splice(n,1);}r$1.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&t({type:2,button:e});}),S=y$1(v,l),y=n(v),x=o$2(e=>{var n,A,g;if(i){if(r$1.popoverState===1)return;switch(e.key){case o.Space:case o.Enter:e.preventDefault(),(A=(n=e.target).click)==null||A.call(n),t({type:1}),(g=r$1.button)==null||g.focus();break}}else switch(e.key){case o.Space:case o.Enter:e.preventDefault(),e.stopPropagation(),r$1.popoverState===1&&(T==null||T(r$1.buttonId)),t({type:0});break;case o.Escape:if(r$1.popoverState!==0)return T==null?void 0:T(r$1.buttonId);if(!v.current||y!=null&&y.activeElement&&!v.current.contains(y.activeElement))return;e.preventDefault(),e.stopPropagation(),t({type:1});break}}),O$1=o$2(e=>{i||e.key===o.Space&&e.preventDefault();}),L=o$2(e=>{var n,A;r(e.currentTarget)||o$1.disabled||(i?(t({type:1}),(n=r$1.button)==null||n.focus()):(e.preventDefault(),e.stopPropagation(),r$1.popoverState===1&&(T==null||T(r$1.buttonId)),t({type:0}),(A=r$1.button)==null||A.focus()));}),j=o$2(e=>{e.preventDefault(),e.stopPropagation();}),M$1=r$1.popoverState===0,u=react_29(()=>({open:M$1}),[M$1]),m=s$3(o$1,v),E=i?{ref:S,type:m,onKeyDown:x,onClick:L}:{ref:P,id:r$1.buttonId,type:m,"aria-expanded":o$1.disabled?void 0:r$1.popoverState===0,"aria-controls":r$1.panel?r$1.panelId:void 0,onKeyDown:x,onKeyUp:O$1,onClick:L,onMouseDown:j},c=n$1(),B=o$2(()=>{let e=r$1.panel;if(!e)return;function n(){u$1(c.current,{[s.Forwards]:()=>O(e,M.First),[s.Backwards]:()=>O(e,M.Last)})===N$1.Error&&O(f$1().filter(g=>g.dataset.headlessuiFocusGuard!=="true"),u$1(c.current,{[s.Forwards]:M.Next,[s.Backwards]:M.Previous}),{relativeTo:r$1.button});}n();});return react.createElement(react.Fragment,null,X({ourProps:E,theirProps:C,slot:u,defaultTag:he,name:"Popover.Button"}),M$1&&!i&&a&&react.createElement(c$2,{id:f,features:p.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:B}))}let Ge="div",_e=S$1.RenderStrategy|S$1.Static;function ke(o,l){let s=I$2(),{id:R=`headlessui-popover-overlay-${s}`,...C$1}=o,[{popoverState:r$1},t]=Q("Popover.Overlay"),a=y$1(l),v=C(),f=(()=>v!==null?(v&d$1.Open)===d$1.Open:r$1===0)(),F=o$2(i=>{if(r(i.currentTarget))return i.preventDefault();t({type:1});}),T=react_29(()=>({open:r$1===0}),[r$1]);return X({ourProps:{ref:a,id:R,"aria-hidden":!0,onClick:F},theirProps:C$1,slot:T,defaultTag:Ge,features:_e,visible:f,name:"Popover.Overlay"})}let we="div",Ne$1=S$1.RenderStrategy|S$1.Static;function Ue(o$1,l){let s$1=I$2(),{id:R=`headlessui-popover-panel-${s$1}`,focus:C$1=!1,...r}=o$1,[t,a]=Q("Popover.Panel"),{close:v,isPortalled:f}=pe("Popover.Panel"),F=`headlessui-focus-sentinel-before-${I$2()}`,T=`headlessui-focus-sentinel-after-${I$2()}`,d=react_31(null),i=y$1(d,l,u=>{a({type:4,panel:u});}),p$1=n(d);l$2(()=>(a({type:5,panelId:R}),()=>{a({type:5,panelId:null});}),[R,a]);let P=C(),S=(()=>P!==null?(P&d$1.Open)===d$1.Open:t.popoverState===0)(),y=o$2(u=>{var m;switch(u.key){case o.Escape:if(t.popoverState!==0||!d.current||p$1!=null&&p$1.activeElement&&!d.current.contains(p$1.activeElement))return;u.preventDefault(),u.stopPropagation(),a({type:1}),(m=t.button)==null||m.focus();break}});react_24(()=>{var u;o$1.static||t.popoverState===1&&((u=o$1.unmount)==null||u)&&a({type:4,panel:null});},[t.popoverState,o$1.unmount,o$1.static,a]),react_24(()=>{if(!C$1||t.popoverState!==0||!d.current)return;let u=p$1==null?void 0:p$1.activeElement;d.current.contains(u)||O(d.current,M.First);},[C$1,d,t.popoverState]);let x=react_29(()=>({open:t.popoverState===0,close:v}),[t,v]),O$1={ref:i,id:R,onKeyDown:y,onBlur:C$1&&t.popoverState===0?u=>{var E,c,B,e,n;let m=u.relatedTarget;m&&d.current&&((E=d.current)!=null&&E.contains(m)||(a({type:1}),((B=(c=t.beforePanelSentinel.current)==null?void 0:c.contains)!=null&&B.call(c,m)||(n=(e=t.afterPanelSentinel.current)==null?void 0:e.contains)!=null&&n.call(e,m))&&m.focus({preventScroll:!0})));}:void 0,tabIndex:-1},L=n$1(),j=o$2(()=>{let u=d.current;if(!u)return;function m(){u$1(L.current,{[s.Forwards]:()=>{var c;O(u,M.First)===N$1.Error&&((c=t.afterPanelSentinel.current)==null||c.focus());},[s.Backwards]:()=>{var E;(E=t.button)==null||E.focus({preventScroll:!0});}});}m();}),M$1=o$2(()=>{let u=d.current;if(!u)return;function m(){u$1(L.current,{[s.Forwards]:()=>{var A;if(!t.button)return;let E=f$1(),c=E.indexOf(t.button),B=E.slice(0,c+1),n=[...E.slice(c+1),...B];for(let g of n.slice())if(g.dataset.headlessuiFocusGuard==="true"||(A=t.panel)!=null&&A.contains(g)){let G=n.indexOf(g);G!==-1&&n.splice(G,1);}O(n,M.First,{sorted:!1});},[s.Backwards]:()=>{var c;O(u,M.Previous)===N$1.Error&&((c=t.button)==null||c.focus());}});}m();});return react.createElement(Z.Provider,{value:R},S&&f&&react.createElement(c$2,{id:F,ref:t.beforePanelSentinel,features:p.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:j}),X({ourProps:O$1,theirProps:r,slot:x,defaultTag:we,features:Ne$1,visible:S,name:"Popover.Panel"}),S&&f&&react.createElement(c$2,{id:T,ref:t.afterPanelSentinel,features:p.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:M$1}))}let Ke="div";function We(o,l){let s=react_31(null),R=y$1(s,l),[C,r]=react_32([]),t=o$2(p=>{r(P=>{let S=P.indexOf(p);if(S!==-1){let y=P.slice();return y.splice(S,1),y}return P});}),a=o$2(p=>(r(P=>[...P,p]),()=>t(p))),v=o$2(()=>{var S;let p=e$1(s);if(!p)return !1;let P=p.activeElement;return (S=s.current)!=null&&S.contains(P)?!0:C.some(y=>{var x,O;return ((x=p.getElementById(y.buttonId.current))==null?void 0:x.contains(P))||((O=p.getElementById(y.panelId.current))==null?void 0:O.contains(P))})}),f=o$2(p=>{for(let P of C)P.buttonId.current!==p&&P.close();}),F=react_29(()=>({registerPopover:a,unregisterPopover:t,isFocusWithinPopoverGroup:v,closeOthers:f}),[a,t,v,f]),T=react_29(()=>({}),[]),d=o,i={ref:R};return react.createElement(se.Provider,{value:F},X({ourProps:i,theirProps:d,slot:T,defaultTag:Ke,name:"Popover.Group"}))}let je=D$1(De$1),Ve=D$1(He$1),$e=D$1(ke),Je=D$1(Ue),Xe=D$1(We),Lt=Object.assign(je,{Button:Ve,Overlay:$e,Panel:Je,Group:Xe});

function c(a=0){let[l,r]=react_32(a),t=f(),o=react_20(e=>{t.current&&r(u=>u|e);},[l,t]),m=react_20(e=>Boolean(l&e),[l]),s=react_20(e=>{t.current&&r(u=>u&~e);},[r,t]),g=react_20(e=>{t.current&&r(u=>u^e);},[r]);return {flags:l,addFlag:o,hasFlag:m,removeFlag:s,toggleFlag:g}}

function l(r){let e={called:!1};return (...t)=>{if(!e.called)return e.called=!0,r(...t)}}

function d(t,...e){t&&e.length>0&&t.classList.add(...e);}function v(t,...e){t&&e.length>0&&t.classList.remove(...e);}function F(t,e){let n=o$3();if(!t)return n.dispose;let{transitionDuration:m,transitionDelay:o}=getComputedStyle(t),[u,p]=[m,o].map(a=>{let[r=0]=a.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,f)=>f-i);return r}),l=u+p;if(l!==0){n.group(r=>{r.setTimeout(()=>{e(),r.dispose();},l),r.addEventListener(t,"transitionrun",i=>{i.target===i.currentTarget&&r.dispose();});});let a=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),a());});}else e();return n.add(()=>e()),n.dispose}function y(t,e,n,m){let o=n?"enter":"leave",u=o$3(),p=m!==void 0?l(m):()=>{};o==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let l$1=u$1(o,{enter:()=>e.enter,leave:()=>e.leave}),a=u$1(o,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=u$1(o,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),d(t,...l$1,...r),u.nextFrame(()=>{v(t,...r),d(t,...a),F(t,()=>(v(t,...l$1),d(t,...e.entered),p()));}),u.dispose}

function D({container:i,direction:t,classes:o,onStart:s,onStop:u}){let a=f(),c=p$1(),r=s$4(t);l$2(()=>{let e=o$3();c.add(e.dispose);let n=i.current;if(n&&r.current!=="idle"&&a.current)return e.dispose(),s.current(r.current),e.add(y(n,o.current,r.current==="enter",()=>{e.dispose(),u.current(r.current);})),e.dispose},[t]);}

function S(n=""){return n.split(" ").filter(t=>t.trim().length>1)}let A=react_10(null);A.displayName="TransitionContext";var Ce=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Ce||{});function Ee(){let n=react_21(A);if(n===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return n}function be(){let n=react_21(I);if(n===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return n}let I=react_10(null);I.displayName="NestingContext";function _(n){return "children"in n?_(n.children):n.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ne(n,t){let r=s$4(n),o=react_31([]),y=f(),N=p$1(),p=o$2((s,e=j.Hidden)=>{let a=o.current.findIndex(({el:i})=>i===s);a!==-1&&(u$1(e,{[j.Unmount](){o.current.splice(a,1);},[j.Hidden](){o.current[a].state="hidden";}}),N.microTask(()=>{var i;!_(o)&&y.current&&((i=r.current)==null||i.call(r));}));}),x=o$2(s=>{let e=o.current.find(({el:a})=>a===s);return e?e.state!=="visible"&&(e.state="visible"):o.current.push({el:s,state:"visible"}),()=>p(s,j.Unmount)}),m=react_31([]),c=react_31(Promise.resolve()),u=react_31({enter:[],leave:[],idle:[]}),h=o$2((s,e,a)=>{m.current.splice(0),t&&(t.chains.current[e]=t.chains.current[e].filter(([i])=>i!==s)),t==null||t.chains.current[e].push([s,new Promise(i=>{m.current.push(i);})]),t==null||t.chains.current[e].push([s,new Promise(i=>{Promise.all(u.current[e].map(([l,T])=>T)).then(()=>i());})]),e==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>a(e)):a(e);}),v=o$2((s,e,a)=>{Promise.all(u.current[e].splice(0).map(([i,l])=>l)).then(()=>{var i;(i=m.current.shift())==null||i();}).then(()=>a(e));});return react_29(()=>({children:o,register:x,unregister:p,onStart:h,onStop:v,wait:c,chains:u}),[x,p,o,h,v,u,c])}function Se(){}let xe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function re(n){var r;let t={};for(let o of xe)t[o]=(r=n[o])!=null?r:Se;return t}function Pe(n){let t=react_31(re(n));return react_24(()=>{t.current=re(n);},[n]),t}let Re="div",ie=S$1.RenderStrategy;function ye(n,t){let{beforeEnter:r,afterEnter:o,beforeLeave:y,afterLeave:N,enter:p,enterFrom:x,enterTo:m,entered:c$2,leave:u,leaveFrom:h,leaveTo:v,...s}=n,e$1=react_31(null),a=y$1(e$1,t),i=s.unmount?j.Unmount:j.Hidden,{show:l,appear:T,initial:se}=Ee(),[g,M]=react_32(l?"visible":"hidden"),z=be(),{register:F,unregister:L}=z,U=react_31(null);react_24(()=>F(e$1),[F,e$1]),react_24(()=>{if(i===j.Hidden&&e$1.current){if(l&&g!=="visible"){M("visible");return}return u$1(g,{["hidden"]:()=>L(e$1),["visible"]:()=>F(e$1)})}},[g,e$1,F,L,l,i]);let j$1=s$4({enter:S(p),enterFrom:S(x),enterTo:S(m),entered:S(c$2),leave:S(u),leaveFrom:S(h),leaveTo:S(v)}),w=Pe({beforeEnter:r,afterEnter:o,beforeLeave:y,afterLeave:N}),k=l$1();react_24(()=>{if(k&&g==="visible"&&e$1.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[e$1,g,k]);let G=se&&!T,ae=(()=>!k||G||U.current===l?"idle":l?"enter":"leave")(),H=c(0),le=o$2(C=>u$1(C,{enter:()=>{H.addFlag(d$1.Opening),w.current.beforeEnter();},leave:()=>{H.addFlag(d$1.Closing),w.current.beforeLeave();},idle:()=>{}})),ue=o$2(C=>u$1(C,{enter:()=>{H.removeFlag(d$1.Opening),w.current.afterEnter();},leave:()=>{H.removeFlag(d$1.Closing),w.current.afterLeave();},idle:()=>{}})),O=ne(()=>{M("hidden"),L(e$1);},z);D({container:e$1,classes:j$1,direction:ae,onStart:s$4(C=>{O.onStart(e$1,C,le);}),onStop:s$4(C=>{O.onStop(e$1,C,ue),C==="leave"&&!_(O)&&(M("hidden"),L(e$1));})}),react_24(()=>{G&&(i===j.Hidden?U.current=null:U.current=l);},[l,G,g]);let B=s,Te={ref:a};return T&&l&&(B={...B,className:e(s.className,...j$1.current.enter,...j$1.current.enterFrom)}),react.createElement(I.Provider,{value:O},react.createElement(c$1,{value:u$1(g,{["visible"]:d$1.Open,["hidden"]:d$1.Closed})|H.flags},X({ourProps:Te,theirProps:B,defaultTag:Re,features:ie,visible:g==="visible",name:"Transition.Child"})))}function Ne(n,t){let{show:r,appear:o=!1,unmount:y,...N}=n,p=react_31(null),x=y$1(p,t);l$1();let m=C();if(r===void 0&&m!==null&&(r=(m&d$1.Open)===d$1.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,u]=react_32(r?"visible":"hidden"),h=ne(()=>{u("hidden");}),[v,s]=react_32(!0),e=react_31([r]);l$2(()=>{v!==!1&&e.current[e.current.length-1]!==r&&(e.current.push(r),s(!1));},[e,r]);let a=react_29(()=>({show:r,appear:o,initial:v}),[r,o,v]);react_24(()=>{if(r)u("visible");else if(!_(h))u("hidden");else {let l=p.current;if(!l)return;let T=l.getBoundingClientRect();T.x===0&&T.y===0&&T.width===0&&T.height===0&&u("hidden");}},[r,h]);let i={unmount:y};return react.createElement(I.Provider,{value:h},react.createElement(A.Provider,{value:a},X({ourProps:{...i,as:react_3,children:react.createElement(oe,{ref:x,...i,...N})},theirProps:{},defaultTag:react_3,features:ie,visible:c==="visible",name:"Transition"})))}function He(n,t){let r=react_21(A)!==null,o=C()!==null;return react.createElement(react.Fragment,null,!r&&o?react.createElement(q,{ref:t,...n}):react.createElement(oe,{ref:t,...n}))}let q=D$1(Ne),oe=D$1(ye),De=D$1(He),tt=Object.assign(q,{Child:De,Root:q});

var _clipPath, _g;
function _extends$6() { _extends$6 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var SvgPortalGridIcon = function SvgPortalGridIcon(props) {
  return /*#__PURE__*/react_11("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    strokeMiterlimit: 10,
    style: {
      fillRule: "nonzero",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    viewBox: "0 0 267.426 268.163"
  }, props), _clipPath || (_clipPath = /*#__PURE__*/react_11("clipPath", {
    id: "PortalGridIcon_svg__a"
  }, /*#__PURE__*/react_11("path", {
    d: "M0 0h267.426v268.163H0z"
  }))), _g || (_g = /*#__PURE__*/react_11("g", {
    fill: "#fff",
    clipPath: "url(#PortalGridIcon_svg__a)"
  }, /*#__PURE__*/react_11("path", {
    d: "M10.604 0h41.213C57.673 0 62.42 4.747 62.42 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603H10.604C4.747 62.42 0 57.673 0 51.817V10.604C0 4.747 4.747 0 10.604 0ZM113.604 0h41.213c5.856 0 10.603 4.747 10.603 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603h-41.213c-5.857 0-10.604-4.747-10.604-10.603V10.604C103 4.747 107.747 0 113.604 0ZM215.604 0h41.213c5.856 0 10.603 4.747 10.603 10.604v41.213c0 5.856-4.747 10.603-10.603 10.603h-41.213c-5.857 0-10.604-4.747-10.604-10.603V10.604C205 4.747 209.747 0 215.604 0ZM10.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604H10.604C4.747 165.154 0 160.406 0 154.55v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM113.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM215.604 102.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM10.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604H10.604C4.747 268.154 0 263.406 0 257.55v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM113.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604ZM215.604 205.733h41.213c5.856 0 10.603 4.748 10.603 10.604v41.213c0 5.856-4.747 10.604-10.603 10.604h-41.213c-5.857 0-10.604-4.748-10.604-10.604v-41.213c0-5.856 4.747-10.604 10.604-10.604Z"
  }))));
};

var _defs$4;
function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
var SvgAsset9 = function SvgAsset9(props) {
  return /*#__PURE__*/react_11("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1488.35 398.49"
  }, props), _defs$4 || (_defs$4 = /*#__PURE__*/react_11("defs", null, /*#__PURE__*/react_11("filter", {
    id: "Asset_9_svg__a",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_9_svg__b",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-2",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-2",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_9_svg__c",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-3",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-3",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })))), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_9_svg__a)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM633.87 324.48c0 7.29-1.93 13.24-5.77 17.85-3.85 4.61-8.81 6.92-14.89 6.92h-67.77c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85v-88.6h25.88v85.92H608V0h25.88v324.48ZM781.13 349.25h-24.39v-6.03c-9.93 1.64-19.8 3.2-29.6 4.69-11.92 1.79-21.78 2.68-29.6 2.68-13.4 0-20.11-8.03-20.11-24.1V132.11h24.39v190.58l54.92-1.79V132.11h24.39v217.14ZM923.18 349.25h-26.99L846.3 238.56v110.69h-24.76V0h24.76v221.83l46.54-89.71h26.62v.89l-52.69 95.96 56.41 120.29ZM1050.52 324.03c0 16.81-6.95 25.22-20.85 25.22H970.1c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1195.55 302.61c0 13.39-3.66 24.51-10.98 33.36-7.33 8.85-16.51 13.28-27.55 13.28h-65.53V0h24.76v138.14c9.8-1.49 19.61-2.97 29.41-4.46 12.41-1.93 22.15-2.9 29.23-2.9 13.78 0 20.66 8.11 20.66 24.33v147.51Zm-24.76-4.46V158.67l-54.55 1.79v162.69h34.25c13.53 0 20.29-8.33 20.29-24.99ZM1340.02 324.03c0 16.81-7.01 25.22-21.04 25.22h-62.18c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h62.18c14.02 0 21.04 8.41 21.04 25.22v166.7Zm-24.76-.89V158.22h-54.55v164.92h54.55ZM1478.71 349.25h-25.13l-30.53-85.92-30.9 85.92h-24.39v-.89l42.26-110.69-39.65-105.56h25.13l27.93 79.67 28.67-79.67h24.02v.89l-39.65 103.77 42.26 112.47Z",
    style: {
      fill: "#fff"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_9_svg__b)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1478.7 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1478.7c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_9_svg__c)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1419.87 62.05h-263.59c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h263.59c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM782.86 62.05h-52.78c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h52.78c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  }), /*#__PURE__*/react_11("path", {
    d: "M700.66 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1449.28 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1049.92 62.05H878.63c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h171.29c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  })));
};

var _defs$3;
function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var SvgAsset10 = function SvgAsset10(props) {
  return /*#__PURE__*/react_11("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1205.07 398.49"
  }, props), _defs$3 || (_defs$3 = /*#__PURE__*/react_11("defs", null, /*#__PURE__*/react_11("filter", {
    id: "Asset_10_svg__a",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_10_svg__b",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-2",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-2",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_10_svg__c",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-3",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-3",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })))), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_10_svg__a)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM631.64 27.45h-45.05v321.8h-25.88V27.45h-45.43V0h116.36v27.45ZM762.7 349.25h-24.39v-6.03c-9.93 1.64-19.8 3.2-29.6 4.69-11.92 1.79-21.78 2.68-29.6 2.68-13.4 0-20.11-8.03-20.11-24.1V132.11h24.39v190.58l54.92-1.79V132.11h24.39v217.14ZM897.86 203.53h-24.39v-44.86l-45.61 1.79v188.8H803.1V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM994.48 349.25h-35.19c-13.9 0-20.85-8.4-20.85-25.22V158.22h-21.78v-26.11h21.78V64.49h24.39v67.62h31.65v26.11h-31.65v164.92h31.65v26.11ZM1052.01 349.25h-24.39V0h24.39v349.25ZM1195.36 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25Z",
    style: {
      fill: "#fff"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_10_svg__b)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1195.41 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h1185.76c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_10_svg__c)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1136.59 62.05h-43.62c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h43.62c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM899.91 62.05H730.08c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h169.83c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  }), /*#__PURE__*/react_11("path", {
    d: "M700.66 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1166 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z",
    style: {
      fill: "#2bc0d3"
    }
  })));
};

var _defs$2;
function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var SvgAsset11 = function SvgAsset11(props) {
  return /*#__PURE__*/react_11("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1551.75 432.49"
  }, props), _defs$2 || (_defs$2 = /*#__PURE__*/react_11("defs", null, /*#__PURE__*/react_11("filter", {
    id: "Asset_11_svg__a",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_11_svg__b",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-2",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-2",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_11_svg__c",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-3",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-3",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_11_svg__d",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-4",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-4",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })))), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_11_svg__a)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M163.42 350.14h-24.39V128.99c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V.89h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4.89h24.02v349.25ZM326.69 325.37c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V25.66c0-7.29 1.92-13.24 5.77-17.85 3.84-4.61 8.81-6.92 14.89-6.92h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85v81.24h-26.06V28.34h-64.79V322.7h64.79v-85.92h26.06v88.6ZM485.49 325.37c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V25.66c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85v81.24h-25.88V28.34h-62.93v73.65l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM648.77 350.14h-25.69l-10.24-77.66h-57.9l-10.24 77.66h-24.95v-.89L571.69 0h25.51l51.57 350.14Zm-39.28-105.11L583.98 55.79l-25.69 189.24h51.2ZM784.86 350.14H760.1V159.56l-54.55 1.79v188.8h-24.76V133.01h24.76v6.03c9.68-1.49 19.42-3.05 29.23-4.69 11.92-1.79 21.72-2.68 29.42-2.68 13.78 0 20.66 8.11 20.66 24.33v194.15ZM927.28 350.14h-24.39v-6.03c-9.81 1.64-19.61 3.2-29.42 4.69-12.17 1.79-21.91 2.68-29.23 2.68-13.53 0-20.29-8.03-20.29-24.1v-79.22c0-16.66 7.01-24.99 21.04-24.99h58.27v-65.39h-53.24v37.04H826v-36.6c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v191.92Zm-24.02-27v-76.77h-55.29v78.11l55.29-1.34ZM993.74 350.14h-24.39V.89h24.39v349.25ZM1137.83 133.01l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76ZM1265.73 324.93c0 16.81-7.01 25.22-21.04 25.22h-56.78c-14.03 0-21.04-8.4-21.04-25.22v-49.32h24.39v48.87h50.08v-43.29l-64.79-63.6c-6.21-5.95-9.31-13.69-9.31-23.21v-36.15c0-16.81 7.01-25.22 21.04-25.22h56.04c14.02 0 21.04 8.41 21.04 25.22v43.29h-24.02v-42.85h-50.08v37.94l65.35 63.6c6.08 5.8 9.12 13.69 9.12 23.66v41.06ZM1406.29 324.93c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22V158.22c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1542.01 204.42h-24.39v-44.86l-45.61 1.79v188.8h-24.76V133.01h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43Z",
    style: {
      fill: "#fff"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_11_svg__b)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1017.4 399.39H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1017.4c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_11_svg__c)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1542.1 399.39h-416.69c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h416.69c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_11_svg__d)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1483.27 62.95h-455.28c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h455.28c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65ZM928.46 62.95H730.07c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h198.39c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  }), /*#__PURE__*/react_11("path", {
    d: "M700.66 92.36c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1512.68 92.36c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z",
    style: {
      fill: "#2bc0d3"
    }
  })));
};

var _defs$1;
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var SvgAsset12 = function SvgAsset12(props) {
  return /*#__PURE__*/react_11("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1452.86 431.6"
  }, props), _defs$1 || (_defs$1 = /*#__PURE__*/react_11("defs", null, /*#__PURE__*/react_11("filter", {
    id: "Asset_12_svg__a",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_12_svg__b",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-2",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-2",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_12_svg__c",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-3",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-3",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_12_svg__d",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-4",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-4",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })))), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_12_svg__a)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM644.86 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM752.83 349.25h-35.19c-13.9 0-20.85-8.4-20.85-25.22V158.22h-21.78v-26.11h21.78V64.49h24.39v67.62h31.65v26.11h-31.65v164.92h31.65v26.11ZM888.55 324.03c0 16.81-7.01 25.22-21.04 25.22h-62.18c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h62.18c14.02 0 21.04 8.41 21.04 25.22v166.7Zm-24.76-.89V158.22h-54.55v164.92h54.55ZM1023.71 203.53h-24.39v-44.86l-45.61 1.79v188.8h-24.76V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM1157.57 349.25h-24.39v-6.03c-9.81 1.64-19.61 3.2-29.42 4.69-12.17 1.79-21.91 2.68-29.23 2.68-13.53 0-20.29-8.03-20.29-24.1v-79.22c0-16.66 7.01-24.99 21.04-24.99h58.27v-65.39h-53.24v37.04h-24.02v-36.6c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v191.92Zm-24.02-27v-76.77h-55.29v78.11l55.29-1.34ZM1301.11 406.38c0 16.81-7.01 25.22-21.04 25.22h-58.83c-14.27 0-21.41-10.64-21.41-31.91 0-2.53.09-6.29.28-11.27.19-4.99.28-8.59.28-10.82h24.39v28.79h51.75v-57.13h-40.77c-11.05 0-20.23-4.42-27.55-13.28-7.32-8.85-10.98-19.97-10.98-33.36V175.64c0-12.79 3.23-23.47 9.68-32.02 6.45-8.55 14.95-12.83 25.5-12.83 2.85 0 17.56 2.46 44.12 7.36v-6.03h24.58v274.26Zm-24.58-83.24V159.12c-19.61-1.49-31.03-2.23-34.25-2.23-13.65 0-20.48 8.33-20.48 24.99v116.27c0 16.66 6.82 24.99 20.48 24.99h34.25ZM1443.15 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25Z",
    style: {
      fill: "#fff"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_12_svg__b)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1161.4 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65H1161.4c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_12_svg__c)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1443.21 398.49h-103.92c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h103.92c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_12_svg__d)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1384.38 62.05H824.22c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h560.16c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  }), /*#__PURE__*/react_11("path", {
    d: "M794.81 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1413.79 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z",
    style: {
      fill: "#2bc0d3"
    }
  })));
};

var _defs;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var SvgAsset13 = function SvgAsset13(props) {
  return /*#__PURE__*/react_11("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1324.74 431.6"
  }, props), _defs || (_defs = /*#__PURE__*/react_11("defs", null, /*#__PURE__*/react_11("filter", {
    id: "Asset_13_svg__a",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_13_svg__b",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-2",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-2",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_13_svg__c",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-3",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-3",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })), /*#__PURE__*/react_11("filter", {
    id: "Asset_13_svg__d",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react_11("feOffset", null), /*#__PURE__*/react_11("feGaussianBlur", {
    result: "blur-4",
    stdDeviation: 19.31
  }), /*#__PURE__*/react_11("feFlood", {
    floodColor: "#34c4e7",
    floodOpacity: 0.75
  }), /*#__PURE__*/react_11("feComposite", {
    in2: "blur-4",
    operator: "in"
  }), /*#__PURE__*/react_11("feComposite", {
    "in": "SourceGraphic"
  })))), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_13_svg__a)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M509.35 398.49H9.65c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h499.7c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_13_svg__b)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1029.94 398.49H627.91c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h402.03c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_13_svg__c)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M1256.26 62.05H606.1c-5.33 0-9.65-4.32-9.65-9.65s4.32-9.65 9.65-9.65h650.15c5.33 0 9.65 4.32 9.65 9.65s-4.32 9.65-9.65 9.65Z",
    style: {
      fill: "#2bc0d3"
    }
  }), /*#__PURE__*/react_11("path", {
    d: "M576.69 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76ZM1285.67 91.47c-21.54 0-39.07-17.53-39.07-39.07s17.53-39.07 39.07-39.07 39.07 17.53 39.07 39.07-17.53 39.07-39.07 39.07Zm0-58.83c-10.9 0-19.76 8.86-19.76 19.76s8.86 19.76 19.76 19.76 19.76-8.86 19.76-19.76-8.86-19.76-19.76-19.76Z",
    style: {
      fill: "#2bc0d3"
    }
  })), /*#__PURE__*/react_11("g", {
    style: {
      filter: "url(#Asset_13_svg__d)"
    }
  }, /*#__PURE__*/react_11("path", {
    d: "M163.42 349.25h-24.39V128.1c0-3.12.87-12.27 2.61-27.45l-47.66 215.8h-5.21l-47.66-215.8c1.74 15.33 2.61 24.47 2.61 27.45v221.16h-24.4V0h24.02l47.29 227.18c.25 1.19.5 4.54.75 10.04 0-2.23.25-5.58.74-10.04L139.4 0h24.02v349.25ZM326.69 324.48c0 7.29-1.99 13.24-5.96 17.85-3.97 4.61-9 6.92-15.08 6.92h-75.03c-6.08 0-11.05-2.3-14.89-6.92-3.85-4.61-5.77-10.56-5.77-17.85V24.77c0-7.29 1.92-13.24 5.77-17.85C219.57 2.31 224.54 0 230.62 0h75.03c6.08 0 11.11 2.31 15.08 6.92 3.97 4.61 5.96 10.57 5.96 17.85V106h-26.06V27.45h-64.79V321.8h64.79v-85.92h26.06v88.6ZM485.49 324.48c0 7.29-1.89 13.24-5.68 17.85-3.79 4.61-8.72 6.92-14.8 6.92h-73.35c-6.08 0-11.08-2.3-14.99-6.92-3.91-4.61-5.86-10.56-5.86-17.85v-88.6h25.88v85.92h62.93v-83.24l-80.43-116.49c-5.58-8.03-8.38-16.88-8.38-26.56V24.77c0-7.29 1.96-13.24 5.86-17.85 3.91-4.61 8.9-6.92 14.99-6.92h73.35c6.08 0 11.01 2.31 14.8 6.92 3.78 4.61 5.68 10.57 5.68 17.85V106h-25.88V27.45h-62.93v73.64l80.8 116.49c5.33 7.74 8 16.44 8 26.11v80.79ZM630.33 132.11l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76ZM764.75 349.25h-24.76V158.67l-54.55 1.79v188.8h-24.76V132.11h24.76v6.03c9.68-1.49 19.42-3.05 29.23-4.69 11.92-1.79 21.72-2.68 29.42-2.68 13.78 0 20.66 8.11 20.66 24.33v194.15ZM906.05 324.03c0 16.81-6.95 25.22-20.85 25.22h-59.57c-13.9 0-20.85-8.4-20.85-25.22v-166.7c0-16.81 6.95-25.22 20.85-25.22h59.57c13.9 0 20.85 8.41 20.85 25.22v78.11l-8.38 10.49h-68.88v78.55h53.25v-39.72h24.02v39.28Zm-24.02-101.76v-65.39h-53.25v65.39h53.25ZM1041.77 203.53h-24.39v-44.86l-45.61 1.79v188.8h-24.76V132.11h24.76v6.03c8.19-1.49 16.44-3.05 24.76-4.69 9.93-1.79 18.18-2.68 24.76-2.68 13.65 0 20.48 8.11 20.48 24.33v48.43ZM1176.19 406.38c0 16.81-7.01 25.22-21.04 25.22h-58.83c-14.27 0-21.41-10.64-21.41-31.91 0-2.53.09-6.29.28-11.27.19-4.99.28-8.59.28-10.82h24.39v28.79h51.75v-57.13h-40.77c-11.05 0-20.23-4.42-27.55-13.28-7.32-8.85-10.98-19.97-10.98-33.36V175.64c0-12.79 3.23-23.47 9.68-32.02 6.45-8.55 14.95-12.83 25.5-12.83 2.85 0 17.56 2.46 44.12 7.36v-6.03h24.58v274.26Zm-24.58-83.24V159.12c-19.61-1.49-31.03-2.23-34.25-2.23-13.65 0-20.48 8.33-20.48 24.99v116.27c0 16.66 6.82 24.99 20.48 24.99h34.25ZM1318.98 132.11l-43.56 215.35-18.06 84.13h-24.39l18.24-84.13-44.68-215.35h25.5l30.9 170.94 31.28-170.94h24.76Z",
    style: {
      fill: "#fff"
    }
  })));
};

function Portal() {
    var rotatePortalIcon = function () {
        var portalIcon = document.getElementById('portal-icon');
        if (!portalIcon)
            return;
        portalIcon.classList.toggle('rotate-180');
    };
    return (react_11(Lt, { className: 'relative' },
        react_11(Lt.Button, { className: 'h-max p-3 rounded-full outline-0 hover:bg-white hover:bg-opacity-20 active:bg-opacity-25 duration-300' },
            react_11(SvgPortalGridIcon, { id: "portal-icon", className: 'h-7 w-auto duration-700' })),
        react_11(tt, { enter: "transition ease-in-out duration-300", enterFrom: "-translate-x-52", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300", leaveFrom: "translate-x-0", leaveTo: "-translate-x-52", beforeEnter: rotatePortalIcon, beforeLeave: rotatePortalIcon },
            react_11(Lt.Panel, null,
                react_11("div", { className: 'absolute bg-MCS-DarkerBlue rounded-br-xl h-96 w-52 shadow-md' },
                    react_11(SvgAsset9, { className: 'h-8 w-auto mb-4 mt-2 mx-2' }),
                    react_11(SvgAsset10, { className: 'h-8 w-auto mb-4 mt-2 mx-2' }),
                    react_11(SvgAsset11, { className: 'h-8 w-auto mb-4 mt-2 mx-2' }),
                    react_11(SvgAsset12, { className: 'h-8 w-auto mb-4 mt-2 mx-2' }),
                    react_11(SvgAsset13, { className: 'h-8 w-auto mb-4 mt-2 mx-2' }))))));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$1(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function _prodErrorMap() {
    // We will include this one message in the prod error map since by the very
    // nature of this error, developers will never be able to see the message
    // using the debugErrorMap (which is installed during auth initialization).
    return {
        ["dependent-sdk-initialized-before-auth" /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */]: 'Another Firebase SDK was initialized and is trying to use Auth before Auth is ' +
            'initialized. Please be sure to call `initializeAuth` or `getAuth` before ' +
            'starting any other Firebase SDK.'
    };
}
/**
 * A minimal error map with all verbose error messages stripped.
 *
 * See discussion at {@link AuthErrorMap}
 *
 * @public
 */
const prodErrorMap = _prodErrorMap;
const _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory('auth', 'Firebase', _prodErrorMap());

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logClient = new Logger('@firebase/auth');
function _logWarn(msg, ...args) {
    if (logClient.logLevel <= LogLevel.WARN) {
        logClient.warn(`Auth (${SDK_VERSION}): ${msg}`, ...args);
    }
}
function _logError(msg, ...args) {
    if (logClient.logLevel <= LogLevel.ERROR) {
        logClient.error(`Auth (${SDK_VERSION}): ${msg}`, ...args);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _fail(authOrCode, ...rest) {
    throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
    return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
    const errorMap = Object.assign(Object.assign({}, prodErrorMap()), { [code]: message });
    const factory = new ErrorFactory('auth', 'Firebase', errorMap);
    return factory.create(code, {
        appName: auth.name
    });
}
function createErrorInternal(authOrCode, ...rest) {
    if (typeof authOrCode !== 'string') {
        const code = rest[0];
        const fullParams = [...rest.slice(1)];
        if (fullParams[0]) {
            fullParams[0].appName = authOrCode.name;
        }
        return authOrCode._errorFactory.create(code, ...fullParams);
    }
    return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
    if (!assertion) {
        throw createErrorInternal(authOrCode, ...rest);
    }
}
/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */
function debugFail(failure) {
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
    const message = `INTERNAL ASSERTION FAILED: ` + failure;
    _logError(message);
    // NOTE: We don't use FirebaseError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
    throw new Error(message);
}
/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * @param assertion
 * @param message
 */
function debugAssert(assertion, message) {
    if (!assertion) {
        debugFail(message);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _getCurrentUrl() {
    var _a;
    return (typeof self !== 'undefined' && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href)) || '';
}
function _isHttpOrHttps() {
    return _getCurrentScheme() === 'http:' || _getCurrentScheme() === 'https:';
}
function _getCurrentScheme() {
    var _a;
    return (typeof self !== 'undefined' && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol)) || null;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Determine whether the browser is working online
 */
function _isOnline() {
    if (typeof navigator !== 'undefined' &&
        navigator &&
        'onLine' in navigator &&
        typeof navigator.onLine === 'boolean' &&
        // Apply only for traditional web apps and Chrome extensions.
        // This is especially true for Cordova apps which have unreliable
        // navigator.onLine behavior unless cordova-plugin-network-information is
        // installed which overwrites the native navigator.onLine value and
        // defines navigator.connection.
        (_isHttpOrHttps() || isBrowserExtension() || 'connection' in navigator)) {
        return navigator.onLine;
    }
    // If we can't determine the state, assume it is online.
    return true;
}
function _getUserLanguage() {
    if (typeof navigator === 'undefined') {
        return null;
    }
    const navigatorLanguage = navigator;
    return (
    // Most reliable, but only supported in Chrome/Firefox.
    (navigatorLanguage.languages && navigatorLanguage.languages[0]) ||
        // Supported in most browsers, but returns the language of the browser
        // UI, not the language set in browser settings.
        navigatorLanguage.language ||
        // Couldn't determine language.
        null);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */
class Delay {
    constructor(shortDelay, longDelay) {
        this.shortDelay = shortDelay;
        this.longDelay = longDelay;
        // Internal error when improperly initialized.
        debugAssert(longDelay > shortDelay, 'Short delay should be less than long delay!');
        this.isMobile = isMobileCordova() || isReactNative();
    }
    get() {
        if (!_isOnline()) {
            // Pick the shorter timeout.
            return Math.min(5000 /* DelayMin.OFFLINE */, this.shortDelay);
        }
        // If running in a mobile environment, return the long delay, otherwise
        // return the short delay.
        // This could be improved in the future to dynamically change based on other
        // variables instead of just reading the current environment.
        return this.isMobile ? this.longDelay : this.shortDelay;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _emulatorUrl(config, path) {
    debugAssert(config.emulator, 'Emulator should always be set here');
    const { url } = config.emulator;
    if (!path) {
        return url;
    }
    return `${url}${path.startsWith('/') ? path.slice(1) : path}`;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FetchProvider {
    static initialize(fetchImpl, headersImpl, responseImpl) {
        this.fetchImpl = fetchImpl;
        if (headersImpl) {
            this.headersImpl = headersImpl;
        }
        if (responseImpl) {
            this.responseImpl = responseImpl;
        }
    }
    static fetch() {
        if (this.fetchImpl) {
            return this.fetchImpl;
        }
        if (typeof self !== 'undefined' && 'fetch' in self) {
            return self.fetch;
        }
        debugFail('Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
    }
    static headers() {
        if (this.headersImpl) {
            return this.headersImpl;
        }
        if (typeof self !== 'undefined' && 'Headers' in self) {
            return self.Headers;
        }
        debugFail('Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
    }
    static response() {
        if (this.responseImpl) {
            return this.responseImpl;
        }
        if (typeof self !== 'undefined' && 'Response' in self) {
            return self.Response;
        }
        debugFail('Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Map from errors returned by the server to errors to developer visible errors
 */
const SERVER_ERROR_MAP = {
    // Custom token errors.
    ["CREDENTIAL_MISMATCH" /* ServerError.CREDENTIAL_MISMATCH */]: "custom-token-mismatch" /* AuthErrorCode.CREDENTIAL_MISMATCH */,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_CUSTOM_TOKEN" /* ServerError.MISSING_CUSTOM_TOKEN */]: "internal-error" /* AuthErrorCode.INTERNAL_ERROR */,
    // Create Auth URI errors.
    ["INVALID_IDENTIFIER" /* ServerError.INVALID_IDENTIFIER */]: "invalid-email" /* AuthErrorCode.INVALID_EMAIL */,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_CONTINUE_URI" /* ServerError.MISSING_CONTINUE_URI */]: "internal-error" /* AuthErrorCode.INTERNAL_ERROR */,
    // Sign in with email and password errors (some apply to sign up too).
    ["INVALID_PASSWORD" /* ServerError.INVALID_PASSWORD */]: "wrong-password" /* AuthErrorCode.INVALID_PASSWORD */,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_PASSWORD" /* ServerError.MISSING_PASSWORD */]: "missing-password" /* AuthErrorCode.MISSING_PASSWORD */,
    // Sign up with email and password errors.
    ["EMAIL_EXISTS" /* ServerError.EMAIL_EXISTS */]: "email-already-in-use" /* AuthErrorCode.EMAIL_EXISTS */,
    ["PASSWORD_LOGIN_DISABLED" /* ServerError.PASSWORD_LOGIN_DISABLED */]: "operation-not-allowed" /* AuthErrorCode.OPERATION_NOT_ALLOWED */,
    // Verify assertion for sign in with credential errors:
    ["INVALID_IDP_RESPONSE" /* ServerError.INVALID_IDP_RESPONSE */]: "invalid-credential" /* AuthErrorCode.INVALID_IDP_RESPONSE */,
    ["INVALID_PENDING_TOKEN" /* ServerError.INVALID_PENDING_TOKEN */]: "invalid-credential" /* AuthErrorCode.INVALID_IDP_RESPONSE */,
    ["FEDERATED_USER_ID_ALREADY_LINKED" /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */]: "credential-already-in-use" /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_REQ_TYPE" /* ServerError.MISSING_REQ_TYPE */]: "internal-error" /* AuthErrorCode.INTERNAL_ERROR */,
    // Send Password reset email errors:
    ["EMAIL_NOT_FOUND" /* ServerError.EMAIL_NOT_FOUND */]: "user-not-found" /* AuthErrorCode.USER_DELETED */,
    ["RESET_PASSWORD_EXCEED_LIMIT" /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */]: "too-many-requests" /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,
    ["EXPIRED_OOB_CODE" /* ServerError.EXPIRED_OOB_CODE */]: "expired-action-code" /* AuthErrorCode.EXPIRED_OOB_CODE */,
    ["INVALID_OOB_CODE" /* ServerError.INVALID_OOB_CODE */]: "invalid-action-code" /* AuthErrorCode.INVALID_OOB_CODE */,
    // This can only happen if the SDK sends a bad request.
    ["MISSING_OOB_CODE" /* ServerError.MISSING_OOB_CODE */]: "internal-error" /* AuthErrorCode.INTERNAL_ERROR */,
    // Operations that require ID token in request:
    ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN" /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */]: "requires-recent-login" /* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,
    ["INVALID_ID_TOKEN" /* ServerError.INVALID_ID_TOKEN */]: "invalid-user-token" /* AuthErrorCode.INVALID_AUTH */,
    ["TOKEN_EXPIRED" /* ServerError.TOKEN_EXPIRED */]: "user-token-expired" /* AuthErrorCode.TOKEN_EXPIRED */,
    ["USER_NOT_FOUND" /* ServerError.USER_NOT_FOUND */]: "user-token-expired" /* AuthErrorCode.TOKEN_EXPIRED */,
    // Other errors.
    ["TOO_MANY_ATTEMPTS_TRY_LATER" /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */]: "too-many-requests" /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,
    // Phone Auth related errors.
    ["INVALID_CODE" /* ServerError.INVALID_CODE */]: "invalid-verification-code" /* AuthErrorCode.INVALID_CODE */,
    ["INVALID_SESSION_INFO" /* ServerError.INVALID_SESSION_INFO */]: "invalid-verification-id" /* AuthErrorCode.INVALID_SESSION_INFO */,
    ["INVALID_TEMPORARY_PROOF" /* ServerError.INVALID_TEMPORARY_PROOF */]: "invalid-credential" /* AuthErrorCode.INVALID_IDP_RESPONSE */,
    ["MISSING_SESSION_INFO" /* ServerError.MISSING_SESSION_INFO */]: "missing-verification-id" /* AuthErrorCode.MISSING_SESSION_INFO */,
    ["SESSION_EXPIRED" /* ServerError.SESSION_EXPIRED */]: "code-expired" /* AuthErrorCode.CODE_EXPIRED */,
    // Other action code errors when additional settings passed.
    // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
    // This is OK as this error will be caught by client side validation.
    ["MISSING_ANDROID_PACKAGE_NAME" /* ServerError.MISSING_ANDROID_PACKAGE_NAME */]: "missing-android-pkg-name" /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,
    ["UNAUTHORIZED_DOMAIN" /* ServerError.UNAUTHORIZED_DOMAIN */]: "unauthorized-continue-uri" /* AuthErrorCode.UNAUTHORIZED_DOMAIN */,
    // getProjectConfig errors when clientId is passed.
    ["INVALID_OAUTH_CLIENT_ID" /* ServerError.INVALID_OAUTH_CLIENT_ID */]: "invalid-oauth-client-id" /* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,
    // User actions (sign-up or deletion) disabled errors.
    ["ADMIN_ONLY_OPERATION" /* ServerError.ADMIN_ONLY_OPERATION */]: "admin-restricted-operation" /* AuthErrorCode.ADMIN_ONLY_OPERATION */,
    // Multi factor related errors.
    ["INVALID_MFA_PENDING_CREDENTIAL" /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */]: "invalid-multi-factor-session" /* AuthErrorCode.INVALID_MFA_SESSION */,
    ["MFA_ENROLLMENT_NOT_FOUND" /* ServerError.MFA_ENROLLMENT_NOT_FOUND */]: "multi-factor-info-not-found" /* AuthErrorCode.MFA_INFO_NOT_FOUND */,
    ["MISSING_MFA_ENROLLMENT_ID" /* ServerError.MISSING_MFA_ENROLLMENT_ID */]: "missing-multi-factor-info" /* AuthErrorCode.MISSING_MFA_INFO */,
    ["MISSING_MFA_PENDING_CREDENTIAL" /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */]: "missing-multi-factor-session" /* AuthErrorCode.MISSING_MFA_SESSION */,
    ["SECOND_FACTOR_EXISTS" /* ServerError.SECOND_FACTOR_EXISTS */]: "second-factor-already-in-use" /* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,
    ["SECOND_FACTOR_LIMIT_EXCEEDED" /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */]: "maximum-second-factor-count-exceeded" /* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,
    // Blocking functions related errors.
    ["BLOCKING_FUNCTION_ERROR_RESPONSE" /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */]: "internal-error" /* AuthErrorCode.INTERNAL_ERROR */,
    // Recaptcha related errors.
    ["RECAPTCHA_NOT_ENABLED" /* ServerError.RECAPTCHA_NOT_ENABLED */]: "recaptcha-not-enabled" /* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,
    ["MISSING_RECAPTCHA_TOKEN" /* ServerError.MISSING_RECAPTCHA_TOKEN */]: "missing-recaptcha-token" /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,
    ["INVALID_RECAPTCHA_TOKEN" /* ServerError.INVALID_RECAPTCHA_TOKEN */]: "invalid-recaptcha-token" /* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,
    ["INVALID_RECAPTCHA_ACTION" /* ServerError.INVALID_RECAPTCHA_ACTION */]: "invalid-recaptcha-action" /* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,
    ["MISSING_CLIENT_TYPE" /* ServerError.MISSING_CLIENT_TYPE */]: "missing-client-type" /* AuthErrorCode.MISSING_CLIENT_TYPE */,
    ["MISSING_RECAPTCHA_VERSION" /* ServerError.MISSING_RECAPTCHA_VERSION */]: "missing-recaptcha-version" /* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,
    ["INVALID_RECAPTCHA_VERSION" /* ServerError.INVALID_RECAPTCHA_VERSION */]: "invalid-recaptcha-version" /* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,
    ["INVALID_REQ_TYPE" /* ServerError.INVALID_REQ_TYPE */]: "invalid-req-type" /* AuthErrorCode.INVALID_REQ_TYPE */
};

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_API_TIMEOUT_MS = new Delay(30000, 60000);
function _addTidIfNecessary(auth, request) {
    if (auth.tenantId && !request.tenantId) {
        return Object.assign(Object.assign({}, request), { tenantId: auth.tenantId });
    }
    return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
    return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
        let body = {};
        let params = {};
        if (request) {
            if (method === "GET" /* HttpMethod.GET */) {
                params = request;
            }
            else {
                body = {
                    body: JSON.stringify(request)
                };
            }
        }
        const query = querystring(Object.assign({ key: auth.config.apiKey }, params)).slice(1);
        const headers = await auth._getAdditionalHeaders();
        headers["Content-Type" /* HttpHeader.CONTENT_TYPE */] = 'application/json';
        if (auth.languageCode) {
            headers["X-Firebase-Locale" /* HttpHeader.X_FIREBASE_LOCALE */] = auth.languageCode;
        }
        return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({ method,
            headers, referrerPolicy: 'no-referrer' }, body));
    });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
    auth._canInitEmulator = false;
    const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
    try {
        const networkTimeout = new NetworkTimeout(auth);
        const response = await Promise.race([
            fetchFn(),
            networkTimeout.promise
        ]);
        // If we've reached this point, the fetch succeeded and the networkTimeout
        // didn't throw; clear the network timeout delay so that Node won't hang
        networkTimeout.clearNetworkTimeout();
        const json = await response.json();
        if ('needConfirmation' in json) {
            throw _makeTaggedError(auth, "account-exists-with-different-credential" /* AuthErrorCode.NEED_CONFIRMATION */, json);
        }
        if (response.ok && !('errorMessage' in json)) {
            return json;
        }
        else {
            const errorMessage = response.ok ? json.errorMessage : json.error.message;
            const [serverErrorCode, serverErrorMessage] = errorMessage.split(' : ');
            if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED" /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */) {
                throw _makeTaggedError(auth, "credential-already-in-use" /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */, json);
            }
            else if (serverErrorCode === "EMAIL_EXISTS" /* ServerError.EMAIL_EXISTS */) {
                throw _makeTaggedError(auth, "email-already-in-use" /* AuthErrorCode.EMAIL_EXISTS */, json);
            }
            else if (serverErrorCode === "USER_DISABLED" /* ServerError.USER_DISABLED */) {
                throw _makeTaggedError(auth, "user-disabled" /* AuthErrorCode.USER_DISABLED */, json);
            }
            const authError = errorMap[serverErrorCode] ||
                serverErrorCode
                    .toLowerCase()
                    .replace(/[_\s]+/g, '-');
            if (serverErrorMessage) {
                throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
            }
            else {
                _fail(auth, authError);
            }
        }
    }
    catch (e) {
        if (e instanceof FirebaseError) {
            throw e;
        }
        // Changing this to a different error code will log user out when there is a network error
        // because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
        // https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
        _fail(auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */, { 'message': String(e) });
    }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
    const serverResponse = (await _performApiRequest(auth, method, path, request, customErrorMap));
    if ('mfaPendingCredential' in serverResponse) {
        _fail(auth, "multi-factor-auth-required" /* AuthErrorCode.MFA_REQUIRED */, {
            _serverResponse: serverResponse
        });
    }
    return serverResponse;
}
function _getFinalTarget(auth, host, path, query) {
    const base = `${host}${path}?${query}`;
    if (!auth.config.emulator) {
        return `${auth.config.apiScheme}://${base}`;
    }
    return _emulatorUrl(auth.config, base);
}
class NetworkTimeout {
    constructor(auth) {
        this.auth = auth;
        // Node timers and browser timers are fundamentally incompatible, but we
        // don't care about the value here
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.timer = null;
        this.promise = new Promise((_, reject) => {
            this.timer = setTimeout(() => {
                return reject(_createError(this.auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
            }, DEFAULT_API_TIMEOUT_MS.get());
        });
    }
    clearNetworkTimeout() {
        clearTimeout(this.timer);
    }
}
function _makeTaggedError(auth, code, response) {
    const errorParams = {
        appName: auth.name
    };
    if (response.email) {
        errorParams.email = response.email;
    }
    if (response.phoneNumber) {
        errorParams.phoneNumber = response.phoneNumber;
    }
    const error = _createError(auth, code, errorParams);
    // We know customData is defined on error because errorParams is defined
    error.customData._tokenResponse = response;
    return error;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function deleteAccount(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */, "/v1/accounts:delete" /* Endpoint.DELETE_ACCOUNT */, request);
}
async function getAccountInfo(auth, request) {
    return _performApiRequest(auth, "POST" /* HttpMethod.POST */, "/v1/accounts:lookup" /* Endpoint.GET_ACCOUNT_INFO */, request);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function utcTimestampToDateString(utcTimestamp) {
    if (!utcTimestamp) {
        return undefined;
    }
    try {
        // Convert to date object.
        const date = new Date(Number(utcTimestamp));
        // Test date is valid.
        if (!isNaN(date.getTime())) {
            // Convert to UTC date string.
            return date.toUTCString();
        }
    }
    catch (e) {
        // Do nothing. undefined will be returned.
    }
    return undefined;
}
/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */
async function getIdTokenResult(user, forceRefresh = false) {
    const userInternal = getModularInstance(user);
    const token = await userInternal.getIdToken(forceRefresh);
    const claims = _parseToken(token);
    _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
    const firebase = typeof claims.firebase === 'object' ? claims.firebase : undefined;
    const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase['sign_in_provider'];
    return {
        claims,
        token,
        authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
        issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
        expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
        signInProvider: signInProvider || null,
        signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase['sign_in_second_factor']) || null
    };
}
function secondsStringToMilliseconds(seconds) {
    return Number(seconds) * 1000;
}
function _parseToken(token) {
    const [algorithm, payload, signature] = token.split('.');
    if (algorithm === undefined ||
        payload === undefined ||
        signature === undefined) {
        _logError('JWT malformed, contained fewer than 3 sections');
        return null;
    }
    try {
        const decoded = base64Decode(payload);
        if (!decoded) {
            _logError('Failed to decode base64 JWT payload');
            return null;
        }
        return JSON.parse(decoded);
    }
    catch (e) {
        _logError('Caught error parsing JWT payload as JSON', e === null || e === void 0 ? void 0 : e.toString());
        return null;
    }
}
/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */
function _tokenExpiresIn(token) {
    const parsedToken = _parseToken(token);
    _assert(parsedToken, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
    _assert(typeof parsedToken.exp !== 'undefined', "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
    _assert(typeof parsedToken.iat !== 'undefined', "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
    return Number(parsedToken.exp) - Number(parsedToken.iat);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
    if (bypassAuthState) {
        return promise;
    }
    try {
        return await promise;
    }
    catch (e) {
        if (e instanceof FirebaseError && isUserInvalidated(e)) {
            if (user.auth.currentUser === user) {
                await user.auth.signOut();
            }
        }
        throw e;
    }
}
function isUserInvalidated({ code }) {
    return (code === `auth/${"user-disabled" /* AuthErrorCode.USER_DISABLED */}` ||
        code === `auth/${"user-token-expired" /* AuthErrorCode.TOKEN_EXPIRED */}`);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ProactiveRefresh {
    constructor(user) {
        this.user = user;
        this.isRunning = false;
        // Node timers and browser timers return fundamentally different types.
        // We don't actually care what the value is but TS won't accept unknown and
        // we can't cast properly in both environments.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.timerId = null;
        this.errorBackoff = 30000 /* Duration.RETRY_BACKOFF_MIN */;
    }
    _start() {
        if (this.isRunning) {
            return;
        }
        this.isRunning = true;
        this.schedule();
    }
    _stop() {
        if (!this.isRunning) {
            return;
        }
        this.isRunning = false;
        if (this.timerId !== null) {
            clearTimeout(this.timerId);
        }
    }
    getInterval(wasError) {
        var _a;
        if (wasError) {
            const interval = this.errorBackoff;
            this.errorBackoff = Math.min(this.errorBackoff * 2, 960000 /* Duration.RETRY_BACKOFF_MAX */);
            return interval;
        }
        else {
            // Reset the error backoff
            this.errorBackoff = 30000 /* Duration.RETRY_BACKOFF_MIN */;
            const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
            const interval = expTime - Date.now() - 300000 /* Duration.OFFSET */;
            return Math.max(0, interval);
        }
    }
    schedule(wasError = false) {
        if (!this.isRunning) {
            // Just in case...
            return;
        }
        const interval = this.getInterval(wasError);
        this.timerId = setTimeout(async () => {
            await this.iteration();
        }, interval);
    }
    async iteration() {
        try {
            await this.user.getIdToken(true);
        }
        catch (e) {
            // Only retry on network errors
            if ((e === null || e === void 0 ? void 0 : e.code) ===
                `auth/${"network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */}`) {
                this.schedule(/* wasError */ true);
            }
            return;
        }
        this.schedule();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UserMetadata {
    constructor(createdAt, lastLoginAt) {
        this.createdAt = createdAt;
        this.lastLoginAt = lastLoginAt;
        this._initializeTime();
    }
    _initializeTime() {
        this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
        this.creationTime = utcTimestampToDateString(this.createdAt);
    }
    _copy(metadata) {
        this.createdAt = metadata.createdAt;
        this.lastLoginAt = metadata.lastLoginAt;
        this._initializeTime();
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        };
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _reloadWithoutSaving(user) {
    var _a;
    const auth = user.auth;
    const idToken = await user.getIdToken();
    const response = await _logoutIfInvalidated(user, getAccountInfo(auth, { idToken }));
    _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
    const coreAccount = response.users[0];
    user._notifyReloadListener(coreAccount);
    const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length)
        ? extractProviderData(coreAccount.providerUserInfo)
        : [];
    const providerData = mergeProviderData(user.providerData, newProviderData);
    // Preserves the non-nonymous status of the stored user, even if no more
    // credentials (federated or email/password) are linked to the user. If
    // the user was previously anonymous, then use provider data to update.
    // On the other hand, if it was not anonymous before, it should never be
    // considered anonymous now.
    const oldIsAnonymous = user.isAnonymous;
    const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
    const updates = {
        uid: coreAccount.localId,
        displayName: coreAccount.displayName || null,
        photoURL: coreAccount.photoUrl || null,
        email: coreAccount.email || null,
        emailVerified: coreAccount.emailVerified || false,
        phoneNumber: coreAccount.phoneNumber || null,
        tenantId: coreAccount.tenantId || null,
        providerData,
        metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
        isAnonymous
    };
    Object.assign(user, updates);
}
/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */
async function reload(user) {
    const userInternal = getModularInstance(user);
    await _reloadWithoutSaving(userInternal);
    // Even though the current user hasn't changed, update
    // current user will trigger a persistence update w/ the
    // new info.
    await userInternal.auth._persistUserIfCurrent(userInternal);
    userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
    const deduped = original.filter(o => !newData.some(n => n.providerId === o.providerId));
    return [...deduped, ...newData];
}
function extractProviderData(providers) {
    return providers.map((_a) => {
        var { providerId } = _a, provider = __rest(_a, ["providerId"]);
        return {
            providerId,
            uid: provider.rawId || '',
            displayName: provider.displayName || null,
            email: provider.email || null,
            phoneNumber: provider.phoneNumber || null,
            photoURL: provider.photoUrl || null
        };
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function requestStsToken(auth, refreshToken) {
    const response = await _performFetchWithErrorHandling(auth, {}, async () => {
        const body = querystring({
            'grant_type': 'refresh_token',
            'refresh_token': refreshToken
        }).slice(1);
        const { tokenApiHost, apiKey } = auth.config;
        const url = _getFinalTarget(auth, tokenApiHost, "/v1/token" /* Endpoint.TOKEN */, `key=${apiKey}`);
        const headers = await auth._getAdditionalHeaders();
        headers["Content-Type" /* HttpHeader.CONTENT_TYPE */] = 'application/x-www-form-urlencoded';
        return FetchProvider.fetch()(url, {
            method: "POST" /* HttpMethod.POST */,
            headers,
            body
        });
    });
    // The response comes back in snake_case. Convert to camel:
    return {
        accessToken: response.access_token,
        expiresIn: response.expires_in,
        refreshToken: response.refresh_token
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */
class StsTokenManager {
    constructor() {
        this.refreshToken = null;
        this.accessToken = null;
        this.expirationTime = null;
    }
    get isExpired() {
        return (!this.expirationTime ||
            Date.now() > this.expirationTime - 30000 /* Buffer.TOKEN_REFRESH */);
    }
    updateFromServerResponse(response) {
        _assert(response.idToken, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        _assert(typeof response.idToken !== 'undefined', "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        _assert(typeof response.refreshToken !== 'undefined', "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        const expiresIn = 'expiresIn' in response && typeof response.expiresIn !== 'undefined'
            ? Number(response.expiresIn)
            : _tokenExpiresIn(response.idToken);
        this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
    }
    async getToken(auth, forceRefresh = false) {
        _assert(!this.accessToken || this.refreshToken, auth, "user-token-expired" /* AuthErrorCode.TOKEN_EXPIRED */);
        if (!forceRefresh && this.accessToken && !this.isExpired) {
            return this.accessToken;
        }
        if (this.refreshToken) {
            await this.refresh(auth, this.refreshToken);
            return this.accessToken;
        }
        return null;
    }
    clearRefreshToken() {
        this.refreshToken = null;
    }
    async refresh(auth, oldToken) {
        const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth, oldToken);
        this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
    }
    updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
        this.refreshToken = refreshToken || null;
        this.accessToken = accessToken || null;
        this.expirationTime = Date.now() + expiresInSec * 1000;
    }
    static fromJSON(appName, object) {
        const { refreshToken, accessToken, expirationTime } = object;
        const manager = new StsTokenManager();
        if (refreshToken) {
            _assert(typeof refreshToken === 'string', "internal-error" /* AuthErrorCode.INTERNAL_ERROR */, {
                appName
            });
            manager.refreshToken = refreshToken;
        }
        if (accessToken) {
            _assert(typeof accessToken === 'string', "internal-error" /* AuthErrorCode.INTERNAL_ERROR */, {
                appName
            });
            manager.accessToken = accessToken;
        }
        if (expirationTime) {
            _assert(typeof expirationTime === 'number', "internal-error" /* AuthErrorCode.INTERNAL_ERROR */, {
                appName
            });
            manager.expirationTime = expirationTime;
        }
        return manager;
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        };
    }
    _assign(stsTokenManager) {
        this.accessToken = stsTokenManager.accessToken;
        this.refreshToken = stsTokenManager.refreshToken;
        this.expirationTime = stsTokenManager.expirationTime;
    }
    _clone() {
        return Object.assign(new StsTokenManager(), this.toJSON());
    }
    _performRefresh() {
        return debugFail('not implemented');
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function assertStringOrUndefined(assertion, appName) {
    _assert(typeof assertion === 'string' || typeof assertion === 'undefined', "internal-error" /* AuthErrorCode.INTERNAL_ERROR */, { appName });
}
class UserImpl {
    constructor(_a) {
        var { uid, auth, stsTokenManager } = _a, opt = __rest(_a, ["uid", "auth", "stsTokenManager"]);
        // For the user object, provider is always Firebase.
        this.providerId = "firebase" /* ProviderId.FIREBASE */;
        this.proactiveRefresh = new ProactiveRefresh(this);
        this.reloadUserInfo = null;
        this.reloadListener = null;
        this.uid = uid;
        this.auth = auth;
        this.stsTokenManager = stsTokenManager;
        this.accessToken = stsTokenManager.accessToken;
        this.displayName = opt.displayName || null;
        this.email = opt.email || null;
        this.emailVerified = opt.emailVerified || false;
        this.phoneNumber = opt.phoneNumber || null;
        this.photoURL = opt.photoURL || null;
        this.isAnonymous = opt.isAnonymous || false;
        this.tenantId = opt.tenantId || null;
        this.providerData = opt.providerData ? [...opt.providerData] : [];
        this.metadata = new UserMetadata(opt.createdAt || undefined, opt.lastLoginAt || undefined);
    }
    async getIdToken(forceRefresh) {
        const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
        _assert(accessToken, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        if (this.accessToken !== accessToken) {
            this.accessToken = accessToken;
            await this.auth._persistUserIfCurrent(this);
            this.auth._notifyListenersIfCurrent(this);
        }
        return accessToken;
    }
    getIdTokenResult(forceRefresh) {
        return getIdTokenResult(this, forceRefresh);
    }
    reload() {
        return reload(this);
    }
    _assign(user) {
        if (this === user) {
            return;
        }
        _assert(this.uid === user.uid, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
        this.email = user.email;
        this.emailVerified = user.emailVerified;
        this.phoneNumber = user.phoneNumber;
        this.isAnonymous = user.isAnonymous;
        this.tenantId = user.tenantId;
        this.providerData = user.providerData.map(userInfo => (Object.assign({}, userInfo)));
        this.metadata._copy(user.metadata);
        this.stsTokenManager._assign(user.stsTokenManager);
    }
    _clone(auth) {
        const newUser = new UserImpl(Object.assign(Object.assign({}, this), { auth, stsTokenManager: this.stsTokenManager._clone() }));
        newUser.metadata._copy(this.metadata);
        return newUser;
    }
    _onReload(callback) {
        // There should only ever be one listener, and that is a single instance of MultiFactorUser
        _assert(!this.reloadListener, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        this.reloadListener = callback;
        if (this.reloadUserInfo) {
            this._notifyReloadListener(this.reloadUserInfo);
            this.reloadUserInfo = null;
        }
    }
    _notifyReloadListener(userInfo) {
        if (this.reloadListener) {
            this.reloadListener(userInfo);
        }
        else {
            // If no listener is subscribed yet, save the result so it's available when they do subscribe
            this.reloadUserInfo = userInfo;
        }
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop();
    }
    async _updateTokensIfNecessary(response, reload = false) {
        let tokensRefreshed = false;
        if (response.idToken &&
            response.idToken !== this.stsTokenManager.accessToken) {
            this.stsTokenManager.updateFromServerResponse(response);
            tokensRefreshed = true;
        }
        if (reload) {
            await _reloadWithoutSaving(this);
        }
        await this.auth._persistUserIfCurrent(this);
        if (tokensRefreshed) {
            this.auth._notifyListenersIfCurrent(this);
        }
    }
    async delete() {
        const idToken = await this.getIdToken();
        await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
        this.stsTokenManager.clearRefreshToken();
        // TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
        //       cancels pending actions...
        return this.auth.signOut();
    }
    toJSON() {
        return Object.assign(Object.assign({ uid: this.uid, email: this.email || undefined, emailVerified: this.emailVerified, displayName: this.displayName || undefined, isAnonymous: this.isAnonymous, photoURL: this.photoURL || undefined, phoneNumber: this.phoneNumber || undefined, tenantId: this.tenantId || undefined, providerData: this.providerData.map(userInfo => (Object.assign({}, userInfo))), stsTokenManager: this.stsTokenManager.toJSON(), 
            // Redirect event ID must be maintained in case there is a pending
            // redirect event.
            _redirectEventId: this._redirectEventId }, this.metadata.toJSON()), { 
            // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
            apiKey: this.auth.config.apiKey, appName: this.auth.name });
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || '';
    }
    static _fromJSON(auth, object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : undefined;
        const email = (_b = object.email) !== null && _b !== void 0 ? _b : undefined;
        const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : undefined;
        const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : undefined;
        const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : undefined;
        const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : undefined;
        const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : undefined;
        const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : undefined;
        const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
        _assert(uid && plainObjectTokenManager, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
        _assert(typeof uid === 'string', auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        assertStringOrUndefined(displayName, auth.name);
        assertStringOrUndefined(email, auth.name);
        _assert(typeof emailVerified === 'boolean', auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        _assert(typeof isAnonymous === 'boolean', auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        assertStringOrUndefined(phoneNumber, auth.name);
        assertStringOrUndefined(photoURL, auth.name);
        assertStringOrUndefined(tenantId, auth.name);
        assertStringOrUndefined(_redirectEventId, auth.name);
        assertStringOrUndefined(createdAt, auth.name);
        assertStringOrUndefined(lastLoginAt, auth.name);
        const user = new UserImpl({
            uid,
            auth,
            email,
            emailVerified,
            displayName,
            isAnonymous,
            photoURL,
            phoneNumber,
            tenantId,
            stsTokenManager,
            createdAt,
            lastLoginAt
        });
        if (providerData && Array.isArray(providerData)) {
            user.providerData = providerData.map(userInfo => (Object.assign({}, userInfo)));
        }
        if (_redirectEventId) {
            user._redirectEventId = _redirectEventId;
        }
        return user;
    }
    /**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */
    static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
        const stsTokenManager = new StsTokenManager();
        stsTokenManager.updateFromServerResponse(idTokenResponse);
        // Initialize the Firebase Auth user.
        const user = new UserImpl({
            uid: idTokenResponse.localId,
            auth,
            stsTokenManager,
            isAnonymous
        });
        // Updates the user info and data and resolves with a user instance.
        await _reloadWithoutSaving(user);
        return user;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const instanceCache = new Map();
function _getInstance(cls) {
    debugAssert(cls instanceof Function, 'Expected a class definition');
    let instance = instanceCache.get(cls);
    if (instance) {
        debugAssert(instance instanceof cls, 'Instance stored in cache mismatched with class');
        return instance;
    }
    instance = new cls();
    instanceCache.set(cls, instance);
    return instance;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class InMemoryPersistence {
    constructor() {
        this.type = "NONE" /* PersistenceType.NONE */;
        this.storage = {};
    }
    async _isAvailable() {
        return true;
    }
    async _set(key, value) {
        this.storage[key] = value;
    }
    async _get(key) {
        const value = this.storage[key];
        return value === undefined ? null : value;
    }
    async _remove(key) {
        delete this.storage[key];
    }
    _addListener(_key, _listener) {
        // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
        return;
    }
    _removeListener(_key, _listener) {
        // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
        return;
    }
}
InMemoryPersistence.type = 'NONE';
/**
 * An implementation of {@link Persistence} of type 'NONE'.
 *
 * @public
 */
const inMemoryPersistence = InMemoryPersistence;

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _persistenceKeyName(key, apiKey, appName) {
    return `${"firebase" /* Namespace.PERSISTENCE */}:${key}:${apiKey}:${appName}`;
}
class PersistenceUserManager {
    constructor(persistence, auth, userKey) {
        this.persistence = persistence;
        this.auth = auth;
        this.userKey = userKey;
        const { config, name } = this.auth;
        this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name);
        this.fullPersistenceKey = _persistenceKeyName("persistence" /* KeyName.PERSISTENCE_USER */, config.apiKey, name);
        this.boundEventHandler = auth._onStorageEvent.bind(auth);
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
    }
    setCurrentUser(user) {
        return this.persistence._set(this.fullUserKey, user.toJSON());
    }
    async getCurrentUser() {
        const blob = await this.persistence._get(this.fullUserKey);
        return blob ? UserImpl._fromJSON(this.auth, blob) : null;
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey);
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
    }
    async setPersistence(newPersistence) {
        if (this.persistence === newPersistence) {
            return;
        }
        const currentUser = await this.getCurrentUser();
        await this.removeCurrentUser();
        this.persistence = newPersistence;
        if (currentUser) {
            return this.setCurrentUser(currentUser);
        }
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
    }
    static async create(auth, persistenceHierarchy, userKey = "authUser" /* KeyName.AUTH_USER */) {
        if (!persistenceHierarchy.length) {
            return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
        }
        // Eliminate any persistences that are not available
        const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
            if (await persistence._isAvailable()) {
                return persistence;
            }
            return undefined;
        }))).filter(persistence => persistence);
        // Fall back to the first persistence listed, or in memory if none available
        let selectedPersistence = availablePersistences[0] ||
            _getInstance(inMemoryPersistence);
        const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
        // Pull out the existing user, setting the chosen persistence to that
        // persistence if the user exists.
        let userToMigrate = null;
        // Note, here we check for a user in _all_ persistences, not just the
        // ones deemed available. If we can migrate a user out of a broken
        // persistence, we will (but only if that persistence supports migration).
        for (const persistence of persistenceHierarchy) {
            try {
                const blob = await persistence._get(key);
                if (blob) {
                    const user = UserImpl._fromJSON(auth, blob); // throws for unparsable blob (wrong format)
                    if (persistence !== selectedPersistence) {
                        userToMigrate = user;
                    }
                    selectedPersistence = persistence;
                    break;
                }
            }
            catch (_a) { }
        }
        // If we find the user in a persistence that does support migration, use
        // that migration path (of only persistences that support migration)
        const migrationHierarchy = availablePersistences.filter(p => p._shouldAllowMigration);
        // If the persistence does _not_ allow migration, just finish off here
        if (!selectedPersistence._shouldAllowMigration ||
            !migrationHierarchy.length) {
            return new PersistenceUserManager(selectedPersistence, auth, userKey);
        }
        selectedPersistence = migrationHierarchy[0];
        if (userToMigrate) {
            // This normally shouldn't throw since chosenPersistence.isAvailable() is true, but if it does
            // we'll just let it bubble to surface the error.
            await selectedPersistence._set(key, userToMigrate.toJSON());
        }
        // Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
        // such as users getting stuck with a previous account after signing out and refreshing the tab.
        await Promise.all(persistenceHierarchy.map(async (persistence) => {
            if (persistence !== selectedPersistence) {
                try {
                    await persistence._remove(key);
                }
                catch (_a) { }
            }
        }));
        return new PersistenceUserManager(selectedPersistence, auth, userKey);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Determine the browser for the purposes of reporting usage to the API
 */
function _getBrowserName(userAgent) {
    const ua = userAgent.toLowerCase();
    if (ua.includes('opera/') || ua.includes('opr/') || ua.includes('opios/')) {
        return "Opera" /* BrowserName.OPERA */;
    }
    else if (_isIEMobile(ua)) {
        // Windows phone IEMobile browser.
        return "IEMobile" /* BrowserName.IEMOBILE */;
    }
    else if (ua.includes('msie') || ua.includes('trident/')) {
        return "IE" /* BrowserName.IE */;
    }
    else if (ua.includes('edge/')) {
        return "Edge" /* BrowserName.EDGE */;
    }
    else if (_isFirefox(ua)) {
        return "Firefox" /* BrowserName.FIREFOX */;
    }
    else if (ua.includes('silk/')) {
        return "Silk" /* BrowserName.SILK */;
    }
    else if (_isBlackBerry(ua)) {
        // Blackberry browser.
        return "Blackberry" /* BrowserName.BLACKBERRY */;
    }
    else if (_isWebOS(ua)) {
        // WebOS default browser.
        return "Webos" /* BrowserName.WEBOS */;
    }
    else if (_isSafari(ua)) {
        return "Safari" /* BrowserName.SAFARI */;
    }
    else if ((ua.includes('chrome/') || _isChromeIOS(ua)) &&
        !ua.includes('edge/')) {
        return "Chrome" /* BrowserName.CHROME */;
    }
    else if (_isAndroid(ua)) {
        // Android stock browser.
        return "Android" /* BrowserName.ANDROID */;
    }
    else {
        // Most modern browsers have name/version at end of user agent string.
        const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
        const matches = userAgent.match(re);
        if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
            return matches[1];
        }
    }
    return "Other" /* BrowserName.OTHER */;
}
function _isFirefox(ua = getUA()) {
    return /firefox\//i.test(ua);
}
function _isSafari(userAgent = getUA()) {
    const ua = userAgent.toLowerCase();
    return (ua.includes('safari/') &&
        !ua.includes('chrome/') &&
        !ua.includes('crios/') &&
        !ua.includes('android'));
}
function _isChromeIOS(ua = getUA()) {
    return /crios\//i.test(ua);
}
function _isIEMobile(ua = getUA()) {
    return /iemobile/i.test(ua);
}
function _isAndroid(ua = getUA()) {
    return /android/i.test(ua);
}
function _isBlackBerry(ua = getUA()) {
    return /blackberry/i.test(ua);
}
function _isWebOS(ua = getUA()) {
    return /webos/i.test(ua);
}
function _isIOS(ua = getUA()) {
    return (/iphone|ipad|ipod/i.test(ua) ||
        (/macintosh/i.test(ua) && /mobile/i.test(ua)));
}
function _isIOSStandalone(ua = getUA()) {
    var _a;
    return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
    return isIE() && document.documentMode === 10;
}
function _isMobileBrowser(ua = getUA()) {
    // TODO: implement getBrowserName equivalent for OS.
    return (_isIOS(ua) ||
        _isAndroid(ua) ||
        _isWebOS(ua) ||
        _isBlackBerry(ua) ||
        /windows phone/i.test(ua) ||
        _isIEMobile(ua));
}
function _isIframe() {
    try {
        // Check that the current window is not the top window.
        // If so, return true.
        return !!(window && window !== window.top);
    }
    catch (e) {
        return false;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * Determine the SDK version string
 */
function _getClientVersion(clientPlatform, frameworks = []) {
    let reportedPlatform;
    switch (clientPlatform) {
        case "Browser" /* ClientPlatform.BROWSER */:
            // In a browser environment, report the browser name.
            reportedPlatform = _getBrowserName(getUA());
            break;
        case "Worker" /* ClientPlatform.WORKER */:
            // Technically a worker runs from a browser but we need to differentiate a
            // worker from a browser.
            // For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
            reportedPlatform = `${_getBrowserName(getUA())}-${clientPlatform}`;
            break;
        default:
            reportedPlatform = clientPlatform;
    }
    const reportedFrameworks = frameworks.length
        ? frameworks.join(',')
        : 'FirebaseCore-web'; /* default value if no other framework is used */
    return `${reportedPlatform}/${"JsCore" /* ClientImplementation.CORE */}/${SDK_VERSION}/${reportedFrameworks}`;
}
async function getRecaptchaConfig(auth, request) {
    return _performApiRequest(auth, "GET" /* HttpMethod.GET */, "/v2/recaptchaConfig" /* Endpoint.GET_RECAPTCHA_CONFIG */, _addTidIfNecessary(auth, request));
}
function isEnterprise(grecaptcha) {
    return (grecaptcha !== undefined &&
        grecaptcha.enterprise !== undefined);
}
class RecaptchaConfig {
    constructor(response) {
        /**
         * The reCAPTCHA site key.
         */
        this.siteKey = '';
        /**
         * The reCAPTCHA enablement status of the {@link EmailAuthProvider} for the current tenant.
         */
        this.emailPasswordEnabled = false;
        if (response.recaptchaKey === undefined) {
            throw new Error('recaptchaKey undefined');
        }
        // Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
        this.siteKey = response.recaptchaKey.split('/')[3];
        this.emailPasswordEnabled = response.recaptchaEnforcementState.some(enforcementState => enforcementState.provider === 'EMAIL_PASSWORD_PROVIDER' &&
            enforcementState.enforcementState !== 'OFF');
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getScriptParentElement() {
    var _a, _b;
    return (_b = (_a = document.getElementsByTagName('head')) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
function _loadJS(url) {
    // TODO: consider adding timeout support & cancellation
    return new Promise((resolve, reject) => {
        const el = document.createElement('script');
        el.setAttribute('src', url);
        el.onload = resolve;
        el.onerror = e => {
            const error = _createError("internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
            error.customData = e;
            reject(error);
        };
        el.type = 'text/javascript';
        el.charset = 'UTF-8';
        getScriptParentElement().appendChild(el);
    });
}
function _generateCallbackName(prefix) {
    return `__${prefix}${Math.floor(Math.random() * 1000000)}`;
}

/* eslint-disable @typescript-eslint/no-require-imports */
const RECAPTCHA_ENTERPRISE_URL = 'https://www.google.com/recaptcha/enterprise.js?render=';
const RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = 'recaptcha-enterprise';
const FAKE_TOKEN = 'NO_RECAPTCHA';
class RecaptchaEnterpriseVerifier {
    /**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */
    constructor(authExtern) {
        /**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */
        this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
        this.auth = _castAuth(authExtern);
    }
    /**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */
    async verify(action = 'verify', forceRefresh = false) {
        async function retrieveSiteKey(auth) {
            if (!forceRefresh) {
                if (auth.tenantId == null && auth._agentRecaptchaConfig != null) {
                    return auth._agentRecaptchaConfig.siteKey;
                }
                if (auth.tenantId != null &&
                    auth._tenantRecaptchaConfigs[auth.tenantId] !== undefined) {
                    return auth._tenantRecaptchaConfigs[auth.tenantId].siteKey;
                }
            }
            return new Promise(async (resolve, reject) => {
                getRecaptchaConfig(auth, {
                    clientType: "CLIENT_TYPE_WEB" /* RecaptchaClientType.WEB */,
                    version: "RECAPTCHA_ENTERPRISE" /* RecaptchaVersion.ENTERPRISE */
                })
                    .then(response => {
                    if (response.recaptchaKey === undefined) {
                        reject(new Error('recaptcha Enterprise site key undefined'));
                    }
                    else {
                        const config = new RecaptchaConfig(response);
                        if (auth.tenantId == null) {
                            auth._agentRecaptchaConfig = config;
                        }
                        else {
                            auth._tenantRecaptchaConfigs[auth.tenantId] = config;
                        }
                        return resolve(config.siteKey);
                    }
                })
                    .catch(error => {
                    reject(error);
                });
            });
        }
        function retrieveRecaptchaToken(siteKey, resolve, reject) {
            const grecaptcha = window.grecaptcha;
            if (isEnterprise(grecaptcha)) {
                grecaptcha.enterprise.ready(() => {
                    grecaptcha.enterprise
                        .execute(siteKey, { action })
                        .then(token => {
                        resolve(token);
                    })
                        .catch(() => {
                        resolve(FAKE_TOKEN);
                    });
                });
            }
            else {
                reject(Error('No reCAPTCHA enterprise script loaded.'));
            }
        }
        return new Promise((resolve, reject) => {
            retrieveSiteKey(this.auth)
                .then(siteKey => {
                if (!forceRefresh && isEnterprise(window.grecaptcha)) {
                    retrieveRecaptchaToken(siteKey, resolve, reject);
                }
                else {
                    if (typeof window === 'undefined') {
                        reject(new Error('RecaptchaVerifier is only supported in browser'));
                        return;
                    }
                    _loadJS(RECAPTCHA_ENTERPRISE_URL + siteKey)
                        .then(() => {
                        retrieveRecaptchaToken(siteKey, resolve, reject);
                    })
                        .catch(error => {
                        reject(error);
                    });
                }
            })
                .catch(error => {
                reject(error);
            });
        });
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AuthMiddlewareQueue {
    constructor(auth) {
        this.auth = auth;
        this.queue = [];
    }
    pushCallback(callback, onAbort) {
        // The callback could be sync or async. Wrap it into a
        // function that is always async.
        const wrappedCallback = (user) => new Promise((resolve, reject) => {
            try {
                const result = callback(user);
                // Either resolve with existing promise or wrap a non-promise
                // return value into a promise.
                resolve(result);
            }
            catch (e) {
                // Sync callback throws.
                reject(e);
            }
        });
        // Attach the onAbort if present
        wrappedCallback.onAbort = onAbort;
        this.queue.push(wrappedCallback);
        const index = this.queue.length - 1;
        return () => {
            // Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
            // indexing of other elements.
            this.queue[index] = () => Promise.resolve();
        };
    }
    async runMiddleware(nextUser) {
        if (this.auth.currentUser === nextUser) {
            return;
        }
        // While running the middleware, build a temporary stack of onAbort
        // callbacks to call if one middleware callback rejects.
        const onAbortStack = [];
        try {
            for (const beforeStateCallback of this.queue) {
                await beforeStateCallback(nextUser);
                // Only push the onAbort if the callback succeeds
                if (beforeStateCallback.onAbort) {
                    onAbortStack.push(beforeStateCallback.onAbort);
                }
            }
        }
        catch (e) {
            // Run all onAbort, with separate try/catch to ignore any errors and
            // continue
            onAbortStack.reverse();
            for (const onAbort of onAbortStack) {
                try {
                    onAbort();
                }
                catch (_) {
                    /* swallow error */
                }
            }
            throw this.auth._errorFactory.create("login-blocked" /* AuthErrorCode.LOGIN_BLOCKED */, {
                originalMessage: e === null || e === void 0 ? void 0 : e.message
            });
        }
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AuthImpl {
    constructor(app, heartbeatServiceProvider, appCheckServiceProvider, config) {
        this.app = app;
        this.heartbeatServiceProvider = heartbeatServiceProvider;
        this.appCheckServiceProvider = appCheckServiceProvider;
        this.config = config;
        this.currentUser = null;
        this.emulatorConfig = null;
        this.operations = Promise.resolve();
        this.authStateSubscription = new Subscription(this);
        this.idTokenSubscription = new Subscription(this);
        this.beforeStateQueue = new AuthMiddlewareQueue(this);
        this.redirectUser = null;
        this.isProactiveRefreshEnabled = false;
        // Any network calls will set this to true and prevent subsequent emulator
        // initialization
        this._canInitEmulator = true;
        this._isInitialized = false;
        this._deleted = false;
        this._initializationPromise = null;
        this._popupRedirectResolver = null;
        this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
        this._agentRecaptchaConfig = null;
        this._tenantRecaptchaConfigs = {};
        // Tracks the last notified UID for state change listeners to prevent
        // repeated calls to the callbacks. Undefined means it's never been
        // called, whereas null means it's been called with a signed out user
        this.lastNotifiedUid = undefined;
        this.languageCode = null;
        this.tenantId = null;
        this.settings = { appVerificationDisabledForTesting: false };
        this.frameworks = [];
        this.name = app.name;
        this.clientVersion = config.sdkClientVersion;
    }
    _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
        if (popupRedirectResolver) {
            this._popupRedirectResolver = _getInstance(popupRedirectResolver);
        }
        // Have to check for app deletion throughout initialization (after each
        // promise resolution)
        this._initializationPromise = this.queue(async () => {
            var _a, _b;
            if (this._deleted) {
                return;
            }
            this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
            if (this._deleted) {
                return;
            }
            // Initialize the resolver early if necessary (only applicable to web:
            // this will cause the iframe to load immediately in certain cases)
            if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
                // If this fails, don't halt auth loading
                try {
                    await this._popupRedirectResolver._initialize(this);
                }
                catch (e) {
                    /* Ignore the error */
                }
            }
            await this.initializeCurrentUser(popupRedirectResolver);
            this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
            if (this._deleted) {
                return;
            }
            this._isInitialized = true;
        });
        return this._initializationPromise;
    }
    /**
     * If the persistence is changed in another window, the user manager will let us know
     */
    async _onStorageEvent() {
        if (this._deleted) {
            return;
        }
        const user = await this.assertedPersistence.getCurrentUser();
        if (!this.currentUser && !user) {
            // No change, do nothing (was signed out and remained signed out).
            return;
        }
        // If the same user is to be synchronized.
        if (this.currentUser && user && this.currentUser.uid === user.uid) {
            // Data update, simply copy data changes.
            this._currentUser._assign(user);
            // If tokens changed from previous user tokens, this will trigger
            // notifyAuthListeners_.
            await this.currentUser.getIdToken();
            return;
        }
        // Update current Auth state. Either a new login or logout.
        // Skip blocking callbacks, they should not apply to a change in another tab.
        await this._updateCurrentUser(user, /* skipBeforeStateCallbacks */ true);
    }
    async initializeCurrentUser(popupRedirectResolver) {
        var _a;
        // First check to see if we have a pending redirect event.
        const previouslyStoredUser = (await this.assertedPersistence.getCurrentUser());
        let futureCurrentUser = previouslyStoredUser;
        let needsTocheckMiddleware = false;
        if (popupRedirectResolver && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
            const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
            const result = await this.tryRedirectSignIn(popupRedirectResolver);
            // If the stored user (i.e. the old "currentUser") has a redirectId that
            // matches the redirect user, then we want to initially sign in with the
            // new user object from result.
            // TODO(samgho): More thoroughly test all of this
            if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) &&
                (result === null || result === void 0 ? void 0 : result.user)) {
                futureCurrentUser = result.user;
                needsTocheckMiddleware = true;
            }
        }
        // If no user in persistence, there is no current user. Set to null.
        if (!futureCurrentUser) {
            return this.directlySetCurrentUser(null);
        }
        if (!futureCurrentUser._redirectEventId) {
            // This isn't a redirect link operation, we can reload and bail.
            // First though, ensure that we check the middleware is happy.
            if (needsTocheckMiddleware) {
                try {
                    await this.beforeStateQueue.runMiddleware(futureCurrentUser);
                }
                catch (e) {
                    futureCurrentUser = previouslyStoredUser;
                    // We know this is available since the bit is only set when the
                    // resolver is available
                    this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
                }
            }
            if (futureCurrentUser) {
                return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
            }
            else {
                return this.directlySetCurrentUser(null);
            }
        }
        _assert(this._popupRedirectResolver, this, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */);
        await this.getOrInitRedirectPersistenceManager();
        // If the redirect user's event ID matches the current user's event ID,
        // DO NOT reload the current user, otherwise they'll be cleared from storage.
        // This is important for the reauthenticateWithRedirect() flow.
        if (this.redirectUser &&
            this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
            return this.directlySetCurrentUser(futureCurrentUser);
        }
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
    }
    async tryRedirectSignIn(redirectResolver) {
        // The redirect user needs to be checked (and signed in if available)
        // during auth initialization. All of the normal sign in and link/reauth
        // flows call back into auth and push things onto the promise queue. We
        // need to await the result of the redirect sign in *inside the promise
        // queue*. This presents a problem: we run into deadlock. See:
        //    ┌> [Initialization] ─────┐
        //    ┌> [<other queue tasks>] │
        //    └─ [getRedirectResult] <─┘
        //    where [] are tasks on the queue and arrows denote awaits
        // Initialization will never complete because it's waiting on something
        // that's waiting for initialization to complete!
        //
        // Instead, this method calls getRedirectResult() (stored in
        // _completeRedirectFn) with an optional parameter that instructs all of
        // the underlying auth operations to skip anything that mutates auth state.
        let result = null;
        try {
            // We know this._popupRedirectResolver is set since redirectResolver
            // is passed in. The _completeRedirectFn expects the unwrapped extern.
            result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
        }
        catch (e) {
            // Swallow any errors here; the code can retrieve them in
            // getRedirectResult().
            await this._setRedirectUser(null);
        }
        return result;
    }
    async reloadAndSetCurrentUserOrClear(user) {
        try {
            await _reloadWithoutSaving(user);
        }
        catch (e) {
            if ((e === null || e === void 0 ? void 0 : e.code) !==
                `auth/${"network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */}`) {
                // Something's wrong with the user's token. Log them out and remove
                // them from storage
                return this.directlySetCurrentUser(null);
            }
        }
        return this.directlySetCurrentUser(user);
    }
    useDeviceLanguage() {
        this.languageCode = _getUserLanguage();
    }
    async _delete() {
        this._deleted = true;
    }
    async updateCurrentUser(userExtern) {
        // The public updateCurrentUser method needs to make a copy of the user,
        // and also check that the project matches
        const user = userExtern
            ? getModularInstance(userExtern)
            : null;
        if (user) {
            _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token" /* AuthErrorCode.INVALID_AUTH */);
        }
        return this._updateCurrentUser(user && user._clone(this));
    }
    async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
        if (this._deleted) {
            return;
        }
        if (user) {
            _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch" /* AuthErrorCode.TENANT_ID_MISMATCH */);
        }
        if (!skipBeforeStateCallbacks) {
            await this.beforeStateQueue.runMiddleware(user);
        }
        return this.queue(async () => {
            await this.directlySetCurrentUser(user);
            this.notifyAuthListeners();
        });
    }
    async signOut() {
        // Run first, to block _setRedirectUser() if any callbacks fail.
        await this.beforeStateQueue.runMiddleware(null);
        // Clear the redirect user when signOut is called
        if (this.redirectPersistenceManager || this._popupRedirectResolver) {
            await this._setRedirectUser(null);
        }
        // Prevent callbacks from being called again in _updateCurrentUser, as
        // they were already called in the first line.
        return this._updateCurrentUser(null, /* skipBeforeStateCallbacks */ true);
    }
    setPersistence(persistence) {
        return this.queue(async () => {
            await this.assertedPersistence.setPersistence(_getInstance(persistence));
        });
    }
    async initializeRecaptchaConfig() {
        const response = await getRecaptchaConfig(this, {
            clientType: "CLIENT_TYPE_WEB" /* RecaptchaClientType.WEB */,
            version: "RECAPTCHA_ENTERPRISE" /* RecaptchaVersion.ENTERPRISE */
        });
        const config = new RecaptchaConfig(response);
        if (this.tenantId == null) {
            this._agentRecaptchaConfig = config;
        }
        else {
            this._tenantRecaptchaConfigs[this.tenantId] = config;
        }
        if (config.emailPasswordEnabled) {
            const verifier = new RecaptchaEnterpriseVerifier(this);
            void verifier.verify();
        }
    }
    _getRecaptchaConfig() {
        if (this.tenantId == null) {
            return this._agentRecaptchaConfig;
        }
        else {
            return this._tenantRecaptchaConfigs[this.tenantId];
        }
    }
    _getPersistence() {
        return this.assertedPersistence.persistence.type;
    }
    _updateErrorMap(errorMap) {
        this._errorFactory = new ErrorFactory('auth', 'Firebase', errorMap());
    }
    onAuthStateChanged(nextOrObserver, error, completed) {
        return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
    }
    beforeAuthStateChanged(callback, onAbort) {
        return this.beforeStateQueue.pushCallback(callback, onAbort);
    }
    onIdTokenChanged(nextOrObserver, error, completed) {
        return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
    }
    toJSON() {
        var _a;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
        };
    }
    async _setRedirectUser(user, popupRedirectResolver) {
        const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
        return user === null
            ? redirectManager.removeCurrentUser()
            : redirectManager.setCurrentUser(user);
    }
    async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
        if (!this.redirectPersistenceManager) {
            const resolver = (popupRedirectResolver && _getInstance(popupRedirectResolver)) ||
                this._popupRedirectResolver;
            _assert(resolver, this, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */);
            this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser" /* KeyName.REDIRECT_USER */);
            this.redirectUser =
                await this.redirectPersistenceManager.getCurrentUser();
        }
        return this.redirectPersistenceManager;
    }
    async _redirectUserForId(id) {
        var _a, _b;
        // Make sure we've cleared any pending persistence actions if we're not in
        // the initializer
        if (this._isInitialized) {
            await this.queue(async () => { });
        }
        if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
            return this._currentUser;
        }
        if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
            return this.redirectUser;
        }
        return null;
    }
    async _persistUserIfCurrent(user) {
        if (user === this.currentUser) {
            return this.queue(async () => this.directlySetCurrentUser(user));
        }
    }
    /** Notifies listeners only if the user is current */
    _notifyListenersIfCurrent(user) {
        if (user === this.currentUser) {
            this.notifyAuthListeners();
        }
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = true;
        if (this.currentUser) {
            this._currentUser._startProactiveRefresh();
        }
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = false;
        if (this.currentUser) {
            this._currentUser._stopProactiveRefresh();
        }
    }
    /** Returns the current user cast as the internal type */
    get _currentUser() {
        return this.currentUser;
    }
    notifyAuthListeners() {
        var _a, _b;
        if (!this._isInitialized) {
            return;
        }
        this.idTokenSubscription.next(this.currentUser);
        const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
        if (this.lastNotifiedUid !== currentUid) {
            this.lastNotifiedUid = currentUid;
            this.authStateSubscription.next(this.currentUser);
        }
    }
    registerStateListener(subscription, nextOrObserver, error, completed) {
        if (this._deleted) {
            return () => { };
        }
        const cb = typeof nextOrObserver === 'function'
            ? nextOrObserver
            : nextOrObserver.next.bind(nextOrObserver);
        const promise = this._isInitialized
            ? Promise.resolve()
            : this._initializationPromise;
        _assert(promise, this, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        // The callback needs to be called asynchronously per the spec.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        promise.then(() => cb(this.currentUser));
        if (typeof nextOrObserver === 'function') {
            return subscription.addObserver(nextOrObserver, error, completed);
        }
        else {
            return subscription.addObserver(nextOrObserver);
        }
    }
    /**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */
    async directlySetCurrentUser(user) {
        if (this.currentUser && this.currentUser !== user) {
            this._currentUser._stopProactiveRefresh();
        }
        if (user && this.isProactiveRefreshEnabled) {
            user._startProactiveRefresh();
        }
        this.currentUser = user;
        if (user) {
            await this.assertedPersistence.setCurrentUser(user);
        }
        else {
            await this.assertedPersistence.removeCurrentUser();
        }
    }
    queue(action) {
        // In case something errors, the callback still should be called in order
        // to keep the promise chain alive
        this.operations = this.operations.then(action, action);
        return this.operations;
    }
    get assertedPersistence() {
        _assert(this.persistenceManager, this, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        return this.persistenceManager;
    }
    _logFramework(framework) {
        if (!framework || this.frameworks.includes(framework)) {
            return;
        }
        this.frameworks.push(framework);
        // Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
        // "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
        this.frameworks.sort();
        this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
    }
    _getFrameworks() {
        return this.frameworks;
    }
    async _getAdditionalHeaders() {
        var _a;
        // Additional headers on every request
        const headers = {
            ["X-Client-Version" /* HttpHeader.X_CLIENT_VERSION */]: this.clientVersion
        };
        if (this.app.options.appId) {
            headers["X-Firebase-gmpid" /* HttpHeader.X_FIREBASE_GMPID */] = this.app.options.appId;
        }
        // If the heartbeat service exists, add the heartbeat string
        const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider
            .getImmediate({
            optional: true
        })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
        if (heartbeatsHeader) {
            headers["X-Firebase-Client" /* HttpHeader.X_FIREBASE_CLIENT */] = heartbeatsHeader;
        }
        // If the App Check service exists, add the App Check token in the headers
        const appCheckToken = await this._getAppCheckToken();
        if (appCheckToken) {
            headers["X-Firebase-AppCheck" /* HttpHeader.X_FIREBASE_APP_CHECK */] = appCheckToken;
        }
        return headers;
    }
    async _getAppCheckToken() {
        var _a;
        const appCheckTokenResult = await ((_a = this.appCheckServiceProvider
            .getImmediate({ optional: true })) === null || _a === void 0 ? void 0 : _a.getToken());
        if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
            // Context: appCheck.getToken() will never throw even if an error happened.
            // In the error case, a dummy token will be returned along with an error field describing
            // the error. In general, we shouldn't care about the error condition and just use
            // the token (actual or dummy) to send requests.
            _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
        }
        return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
    }
}
/**
 * Method to be used to cast down to our private implmentation of Auth.
 * It will also handle unwrapping from the compat type if necessary
 *
 * @param auth Auth object passed in from developer
 */
function _castAuth(auth) {
    return getModularInstance(auth);
}
/** Helper class to wrap subscriber logic */
class Subscription {
    constructor(auth) {
        this.auth = auth;
        this.observer = null;
        this.addObserver = createSubscribe(observer => (this.observer = observer));
    }
    get next() {
        _assert(this.observer, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        return this.observer.next.bind(this.observer);
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */
function initializeAuth(app, deps) {
    const provider = _getProvider(app, 'auth');
    if (provider.isInitialized()) {
        const auth = provider.getImmediate();
        const initialOptions = provider.getOptions();
        if (deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
            return auth;
        }
        else {
            _fail(auth, "already-initialized" /* AuthErrorCode.ALREADY_INITIALIZED */);
        }
    }
    const auth = provider.initialize({ options: deps });
    return auth;
}
function _initializeAuthInstance(auth, deps) {
    const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
    const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
    if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
        auth._updateErrorMap(deps.errorMap);
    }
    // This promise is intended to float; auth initialization happens in the
    // background, meanwhile the auth object may be used by the app.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}

/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */
function connectAuthEmulator(auth, url, options) {
    const authInternal = _castAuth(auth);
    _assert(authInternal._canInitEmulator, authInternal, "emulator-config-failed" /* AuthErrorCode.EMULATOR_CONFIG_FAILED */);
    _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme" /* AuthErrorCode.INVALID_EMULATOR_SCHEME */);
    const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
    const protocol = extractProtocol(url);
    const { host, port } = extractHostAndPort(url);
    const portStr = port === null ? '' : `:${port}`;
    // Always replace path with "/" (even if input url had no path at all, or had a different one).
    authInternal.config.emulator = { url: `${protocol}//${host}${portStr}/` };
    authInternal.settings.appVerificationDisabledForTesting = true;
    authInternal.emulatorConfig = Object.freeze({
        host,
        port,
        protocol: protocol.replace(':', ''),
        options: Object.freeze({ disableWarnings })
    });
    if (!disableWarnings) {
        emitEmulatorWarning();
    }
}
function extractProtocol(url) {
    const protocolEnd = url.indexOf(':');
    return protocolEnd < 0 ? '' : url.substr(0, protocolEnd + 1);
}
function extractHostAndPort(url) {
    const protocol = extractProtocol(url);
    const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length)); // Between // and /, ? or #.
    if (!authority) {
        return { host: '', port: null };
    }
    const hostAndPort = authority[2].split('@').pop() || ''; // Strip out "username:password@".
    const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
    if (bracketedIPv6) {
        const host = bracketedIPv6[1];
        return { host, port: parsePort(hostAndPort.substr(host.length + 1)) };
    }
    else {
        const [host, port] = hostAndPort.split(':');
        return { host, port: parsePort(port) };
    }
}
function parsePort(portStr) {
    if (!portStr) {
        return null;
    }
    const port = Number(portStr);
    if (isNaN(port)) {
        return null;
    }
    return port;
}
function emitEmulatorWarning() {
    function attachBanner() {
        const el = document.createElement('p');
        const sty = el.style;
        el.innerText =
            'Running in emulator mode. Do not use with production credentials.';
        sty.position = 'fixed';
        sty.width = '100%';
        sty.backgroundColor = '#ffffff';
        sty.border = '.1em solid #000000';
        sty.color = '#b50000';
        sty.bottom = '0px';
        sty.left = '0px';
        sty.margin = '0px';
        sty.zIndex = '10000';
        sty.textAlign = 'center';
        el.classList.add('firebase-emulator-warning');
        document.body.appendChild(el);
    }
    if (typeof console !== 'undefined' && typeof console.info === 'function') {
        console.info('WARNING: You are using the Auth Emulator,' +
            ' which is intended for local testing only.  Do not use with' +
            ' production credentials.');
    }
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            window.addEventListener('DOMContentLoaded', attachBanner);
        }
        else {
            attachBanner();
        }
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */
class AuthCredential {
    /** @internal */
    constructor(
    /**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */
    providerId, 
    /**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */
    signInMethod) {
        this.providerId = providerId;
        this.signInMethod = signInMethod;
    }
    /**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */
    toJSON() {
        return debugFail('not implemented');
    }
    /** @internal */
    _getIdTokenResponse(_auth) {
        return debugFail('not implemented');
    }
    /** @internal */
    _linkToIdToken(_auth, _idToken) {
        return debugFail('not implemented');
    }
    /** @internal */
    _getReauthenticationResolver(_auth) {
        return debugFail('not implemented');
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signInWithIdp(auth, request) {
    return _performSignInRequest(auth, "POST" /* HttpMethod.POST */, "/v1/accounts:signInWithIdp" /* Endpoint.SIGN_IN_WITH_IDP */, _addTidIfNecessary(auth, request));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const IDP_REQUEST_URI$1 = 'http://localhost';
/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */
class OAuthCredential extends AuthCredential {
    constructor() {
        super(...arguments);
        this.pendingToken = null;
    }
    /** @internal */
    static _fromParams(params) {
        const cred = new OAuthCredential(params.providerId, params.signInMethod);
        if (params.idToken || params.accessToken) {
            // OAuth 2 and either ID token or access token.
            if (params.idToken) {
                cred.idToken = params.idToken;
            }
            if (params.accessToken) {
                cred.accessToken = params.accessToken;
            }
            // Add nonce if available and no pendingToken is present.
            if (params.nonce && !params.pendingToken) {
                cred.nonce = params.nonce;
            }
            if (params.pendingToken) {
                cred.pendingToken = params.pendingToken;
            }
        }
        else if (params.oauthToken && params.oauthTokenSecret) {
            // OAuth 1 and OAuth token with token secret
            cred.accessToken = params.oauthToken;
            cred.secret = params.oauthTokenSecret;
        }
        else {
            _fail("argument-error" /* AuthErrorCode.ARGUMENT_ERROR */);
        }
        return cred;
    }
    /** {@inheritdoc AuthCredential.toJSON}  */
    toJSON() {
        return {
            idToken: this.idToken,
            accessToken: this.accessToken,
            secret: this.secret,
            nonce: this.nonce,
            pendingToken: this.pendingToken,
            providerId: this.providerId,
            signInMethod: this.signInMethod
        };
    }
    /**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */
    static fromJSON(json) {
        const obj = typeof json === 'string' ? JSON.parse(json) : json;
        const { providerId, signInMethod } = obj, rest = __rest(obj, ["providerId", "signInMethod"]);
        if (!providerId || !signInMethod) {
            return null;
        }
        const cred = new OAuthCredential(providerId, signInMethod);
        cred.idToken = rest.idToken || undefined;
        cred.accessToken = rest.accessToken || undefined;
        cred.secret = rest.secret;
        cred.nonce = rest.nonce;
        cred.pendingToken = rest.pendingToken || null;
        return cred;
    }
    /** @internal */
    _getIdTokenResponse(auth) {
        const request = this.buildRequest();
        return signInWithIdp(auth, request);
    }
    /** @internal */
    _linkToIdToken(auth, idToken) {
        const request = this.buildRequest();
        request.idToken = idToken;
        return signInWithIdp(auth, request);
    }
    /** @internal */
    _getReauthenticationResolver(auth) {
        const request = this.buildRequest();
        request.autoCreate = false;
        return signInWithIdp(auth, request);
    }
    buildRequest() {
        const request = {
            requestUri: IDP_REQUEST_URI$1,
            returnSecureToken: true
        };
        if (this.pendingToken) {
            request.pendingToken = this.pendingToken;
        }
        else {
            const postBody = {};
            if (this.idToken) {
                postBody['id_token'] = this.idToken;
            }
            if (this.accessToken) {
                postBody['access_token'] = this.accessToken;
            }
            if (this.secret) {
                postBody['oauth_token_secret'] = this.secret;
            }
            postBody['providerId'] = this.providerId;
            if (this.nonce && !this.pendingToken) {
                postBody['nonce'] = this.nonce;
            }
            request.postBody = querystring(postBody);
        }
        return request;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */
class FederatedAuthProvider {
    /**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */
    constructor(providerId) {
        this.providerId = providerId;
        /** @internal */
        this.defaultLanguageCode = null;
        /** @internal */
        this.customParameters = {};
    }
    /**
     * Set the language gode.
     *
     * @param languageCode - language code
     */
    setDefaultLanguage(languageCode) {
        this.defaultLanguageCode = languageCode;
    }
    /**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */
    setCustomParameters(customOAuthParameters) {
        this.customParameters = customOAuthParameters;
        return this;
    }
    /**
     * Retrieve the current list of {@link CustomParameters}.
     */
    getCustomParameters() {
        return this.customParameters;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */
class BaseOAuthProvider extends FederatedAuthProvider {
    constructor() {
        super(...arguments);
        /** @internal */
        this.scopes = [];
    }
    /**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */
    addScope(scope) {
        // If not already added, add scope to list.
        if (!this.scopes.includes(scope)) {
            this.scopes.push(scope);
        }
        return this;
    }
    /**
     * Retrieve the current list of OAuth scopes.
     */
    getScopes() {
        return [...this.scopes];
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */
class FacebookAuthProvider extends BaseOAuthProvider {
    constructor() {
        super("facebook.com" /* ProviderId.FACEBOOK */);
    }
    /**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */
    static credential(accessToken) {
        return OAuthCredential._fromParams({
            providerId: FacebookAuthProvider.PROVIDER_ID,
            signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
            accessToken
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromResult(userCredential) {
        return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromError(error) {
        return FacebookAuthProvider.credentialFromTaggedObject((error.customData || {}));
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse || !('oauthAccessToken' in tokenResponse)) {
            return null;
        }
        if (!tokenResponse.oauthAccessToken) {
            return null;
        }
        try {
            return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
        }
        catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.FACEBOOK. */
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com" /* SignInMethod.FACEBOOK */;
/** Always set to {@link ProviderId}.FACEBOOK. */
FacebookAuthProvider.PROVIDER_ID = "facebook.com" /* ProviderId.FACEBOOK */;

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */
class GoogleAuthProvider extends BaseOAuthProvider {
    constructor() {
        super("google.com" /* ProviderId.GOOGLE */);
        this.addScope('profile');
    }
    /**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */
    static credential(idToken, accessToken) {
        return OAuthCredential._fromParams({
            providerId: GoogleAuthProvider.PROVIDER_ID,
            signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
            idToken,
            accessToken
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromResult(userCredential) {
        return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromError(error) {
        return GoogleAuthProvider.credentialFromTaggedObject((error.customData || {}));
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) {
            return null;
        }
        const { oauthIdToken, oauthAccessToken } = tokenResponse;
        if (!oauthIdToken && !oauthAccessToken) {
            // This could be an oauth 1 credential or a phone credential
            return null;
        }
        try {
            return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
        }
        catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.GOOGLE. */
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com" /* SignInMethod.GOOGLE */;
/** Always set to {@link ProviderId}.GOOGLE. */
GoogleAuthProvider.PROVIDER_ID = "google.com" /* ProviderId.GOOGLE */;

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */
class GithubAuthProvider extends BaseOAuthProvider {
    constructor() {
        super("github.com" /* ProviderId.GITHUB */);
    }
    /**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */
    static credential(accessToken) {
        return OAuthCredential._fromParams({
            providerId: GithubAuthProvider.PROVIDER_ID,
            signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
            accessToken
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromResult(userCredential) {
        return GithubAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromError(error) {
        return GithubAuthProvider.credentialFromTaggedObject((error.customData || {}));
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse || !('oauthAccessToken' in tokenResponse)) {
            return null;
        }
        if (!tokenResponse.oauthAccessToken) {
            return null;
        }
        try {
            return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
        }
        catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.GITHUB. */
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com" /* SignInMethod.GITHUB */;
/** Always set to {@link ProviderId}.GITHUB. */
GithubAuthProvider.PROVIDER_ID = "github.com" /* ProviderId.GITHUB */;

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */
class TwitterAuthProvider extends BaseOAuthProvider {
    constructor() {
        super("twitter.com" /* ProviderId.TWITTER */);
    }
    /**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */
    static credential(token, secret) {
        return OAuthCredential._fromParams({
            providerId: TwitterAuthProvider.PROVIDER_ID,
            signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
            oauthToken: token,
            oauthTokenSecret: secret
        });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromResult(userCredential) {
        return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */
    static credentialFromError(error) {
        return TwitterAuthProvider.credentialFromTaggedObject((error.customData || {}));
    }
    static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
        if (!tokenResponse) {
            return null;
        }
        const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
        if (!oauthAccessToken || !oauthTokenSecret) {
            return null;
        }
        try {
            return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
        }
        catch (_a) {
            return null;
        }
    }
}
/** Always set to {@link SignInMethod}.TWITTER. */
TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com" /* SignInMethod.TWITTER */;
/** Always set to {@link ProviderId}.TWITTER. */
TwitterAuthProvider.PROVIDER_ID = "twitter.com" /* ProviderId.TWITTER */;

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UserCredentialImpl {
    constructor(params) {
        this.user = params.user;
        this.providerId = params.providerId;
        this._tokenResponse = params._tokenResponse;
        this.operationType = params.operationType;
    }
    static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
        const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
        const providerId = providerIdForResponse(idTokenResponse);
        const userCred = new UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: idTokenResponse,
            operationType
        });
        return userCred;
    }
    static async _forOperation(user, operationType, response) {
        await user._updateTokensIfNecessary(response, /* reload */ true);
        const providerId = providerIdForResponse(response);
        return new UserCredentialImpl({
            user,
            providerId,
            _tokenResponse: response,
            operationType
        });
    }
}
function providerIdForResponse(response) {
    if (response.providerId) {
        return response.providerId;
    }
    if ('phoneNumber' in response) {
        return "phone" /* ProviderId.PHONE */;
    }
    return null;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MultiFactorError extends FirebaseError {
    constructor(auth, error, operationType, user) {
        var _a;
        super(error.code, error.message);
        this.operationType = operationType;
        this.user = user;
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, MultiFactorError.prototype);
        this.customData = {
            appName: auth.name,
            tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : undefined,
            _serverResponse: error.customData._serverResponse,
            operationType
        };
    }
    static _fromErrorAndOperation(auth, error, operationType, user) {
        return new MultiFactorError(auth, error, operationType, user);
    }
}
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
    const idTokenProvider = operationType === "reauthenticate" /* OperationType.REAUTHENTICATE */
        ? credential._getReauthenticationResolver(auth)
        : credential._getIdTokenResponse(auth);
    return idTokenProvider.catch(error => {
        if (error.code === `auth/${"multi-factor-auth-required" /* AuthErrorCode.MFA_REQUIRED */}`) {
            throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
        }
        throw error;
    });
}
async function _link$1(user, credential, bypassAuthState = false) {
    const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
    return UserCredentialImpl._forOperation(user, "link" /* OperationType.LINK */, response);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _reauthenticate(user, credential, bypassAuthState = false) {
    const { auth } = user;
    const operationType = "reauthenticate" /* OperationType.REAUTHENTICATE */;
    try {
        const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
        _assert(response.idToken, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        const parsed = _parseToken(response.idToken);
        _assert(parsed, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        const { sub: localId } = parsed;
        _assert(user.uid === localId, auth, "user-mismatch" /* AuthErrorCode.USER_MISMATCH */);
        return UserCredentialImpl._forOperation(user, operationType, response);
    }
    catch (e) {
        // Convert user deleted error into user mismatch
        if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found" /* AuthErrorCode.USER_DELETED */}`) {
            _fail(auth, "user-mismatch" /* AuthErrorCode.USER_MISMATCH */);
        }
        throw e;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _signInWithCredential(auth, credential, bypassAuthState = false) {
    const operationType = "signIn" /* OperationType.SIGN_IN */;
    const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
    const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
    if (!bypassAuthState) {
        await auth._updateCurrentUser(userCredential.user);
    }
    return userCredential;
}
/**
 * Adds an observer for changes to the signed-in user's ID token.
 *
 * @remarks
 * This includes sign-in, sign-out, and token refresh events.
 * This will not be triggered automatically upon ID token expiration. Use {@link User.getIdToken} to refresh the ID token.
 *
 * @param auth - The {@link Auth} instance.
 * @param nextOrObserver - callback triggered on change.
 * @param error - Deprecated. This callback is never triggered. Errors
 * on signing in/out can be caught in promises returned from
 * sign-in/sign-out functions.
 * @param completed - Deprecated. This callback is never triggered.
 *
 * @public
 */
function onIdTokenChanged(auth, nextOrObserver, error, completed) {
    return getModularInstance(auth).onIdTokenChanged(nextOrObserver, error, completed);
}
/**
 * Adds a blocking callback that runs before an auth state change
 * sets a new user.
 *
 * @param auth - The {@link Auth} instance.
 * @param callback - callback triggered before new user value is set.
 *   If this throws, it blocks the user from being set.
 * @param onAbort - callback triggered if a later `beforeAuthStateChanged()`
 *   callback throws, allowing you to undo any side effects.
 */
function beforeAuthStateChanged(auth, callback, onAbort) {
    return getModularInstance(auth).beforeAuthStateChanged(callback, onAbort);
}
/**
 * Adds an observer for changes to the user's sign-in state.
 *
 * @remarks
 * To keep the old behavior, see {@link onIdTokenChanged}.
 *
 * @param auth - The {@link Auth} instance.
 * @param nextOrObserver - callback triggered on change.
 * @param error - Deprecated. This callback is never triggered. Errors
 * on signing in/out can be caught in promises returned from
 * sign-in/sign-out functions.
 * @param completed - Deprecated. This callback is never triggered.
 *
 * @public
 */
function onAuthStateChanged(auth, nextOrObserver, error, completed) {
    return getModularInstance(auth).onAuthStateChanged(nextOrObserver, error, completed);
}

const STORAGE_AVAILABLE_KEY = '__sak';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class BrowserPersistenceClass {
    constructor(storageRetriever, type) {
        this.storageRetriever = storageRetriever;
        this.type = type;
    }
    _isAvailable() {
        try {
            if (!this.storage) {
                return Promise.resolve(false);
            }
            this.storage.setItem(STORAGE_AVAILABLE_KEY, '1');
            this.storage.removeItem(STORAGE_AVAILABLE_KEY);
            return Promise.resolve(true);
        }
        catch (_a) {
            return Promise.resolve(false);
        }
    }
    _set(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
        return Promise.resolve();
    }
    _get(key) {
        const json = this.storage.getItem(key);
        return Promise.resolve(json ? JSON.parse(json) : null);
    }
    _remove(key) {
        this.storage.removeItem(key);
        return Promise.resolve();
    }
    get storage() {
        return this.storageRetriever();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _iframeCannotSyncWebStorage() {
    const ua = getUA();
    return _isSafari(ua) || _isIOS(ua);
}
// The polling period in case events are not supported
const _POLLING_INTERVAL_MS$1 = 1000;
// The IE 10 localStorage cross tab synchronization delay in milliseconds
const IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
class BrowserLocalPersistence extends BrowserPersistenceClass {
    constructor() {
        super(() => window.localStorage, "LOCAL" /* PersistenceType.LOCAL */);
        this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
        this.listeners = {};
        this.localCache = {};
        // setTimeout return value is platform specific
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.pollTimer = null;
        // Safari or iOS browser and embedded in an iframe.
        this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
        // Whether to use polling instead of depending on window events
        this.fallbackToPolling = _isMobileBrowser();
        this._shouldAllowMigration = true;
    }
    forAllChangedKeys(cb) {
        // Check all keys with listeners on them.
        for (const key of Object.keys(this.listeners)) {
            // Get value from localStorage.
            const newValue = this.storage.getItem(key);
            const oldValue = this.localCache[key];
            // If local map value does not match, trigger listener with storage event.
            // Differentiate this simulated event from the real storage event.
            if (newValue !== oldValue) {
                cb(key, oldValue, newValue);
            }
        }
    }
    onStorageEvent(event, poll = false) {
        // Key would be null in some situations, like when localStorage is cleared
        if (!event.key) {
            this.forAllChangedKeys((key, _oldValue, newValue) => {
                this.notifyListeners(key, newValue);
            });
            return;
        }
        const key = event.key;
        // Check the mechanism how this event was detected.
        // The first event will dictate the mechanism to be used.
        if (poll) {
            // Environment detects storage changes via polling.
            // Remove storage event listener to prevent possible event duplication.
            this.detachListener();
        }
        else {
            // Environment detects storage changes via storage event listener.
            // Remove polling listener to prevent possible event duplication.
            this.stopPolling();
        }
        // Safari embedded iframe. Storage event will trigger with the delta
        // changes but no changes will be applied to the iframe localStorage.
        if (this.safariLocalStorageNotSynced) {
            // Get current iframe page value.
            const storedValue = this.storage.getItem(key);
            // Value not synchronized, synchronize manually.
            if (event.newValue !== storedValue) {
                if (event.newValue !== null) {
                    // Value changed from current value.
                    this.storage.setItem(key, event.newValue);
                }
                else {
                    // Current value deleted.
                    this.storage.removeItem(key);
                }
            }
            else if (this.localCache[key] === event.newValue && !poll) {
                // Already detected and processed, do not trigger listeners again.
                return;
            }
        }
        const triggerListeners = () => {
            // Keep local map up to date in case storage event is triggered before
            // poll.
            const storedValue = this.storage.getItem(key);
            if (!poll && this.localCache[key] === storedValue) {
                // Real storage event which has already been detected, do nothing.
                // This seems to trigger in some IE browsers for some reason.
                return;
            }
            this.notifyListeners(key, storedValue);
        };
        const storedValue = this.storage.getItem(key);
        if (_isIE10() &&
            storedValue !== event.newValue &&
            event.newValue !== event.oldValue) {
            // IE 10 has this weird bug where a storage event would trigger with the
            // correct key, oldValue and newValue but localStorage.getItem(key) does
            // not yield the updated value until a few milliseconds. This ensures
            // this recovers from that situation.
            setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
        }
        else {
            triggerListeners();
        }
    }
    notifyListeners(key, value) {
        this.localCache[key] = value;
        const listeners = this.listeners[key];
        if (listeners) {
            for (const listener of Array.from(listeners)) {
                listener(value ? JSON.parse(value) : value);
            }
        }
    }
    startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((key, oldValue, newValue) => {
                this.onStorageEvent(new StorageEvent('storage', {
                    key,
                    oldValue,
                    newValue
                }), 
                /* poll */ true);
            });
        }, _POLLING_INTERVAL_MS$1);
    }
    stopPolling() {
        if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
        }
    }
    attachListener() {
        window.addEventListener('storage', this.boundEventHandler);
    }
    detachListener() {
        window.removeEventListener('storage', this.boundEventHandler);
    }
    _addListener(key, listener) {
        if (Object.keys(this.listeners).length === 0) {
            // Whether browser can detect storage event when it had already been pushed to the background.
            // This may happen in some mobile browsers. A localStorage change in the foreground window
            // will not be detected in the background window via the storage event.
            // This was detected in iOS 7.x mobile browsers
            if (this.fallbackToPolling) {
                this.startPolling();
            }
            else {
                this.attachListener();
            }
        }
        if (!this.listeners[key]) {
            this.listeners[key] = new Set();
            // Populate the cache to avoid spuriously triggering on first poll.
            this.localCache[key] = this.storage.getItem(key);
        }
        this.listeners[key].add(listener);
    }
    _removeListener(key, listener) {
        if (this.listeners[key]) {
            this.listeners[key].delete(listener);
            if (this.listeners[key].size === 0) {
                delete this.listeners[key];
            }
        }
        if (Object.keys(this.listeners).length === 0) {
            this.detachListener();
            this.stopPolling();
        }
    }
    // Update local cache on base operations:
    async _set(key, value) {
        await super._set(key, value);
        this.localCache[key] = JSON.stringify(value);
    }
    async _get(key) {
        const value = await super._get(key);
        this.localCache[key] = JSON.stringify(value);
        return value;
    }
    async _remove(key) {
        await super._remove(key);
        delete this.localCache[key];
    }
}
BrowserLocalPersistence.type = 'LOCAL';
/**
 * An implementation of {@link Persistence} of type `LOCAL` using `localStorage`
 * for the underlying storage.
 *
 * @public
 */
const browserLocalPersistence = BrowserLocalPersistence;

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class BrowserSessionPersistence extends BrowserPersistenceClass {
    constructor() {
        super(() => window.sessionStorage, "SESSION" /* PersistenceType.SESSION */);
    }
    _addListener(_key, _listener) {
        // Listeners are not supported for session storage since it cannot be shared across windows
        return;
    }
    _removeListener(_key, _listener) {
        // Listeners are not supported for session storage since it cannot be shared across windows
        return;
    }
}
BrowserSessionPersistence.type = 'SESSION';
/**
 * An implementation of {@link Persistence} of `SESSION` using `sessionStorage`
 * for the underlying storage.
 *
 * @public
 */
const browserSessionPersistence = BrowserSessionPersistence;

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Shim for Promise.allSettled, note the slightly different format of `fulfilled` vs `status`.
 *
 * @param promises - Array of promises to wait on.
 */
function _allSettled(promises) {
    return Promise.all(promises.map(async (promise) => {
        try {
            const value = await promise;
            return {
                fulfilled: true,
                value
            };
        }
        catch (reason) {
            return {
                fulfilled: false,
                reason
            };
        }
    }));
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Interface class for receiving messages.
 *
 */
class Receiver {
    constructor(eventTarget) {
        this.eventTarget = eventTarget;
        this.handlersMap = {};
        this.boundEventHandler = this.handleEvent.bind(this);
    }
    /**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */
    static _getInstance(eventTarget) {
        // The results are stored in an array since objects can't be keys for other
        // objects. In addition, setting a unique property on an event target as a
        // hash map key may not be allowed due to CORS restrictions.
        const existingInstance = this.receivers.find(receiver => receiver.isListeningto(eventTarget));
        if (existingInstance) {
            return existingInstance;
        }
        const newInstance = new Receiver(eventTarget);
        this.receivers.push(newInstance);
        return newInstance;
    }
    isListeningto(eventTarget) {
        return this.eventTarget === eventTarget;
    }
    /**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */
    async handleEvent(event) {
        const messageEvent = event;
        const { eventId, eventType, data } = messageEvent.data;
        const handlers = this.handlersMap[eventType];
        if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
            return;
        }
        messageEvent.ports[0].postMessage({
            status: "ack" /* _Status.ACK */,
            eventId,
            eventType
        });
        const promises = Array.from(handlers).map(async (handler) => handler(messageEvent.origin, data));
        const response = await _allSettled(promises);
        messageEvent.ports[0].postMessage({
            status: "done" /* _Status.DONE */,
            eventId,
            eventType,
            response
        });
    }
    /**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */
    _subscribe(eventType, eventHandler) {
        if (Object.keys(this.handlersMap).length === 0) {
            this.eventTarget.addEventListener('message', this.boundEventHandler);
        }
        if (!this.handlersMap[eventType]) {
            this.handlersMap[eventType] = new Set();
        }
        this.handlersMap[eventType].add(eventHandler);
    }
    /**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */
    _unsubscribe(eventType, eventHandler) {
        if (this.handlersMap[eventType] && eventHandler) {
            this.handlersMap[eventType].delete(eventHandler);
        }
        if (!eventHandler || this.handlersMap[eventType].size === 0) {
            delete this.handlersMap[eventType];
        }
        if (Object.keys(this.handlersMap).length === 0) {
            this.eventTarget.removeEventListener('message', this.boundEventHandler);
        }
    }
}
Receiver.receivers = [];

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _generateEventId(prefix = '', digits = 10) {
    let random = '';
    for (let i = 0; i < digits; i++) {
        random += Math.floor(Math.random() * 10);
    }
    return prefix + random;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Interface for sending messages and waiting for a completion response.
 *
 */
class Sender {
    constructor(target) {
        this.target = target;
        this.handlers = new Set();
    }
    /**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */
    removeMessageHandler(handler) {
        if (handler.messageChannel) {
            handler.messageChannel.port1.removeEventListener('message', handler.onMessage);
            handler.messageChannel.port1.close();
        }
        this.handlers.delete(handler);
    }
    /**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */
    async _send(eventType, data, timeout = 50 /* _TimeoutDuration.ACK */) {
        const messageChannel = typeof MessageChannel !== 'undefined' ? new MessageChannel() : null;
        if (!messageChannel) {
            throw new Error("connection_unavailable" /* _MessageError.CONNECTION_UNAVAILABLE */);
        }
        // Node timers and browser timers return fundamentally different types.
        // We don't actually care what the value is but TS won't accept unknown and
        // we can't cast properly in both environments.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let completionTimer;
        let handler;
        return new Promise((resolve, reject) => {
            const eventId = _generateEventId('', 20);
            messageChannel.port1.start();
            const ackTimer = setTimeout(() => {
                reject(new Error("unsupported_event" /* _MessageError.UNSUPPORTED_EVENT */));
            }, timeout);
            handler = {
                messageChannel,
                onMessage(event) {
                    const messageEvent = event;
                    if (messageEvent.data.eventId !== eventId) {
                        return;
                    }
                    switch (messageEvent.data.status) {
                        case "ack" /* _Status.ACK */:
                            // The receiver should ACK first.
                            clearTimeout(ackTimer);
                            completionTimer = setTimeout(() => {
                                reject(new Error("timeout" /* _MessageError.TIMEOUT */));
                            }, 3000 /* _TimeoutDuration.COMPLETION */);
                            break;
                        case "done" /* _Status.DONE */:
                            // Once the receiver's handlers are finished we will get the results.
                            clearTimeout(completionTimer);
                            resolve(messageEvent.data.response);
                            break;
                        default:
                            clearTimeout(ackTimer);
                            clearTimeout(completionTimer);
                            reject(new Error("invalid_response" /* _MessageError.INVALID_RESPONSE */));
                            break;
                    }
                }
            };
            this.handlers.add(handler);
            messageChannel.port1.addEventListener('message', handler.onMessage);
            this.target.postMessage({
                eventType,
                eventId,
                data
            }, [messageChannel.port2]);
        }).finally(() => {
            if (handler) {
                this.removeMessageHandler(handler);
            }
        });
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */
function _window() {
    return window;
}
function _setWindowLocation(url) {
    _window().location.href = url;
}

/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _isWorker() {
    return (typeof _window()['WorkerGlobalScope'] !== 'undefined' &&
        typeof _window()['importScripts'] === 'function');
}
async function _getActiveServiceWorker() {
    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
        return null;
    }
    try {
        const registration = await navigator.serviceWorker.ready;
        return registration.active;
    }
    catch (_a) {
        return null;
    }
}
function _getServiceWorkerController() {
    var _a;
    return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
    return _isWorker() ? self : null;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME = 'firebaseLocalStorageDb';
const DB_VERSION = 1;
const DB_OBJECTSTORE_NAME = 'firebaseLocalStorage';
const DB_DATA_KEYPATH = 'fbase_key';
/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */
class DBPromise {
    constructor(request) {
        this.request = request;
    }
    toPromise() {
        return new Promise((resolve, reject) => {
            this.request.addEventListener('success', () => {
                resolve(this.request.result);
            });
            this.request.addEventListener('error', () => {
                reject(this.request.error);
            });
        });
    }
}
function getObjectStore(db, isReadWrite) {
    return db
        .transaction([DB_OBJECTSTORE_NAME], isReadWrite ? 'readwrite' : 'readonly')
        .objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
    const request = indexedDB.deleteDatabase(DB_NAME);
    return new DBPromise(request).toPromise();
}
function _openDatabase() {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    return new Promise((resolve, reject) => {
        request.addEventListener('error', () => {
            reject(request.error);
        });
        request.addEventListener('upgradeneeded', () => {
            const db = request.result;
            try {
                db.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
            }
            catch (e) {
                reject(e);
            }
        });
        request.addEventListener('success', async () => {
            const db = request.result;
            // Strange bug that occurs in Firefox when multiple tabs are opened at the
            // same time. The only way to recover seems to be deleting the database
            // and re-initializing it.
            // https://github.com/firebase/firebase-js-sdk/issues/634
            if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
                // Need to close the database or else you get a `blocked` event
                db.close();
                await _deleteDatabase();
                resolve(await _openDatabase());
            }
            else {
                resolve(db);
            }
        });
    });
}
async function _putObject(db, key, value) {
    const request = getObjectStore(db, true).put({
        [DB_DATA_KEYPATH]: key,
        value
    });
    return new DBPromise(request).toPromise();
}
async function getObject(db, key) {
    const request = getObjectStore(db, false).get(key);
    const data = await new DBPromise(request).toPromise();
    return data === undefined ? null : data.value;
}
function _deleteObject(db, key) {
    const request = getObjectStore(db, true).delete(key);
    return new DBPromise(request).toPromise();
}
const _POLLING_INTERVAL_MS = 800;
const _TRANSACTION_RETRY_COUNT = 3;
class IndexedDBLocalPersistence {
    constructor() {
        this.type = "LOCAL" /* PersistenceType.LOCAL */;
        this._shouldAllowMigration = true;
        this.listeners = {};
        this.localCache = {};
        // setTimeout return value is platform specific
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.pollTimer = null;
        this.pendingWrites = 0;
        this.receiver = null;
        this.sender = null;
        this.serviceWorkerReceiverAvailable = false;
        this.activeServiceWorker = null;
        // Fire & forget the service worker registration as it may never resolve
        this._workerInitializationPromise =
            this.initializeServiceWorkerMessaging().then(() => { }, () => { });
    }
    async _openDb() {
        if (this.db) {
            return this.db;
        }
        this.db = await _openDatabase();
        return this.db;
    }
    async _withRetries(op) {
        let numAttempts = 0;
        while (true) {
            try {
                const db = await this._openDb();
                return await op(db);
            }
            catch (e) {
                if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
                    throw e;
                }
                if (this.db) {
                    this.db.close();
                    this.db = undefined;
                }
                // TODO: consider adding exponential backoff
            }
        }
    }
    /**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */
    async initializeServiceWorkerMessaging() {
        return _isWorker() ? this.initializeReceiver() : this.initializeSender();
    }
    /**
     * As the worker we should listen to events from the main window.
     */
    async initializeReceiver() {
        this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
        // Refresh from persistence if we receive a KeyChanged message.
        this.receiver._subscribe("keyChanged" /* _EventType.KEY_CHANGED */, async (_origin, data) => {
            const keys = await this._poll();
            return {
                keyProcessed: keys.includes(data.key)
            };
        });
        // Let the sender know that we are listening so they give us more timeout.
        this.receiver._subscribe("ping" /* _EventType.PING */, async (_origin, _data) => {
            return ["keyChanged" /* _EventType.KEY_CHANGED */];
        });
    }
    /**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */
    async initializeSender() {
        var _a, _b;
        // Check to see if there's an active service worker.
        this.activeServiceWorker = await _getActiveServiceWorker();
        if (!this.activeServiceWorker) {
            return;
        }
        this.sender = new Sender(this.activeServiceWorker);
        // Ping the service worker to check what events they can handle.
        const results = await this.sender._send("ping" /* _EventType.PING */, {}, 800 /* _TimeoutDuration.LONG_ACK */);
        if (!results) {
            return;
        }
        if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) &&
            ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged" /* _EventType.KEY_CHANGED */))) {
            this.serviceWorkerReceiverAvailable = true;
        }
    }
    /**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */
    async notifyServiceWorker(key) {
        if (!this.sender ||
            !this.activeServiceWorker ||
            _getServiceWorkerController() !== this.activeServiceWorker) {
            return;
        }
        try {
            await this.sender._send("keyChanged" /* _EventType.KEY_CHANGED */, { key }, 
            // Use long timeout if receiver has previously responded to a ping from us.
            this.serviceWorkerReceiverAvailable
                ? 800 /* _TimeoutDuration.LONG_ACK */
                : 50 /* _TimeoutDuration.ACK */);
        }
        catch (_a) {
            // This is a best effort approach. Ignore errors.
        }
    }
    async _isAvailable() {
        try {
            if (!indexedDB) {
                return false;
            }
            const db = await _openDatabase();
            await _putObject(db, STORAGE_AVAILABLE_KEY, '1');
            await _deleteObject(db, STORAGE_AVAILABLE_KEY);
            return true;
        }
        catch (_a) { }
        return false;
    }
    async _withPendingWrite(write) {
        this.pendingWrites++;
        try {
            await write();
        }
        finally {
            this.pendingWrites--;
        }
    }
    async _set(key, value) {
        return this._withPendingWrite(async () => {
            await this._withRetries((db) => _putObject(db, key, value));
            this.localCache[key] = value;
            return this.notifyServiceWorker(key);
        });
    }
    async _get(key) {
        const obj = (await this._withRetries((db) => getObject(db, key)));
        this.localCache[key] = obj;
        return obj;
    }
    async _remove(key) {
        return this._withPendingWrite(async () => {
            await this._withRetries((db) => _deleteObject(db, key));
            delete this.localCache[key];
            return this.notifyServiceWorker(key);
        });
    }
    async _poll() {
        // TODO: check if we need to fallback if getAll is not supported
        const result = await this._withRetries((db) => {
            const getAllRequest = getObjectStore(db, false).getAll();
            return new DBPromise(getAllRequest).toPromise();
        });
        if (!result) {
            return [];
        }
        // If we have pending writes in progress abort, we'll get picked up on the next poll
        if (this.pendingWrites !== 0) {
            return [];
        }
        const keys = [];
        const keysInResult = new Set();
        for (const { fbase_key: key, value } of result) {
            keysInResult.add(key);
            if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
                this.notifyListeners(key, value);
                keys.push(key);
            }
        }
        for (const localKey of Object.keys(this.localCache)) {
            if (this.localCache[localKey] && !keysInResult.has(localKey)) {
                // Deleted
                this.notifyListeners(localKey, null);
                keys.push(localKey);
            }
        }
        return keys;
    }
    notifyListeners(key, newValue) {
        this.localCache[key] = newValue;
        const listeners = this.listeners[key];
        if (listeners) {
            for (const listener of Array.from(listeners)) {
                listener(newValue);
            }
        }
    }
    startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
    }
    stopPolling() {
        if (this.pollTimer) {
            clearInterval(this.pollTimer);
            this.pollTimer = null;
        }
    }
    _addListener(key, listener) {
        if (Object.keys(this.listeners).length === 0) {
            this.startPolling();
        }
        if (!this.listeners[key]) {
            this.listeners[key] = new Set();
            // Populate the cache to avoid spuriously triggering on first poll.
            void this._get(key); // This can happen in the background async and we can return immediately.
        }
        this.listeners[key].add(listener);
    }
    _removeListener(key, listener) {
        if (this.listeners[key]) {
            this.listeners[key].delete(listener);
            if (this.listeners[key].size === 0) {
                delete this.listeners[key];
            }
        }
        if (Object.keys(this.listeners).length === 0) {
            this.stopPolling();
        }
    }
}
IndexedDBLocalPersistence.type = 'LOCAL';
/**
 * An implementation of {@link Persistence} of type `LOCAL` using `indexedDB`
 * for the underlying storage.
 *
 * @public
 */
const indexedDBLocalPersistence = IndexedDBLocalPersistence;
new Delay(30000, 60000);

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */
function _withDefaultResolver(auth, resolverOverride) {
    if (resolverOverride) {
        return _getInstance(resolverOverride);
    }
    _assert(auth._popupRedirectResolver, auth, "argument-error" /* AuthErrorCode.ARGUMENT_ERROR */);
    return auth._popupRedirectResolver;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class IdpCredential extends AuthCredential {
    constructor(params) {
        super("custom" /* ProviderId.CUSTOM */, "custom" /* ProviderId.CUSTOM */);
        this.params = params;
    }
    _getIdTokenResponse(auth) {
        return signInWithIdp(auth, this._buildIdpRequest());
    }
    _linkToIdToken(auth, idToken) {
        return signInWithIdp(auth, this._buildIdpRequest(idToken));
    }
    _getReauthenticationResolver(auth) {
        return signInWithIdp(auth, this._buildIdpRequest());
    }
    _buildIdpRequest(idToken) {
        const request = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: true,
            returnIdpCredential: true
        };
        if (idToken) {
            request.idToken = idToken;
        }
        return request;
    }
}
function _signIn(params) {
    return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
    const { auth, user } = params;
    _assert(user, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
    return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
    const { auth, user } = params;
    _assert(user, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
    return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */
class AbstractPopupRedirectOperation {
    constructor(auth, filter, resolver, user, bypassAuthState = false) {
        this.auth = auth;
        this.resolver = resolver;
        this.user = user;
        this.bypassAuthState = bypassAuthState;
        this.pendingPromise = null;
        this.eventManager = null;
        this.filter = Array.isArray(filter) ? filter : [filter];
    }
    execute() {
        return new Promise(async (resolve, reject) => {
            this.pendingPromise = { resolve, reject };
            try {
                this.eventManager = await this.resolver._initialize(this.auth);
                await this.onExecution();
                this.eventManager.registerConsumer(this);
            }
            catch (e) {
                this.reject(e);
            }
        });
    }
    async onAuthEvent(event) {
        const { urlResponse, sessionId, postBody, tenantId, error, type } = event;
        if (error) {
            this.reject(error);
            return;
        }
        const params = {
            auth: this.auth,
            requestUri: urlResponse,
            sessionId: sessionId,
            tenantId: tenantId || undefined,
            postBody: postBody || undefined,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(type)(params));
        }
        catch (e) {
            this.reject(e);
        }
    }
    onError(error) {
        this.reject(error);
    }
    getIdpTask(type) {
        switch (type) {
            case "signInViaPopup" /* AuthEventType.SIGN_IN_VIA_POPUP */:
            case "signInViaRedirect" /* AuthEventType.SIGN_IN_VIA_REDIRECT */:
                return _signIn;
            case "linkViaPopup" /* AuthEventType.LINK_VIA_POPUP */:
            case "linkViaRedirect" /* AuthEventType.LINK_VIA_REDIRECT */:
                return _link;
            case "reauthViaPopup" /* AuthEventType.REAUTH_VIA_POPUP */:
            case "reauthViaRedirect" /* AuthEventType.REAUTH_VIA_REDIRECT */:
                return _reauth;
            default:
                _fail(this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        }
    }
    resolve(cred) {
        debugAssert(this.pendingPromise, 'Pending promise was never set');
        this.pendingPromise.resolve(cred);
        this.unregisterAndCleanUp();
    }
    reject(error) {
        debugAssert(this.pendingPromise, 'Pending promise was never set');
        this.pendingPromise.reject(error);
        this.unregisterAndCleanUp();
    }
    unregisterAndCleanUp() {
        if (this.eventManager) {
            this.eventManager.unregisterConsumer(this);
        }
        this.pendingPromise = null;
        this.cleanUp();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2000, 10000);
/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */
class PopupOperation extends AbstractPopupRedirectOperation {
    constructor(auth, filter, provider, resolver, user) {
        super(auth, filter, resolver, user);
        this.provider = provider;
        this.authWindow = null;
        this.pollId = null;
        if (PopupOperation.currentPopupAction) {
            PopupOperation.currentPopupAction.cancel();
        }
        PopupOperation.currentPopupAction = this;
    }
    async executeNotNull() {
        const result = await this.execute();
        _assert(result, this.auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        return result;
    }
    async onExecution() {
        debugAssert(this.filter.length === 1, 'Popup operations only handle one event');
        const eventId = _generateEventId();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], // There's always one, see constructor
        eventId);
        this.authWindow.associatedEvent = eventId;
        // Check for web storage support and origin validation _after_ the popup is
        // loaded. These operations are slow (~1 second or so) Rather than
        // waiting on them before opening the window, optimistically open the popup
        // and check for storage support at the same time. If storage support is
        // not available, this will cause the whole thing to reject properly. It
        // will also close the popup, but since the promise has already rejected,
        // the popup closed by user poll will reject into the void.
        this.resolver._originValidation(this.auth).catch(e => {
            this.reject(e);
        });
        this.resolver._isIframeWebStorageSupported(this.auth, isSupported => {
            if (!isSupported) {
                this.reject(_createError(this.auth, "web-storage-unsupported" /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */));
            }
        });
        // Handle user closure. Notice this does *not* use await
        this.pollUserCancellation();
    }
    get eventId() {
        var _a;
        return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
    }
    cancel() {
        this.reject(_createError(this.auth, "cancelled-popup-request" /* AuthErrorCode.EXPIRED_POPUP_REQUEST */));
    }
    cleanUp() {
        if (this.authWindow) {
            this.authWindow.close();
        }
        if (this.pollId) {
            window.clearTimeout(this.pollId);
        }
        this.authWindow = null;
        this.pollId = null;
        PopupOperation.currentPopupAction = null;
    }
    pollUserCancellation() {
        const poll = () => {
            var _a, _b;
            if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
                // Make sure that there is sufficient time for whatever action to
                // complete. The window could have closed but the sign in network
                // call could still be in flight. This is specifically true for
                // Firefox or if the opener is in an iframe, in which case the oauth
                // helper closes the popup.
                this.pollId = window.setTimeout(() => {
                    this.pollId = null;
                    this.reject(_createError(this.auth, "popup-closed-by-user" /* AuthErrorCode.POPUP_CLOSED_BY_USER */));
                }, 8000 /* _Timeout.AUTH_EVENT */);
                return;
            }
            this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
        };
        poll();
    }
}
// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
PopupOperation.currentPopupAction = null;

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PENDING_REDIRECT_KEY = 'pendingRedirect';
// We only get one redirect outcome for any one auth, so just store it
// in here.
const redirectOutcomeMap = new Map();
class RedirectAction extends AbstractPopupRedirectOperation {
    constructor(auth, resolver, bypassAuthState = false) {
        super(auth, [
            "signInViaRedirect" /* AuthEventType.SIGN_IN_VIA_REDIRECT */,
            "linkViaRedirect" /* AuthEventType.LINK_VIA_REDIRECT */,
            "reauthViaRedirect" /* AuthEventType.REAUTH_VIA_REDIRECT */,
            "unknown" /* AuthEventType.UNKNOWN */
        ], resolver, undefined, bypassAuthState);
        this.eventId = null;
    }
    /**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */
    async execute() {
        let readyOutcome = redirectOutcomeMap.get(this.auth._key());
        if (!readyOutcome) {
            try {
                const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
                const result = hasPendingRedirect ? await super.execute() : null;
                readyOutcome = () => Promise.resolve(result);
            }
            catch (e) {
                readyOutcome = () => Promise.reject(e);
            }
            redirectOutcomeMap.set(this.auth._key(), readyOutcome);
        }
        // If we're not bypassing auth state, the ready outcome should be set to
        // null.
        if (!this.bypassAuthState) {
            redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
        }
        return readyOutcome();
    }
    async onAuthEvent(event) {
        if (event.type === "signInViaRedirect" /* AuthEventType.SIGN_IN_VIA_REDIRECT */) {
            return super.onAuthEvent(event);
        }
        else if (event.type === "unknown" /* AuthEventType.UNKNOWN */) {
            // This is a sentinel value indicating there's no pending redirect
            this.resolve(null);
            return;
        }
        if (event.eventId) {
            const user = await this.auth._redirectUserForId(event.eventId);
            if (user) {
                this.user = user;
                return super.onAuthEvent(event);
            }
            else {
                this.resolve(null);
            }
        }
    }
    async onExecution() { }
    cleanUp() { }
}
async function _getAndClearPendingRedirectStatus(resolver, auth) {
    const key = pendingRedirectKey(auth);
    const persistence = resolverPersistence(resolver);
    if (!(await persistence._isAvailable())) {
        return false;
    }
    const hasPendingRedirect = (await persistence._get(key)) === 'true';
    await persistence._remove(key);
    return hasPendingRedirect;
}
function _overrideRedirectResult(auth, result) {
    redirectOutcomeMap.set(auth._key(), result);
}
function resolverPersistence(resolver) {
    return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
    return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
    const authInternal = _castAuth(auth);
    const resolver = _withDefaultResolver(authInternal, resolverExtern);
    const action = new RedirectAction(authInternal, resolver, bypassAuthState);
    const result = await action.execute();
    if (result && !bypassAuthState) {
        delete result.user._redirectEventId;
        await authInternal._persistUserIfCurrent(result.user);
        await authInternal._setRedirectUser(null, resolverExtern);
    }
    return result;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The amount of time to store the UIDs of seen events; this is
// set to 10 min by default
const EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1000;
class AuthEventManager {
    constructor(auth) {
        this.auth = auth;
        this.cachedEventUids = new Set();
        this.consumers = new Set();
        this.queuedRedirectEvent = null;
        this.hasHandledPotentialRedirect = false;
        this.lastProcessedEventTime = Date.now();
    }
    registerConsumer(authEventConsumer) {
        this.consumers.add(authEventConsumer);
        if (this.queuedRedirectEvent &&
            this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
            this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
            this.saveEventToCache(this.queuedRedirectEvent);
            this.queuedRedirectEvent = null;
        }
    }
    unregisterConsumer(authEventConsumer) {
        this.consumers.delete(authEventConsumer);
    }
    onEvent(event) {
        // Check if the event has already been handled
        if (this.hasEventBeenHandled(event)) {
            return false;
        }
        let handled = false;
        this.consumers.forEach(consumer => {
            if (this.isEventForConsumer(event, consumer)) {
                handled = true;
                this.sendToConsumer(event, consumer);
                this.saveEventToCache(event);
            }
        });
        if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
            // If we've already seen a redirect before, or this is a popup event,
            // bail now
            return handled;
        }
        this.hasHandledPotentialRedirect = true;
        // If the redirect wasn't handled, hang on to it
        if (!handled) {
            this.queuedRedirectEvent = event;
            handled = true;
        }
        return handled;
    }
    sendToConsumer(event, consumer) {
        var _a;
        if (event.error && !isNullRedirectEvent(event)) {
            const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split('auth/')[1]) ||
                "internal-error" /* AuthErrorCode.INTERNAL_ERROR */;
            consumer.onError(_createError(this.auth, code));
        }
        else {
            consumer.onAuthEvent(event);
        }
    }
    isEventForConsumer(event, consumer) {
        const eventIdMatches = consumer.eventId === null ||
            (!!event.eventId && event.eventId === consumer.eventId);
        return consumer.filter.includes(event.type) && eventIdMatches;
    }
    hasEventBeenHandled(event) {
        if (Date.now() - this.lastProcessedEventTime >=
            EVENT_DUPLICATION_CACHE_DURATION_MS) {
            this.cachedEventUids.clear();
        }
        return this.cachedEventUids.has(eventUid(event));
    }
    saveEventToCache(event) {
        this.cachedEventUids.add(eventUid(event));
        this.lastProcessedEventTime = Date.now();
    }
}
function eventUid(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId].filter(v => v).join('-');
}
function isNullRedirectEvent({ type, error }) {
    return (type === "unknown" /* AuthEventType.UNKNOWN */ &&
        (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event" /* AuthErrorCode.NO_AUTH_EVENT */}`);
}
function isRedirectEvent(event) {
    switch (event.type) {
        case "signInViaRedirect" /* AuthEventType.SIGN_IN_VIA_REDIRECT */:
        case "linkViaRedirect" /* AuthEventType.LINK_VIA_REDIRECT */:
        case "reauthViaRedirect" /* AuthEventType.REAUTH_VIA_REDIRECT */:
            return true;
        case "unknown" /* AuthEventType.UNKNOWN */:
            return isNullRedirectEvent(event);
        default:
            return false;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _getProjectConfig(auth, request = {}) {
    return _performApiRequest(auth, "GET" /* HttpMethod.GET */, "/v1/projects" /* Endpoint.GET_PROJECT_CONFIG */, request);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
const HTTP_REGEX = /^https?/;
async function _validateOrigin(auth) {
    // Skip origin validation if we are in an emulated environment
    if (auth.config.emulator) {
        return;
    }
    const { authorizedDomains } = await _getProjectConfig(auth);
    for (const domain of authorizedDomains) {
        try {
            if (matchDomain(domain)) {
                return;
            }
        }
        catch (_a) {
            // Do nothing if there's a URL error; just continue searching
        }
    }
    // In the old SDK, this error also provides helpful messages.
    _fail(auth, "unauthorized-domain" /* AuthErrorCode.INVALID_ORIGIN */);
}
function matchDomain(expected) {
    const currentUrl = _getCurrentUrl();
    const { protocol, hostname } = new URL(currentUrl);
    if (expected.startsWith('chrome-extension://')) {
        const ceUrl = new URL(expected);
        if (ceUrl.hostname === '' && hostname === '') {
            // For some reason we're not parsing chrome URLs properly
            return (protocol === 'chrome-extension:' &&
                expected.replace('chrome-extension://', '') ===
                    currentUrl.replace('chrome-extension://', ''));
        }
        return protocol === 'chrome-extension:' && ceUrl.hostname === hostname;
    }
    if (!HTTP_REGEX.test(protocol)) {
        return false;
    }
    if (IP_ADDRESS_REGEX.test(expected)) {
        // The domain has to be exactly equal to the pattern, as an IP domain will
        // only contain the IP, no extra character.
        return hostname === expected;
    }
    // Dots in pattern should be escaped.
    const escapedDomainPattern = expected.replace(/\./g, '\\.');
    // Non ip address domains.
    // domain.com = *.domain.com OR domain.com
    const re = new RegExp('^(.+\\.' + escapedDomainPattern + '|' + escapedDomainPattern + ')$', 'i');
    return re.test(hostname);
}

/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const NETWORK_TIMEOUT = new Delay(30000, 60000);
/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */
function resetUnloadedGapiModules() {
    // Clear last failed gapi.load state to force next gapi.load to first
    // load the failed gapi.iframes module.
    // Get gapix.beacon context.
    const beacon = _window().___jsl;
    // Get current hint.
    if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
        // Get gapi hint.
        for (const hint of Object.keys(beacon.H)) {
            // Requested modules.
            beacon.H[hint].r = beacon.H[hint].r || [];
            // Loaded modules.
            beacon.H[hint].L = beacon.H[hint].L || [];
            // Set requested modules to a copy of the loaded modules.
            beacon.H[hint].r = [...beacon.H[hint].L];
            // Clear pending callbacks.
            if (beacon.CP) {
                for (let i = 0; i < beacon.CP.length; i++) {
                    // Remove all failed pending callbacks.
                    beacon.CP[i] = null;
                }
            }
        }
    }
}
function loadGapi(auth) {
    return new Promise((resolve, reject) => {
        var _a, _b, _c;
        // Function to run when gapi.load is ready.
        function loadGapiIframe() {
            // The developer may have tried to previously run gapi.load and failed.
            // Run this to fix that.
            resetUnloadedGapiModules();
            gapi.load('gapi.iframes', {
                callback: () => {
                    resolve(gapi.iframes.getContext());
                },
                ontimeout: () => {
                    // The above reset may be sufficient, but having this reset after
                    // failure ensures that if the developer calls gapi.load after the
                    // connection is re-established and before another attempt to embed
                    // the iframe, it would work and would not be broken because of our
                    // failed attempt.
                    // Timeout when gapi.iframes.Iframe not loaded.
                    resetUnloadedGapiModules();
                    reject(_createError(auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
                },
                timeout: NETWORK_TIMEOUT.get()
            });
        }
        if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
            // If gapi.iframes.Iframe available, resolve.
            resolve(gapi.iframes.getContext());
        }
        else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
            // Gapi loader ready, load gapi.iframes.
            loadGapiIframe();
        }
        else {
            // Create a new iframe callback when this is called so as not to overwrite
            // any previous defined callback. This happens if this method is called
            // multiple times in parallel and could result in the later callback
            // overwriting the previous one. This would end up with a iframe
            // timeout.
            const cbName = _generateCallbackName('iframefcb');
            // GApi loader not available, dynamically load platform.js.
            _window()[cbName] = () => {
                // GApi loader should be ready.
                if (!!gapi.load) {
                    loadGapiIframe();
                }
                else {
                    // Gapi loader failed, throw error.
                    reject(_createError(auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */));
                }
            };
            // Load GApi loader.
            return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`)
                .catch(e => reject(e));
        }
    }).catch(error => {
        // Reset cached promise to allow for retrial.
        cachedGApiLoader = null;
        throw error;
    });
}
let cachedGApiLoader = null;
function _loadGapi(auth) {
    cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
    return cachedGApiLoader;
}

/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PING_TIMEOUT = new Delay(5000, 15000);
const IFRAME_PATH = '__/auth/iframe';
const EMULATED_IFRAME_PATH = 'emulator/auth/iframe';
const IFRAME_ATTRIBUTES = {
    style: {
        position: 'absolute',
        top: '-100px',
        width: '1px',
        height: '1px'
    },
    'aria-hidden': 'true',
    tabindex: '-1'
};
// Map from apiHost to endpoint ID for passing into iframe. In current SDK, apiHost can be set to
// anything (not from a list of endpoints with IDs as in legacy), so this is the closest we can get.
const EID_FROM_APIHOST = new Map([
    ["identitytoolkit.googleapis.com" /* DefaultConfig.API_HOST */, 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't'] // test
]);
function getIframeUrl(auth) {
    const config = auth.config;
    _assert(config.authDomain, auth, "auth-domain-config-required" /* AuthErrorCode.MISSING_AUTH_DOMAIN */);
    const url = config.emulator
        ? _emulatorUrl(config, EMULATED_IFRAME_PATH)
        : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
    const params = {
        apiKey: config.apiKey,
        appName: auth.name,
        v: SDK_VERSION
    };
    const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
    if (eid) {
        params.eid = eid;
    }
    const frameworks = auth._getFrameworks();
    if (frameworks.length) {
        params.fw = frameworks.join(',');
    }
    return `${url}?${querystring(params).slice(1)}`;
}
async function _openIframe(auth) {
    const context = await _loadGapi(auth);
    const gapi = _window().gapi;
    _assert(gapi, auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
    return context.open({
        where: document.body,
        url: getIframeUrl(auth),
        messageHandlersFilter: gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: IFRAME_ATTRIBUTES,
        dontclear: true
    }, (iframe) => new Promise(async (resolve, reject) => {
        await iframe.restyle({
            // Prevent iframe from closing on mouse out.
            setHideOnLeave: false
        });
        const networkError = _createError(auth, "network-request-failed" /* AuthErrorCode.NETWORK_REQUEST_FAILED */);
        // Confirm iframe is correctly loaded.
        // To fallback on failure, set a timeout.
        const networkErrorTimer = _window().setTimeout(() => {
            reject(networkError);
        }, PING_TIMEOUT.get());
        // Clear timer and resolve pending iframe ready promise.
        function clearTimerAndResolve() {
            _window().clearTimeout(networkErrorTimer);
            resolve(iframe);
        }
        // This returns an IThenable. However the reject part does not call
        // when the iframe is not loaded.
        iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
            reject(networkError);
        });
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BASE_POPUP_OPTIONS = {
    location: 'yes',
    resizable: 'yes',
    statusbar: 'yes',
    toolbar: 'no'
};
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 600;
const TARGET_BLANK = '_blank';
const FIREFOX_EMPTY_URL = 'http://localhost';
class AuthPopup {
    constructor(window) {
        this.window = window;
        this.associatedEvent = null;
    }
    close() {
        if (this.window) {
            try {
                this.window.close();
            }
            catch (e) { }
        }
    }
}
function _open(auth, url, name, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
    const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
    const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
    let target = '';
    const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), { width: width.toString(), height: height.toString(), top,
        left });
    // Chrome iOS 7 and 8 is returning an undefined popup win when target is
    // specified, even though the popup is not necessarily blocked.
    const ua = getUA().toLowerCase();
    if (name) {
        target = _isChromeIOS(ua) ? TARGET_BLANK : name;
    }
    if (_isFirefox(ua)) {
        // Firefox complains when invalid URLs are popped out. Hacky way to bypass.
        url = url || FIREFOX_EMPTY_URL;
        // Firefox disables by default scrolling on popup windows, which can create
        // issues when the user has many Google accounts, for instance.
        options.scrollbars = 'yes';
    }
    const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, '');
    if (_isIOSStandalone(ua) && target !== '_self') {
        openAsNewWindowIOS(url || '', target);
        return new AuthPopup(null);
    }
    // about:blank getting sanitized causing browsers like IE/Edge to display
    // brief error message before redirecting to handler.
    const newWin = window.open(url || '', target, optionsString);
    _assert(newWin, auth, "popup-blocked" /* AuthErrorCode.POPUP_BLOCKED */);
    // Flaky on IE edge, encapsulate with a try and catch.
    try {
        newWin.focus();
    }
    catch (e) { }
    return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
    const el = document.createElement('a');
    el.href = url;
    el.target = target;
    const click = document.createEvent('MouseEvent');
    click.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
    el.dispatchEvent(click);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * URL for Authentication widget which will initiate the OAuth handshake
 *
 * @internal
 */
const WIDGET_PATH = '__/auth/handler';
/**
 * URL for emulated environment
 *
 * @internal
 */
const EMULATOR_WIDGET_PATH = 'emulator/auth/handler';
/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */
const FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent('fac');
async function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
    _assert(auth.config.authDomain, auth, "auth-domain-config-required" /* AuthErrorCode.MISSING_AUTH_DOMAIN */);
    _assert(auth.config.apiKey, auth, "invalid-api-key" /* AuthErrorCode.INVALID_API_KEY */);
    const params = {
        apiKey: auth.config.apiKey,
        appName: auth.name,
        authType,
        redirectUrl,
        v: SDK_VERSION,
        eventId
    };
    if (provider instanceof FederatedAuthProvider) {
        provider.setDefaultLanguage(auth.languageCode);
        params.providerId = provider.providerId || '';
        if (!isEmpty(provider.getCustomParameters())) {
            params.customParameters = JSON.stringify(provider.getCustomParameters());
        }
        // TODO set additionalParams from the provider as well?
        for (const [key, value] of Object.entries(additionalParams || {})) {
            params[key] = value;
        }
    }
    if (provider instanceof BaseOAuthProvider) {
        const scopes = provider.getScopes().filter(scope => scope !== '');
        if (scopes.length > 0) {
            params.scopes = scopes.join(',');
        }
    }
    if (auth.tenantId) {
        params.tid = auth.tenantId;
    }
    // TODO: maybe set eid as endipointId
    // TODO: maybe set fw as Frameworks.join(",")
    const paramsDict = params;
    for (const key of Object.keys(paramsDict)) {
        if (paramsDict[key] === undefined) {
            delete paramsDict[key];
        }
    }
    // Sets the App Check token to pass to the widget
    const appCheckToken = await auth._getAppCheckToken();
    const appCheckTokenFragment = appCheckToken
        ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}`
        : '';
    // Start at index 1 to skip the leading '&' in the query string
    return `${getHandlerBase(auth)}?${querystring(paramsDict).slice(1)}${appCheckTokenFragment}`;
}
function getHandlerBase({ config }) {
    if (!config.emulator) {
        return `https://${config.authDomain}/${WIDGET_PATH}`;
    }
    return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The special web storage event
 *
 */
const WEB_STORAGE_SUPPORT_KEY = 'webStorageSupport';
class BrowserPopupRedirectResolver {
    constructor() {
        this.eventManagers = {};
        this.iframes = {};
        this.originValidationPromises = {};
        this._redirectPersistence = browserSessionPersistence;
        this._completeRedirectFn = _getRedirectResult;
        this._overrideRedirectResult = _overrideRedirectResult;
    }
    // Wrapping in async even though we don't await anywhere in order
    // to make sure errors are raised as promise rejections
    async _openPopup(auth, provider, authType, eventId) {
        var _a;
        debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, '_initialize() not called before _openPopup()');
        const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
        return _open(auth, url, _generateEventId());
    }
    async _openRedirect(auth, provider, authType, eventId) {
        await this._originValidation(auth);
        const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
        _setWindowLocation(url);
        return new Promise(() => { });
    }
    _initialize(auth) {
        const key = auth._key();
        if (this.eventManagers[key]) {
            const { manager, promise } = this.eventManagers[key];
            if (manager) {
                return Promise.resolve(manager);
            }
            else {
                debugAssert(promise, 'If manager is not set, promise should be');
                return promise;
            }
        }
        const promise = this.initAndGetManager(auth);
        this.eventManagers[key] = { promise };
        // If the promise is rejected, the key should be removed so that the
        // operation can be retried later.
        promise.catch(() => {
            delete this.eventManagers[key];
        });
        return promise;
    }
    async initAndGetManager(auth) {
        const iframe = await _openIframe(auth);
        const manager = new AuthEventManager(auth);
        iframe.register('authEvent', (iframeEvent) => {
            _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event" /* AuthErrorCode.INVALID_AUTH_EVENT */);
            // TODO: Consider splitting redirect and popup events earlier on
            const handled = manager.onEvent(iframeEvent.authEvent);
            return { status: handled ? "ACK" /* GapiOutcome.ACK */ : "ERROR" /* GapiOutcome.ERROR */ };
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
        this.eventManagers[auth._key()] = { manager };
        this.iframes[auth._key()] = iframe;
        return manager;
    }
    _isIframeWebStorageSupported(auth, cb) {
        const iframe = this.iframes[auth._key()];
        iframe.send(WEB_STORAGE_SUPPORT_KEY, { type: WEB_STORAGE_SUPPORT_KEY }, result => {
            var _a;
            const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
            if (isSupported !== undefined) {
                cb(!!isSupported);
            }
            _fail(auth, "internal-error" /* AuthErrorCode.INTERNAL_ERROR */);
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    }
    _originValidation(auth) {
        const key = auth._key();
        if (!this.originValidationPromises[key]) {
            this.originValidationPromises[key] = _validateOrigin(auth);
        }
        return this.originValidationPromises[key];
    }
    get _shouldInitProactively() {
        // Mobile browsers and Safari need to optimistically initialize
        return _isMobileBrowser() || _isSafari() || _isIOS();
    }
}
/**
 * An implementation of {@link PopupRedirectResolver} suitable for browser
 * based applications.
 *
 * @public
 */
const browserPopupRedirectResolver = BrowserPopupRedirectResolver;

var name = "@firebase/auth";
var version = "0.23.2";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AuthInterop {
    constructor(auth) {
        this.auth = auth;
        this.internalListeners = new Map();
    }
    getUid() {
        var _a;
        this.assertAuthConfigured();
        return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
    }
    async getToken(forceRefresh) {
        this.assertAuthConfigured();
        await this.auth._initializationPromise;
        if (!this.auth.currentUser) {
            return null;
        }
        const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
        return { accessToken };
    }
    addAuthTokenListener(listener) {
        this.assertAuthConfigured();
        if (this.internalListeners.has(listener)) {
            return;
        }
        const unsubscribe = this.auth.onIdTokenChanged(user => {
            listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
        });
        this.internalListeners.set(listener, unsubscribe);
        this.updateProactiveRefresh();
    }
    removeAuthTokenListener(listener) {
        this.assertAuthConfigured();
        const unsubscribe = this.internalListeners.get(listener);
        if (!unsubscribe) {
            return;
        }
        this.internalListeners.delete(listener);
        unsubscribe();
        this.updateProactiveRefresh();
    }
    assertAuthConfigured() {
        _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth" /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */);
    }
    updateProactiveRefresh() {
        if (this.internalListeners.size > 0) {
            this.auth._startProactiveRefresh();
        }
        else {
            this.auth._stopProactiveRefresh();
        }
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getVersionForPlatform(clientPlatform) {
    switch (clientPlatform) {
        case "Node" /* ClientPlatform.NODE */:
            return 'node';
        case "ReactNative" /* ClientPlatform.REACT_NATIVE */:
            return 'rn';
        case "Worker" /* ClientPlatform.WORKER */:
            return 'webworker';
        case "Cordova" /* ClientPlatform.CORDOVA */:
            return 'cordova';
        default:
            return undefined;
    }
}
/** @internal */
function registerAuth(clientPlatform) {
    _registerComponent(new Component$1("auth" /* _ComponentName.AUTH */, (container, { options: deps }) => {
        const app = container.getProvider('app').getImmediate();
        const heartbeatServiceProvider = container.getProvider('heartbeat');
        const appCheckServiceProvider = container.getProvider('app-check-internal');
        const { apiKey, authDomain } = app.options;
        _assert(apiKey && !apiKey.includes(':'), "invalid-api-key" /* AuthErrorCode.INVALID_API_KEY */, { appName: app.name });
        const config = {
            apiKey,
            authDomain,
            clientPlatform,
            apiHost: "identitytoolkit.googleapis.com" /* DefaultConfig.API_HOST */,
            tokenApiHost: "securetoken.googleapis.com" /* DefaultConfig.TOKEN_API_HOST */,
            apiScheme: "https" /* DefaultConfig.API_SCHEME */,
            sdkClientVersion: _getClientVersion(clientPlatform)
        };
        const authInstance = new AuthImpl(app, heartbeatServiceProvider, appCheckServiceProvider, config);
        _initializeAuthInstance(authInstance, deps);
        return authInstance;
    }, "PUBLIC" /* ComponentType.PUBLIC */)
        /**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */
        .setInstantiationMode("EXPLICIT" /* InstantiationMode.EXPLICIT */)
        /**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */
        .setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
        const authInternalProvider = container.getProvider("auth-internal" /* _ComponentName.AUTH_INTERNAL */);
        authInternalProvider.initialize();
    }));
    _registerComponent(new Component$1("auth-internal" /* _ComponentName.AUTH_INTERNAL */, container => {
        const auth = _castAuth(container.getProvider("auth" /* _ComponentName.AUTH */).getImmediate());
        return (auth => new AuthInterop(auth))(auth);
    }, "PRIVATE" /* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT" /* InstantiationMode.EXPLICIT */));
    registerVersion(name, version, getVersionForPlatform(clientPlatform));
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name, version, 'esm2017');
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
const authIdTokenMaxAge = getExperimentalSetting('authIdTokenMaxAge') || DEFAULT_ID_TOKEN_MAX_AGE;
let lastPostedIdToken = null;
const mintCookieFactory = (url) => async (user) => {
    const idTokenResult = user && (await user.getIdTokenResult());
    const idTokenAge = idTokenResult &&
        (new Date().getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1000;
    if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
        return;
    }
    // Specifically trip null => undefined when logged out, to delete any existing cookie
    const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
    if (lastPostedIdToken === idToken) {
        return;
    }
    lastPostedIdToken = idToken;
    await fetch(url, {
        method: idToken ? 'POST' : 'DELETE',
        headers: idToken
            ? {
                'Authorization': `Bearer ${idToken}`
            }
            : {}
    });
};
/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */
function getAuth(app = getApp()) {
    const provider = _getProvider(app, 'auth');
    if (provider.isInitialized()) {
        return provider.getImmediate();
    }
    const auth = initializeAuth(app, {
        popupRedirectResolver: browserPopupRedirectResolver,
        persistence: [
            indexedDBLocalPersistence,
            browserLocalPersistence,
            browserSessionPersistence
        ]
    });
    const authTokenSyncUrl = getExperimentalSetting('authTokenSyncURL');
    if (authTokenSyncUrl) {
        const mintCookie = mintCookieFactory(authTokenSyncUrl);
        beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
        onIdTokenChanged(auth, user => mintCookie(user));
    }
    const authEmulatorHost = getDefaultEmulatorHost('auth');
    if (authEmulatorHost) {
        connectAuthEmulator(auth, `http://${authEmulatorHost}`);
    }
    return auth;
}
registerAuth("Browser" /* ClientPlatform.BROWSER */);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var defaultState = function (defaultValue) {
    return {
        loading: defaultValue === undefined || defaultValue === null,
        value: defaultValue,
    };
};
var reducer = function () { return function (state, action) {
    switch (action.type) {
        case 'error':
            return __assign(__assign({}, state), { error: action.error, loading: false, value: undefined });
        case 'reset':
            return defaultState(action.defaultValue);
        case 'value':
            return __assign(__assign({}, state), { error: undefined, loading: false, value: action.value });
        default:
            return state;
    }
}; };
var useLoadingValue = (function (getDefaultValue) {
    var defaultValue = getDefaultValue ? getDefaultValue() : undefined;
    var _a = react_30(reducer(), defaultState(defaultValue)), state = _a[0], dispatch = _a[1];
    var reset = react_20(function () {
        var defaultValue = getDefaultValue ? getDefaultValue() : undefined;
        dispatch({ type: 'reset', defaultValue: defaultValue });
    }, [getDefaultValue]);
    var setError = react_20(function (error) {
        dispatch({ type: 'error', error: error });
    }, []);
    var setValue = react_20(function (value) {
        dispatch({ type: 'value', value: value });
    }, []);
    return react_29(function () { return ({
        error: state.error,
        loading: state.loading,
        reset: reset,
        setError: setError,
        setValue: setValue,
        value: state.value,
    }); }, [state.error, state.loading, reset, setError, setValue, state.value]);
});

var useAuthState = (function (auth, options) {
    var _a = useLoadingValue(function () { return auth.currentUser; }), error = _a.error, loading = _a.loading, setError = _a.setError, setValue = _a.setValue, value = _a.value;
    react_24(function () {
        var listener = onAuthStateChanged(auth, function (user) { return __awaiter(void 0, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(options === null || options === void 0 ? void 0 : options.onUserChanged)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, options.onUserChanged(user)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        setError(e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        setValue(user);
                        return [2 /*return*/];
                }
            });
        }); }, setError);
        return function () {
            listener();
        };
    }, [auth]);
    return [value, loading, error];
});

function LoginButton(_a) {
    var isAuthenticated = _a.isAuthenticated, userName = _a.userName;
    if (isAuthenticated) {
        return (react_11("p", null, userName));
    }
    return react_11("button", { className: ' bg-MCS-BlueBlack text-white rounded-md h-8 w-24' }, "Log In");
}

var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgAccountIcon = function SvgAccountIcon(props) {
  return /*#__PURE__*/react_11("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 48,
    height: 48,
    viewBox: "0 96 960 960"
  }, props), _path || (_path = /*#__PURE__*/react_11("path", {
    d: "M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"
  })));
};

var LogoutButton = function () {
    return (react_11("button", { className: ' bg-MCS-BlueBlack text-white rounded-md m-2 h-10 w-24' }, "Log Out"));
};

function ProfilePopover(_a) {
    var isAuthenticated = _a.isAuthenticated, userPicture = _a.userPicture;
    if (!isAuthenticated) {
        return react_11(SvgAccountIcon, { className: 'h-10 w-auto ml-2', fill: '#2bc0d3' });
    }
    return (react_11(Lt, null,
        react_11(Lt.Button, { className: 'ml-2 mr-1 h-max p-1 rounded-full outline-0 hover:bg-white hover:bg-opacity-20 active:bg-opacity-25 duration-300' },
            userPicture === undefined && react_11(SvgAccountIcon, { className: 'h-10 w-auto', fill: '#2bc0d3' }),
            userPicture !== undefined && react_11("img", { src: userPicture, className: 'h-10 w-auto rounded-full ' })),
        react_11(tt, { enter: "transition fade-in duration-75", enterFrom: "opacity-50", enterTo: "opacity-100" },
            react_11(Lt.Panel, null,
                react_11("div", { className: 'h-20 w-40 bg-MCS-DarkerBlue flex justify-center\r\n          items-end rounded-xl absolute top-16 right-8 shadow-md' },
                    react_11(LogoutButton, null))))));
}

function useProfilePicture(accessToken) {
    var _a = react_32(undefined), userPictureURL = _a[0], setUserPictureURL = _a[1];
    var _b = react_32(true), isLoading = _b[0], setIsLoading = _b[1];
    react_24(function () {
        fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
            headers: {
                Authorization: "Bearer ".concat(accessToken),
                'Content-Type': 'image/jpg'
            }
        })
            .then(function (response) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, response.blob()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        })
            .then(function (blob) {
            var imageObjectURL = URL.createObjectURL(blob);
            setUserPictureURL(imageObjectURL);
            setIsLoading(false);
        })
            .catch(function () { return console.log('error injecting photo'); });
    }, [accessToken]);
    return [userPictureURL, isLoading];
}

function UserInfo() {
    var auth = getAuth();
    var _a = useAuthState(auth), user = _a[0], loadingAuthState = _a[1], error = _a[2];
    var accessToken = localStorage.getItem('accessToken') || '';
    var _b = useProfilePicture(accessToken), userPictureURL = _b[0], loadingProfilePicture = _b[1];
    if (loadingAuthState || loadingProfilePicture) {
        return react_11("p", null, "Loading...");
    }
    if (error) {
        console.log('Error from useAuthState: ', error);
        return react_11("p", null, "Could not load user info");
    }
    var isAuthenticated = user !== null && user !== undefined;
    return (react_11(react_3, null,
        react_11(LoginButton, { isAuthenticated: isAuthenticated, userName: user === null || user === void 0 ? void 0 : user.displayName }),
        react_11(ProfilePopover, { isAuthenticated: isAuthenticated, userPicture: userPictureURL })));
}

var firebaseConfig = {
    apiKey: "AIzaSyBlfZjJyhjcgyPfxaqkZHSR5SciFBWC5IY",
    authDomain: "mcsynergy-55878.firebaseapp.com",
    projectId: "mcsynergy-55878",
    storageBucket: "mcsynergy-55878.appspot.com",
    messagingSenderId: "822930182678",
    appId: "1:822930182678:web:23e8f0b3e044ae06cb9b37",
    measurementId: "G-3BK4KLMGTJ"
};
initializeApp(firebaseConfig);
function Navbar(_a) {
    var logoSrc = _a.logoSrc;
    return (react_11("div", { className: 'bg-MCS-DarkerBlue h-14 flex items-center justify-between' },
        react_11("div", { className: 'flex items-center w-80 h-full' },
            react_11(Portal, null),
            react_11("a", { href: '/', className: 'h-max ml-1' },
                react_11("img", { src: logoSrc.toString(), alt: 'Logo', className: 'h-7' }))),
        react_11("div", { className: 'flex items-center w-80 justify-end h-full' },
            react_11(UserInfo, null))));
}

export { Navbar as default };
//# sourceMappingURL=index.es.js.map
