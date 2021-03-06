/**
 * Created by wizdev on 3/20/2016.
 */
/*
 * Kendo UI v2011.3.1129 (http://kendoui.com)
 * Copyright 2011 Telerik AD. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at http://kendoui.com/license.
 * If you do not own a commercial license, this file shall be governed by the
 * GNU General Public License (GPL) version 3. For GPL requirements, please
 * review: http://www.gnu.org/copyleft/gpl.html
 */

    (function(a, b) {
    function K(a) {
        return ("" + a).replace(H, "&amp;").replace(I, "&lt;").replace(J, "&gt;")
    }

    function G(a, b, c, d) {
        b && (b = b.split(" "), e(b, function(b, c) {
            a.toggleClass(c, d)
        }));
        return a
    }

    function F(a, b, c, d, e, f) {
        return C.transitionPromise(a, b, D(c, d, e, f))
    }

    function E(b, c, d, e, f) {
        b.each(function(b, g) {
            g = a(g), g.queue(function() {
                C.promise(g, D(c, d, e, f))
            })
        });
        return b
    }

    function D(a, b, c, e) {
        typeof a === o && (h(b) && (e = b, b = 400, c = !1), h(c) && (e = c, c = !1), typeof b === s && (c = b, b = 400), a = {
            effects: a,
            duration: b,
            reverse: c,
            complete: e
        });
        return d({
            effects: {},
            duration: 400,
            reverse: !1,
            init: g,
            teardown: g,
            hide: !1,
            show: !1
        }, a, {
            completeCallback: a.complete,
            complete: g
        })
    }

    function B(a) {
        var b = {};
        e(typeof a == "string" ? a.split(" ") : a, function(a) {
            b[a] = this
        });
        return b
    }

    function z(a, b) {
        b || (b = "offset");
        var c = a[b](),
            d = l.mobileOS;
        if (l.touch && d.ios && d.flatVersion < 410) {
            var e = b == "offset" ? c : a.offset(),
                f = c.left == e.left && c.top == e.top;
            if (f) return {
                top: c.top - window.scrollY,
                left: c.left - window.scrollX
            }
        }
        return c
    }

    function y(a) {
        var b = 0,
            c;
        for (c in a) a.hasOwnProperty(c) && b++;
        return b
    }

    function x(b) {
        var d = a.browser;
        if (!b.parent().hasClass("k-animation-container")) {
            var e = b.css(c.support.transitions.css + "box-shadow") || b.css("box-shadow"),
                f = e ? e.match(m) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0],
                g = i.max(+f[3], +(f[4] || 0)),
                h = +f[1] + g,
                j = +f[2] + g;
            d.opera && (h = j = 5), b.wrap(a("<div/>").addClass("k-animation-container").css({
                width: b.outerWidth(),
                height: b.outerHeight(),
                paddingRight: h,
                paddingBottom: j
            }))
        } else {
            var k = b.parent(".k-animation-container");
            k.is(":hidden") && k.show(), k.css({
                width: b.outerWidth(),
                height: b.outerHeight()
            })
        }
        d.msie && i.floor(d.version) <= 7 && b.css({
            zoom: 1
        });
        return b.parent()
    }

    function w(a, b) {
        return b ? "'" + a.split("'").join("\\'").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'" : a.charAt(0) === "=" ? "+(" + a.substring(1) + ")+" : ";" + a + ";o+="
    }

    function u() {}
    var c = window.kendo = window.kendo || {},
        d = a.extend,
        e = a.each,
        f = a.proxy,
        g = a.noop,
        h = a.isFunction,
        i = Math,
        j, k = k || {},
        l = {},
        m = /(\d+?)px\s*(\d+?)px\s*(\d+?)px\s*(\d+?)?/i,
        n = "function",
        o = "string",
        p = "number",
        q = "object",
        r = "null",
        s = "boolean",
        t = window.Globalize;
    u.extend = function(a) {
        var b = function() {},
            c, e = this,
            f = a && a.init ? a.init : function() {
                e.apply(this, arguments)
            },
            g;
        b.prototype = e.prototype, g = f.fn = f.prototype = d(new b, a);
        for (c in g) typeof g[c] === q && (g[c] = d(!0, {}, b.prototype[c], a[c]));
        g.constructor = f, f.extend = e.extend;
        return f
    };
    var v = u.extend({
        init: function() {
            this._events = {}
        },
        bind: function(b, c, d) {
            var e = this,
                f, g = a.isArray(b) ? b : [b],
                i, j, k, l;
            for (f = 0, i = g.length; f < i; f++) b = g[f], j = h(c) ? c : c[b], j && (d && (k = j, j = function() {
                e.unbind(b, j), k.call(e, arguments)
            }), l = e._events[b] || [], l.push(j), e._events[b] = l);
            return e
        },
        one: function(a, b) {
            return this.bind(a, b, !0)
        },
        trigger: function(a, b) {
            var c = this,
                e = c._events[a],
                f = !1,
                g = d(b, {
                    preventDefault: function() {
                        f = !0
                    },
                    isDefaultPrevented: function() {
                        return f
                    }
                }),
                h, i;
            if (e)
                for (h = 0, i = e.length; h < i; h++) e[h].call(c, g);
            return f
        },
        unbind: function(a, b) {
            var c = this,
                d = c._events[a],
                e, f;
            if (d)
                if (b)
                    for (e = 0, f = d.length; e < f; e++) d[e] === b && d.splice(e, 1);
                else c._events[a] = [];
            return c
        }
    });
    j = {
        paramName: "data",
        useWithBlock: !0,
        render: function(a, b) {
            var c, d, e = "";
            for (c = 0, d = b.length; c < d; c++) e += a(b[c]);
            return e
        },
        compile: function(b, e) {
            var f = d({}, this, e),
                g = f.paramName,
                i = f.useWithBlock,
                j = "var o,e=kendo.htmlEncode;",
                k = /\${([^}]*)}/g,
                l, m, n;
            if (h(b)) {
                if (b.length === 2) return function(c) {
                    return b(a, {
                        data: c
                    }).join("")
                };
                return b
            }
            j += i ? "with(" + g + "){" : "", j += "o=", l = b.replace(/\\}/g, "__CURLY__").replace(k, "#=e($1)#").replace(/__CURLY__/g, "}").replace(/\\#/g, "__SHARP__").split("#");
            for (n = 0; n < l.length; n++) j += w(l[n], n % 2 === 0);
            j += i ? ";}" : ";", j += "return o;", j = j.replace(/__SHARP__/g, "#");
            try {
                return new Function(g, j)
            } catch (o) {
                throw new Error(c.format("Invalid template:'{0}' Generated code:'{1}'", b, j))
            }
        }
    },
        function() {
            function l(a, b) {
                var e, g, k, m, t = c,
                    u, v = b[a],
                    w;
                v && typeof v === q && typeof v.toJSON === n && (v = v.toJSON(a)), typeof f === n && (v = f.call(b, a, v)), w = typeof v;
                if (w === o) return j(v);
                if (w === p) return isFinite(v) ? String(v) : r;
                if (w === s || w === r) return String(v);
                if (w === q) {
                    if (!v) return r;
                    c += d, u = [];
                    if (h.apply(v) === "[object Array]") {
                        m = v.length;
                        for (e = 0; e < m; e++) u[e] = l(e, v) || r;
                        k = u.length === 0 ? "[]" : c ? "[\n" + c + u.join(",\n" + c) + "\n" + t + "]" : "[" + u.join(",") + "]", c = t;
                        return k
                    }
                    if (f && typeof f === q) {
                        m = f.length;
                        for (e = 0; e < m; e++) typeof f[e] === o && (g = f[e], k = l(g, v), k && u.push(j(g) + (c ? ": " : ":") + k))
                    } else
                        for (g in v) i.call(v, g) && (k = l(g, v), k && u.push(j(g) + (c ? ": " : ":") + k));
                    k = u.length === 0 ? "{}" : c ? "{\n" + c + u.join(",\n" + c) + "\n" + t + "}" : "{" + u.join(",") + "}", c = t;
                    return k
                }
            }

            function j(a) {
                b.lastIndex = 0;
                return b.test(a) ? '"' + a.replace(b, function(a) {
                    var b = e[a];
                    return typeof b === o ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }
            var a = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                c, d, e = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                f, g, h = {}.toString,
                i = {}.hasOwnProperty;
            typeof Date.prototype.toJSON !== n && (Date.prototype.toJSON = function(a) {
                var b = this;
                return isFinite(b.valueOf()) ? b.getUTCFullYear() + "-" + pad(b.getUTCMonth() + 1) + "-" + pad(b.getUTCDate()) + "T" + pad(b.getUTCHours()) + ":" + pad(b.getUTCMinutes()) + ":" + pad(b.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
                return this.valueOf()
            }), typeof k.stringify !== n && (k.stringify = function(a, b, e) {
                var g;
                c = "", d = "";
                if (typeof e === p)
                    for (g = 0; g < e; g += 1) d += " ";
                else typeof e === o && (d = e);
                f = b;
                if (b && typeof b !== n && (typeof b !== q || typeof b.length !== p)) throw new Error("JSON.stringify");
                return l("", {
                    "": a
                })
            })
        }(),
        function() {
            function r(a, c) {
                if (c) {
                    if (a instanceof Date) return o(a, c);
                    if (typeof a === p) return q(a, c)
                }
                return a !== b ? a : ""
            }

            function q(a, d) {
                var f = c.cultures.current,
                    i = f.numberFormat,
                    m = i.groupSize[0],
                    n = i[j],
                    o = i[h],
                    p = i.decimals,
                    q = i.pattern[0],
                    r, s, t, u, v, w = a < 0,
                    x, y, z, A, B = g,
                    C = g,
                    D, E, F, G, H, I, J = -1,
                    K;
                if (a === b) return g;
                if (!isFinite(a)) return a;
                if (!d) return f.name.length ? a.toLocaleString() : a.toString();
                v = e.exec(d);
                if (v) {
                    d = v[1].toLowerCase(), s = d === "c", t = d === "p";
                    if (s || t) i = s ? i.currency : i.percent, m = i.groupSize[0], n = i[j], o = i[h], p = i.decimals, r = i.symbol, q = i.pattern[w ? 0 : 1];
                    u = v[2], u && (p = +u);
                    if (d === "e") return u ? a.toExponential(p) : a.toExponential();
                    t && (a *= 100), a = a.toFixed(p), a = a.split(h), x = a[0], y = a[1], w && (x = x.substring(1)), C = x, z = x.length;
                    if (z >= m) {
                        C = g;
                        for (D = 0; D < z; D++) D > 0 && (z - D) % m === 0 && (C += n), C += x.charAt(D)
                    }
                    y && (C += o + y);
                    if (d === "n" && !w) return C;
                    a = g;
                    for (D = 0, E = q.length; D < E; D++) F = q.charAt(D), F === "n" ? a += C : F === "$" || F === "%" ? a += r : a += F;
                    return a
                }
                d = d.split(";");
                if (w && d[1]) a = -a, d = d[1];
                else if (a === 0) {
                    d = d[2] || d[0];
                    if (d.indexOf(k) == -1 && d.indexOf(l) == -1) return d
                } else d = d[0];
                s = d.indexOf("$") != -1, t = d.indexOf("%") != -1, t && (a *= 100);
                if (s || t) i = s ? i.currency : i.percent, m = i.groupSize[0], n = i[j], o = i[h], p = i.decimals, r = i.symbol;
                G = d.indexOf(h), E = d.length, G != -1 ? (H = d.lastIndexOf(k), I = d.lastIndexOf(l), I != -1 && (C = a.toFixed(I - G), a = a.toString(), a = a.length > C.length && H > I ? a : C)) : a = a.toFixed(0), H = d.indexOf(k), I = d.indexOf(l), H == -1 && I != -1 ? J = I : H != -1 && I == -1 ? J = H : J = H > I ? I : H, H = d.lastIndexOf(k), I = d.lastIndexOf(l), H == -1 && I != -1 ? K = I : H != -1 && I == -1 ? K = H : K = H > I ? H : I, J == E && (K = J);
                if (J != -1) {
                    C = a.toString().split(h), x = C[0], y = C[1] || g, z = x.length, A = y.length;
                    if (z >= m && d.indexOf(j) != -1) {
                        C = g;
                        for (D = 0; D < z; D++) D > 0 && (z - D) % m === 0 && (C += n), C += x.charAt(D);
                        x = C
                    }
                    a = d.substring(0, J);
                    for (D = J; D < E; D++) {
                        F = d.charAt(D);
                        if (G == -1) {
                            if (K - D < z) {
                                a += x;
                                break
                            }
                        } else {
                            I != -1 && I < D && (B = g), G - D <= z && G - D > -1 && (a += x, D = G);
                            if (G === D) {
                                a += (y ? o : g) + y, D += K - G + 1;
                                continue
                            }
                        }
                        if (F === l) a += F, B = F;
                        else if (F === k) a += B;
                        else if (F === j) continue
                    }
                    K >= J && (a += d.substring(K + 1));
                    if (s || t) {
                        C = g;
                        for (D = 0, E = a.length; D < E; D++) F = a.charAt(D), C += F === "$" || F === "%" ? r : F;
                        a = C
                    }
                }
                return a
            }

            function o(a, e) {
                var f = c.cultures.current.calendar,
                    g = f.days,
                    h = f.months;
                e = f.patterns[e] || e;
                return e.replace(d, function(c) {
                    var d;
                    c === "d" ? d = a.getDate() : c === "dd" ? d = n(a.getDate()) : c === "ddd" ? d = g.namesAbbr[a.getDay()] : c === "dddd" ? d = g.names[a.getDay()] : c === "M" ? d = a.getMonth() + 1 : c === "MM" ? d = n(a.getMonth() + 1) : c === "MMM" ? d = h.namesAbbr[a.getMonth()] : c === "MMMM" ? d = h.names[a.getMonth()] : c === "yy" ? d = n(a.getFullYear() % 100) : c === "yyyy" ? d = a.getFullYear() : c === "h" ? d = a.getHours() % 12 || 12 : c === "hh" ? d = n(a.getHours() % 12 || 12) : c === "H" ? d = a.getHours() : c === "HH" ? d = n(a.getHours()) : c === "m" ? d = a.getMinutes() : c === "mm" ? d = n(a.getMinutes()) : c === "s" ? d = a.getSeconds() : c === "ss" ? d = n(a.getSeconds()) : c === "f" ? d = i.floor(a.getMilliseconds() / 100) : c === "ff" ? d = i.floor(a.getMilliseconds() / 10) : c === "fff" ? d = a.getMilliseconds() : c === "tt" && (d = a.getHours() < 12 ? f.AM[0] : f.PM[0]);
                    return d !== b ? d : c.slice(1, c.length - 1)
                })
            }

            function n(a) {
                return a < 10 ? "0" + a : a
            }
            var a = /{(\d+)(:[^\}]+)?}/g,
                d = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|"[^"]*"|'[^']*'/g,
                e = /^(n|c|p|e)(\d*)$/i,
                g = "",
                h = ".",
                j = ",",
                k = "#",
                l = "0",
                m = "en-US";
            c.cultures = {
                "en-US": {
                    name: m,
                    numberFormat: {
                        pattern: ["-n"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        percent: {
                            pattern: ["-n %", "n %"],
                            decimals: 2,
                            ",": ",",
                            ".": ".",
                            groupSize: [3],
                            symbol: "%"
                        },
                        currency: {
                            pattern: ["($n)", "$n"],
                            decimals: 2,
                            ",": ",",
                            ".": ".",
                            groupSize: [3],
                            symbol: "$"
                        }
                    },
                    calendars: {
                        standard: {
                            days: {
                                names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                            },
                            months: {
                                names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                            },
                            AM: ["AM", "am", "AM"],
                            PM: ["PM", "pm", "PM"],
                            patterns: {
                                d: "M/d/yyyy",
                                D: "dddd, MMMM dd, yyyy",
                                F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                                g: "M/d/yyyy h:mm tt",
                                G: "M/d/yyyy h:mm:ss tt",
                                m: "MMMM dd",
                                M: "MMMM dd",
                                s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
                                t: "h:mm tt",
                                T: "h:mm:ss tt",
                                u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                                y: "MMMM, yyyy",
                                Y: "MMMM, yyyy"
                            },
                            "/": "/",
                            ":": ":",
                            firstDay: 0
                        }
                    }
                }
            }, c.culture = function(a) {
                if (a === b) return c.cultures.current;
                var d = c.cultures,
                    e = d[a] || d[m];
                e.calendar = e.calendars.standard, d.current = e
            }, c.culture(m), t && (r = f(t.format, t)), c.format = function(b) {
                var c = arguments;
                return b.replace(a, function(a, b, d) {
                    var e = c[parseInt(b) + 1];
                    return r(e, d ? d.substring(1) : "")
                })
            }, c.toString = r
        }(),
        function() {
            function g(a, b, c) {
                if (!a) return null;
                var d = function(a) {
                        var c = 0;
                        while (b[q] === a) c++, q++;
                        c > 0 && (q -= 1);
                        return c
                    },
                    f = function(b) {
                        var c = new RegExp("^\\d{1," + b + "}"),
                            d = a.substr(r, b).match(c);
                        if (d) {
                            d = d[0], r += d.length;
                            return parseInt(d, 10)
                        }
                        return null
                    },
                    g = function(b) {
                        var c = 0,
                            d = b.length,
                            e, f;
                        for (; c < d; c++) {
                            e = b[c], f = e.length;
                            if (a.substr(r, f) == e) {
                                r += f;
                                return c + 1
                            }
                        }
                        return null
                    },
                    h = function() {
                        a.charAt(r) == b[q] && r++
                    },
                    i = c.calendar,
                    j = null,
                    k = null,
                    l = null,
                    m = null,
                    n = null,
                    o = null,
                    p = null,
                    q = 0,
                    r = 0,
                    s = !1,
                    t = new Date,
                    u = t.getFullYear(),
                    v = 30,
                    w, x, y, z, A, B, C;
                b || (b = "d"), C = i.patterns[b], C && (b = C), b = b.split(""), B = b.length;
                for (; q < B; q++) {
                    w = b[q];
                    if (s) w === "'" ? s = !1 : h();
                    else if (w === "d") {
                        x = d("d"), l = x < 3 ? f(2) : g(i.days[x == 3 ? "namesAbbr" : "names"]);
                        if (l === null || e(l, 1, 31)) return null
                    } else if (w === "M") {
                        x = d("M"), k = x < 3 ? f(2) : g(i.months[x == 3 ? "namesAbbr" : "names"]);
                        if (k === null || e(k, 1, 12)) return null;
                        k -= 1
                    } else if (w === "y") x = d("y"), j = f(x < 3 ? 2 : 4), j === null && (j = u), j < v && (j = u - u % 100 + j);
                    else if (w === "h") {
                        d("h"), m = f(2), m == 12 && (m = 0);
                        if (m === null || e(m, 0, 11)) return null
                    } else if (w === "H") {
                        d("H"), m = f(2);
                        if (m === null || e(m, 0, 23)) return null
                    } else if (w === "m") {
                        d("m"), n = f(2);
                        if (n === null || e(n, 0, 59)) return null
                    } else if (w === "s") {
                        d("s"), o = f(2);
                        if (o === null || e(o, 0, 59)) return null
                    } else if (w === "f") {
                        x = d("f"), p = f(x);
                        if (p === null || e(p, 0, 999)) return null
                    } else w === "t" ? (x = d("t"), A = g(i.PM)) : w === "'" ? (h(), s = !0) : h()
                }
                A && m < 12 && (m += 12), l === null && (l = 1);
                return new Date(j, k, l, m, n, o, p)
            }

            function e(a, b, c) {
                return !(a >= b && a <= c)
            }
            var b = /\u00A0/g,
                d = ["G", "g", "d", "F", "D", "y", "m", "T", "t"];
            c.parseDate = function(b, e, f) {
                if (b instanceof Date) return b;
                var h = 0,
                    i = null,
                    j, k, l;
                f ? typeof f === o && (c.culture(f), f = c.culture()) : f = c.culture();
                if (!e) {
                    e = [], l = f.calendar.patterns, j = d.length;
                    for (; h < j; h++) e[h] = l[d[h]];
                    e[h] = "ddd MMM dd yyyy HH:mm:ss", h = 0
                }
                e = a.isArray(e) ? e : [e], j = e.length;
                for (; h < j; h++) {
                    i = g(b, e[h], f);
                    if (i) return i
                }
                return i
            }, c.parseInt = function(a, b) {
                var d = c.parseFloat(a, b);
                d && (d = d | 0);
                return d
            }, c.parseFloat = function(a, d) {
                if (!a && a !== 0) return null;
                if (typeof a === p) return a;
                a = a.toString(), d = c.cultures[d] || c.cultures.current;
                var e = d.numberFormat,
                    f = e.percent,
                    g = e.currency,
                    h = g.symbol,
                    i = f.symbol,
                    j = a.indexOf("-") > -1,
                    k;
                a.indexOf(h) > -1 ? (e = g, k = e.pattern[0].replace("$", h).split("n"), a.indexOf(k[0]) > -1 && a.indexOf(k[1]) > -1 && (a = a.replace(k[0], "").replace(k[1], ""), j = !0)) : a.indexOf(i) > -1 && (e = f, h = i), a = a.replace("-", "").replace(h, "").split(e[","].replace(b, " ")).join("").replace(e["."], "."), a = parseFloat(a), isNaN(a) ? a = null : j && (a *= -1);
                return a
            }, t && (c.parseDate = f(t.parseDate, t), c.parseFloat = f(t.parseFloat, t))
        }(),
        function() {
            function f(a) {
                var b = !1,
                    c = [],
                    d = {
                        android: /(Android)\s+(\d+)\.(\d+(\.\d+)?)/,
                        iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
                        ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
                        meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
                        webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
                        blackberry: /(BlackBerry|PlayBook).*?Version\/(\d+)\.(\d+(\.\d+)?)/
                    };
                for (var e in d)
                    if (d.hasOwnProperty(e)) {
                        c = a.match(d[e]);
                        if (c) {
                            b = {}, b.device = e, b.name = /^i(phone|pad|pod)$/i.test(e) ? "ios" : e, b[b.name] = !0, b.majorVersion = c[2], b.minorVersion = c[3].replace("_", "."), b.flatVersion = b.majorVersion + b.minorVersion.replace(".", ""), b.flatVersion = b.flatVersion + Array(4 - b.flatVersion.length).join("0"), b.appMode = window.navigator.standalone || typeof window._nativeReady != "undefined";
                            break
                        }
                    }
                return b
            }
            l.scrollbar = function() {
                var a = document.createElement("div"),
                    b;
                a.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1", a.innerHTML = "&nbsp;", document.body.appendChild(a), b = a.offsetWidth - a.scrollWidth, document.body.removeChild(a);
                return b
            };
            var a = document.createElement("table");
            try {
                a.innerHTML = "<tr><td></td></tr>", l.tbodyInnerHtml = !0
            } catch (c) {
                l.tbodyInnerHtml = !1
            }
            l.touch = "ontouchstart" in window, l.pointers = navigator.msPointerEnabled;
            var d = l.transitions = !1;
            l.hasHW3D = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix, l.hasNativeScrolling = typeof document.documentElement.style.webkitOverflowScrolling == "string", e(["Moz", "webkit", "O", "ms"], function() {
                var b = this.toString();
                if (typeof a.style[b + "Transition"] === o) {
                    var c = b.toLowerCase();
                    d = {
                        css: "-" + c + "-",
                        prefix: b,
                        event: c === "o" || c === "webkit" ? c : ""
                    }, d.event = d.event ? d.event + "TransitionEnd" : "transitionend";
                    return !1
                }
            }), l.transitions = d, l.mobileOS = f(navigator.userAgent), l.zoomLevel = function() {
                return l.touch ? document.documentElement.clientWidth / window.innerWidth : 1
            }, l.devicePixelRatio = window.devicePixelRatio === b ? 1 : window.devicePixelRatio
        }();
    var A = {
            left: {
                reverse: "right"
            },
            right: {
                reverse: "left"
            },
            down: {
                reverse: "up"
            },
            up: {
                reverse: "down"
            },
            "in": {
                reverse: "out"
            },
            out: {
                reverse: "in"
            }
        },
        C = {
            promise: function(a, b) {
                b.show && a.css({
                    display: a.data("olddisplay") || "block"
                }).css("display"), b.hide && a.data("olddisplay", a.css("display")).hide(), b.completeCallback && b.completeCallback(a), a.dequeue()
            },
            transitionPromise: function(a, b, d) {
                var e = c.wrap(a);
                e.append(b), a.hide(), b.show(), d.completeCallback && d.completeCallback(a);
                return a
            }
        };
    d(a.fn, {
        kendoStop: function(a, b) {
            return this.stop(a, b)
        },
        kendoAnimate: function(a, b, c, d) {
            return E(this, a, b, c, d)
        },
        kendoAnimateTo: function(a, b, c, d, e) {
            return F(this, a, b, c, d, e)
        }
    }), d(a.fn, {
        kendoAddClass: function(a, b) {
            return G(this, a, b, !0)
        },
        kendoRemoveClass: function(a, b) {
            return G(this, a, b, !1)
        },
        kendoToggleClass: function(a, b, c) {
            return G(this, a, b, c)
        }
    });
    var H = /&/g,
        I = /</g,
        J = />/g,
        L = function(a) {
            return {
                idx: 0,
                x: a.pageX,
                y: a.pageY
            }
        },
        M = function(a) {
            return a.target
        };
    l.touch && (L = function(a, b) {
        var c = a.changedTouches || a.originalEvent.changedTouches;
        if (b) {
            var d = null;
            e(c, function(a, c) {
                b == c.identifier && (d = {
                    idx: c.identifier,
                    x: c.pageX,
                    y: c.pageY
                })
            });
            return d
        }
        return {
            idx: c[0].identifier,
            x: c[0].pageX,
            y: c[0].pageY
        }
    }, M = function(a) {
        var b = "originalEvent" in a ? a.originalEvent.changedTouches : "changedTouches" in a ? a.changedTouches : null;
        return b ? document.elementFromPoint(b[0].clientX, b[0].clientY) : null
    }, e(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function(b, c) {
        a.fn[c] = function(a) {
            return this.bind(c, a)
        }
    })), l.touch ? (l.mousedown = "touchstart", l.mouseup = "touchend", l.mousemove = "touchmove") : (l.mousemove = "mousemove", l.mousedown = "mousedown", l.mouseup = "mouseup");
    var N = function(a) {
            var b = "d",
                c, d, e, f, g = 1;
            for (d = 0, e = a.length; d < e; d++) f = a[d], f !== "" && (c = f.indexOf("["), c != 0 && (c == -1 ? f = "." + f : (g++, f = "." + f.substring(0, c) + " || {})" + f.substring(c))), g++, b += f + (d < e - 1 ? " || {})" : ")"));
            return Array(g).join("(") + b
        },
        O = /^([a-z]+:)?\/\//i;
    d(c, {
        ui: {
            progress: function(b, c) {
                var d = b.find(".k-loading-mask");
                c ? d.length || (d = a("<div class='k-loading-mask'><span class='k-loading-text'>Loading...</span><div class='k-loading-image'/><div class='k-loading-color'/></div>").width("100%").height("100%").prependTo(b)) : d && d.remove()
            }
        },
        fx: C,
        data: {},
        keys: {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            END: 35,
            HOME: 36,
            SPACEBAR: 32,
            PAGEUP: 33,
            PAGEDOWN: 34,
            F12: 123
        },
        support: l,
        animate: E,
        ns: "",
        attr: function(a) {
            return "data-" + c.ns + a
        },
        wrap: x,
        size: y,
        getOffset: z,
        parseEffects: B,
        toggleClass: G,
        directions: A,
        Observable: v,
        Class: u,
        Template: j,
        template: f(j.compile, j),
        render: f(j.render, j),
        stringify: f(k.stringify, k),
        touchLocation: L,
        eventTarget: M,
        htmlEncode: K,
        isLocalUrl: function(a) {
            return a && !O.test(a)
        },
        expr: function(a, b) {
            a = a || "", a && a.charAt(0) !== "[" && (a = "." + a), b ? a = N(a.split(".")) : a = "d" + a;
            return a
        },
        getter: function(a, b) {
            return new Function("d", "return " + c.expr(a, b))
        },
        setter: function(a) {
            return new Function("d,value", "d." + a + "=value")
        },
        accessor: function(a) {
            return {
                get: c.getter(a),
                set: c.setter(a)
            }
        },
        guid: function() {
            var a = "",
                b, c;
            for (b = 0; b < 32; b++) {
                c = i.random() * 16 | 0;
                if (b == 8 || b == 12 || b == 16 || b == 20) a += "-";
                a += (b == 12 ? 4 : b == 16 ? c & 3 | 8 : c).toString(16)
            }
            return a
        }
    });
    var P = v.extend({
        init: function(b, c) {
            var e = this;
            v.fn.init.call(e), e.element = a(b), e.options = d(!0, {}, e.options, c)
        }
    });
    d(c.ui, {
        Widget: P,
        plugin: function(b) {
            var d = b.fn.options.name;
            c.ui[d] = b, d = "kendo" + d, a.fn[d] = function(c) {
                a(this).each(function() {
                    var e = new b(this, c);
                    a(this).data(d, e)
                });
                return this
            }
        }
    })
})(jQuery),
    function(a, b) {
        function R(a, b) {
            if (j) {
                var c = a.css(I);
                if (c == "none") return b == "scale" ? 1 : 0;
                var d = c.match(new RegExp(b + "\\s*\\(([\\d\\w\\.]+)")),
                    e = 0;
                d ? e = J(d[1]) : (d = c.match(n) || [0, 0, 0, 0], p.test(b) ? e = J(d[2]) : b.toLowerCase() == "translatey" ? e = J(d[3]) : b.toLowerCase() == "scale" && (e = parseFloat(d[1])));
                return e
            }
            return a.css(b)
        }

        function N(b) {
            var d = b.effects,
                e;
            d === "zoom" && (d = "zoomIn fadeIn"), d === "slide" && (d = "slide:left"), d === "fade" && (d = "fadeIn"), d === "overlay" && (d = "slideIn:left"), /^overlay:(.+)$/.test(d) && (d = "slideIn:" + RegExp.$1), e = b.reverse && /^(slide:)/.test(d), e && delete b.reverse, b.effects = a.extend(c.parseEffects(d, e), {
                show: !0
            });
            return b
        }

        function M(a) {
            a.effects.slideIn = a.effects.slide, delete a.effects.slide;
            return a
        }

        function L(a, b) {
            var c = {};
            if (b) {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    var d = document.defaultView.getComputedStyle(a, "");
                    e(b, function(a, b) {
                        c[b] = d.getPropertyValue(b)
                    })
                } else if (a.currentStyle) {
                    var f = a.currentStyle;
                    e(b, function(a, b) {
                        c[b] = f[b.replace(/\-(\w)/g, function(a, b) {
                            return b.toUpperCase()
                        })]
                    })
                }
            } else c = document.defaultView.getComputedStyle(a, "");
            return c
        }

        function K(a, b) {
            return J(a.css(b))
        }

        function J(a) {
            return parseInt(a, 10)
        }
        var c = window.kendo,
            d = c.fx,
            e = a.each,
            f = a.extend,
            g = c.size,
            h = a.browser,
            i = c.support,
            j = i.transitions,
            k = {
                scale: 0,
                scaleX: 0,
                scaleY: 0,
                scale3d: 0
            },
            l = {
                translate: 0,
                translateX: 0,
                translateY: 0,
                translate3d: 0
            },
            m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
            n = /matrix3?d?\s*\(.*,\s*([\d\w\.\-]+),\s*([\d\w\.\-]+),\s*([\d\w\.\-]+)/,
            o = /^(-?[\d\.\-]+)?[\w\s]*,?\s*(-?[\d\.\-]+)?[\w\s]*/i,
            p = /translatex?$/i,
            q = {
                rotate: "",
                scale: "",
                translate: ""
            },
            r = ["perspective", "rotate", "rotateX", "rotateY", "rotateZ", "rotate3d", "scale", "scaleX", "scaleY", "scaleZ", "scale3d", "skew", "skewX", "skewY", "translate", "translateX", "translateY", "translateZ", "translate3d", "matrix", "matrix3d"],
            s = j.css,
            t = Math.round,
            u = "",
            v = "px",
            w = "none",
            x = "auto",
            y = "width",
            z = "scale",
            A = "height",
            B = "hidden",
            C = "origin",
            D = "abortId",
            E = "overflow",
            F = "translate",
            G = "style",
            H = s + "transition",
            I = s + "transform";
        c.directions = {
            left: {
                reverse: "right",
                property: "left",
                transition: "translateX",
                vertical: !1,
                modifier: -1
            },
            right: {
                reverse: "left",
                property: "left",
                transition: "translateX",
                vertical: !1,
                modifier: 1
            },
            down: {
                reverse: "up",
                property: "top",
                transition: "translateY",
                vertical: !0,
                modifier: 1
            },
            up: {
                reverse: "down",
                property: "top",
                transition: "translateY",
                vertical: !0,
                modifier: -1
            },
            "in": {
                reverse: "out",
                modifier: -1
            },
            out: {
                reverse: "in",
                modifier: 1
            }
        }, f(a.fn, {
            kendoStop: function(a, b) {
                return j ? c.fx.stopQueue(this, a || !1, b || !1) : this.stop(a, b)
            }
        }), c.toggleClass = function(a, b, c, d) {
            b && (b = b.split(" "), j && (c = f({
                exclusive: "all",
                duration: 400,
                ease: "ease-out"
            }, c), a.css(H, c.exclusive + " " + c.duration + "ms " + c.ease), setTimeout(function() {
                a.css(H, w).css(A)
            }, c.duration)), e(b, function(b, c) {
                a.toggleClass(c, d)
            }));
            return a
        }, c.parseEffects = function(a, b) {
            var d = {};
            typeof a == "string" ? e(a.split(" "), function() {
                var a = this.split(":"),
                    e = a[1],
                    f = {};
                a.length > 1 && (f.direction = b ? c.directions[e].reverse : e), d[a[0]] = f
            }) : e(a, function(a) {
                var e = this.direction;
                e && b && (e = c.directions[e].reverse), d[a] = this
            });
            return d
        };
        if (j) {
            function O(a) {
                var b = [];
                for (var c in a) b.push(c);
                return b
            }

            function P(a) {
                a.css(H, w), h.safari || a.css(A)
            }

            function Q(a) {
                var b = a.object;
                !a || (b.css(a.setup), b.css(H), setTimeout(function() {
                    b.data(D, setTimeout(function() {
                        P(b), b.dequeue(), a.complete.call(b)
                    }, a.duration)), b.css(a.CSS)
                }, 0))
            }
            f(c.fx, {
                transition: function(b, c, d) {
                    d = f({
                        duration: 200,
                        ease: "ease-out",
                        complete: null,
                        exclusive: "all"
                    }, d), d.duration = a.fx ? a.fx.speeds[d.duration] || d.duration : d.duration;
                    var e = [],
                        g = {},
                        h;
                    for (h in c) r.indexOf(h) != -1 ? e.push(h + "(" + c[h] + ")") : g[h] = c[h];
                    e.length && (g[I] = e.join(" "));
                    var i = {
                        keys: O(g),
                        CSS: g,
                        object: b,
                        setup: {},
                        duration: d.duration,
                        complete: d.complete
                    };
                    i.setup[H] = d.exclusive + " " + d.duration + "ms " + d.ease;
                    var j = b.data("keys") || [];
                    a.merge(j, i.keys), b.data("keys", a.unique(j)), Q(i)
                },
                stopQueue: function(a, b, c) {
                    a.data(D) && (clearTimeout(a.data(D)), a.removeData(D));
                    var d = this,
                        e = a.data("keys"),
                        f = c === !1 && e;
                    if (f) var g = L(a[0], e);
                    P(a), f && a.css(g), a.removeData("keys"), d.complete && d.complete.call(a), a.stop(b);
                    return a
                }
            })
        }
        c.fx.promise = function(b, d) {
            var h = [],
                j = d.effects;
            typeof j == "string" && (j = c.parseEffects(d.effects)), b.data("animating", !0), b.data("reverse", d.reverse);
            var k = {
                    keep: [],
                    restore: []
                },
                l = {},
                m = {
                    setup: [],
                    teardown: []
                },
                n = {},
                o = a.Deferred(function(h) {
                    if (g(j)) {
                        var o = f({}, d, {
                            complete: h.resolve
                        });
                        e(j, function(b, d) {
                            var g = c.fx[b];
                            g && (o = f(!0, o, d), e(m, function(a) {
                                g[a] && m[a].push(g[a])
                            }), e(k, function(b) {
                                g[b] && a.merge(k[b], g[b])
                            }), g.css && (l = f(l, g.css)))
                        });
                        if (m.setup.length) {
                            e(a.unique(k.keep), function(a, c) {
                                b.data(c) || b.data(c, b.css(c))
                            }), d.show && (l = f(l, {
                                display: b.data("olddisplay") || "block"
                            })), l.transform && (l[i.transitions.prefix + "Transform"] = l.transform, delete l.transform), b.css(l), b.css("overflow"), e(m.setup, function() {
                                n = f(n, this(b, o))
                            }), c.fx.animate && (d.init(), c.fx.animate(b, n, o));
                            return
                        }
                    }
                    d.show && b.css({
                        display: b.data("olddisplay") || "block"
                    }).css("display"), h.resolve()
                }).promise();
            h.push(o), a.when.apply(null, h).then(function() {
                b.removeData("animating").removeData("reverse").dequeue(), d.hide && b.data("olddisplay", b.css("display")).hide();
                if (g(j)) {
                    var c = function() {
                        e(a.unique(k.restore), function(a, c) {
                            b.css(c, b.data(c))
                        })
                    };
                    a.browser.msie ? setTimeout(c, 0) : c(), e(m.teardown, function() {
                        this(b, d.reverse)
                    })
                }
                d.completeCallback && d.completeCallback(b)
            })
        }, c.fx.transitionPromise = function(a, b, d) {
            c.fx.animateTo(a, b, d);
            return a
        }, f(c.fx, {
            animate: function(c, g, h) {
                var i = h.transition !== !1;
                delete h.transition, j && "transition" in d && i ? d.transition(c, g, h) : e(r, function(d, e) {
                    var i, j = g ? g[e] + " " : null;
                    c.each(function() {
                        if (j) {
                            var c = a(this),
                                d = g;
                            if (e in k && g[e] !== b) {
                                !c.data(z) && c.data(z, {
                                    top: K(c, "top") || 0,
                                    left: K(c, "left") || 0,
                                    width: c.width(),
                                    height: c.height()
                                });
                                var m = c.data(z);
                                i = j.match(o);
                                if (i) {
                                    var n = e == z + "Y" ? +null : +i[1],
                                        p = e == z + "Y" ? +i[1] : +i[2] || +i[1];
                                    !isNaN(n) && f(d, {
                                        left: m.left + m.width * (1 - n) / 2,
                                        width: m.width * n
                                    }), !isNaN(p) && f(d, {
                                        top: m.top + m.height * (1 - p) / 2,
                                        height: m.height * p
                                    })
                                }
                            } else if (e in l && g[e] !== b) {
                                var q = c.css("position"),
                                    r = q == "absolute" || q == "fixed";
                                c.data(F) || (r ? c.data(F, {
                                    top: K(c, "top") || 0,
                                    left: K(c, "left") || 0,
                                    bottom: K(c, "bottom"),
                                    right: K(c, "right")
                                }) : c.data(F, {
                                    top: K(c, "marginTop") || 0,
                                    left: K(c, "marginLeft") || 0
                                }));
                                var s = c.data(F);
                                i = j.match(o);
                                if (i) {
                                    var t = e == F + "Y" ? +null : +i[1],
                                        u = e == F + "Y" ? +i[1] : +i[2];
                                    r ? (isNaN(s.right) ? !isNaN(t) && f(d, {
                                        left: s.left + t
                                    }) : !isNaN(t) && f(d, {
                                        right: s.right - t
                                    }), isNaN(s.bottom) ? !isNaN(u) && f(d, {
                                        top: s.top + u
                                    }) : !isNaN(u) && f(d, {
                                        bottom: s.bottom - u
                                    })) : (!isNaN(t) && f(d, {
                                        marginLeft: s.left + t
                                    }), !isNaN(u) && f(d, {
                                        marginTop: s.top + u
                                    }))
                                }
                            }
                            e in d && delete d[e], c.animate(d, f({
                                queue: !1
                            }, h, {
                                show: !1,
                                hide: !1
                            }))
                        }
                    })
                })
            },
            animateTo: function(b, c, d) {
                function h() {
                    c[0].style.cssText = "", b[0].style.cssText = "", f.css(E, g), d.completeCallback && d.completeCallback()
                }
                var e, f = b.parents().filter(c.parents()).first(),
                    g = f.css(E);
                d = N(d), f.css("overflow-x", "hidden"), a.each(d.effects, function(a, b) {
                    e = e || b.direction
                }), d.complete = a.browser.msie ? function() {
                    setTimeout(h)
                } : h, "slide" in d.effects ? (b.kendoAnimate(d), c.kendoAnimate(M(d))) : (d.reverse ? b : c).kendoAnimate(d)
            },
            fadeOut: {
                css: {
                    opacity: function() {
                        var c = a(this);
                        return c.data("reverse") && !this.style.opacity ? 0 : b
                    }
                },
                setup: function(a, b) {
                    return f({
                        opacity: b.reverse ? 1 : 0
                    }, b.properties)
                }
            },
            fadeIn: {
                css: {
                    opacity: function() {
                        var c = a(this);
                        return !c.data("reverse") && !this.style.opacity ? 0 : b
                    }
                },
                setup: function(a, b) {
                    return f({
                        opacity: b.reverse ? 0 : 1
                    }, b.properties)
                }
            },
            zoomIn: {
                css: {
                    transform: function() {
                        var c = a(this);
                        return !c.data("reverse") && j ? "scale(.01)" : b
                    }
                },
                setup: function(a, b) {
                    return f({
                        scale: b.reverse ? .01 : 1
                    }, b.properties)
                }
            },
            zoomOut: {
                css: {
                    transform: function() {
                        var c = a(this);
                        return c.data("reverse") && j ? "scale(.01)" : b
                    }
                },
                setup: function(a, b) {
                    return f({
                        scale: b.reverse ? 1 : .01
                    }, b.properties)
                }
            },
            slide: {
                setup: function(a, b) {
                    var d = c.directions[b.direction],
                        e = {},
                        g, h = b.reverse,
                        i = b.divisor || 1;
                    if (!h) {
                        var k = a.data(C);
                        g = d.modifier * (d.vertical ? a.outerHeight() : a.outerWidth()) / i, !k && k !== 0 && a.data(C, R(a, d.transition))
                    }
                    j && b.transition !== !1 ? e[d.transition] = h ? a.data(C) || 0 : g + v : e[d.property] = h ? a.data(C) || 0 : g + v;
                    return f(e, b.properties)
                }
            },
            slideMargin: {
                setup: function(a, b) {
                    var c = a.data(C),
                        d = b.offset,
                        e, g = {},
                        h = b.reverse;
                    !h && !c && c !== 0 && a.data(C, parseInt(a.css("margin-left"), 10)), e = a.data(C) || 0, g["margin-" + b.axis] = h ? e : e + d;
                    return f(g, b.properties)
                }
            },
            slideTo: {
                setup: function(a, b) {
                    var c = (b.offset + "").split(","),
                        d = {},
                        e = b.reverse;
                    j && b.transition !== !1 ? d.translate = e ? 0 : c + v : (d.left = e ? 0 : c[0], d.top = e ? 0 : c[1]), a.css("left");
                    return f(d, b.properties)
                }
            },
            slideIn: {
                setup: function(a, b) {
                    var d = c.directions[b.direction],
                        e = -d.modifier * (d.vertical ? a.outerHeight() : a.outerWidth()),
                        g = {},
                        h = b.reverse;
                    j && b.transition !== !1 ? (a.css(I, d.transition + "(" + (h ? 0 : e) + "px)"), g[d.transition] = h ? e + v : 0) : (!h && a.css(d.property, e + v), g[d.property] = h ? e + v : 0), a.css(d.property);
                    return f(g, b.properties)
                }
            },
            expandVertical: {
                keep: [E],
                css: {
                    overflow: B
                },
                restore: [E],
                setup: function(a, c) {
                    var d = c.reverse,
                        e = a[0].style.height,
                        g = a.data(A),
                        h = J(g || e),
                        i = h || t(a.css({
                                height: x
                            }).height());
                    a.css(A, d ? i : 0).css(A), g === b && a.data(A, e);
                    return f({
                        height: (d ? 0 : i) + v
                    }, c.properties)
                },
                teardown: function(a) {
                    var b = a.data(A);
                    (b == x || b === u) && setTimeout(function() {
                        a.css(A, x).css(A)
                    }, 0)
                }
            },
            simple: {
                setup: function(a, b) {
                    return b.properties
                }
            }
        })
    }(jQuery),
    function(a, b) {
        function e(f) {
            var g = [],
                h = f.logic || "and",
                i, j, k, l, m, n, o, p = f.filters;
            for (i = 0, j = p.length; i < j; i++) f = p[i], k = f.field, o = f.value, n = f.operator, f.filters ? f = e(f) : (k = k.replace(/\./g, "/"), f = d[n], f && o !== b && (l = a.type(o), l === "string" ? m = "'{1}'" : l === "date" ? m = "datetime'{1:yyyy-MM-ddTHH:mm:ss}'" : m = "{1}", f.length > 3 ? f !== "substringof" ? m = "{0}({2}," + m + ")" : m = "{0}(" + m + ",{2})" : m = "{2} {0} " + m, f = c.format(m, f, o, k))), g.push(f);
            f = g.join(" " + h + " "), g.length > 1 && (f = "(" + f + ")");
            return f
        }
        var c = window.kendo,
            d = {
                eq: "eq",
                neq: "ne",
                gt: "gt",
                gte: "ge",
                lt: "lt",
                lte: "le",
                contains: "substringof",
                endswith: "endswith",
                startswith: "startswith"
            };
        a.extend(!0, c.data, {
            schemas: {
                odata: {
                    type: "json",
                    data: "d.results",
                    total: "d.__count"
                }
            },
            transports: {
                odata: {
                    read: {
                        cache: !0,
                        dataType: "jsonp",
                        jsonpCallback: "callback",
                        jsonp: !1
                    },
                    parameterMap: function(b) {
                        var c = ["$format=json", "$inlinecount=allpages", "$callback=callback"],
                            d = b || {};
                        d.skip && c.push("$skip=" + d.skip), d.take && c.push("$top=" + d.take), d.sort && c.push("$orderby=" + a.map(d.sort, function(a) {
                                var b = a.field.replace(/\./g, "/");
                                a.dir === "desc" && (b += " desc");
                                return b
                            }).join(",")), d.filter && c.push("$filter=" + e(d.filter));
                        return c.join("&")
                    }
                }
            }
        })
    }(jQuery),
    function(a, b) {
        var c = window.kendo,
            d = a.isArray,
            e = a.isPlainObject,
            f = a.map,
            g = a.each,
            h = c.getter,
            i = c.Class,
            j = i.extend({
                init: function(a) {
                    var b = this,
                        h = a.total,
                        i = a.model,
                        j = a.data;
                    i && (e(i) && (i.id = b.getter(i.id), i.fields && g(i.fields, function(a, c) {
                        e(c) && c.field && (c = c.field), i.fields[a] = b.getter(c)
                    }), i = c.data.Model.define(i)), b.model = i), h && (h = b.getter(h), b.total = function(a) {
                        return parseInt(h(a))
                    }), j && (j = b.xpathToMember(j), b.data = function(a) {
                        var c, e, g = b.evaluate(a, j);
                        g = d(g) ? g : [g];
                        if (b.model && i.fields) return f(g, function(a) {
                            c = {};
                            for (e in i.fields) c[e] = i.fields[e](a);
                            return c
                        });
                        return g
                    })
                },
                total: function(a) {
                    return this.data(a).length
                },
                parseDOM: function(a) {
                    var c = {},
                        e, f, g, h, i, j, k = a.attributes,
                        l = k.length,
                        m;
                    for (m = 0; m < l; m++) j = k[m], c["@" + j.nodeName] = j.nodeValue;
                    for (f = a.firstChild; f; f = f.nextSibling) g = f.nodeType, g === 3 || g === 4 ? c["#text"] = f.nodeValue : g === 1 && (e = this.parseDOM(f), h = f.nodeName, i = c[h], d(i) ? i.push(e) : i !== b ? i = [i, e] : i = e, c[h] = i);
                    return c
                },
                evaluate: function(a, b) {
                    var c = b.split("."),
                        e, f, g, h, i;
                    while (e = c.shift()) {
                        a = a[e];
                        if (d(a)) {
                            f = [], b = c.join(".");
                            for (i = 0, g = a.length; i < g; i++) h = this.evaluate(a[i], b), h = d(h) ? h : [h], f.push.apply(f, h);
                            return f
                        }
                    }
                    return a
                },
                parse: function(b) {
                    var c, d, e = {};
                    c = b.documentElement || a.parseXML(b).documentElement, d = this.parseDOM(c), e[c.nodeName] = d;
                    return e
                },
                xpathToMember: function(a) {
                    if (!a) return "";
                    a = a.replace(/^\//, "").replace(/\//g, ".");
                    if (a.indexOf("@") >= 0) return a.replace(/\.?(@.*)/, '["$1"]');
                    if (a.indexOf("text()") >= 0) return a.replace(/(\.?text\(\))/, '["#text"]');
                    return a
                },
                getter: function(a) {
                    return h(this.xpathToMember(a), !0)
                }
            });
        a.extend(!0, c.data, {
            XmlDataReader: j,
            readers: {
                xml: j
            }
        })
    }(jQuery),
    function(a, b) {
        function p(a, b) {
            if (a === b) return !0;
            var c = e(a),
                d = e(b),
                f;
            if (c !== d) return !1;
            if (c === "date") return a.getTime() === b.getTime();
            if (c !== "object" && c !== "array") return !1;
            for (f in a)
                if (!p(a[f], b[f])) return !1;
            return !0
        }
        var c = window.kendo,
            d = a.extend,
            e = a.type,
            f = c.getter,
            g = c.setter,
            h = c.accessor,
            i = a.each,
            j = a.isPlainObject,
            k = "change",
            l = "error",
            m = "modelChange",
            n = c.Observable,
            o = /^\/Date\((.*?)\)\/$/,
            q = {
                number: function(a) {
                    return c.parseFloat(a)
                },
                date: function(a) {
                    if (typeof a == "string") {
                        var b = o.exec(a);
                        if (b) return new Date(parseInt(b[1]))
                    }
                    return c.parseDate(a)
                },
                "boolean": function(a) {
                    if (typeof a == "string") return a.toLowerCase() === "true";
                    return !!a
                },
                string: function(a) {
                    return a + ""
                },
                "default": function(a) {
                    return a
                }
            },
            r = {
                string: "",
                number: 0,
                date: new Date,
                "boolean": !1,
                "default": ""
            },
            s = n.extend({
                init: function(e) {
                    var f = this;
                    n.fn.init.call(f), f._accessors = {}, f._modified = !1, f.data = e && !a.isEmptyObject(e) ? e : d(!0, {}, f.defaultItem), f.pristine = d(!0, {}, f.data);
                    if (f.id() === b || f.id() === f.defaultId) f._isNew = !0, f.data.__id = c.guid()
                },
                _accessor: function(a) {
                    var b = this._accessors;
                    return b[a] = b[a] || h(a)
                },
                get: function(a) {
                    return this._accessor(a).get(this.data)
                },
                _parse: function(a, b) {
                    var c = this,
                        d;
                    a = (c.fields || {})[a], a && (d = a.parse, !d && a.type && (d = q[a.type.toLowerCase()]));
                    return d ? d(b) : b
                },
                editable: function(a) {
                    a = (this.fields || {})[a];
                    return a ? a.editable !== !1 : !0
                },
                set: function(a, b) {
                    var c = this,
                        d, e = {},
                        f = !1,
                        g;
                    typeof a == "string" ? e[a] = b : e = a;
                    for (d in e) {
                        if (!c.editable(d)) continue;
                        g = c._accessor(d), b = c._parse(d, e[d]), p(b, g.get(c.data)) || (g.set(c.data, b), c._modified = f = !0)
                    }
                    f && c.trigger(k)
                },
                reset: function() {
                    var a = this;
                    d(a.data, a.pristine), a._modified = !1
                },
                _accept: function(a) {
                    var b = this;
                    b._isNew = !1, b._modified = !1, d(b.data, a), b.pristine = d(!0, {}, b.data)
                },
                hasChanges: function() {
                    return this._modified
                },
                isNew: function() {
                    return this._isNew === !0
                },
                changes: function() {
                    var a = null,
                        b, c = this,
                        d = c.data,
                        e = c.pristine;
                    for (b in d) b !== "__id" && (c.isNew() || !p(e[b], d[b])) && (a = a || {}, a[b] = d[b]);
                    return a
                }
            });
        s.define = function(c) {
            var e, h = d({}, {
                    defaultItem: {}
                }, c),
                i = h.id || "id",
                j, k, l;
            a.isFunction(i) ? (l = i, k = i) : (l = f(i), k = g(i));
            for (var m in h.fields) {
                var n = h.fields[m],
                    o = n.type || "default",
                    p = null;
                m = n.field || m, n.nullable || (p = h.defaultItem[m] = n.defaultValue !== b ? n.defaultValue : r[o.toLowerCase()]), c.id === m && (j = h._defaultId = p), h.defaultItem[m] = p, n.parse = n.parse || q[o]
            }
            i = function(a, c) {
                var d;
                if (c === b) {
                    d = l(a);
                    return d !== b && d !== null && d !== j ? d : a.__id
                }
                k(a, c)
            }, h.id = function(a) {
                return i(this.data, a)
            }, e = s.extend(h), e.id = i, h.fields && (e.fields = h.fields);
            return e
        };
        var t = n.extend({
            init: function(a) {
                var b = this;
                b.options = a = d({}, b.options, a), b._reader = a.reader, b._data = a.data || [], b._destroyed = [], b._transport = a.transport, b._models = {}, b._map(), n.fn.init.call(b), b.bind([k, m, l], a)
            },
            options: {
                batch: !1,
                sendAllFields: !1,
                autoSync: !1
            },
            indexOf: function(a) {
                var b = this,
                    c = b.options.model,
                    d = c.id(a);
                return b._idMap[d]
            },
            _map: function() {
                var a = this,
                    b, c, d = a._data,
                    e = a.options.model;
                a._idMap = {};
                for (b = 0, c = d.length; b < c; b++) a._idMap[e.id(d[b])] = b
            },
            data: function(a) {
                var b = this;
                a && (b._data = a, b._models = {}, b._destroyed = [], b._map())
            },
            get: function(a) {
                var b = this,
                    c, d = b._models[a];
                d || (c = b._data[b._idMap[a]], c && (d = b._models[a] = new b.options.model(c), d.bind(k, function() {
                    b.trigger(m, d)
                })));
                return d
            },
            add: function(a) {
                var b = this;
                return b.insert(b._data.length, a)
            },
            insert: function(a, c) {
                var d = this,
                    e;
                c === b && j(a) && (c = a, a = 0), c instanceof s || (c = new d.options.model(c)), e = c.data, c.bind(k, function() {
                    d.trigger(m, c)
                }), d._data.splice(a, 0, e), d._map(), d._models[c.id()] = c, d.trigger(k), d.options.autoSync && d.sync();
                return c
            },
            remove: function(a) {
                var b = this,
                    c = a,
                    d, e;
                a instanceof s ? c = a.id() : a = b.get(c), a && (b._data.splice(b._idMap[c], 1), b._map(), a.unbind(k), delete b._models[c], a.isNew() || b._destroyed.push(a), b.trigger(k), b.options.autoSync && b.sync());
                return a
            },
            sync: function() {
                var b = this,
                    c = [],
                    d = [],
                    e = [],
                    f, g, h, i = b.options,
                    j = i.sendAllFields,
                    l, m = b._models;
                for (g in m) l = m[g], l.isNew() ? c.push({
                    model: l,
                    data: l.changes()
                }) : l.hasChanges() && (f = j ? l.data : l.changes(), i.model.id(f, l.id()), d.push({
                    model: l,
                    data: f
                }));
                for (g = 0, h = b._destroyed.length; g < h; g++) l = b._destroyed[g], f = j ? l.data : {}, i.model.id(f, l.id()), e.push({
                    model: l,
                    data: f
                });
                a.when.apply(null, b._send({
                    create: c,
                    update: d,
                    destroy: e
                })).then(function() {
                    var a, c;
                    for (a = 0, c = arguments.length; a < c; a++) b._accept(arguments[a]);
                    b.trigger(k), b._map()
                })
            },
            _accept: function(b) {
                var c = this,
                    d = b.models,
                    e = b.response || {},
                    f = 0,
                    g;
                e = c._reader.data(c._reader.parse(e)), a.isArray(e) || (e = [e]);
                if (b.type === "destroy") c._destroyed = [];
                else
                    for (f = 0, g = d.length; f < g; f++) d[f]._accept(e[f])
            },
            _promise: function(b, c, e) {
                var f = this,
                    g = f._transport;
                return a.Deferred(function(a) {
                    g[e].call(g, d({
                        success: function(b) {
                            a.resolve({
                                response: b,
                                models: c,
                                type: e
                            })
                        },
                        error: function(b) {
                            a.reject(b), f.trigger(l, b)
                        }
                    }, b))
                }).promise()
            },
            _send: function(b) {
                var c = this,
                    d = [],
                    e = "create,update,destroy".split(",");
                i(e, function(e, f) {
                    var g = b[f],
                        h, i;
                    if (c.options.batch) g.length && d.push(c._promise({
                        data: {
                            models: a.map(g, function(a) {
                                return a.data
                            })
                        }
                    }, a.map(g, function(a) {
                        return a.model
                    }), f));
                    else
                        for (h = 0, i = g.length; h < i; h++) d.push(c._promise({
                            data: g[h].data
                        }, [g[h].model], f))
                });
                return d
            },
            cancelChanges: function() {
                var a = this,
                    b = a._destroyed,
                    c = a._models,
                    d, e = a._data,
                    f, g;
                for (f = 0, g = b.length; f < g; f++) d = b[f], d.reset(), e.push(d.data);
                for (f in c) d = c[f], d.isNew() ? e.splice(a._idMap[f], 1) : d.hasChanges() && d.reset();
                a.data(e), a.trigger(k)
            }
        });
        c.data.Model = s, c.data.ModelSet = t
    }(jQuery),
    function($, undefined) {
        function bindSelect(select, model) {
            select = $(select);
            var text = select.attr(kendo.attr("text-field")),
                value = select.attr(kendo.attr("value-field")),
                source = select.attr(kendo.attr("source"));
            if (model[source]) source = model[source].call(model);
            else try {
                source = eval(source)
            } catch (e) {
                return
            }
            $.isArray(source) && select.html(kendo.render(kendo.template('<option value="${' + value + '}">${' + text + "}</option>"), source))
        }
        var kendo = window.kendo,
            Observable = kendo.Observable,
            data = kendo.data,
            Model = data.Model,
            CHANGE = "change",
            ModelViewBinder = Observable.extend({
                init: function(a, b, c) {
                    var d = this;
                    d.element = $(a), d.options = c || {}, Observable.fn.init.call(d), d.model = b instanceof Model ? b : new(Model.define())(b), d.bind([CHANGE], d.options);
                    var e = d.element.find("input,select,textarea");
                    e.length || (e = d.element), e.bind(CHANGE, $.proxy(d._change, d)).each(function() {
                        var a = d._map(this);
                        a && a.bindView()
                    })
                },
                bindModel: function() {
                    var a = this,
                        b = !0;
                    a.element.find("input,select,textarea").each(function() {
                        var c = a._map(this);
                        if (c) return b = c.bindModel()
                    });
                    return b
                },
                _change: function(a) {
                    var b = this,
                        c = b._map(a.target);
                    c && c.bindModel()
                },
                _map: function(a) {
                    var b = this,
                        c = b.model,
                        d = b.options,
                        e = $(a),
                        f = e.attr(kendo.attr("field")) || e.attr("name"),
                        g = d[f] || {};
                    if (f) return {
                        bindView: function() {
                            var b = c.get(f);
                            g.format && (b = g.format(b)), a.nodeName.toLowerCase() === "select" && bindSelect(a, c), e.is(":checkbox") ? e.attr("checked", b === !0) : e.val(b)
                        },
                        bindModel: function() {
                            var d = e.is(":checkbox") ? e.is(":checked") : a.value,
                                h = {};
                            g.parse && (d = g.parse(d)), h[f] = d;
                            if (!b.trigger(CHANGE, {
                                    values: h
                                })) {
                                c.set(f, d);
                                return !0
                            }
                            return !1
                        }
                    }
                }
            });
        data.ModelViewBinder = ModelViewBinder
    }(jQuery),
    function(a, b) {
        function _(b, c) {
            var d = a(b)[0].tBodies[0],
                e = d ? d.rows : [],
                f, g, h, i = c.length,
                j = [],
                k, l, m, n;
            for (f = 0, g = e.length; f < g; f++) {
                l = {}, n = !0, k = e[f].cells;
                for (h = 0; h < i; h++) m = k[h], m.nodeName.toLowerCase() !== "th" && (n = !1, l[c[h].field] = m.innerHTML);
                n || j.push(l)
            }
            return j
        }

        function $(b, c) {
            var d = a(b)[0].children,
                e, f, g = [],
                h, i = c[0],
                j = c[1],
                k;
            for (e = 0, f = d.length; e < f; e++) h = {}, k = d[e], h[i.field] = k.text, h[j.field] = k.value, g.push(h);
            return g
        }

        function X() {
            this._store = {}
        }

        function U(a, b) {
            var c = new K(a),
                b = b || {},
                d = b.aggregate,
                e = b.filter;
            e && (c = c.filter(e));
            return c.aggregate(d)
        }

        function T(a, c) {
            var d = new K(a),
                c = c || {},
                e = c.group,
                f = L(c.sort || []).concat(Q(e || [])),
                g, h = c.filter,
                i = c.skip,
                j = c.take;
            h && (d = d.filter(h), g = d.toArray().length), f && (d = d.sort(f), e && (a = d.toArray())), i !== b && j !== b && (d = d.range(i, j)), e && (d = d.group(e, a));
            return {
                total: g,
                data: d.toArray()
            }
        }

        function R(a, b, c, d, e) {
            b = b || [];
            var f, g, h, i, j = b.length;
            for (f = 0; f < j; f++) {
                g = b[f], h = g.aggregate;
                var k = g.field;
                a[k] = a[k] || {}, a[k][h] = S[h.toLowerCase()](a[k][h], c, n.accessor(k), d, e)
            }
        }

        function Q(a, c) {
            var d = typeof a === s ? {
                    field: a,
                    dir: c
                } : a,
                e = h(d) ? d : d !== b ? [d] : [];
            return k(e, function(a) {
                return {
                    field: a.field,
                    dir: a.dir || "asc",
                    aggregates: a.aggregates
                }
            })
        }

        function P(a) {
            return a = h(a) ? a : [a]
        }

        function O(a) {
            if (a && !g(a)) {
                if (h(a) || !a.filters) a = {
                    logic: "and",
                    filters: h(a) ? a : [a]
                };
                N(a);
                return a
            }
        }

        function N(a) {
            var b, c, d, e, f = a.filters;
            if (f)
                for (b = 0, c = f.length; b < c; b++) d = f[b], e = d.operator, e && typeof e === s && (d.operator = M[e.toLowerCase()] || e), N(d)
        }

        function L(a, c) {
            if (a) {
                var d = typeof a === s ? {
                        field: a,
                        dir: c
                    } : a,
                    e = h(d) ? d : d !== b ? [d] : [];
                return i(e, function(a) {
                    return !!a.dir
                })
            }
        }

        function K(a) {
            this.data = a || []
        }
        var c = a.extend,
            d = a.proxy,
            e = a.isFunction,
            f = a.isPlainObject,
            g = a.isEmptyObject,
            h = a.isArray,
            i = a.grep,
            j = a.ajax,
            k, l = a.each,
            m = a.noop,
            n = window.kendo,
            o = n.Observable,
            p = n.Class,
            q = n.data.Model,
            r = n.data.ModelSet,
            s = "string",
            t = "create",
            u = "read",
            v = "update",
            w = "destroy",
            x = "change",
            y = "modelChange",
            z = "multiple",
            A = "single",
            B = "error",
            C = "requestStart",
            D = [t, u, v, w],
            E = function(a) {
                return a
            },
            F = n.getter,
            G = n.stringify,
            H = Math,
            I = {
                selector: function(a) {
                    return e(a) ? a : F(a)
                },
                asc: function(a) {
                    var b = this.selector(a);
                    return function(a, c) {
                        a = b(a), c = b(c);
                        return a > c ? 1 : a < c ? -1 : 0
                    }
                },
                desc: function(a) {
                    var b = this.selector(a);
                    return function(a, c) {
                        a = b(a), c = b(c);
                        return a < c ? 1 : a > c ? -1 : 0
                    }
                },
                create: function(a) {
                    return I[a.dir.toLowerCase()](a.field)
                },
                combine: function(a) {
                    return function(b, c) {
                        var d = a[0](b, c),
                            e, f;
                        for (e = 1, f = a.length; e < f; e++) d = d || a[e](b, c);
                        return d
                    }
                }
            };
        k = function(a, b) {
            var c, d = a.length,
                e = Array(d);
            for (c = 0; c < d; c++) e[c] = b(a[c], c, a);
            return e
        };
        var J = function() {
            function d(d, e, f, g) {
                var h;
                f != b && (typeof f === s && (f = f.replace(c, "\\'"), h = a.exec(f), h ? f = new Date(+h[1]) : g ? (f = "'" + f.toLowerCase() + "'", e = e + ".toLowerCase()") : f = "'" + f + "'"), f.getTime && (e += ".getTime()", f = f.getTime()));
                return e + " " + d + " " + f
            }
            var a = /^\/Date\((.*?)\)\/$/,
                c = /'/g;
            return {
                eq: function(a, b, c) {
                    return d("==", a, b, c)
                },
                neq: function(a, b, c) {
                    return d("!=", a, b, c)
                },
                gt: function(a, b, c) {
                    return d(">", a, b, c)
                },
                gte: function(a, b, c) {
                    return d(">=", a, b, c)
                },
                lt: function(a, b, c) {
                    return d("<", a, b, c)
                },
                lte: function(a, b, c) {
                    return d("<=", a, b, c)
                },
                startswith: function(a, b, c) {
                    c && (a = a + ".toLowerCase()", b && (b = b.toLowerCase()));
                    return a + ".lastIndexOf('" + b + "', 0) == 0"
                },
                endswith: function(a, b, c) {
                    c && (a = a + ".toLowerCase()", b && (b = b.toLowerCase()));
                    return a + ".lastIndexOf('" + b + "') == " + a + ".length - " + (b || "").length
                },
                contains: function(a, b, c) {
                    c && (a = a + ".toLowerCase()", b && (b = b.toLowerCase()));
                    return a + ".indexOf('" + b + "') >= 0"
                }
            }
        }();
        K.normalizeFilter = O, K.filterExpr = function(a) {
            var c = [],
                d = {
                    and: " && ",
                    or: " || "
                },
                e, f, g, h, i = [],
                j = [],
                k, l, m = a.filters;
            for (e = 0, f = m.length; e < f; e++) g = m[e], k = g.field, l = g.operator, g.filters ? (h = K.filterExpr(g), g = h.expression.replace(/__o\[(\d+)\]/g, function(a, b) {
                b = +b;
                return "__o[" + (j.length + b) + "]"
            }).replace(/__f\[(\d+)\]/g, function(a, b) {
                b = +b;
                return "__f[" + (i.length + b) + "]"
            }), j.push.apply(j, h.operators), i.push.apply(i, h.fields)) : (typeof k == "function" ? (h = "__f[" + i.length + "](d)", i.push(k)) : h = n.expr(k), typeof l == "function" ? (g = "__o[" + j.length + "](" + h + ", " + g.value + ")", j.push(l)) : g = J[(l || "eq").toLowerCase()](h, g.value, g.ignoreCase !== b ? g.ignoreCase : !0)), c.push(g);
            return {
                expression: "(" + c.join(d[a.logic]) + ")",
                fields: i,
                operators: j
            }
        };
        var M = {
            "==": "eq",
            equals: "eq",
            isequalto: "eq",
            equalto: "eq",
            equal: "eq",
            "!=": "neq",
            ne: "neq",
            notequals: "neq",
            isnotequalto: "neq",
            notequalto: "neq",
            notequal: "neq",
            "<": "lt",
            islessthan: "lt",
            lessthan: "lt",
            less: "lt",
            "<=": "lte",
            le: "lte",
            islessthanorequalto: "lte",
            lessthanequal: "lte",
            ">": "gt",
            isgreaterthan: "gt",
            greaterthan: "gt",
            greater: "gt",
            ">=": "gte",
            isgreaterthanorequalto: "gte",
            greaterthanequal: "gte",
            ge: "gte"
        };
        K.prototype = {
            toArray: function() {
                return this.data
            },
            range: function(a, b) {
                return new K(this.data.slice(a, a + b))
            },
            skip: function(a) {
                return new K(this.data.slice(a))
            },
            take: function(a) {
                return new K(this.data.slice(0, a))
            },
            select: function(a) {
                return new K(k(this.data, a))
            },
            orderBy: function(a) {
                var b = this.data.slice(0),
                    c = e(a) || !a ? I.asc(a) : a.compare;
                return new K(b.sort(c))
            },
            orderByDescending: function(a) {
                return new K(this.data.slice(0).sort(I.desc(a)))
            },
            sort: function(a, b) {
                var c, d, e = L(a, b),
                    f = [];
                if (e.length) {
                    for (c = 0, d = e.length; c < d; c++) f.push(I.create(e[c]));
                    return this.orderBy({
                        compare: I.combine(f)
                    })
                }
                return this
            },
            filter: function(a) {
                var b, c, d, e, f, g = this.data,
                    h, i, j = [],
                    k;
                a = O(a);
                if (!a || a.filters.length === 0) return this;
                e = K.filterExpr(a), h = e.fields, i = e.operators, f = k = new Function("d, __f, __o", "return " + e.expression);
                if (h.length || i.length) k = function(a) {
                    return f(a, h, i)
                };
                for (b = 0, d = g.length; b < d; b++) c = g[b], k(c) && j.push(c);
                return new K(j)
            },
            group: function(a, b) {
                a = Q(a || []), b = b || this.data;
                var c = this,
                    d = new K(c.data),
                    e;
                a.length > 0 && (e = a[0], d = d.groupBy(e).select(function(c) {
                    var d = (new K(b)).filter([{
                        field: c.field,
                        operator: "eq",
                        value: c.value
                    }]);
                    return {
                        field: c.field,
                        value: c.value,
                        items: a.length > 1 ? (new K(c.items)).group(a.slice(1), d.toArray()).toArray() : c.items,
                        hasSubgroups: a.length > 1,
                        aggregates: d.aggregate(e.aggregates)
                    }
                }));
                return d
            },
            groupBy: function(a) {
                if (g(a) || !this.data.length) return new K([]);
                var b = a.field,
                    c = this.sort(b, a.dir || "asc").toArray(),
                    d = n.accessor(b),
                    e, f = d.get(c[0], b),
                    h = {
                        field: b,
                        value: f,
                        items: []
                    },
                    i, j, k, l = [h];
                for (j = 0, k = c.length; j < k; j++) e = c[j], i = d.get(e, b), f !== i && (f = i, h = {
                    field: b,
                    value: f,
                    items: []
                }, l.push(h)), h.items.push(e);
                return new K(l)
            },
            aggregate: function(a) {
                var b, c, d = {};
                if (a && a.length)
                    for (b = 0, c = this.data.length; b < c; b++) R(d, a, this.data[b], b, c);
                return d
            }
        };
        var S = {
                sum: function(a, b, c) {
                    return a = (a || 0) + c.get(b)
                },
                count: function(a, b, c) {
                    return (a || 0) + 1
                },
                average: function(a, b, c, d, e) {
                    a = (a || 0) + c.get(b), d == e - 1 && (a = a / e);
                    return a
                },
                max: function(a, b, c) {
                    var a = a || 0,
                        d = c.get(b);
                    a < d && (a = d);
                    return a
                },
                min: function(a, b, c) {
                    var d = c.get(b),
                        a = a || d;
                    a > d && (a = d);
                    return a
                }
            },
            V = p.extend({
                init: function(a) {
                    this.data = a.data
                },
                read: function(a) {
                    a.success(this.data)
                },
                update: function(a) {
                    a.success(a.data)
                },
                create: m,
                destory: m
            }),
            W = p.extend({
                init: function(a) {
                    var b = this,
                        d;
                    a = b.options = c({}, b.options, a), l(D, function(b, c) {
                        typeof a[c] === s && (a[c] = {
                            url: a[c]
                        })
                    }), b.cache = a.cache ? X.create(a.cache) : {
                        find: m,
                        add: m
                    }, d = a.parameterMap, b.parameterMap = e(d) ? d : function(a) {
                        var b = {};
                        l(a, function(a, c) {
                            a in d && (a = d[a], f(a) && (c = a.value(c), a = a.key)), b[a] = c
                        });
                        return b
                    }
                },
                options: {
                    parameterMap: E
                },
                create: function(a) {
                    return j(this.setup(a, t))
                },
                read: function(c) {
                    var d = this,
                        e, f, g, h = d.cache;
                    c = d.setup(c, u), e = c.success || m, f = c.error || m, g = h.find(c.data), g !== b ? e(g) : (c.success = function(a) {
                        h.add(c.data, a), e(a)
                    }, a.ajax(c))
                },
                update: function(a) {
                    return j(this.setup(a, v))
                },
                destroy: function(a) {
                    return j(this.setup(a, w))
                },
                setup: function(a, b) {
                    a = a || {};
                    var d = this,
                        f = d.options[b],
                        g = e(f.data) ? f.data() : f.data;
                    a = c(!0, {}, f, a), a.data = d.parameterMap(c(g, a.data), b);
                    return a
                }
            });
        X.create = function(a) {
            var b = {
                inmemory: function() {
                    return new X
                }
            };
            if (f(a) && e(a.find)) return a;
            if (a === !0) return new X;
            return b[a]()
        }, X.prototype = {
            add: function(a, c) {
                a !== b && (this._store[G(a)] = c)
            },
            find: function(a) {
                return this._store[G(a)]
            },
            clear: function() {
                this._store = {}
            },
            remove: function(a) {
                delete this._store[G(a)]
            }
        };
        var Y = p.extend({
                init: function(a) {
                    var b = this,
                        c, d;
                    a = a || {};
                    for (c in a) d = a[c], b[c] = typeof d === s ? F(d) : d;
                    f(b.model) && (b.model = q.define(b.model))
                },
                parse: E,
                data: E,
                total: function(a) {
                    return a.length
                },
                groups: E,
                status: function(a) {
                    return a.status
                },
                aggregates: function() {
                    return {}
                }
            }),
            Z = o.extend({
                init: function(a) {
                    var d = this,
                        f, h, i;
                    a = d.options = c({}, d.options, a), c(d, {
                        _map: {},
                        _prefetch: {},
                        _data: [],
                        _ranges: [],
                        _view: [],
                        _pageSize: a.pageSize,
                        _page: a.page || (a.pageSize ? 1 : b),
                        _sort: L(a.sort),
                        _filter: O(a.filter),
                        _group: Q(a.group),
                        _aggregate: a.aggregate
                    }), o.fn.init.call(d), i = a.transport, i ? (i.read = typeof i.read === s ? {
                        url: i.read
                    } : i.read, a.type && (i = c(!0, {}, n.data.transports[a.type], i), a.schema = c(!0, {}, n.data.schemas[a.type], a.schema)), d.transport = e(i.read) ? i : new W(i)) : d.transport = new V({
                        data: a.data
                    }), d.reader = new n.data.readers[a.schema.type || "json"](a.schema), h = d.reader.model || {}, f = h.id, q && !g(h) && (d._set = new r({
                        model: h,
                        data: d._data,
                        reader: d.reader,
                        batch: a.batch,
                        sendAllFields: a.sendAllFields,
                        transport: d.transport,
                        change: function() {
                            var a = d.data();
                            d._total = d.reader.total(a), d._process(a)
                        },
                        modelChange: function(a) {
                            d.trigger(y, a)
                        },
                        error: function(a) {
                            d.trigger(B, a)
                        }
                    })), f && (d.id = function(a) {
                        return f(a)
                    }), d.bind([B, x, t, w, v, C, y], a)
                },
                options: {
                    data: [],
                    schema: {},
                    serverSorting: !1,
                    serverPaging: !1,
                    serverFiltering: !1,
                    serverGrouping: !1,
                    serverAggregates: !1,
                    sendAllFields: !0,
                    batch: !1
                },
                get: function(a) {
                    return this._set.get(a)
                },
                sync: function() {
                    this._set.sync()
                },
                add: function(a) {
                    return this._set.add(a)
                },
                insert: function(a, b) {
                    return this._set.insert(a, b)
                },
                cancelChanges: function() {
                    this._set.cancelChanges()
                },
                read: function(a) {
                    var b = this,
                        c = b._params(a);
                    b._queueRequest(c, function() {
                        b.trigger(C), b._ranges = [], b.transport.read({
                            data: c,
                            success: d(b.success, b),
                            error: d(b.error, b)
                        })
                    })
                },
                indexOf: function(a) {
                    return this._set.indexOf(a)
                },
                _params: function(a) {
                    var b = this;
                    return c({
                        take: b.take(),
                        skip: b.skip(),
                        page: b.page(),
                        pageSize: b.pageSize(),
                        sort: b._sort,
                        filter: b._filter,
                        group: b._group,
                        aggregate: b._aggregate
                    }, a)
                },
                _queueRequest: function(a, c) {
                    var e = this;
                    e._requestInProgress ? e._pending = {
                        callback: d(c, e),
                        options: a
                    } : (e._requestInProgress = !0, e._pending = b, c())
                },
                _dequeueRequest: function() {
                    var a = this;
                    a._requestInProgress = !1, a._pending && a._queueRequest(a._pending.options, a._pending.callback)
                },
                remove: function(a) {
                    this._set.remove(a)
                },
                error: function() {
                    this.trigger(B, arguments)
                },
                success: function(a) {
                    var b = this,
                        c = {},
                        d, e = b.options.serverGrouping === !0 && b._group && b._group.length > 0;
                    a = b.reader.parse(a), b._total = b.reader.total(a), b._aggregate && b.options.serverAggregates && (b._aggregateResult = b.reader.aggregates(a)), e ? a = b.reader.groups(a) : a = b.reader.data(a), b._data = a, b._set && b._set.data(a);
                    var f = b._skip || 0,
                        g = f + a.length;
                    b._ranges.push({
                        start: f,
                        end: g,
                        data: a
                    }), b._ranges.sort(function(a, b) {
                        return a.start - b.start
                    }), b._dequeueRequest(), b._process(a)
                },
                _process: function(a) {
                    var c = this,
                        d = {},
                        e, f = c.options.serverGrouping === !0 && c._group && c._group.length > 0;
                    c.options.serverPaging !== !0 && (d.skip = c._skip, d.take = c._take || c._pageSize, d.skip === b && c._page !== b && c._pageSize !== b && (d.skip = (c._page - 1) * c._pageSize)), c.options.serverSorting !== !0 && (d.sort = c._sort), c.options.serverFiltering !== !0 && (d.filter = c._filter), c.options.serverGrouping !== !0 && (d.group = c._group), c.options.serverAggregates !== !0 && (d.aggregate = c._aggregate, c._aggregateResult = U(a, d)), e = T(a, d), c._view = e.data, e.total !== b && !c.options.serverFiltering && (c._total = e.total), c.trigger(x)
                },
                at: function(a) {
                    return this._data[a]
                },
                data: function(a) {
                    var c = this;
                    if (a !== b) c._data = a, c._set && c._set.data(a), c._process(a);
                    else return c._data
                },
                view: function() {
                    return this._view
                },
                query: function(a) {
                    var c = this,
                        d, e = c.options.serverSorting || c.options.serverPaging || c.options.serverFiltering || c.options.serverGrouping || c.options.serverAggregates;
                    a !== b && (c._pageSize = a.pageSize, c._page = a.page, c._sort = a.sort, c._filter = a.filter, c._group = a.group, c._aggregate = a.aggregate, c._skip = a.skip, c._take = a.take, c._skip === b && (c._skip = c.skip(), a.skip = c.skip()), c._take === b && c._pageSize !== b && (c._take = c._pageSize, a.take = c._take), a.sort && (c._sort = a.sort = L(a.sort)), a.filter && (c._filter = a.filter = O(a.filter)), a.group && (c._group = a.group = Q(a.group)), a.aggregate && (c._aggregate = a.aggregate = P(a.aggregate))), e || c._data === b || c._data.length == 0 ? c.read(a) : (c.trigger(C), d = T(c._data, a), c.options.serverFiltering || (d.total !== b ? c._total = d.total : c._total = c.reader.total(c._data)), c._view = d.data, c._aggregateResult = U(c._data, a), c.trigger(x))
                },
                fetch: function(a) {
                    var b = this;
                    a && e(a) && b.one(x, a), b._query()
                },
                _query: function(a) {
                    var b = this;
                    b.query(c({}, {
                        page: b.page(),
                        pageSize: b.pageSize(),
                        sort: b.sort(),
                        filter: b.filter(),
                        group: b.group(),
                        aggregate: b.aggregate()
                    }, a))
                },
                page: function(a) {
                    var c = this,
                        d;
                    if (a !== b) a = H.max(H.min(H.max(a, 1), c.totalPages()), 1), c._query({
                        page: a
                    });
                    else {
                        d = c.skip();
                        return d !== b ? H.round((d || 0) / (c.take() || 1)) + 1 : b
                    }
                },
                pageSize: function(a) {
                    var c = this;
                    if (a !== b) c._query({
                        pageSize: a
                    });
                    else return c.take()
                },
                sort: function(a) {
                    var c = this;
                    if (a !== b) c._query({
                        sort: a
                    });
                    else return c._sort
                },
                filter: function(a) {
                    var c = this;
                    if (a === b) return c._filter;
                    c._query({
                        filter: a
                    })
                },
                group: function(a) {
                    var c = this;
                    if (a !== b) c._query({
                        group: a
                    });
                    else return c._group
                },
                total: function() {
                    return this._total
                },
                aggregate: function(a) {
                    var c = this;
                    if (a !== b) c._query({
                        aggregate: a
                    });
                    else return c._aggregate
                },
                aggregates: function() {
                    return this._aggregateResult
                },
                totalPages: function() {
                    var a = this,
                        b = a.pageSize() || a.total();
                    return H.ceil((a.total() || 0) / b)
                },
                inRange: function(a, b) {
                    var c = this,
                        d = H.min(a + b, c.total());
                    if (!c.options.serverPaging && c.data.length > 0) return !0;
                    return c._findRange(a, d).length > 0
                },
                range: function(a, c) {
                    a = H.min(a || 0, this.total());
                    var d = this,
                        e = H.max(H.floor(a / c), 0) * c,
                        f = H.min(e + c, d.total()),
                        g;
                    g = d._findRange(a, H.min(a + c, d.total()));
                    if (g.length) {
                        d._skip = a > d.skip() ? H.min(f, (d.totalPages() - 1) * d.take()) : e, d._take = c;
                        var h = d.options.serverPaging;
                        try {
                            d.options.serverPaging = !0, d._process(g)
                        } finally {
                            d.options.serverPaging = h
                        }
                    } else c !== b && (d._rangeExists(e, f) ? e < a && d.prefetch(f, c, function() {
                        d.range(a, c)
                    }) : d.prefetch(e, c, function() {
                        a > e && f < d.total() && !d._rangeExists(f, H.min(f + c, d.total())) ? d.prefetch(f, c, function() {
                            d.range(a, c)
                        }) : d.range(a, c)
                    }))
                },
                _findRange: function(a, b) {
                    var c = this,
                        d, e = c._ranges,
                        f, g = [],
                        h, i, j, k, d;
                    for (h = 0, d = e.length; h < d; h++) {
                        f = e[h];
                        if (a >= f.start && a <= f.end) {
                            var l = 0;
                            for (i = h; i < d; i++) {
                                f = e[i];
                                if (f.data.length && a + l >= f.start && l + l <= f.end) {
                                    j = 0, a + l > f.start && (j = a + l - f.start), k = f.data.length, f.end > b && (k = k - (f.end - b)), l += k - j, g = g.concat(f.data.slice(j, k));
                                    if (b <= f.end && l == b - a) return g
                                }
                            }
                            break
                        }
                    }
                    return []
                },
                skip: function() {
                    var a = this;
                    if (a._skip === b) return a._page !== b ? (a._page - 1) * (a.take() || 1) : b;
                    return a._skip
                },
                take: function() {
                    var a = this;
                    return a._take || a._pageSize
                },
                prefetch: function(a, b, c) {
                    var d = this,
                        e = H.min(a + b, d.total()),
                        f = {
                            start: a,
                            end: e,
                            data: []
                        },
                        g = {
                            take: b,
                            skip: a,
                            page: a / b + 1,
                            pageSize: b,
                            sort: d._sort,
                            filter: d._filter,
                            group: d._group,
                            aggregate: d._aggregate
                        };
                    d._rangeExists(a, e) ? c && c() : (clearTimeout(d._timeout), d._timeout = setTimeout(function() {
                        d._queueRequest(g, function() {
                            d.transport.read({
                                data: g,
                                success: function(b) {
                                    d._dequeueRequest();
                                    var e = !1;
                                    for (var g = 0, h = d._ranges.length; g < h; g++)
                                        if (d._ranges[g].start === a) {
                                            e = !0, f = d._ranges[g];
                                            break
                                        }
                                    e || d._ranges.push(f), b = d.reader.parse(b), f.data = d.reader.data(b), f.end = f.start + f.data.length, d._ranges.sort(function(a, b) {
                                        return a.start - b.start
                                    }), c && c()
                                }
                            })
                        })
                    }, 100))
                },
                _rangeExists: function(a, b) {
                    var c = this,
                        d = c._ranges,
                        e, f;
                    for (e = 0, f = d.length; e < f; e++)
                        if (d[e].start <= a && d[e].end >= b) return !0;
                    return !1
                }
            });
        Z.create = function(a) {
            a = h(a) ? {
                data: a
            } : a;
            var b = a || {},
                c = b.data,
                d = b.fields,
                e = b.table,
                f = b.select;
            !c && d && !b.transport && (e ? c = _(e, d) : f && (c = $(f, d))), b.data = c;
            return b instanceof Z ? b : new Z(b)
        }, c(!0, n.data, {
            readers: {
                json: Y
            },
            Query: K,
            DataSource: Z,
            LocalTransport: V,
            RemoteTransport: W,
            Cache: X,
            DataReader: Y
        })
    }(jQuery),
    function(a, b) {
        var c = window.kendo,
            d = c.ui.Widget,
            e = "k-invalid-msg",
            f = "k-invalid",
            g = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
            h = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
            i = ":input:not(:button,[type=submit],[type=reset])",
            j = "[type=number],[type=range]",
            k = "blur",
            l = "name",
            m = "form",
            n = "novalidate",
            o = a.proxy,
            p = function(a, b) {
                typeof b == "string" && (b = new RegExp("^(?:" + b + ")$"));
                return b.test(a)
            },
            q = function(a, b, c) {
                var d = a.val();
                if (a.filter(b).length && d !== "") return p(d, c);
                return !0
            },
            r = function(a, c) {
                if (a.length) return a[0].attributes[c] !== b;
                return !1
            },
            s = d.extend({
                init: function(a, b) {
                    var e = this;
                    d.fn.init.call(e, a, b), e._errorTemplate = c.template(e.options.errorTemplate), e.element.is(m) && e.element.attr(n, n), e._errors = {}, e._attachEvents()
                },
                options: {
                    name: "Validator",
                    errorTemplate: '<span class="k-widget k-tooltip k-tooltip-validation"><span class="k-icon k-warning"> </span> ${message}</span>',
                    messages: {
                        required: "{0} is required",
                        pattern: "{0} is not valid",
                        min: "{0} should be greater than {1}",
                        max: "{0} should be smaller than {1}",
                        step: "{0} is not valid",
                        email: "{0} is not valid email",
                        url: "{0} is not valid URL",
                        date: "{0} is not valid date"
                    },
                    rules: {
                        required: function(a) {
                            var b = a.filter("[type=checkbox]").length && a.attr("checked") !== "checked";
                            if (r(a, "required") && (a.val() === "" || b)) return !1;
                            return !0
                        },
                        pattern: function(a) {
                            if (a.filter("[type=text],[type=email],[type=url],[type=tel],[type=search]").filter("[pattern]").length && a.val() !== "") return p(a.val(), a.attr("pattern"));
                            return !0
                        },
                        min: function(a) {
                            if (a.filter(j + ",[" + c.attr("type") + "=number]").filter("[min]").length && a.val() !== "") {
                                var b = parseInt(a.attr("min"), 10) || 0,
                                    d = parseInt(a.val(), 10);
                                return b <= d
                            }
                            return !0
                        },
                        max: function(a) {
                            if (a.filter(j + ",[" + c.attr("type") + "=number]").filter("[max]").length && a.val() !== "") {
                                var b = parseInt(a.attr("max"), 10) || 0,
                                    d = parseInt(a.val(), 10);
                                return b >= d
                            }
                            return !0
                        },
                        step: function(a) {
                            if (a.filter(j + ",[" + c.attr("type") + "=number]").filter("[step]").length && a.val() !== "") {
                                var b = parseInt(a.attr("min"), 10) || 0,
                                    d = parseInt(a.attr("step"), 10) || 0,
                                    e = parseInt(a.val(), 10);
                                return (e - b) % d === 0
                            }
                            return !0
                        },
                        email: function(a) {
                            return q(a, "[type=email],[" + c.attr("type") + "=email]", g)
                        },
                        url: function(a) {
                            return q(a, "[type=url],[" + c.attr("type") + "=url]", h)
                        },
                        date: function(a) {
                            if (a.filter("[type^=date],[" + c.attr("type") + "=date]").length && a.val() !== "") return c.parseDate(a.val(), a.attr(c.attr("format"))) !== null;
                            return !0
                        }
                    }
                },
                _submit: function(a) {
                    if (!this.validate()) {
                        a.stopPropagation(), a.stopImmediatePropagation(), a.preventDefault();
                        return !1
                    }
                    return !0
                },
                _attachEvents: function() {
                    var b = this;
                    b.element.is(m) && b.element.submit(o(b._submit, b)), b.element.is(i) ? b.element.bind(k, function() {
                        b._validateInput(b.element)
                    }) : b.element.delegate(i, k, function() {
                        b._validateInput(a(this))
                    })
                },
                validate: function() {
                    var a = this,
                        b, c, d = !1,
                        e;
                    a._errors = {};
                    if (!a.element.is(i)) {
                        b = a.element.find(i);
                        for (c = 0, e = b.length; c < e; c++) a._validateInput(b.eq(c)) || (d = !0);
                        return !d
                    }
                    return a._validateInput(a.element)
                },
                _validateInput: function(b) {
                    var d = this,
                        g = d._errorTemplate,
                        h = d.options.messages,
                        i = d._checkValidity(b),
                        j = i.valid,
                        k = "." + e,
                        m = b.attr(l),
                        n = c.attr("for"),
                        o = d.element.find(k + "[" + n + "=" + m + "]").add(b.next(k)).hide(),
                        p;
                    if (!j) {
                        p = d._extractMessage(b, i.key), d._errors[m] = p;
                        var q = a(g({
                            message: p
                        })).addClass(e).attr(n, m || "");
                        o.replaceWith(q).length || q.insertAfter(b), q.show()
                    }
                    b.toggleClass(f, !j);
                    return j
                },
                _extractMessage: function(b, d) {
                    var e = this,
                        f = e.options.messages[d],
                        g = b.attr(l);
                    f = a.isFunction(f) ? f(b) : f;
                    return c.format(b.attr(c.attr(d + "-msg")) || b.attr("validationMessage") || b.attr("title") || f || "", g, b.attr(d))
                },
                _checkValidity: function(a) {
                    var b = this.options.rules,
                        c;
                    for (c in b)
                        if (!b[c](a)) return {
                            valid: !1,
                            key: c
                        };
                    return {
                        valid: !0
                    }
                },
                errors: function() {
                    var a = [],
                        b = this._errors,
                        c;
                    for (c in b) a.push(b[c]);
                    return a
                }
            });
        c.ui.plugin(s)
    }(jQuery),
    function(a, b) {
        function C(a, b, c, d) {
            b ? a.delegate(b, c, d) : a.bind(c, d)
        }

        function B(b, c) {
            try {
                return a.contains(b, c) || b == c
            } catch (d) {
                return !1
            }
        }

        function A(b, c) {
            var d = {
                element: [null]
            };
            a.each(c, function() {
                var a = this,
                    c = a.element[0];
                if (B(c, b)) {
                    d = a;
                    return !1
                }
            });
            return d
        }
        var c = window.kendo,
            d = window.document,
            e = c.ui.Widget,
            f = a.proxy,
            g = a.extend,
            h = c.support.touch,
            i = c.getOffset,
            j = {},
            k = {},
            l = {
                element: [null]
            },
            m = ".kendo-dnd",
            n = "mouseenter",
            o = h ? "touchend" : "mouseup",
            p = h ? "touchstart" : "mousedown",
            q = h ? "touchmove" : "mousemove",
            r = "keydown",
            s = "mouseleave",
            t = "selectstart",
            u = "dragstart",
            v = "dragend",
            w = "drag",
            x = "dragenter",
            y = "dragleave",
            z = "drop",
            D = e.extend({
                init: function(a, b) {
                    var c = this;
                    e.fn.init.call(c, a, b), c.element.bind(n, f(c._over, c)).bind(o, f(c._drop, c)).bind(s, f(c._out, c)), c.bind([x, y, z], c.options);
                    var d = c.options.group;
                    d in k ? k[d].push(c) : k[d] = [c]
                },
                options: {
                    name: "DropTarget",
                    group: "default"
                },
                _trigger: function(a, b) {
                    var c = this,
                        d = j[c.options.group];
                    if (d) return c.trigger(a, g({}, b, {
                        draggable: d
                    }))
                },
                _over: function(a) {
                    this._trigger(x, a)
                },
                _out: function(a) {
                    this._trigger(y, a)
                },
                _drop: function(a) {
                    var b = this,
                        c = j[b.options.group];
                    c && (c.dropped = !b._trigger(z, a))
                }
            });
        c.ui.plugin(D);
        var E = e.extend({
            init: function(a, b) {
                var c = this;
                e.fn.init.call(c, a, b), C(c.element, c.options.filter, p + m, f(c._wait, c)), c.bind([u, w, v], c.options), C(c.element, c.options.filter, u + m, !1)
            },
            options: {
                name: "Draggable",
                distance: 5,
                group: "default",
                cursorOffset: {
                    left: 10,
                    top: h ? -40 / c.support.zoomLevel() : 10
                },
                dropped: !1
            },
            _startDrag: function(b) {
                var e = this,
                    g = e.options.filter;
                e._offset = c.touchLocation(b), g ? e.currentTarget = a(b.target).is(g) ? a(b.target) : a(b.target).closest(g) : e.currentTarget = a(b.currentTarget), a(d).bind(q + m, f(e._start, e)).bind(o + m, f(e._destroy, e))
            },
            _wait: function(a) {
                var b = this;
                a.stopImmediatePropagation(), b._startDrag(a), h || a.preventDefault()
            },
            _start: function(b) {
                var e = this,
                    g = c.touchLocation(b),
                    i = g.x,
                    k = g.y,
                    l = e._offset.x - i,
                    n = e._offset.y - k,
                    p = Math.sqrt(l * l + n * n),
                    s = e.options,
                    v = s.cursorOffset,
                    w = s.hint;
                p >= s.distance && (h && b.preventDefault(), w && (e.hint = a.isFunction(w) ? a(w(e.currentTarget)) : w, e.hint.css({
                    position: "absolute",
                    zIndex: 10010,
                    left: i + v.left,
                    top: k + v.top
                }).appendTo(d.body)), j[s.group] = e, a(d).unbind(m).bind(o + m + " " + r + m, f(e._stop, e)).bind(q + m, f(e._drag, e)).bind(t + m, !1), e.dropped = !1, e._trigger(u, b) && e._destroy(b))
            },
            _drag: function(a) {
                var b = this,
                    d = b.options.cursorOffset,
                    e = c.touchLocation(a);
                if (h && c.size(k)) {
                    var f = b.options,
                        g = c.eventTarget(a);
                    if (g) {
                        var i = A(g, k[f.group]),
                            j = i.element[0],
                            m = l.element[0],
                            n = m != j;
                        n && (m != null && l._trigger(y, a), B(j, g) && i._trigger(x, a), l = i)
                    }
                }
                b._trigger(w, a), b.hint && b.hint.css({
                    left: e.x + d.left,
                    top: e.y + d.top
                })
            },
            _stop: function(a) {
                var b = this,
                    d = f(b._destroy, b),
                    e = i(b.currentTarget);
                if (a.type == o || a.keyCode == 27) {
                    if (h && c.size(k)) {
                        var g = b.options,
                            j = c.eventTarget(a);
                        if (j) {
                            var m = A(j, k[g.group]);
                            m.element[0] && (l = {
                                element: [null]
                            }, m._drop(a))
                        }
                    }
                    b._trigger(v, a), b.hint && !b.dropped ? b.hint.animate(e, "fast", d) : d()
                }
            },
            _trigger: function(a, b) {
                var d = this,
                    e = c.touchLocation(b);
                return d.trigger(a, g({}, b, {
                    currentTarget: d.currentTarget,
                    pageX: e.x,
                    pageY: e.y
                }))
            },
            _destroy: function(b) {
                var c = this;
                c.hint && c.hint.remove(), delete j[c.options.group], a(d).unbind(m)
            }
        });
        c.ui.plugin(E)
    }(jQuery),
    function(a, b) {
        function j(b) {
            return a(b).children(".k-grid-toolbar").outerHeight() + 3
        }
        var c = window.kendo,
            d = c.ui.Widget,
            e = a.proxy,
            f = "Drag a column header and drop it here to group by that column",
            g = c.template('<div class="k-group-indicator" data-#=data.ns#field="${data.field}" data-#=data.ns#title="${data.title}" data-#=data.ns#dir="${data.dir || "asc"}"><a href="\\#" class="k-link"><span class="k-icon k-arrow-${(data.dir || "asc") == "asc" ? "up" : "down"}-small">(sorted ${(data.dir || "asc") == "asc" ? "ascending": "descending"})</span>${data.title ? data.title: data.field}</a><a class="k-button k-button-icon k-button-bare"><span class="k-icon k-group-delete"></span></a></div>', {
                useWithBlock: !1
            }),
            h = function(b) {
                return a('<div class="k-header k-drag-clue" />').html(b.attr(c.attr("title")) || b.attr(c.attr("field"))).prepend('<span class="k-icon k-drag-status k-denied" />')
            },
            i = a('<div class="k-grouping-dropclue"/>'),
            k = d.extend({
                init: function(b, f) {
                    var g = this,
                        k, l = c.guid(),
                        m = e(g._intializePositions, g),
                        n = g._dropCuePositions = [];
                    d.fn.init.call(g, b, f), k = g.groupContainer = a(g.options.groupContainer, g.element).kendoDropTarget({
                        group: l,
                        dragenter: function(a) {
                            a.draggable.hint.find(".k-drag-status").removeClass("k-denied").addClass("k-add"), i.css({
                                top: j(g.element),
                                left: 0
                            }).appendTo(k)
                        },
                        dragleave: function(a) {
                            a.draggable.hint.find(".k-drag-status").removeClass("k-add").addClass("k-denied"), i.remove()
                        }
                    }).kendoDraggable({
                        filter: "div.k-group-indicator",
                        hint: h,
                        group: l,
                        dragend: function(a) {
                            g._dragEnd(this, a)
                        },
                        dragstart: function(a) {
                            var b = a.currentTarget,
                                c = parseInt(b.css("marginLeft")),
                                d = b.position().left - c;
                            m(), i.css({
                                top: j(g.element),
                                left: d
                            }).appendTo(k), this.hint.find(".k-drag-status").removeClass("k-denied").addClass("k-add")
                        },
                        drag: e(g._drag, g)
                    }).delegate(".k-button", "click", function(b) {
                        b.preventDefault(), g._removeIndicator(a(this).parent())
                    }).delegate(".k-link", "click", function(b) {
                        var d = a(this).parent(),
                            e = g.buildIndicator(d.attr(c.attr("field")), d.attr(c.attr("title")), d.attr(c.attr("dir")) == "asc" ? "desc" : "asc");
                        d.before(e).remove(), g._change(), b.preventDefault()
                    }), g.element.kendoDraggable({
                        filter: g.options.filter,
                        hint: h,
                        group: l,
                        dragend: function(a) {
                            g._dragEnd(this, a)
                        },
                        dragstart: function(a) {
                            var b, d, e, f = a.currentTarget.attr(c.attr("field"));
                            g.indicator(f) ? a.preventDefault() : (m(), n.length ? (b = n[n.length - 1].element, d = parseInt(b.css("marginRight")), e = b.position().left + b.outerWidth() + d) : e = 0, i.css({
                                top: j(g.element),
                                left: e
                            }).appendTo(k), this.hint.find(".k-drag-status").removeClass("k-denied").addClass("k-add"))
                        },
                        drag: e(g._drag, g)
                    }), g.dataSource = g.options.dataSource, g.dataSource && g.dataSource.bind("change", function() {
                        k.empty().append(a.map(this.group() || [], function(a) {
                            return g.buildIndicator(a.field, g.element.find(g.options.filter).filter("[" + c.attr("field") + "=" + a.field + "]").attr(c.attr("title")), a.dir)
                        }).join("")), g._invalidateGroupContainer()
                    })
                },
                options: {
                    name: "Groupable",
                    filter: "th"
                },
                indicator: function(b) {
                    var d = a(".k-group-indicator", this.groupContainer);
                    return a.grep(d, function(d) {
                        return a(d).attr(c.attr("field")) === b
                    })[0]
                },
                buildIndicator: function(a, b, d) {
                    return g({
                        field: a,
                        dir: d,
                        title: b,
                        ns: c.ns
                    })
                },
                descriptors: function() {
                    var b = a(".k-group-indicator", this.groupContainer);
                    return a.map(b, function(b) {
                        b = a(b);
                        return {
                            field: b.attr(c.attr("field")),
                            dir: b.attr(c.attr("dir"))
                        }
                    })
                },
                _removeIndicator: function(a) {
                    var b = this;
                    a.remove(), b._invalidateGroupContainer(), b._change()
                },
                _change: function() {
                    var a = this;
                    a.dataSource && a.dataSource.group(a.descriptors())
                },
                _dropCuePosition: function(b) {
                    var c = this._dropCuePositions;
                    if (!!i.is(":visible") && c.length != 0) {
                        var d = c[c.length - 1],
                            e = d.right,
                            f = parseInt(d.element.css("marginLeft")),
                            g = parseInt(d.element.css("marginRight"));
                        b >= e ? b = {
                            left: d.element.position().left + d.element.outerWidth() + g,
                            element: d.element,
                            before: !1
                        } : (b = a.grep(c, function(a) {
                            return a.left <= b && b <= a.right
                        })[0], b && (b = {
                            left: b.element.position().left - f,
                            element: b.element,
                            before: !0
                        }));
                        return b
                    }
                },
                _drag: function(a) {
                    var b = this._dropCuePosition(a.pageX);
                    b && i.css({
                        left: b.left
                    })
                },
                _canDrop: function(a, b, c) {
                    var d = a.next();
                    return a[0] !== b[0] && (!d[0] || b[0] !== d[0] || c > d.position().left)
                },
                _dragEnd: function(b, d) {
                    var e = this,
                        f = d.currentTarget.attr(c.attr("field")),
                        g = d.currentTarget.attr(c.attr("title")),
                        h = e.indicator(f),
                        j = e._dropCuePositions,
                        k = j[j.length - 1],
                        l;
                    b.dropped ? k ? (l = e._dropCuePosition(i.offset().left + parseInt(k.element.css("marginLeft")) + parseInt(k.element.css("marginRight"))), e._canDrop(a(h), l.element, l.left) && (l.before ? l.element.before(h || e.buildIndicator(f, g)) : l.element.after(h || e.buildIndicator(f, g)), e._change())) : (e.groupContainer.append(e.buildIndicator(f, g)), e._change()) : h && e._removeIndicator(a(h)), i.remove(), j = []
                },
                _intializePositions: function() {
                    var b = this,
                        c = a(".k-group-indicator", b.groupContainer),
                        d;
                    b._dropCuePositions = a.map(c, function(b) {
                        b = a(b), d = b.offset().left;
                        return {
                            left: d,
                            right: d + b.outerWidth(),
                            element: b
                        }
                    })
                },
                _invalidateGroupContainer: function() {
                    var a = this.groupContainer;
                    a.is(":empty") && a.html(f)
                }
            });
        c.ui.plugin(k)
    }(jQuery),
    function(a, b) {
        var c = window.kendo,
            d = c.ui,
            e = d.Widget,
            f = a.proxy,
            g = a.isFunction,
            h = a.extend,
            i = "horizontal",
            j = "vertical",
            k = "start",
            l = "resize",
            m = "resizeend",
            n = e.extend({
                init: function(a, b) {
                    var c = this;
                    e.fn.init.call(c, a, b), c.orientation = c.options.orientation.toLowerCase() != j ? i : j, c._positionMouse = c.orientation == i ? "pageX" : "pageY", c._position = c.orientation == i ? "left" : "top", c._sizingDom = c.orientation == i ? "outerWidth" : "outerHeight", c.bind([l, m, k], c.options), new d.Draggable(a, {
                        distance: 0,
                        filter: b.handle,
                        drag: f(c._resize, c),
                        dragstart: f(c._start, c),
                        dragend: f(c._stop, c)
                    })
                },
                options: {
                    name: "Resizable",
                    orientation: i
                },
                _max: function(a) {
                    var c = this,
                        d = c.hint ? c.hint[c._sizingDom]() : 0,
                        e = c.options.max;
                    return g(e) ? e(a) : e !== b ? c._initialElementPosition + e - d : e
                },
                _min: function(a) {
                    var c = this,
                        d = c.options.min;
                    return g(d) ? d(a) : d !== b ? c._initialElementPosition + d : d
                },
                _start: function(b) {
                    var c = this,
                        d = c.options.hint,
                        e = a(b.currentTarget);
                    c._initialMousePosition = b[c._positionMouse], c._initialElementPosition = e.position()[c._position], d && (c.hint = g(d) ? a(d(e)) : d, c.hint.css({
                        position: "absolute"
                    }).css(c._position, c._initialElementPosition).appendTo(c.element)), c.trigger(k, b), c._maxPosition = c._max(b), c._minPosition = c._min(b), a(document.body).css("cursor", e.css("cursor"))
                },
                _resize: function(c) {
                    var d = this,
                        e = a(c.currentTarget),
                        f = d._maxPosition,
                        g = d._minPosition,
                        i = d._initialElementPosition + (c[d._positionMouse] - d._initialMousePosition),
                        j;
                    j = g !== b ? Math.max(g, i) : i, d.position = j = f !== b ? Math.min(f, j) : j, d.hint && d.hint.toggleClass(d.options.invalidClass || "", j == f || j == g).css(d._position, j), d.trigger(l, h(c, {
                        position: j
                    }))
                },
                _stop: function(b) {
                    var c = this;
                    c.hint && c.hint.remove(), c.trigger(m, h(b, {
                        position: c.position
                    })), a(document.body).css("cursor", "")
                }
            });
        c.ui.plugin(n)
    }(jQuery),
    function(a, b) {
        var c = window.kendo,
            d = a.proxy,
            e = "dir",
            f = "asc",
            g = "single",
            h = "field",
            i = "desc",
            j = ".k-link",
            k = c.ui.Widget,
            l = k.extend({
                init: function(a, b) {
                    var c = this,
                        e;
                    k.fn.init.call(c, a, b), c.dataSource = c.options.dataSource.bind("change", d(c.refresh, c)), e = c.element.find(j), e[0] || (e = c.element.wrapInner('<a class="k-link" href="#"/>').find(j)), c.link = e, c.element.click(d(c._click, c))
                },
                options: {
                    name: "Sortable",
                    mode: g,
                    allowUnsort: !0
                },
                refresh: function() {
                    var b = this,
                        c = b.dataSource.sort() || [],
                        d, g, j, k, l = b.element,
                        m = l.data(h);
                    l.removeData(e);
                    for (d = 0, g = c.length; d < g; d++) j = c[d], m == j.field && l.data(e, j.dir);
                    k = l.data(e), l.find(".k-arrow-up,.k-arrow-down").remove(), k === f ? a('<span class="k-icon k-arrow-up" />').appendTo(b.link) : k === i && a('<span class="k-icon k-arrow-down" />').appendTo(b.link)
                },
                _click: function(a) {
                    var c = this,
                        d = c.element,
                        j = d.data(h),
                        k = d.data(e),
                        l = c.options,
                        m = c.dataSource.sort() || [],
                        n, o;
                    k === f ? k = i : k === i && l.allowUnsort ? k = b : k = f;
                    if (l.mode === g) m = [{
                        field: j,
                        dir: k
                    }];
                    else if (l.mode === "multiple") {
                        for (n = 0, o = m.length; n < o; n++)
                            if (m[n].field === j) {
                                m.splice(n, 1);
                                break
                            }
                        m.push({
                            field: j,
                            dir: k
                        })
                    }
                    a.preventDefault(), c.dataSource.sort(m)
                }
            });
        c.ui.plugin(l)
    }(jQuery),
    function(a, b) {
        var c = window.kendo,
            d = c.keys,
            e = c.support.touch,
            f = c.ui.Widget,
            g = a.proxy,
            h = e ? "touchend" : "mouseup",
            i = e ? "touchstart" : "mousedown",
            j = e ? "touchmove" : "mousemove",
            k = "k-state-selected",
            l = "k-state-selecting",
            m = "k-selectable",
            n = "selectstart",
            o = a(document),
            p = "change",
            q = "k-state-unselecting",
            r = f.extend({
                init: function(b, c) {
                    var d = this;
                    f.fn.init.call(d, b, c), d._marquee = a("<div class='k-marquee'></div>"), d._lastActive = null, d._moveDelegate = g(d._move, d), d._upDelegate = g(d._up, d), d.element.addClass(m), d.element.delegate("." + m + " " + d.options.filter, i, g(d._down, d)), d.bind([p], d.options)
                },
                options: {
                    name: "Selectable",
                    filter: ">*",
                    multiple: !1
                },
                _collide: function(a, b) {
                    var c = a.offset(),
                        d = {
                            left: c.left,
                            top: c.top,
                            right: c.left + a.outerWidth(),
                            bottom: c.top + a.outerHeight()
                        };
                    return !(d.left > b.right || d.right < b.left || d.top > b.bottom || d.bottom < b.top)
                },
                _position: function(a) {
                    var b = this._originalPosition,
                        c = b.x,
                        d = b.y,
                        e = a.pageX,
                        f = a.pageY;
                    if (c > e) {
                        var g = e;
                        e = c, c = g
                    }
                    if (d > f) {
                        var g = f;
                        f = d, d = g
                    }
                    return {
                        top: d,
                        right: e,
                        left: c,
                        bottom: f
                    }
                },
                _down: function(b) {
                    var d = this,
                        e, f = b.ctrlKey,
                        g = b.shiftKey,
                        i = !d.options.multiple;
                    d._downTarget = a(b.currentTarget), d._shiftPressed = g, o.unbind(h, d._upDelegate).bind(h, d._upDelegate), d._originalPosition = {
                        x: b.pageX,
                        y: b.pageY
                    }, i || o.unbind(j, d._moveDelegate).bind(j, d._moveDelegate), i || (a("body").append(d._marquee), d._marquee.css({
                        left: b.clientX + 1,
                        top: b.clientY + 1,
                        width: 0,
                        height: 0
                    })), e = d._downTarget.hasClass(k), (i || !f && !g) && d.element.find(d.options.filter + "." + k).not(d._downTarget).removeClass(k), f && (d._lastActive = d._downTarget), e && (f || g) ? (d._downTarget.addClass(k), g || d._downTarget.addClass(q)) : (!c.support.touch || !i) && d._downTarget.addClass(l)
                },
                _move: function(b) {
                    var c = this,
                        d = c._position(b),
                        e = b.ctrlKey,
                        f, g;
                    c._marquee.css({
                        left: d.left,
                        top: d.top,
                        width: d.right - d.left,
                        height: d.bottom - d.top
                    }), o.unbind(n, !1).bind(n, !1), c.element.find(c.options.filter).each(function() {
                        f = a(this), g = c._collide(f, d), g ? f.hasClass(k) ? c._downTarget[0] !== f[0] && e && f.removeClass(k).addClass(q) : !f.hasClass(l) && !f.hasClass(q) && f.addClass(l) : f.hasClass(l) ? f.removeClass(l) : e && f.hasClass(q) && f.removeClass(q).addClass(k)
                    })
                },
                _up: function(a) {
                    var b = this,
                        d = b.options,
                        e = !d.multiple;
                    o.unbind(j, b._moveDelegate).unbind(h, b._upDelegate), e || b._marquee.remove(), c.support.touch && e && b._downTarget.addClass(l), !e && b._shiftPressed === !0 ? b.selectRange(b._firstSelectee(), b._downTarget) : (b.element.find(d.filter + "." + q).removeClass(q).removeClass(k), b.value(b.element.find(d.filter + "." + l))), b._shiftPressed || (b._lastActive = b._downTarget), b._downTarget = null, b._shiftPressed = !1
                },
                value: function(a) {
                    var b = this,
                        c = g(b._selectElement, b);
                    if (a) a.each(function() {
                        c(this)
                    }), b.trigger(p, {});
                    else return b.element.find(b.options.filter + "." + k)
                },
                _firstSelectee: function() {
                    var a = this,
                        b;
                    if (a._lastActive !== null) return a._lastActive;
                    b = a.value();
                    return b.length > 0 ? b[0] : a.element.find(a.options.filter)
                },
                _selectElement: function(b) {
                    var c = a(b),
                        d = this.trigger("select", {
                            element: b
                        });
                    c.removeClass(l), d || c.addClass(k)
                },
                clear: function() {
                    var a = this;
                    a.element.find(a.options.filter + "." + k).removeClass(k)
                },
                selectRange: function(b, c) {
                    var d = this,
                        e = !1,
                        f = g(d._selectElement, d),
                        h;
                    b = a(b)[0], c = a(c)[0], d.element.find(d.options.filter).each(function() {
                        h = a(this);
                        if (e) f(this), e = this !== c;
                        else if (this === b) e = b !== c, f(this);
                        else if (this === c) {
                            var d = b;
                            b = c, c = d, e = !0, f(this)
                        } else h.removeClass(k)
                    }), d.trigger(p, {})
                }
            });
        c.ui.plugin(r)
    }(jQuery),
    function(a, b) {
        function g(a, b, d, e) {
            return a({
                idx: b,
                text: d,
                ns: c.ns,
                numeric: e
            })
        }
        var c = window.kendo,
            d = c.ui,
            e = d.Widget,
            f = a.proxy,
            h = e.extend({
                init: function(b, d) {
                    var g = this;
                    e.fn.init.call(g, b, d), d = g.options, g.dataSource = d.dataSource, g.linkTemplate = c.template(g.options.linkTemplate), g.selectTemplate = c.template(g.options.selectTemplate), g.dataSource.bind("change", f(g.refresh, g)), g.list = a('<ul class="k-pager k-reset k-numeric" />').appendTo(g.element).html(g.selectTemplate({
                        text: 1
                    })), g.element.delegate("a", "click", f(g._click, g))
                },
                options: {
                    name: "Pager",
                    selectTemplate: '<li><span class="k-state-active">#=text#</span></li>',
                    linkTemplate: '<li><a href="\\#" class="k-link" data-#=ns#page="#=idx#">#=text#</a></li>',
                    buttonCount: 10
                },
                refresh: function() {
                    var a = this,
                        b, c, d = 1,
                        e = "",
                        f, h = a.page(),
                        i = a.totalPages(),
                        j = a.linkTemplate,
                        k = a.options.buttonCount;
                    h > k && (f = h % k, d = f == 0 ? h - k + 1 : h - f + 1), c = Math.min(d + k - 1, i), d > 1 && (e += g(j, d - 1, "...", !1));
                    for (b = d; b <= c; b++) e += g(b == h ? a.selectTemplate : j, b, b, !0);
                    c < i && (e += g(j, b, "...", !1)), a.list.empty().append(e)
                },
                _click: function(b) {
                    var d = a(b.currentTarget).attr(c.attr("page"));
                    b.preventDefault(), this.dataSource.page(d), this.trigger("change", {
                        index: d
                    })
                },
                totalPages: function() {
                    return Math.ceil((this.dataSource.total() || 0) / this.pageSize())
                },
                pageSize: function() {
                    return this.dataSource.pageSize() || this.dataSource.total()
                },
                page: function() {
                    return this.dataSource.page() || 1
                }
            });
        d.plugin(h)
    }(jQuery),
    function(a, b) {
        function D(b, c) {
            return b === c || a.contains(b, c)
        }
        var c = window.kendo,
            d = c.ui,
            e = c.support.touch,
            f = c.getOffset,
            g = "open",
            h = "close",
            i = "center",
            j = "left",
            k = "right",
            l = "top",
            m = "bottom",
            n = "absolute",
            o = "hidden",
            p = "body",
            q = "location",
            r = "position",
            s = "visible",
            t = "offset",
            u = "fitted",
            v = "effects",
            w = "k-state-active",
            x = "k-state-border",
            y = ".k-picker-wrap, .k-dropdown-wrap, .k-link",
            z = e ? "touchstart" : "mousedown",
            A = a.extend,
            B = a.proxy,
            C = d.Widget,
            E = C.extend({
                init: function(b, d) {
                    var e = this;
                    C.fn.init.call(e, b, d), d = e.options, e.collisions = e.options.collision.split(" "), e.collisions.length === 1 && e.collisions.push(e.collisions[0]), e.element.hide().addClass("k-popup k-group k-reset").css({
                        position: n
                    }).appendTo(a(d.appendTo)), e.wrapper = a(), d.animation === !1 && (d.animation = {
                        open: {
                            show: !0,
                            effects: {}
                        },
                        close: {
                            hide: !0,
                            effects: {}
                        }
                    }), v in d.animation.close || (d.animation.close = A({
                        reverse: !0
                    }, d.animation.open, d.animation.close)), A(d.animation.open, {
                        complete: function() {
                            e.wrapper.css({
                                overflow: s
                            }).css("overflow")
                        }
                    }), A(d.animation.close, {
                        complete: function() {
                            e.wrapper.hide();
                            var b = e.wrapper.data(q),
                                f = a(d.anchor),
                                g, h;
                            b && e.wrapper.css(b), d.anchor != p && (g = f.hasClass(x + "-down") ? "down" : "up", h = x + "-" + g, f.removeClass(h).children(y).removeClass(w).removeClass(h), e.element.removeClass(x + "-" + c.directions[g].reverse)), e._closing = !1
                        }
                    }), e.bind([g, h], d), a(document.documentElement).bind(z, B(e._mousedown, e)), a(window).bind("resize scroll", function() {
                        e.close()
                    }), d.toggleTarget && a(d.toggleTarget).bind(d.toggleEvent, B(e.toggle, e))
                },
                options: {
                    name: "Popup",
                    toggleEvent: "click",
                    origin: m + " " + j,
                    position: l + " " + j,
                    anchor: p,
                    appendTo: p,
                    collision: "flip fit",
                    animation: {
                        open: {
                            effects: "slideIn:down",
                            transition: !/chrome/i.test(navigator.userAgent),
                            duration: 200,
                            show: !0
                        },
                        close: {
                            duration: 100,
                            show: !1,
                            hide: !0
                        }
                    }
                },
                open: function() {
                    var b = this,
                        d = b.element,
                        e = b.options,
                        f = "down",
                        h, i, j = a(e.anchor);
                    if (!b.visible()) {
                        if (d.data("animating") || b.trigger(g)) return;
                        b.wrapper = i = c.wrap(d).css({
                            overflow: o,
                            display: "block",
                            position: n
                        }), i.css(r), e.appendTo == p && i.css(l, "-10000px"), h = A({}, e.animation.open), b._update() && (typeof h.effects == "string" && h.effects.match(f) && (f = "up"), h.effects = c.parseEffects(h.effects, !0));
                        if (e.anchor != p) {
                            var k = x + "-" + f;
                            d.addClass(x + "-" + c.directions[f].reverse), j.addClass(k).children(y).addClass(w).addClass(k)
                        }
                        d.data(v, h.effects).kendoStop(!0).kendoAnimate(h)
                    }
                },
                toggle: function() {
                    var a = this;
                    a[a.visible() ? h : g]()
                },
                visible: function() {
                    return this.element.is(":" + s)
                },
                close: function() {
                    var a = this,
                        b = a.options,
                        d, e;
                    if (a.visible()) {
                        if (a._closing || a.trigger(h)) return;
                        d = A({}, b.animation.close), e = a.element.data(v), a.wrapper = c.wrap(a.element).css({
                            overflow: o
                        }), e && (d.effects = e), a._closing = !0, a.element.kendoStop(!0).kendoAnimate(d)
                    }
                },
                _mousedown: function(b) {
                    var c = this,
                        d = c.element[0],
                        e = c.options,
                        f = a(e.anchor)[0],
                        g = e.toggleTarget,
                        h = b.target,
                        i = a(h).closest(".k-popup")[0];
                    (!i || i === c.element[0]) && !D(d, h) && !D(f, h) && (!g || !D(a(g)[0], h)) && c.close()
                },
                _update: function() {
                    return this._position(a(window))
                },
                _fit: function(a, b, c) {
                    var d = 0;
                    a + b > c && (d = c - (a + b)), a < 0 && (d = a);
                    return d
                },
                _flip: function(a, b, c, d, e, f, g) {
                    var h = 0;
                    g = g || b, f !== e && f !== i && e !== i && (a + g > d && (h += -(c + b)), a + h < 0 && (h += c + b));
                    return h
                },
                _position: function(b) {
                    var d = this,
                        e = d.element,
                        g = d.wrapper,
                        h = d.options,
                        i = a(h.anchor),
                        j = h.origin.toLowerCase().split(" "),
                        k = h.position.toLowerCase().split(" "),
                        l = d.collisions,
                        m = !1,
                        n = c.support.zoomLevel(),
                        o = 10002;
                    i.parents().andSelf().each(function() {
                        var b = a(this).css("zIndex");
                        if (!isNaN(b)) {
                            b = Number(b) + 1;
                            return !1
                        }
                    }), g.css("zIndex", o), h.appendTo === E.fn.options.appendTo && (g.css(d._align(j, k)), m = !0);
                    var p = f(g, r),
                        s = f(g),
                        t = i.offsetParent().parent(".k-animation-container");
                    t.length && t.data(u) && (p = f(g, r), s = f(g)), s = {
                        top: s.top - (window.pageYOffset || document.documentElement.scrollTop || 0),
                        left: s.left - (window.pageXOffset || document.documentElement.scrollLeft || 0)
                    }, d.wrapper.data(q) || g.data(q, A({}, p));
                    var v = A({}, s),
                        w = A({}, p);
                    l[0] === "fit" && (w.top += d._fit(v.top, g.outerHeight(), b.height() / n)), l[1] === "fit" && (w.left += d._fit(v.left, g.outerWidth(), b.width() / n)), w.left != p.left || w.top != p.top ? g.data(u, !0) : g.removeData(u);
                    var x = A({}, w);
                    l[0] === "flip" && (w.top += d._flip(v.top, e.outerHeight(), i.outerHeight(), b.height() / n, j[0], k[0], g.outerHeight())), l[1] === "flip" && (w.left += d._flip(v.left, e.outerWidth(), i.outerWidth(), b.width() / n, j[1], k[1], g.outerWidth())), g.css(w);
                    return w.left != x.left || w.top != x.top
                },
                _align: function(b, c) {
                    var d = this,
                        e = d.wrapper,
                        g = a(d.options.anchor),
                        h = b[0],
                        j = b[1],
                        l = c[0],
                        n = c[1],
                        o = f(g),
                        p = e.outerWidth(),
                        q = e.outerHeight(),
                        r = g.outerWidth(),
                        s = g.outerHeight(),
                        t = o.top,
                        u = o.left,
                        v = Math.round;
                    h === m && (t += s), h === i && (t += v(s / 2)), l === m && (t -= q), l === i && (t -= v(q / 2)), j === k && (u += r), j === i && (u += v(r / 2)), n === k && (u -= p), n === i && (u -= v(p / 2));
                    return {
                        top: t,
                        left: u
                    }
                }
            });
        d.plugin(E)
    }(jQuery),
    function(a, b) {
        function q(b, c) {
            return b === c || a.contains(b, c)
        }
        var c = window.kendo,
            d = c.ui,
            e = d.Widget,
            f = c.keys,
            g = "id",
            h = "li",
            i = c.support.touch ? "touchend" : "click",
            j = "change",
            k = "character",
            l = "k-state-focused",
            m = "k-state-hover",
            n = "k-loading",
            o = "select",
            p = a.proxy,
            r = e.extend({
                init: function(b, c) {
                    var d = this,
                        f;
                    e.fn.init.call(d, b, c), d._template(), d.ul = a('<ul class="k-list k-reset"/>').css({
                        overflow: "auto"
                    }).mousedown(function() {
                        setTimeout(function() {
                            clearTimeout(d._bluring)
                        }, 0)
                    }).delegate(h, i, p(d._click, d)).delegate(h, "mouseenter", function() {
                        a(this).addClass(m)
                    }).delegate(h, "mouseleave", function() {
                        a(this).removeClass(m)
                    }), d.list = a("<div class='k-list-container'/>").append(d.ul), f = d.element.attr(g), f && d.list.attr(g, f + "-list"), a(document.documentElement).bind("mousedown", p(d._mousedown, d))
                },
                current: function(a) {
                    var c = this;
                    if (a !== b) c._current && c._current.removeClass(l), a ? (a.addClass(l), c._scroll(a[0])) : c._selected = a, c._current = a;
                    else return c._current
                },
                _accessors: function() {
                    var a = this,
                        b = a.element,
                        d = a.options,
                        e = c.getter,
                        f = b.attr(c.attr("text-field")),
                        g = b.attr(c.attr("value-field"));
                    f && (d.dataTextField = f), g && (d.dataValueField = g), a._text = e(d.dataTextField), a._value = e(d.dataValueField)
                },
                _blur: function() {
                    var a = this;
                    a._change(), a.close()
                },
                _change: function() {
                    var a = this,
                        b = a.value();
                    b !== a._old && (a.trigger(j), a.element.trigger(j), a._old = b)
                },
                _click: function(b) {
                    this._accept(a(b.currentTarget))
                },
                _focus: function(a) {
                    var b = this;
                    b.select(a), b._blur(), b._focused[0] !== document.activeElement && b._focused.focus()
                },
                _height: function(a) {
                    if (a) {
                        var b = this,
                            c = b.list,
                            d = b.popup.visible(),
                            e = b.options.height;
                        c = c.add(c.parent(".k-animation-container")).show().height(b.ul[0].scrollHeight > e ? e : "auto"), d || c.hide()
                    }
                },
                _popup: function() {
                    var a = this,
                        b = a.list,
                        c = a.options,
                        e = a.wrapper,
                        f;
                    a.popup = new d.Popup(b, {
                        anchor: e,
                        open: c.open,
                        close: c.close,
                        animation: c.animation
                    }), f = e.outerWidth() - (b.outerWidth() - b.width()), b.css({
                        fontFamily: e.css("font-family"),
                        width: f
                    })
                },
                _toggleHover: function(b) {
                    c.support.touch || a(b.currentTarget).toggleClass(m, b.type === "mouseenter")
                },
                _toggle: function(a) {
                    var c = this;
                    a = a !== b ? a : !c.popup.visible(), c[a ? "open" : "close"]()
                },
                _scroll: function(a) {
                    if (!!a) {
                        var b = this.ul[0],
                            c = a.offsetTop,
                            d = a.offsetHeight,
                            e = b.scrollTop,
                            f = b.clientHeight,
                            g = c + d;
                        b.scrollTop = e > c ? c : g > e + f ? g - f : e
                    }
                },
                _template: function() {
                    var a = this,
                        b = a.options,
                        d = b.template,
                        e = b.dataTextField || "";
                    d ? (d = c.template(d), a.template = function(a) {
                        return "<li class='k-item' unselectable='on'>" + d(a) + "</li>"
                    }) : a.template = c.template("<li class='k-item' unselectable='on'>${data" + (e ? "." : "") + e + "}</li>", {
                        useWithBlock: !1
                    })
                }
            });
        a.extend(r, {
            caret: function(a) {
                var b, c = a.ownerDocument.selection;
                c ? b = Math.abs(c.createRange().moveStart(k, -a.value.length)) : b = a.selectionStart;
                return b
            },
            selectText: function(a, b, c) {
                if (a.createTextRange) {
                    var d = a.createTextRange();
                    d.collapse(!0), d.moveStart(k, b), d.moveEnd(k, c - b), d.select()
                } else a.setSelectionRange(b, c)
            },
            inArray: function(a, b) {
                var c = -1;
                if (!a || a.parentNode !== b) return c;
                c = 0;
                while (a = a.previousSibling) c++;
                return c
            }
        }), c.ui.List = r, d.Select = r.extend({
            init: function(a, b) {
                r.fn.init.call(this, a, b)
            },
            close: function() {
                this.popup.close()
            },
            _accessor: function(a, c) {
                var d = this.element[0],
                    e = d.nodeName == o,
                    f;
                if (a === b) {
                    e ? (f = d.options[d.selectedIndex], a = f.value || f.text) : a = d.value;
                    return a
                }
                e ? d.selectedIndex = c : d.value = a
            },
            _hideBusy: function() {
                var a = this;
                clearTimeout(a._busy), a._arrow.removeClass(n)
            },
            _showBusy: function() {
                var a = this;
                a._busy || (a._busy = setTimeout(function() {
                    a._arrow.addClass(n)
                }, 100))
            },
            _data: function() {
                return this.dataSource.view()
            },
            _dataSource: function() {
                var b = this,
                    d, e = b.element,
                    f = b.options,
                    g = f.dataSource || {};
                g = a.isArray(g) ? {
                    data: g
                } : g, b.element.is(o) && (d = e.children(":selected"), d[0] && (f.index = d.index()), g.select = e, g.fields = [{
                    field: f.dataTextField
                }, {
                    field: f.dataValueField
                }]), b.dataSource = c.data.DataSource.create(g).bind(j, p(b.refresh, b)).bind("requestStart", p(b._showBusy, b))
            },
            _enable: function() {
                var a = this,
                    b = a.options;
                a.element.prop("disabled") && (b.enable = !1), a.enable(b.enable)
            },
            _index: function(a) {
                var c = this,
                    d, e, f = c._data(),
                    g;
                for (d = 0, e = f.length; d < e; d++) {
                    g = c._value(f[d]), g === b && (g = c._text(f[d]));
                    if (g == a) return d
                }
                return -1
            },
            _get: function(b) {
                var c = this,
                    d, e = c._data(),
                    f;
                if (typeof b == "function")
                    for (d = 0, f = e.length; d < f; d++)
                        if (b(e[d])) {
                            b = d;
                            break
                        }
                d = -1;
                if (typeof b == "number") {
                    if (b < 0) return a();
                    b = a(c.ul[0].childNodes[b])
                }
                b && b.nodeType && (b = a(b));
                return b
            },
            _move: function(a) {
                var b = this,
                    c = a.keyCode,
                    d = b.ul[0],
                    e = b._current,
                    g = c === f.DOWN,
                    h;
                c === f.UP || g ? (a.altKey ? b.toggle(g) : g ? (b.select(e ? e[0].nextSibling : d.firstChild), a.preventDefault()) : (b.select(e ? e[0].previousSibling : d.lastChild), a.preventDefault()), h = !0) : c === f.ENTER || c === f.TAB ? (b.popup.visible() && a.preventDefault(), b._accept(e), h = !0) : c === f.ESC && (b.close(), h = !0);
                return h
            },
            _options: function(a) {
                var c = this,
                    d = c.element,
                    e = d[0].selectedIndex,
                    f = c.value(),
                    g = a.length,
                    h = "",
                    i, j, k, l, m;
                for (m = 0; m < g; m++) {
                    i = "<option", j = a[m], k = c._text(j), l = c._value(j);
                    if (l || l === 0) i += ' value="' + l + '"';
                    i += ">", k !== b && (i += k), i += "</option>", h += i
                }
                d.html(h), d[0].selectedIndex = e
            },
            _reset: function() {
                var a = this,
                    b = a.element;
                b.closest("form").bind("reset", function() {
                    setTimeout(function() {
                        a.value(b[0].value)
                    })
                })
            }
        })
    }(jQuery),
    function(a, b) {
        function T(a) {
            var d = I[a.start],
                e = I[a.depth],
                f = a.format || c.culture().calendar.patterns.d;
            isNaN(d) && (d = 0, a.start = p);
            if (e === b || e > d) a.depth = p;
            f.slice(0, 3) === "{0:" && (f = f.slice(3, f.length - 1)), a.format = f
        }

        function S() {
            a(this).removeClass(u)
        }

        function R() {
            a(this).addClass(u)
        }

        function Q(a, b, c) {
            b = b instanceof H ? b.getFullYear() : a.getFullYear() + c * b, a.setFullYear(b)
        }

        function P(a, b) {
            return a.slice(b).concat(a.slice(0, b))
        }

        function O(a, b, c) {
            return +a >= +b && +a <= +c
        }

        function N(a, b, c) {
            var d = new H;
            d = new H(d.getFullYear(), d.getMonth(), d.getDate()), a && (d = new H(a)), b > d ? d = new H(b) : c < d && (d = new H(c));
            return d
        }

        function M(a, b, c) {
            var d = a.getFullYear(),
                e = b.getFullYear(),
                f = e,
                g = 0;
            c && (e = e - e % c, f = e - e % c + c - 1), d > f ? g = 1 : d < e && (g = -1);
            return g
        }

        function L(a) {
            var b = 0,
                c, d = a.view,
                e = a.min,
                f = a.max,
                g = a.start,
                h = a.setter,
                i = a.build,
                l = a.cells || 12,
                m = a.perRow || 4,
                n = a.toDateString,
                o = a.content || j,
                p = a.empty || k,
                q = a.html || '<table class="k-content k-meta-view" cellspacing="0"><tbody><tr>';
            for (; b < l; b++) b > 0 && b % m == 0 && (q += "</tr><tr>"), c = i(g, b), q += O(g, e, f) ? o(c) : p(c), h(g, 1);
            return q + "</tr></tbody></table>"
        }
        var c = window.kendo,
            d = c.ui,
            e = d.Widget,
            f = c.parseDate,
            g = c.template,
            h = c.support.transitions,
            i = h ? h.css + "transform-origin" : "",
            j = g('<td#=data.cssClass#><a class="k-link" href="\\#" data-#=data.ns#value="#=data.dateString#">#=data.value#</a></td>', {
                useWithBlock: !1
            }),
            k = g("<td>&nbsp;</td>", {
                useWithBlock: !1
            }),
            l = c.support.touch ? "touchend" : "click",
            m = "min",
            n = "left",
            o = "slide",
            p = "month",
            q = "century",
            r = "change",
            s = "navigate",
            t = "value",
            u = "k-state-hover",
            v = "k-state-disabled",
            w = "k-other-month",
            x = ' class="' + w + '"',
            y = "td:has(.k-link)",
            z = "mouseenter",
            A = "mouseleave",
            B = 6e4,
            C = 864e5,
            D = "_prevArrow",
            E = "_nextArrow",
            F = a.proxy,
            G = a.extend,
            H = Date,
            I = {
                month: 0,
                year: 1,
                decade: 2,
                century: 3
            },
            J = e.extend({
                init: function(a, b) {
                    var c = this,
                        d;
                    e.fn.init.call(c, a, b), a = c.element, b = c.options, a.addClass("k-widget k-calendar"), c._templates(), c._header(), b.footer && c._footer(), a.delegate(y, z, R).delegate(y, A, S).delegate(y, l, F(c._click, c)), c.bind([r, s], b), d = b.value, T(b), c._index = I[b.start], c._current = new H(N(d, b.min, b.max)), c.value(d)
                },
                options: {
                    name: "Calendar",
                    value: null,
                    min: new H(1900, 0, 1),
                    max: new H(2099, 11, 31),
                    footer: '#= kendo.toString(data,"D") #',
                    start: p,
                    depth: p,
                    animation: {
                        horizontal: {
                            effects: o,
                            duration: 500,
                            divisor: 2
                        },
                        vertical: {
                            effects: "zoomIn",
                            duration: 400
                        }
                    }
                },
                min: function(a) {
                    return this._option(m, a)
                },
                max: function(a) {
                    return this._option("max", a)
                },
                navigateToPast: function() {
                    this._navigate(D, -1)
                },
                navigateToFuture: function() {
                    this._navigate(E, 1)
                },
                navigateUp: function() {
                    var a = this,
                        b = a._index;
                    a._title.hasClass(v) || a.navigate(a._current, ++b)
                },
                navigateDown: function(a) {
                    var b = this,
                        c = b._index,
                        d = b.options.depth;
                    if (!!a) {
                        if (c === I[d]) {
                            +b._value != +a && (b.value(a), b.trigger(r));
                            return
                        }
                        b.navigate(a, --c)
                    }
                },
                navigate: function(c, d) {
                    d = isNaN(d) ? I[d] : d;
                    var e = this,
                        f = e.options,
                        g = f.min,
                        h = f.max,
                        i = e._title,
                        j = e._table,
                        k = e._value,
                        l = e._current,
                        m = c && +c > +l,
                        n = d !== b && d !== e._index,
                        o, p, r;
                    if (!j || !j.parent().data("animating")) {
                        c ? e._current = c = new H(N(c, g, h)) : c = l, d === b ? d = e._index : e._index = d, e._view = p = K.views[d], r = p.compare, i.toggleClass(v, d === I[q]), e[D].toggleClass(v, r(c, g) < 1), e[E].toggleClass(v, r(c, h) > -1);
                        if (!j || e._changeView) i.html(p.title(c)), e._table = o = a(p.content(G({
                            min: g,
                            max: h,
                            date: c
                        }, e[p.name]))), e._animate({
                            from: j,
                            to: o,
                            vertical: n,
                            future: m
                        }), e.trigger(s);
                        d === I[f.depth] && k && e._class("k-state-selected", p.toDateString(k)), e._changeView = !0
                    }
                },
                value: function(a) {
                    var c = this,
                        d = c._view,
                        e = c.options,
                        g = e.min,
                        h = e.max;
                    if (a === b) return c._value;
                    a = f(a, e.format), a !== null && (a = new H(a), O(a, g, h) || (a = null)), c._value = a, c._changeView = !a || d && d.compare(a, c._current) !== 0, c.navigate(a)
                },
                _animate: function(a) {
                    var b = this,
                        c = a.from,
                        d = a.to;
                    c ? !c.is(":visible") || b.options.animation === !1 ? (d.insertAfter(c), c.remove()) : b[a.vertical ? "_vertical" : "_horizontal"](c, d, a.future) : d.insertAfter(b.element[0].firstChild)
                },
                _horizontal: function(a, b, c) {
                    var d = this,
                        e = d.options.animation.horizontal,
                        f = e.effects,
                        g = a.outerWidth();
                    f && f.indexOf(o) != -1 && (a.add(b).css({
                        width: g
                    }), a.wrap("<div/>"), a.parent().css({
                        position: "relative",
                        width: g * 2,
                        "float": n,
                        left: c ? 0 : -g
                    }), b[c ? "insertAfter" : "insertBefore"](a), G(e, {
                        effects: o + ":" + (c ? n : "right"),
                        complete: function() {
                            a.remove(), b.unwrap()
                        }
                    }), a.parent().kendoStop(!0, !0).kendoAnimate(e))
                },
                _vertical: function(a, b) {
                    var c = this,
                        d = c.options.animation.vertical,
                        e = d.effects,
                        f = a.outerWidth(),
                        g, h;
                    e && e.indexOf("zoomIn") != -1 && (b.css({
                        position: "absolute",
                        top: a.prev().outerHeight(),
                        left: 0
                    }).insertBefore(a), i && (g = c._cellByDate(c._view.toDateString(c._current)), h = g.position(), h = h.left + parseInt(g.width() / 2) + "px" + " " + (h.top + parseInt(g.height() / 2) + "px"), b.css(i, h)), a.kendoStop(!0, !0).kendoAnimate({
                        effects: "fadeOut",
                        duration: 600,
                        complete: function() {
                            a.remove(), b.css({
                                position: "static",
                                top: 0,
                                left: 0
                            })
                        }
                    }), b.kendoStop(!0, !0).kendoAnimate(d))
                },
                _click: function(b) {
                    var d = this,
                        e = d.options,
                        f = d._current,
                        g = a(b.currentTarget.firstChild),
                        h = g.attr(c.attr(t)).split("/");
                    h = new H(h[0], h[1], h[2]), b.preventDefault(), g.parent().hasClass(w) ? f = h : d._view.setDate(f, h), d.navigateDown(N(f, e.min, e.max))
                },
                _focus: function(a) {
                    var b = this,
                        c = b._view;
                    c.compare(a, b._current) !== 0 ? b.navigate(a) : b._current = a, b._class("k-state-focused", c.toDateString(a))
                },
                _footer: function() {
                    var a = this,
                        b = a.element,
                        d = new H;
                    b.find(".k-footer")[0] || b.append('<div class="k-footer"><a href="#" class="k-link k-nav-today"></a></div>'), a._today = b.find(".k-nav-today").html(g(a.options.footer)(d)).attr("title", c.toString(d, "D")).bind(l, F(a._todayClick, a))
                },
                _header: function() {
                    var a = this,
                        b = a.element,
                        c;
                    b.find(".k-header")[0] || b.html('<div class="k-header"><a href="#" class="k-link k-nav-prev"><span class="k-icon k-arrow-prev"></span></a><a href="#" class="k-link k-nav-fast"></a><a href="#" class="k-link k-nav-next"><span class="k-icon k-arrow-next"></span></a></div>'), c = b.find(".k-link").hover(R, S).click(!1), a._title = c.eq(1).bind(l, F(a.navigateUp, a)), a[D] = c.eq(0).bind(l, F(a.navigateToPast, a)), a[E] = c.eq(2).bind(l, F(a.navigateToFuture, a))
                },
                _cellByDate: function(b) {
                    return this._table.find("td:not(." + w + ")").filter(function() {
                        return a(this.firstChild).attr(c.attr(t)) === b
                    })
                },
                _class: function(b, d) {
                    this._table.find("td:not(." + w + ")").removeClass(b).filter(function() {
                        return a(this.firstChild).attr(c.attr(t)) === d
                    }).addClass(b)
                },
                _navigate: function(a, b) {
                    var c = this,
                        d = c._index + 1,
                        e = new H(c._current);
                    a = c[a], a.hasClass(v) || (d > 3 ? e.setFullYear(e.getFullYear() + 100 * b) : K.views[d].setDate(e, b), c.navigate(e))
                },
                _option: function(a, c) {
                    var d = this,
                        e = d.options,
                        g = +d._value,
                        h, i;
                    if (c === b) return e[a];
                    c = f(c, e.format);
                    !c || (e[a] = new H(c), i = d._view.compare(c, d._current), a === m ? (h = +c > g, i = i > -1) : (h = g > +c, i = i < 1), h ? d.value(null) : i && d.navigate())
                },
                _todayClick: function(a) {
                    var b = this,
                        c = I[b.options.depth],
                        d = new H;
                    a.preventDefault(), b._view.compare(b._current, d) === 0 && b._index == c && (b._changeView = !1), b._value = d, b.navigate(d, c), b.trigger(r)
                },
                _templates: function() {
                    var a = this,
                        b = a.options.month || {},
                        d = b.content,
                        e = b.empty;
                    a.month = {
                        content: g('<td#=data.cssClass#><a class="k-link" href="\\#" ' + c.attr("value") + '="#=data.dateString#" title="#=data.title#">' + (d || "#=data.value#") + "</a></td>", {
                            useWithBlock: !!d
                        }),
                        empty: g("<td>" + (e || "&nbsp;") + "</td>", {
                            useWithBlock: !!e
                        })
                    }
                }
            });
        d.plugin(J);
        var K = {
            firstDayOfMonth: function(a) {
                return new H(a.getFullYear(), a.getMonth(), 1)
            },
            firstVisibleDay: function(a) {
                var b = c.culture().calendar.firstDay,
                    d = new H(a.getFullYear(), a.getMonth(), 0, a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds());
                while (d.getDay() != b) K.setTime(d, -1 * C);
                return d
            },
            setTime: function(a, b) {
                var c = a.getTimezoneOffset(),
                    d = new H(a.getTime() + b),
                    e = d.getTimezoneOffset() - c;
                a.setTime(d.getTime() + e * B)
            },
            views: [{
                name: p,
                title: function(a) {
                    return c.culture().calendar.months.names[a.getMonth()] + " " + a.getFullYear()
                },
                content: function(a) {
                    var b = this,
                        d = 0,
                        e = a.min,
                        f = a.max,
                        g = a.date,
                        h = c.culture().calendar,
                        i = h.firstDay,
                        j = h.days,
                        k = P(j.names, i),
                        l = P(j.namesAbbr, i),
                        m = P(j.namesShort, i),
                        n = K.firstVisibleDay(g),
                        o = b.first(g),
                        p = b.last(g),
                        q = b.toDateString,
                        r = new H,
                        s = '<table class="k-content" cellspacing="0"><thead><tr>';
                    for (; d < 7; d++) s += '<th abbr="' + l[d] + '" scope="col" title="' + k[d] + '">' + m[d] + "</th>";
                    r = +(new H(r.getFullYear(), r.getMonth(), r.getDate()));
                    return L({
                        cells: 42,
                        perRow: 7,
                        html: s += "</tr></thead><tbody><tr>",
                        start: new H(n.getFullYear(), n.getMonth(), n.getDate()),
                        min: new H(e.getFullYear(), e.getMonth(), e.getDate()),
                        max: new H(f.getFullYear(), f.getMonth(), f.getDate()),
                        content: a.content,
                        empty: a.empty,
                        setter: b.setDate,
                        build: function(a, b) {
                            var d = [],
                                e = a.getDay();
                            (a < o || a > p) && d.push(w), +a === r && d.push("k-today"), (e === 0 || e === 6) && d.push("k-weekend");
                            return {
                                date: a,
                                ns: c.ns,
                                title: c.toString(a, "D"),
                                value: a.getDate(),
                                dateString: q(a),
                                cssClass: d[0] ? ' class="' + d.join(" ") + '"' : ""
                            }
                        }
                    })
                },
                first: function(a) {
                    return K.firstDayOfMonth(a)
                },
                last: function(a) {
                    return new H(a.getFullYear(), a.getMonth() + 1, 0)
                },
                compare: function(a, b) {
                    var c, d = a.getMonth(),
                        e = a.getFullYear(),
                        f = b.getMonth(),
                        g = b.getFullYear();
                    e > g ? c = 1 : e < g ? c = -1 : c = d == f ? 0 : d > f ? 1 : -1;
                    return c
                },
                setDate: function(a, b) {
                    b instanceof H ? a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()) : K.setTime(a, b * C)
                },
                toDateString: function(a) {
                    return a.getFullYear() + "/" + a.getMonth() + "/" + a.getDate()
                }
            }, {
                name: "year",
                title: function(a) {
                    return a.getFullYear()
                },
                content: function(a) {
                    var b = c.culture().calendar.months.namesAbbr,
                        d = this.toDateString,
                        e = a.min,
                        f = a.max;
                    return L({
                        min: new H(e.getFullYear(), e.getMonth(), 1),
                        max: new H(f.getFullYear(), f.getMonth(), 1),
                        start: new H(a.date.getFullYear(), 0, 1),
                        setter: this.setDate,
                        build: function(a) {
                            return {
                                value: b[a.getMonth()],
                                ns: c.ns,
                                dateString: d(a),
                                cssClass: ""
                            }
                        }
                    })
                },
                first: function(a) {
                    return new H(a.getFullYear(), 0, a.getDate())
                },
                last: function(a) {
                    return new H(a.getFullYear(), 11, a.getDate())
                },
                compare: function(a, b) {
                    return M(a, b)
                },
                setDate: function(a, b) {
                    if (b instanceof H) a.setFullYear(b.getFullYear(), b.getMonth(), a.getDate());
                    else {
                        var c = a.getMonth() + b;
                        a.setMonth(c), c > 11 && (c -= 12), a.getMonth() != c && a.setDate(0)
                    }
                },
                toDateString: function(a) {
                    return a.getFullYear() + "/" + a.getMonth() + "/1"
                }
            }, {
                name: "decade",
                title: function(a) {
                    var b = a.getFullYear();
                    b = b - b % 10;
                    return b + "-" + (b + 9)
                },
                content: function(a) {
                    var b = a.date.getFullYear(),
                        d = this.toDateString;
                    return L({
                        start: new H(b - b % 10 - 1, 0, 1),
                        min: new H(a.min.getFullYear(), 0, 1),
                        max: new H(a.max.getFullYear(), 0, 1),
                        setter: this.setDate,
                        build: function(a, b) {
                            return {
                                value: a.getFullYear(),
                                ns: c.ns,
                                dateString: d(a),
                                cssClass: b == 0 || b == 11 ? x : ""
                            }
                        }
                    })
                },
                first: function(a) {
                    var b = a.getFullYear();
                    return new H(b - b % 10, a.getMonth(), a.getDate())
                },
                last: function(a) {
                    var b = a.getFullYear();
                    return new H(b - b % 10 + 9, a.getMonth(), a.getDate())
                },
                compare: function(a, b) {
                    return M(a, b, 10)
                },
                setDate: function(a, b) {
                    Q(a, b, 1)
                },
                toDateString: function(a) {
                    return a.getFullYear() + "/0/1"
                }
            }, {
                name: q,
                title: function(a) {
                    var b = a.getFullYear();
                    b = b - b % 100;
                    return b + "-" + (b + 99)
                },
                content: function(a) {
                    var b = a.date.getFullYear(),
                        d = a.min.getFullYear(),
                        e = a.max.getFullYear(),
                        f = this.toDateString;
                    d = d - d % 10, e = e - e % 10, e - d < 10 && (e = d + 9);
                    return L({
                        start: new H(b - b % 100 - 10, 0, 1),
                        min: new H(d, 0, 1),
                        max: new H(e, 0, 1),
                        setter: this.setDate,
                        build: function(a, b) {
                            var d = a.getFullYear();
                            return {
                                value: d + " - " + (d + 9),
                                ns: c.ns,
                                dateString: f(a),
                                cssClass: b == 0 || b == 11 ? x : ""
                            }
                        }
                    })
                },
                first: function(a) {
                    var b = a.getFullYear();
                    return new H(b - b % 100, a.getMonth(), a.getDate())
                },
                last: function(a) {
                    var b = a.getFullYear();
                    return new H(b - b % 100 + 99, a.getMonth(), a.getDate())
                },
                compare: function(a, b) {
                    return M(a, b, 100)
                },
                setDate: function(a, b) {
                    Q(a, b, 10)
                },
                toDateString: function(a) {
                    var b = a.getFullYear();
                    return b - b % 10 + "/0/1"
                }
            }]
        };
        K.restrictValue = N, K.isInRange = O, K.validate = T, K.viewsEnum = I, c.calendar = K
    }(jQuery),
    function(a, b) {
        var c = window.kendo,
            d = c.ui,
            e = c.support.touch,
            f = d.Widget,
            g = c.parseDate,
            h = c.keys,
            i = c.template,
            j = "<div />",
            k = "<span />",
            l = e ? "touchend" : "click",
            m = "open",
            n = "close",
            o = "change",
            p = "navigate",
            q = "dateView",
            r = "disabled",
            s = "k-state-default",
            t = "k-state-focused",
            u = "k-state-selected",
            v = "k-state-disabled",
            w = "k-state-hover",
            x = "mouseenter mouseleave",
            y = e ? "touchstart" : "mousedown",
            z = "min",
            A = "max",
            B = "month",
            C = "first",
            D = c.calendar,
            E = D.viewsEnum,
            F = D.isInRange,
            G = D.restrictValue,
            H = a.proxy,
            I = Date,
            J, K = function(b) {
                var c = this,
                    e = document.body;
                J || (J = new d.Calendar(a(j).hide().appendTo(e))), c.calendar = J, c.options = b = b || {}, c.popup = new d.Popup(a(j).addClass("k-calendar-container").appendTo(e), b), c._templates(), c.value(b.value)
            };
        K.prototype = {
            _calendar: function() {
                var a = this,
                    b = a.popup,
                    c = a.options,
                    d = a.calendar,
                    e = d.element;
                e.data(q) !== a && (e.appendTo(b.element).data(q, a).bind(l, H(a._click, a)).unbind(y).bind(y, c.clearBlurTimeout).show(), d.unbind(o).unbind(p).bind(p, H(a._navigate, a)).bind(o, c), d.month = a.month, d.options.depth = c.depth, d._today.html(a.footer(new I)), d.min(c.min), d.max(c.max), d.navigate(a._value, c.start), a.value(a._value))
            },
            open: function() {
                var a = this;
                a._calendar(), setTimeout(function() {
                    a.popup.open()
                })
            },
            close: function() {
                this.popup.close()
            },
            min: function(a) {
                this._option(z, a)
            },
            max: function(a) {
                this._option(A, a)
            },
            toggle: function() {
                var a = this;
                a[a.popup.visible() ? n : m]()
            },
            move: function(a) {
                var b = this,
                    c = b.options,
                    d = c.min,
                    e = c.max,
                    f = new I(b._current),
                    g = b.calendar,
                    i = g._index,
                    j = g._view,
                    k = a.keyCode,
                    l, m, n, o;
                if (k == h.ESC) b.close();
                else {
                    a.altKey && (k == h.DOWN ? (b.open(), n = !0) : k == h.UP && (b.close(), n = !0));
                    if (!b.popup.visible()) return;
                    if (a.ctrlKey) k == h.RIGHT ? (g.navigateToFuture(), n = !0) : k == h.LEFT ? (g.navigateToPast(), n = !0) : k == h.UP ? (g.navigateUp(), n = !0) : k == h.DOWN && (b._navigateDown(), n = !0);
                    else {
                        k == h.RIGHT ? (m = 1, n = !0) : k == h.LEFT ? (m = -1, n = !0) : k == h.UP ? (m = i === 0 ? -7 : -4, n = !0) : k == h.DOWN ? (m = i === 0 ? 7 : 4, n = !0) : k == h.ENTER ? (b._navigateDown(), n = !0) : k == h.HOME || k == h.END ? (o = k == h.HOME ? C : "last", f = j[o](f), n = !0) : k == h.PAGEUP ? (n = !0, g.navigateToPast()) : k == h.PAGEDOWN && (n = !0, g.navigateToFuture());
                        if (m || o) o || j.setDate(f, m), b._current = f = G(f, c.min, c.max), g._focus(f)
                    }
                    n && a.preventDefault()
                }
            },
            value: function(a) {
                var b = this,
                    c = b.calendar,
                    d = b.options;
                b._value = a, b._current = new I(G(a, d.min, d.max)), c.element.data(q) === b && (c._focus(b._current), c.value(a))
            },
            _click: function(a) {
                a.currentTarget.className.indexOf(u) !== -1 && this.close()
            },
            _navigate: function() {
                var a = this,
                    b = a.calendar;
                a._current = new I(b._current), b._focus(b._current)
            },
            _navigateDown: function() {
                var a = this,
                    b = a.calendar,
                    d = b._current,
                    e = b._table.find("." + t),
                    f = e.children(":" + C).attr(c.attr("value")).split("/");
                f = new I(f[0], f[1], f[2]);
                !e[0] || e.hasClass(u) ? a.close() : (b._view.setDate(d, f), b.navigateDown(d))
            },
            _option: function(a, b) {
                var c = this,
                    d = c.options,
                    e = c.calendar;
                d[a] = b, e.element.data(q) === c && e[a](b)
            },
            _templates: function() {
                var a = this,
                    b = a.options,
                    d = b.month || {},
                    e = d.content,
                    f = d.empty;
                a.month = {
                    content: i('<td#=data.cssClass#><a class="k-link" href="\\#" ' + c.attr("value") + '="#=data.dateString#" title="#=data.title#">' + (e || "#=data.value#") + "</a></td>", {
                        useWithBlock: !!e
                    }),
                    empty: i("<td>" + (f || "&nbsp;") + "</td>", {
                        useWithBlock: !!f
                    })
                }, a.footer = i(b.footer || '#= kendo.toString(data,"D") #', {
                    useWithBlock: !1
                })
            }
        }, c.DateView = K;
        var L = f.extend({
            init: function(b, c) {
                var d = this,
                    e, g;
                f.fn.init.call(d, b, c), b = d.element, c = d.options, D.validate(c), d._wrapper(), d.dateView = e = new K(a.extend({}, c, {
                    anchor: d.wrapper,
                    change: function() {
                        d._change(this.value()), d.close()
                    },
                    clearBlurTimeout: H(d._clearBlurTimeout, d)
                })), d._icon(), b.addClass("k-input").bind({
                    keydown: H(d._keydown, d),
                    focus: function(a) {
                        clearTimeout(d._bluring), d._inputWrapper.addClass(t)
                    },
                    blur: H(d._blur, d)
                }).closest("form").bind("reset", function() {
                    d.value(b[0].defaultValue)
                }), d.bind(o, c), d.enable(!b.is("[disabled]")), d.value(c.value || d.element.val())
            },
            options: {
                name: "DatePicker",
                value: null,
                min: new Date(1900, 0, 1),
                max: new Date(2099, 11, 31),
                start: B,
                depth: B
            },
            enable: function(a) {
                var b = this,
                    c = b._icon,
                    d = b._inputWrapper,
                    e = b.element;
                c.unbind(l).unbind(y), a === !1 ? (d.removeClass(s).addClass(v).unbind(x), e.attr(r, r)) : (d.addClass(s).removeClass(v).bind(x, b._toggleHover), e.removeAttr(r), c.bind(l, H(b._click, b)).bind(y, H(b._clearBlurTimeout, b)))
            },
            open: function() {
                this.dateView.open()
            },
            close: function() {
                this.dateView.close()
            },
            min: function(a) {
                return this._option(z, a)
            },
            max: function(a) {
                return this._option(A, a)
            },
            value: function(a) {
                var c = this;
                if (a === b) return c._value;
                c._old = c._update(a)
            },
            _toggleHover: function(b) {
                e || a(b.currentTarget).toggleClass(w, b.type === "mouseenter")
            },
            _blur: function() {
                var a = this;
                a._bluring = setTimeout(function() {
                    a._change(a.element.val()), e || a.close(), a._inputWrapper.removeClass(t)
                }, 100)
            },
            _clearBlurTimeout: function() {
                var a = this;
                setTimeout(function() {
                    clearTimeout(a._bluring), a.element.focus()
                })
            },
            _click: function() {
                this.dateView.toggle()
            },
            _change: function(a) {
                var b = this;
                a = b._update(a), +b._old != +a && (b._old = a, b.trigger(o), b.element.trigger(o))
            },
            _keydown: function(a) {
                var b = this,
                    c = b.dateView;
                !c.popup.visible() && a.keyCode == h.ENTER ? b._change(b.element.val()) : c.move(a)
            },
            _icon: function() {
                var b = this,
                    c = b.element,
                    d;
                d = c.next("span.k-select"), d[0] || (d = a('<span class="k-select"><span class="k-icon k-icon-calendar">select</span></span>').insertAfter(c)), b._icon = d
            },
            _option: function(a, c) {
                var d = this,
                    e = d.options;
                if (c === b) return e[a];
                c = g(c, e.format);
                !c || (e[a] = new I(c), d.dateView[a](c))
            },
            _update: function(a) {
                var b = this,
                    d = b.options,
                    e = d.format,
                    f = g(a, e);
                F(f, d.min, d.max) || (f = null), b._value = f, b.dateView.value(f), b.element.val(f ? c.toString(f, e) : a);
                return f
            },
            _wrapper: function() {
                var b = this,
                    c = b.element,
                    d;
                d = c.parents(".k-datepicker"), d[0] || (d = c.wrap(k).parent().addClass("k-picker-wrap k-state-default"), d = d.wrap(k).parent()), d[0].style.cssText = c[0].style.cssText, c.css({
                    width: "100%",
                    height: "auto"
                }), b.wrapper = d.addClass("k-widget k-datepicker k-header"), b._inputWrapper = a(d[0].firstChild)
            }
        });
        d.plugin(L)
    }(jQuery),
    function(a, b) {
        function v(a) {
            var b = a.value.length;
            q(a, b, b)
        }

        function u(a, b, c, d) {
            var e = b.split(d);
            e.splice(s(a, b, d), 1, c), e[e.length - 1] !== "" && e.push("");
            return e.join(d)
        }

        function t(a, b, c) {
            return b.split(c)[s(a, b, c)]
        }

        function s(a, b, c) {
            return b.substring(0, a).split(c).length - 1
        }
        var c = window.kendo,
            d = c.support.touch,
            e = c.ui,
            f = c.data.DataSource,
            g = e.List,
            h = "change",
            i = "k-state-default",
            j = "disabled",
            k = "k-state-focused",
            l = "k-state-selected",
            m = "k-state-disabled",
            n = "k-state-hover",
            o = "mouseenter mouseleave",
            p = g.caret,
            q = g.selectText,
            r = a.proxy,
            w = g.extend({
                init: function(b, c) {
                    var d = this;
                    c = a.isArray(c) ? {
                        dataSource: c
                    } : c, g.fn.init.call(d, b, c), b = d.element, d._wrapper(), d._accessors(), d.dataSource = f.create(d.options.dataSource).bind(h, r(d.refresh, d)), d.bind([h], d.options), b[0].type = "text", b.attr("autocomplete", "off").addClass("k-input").bind({
                        keydown: r(d._keydown, d),
                        paste: r(d._search, d),
                        focus: function() {
                            d._old = d.value(), d.wrapper.addClass(k)
                        },
                        blur: function() {
                            d._bluring = setTimeout(function() {
                                d._blur(), d.wrapper.removeClass(k)
                            }, 100)
                        }
                    }), d.enable(!b.is("[disabled]")), d._popup()
                },
                options: {
                    name: "AutoComplete",
                    suggest: !1,
                    minLength: 1,
                    delay: 200,
                    height: 200,
                    filter: "startswith"
                },
                enable: function(a) {
                    var b = this,
                        c = b.element,
                        d = b.wrapper;
                    a === !1 ? (d.removeClass(i).addClass(m).unbind(o), c.attr(j, j)) : (d.removeClass(m).addClass(i).bind(o, b._toggleHover), c.removeAttr(j))
                },
                close: function() {
                    var a = this;
                    a._current = null, a.popup.close()
                },
                refresh: function() {
                    var b = this,
                        d = b.ul[0],
                        e = b.dataSource.view(),
                        f = e.length;
                    d.innerHTML = c.render(b.template, e), b._height(f), f && b.options.highlightFirst && b.current(a(d.firstChild)), b._open && (b._open = !1, b.popup[f ? "open" : "close"]())
                },
                select: function(b) {
                    var c = this,
                        d = c.options.separator,
                        e = c.dataSource.view(),
                        f, h;
                    b = a(b), b[0] && !b.hasClass(l) && (h = g.inArray(b[0], c.ul[0]), h > -1 && (e = e[h], f = c._text(e), d && (f = u(p(c.element[0]), c.value(), f, d)), c.value(f), c.current(b.addClass(l))))
                },
                search: function(a) {
                    var b = this,
                        a = a || b.value(),
                        c = b.options,
                        d = c.separator,
                        e, f, g;
                    b._current = null, clearTimeout(b._typing), d && (a = t(p(b.element[0]), a, d)), e = a.length, e ? e >= b.options.minLength && (b._open = !0, b.dataSource.filter({
                        field: c.dataTextField,
                        operator: c.filter,
                        value: a
                    })) : b.popup.close()
                },
                suggest: function(a) {
                    var b = this,
                        c = b.element[0],
                        d = b.options.separator,
                        e = b.value(),
                        f, g, h = p(c);
                    typeof a != "string" && (a = a ? a.text() : ""), h <= 0 && (h = e.toLowerCase().indexOf(a.toLowerCase()) + 1), a || (a = e.substring(0, h), d && (a = a.split(d).pop())), d && (a = u(h, e, a, d)), a !== e && (b.value(a), f = a.length, d && (f = h + a.substring(h).indexOf(d)), q(c, h, f))
                },
                value: function(a) {
                    var c = this,
                        d = c.element[0];
                    if (a !== b) d.value = a;
                    else return d.value
                },
                _accept: function(a) {
                    var b = this;
                    c.support.touch ? setTimeout(function() {
                        b._focus(a)
                    }, 0) : b._focus(a), v(b.element[0])
                },
                _move: function(a) {
                    var b = this;
                    a = a[0] ? a : null, b.current(a), b.options.suggest && b.suggest(a)
                },
                _keydown: function(b) {
                    var d = this,
                        e = d.ul[0],
                        f = b.keyCode,
                        g = c.keys,
                        h = d._current,
                        i = d.popup.visible();
                    f === g.DOWN ? (i && d._move(h ? h.next() : a(e.firstChild)), b.preventDefault()) : f === g.UP ? (i && d._move(h ? h.prev() : a(e.lastChild)), b.preventDefault()) : f === g.ENTER || f === g.TAB ? (d.popup.visible() && b.preventDefault(), d._accept(h)) : f === g.ESC ? d.close() : d._search()
                },
                _search: function() {
                    var a = this;
                    clearTimeout(a._typing), a._typing = setTimeout(function() {
                        a._old !== a.value() && (a._old = a.value(), a.search())
                    }, a.options.delay)
                },
                _toggleHover: function(b) {
                    d || a(b.currentTarget).toggleClass(n, b.type === "mouseenter")
                },
                _wrapper: function() {
                    var a = this,
                        b = a.element,
                        c = b[0],
                        d = "tabIndex",
                        e;
                    e = b.parent(), e.is("span.k-widget") || (e = b.wrap("<span />").parent()), e[0].style.cssText = c.style.cssText, b.css({
                        width: "100%",
                        height: "auto"
                    }), a._focused = a.element, a.wrapper = e.addClass("k-widget k-autocomplete k-header").addClass(c.className)
                }
            });
        e.plugin(w)
    }(jQuery),
    function(a, b) {
        var c = window.kendo,
            d = c.ui,
            e = d.Select,
            f = "disabled",
            g = "change",
            h = "select",
            i = "k-state-focused",
            j = "k-state-default",
            k = "k-state-disabled",
            l = "k-state-selected",
            m = "k-state-hover",
            n = "mouseenter mouseleave",
            o = ".k-dropdown-wrap",
            p = a.proxy,
            q = e.extend({
                init: function(b, c) {
                    var d = this,
                        c = a.isArray(c) ? {
                            dataSource: c
                        } : c;
                    e.fn.init.call(d, b, c), c = d.options, b = d.element.focus(function() {
                        d.wrapper.focus()
                    }), d._reset(), d._word = "", d._wrapper(), d._span(), d._popup(), d._accessors(), d._dataSource(), d._enable(), d.bind([g], c), c.autoBind ? d.dataSource.fetch() : b.is(h) && d.text(b.children(":selected").text())
                },
                options: {
                    name: "DropDownList",
                    enable: !0,
                    index: 0,
                    autoBind: !0,
                    delay: 500,
                    dataTextField: "text",
                    dataValueField: "value",
                    height: 200
                },
                enable: function(a) {
                    var b = this,
                        c = b.element,
                        d = b.wrapper,
                        e = b._inputWrapper;
                    a === !1 ? (c.attr(f, f), d.unbind(), e.removeClass(j).addClass(k).unbind(n)) : (c.removeAttr(f, f), e.addClass(j).removeClass(k).bind(n, b._toggleHover), d.bind({
                        keydown: p(b._keydown, b),
                        keypress: p(b._keypress, b),
                        focusin: function() {
                            b._inputWrapper.addClass(i), clearTimeout(b._bluring)
                        },
                        click: function() {
                            b.toggle()
                        },
                        focusout: function(a) {
                            b._bluring = setTimeout(function() {
                                b._blur(), b._inputWrapper.removeClass(i)
                            }, 100)
                        }
                    }))
                },
                open: function() {
                    var a = this,
                        b = a._current;
                    a.ul[0].firstChild ? (a.popup.open(), b && a._scroll(b[0])) : (a._open = !0, a.dataSource.fetch())
                },
                toggle: function(a) {
                    this._toggle(a)
                },
                refresh: function() {
                    var a = this,
                        b = a.value(),
                        d = a.options,
                        e = a._data(),
                        f = e.length;
                    a.ul[0].innerHTML = c.render(a.template, e), a._height(f), a.element.is(h) && a._options(e), b ? a.value(b) : a.select(d.index), a._old = a.value(), a._open && a.toggle(f), a._hideBusy()
                },
                search: function(a) {
                    if (a) {
                        var c = this;
                        a = a.toLowerCase(), c.select(function(d) {
                            var e = c._text(d);
                            if (e !== b) return (e + "").toLowerCase().indexOf(a) === 0
                        })
                    }
                },
                select: function(a) {
                    var c = this,
                        e = c.element[0],
                        f = c._current,
                        g = c._data(),
                        h, i, j;
                    a = c._get(a), a && a[0] && !a.hasClass(l) && (f && f.removeClass(l), j = d.List.inArray(a[0], c.ul[0]), j > -1 && (g = g[j], i = c._text(g), h = c._value(g), c.text(i), c._accessor(h != b ? h : i, j), c.current(a.addClass(l))))
                },
                text: function(a) {
                    var c = this.span;
                    if (a !== b) c.text(a);
                    else return c.text()
                },
                value: function(a) {
                    var c = this,
                        d, e = c.element;
                    if (a !== b) d = c._index(a), c.select(d > -1 ? d : 0), c._old = c._accessor();
                    else return c._accessor()
                },
                _accept: function(a) {
                    this._focus(a)
                },
                _data: function() {
                    var a = this,
                        b = a.options,
                        c = b.optionLabel,
                        d = b.dataTextField,
                        e = b.dataValueField,
                        f = a.dataSource.view(),
                        g = f.length,
                        h = c,
                        i = 0;
                    if (c && g) {
                        d && (h = {}, h[d] = c, e && (h[e] = "")), h = [h];
                        for (; i < g; i++) h.push(f[i]);
                        f = h
                    }
                    return f
                },
                _keydown: function(a) {
                    var b = this,
                        d = a.keyCode,
                        e = c.keys,
                        f = b.ul[0];
                    b._move(a), d === e.HOME ? (a.preventDefault(), b.select(f.firstChild)) : d === e.END && (a.preventDefault(), b.select(f.lastChild))
                },
                _keypress: function(a) {
                    var b = this;
                    setTimeout(function() {
                        b._word += String.fromCharCode(a.keyCode || a.charCode), b._search()
                    }, 0)
                },
                _search: function() {
                    var a = this;
                    clearTimeout(a._typing), a._typing = setTimeout(function() {
                        a._word = ""
                    }, a.options.delay), a.search(a._word)
                },
                _span: function() {
                    var b = this,
                        c = b.wrapper,
                        d = ".k-input",
                        e;
                    e = c.find(d), e[0] || (c.append('<span class="k-dropdown-wrap k-state-default"><span class="k-input">&nbsp;</span><span class="k-select"><span class="k-icon k-arrow-down">select</span></span></span>').append(b.element), e = c.find(d)), b.span = e, b._arrow = c.find(".k-icon"), b._inputWrapper = a(c[0].firstChild)
                },
                _wrapper: function() {
                    var a = this,
                        b = a.element,
                        c = b[0],
                        d = "tabIndex",
                        e;
                    e = b.parent(), e.is("span.k-widget") || (e = b.wrap("<span />").parent()), e.attr(d) || e.attr(d, 0), e[0].style.cssText = c.style.cssText, b.hide(), a._focused = a.wrapper = e.addClass("k-widget k-dropdown k-header").addClass(c.className)
                }
            });
        d.plugin(q)
    }(jQuery),
    function(a, b) {
        var c = window.kendo,
            d = c.ui,
            e = d.List,
            f = d.Select,
            g = "click",
            h = "disabled",
            i = "change",
            j = "k-state-default",
            k = "k-state-disabled",
            l = "k-state-focused",
            m = "select",
            n = "k-state-selected",
            o = "filter",
            p = "accept",
            q = "k-state-hover",
            r = "mouseenter mouseleave",
            s = null,
            t = a.proxy,
            u = f.extend({
                init: function(b, c) {
                    var d = this;
                    c = a.isArray(c) ? {
                        dataSource: c
                    } : c, f.fn.init.call(d, b, c), c = d.options, b = d.element.focus(function() {
                        d.input.focus()
                    }), d._reset(), d._wrapper(), d._input(), d._popup(), d._accessors(), d._dataSource(), d._enable(), d.bind([i], c), d.input.bind({
                        keydown: t(d._keydown, d),
                        focus: function() {
                            d._inputWrapper.addClass(l)
                        },
                        blur: function() {
                            d._bluring = setTimeout(function() {
                                clearTimeout(d._typing), d.text(d.text()), d._blur(), d._inputWrapper.removeClass(l)
                            }, 100)
                        }
                    }), d._old = d.value(), c.autoBind ? d._select() : b.is(m) && d.input.val(b.children(":selected").text())
                },
                options: {
                    name: "ComboBox",
                    enable: !0,
                    index: -1,
                    autoBind: !0,
                    delay: 200,
                    dataTextField: "text",
                    dataValueField: "value",
                    minLength: 0,
                    height: 200,
                    highlightFirst: !0,
                    filter: "none",
                    suggest: !1
                },
                current: function(a) {
                    var c = this,
                        d = c._current;
                    if (a === b) return d;
                    c._selected = s, d && d.removeClass(n), f.fn.current.call(c, a)
                },
                enable: function(a) {
                    var b = this,
                        c = b.input,
                        d = b.element,
                        e = b._inputWrapper,
                        f = b._arrow.parent();
                    a === !1 ? (e.removeClass(j).addClass(k).unbind(r), c.add(d).attr(h, h), f.unbind(g)) : (e.removeClass(k).addClass(j).bind(r, b._toggleHover), c.add(d).removeAttr(h), f.bind(g, function() {
                        b.toggle()
                    }))
                },
                open: function() {
                    var a = this,
                        b = a._selected;
                    a.popup.visible() || (!a.ul[0].firstChild || a._state === p ? (a._open = !0, a._state = "", a._select()) : (a.popup.open(), b && a._scroll(b[0])))
                },
                refresh: function() {
                    var b = this,
                        d = b.ul,
                        e = b.options,
                        f = e.suggest,
                        g = e.height,
                        h = b._data(),
                        i = h.length;
                    d[0].innerHTML = c.render(b.template, h), b._height(i), b.element.is(m) && b._options(h), i && ((f || e.highlightFirst) && b.current(a(b.ul[0].firstChild)), f && b.suggest(b._current)), b._open && (b._open = !1, b.toggle(!!i)), b._hideBusy()
                },
                select: function(a) {
                    var c = this,
                        d, e, f = c._highlight(a),
                        g = c._data();
                    f !== -1 && (c._selected = c._current.addClass(n), g = g[f], d = c._text(g), e = c._value(g), c._prev = c.input[0].value = d, c._accessor(e != b ? e : d, f))
                },
                search: function(a) {
                    var b = this,
                        a = a || b.text(),
                        c = a.length,
                        d = b.options,
                        e = d.filter;
                    clearTimeout(b._typing), c >= d.minLength && (e === "none" ? b._filter(a) : (b._open = !0, b._state = o, b.dataSource.filter({
                        field: d.dataTextField,
                        operator: e,
                        value: a
                    })))
                },
                suggest: function(a) {
                    var b = this,
                        c = b.input[0],
                        d = b.text(),
                        f = e.caret(c);
                    typeof a != "string" && (a = a ? a.text() : ""), f <= 0 && (f = d.toLowerCase().indexOf(a.toLowerCase()) + 1), a || (a = d.substring(0, f)), a !== d && (b.text(a), e.selectText(c, f, a.length))
                },
                text: function(a) {
                    var c = this,
                        d = c.input[0];
                    if (a !== b) c.select(function(b) {
                        return c._text(b) === a
                    }), c._selected || c._custom(a), d.value = a;
                    else return d.value
                },
                toggle: function(a) {
                    var b = this;
                    clearTimeout(b._bluring), b.input[0].focus(), setTimeout(function() {
                        b._toggle(a)
                    })
                },
                value: function(a) {
                    var c = this,
                        d, e = c.element;
                    if (a !== b) d = c._index(a), d > -1 ? c.select(d) : (c.current(s), c._custom(a), c.text(a)), c._old = c._accessor();
                    else return c._accessor()
                },
                _accept: function(a) {
                    var b = this;
                    a && b.popup.visible() ? (b._state === o && (b._state = p), setTimeout(function() {
                        b._focus(a)
                    })) : (b.text(b.text()), b._change())
                },
                _custom: function(b) {
                    var c = this,
                        d = c.element,
                        e = c._option;
                    d.is(m) ? (e || (e = c._option = a("<option/>"), d.append(e)), e.text(b), e[0].selected = !0) : d.val(b)
                },
                _filter: function(a) {
                    var c = this,
                        d = c.options,
                        a = a.toLowerCase(),
                        e = c.dataSource,
                        f = function(d) {
                            var e = c._text(d);
                            if (e !== b) {
                                e = e + "";
                                if (e !== "" && a === "") return !1;
                                return e.toLowerCase().indexOf(a) === 0
                            }
                        };
                    c.ul[0].firstChild ? (c._highlight(f) !== -1 && (d.suggest && c._current && c.suggest(c._current), c.open()), c._hideBusy()) : e.one(i, function() {
                        c.search(a)
                    }).fetch()
                },
                _highlight: function(c) {
                    var d = this,
                        f;
                    if (c == b) return -1;
                    c = d._get(c), f = e.inArray(c[0], d.ul[0]), f == -1 && (d.options.highlightFirst && !d.text() ? c = a(d.ul[0].firstChild) : c = s), d.current(c);
                    return f
                },
                _input: function() {
                    var b = this,
                        c = b.element[0],
                        d = b.wrapper,
                        e = ".k-input",
                        f;
                    f = d.find(e), f[0] || (d.append('<span class="k-dropdown-wrap k-state-default"><input class="k-input" type="text" autocomplete="off"/><span class="k-select"><span class="k-icon k-arrow-down">select</span></span></span>').append(b.element), f = d.find(e)), f[0].style.cssText = c.style.cssText, f.addClass(c.className).val(c.value).css({
                        width: "100%",
                        height: "auto"
                    }).show(), b._focused = b.input = f, b._arrow = d.find(".k-icon"), b._inputWrapper = a(d[0].firstChild)
                },
                _keydown: function(a) {
                    var b = this;
                    c.keys.TAB === a.keyCode ? (b.text(b.input.val()), b._state === o && b._selected && (b._state = p)) : b._move(a) || b._search()
                },
                _search: function() {
                    var a = this;
                    clearTimeout(a._typing), a._typing = setTimeout(function() {
                        var b = a.text();
                        a._prev !== b && (a._prev = b, a.search(b))
                    }, a.options.delay)
                },
                _select: function() {
                    var a = this;
                    a.dataSource.one(i, function() {
                        var b = a.value();
                        b ? a.value(b) : a.select(a.options.index), a._old = a.value()
                    }).query()
                },
                _wrapper: function() {
                    var a = this,
                        b = a.element,
                        c;
                    c = b.parent(), c.is("span.k-widget") || (c = b.hide().wrap("<span />").parent()), c[0].style.cssText = b[0].style.cssText, a.wrapper = c.addClass("k-widget k-combobox k-header").show()
                }
            });
        d.plugin(u)
    }(jQuery),
    function(a, b) {
        function T(a) {
            return Array(a + 1).join('<td class="k-group-cell"></td>')
        }
        var c = window.kendo,
            d = c.ui,
            e = c.data.DataSource,
            f = d.Groupable,
            g = c.support.tbodyInnerHtml,
            h = d.Widget,
            i = c.keys,
            j = a.isPlainObject,
            k = a.extend,
            l = a.map,
            m = a.isArray,
            n = a.proxy,
            o = a.isFunction,
            p = Math,
            q = "requestStart",
            r = "error",
            s = "tbody>tr:not(.k-grouping-row,.k-detail-row):visible",
            t = ":not(.k-group-cell,.k-hierarchy-cell):visible",
            u = s + ">td" + t,
            v = u + ":first",
            w = "edit",
            x = "save",
            y = "remove",
            z = "detailInit",
            A = "change",
            B = "saveChanges",
            C = "modelChange",
            D = "dataBound",
            E = "detailExpand",
            F = "detailCollapse",
            G = "k-state-focused",
            H = "k-focusable",
            I = "k-state-selected",
            J = "click",
            K = "height",
            L = "tabIndex",
            M = "function",
            N = "string",
            O = "Are you sure you want to delete this record?",
            P = /\}/ig,
            Q = /#/ig,
            R = '<a class="k-button k-button-icontext #=className#" #=attr# href="\\#"><span class="k-icon #=imageClass#"></span>#=text#</a>',
            S = h.extend({
                init: function(a, b) {
                    var c = this;
                    h.fn.init.call(c, a, b), c.dataSource = b.dataSource, c.dataSource.bind(A, n(c.refresh, c)), c.wrap()
                },
                options: {
                    name: "VirtualScrollable",
                    itemHeight: a.noop
                },
                wrap: function() {
                    var b = this,
                        d = c.support.scrollbar() + 1,
                        e = b.element;
                    e.css({
                        width: "auto",
                        paddingRight: d,
                        overflow: "hidden"
                    }), b.content = e.children().first(), b.wrapper = b.content.wrap('<div class="k-virtual-scrollable-wrap"/>').parent().bind("DOMMouseScroll", n(b._wheelScroll, b)).bind("mousewheel", n(b._wheelScroll, b)), b.verticalScrollbar = a('<div class="k-scrollbar k-scrollbar-vertical" />').css({
                        width: d
                    }).appendTo(e).bind("scroll", n(b._scroll, b))
                },
                _wheelScroll: function(b) {
                    var c = this,
                        d = c.verticalScrollbar.scrollTop(),
                        e = b.originalEvent,
                        f;
                    b.preventDefault(), e.wheelDelta ? f = e.wheelDelta : e.detail ? f = -e.detail : a.browser.opera && (f = -e.wheelDelta), c.verticalScrollbar.scrollTop(d + -f)
                },
                _scroll: function(a) {
                    var b = this,
                        c = a.currentTarget.scrollTop,
                        d = b.dataSource,
                        e = b.itemHeight,
                        f = d.skip() || 0,
                        g = b._rangeStart || f,
                        h = b.element.innerHeight(),
                        i = !!(b._scrollbarTop && b._scrollbarTop > c),
                        j = p.max(p.floor(c / e), 0),
                        k = p.max(j + p.floor(h / e), 0);
                    b._scrollTop = c - g * e, b._scrollbarTop = c, b._fetch(j, k, i) || (b.wrapper[0].scrollTop = b._scrollTop)
                },
                _fetch: function(a, b, c) {
                    var d = this,
                        e = d.dataSource,
                        f = d.itemHeight,
                        g = e.take(),
                        h = d._rangeStart || e.skip() || 0,
                        i = p.floor(a / g) * g,
                        j = !1,
                        k = .33;
                    a < h ? (j = !0, h = p.max(0, b - g), d._scrollTop = (a - h) * f, d._page(h, g)) : b >= h + g && !c ? (j = !0, h = a, d._scrollTop = f, d._page(h, g)) : d._fetching || (a < i + g - g * k && a > g && e.prefetch(i - g, g), b > i + g * k && e.prefetch(i + g, g));
                    return j
                },
                _page: function(a, b) {
                    var d = this,
                        e = d.dataSource;
                    clearTimeout(d._timeout), d._fetching = !0, d._rangeStart = a, e.inRange(a, b) ? e.range(a, b) : (c.ui.progress(d.wrapper, !0), d._timeout = setTimeout(function() {
                        e.range(a, b)
                    }, 100))
                },
                refresh: function() {
                    var a = this,
                        b = "",
                        d = 25e4,
                        e = a.dataSource,
                        f = a._rangeStart,
                        g = c.support.scrollbar(),
                        h = a.wrapper[0],
                        i, j, k;
                    c.ui.progress(a.wrapper, !1), clearTimeout(a._timeout), k = a.itemHeight = a.options.itemHeight() || 0;
                    var l = h.scrollWidth > h.offsetWidth ? g : 0;
                    i = e.total() * k + l;
                    for (j = 0; j < p.floor(i / d); j++) b += '<div style="width:1px;height:' + d + 'px"></div>';
                    i % d && (b += '<div style="width:1px;height:' + i % d + 'px"></div>'), a.verticalScrollbar.html(b), h.scrollTop = a._scrollTop, f && !a._fetching && (a._rangeStart = e.skip()), a._fetching = !1
                }
            }),
            U = {
                create: {
                    text: "Add new record",
                    imageClass: "k-add",
                    className: "k-grid-add"
                },
                cancel: {
                    text: "Cancel changes",
                    imageClass: "k-cancel",
                    className: "k-grid-cancel-changes"
                },
                save: {
                    text: "Save changes",
                    imageClass: "k-update",
                    className: "k-grid-save-changes"
                },
                destroy: {
                    text: "Delete",
                    imageClass: "k-delete",
                    className: "k-grid-delete"
                }
            },
            V = h.extend({
                init: function(a, b) {
                    var c = this;
                    b = m(b) ? {
                        dataSource: b
                    } : b, h.fn.init.call(c, a, b), c._element(), c._columns(c.options.columns), c._dataSource(), c._tbody(), c._pageable(), c._groupable(), c._toolbar(), c.bind([A, D, E, F, z, w, x, y, B], c.options), c._thead(), c._templates(), c._navigatable(), c._selectable(), c._details(), c._editable(), c.options.autoBind && c.dataSource.fetch()
                },
                options: {
                    name: "Grid",
                    columns: [],
                    autoBind: !0,
                    scrollable: !0,
                    groupable: !1,
                    dataSource: {}
                },
                _element: function() {
                    var b = this,
                        c = b.element;
                    c.is("table") || (c = a("<table />").appendTo(b.element)), b.table = c.attr("cellspacing", 0), b._wrapper()
                },
                cellIndex: function(b) {
                    return a(b).parent().find("td:not(.k-group-cell,.k-hierarchy-cell)").index(b)
                },
                _modelForContainer: function(a) {
                    var b = (a.is("tr") ? a : a.closest("tr")).attr(c.attr("id"));
                    return this.dataSource.get(b)
                },
                _editable: function() {
                    var b = this,
                        c, d, e, f = b.options.editable,
                        g = function() {
                            var c = document.activeElement,
                                d = b._editContainer;
                            d && !a.contains(d[0], c) && d[0] !== c && !a(c).closest(".k-animation-container").length && b.editable.end() && b.closeCell()
                        };
                    f && (f.update !== !1 && (b.wrapper.delegate("tr:not(.k-grouping-row) > td:not(.k-hierarchy-cell,.k-detail-cell,.k-group-cell,.k-edit-cell,:has(a.k-grid-delete))", J, function(c) {
                        var d = a(this);
                        d.closest("tbody")[0] === b.tbody[0] && !a(c.target).is(":input") && (b.editable ? b.editable.end() && (b.closeCell(), b.editCell(d)) : b.editCell(d))
                    }), b.wrapper.bind("focusin", function(a) {
                        clearTimeout(b.timer), b.timer = null
                    }), b.wrapper.bind("focusout", function(a) {
                        b.timer = setTimeout(g, 1)
                    })), f.destroy !== !1 && b.wrapper.delegate("tbody>tr:not(.k-detail-row,.k-grouping-row):visible a.k-grid-delete", "click", function(c) {
                        c.preventDefault(), b.removeRow(a(this).closest("tr"))
                    }))
                },
                editCell: function(a) {
                    var b = this,
                        c = b.columns[b.cellIndex(a)],
                        d = b._modelForContainer(a);
                    d.editable(c.field) && !a.has("a.k-grid-delete").length && (b._editContainer = a, b.editable = a.addClass("k-edit-cell").kendoEditable({
                        fields: {
                            field: c.field,
                            format: c.format
                        },
                        model: d,
                        change: function(c) {
                            b.trigger(x, {
                                values: c.values,
                                container: a,
                                model: d
                            }) && c.preventDefault()
                        }
                    }).data("kendoEditable"), a.parent().addClass("k-grid-edit-row"), b.trigger(w, {
                        container: a,
                        model: d
                    }))
                },
                _distroyEditable: function() {
                    var a = this;
                    a.editable && (a.editable.distroy(), delete a.editable, a._editContainer = null)
                },
                closeCell: function() {
                    var b = this,
                        d = b._editContainer.removeClass("k-edit-cell"),
                        e = d.closest("tr").attr(c.attr("id")),
                        f = b.columns[b.cellIndex(d)],
                        g = b.dataSource.get(e);
                    d.parent().removeClass("k-grid-edit-row"), b._displayCell(d, f, g.data), f.field in (g.changes() || {}) && a('<span class="k-dirty"/>').prependTo(d), b._distroyEditable()
                },
                _displayCell: function(a, b, d) {
                    var e = this,
                        f = {
                            storage: {},
                            count: 0
                        },
                        g = k({}, c.Template, e.options.templateSettings),
                        h = c.template(e._cellTmpl(b, f), g);
                    f.count > 0 && (h = n(h, f.storage)), a.empty().html(h(d))
                },
                removeRow: function(b) {
                    var c = this,
                        d;
                    !c._confirmation() || (b = a(b).hide(), d = c._modelForContainer(b), d && !c.trigger(y, {
                        row: b,
                        model: d
                    }) && c.dataSource.remove(d))
                },
                _showMessage: function(a) {
                    return confirm(a)
                },
                _confirmation: function() {
                    var a = this;
                    confirmation = a.options.editable === !0 ? O : a.options.editable.confirmation;
                    return confirmation !== !1 ? a._showMessage(confirmation) : !0
                },
                cancelChanges: function() {
                    this.dataSource.cancelChanges()
                },
                saveChanges: function() {
                    var a = this;
                    (a.editable && a.editable.end() || !a.editable) && !a.trigger(B) && a.dataSource.sync()
                },
                addRow: function() {
                    var a = this,
                        b = a.dataSource;
                    if (a.editable && a.editable.end() || !a.editable) {
                        var d = b.indexOf((b.view() || [])[0]) || 0,
                            e = b.insert(d, {}),
                            f = e.id(),
                            g = a.table.find("tr[" + c.attr("id") + "=" + f + "] > td:not(.k-group-cell,.k-hierarchy-cell)").first();
                        g.length && a.editCell(g)
                    }
                },
                _toolbar: function() {
                    var b = this,
                        d = b.wrapper,
                        e = b.options.toolbar,
                        f;
                    e && (e = o(e) ? e({}) : typeof e === N ? e : b._toolbarTmpl(e).replace(Q, "\\#"), f = n(c.template(e), b), a('<div class="k-toolbar k-grid-toolbar" />').html(f({})).prependTo(d).delegate(".k-grid-add", J, function(a) {
                        a.preventDefault(), b.addRow()
                    }).delegate(".k-grid-cancel-changes", J, function(a) {
                        a.preventDefault(), b.cancelChanges()
                    }).delegate(".k-grid-save-changes", J, function(a) {
                        a.preventDefault(), b.saveChanges()
                    }))
                },
                _toolbarTmpl: function(a) {
                    var b = this,
                        c, d, e = "",
                        f, g, h, i;
                    if (m(a))
                        for (c = 0, d = a.length; c < d; c++) e += b._createButton(a[c]);
                    return e
                },
                _createButton: function(a) {
                    var b = this,
                        d = a.template || R,
                        e = typeof a === N ? a : a.name,
                        f = {
                            className: "",
                            text: e,
                            imageClass: "",
                            attr: ""
                        };
                    j(a) ? f = k(!0, f, U[e], a) : f = k(!0, f, U[e]);
                    return c.template(d)(f)
                },
                _groupable: function() {
                    var b = this,
                        d = b.wrapper,
                        e = b.options.groupable;
                    e && (d.has("div.k-grouping-header")[0] || a("<div />").addClass("k-grouping-header").html("&nbsp;").prependTo(d), b.groupable = new f(d, {
                        filter: "th:not(.k-group-cell)[" + c.attr("field") + "]",
                        groupContainer: "div.k-grouping-header",
                        dataSource: b.dataSource
                    })), b.table.delegate(".k-grouping-row .k-collapse, .k-grouping-row .k-expand", J, function(c) {
                        var d = a(this),
                            e = d.closest("tr");
                        d.hasClass("k-collapse") ? b.collapseGroup(e) : b.expandGroup(e), c.preventDefault()
                    })
                },
                _selectable: function() {
                    var a = this,
                        b, d, e = a.options.selectable;
                    e && (b = typeof e === N && e.toLowerCase().indexOf("multiple") > -1, d = typeof e === N && e.toLowerCase().indexOf("cell") > -1, a.selectable = new c.ui.Selectable(a.table, {
                        filter: d ? u : s,
                        multiple: b,
                        change: function() {
                            a.trigger(A)
                        }
                    }), a.options.navigatable && a.wrapper.keydown(function(c) {
                        var e = a.current();
                        c.keyCode === i.SPACEBAR && !e.hasClass("k-edit-cell") && (c.preventDefault(), e = d ? e : e.parent(), b ? c.ctrlKey ? e.hasClass(I) && (e.removeClass(I), e = null) : a.selectable.clear() : a.selectable.clear(), a.selectable.value(e))
                    }))
                },
                clearSelection: function() {
                    var a = this;
                    a.selectable.clear(), a.trigger(A)
                },
                select: function(b) {
                    var c = this,
                        d = c.selectable;
                    b = a(b);
                    if (b.length) d.options.multiple || (d.clear(), b = b.first()), d.value(b);
                    else return d.value()
                },
                current: function(a) {
                    var c = this,
                        d = c._current;
                    a !== b && a.length && (!d || d[0] !== a[0]) && (a.addClass(G), d && d.removeClass(G), c._current = a, c._scrollTo(a.parent()[0]));
                    return c._current
                },
                _scrollTo: function(a) {
                    if (!!a && !!this.options.scrollable) {
                        var b = a.offsetTop,
                            c = this.content[0],
                            d = a.offsetHeight,
                            e = c.scrollTop,
                            f = c.clientHeight,
                            g = b + d;
                        c.scrollTop = e > b ? b : g > e + f ? g - f : e
                    }
                },
                _navigatable: function() {
                    var b = this,
                        c = b.wrapper,
                        d = b.table.addClass(H),
                        e = n(b.current, b),
                        f = "." + H + " " + u,
                        g = a.browser,
                        h = function(b) {
                            e(a(b.currentTarget)), b.type == J && !a(b.target).is(":button,a,:input,a>.k-icon,textarea") && c.focus()
                        };
                    b.options.navigatable && (c.bind({
                        focus: function() {
                            var a = b._current;
                            a && a.is(":visible") ? a.addClass(G) : e(b.table.find(v))
                        },
                        focusout: function() {
                            b._current && b._current.removeClass(G)
                        },
                        keydown: function(f) {
                            var h = f.keyCode,
                                j = b.current(),
                                k = f.shiftKey,
                                l = b.dataSource,
                                m = b.options.pageable,
                                n = !a(f.target).is(":button,a,:input,a>.t-icon"),
                                o = !1;
                            if (n && i.UP === h) e(j ? j.parent().prevAll(s).last().children(":eq(" + j.index() + "),:eq(0)").last() : d.find(v)), o = !0;
                            else if (n && i.DOWN === h) e(j ? j.parent().nextAll(s).first().children(":eq(" + j.index() + "),:eq(0)").last() : d.find(v)), o = !0;
                            else if (n && i.LEFT === h) e(j ? j.prevAll(t + ":first") : d.find(v)), o = !0;
                            else if (n && i.RIGHT === h) e(j ? j.nextAll(":visible:first") : d.find(v)), o = !0;
                            else if (n && m && i.PAGEDOWN == h) b._current = null, l.page(l.page() + 1), o = !0;
                            else if (n && m && i.PAGEUP == h) b._current = null, l.page(l.page() - 1), o = !0;
                            else if (b.options.editable)
                                if (i.ENTER == h || i.F12 == h) b._handleEditing(j), o = !0;
                                else if (i.TAB == h) {
                                    var p = k ? j.prevAll(t + ":first") : j.nextAll(":visible:first");
                                    p.length || (p = j.parent()[k ? "prevAll" : "nextAll"]("tr:not(.k-grouping-row,.k-detail-row):visible").children(t + (k ? ":last" : ":first"))), p.length && (b._handleEditing(j, p), o = !0)
                                } else i.ESC == h && j.hasClass("k-edit-cell") && (b.closeCell(), g.msie && parseInt(g.version) < 9 && document.body.focus(), c.focus(), o = !0);
                            o && f.preventDefault()
                        }
                    }), c.delegate(f, g.msie ? J : "mousedown", h))
                },
                _handleEditing: function(b, c) {
                    var d = this,
                        e = b.hasClass("k-edit-cell");
                    if (d.editable) {
                        a.contains(d._editContainer[0], document.activeElement) && document.activeElement.blur();
                        if (d.editable.end()) d.closeCell();
                        else {
                            d.current(d._editContainer), d._editContainer.find(":input:visible:first").focus();
                            return
                        }
                    }
                    c && d.current(c), d.wrapper.focus(), (!e && !c || c) && d.editCell(d.current())
                },
                _wrapper: function() {
                    var a = this,
                        b = a.table,
                        c = a.options.height,
                        d = a.element;
                    d.is("div") || (d = d.wrap("<div/>").parent()), a.wrapper = d.addClass("k-grid k-widget").attr(L, p.max(b.attr(L) || 0, 0)), b.removeAttr(L), c && (a.wrapper.css(K, c), b.css(K, "auto"))
                },
                _tbody: function() {
                    var b = this,
                        c = b.table,
                        d;
                    d = c.find(">tbody"), d.length || (d = a("<tbody/>").appendTo(c)), b.tbody = d
                },
                _scrollable: function() {
                    var b = this,
                        d, e, f = b.options,
                        g = b.wrapper.innerHeight(),
                        h = f.scrollable,
                        i = c.support.scrollbar();
                    if (h) {
                        d = b.wrapper.children().filter(".k-grid-header"), d[0] || (d = a('<div class="k-grid-header" />').insertBefore(b.table)), d.css("padding-right", h.virtual ? i + 1 : i), e = a('<table cellspacing="0" />'), e.append(b.thead), d.empty().append(a('<div class="k-grid-header-wrap" />').append(e)), b.content = b.table.parent(), b.content.is(".k-virtual-scrollable-wrap") && (b.content = b.content.parent()), b.content.is(".k-grid-content, .k-virtual-scrollable-wrap") || (b.content = b.table.wrap('<div class="k-grid-content" />').parent(), h !== !0 && h.virtual && new S(b.content, {
                            dataSource: b.dataSource,
                            itemHeight: n(b._averageRowHeight, b)
                        })), g -= d.outerHeight(), b.pager && (g -= b.pager.element.outerHeight()), f.groupable && (g -= a(".k-grouping-header").outerHeight()), f.toolbar && (g -= a(".k-grid-toolbar").outerHeight()), b.content.height(g);
                        var j = d.find(">.k-grid-header-wrap");
                        h.virtual ? b.content.find(">.k-virtual-scrollable-wrap").bind("scroll", function() {
                            j.scrollLeft(this.scrollLeft)
                        }) : b.content.bind("scroll", function() {
                            j.scrollLeft(this.scrollLeft)
                        })
                    }
                },
                _averageRowHeight: function() {
                    var a = this,
                        b = a._rowHeight;
                    a._rowHeight || (a._rowHeight = b = a.table.outerHeight() / a.table[0].rows.length, a._sum = b, a._measures = 1, totalHeight = p.round(a.dataSource.total() * b));
                    var c = a.table.outerHeight() / a.table[0].rows.length;
                    b !== c && (a._measures++, a._sum += c, a._rowHeight = a._sum / a._measures);
                    return b
                },
                _dataSource: function() {
                    var a = this,
                        c = a.options,
                        d, f = c.dataSource;
                    f = m(f) ? {
                        data: f
                    } : f, j(f) && (k(f, {
                        table: a.table,
                        fields: a.columns
                    }), d = c.pageable, j(d) && d.pageSize !== b && (f.pageSize = d.pageSize)), a.dataSource = e.create(f).bind(A, n(a.refresh, a)).bind(q, n(a._requestStart, a)).bind(r, n(a._error, a)).bind(C, n(a._modelChange, a))
                },
                _error: function() {
                    this._progress(!1)
                },
                _requestStart: function() {
                    this._progress(!0)
                },
                _modelChange: function(b) {
                    var d = this,
                        e = d.tbody.find("tr[" + c.attr("id") + "=" + b.id() + "]"),
                        f = b.changes() || {},
                        g, h, i = e.hasClass("k-alt");
                    e.has(".k-edit-cell") ? e.find(">td:not(.k-group-cell,.k-hierarchy-cell,.k-edit-cell)").each(function() {
                        g = a(this), h = d.columns[d.cellIndex(g)], h.field in f && (d._displayCell(g, h, b.data), a('<span class="k-dirty"/>').prependTo(g))
                    }) : e.replaceWith(a((i ? d.altRowTemplate : d.rowTemplate)(b.data)))
                },
                _pageable: function() {
                    var b = this,
                        d, e = b.options.pageable;
                    e && (d = b.wrapper.children("div.k-grid-pager"), d.length || (d = a('<div class="k-grid-pager"/>').appendTo(b.wrapper)), typeof e == "object" && e instanceof c.ui.Pager ? b.pager = e : b.pager = new c.ui.Pager(d, k({}, e, {
                        dataSource: b.dataSource
                    })))
                },
                _filterable: function() {
                    var b = this,
                        c = b.columns,
                        d = b.options.filterable;
                    d && b.thead.find("th:not(.k-hierarchy-cell)").each(function(e) {
                        c[e].filterable !== !1 && a(this).kendoFilterMenu(k(!0, {}, d, c[e].filterable, {
                            dataSource: b.dataSource
                        }))
                    })
                },
                _sortable: function() {
                    var b = this,
                        c = b.columns,
                        d, e = b.options.sortable;
                    e && b.thead.find("th:not(.k-hierarchy-cell)").each(function(f) {
                        d = c[f], d.sortable !== !1 && !d.command && a(this).kendoSortable(k({}, e, {
                            dataSource: b.dataSource
                        }))
                    })
                },
                _columns: function(b) {
                    var d = this,
                        e = d.table,
                        f, g = e.find("col"),
                        h = d.options.dataSource;
                    b = b.length ? b : l(e.find("th"), function(b, d) {
                        var b = a(b),
                            e = b.attr(c.attr("sortable"));
                        filterable = b.attr(c.attr("filterable")), field = b.attr(c.attr("field")), field || (field = b.text().replace(/\s|[^A-z0-9]/g, ""));
                        return {
                            field: field,
                            sortable: e !== "false",
                            filterable: filterable !== "false",
                            template: b.attr(c.attr("template")),
                            width: g.eq(d).css("width")
                        }
                    }), f = !(d.table.find("tbody tr").length > 0 && (!h || !h.transport)), d.columns = l(b, function(a) {
                        a = typeof a === N ? {
                            field: a
                        } : a;
                        return k({
                            encoded: f
                        }, a)
                    })
                },
                _tmpl: function(a, b) {
                    var d = this,
                        e = k({}, c.Template, d.options.templateSettings),
                        f = e.paramName,
                        g, h = d.columns.length,
                        i, j = d.dataSource.options.schema.model,
                        l = {
                            storage: {},
                            count: 0
                        },
                        m, o, p, q = d._hasDetails(),
                        r = [],
                        s = d.dataSource.group().length;
                    if (!a) {
                        a = "<tr", b && r.push("k-alt"), q && r.push("k-master-row"), r.length && (a += ' class="' + r.join(" ") + '"'), j && (m = j.id, m && (p = typeof m, a += " " + c.attr("id") + '="#=', l.storage["tmpl" + l.count] = p === M ? m : d.dataSource.reader.model.id, a += "this.tmpl" + l.count + "(" + f + ")", l.count++, a += '#"')), a += ">", s > 0 && (a += T(s)), q && (a += '<td class="k-hierarchy-cell"><a class="k-icon k-plus" href="\\#"></a></td>');
                        for (g = 0; g < h; g++) o = d.columns[g], i = o.template, p = typeof i, a += "<td>", a += d._cellTmpl(o, l), a += "</td>";
                        a += "</tr>"
                    }
                    a = c.template(a, e);
                    if (l.count > 0) return n(a, l.storage);
                    return a
                },
                _cellTmpl: function(a, b) {
                    var d = this,
                        e = k({}, c.Template, d.options.templateSettings),
                        f = a.template,
                        g = e.paramName,
                        h = "",
                        i = a.format,
                        j = typeof f;
                    if (a.command) return d._createButton(a.command).replace(Q, "\\#");
                    j === M ? (b.storage["tmpl" + b.count] = f, h += "#=this.tmpl" + b.count + "(" + g + ")#", b.count++) : j === N ? h += f : (h += a.encoded ? "${" : "#=", i && (h += 'kendo.format("' + i.replace(P, "\\}") + '",'), e.useWithBlock || (h += g + "."), h += a.field, i && (h += ")"), h += a.encoded ? "}" : "#");
                    return h
                },
                _templates: function() {
                    var a = this,
                        b = a.options;
                    a.rowTemplate = a._tmpl(b.rowTemplate), a.altRowTemplate = a._tmpl(b.altRowTemplate || b.rowTemplate, !0), a._hasDetails() && (a.detailTemplate = a._detailTmpl(b.detailTemplate || ""))
                },
                _detailTmpl: function(a) {
                    var b = this,
                        d = "",
                        e = k({}, c.Template, b.options.templateSettings),
                        f = e.paramName,
                        g = {},
                        h = 0,
                        i = b.dataSource.group().length,
                        j = b.columns.length,
                        l = typeof a;
                    d += '<tr class="k-detail-row">', i > 0 && (d += T(i)), d += '<td class="k-hierarchy-cell"></td><td class="k-detail-cell"' + (j ? ' colspan="' + j + '"' : "") + ">", l === M ? (g["tmpl" + h] = a, d += "#=this.tmpl" + h + "(" + f + ")#", h++) : d += a, d += "</td></tr>", d = c.template(d, e);
                    if (h > 0) return n(d, g);
                    return d
                },
                _hasDetails: function() {
                    var a = this;
                    return a.options.detailTemplate !== b || (a._events[z] || []).length
                },
                _details: function() {
                    var b = this;
                    b.table.delegate(".k-hierarchy-cell .k-plus, .k-hierarchy-cell .k-minus", J, function(c) {
                        var d = a(this),
                            e = d.hasClass("k-plus"),
                            f = d.closest("tr.k-master-row"),
                            g, h = b.detailTemplate,
                            i, j = b._hasDetails();
                        d.toggleClass("k-plus", !e).toggleClass("k-minus", e), j && !f.next().hasClass("k-detail-row") && (i = b.dataItem(f), a(h(i)).insertAfter(f), b.trigger(z, {
                            masterRow: f,
                            detailRow: f.next(),
                            data: i,
                            detailCell: f.next().find(".k-detail-cell")
                        })), g = f.next(), b.trigger(e ? E : F, {
                            masterRow: f,
                            detailRow: g
                        }), g.toggle(e), c.preventDefault();
                        return !1
                    })
                },
                dataItem: function(b) {
                    return this._data[this.tbody.find("> tr:not(.k-grouping-row,.k-detail-row)").index(a(b))]
                },
                expandRow: function(b) {
                    a(b).find("> td .k-plus, > td .k-expand").click()
                },
                collapseRow: function(b) {
                    a(b).find("> td .k-minus, > td .k-plus").click()
                },
                _thead: function() {
                    var b = this,
                        d = b.columns,
                        e, f, g = "",
                        h = b.table.find("thead"),
                        i, j;
                    h.length || (h = a("<thead/>").insertBefore(b.tbody)), i = b.table.find("tr").filter(":has(th)"), i.length || (i = h.children().first(), i.length || (i = a("<tr/>")));
                    if (!i.children().length) {
                        b._hasDetails() && d.length && (g += '<th class="k-hierarchy-cell">&nbsp;</th>');
                        for (e = 0, f = d.length; e < f; e++) j = d[e], j.command ? g += "<th>" + (j.title || "") + "</th>" : (g += "<th " + c.attr("field") + "='" + j.field + "' ", j.title && (g += c.attr("title") + "='" + j.title + "'"), g += ">" + (j.title || j.field || "") + "</th>");
                        i.html(g)
                    }
                    i.find("th").addClass("k-header"), b.options.scrollable || h.addClass("k-grid-header"), i.appendTo(h), b.thead = h, b._sortable(), b._filterable(), b._scrollable(), b._updateCols()
                },
                _updateCols: function() {
                    var b = this,
                        d = b.thead.parent().add(b.table),
                        e = d.find("colgroup"),
                        f, g = l(b.columns, function(a) {
                            f = a.width;
                            if (f && parseInt(f) != 0) return c.format('<col style="width:{0}"/>', typeof f === N ? f : f + "px");
                            return "<col />"
                        }),
                        h = b.dataSource.group().length;
                    b._hasDetails() && g.splice(0, 0, '<col class="k-hierarchy-col" />'), e.length && e.remove(), e = a("<colgroup/>").append(a(Array(h + 1).join('<col class="k-group-col">') + g.join(""))), d.prepend(e)
                },
                _autoColumns: function(a) {
                    if (a) {
                        var b = this,
                            c;
                        for (c in a) b.columns.push({
                            field: c
                        });
                        b._thead(), b._templates()
                    }
                },
                _rowsHtml: function(a) {
                    var b = this,
                        c = "",
                        d, e, f = b.rowTemplate,
                        g = b.altRowTemplate;
                    for (d = 0, e = a.length; d < e; d++) d % 2 ? c += g(a[d]) : c += f(a[d]), b._data.push(a[d]);
                    return c
                },
                _groupRowHtml: function(b, d, e) {
                    var f = this,
                        g = "",
                        h, i, j = b.field,
                        k = a.grep(f.columns, function(a) {
                                return a.field == j
                            })[0] || {},
                        l = k.format ? c.format(k.format, b.value) : b.value,
                        m = b.items;
                    g += '<tr class="k-grouping-row">' + T(e) + '<td colspan="' + d + '">' + '<p class="k-reset">' + '<a class="k-icon k-collapse" href="#"></a>' + (k.title || j) + ": " + l + "</p></td></tr>";
                    if (b.hasSubgroups)
                        for (h = 0, i = m.length; h < i; h++) g += f._groupRowHtml(m[h], d - 1, e + 1);
                    else g += f._rowsHtml(m);
                    return g
                },
                collapseGroup: function(b) {
                    b = a(b).find(".k-icon").addClass("k-expand").removeClass("k-collapse").end();
                    var c = b.find(".k-group-cell").length;
                    b.nextUntil(function() {
                        return a(".k-group-cell", this).length <= c
                    }).hide()
                },
                expandGroup: function(b) {
                    b = a(b).find(".k-icon").addClass("k-collapse").removeClass("k-expand").end();
                    var c = this,
                        d = b.find(".k-group-cell").length;
                    b.nextAll("tr").each(function() {
                        var b = a(this),
                            e = b.find(".k-group-cell").length;
                        if (e <= d) return !1;
                        e == d + 1 && (b.show(), b.hasClass("k-grouping-row") && b.find(".k-icon").hasClass("k-collapse") && c.expandGroup(b))
                    })
                },
                _updateHeader: function(b) {
                    var c = this,
                        d = c.thead.find("th.k-group-cell"),
                        e = d.length;
                    b > e ? a(Array(b - e + 1).join('<th class="k-group-cell k-header">&nbsp;</th>')).prependTo(c.thead.find("tr")) : b < e && (e = e - b, a(a.grep(d, function(a, b) {
                        return e > b
                    })).remove())
                },
                _firstDataItem: function(a, b) {
                    a && b && (a.hasSubgroups ? a = this._firstDataItem(a.items[0], b) : a = a.items[0]);
                    return a
                },
                _progress: function(a) {
                    var b = this,
                        d = b.element.is("table") ? b.element.parent() : b.content && b.content.length ? b.content : b.element;
                    c.ui.progress(d, a)
                },
                refresh: function() {
                    var b = this,
                        c, d, e = "",
                        f = b.dataSource.view(),
                        h, i, j = (b.dataSource.group() || []).length,
                        k = j + b.columns.length;
                    b._distroyEditable(), b._progress(!1), b._data = [], b.columns.length || (b._autoColumns(b._firstDataItem(f[0], j)), k = j + b.columns.length), b._group = j > 0 || b._group, b._group && (b._templates(), b._updateCols(), b._updateHeader(j), b._group = j > 0);
                    if (j > 0) {
                        b.detailTemplate && k++;
                        for (d = 0, c = f.length; d < c; d++) e += b._groupRowHtml(f[d], k, 0)
                    } else e += b._rowsHtml(f);
                    g ? b.tbody[0].innerHTML = e : (i = document.createElement("div"), i.innerHTML = "<table><tbody>" + e + "</tbody></table>", h = i.firstChild.firstChild, b.table[0].replaceChild(h, b.tbody[0]), b.tbody = a(h)), b.trigger(D)
                }
            });
        d.plugin(V), d.plugin(S)
    }(jQuery),
    function(a, b) {
        function B(a, c) {
            var d, e = c !== b;
            if (document.selection) {
                a.focus();
                var d = document.selection.createRange();
                if (e) d.move("character", c), d.select();
                else {
                    var f = a.createTextRange(),
                        g = f.duplicate();
                    f.moveToBookmark(d.getBookmark()), g.setEndPoint("EndToStart", f), c = g.text.length
                }
            } else a.selectionStart !== b && (e ? (a.focus(), a.setSelectionRange(c, c)) : c = a.selectionStart);
            return c
        }

        function A(a, b) {
            return '<span unselectable="on" class="k-link"><span class="k-icon k-arrow-' + a + '" title="' + b + '">' + b + "</span></span>"
        }
        var c = window.kendo,
            d = c.keys,
            e = c.ui,
            f = e.Widget,
            g = c.parseFloat,
            h = c.support.touch,
            i = "change",
            j = "disabled",
            k = "k-input",
            l = "touchend",
            m = h ? "touchstart" : "mousedown",
            n = h ? "touchmove " + l : "mouseup mouseleave",
            o = "k-hide-text",
            p = "k-state-default",
            q = "k-state-focused",
            r = "k-state-hover",
            s = "mouseenter mouseleave",
            t = ".",
            u = "k-state-selected",
            v = "k-state-disabled",
            w = null,
            x = a.proxy,
            y = {
                190: ".",
                188: ","
            },
            z = f.extend({
                init: function(a, c) {
                    var d = this,
                        e = c && c[l] !== b,
                        h, j, l, m, n;
                    f.fn.init.call(d, a, c), c = d.options, a = d.element.addClass(k).bind({
                        keydown: x(d._keydown, d),
                        paste: x(d._paste, d),
                        blur: x(d._focusout, d)
                    }), a.closest("form").bind("reset", function() {
                        setTimeout(function() {
                            d.value(a[0].value)
                        })
                    }), d._wrapper(), d._arrows(), d._input(), d.bind(i, c), d._text.focus(x(d._click, d)), h = g(a.attr("min")), j = g(a.attr("max")), l = g(a.attr("step")), c.min === w && h !== w && (c.min = h), c.max === w && j !== w && (c.max = j), !e && l !== w && (c.step = l), n = c.format, n.slice(0, 3) === "{0:" && (c.format = n.slice(3, n.length - 1)), m = c.value, d.value(m !== w ? m : a.val()), d.enable(!a.is("[disabled]"))
                },
                options: {
                    name: "NumericTextBox",
                    min: w,
                    max: w,
                    value: w,
                    step: 1,
                    format: "n",
                    upArrowText: "Increase value",
                    downArrowText: "Decrease value"
                },
                enable: function(a) {
                    var b = this,
                        c = b._text,
                        d = b.element;
                    wrapper = b._inputWrapper, upArrow = b._upArrow, downArrow = b._downArrow, upArrow.unbind(m), downArrow.unbind(m), b._toggleText(!0), a === !1 ? (wrapper.removeClass(p).addClass(v).unbind(s), c.add(d).attr(j, j)) : (wrapper.addClass(p).removeClass(v).bind(s, b._toggleHover), c.add(d).removeAttr(j), upArrow.bind(m, function(a) {
                        a.preventDefault(), b._spin(1), b._upArrow.addClass(u)
                    }), downArrow.bind(m, function(a) {
                        a.preventDefault(), b._spin(-1), b._downArrow.addClass(u)
                    }))
                },
                value: function(a) {
                    var c = this;
                    if (a === b) return c._value;
                    c._update(a), c._old = c._value
                },
                _adjust: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.min,
                        e = c.max;
                    d !== w && a < d ? a = d : e !== w && a > e && (a = e);
                    return a
                },
                _arrows: function() {
                    var b = this,
                        d, e = b.options,
                        f = b.element;
                    d = f.siblings(".k-icon"), d[0] || (d = a(A("up", e.upArrowText) + A("down", e.downArrowText)).insertAfter(f), d.wrapAll('<span class="k-select"/>')), d.bind(n, function(a) {
                        (!h || c.eventTarget(a) != a.currentTarget || a.type === l) && clearTimeout(b._spinning), d.removeClass(u)
                    }), b._upArrow = d.eq(0), b._downArrow = d.eq(1)
                },
                _blur: function() {
                    var a = this;
                    a._toggleText(!0), a._change(a.element.val())
                },
                _click: function(a) {
                    var b = this;
                    clearTimeout(b._focusing), b._focusing = setTimeout(function() {
                        var c = a.target,
                            d = B(c),
                            e = c.value.substring(0, d),
                            f = b._format(b.options.format),
                            g = f[","],
                            h = new RegExp("\\" + g, "g"),
                            i = new RegExp("([\\d\\" + g + "]+)(\\" + f[t] + ")?(\\d+)?"),
                            j = i.exec(e),
                            k = 0;
                        j && (k = j[0].replace(h, "").length, e.indexOf("(") != -1 && b._value < 0 && k++), b._focusin(), B(b.element[0], k)
                    })
                },
                _change: function(a) {
                    var b = this;
                    b._update(a), a = b._value, b._old != a && (b._old = a, b.trigger(i), b.element.trigger(i))
                },
                _focusin: function() {
                    var a = this;
                    clearTimeout(a._bluring), a._toggleText(!1), a.element.focus(), a._inputWrapper.addClass(q)
                },
                _focusout: function() {
                    var a = this;
                    a._bluring = setTimeout(function() {
                        a._inputWrapper.removeClass(q), a._blur()
                    }, 100)
                },
                _format: function(a) {
                    var b = this,
                        d = b.options,
                        e = c.culture().numberFormat;
                    a.indexOf("c") > -1 ? e = e.currency : a.indexOf("p") > -1 && (e = e.percent);
                    return e
                },
                _input: function() {
                    var b = this,
                        c = "k-formatted-value",
                        d = b.element.show()[0],
                        e = b.wrapper,
                        f;
                    f = e.find(t + c), f[0] || (f = a("<input />").insertBefore(d).addClass(c)), d.type = "text", f[0].type = "text", f[0].style.cssText = d.style.cssText, b._text = f.attr("readonly", !0).addClass(d.className)
                },
                _keydown: function(a) {
                    var b = this,
                        c = a.keyCode;
                    c == d.DOWN ? b._step(-1) : c == d.UP ? b._step(1) : c == d.ENTER && b._change(b.element.val()), b._prevent(c) && !a.ctrlKey && a.preventDefault()
                },
                _paste: function(a) {
                    var b = this,
                        c = a.target,
                        d = c.value;
                    setTimeout(function() {
                        g(c.value) === w && b._update(d)
                    })
                },
                _prevent: function(a) {
                    var b = this,
                        c = !0,
                        e = b.options.min,
                        f = b.element[0],
                        g = f.value,
                        h = b._format(b.options.format)[t],
                        i = B(f),
                        j;
                    a > 16 && a < 21 || a > 32 && a < 37 || a > 47 && a < 58 || a > 95 && a < 106 || a == 45 || a == 46 || a == d.LEFT || a == d.RIGHT || a == d.TAB || a == d.BACKSPACE || a == d.ENTER ? c = !1 : y[a] === h && g.indexOf(h) == -1 ? c = !1 : !(e === w || e < 0) || g.indexOf("-") != -1 || a != 189 && a != 109 || i != 0 ? a == 110 && g.indexOf(h) == -1 && (j = g.substring(i), f.value = g.substring(0, i) + h + j) : c = !1;
                    return c
                },
                _spin: function(a, b) {
                    var c = this;
                    b = b || 500, clearTimeout(c._spinning), c._spinning = setTimeout(function() {
                        c._spin(a, 50)
                    }, b), c._step(a)
                },
                _step: function(a) {
                    var b = this,
                        c = b.element,
                        d = g(c.val()) || 0;
                    document.activeElement != c[0] && b._focusin(), d += b.options.step * g(a), b._update(b._adjust(d))
                },
                _toggleHover: function(b) {
                    h || a(b.currentTarget).toggleClass(r, b.type === "mouseenter")
                },
                _toggleText: function(a) {
                    var b = this;
                    a = !!a, b._text.toggle(a), b.element.toggle(!a)
                },
                _update: function(a) {
                    var d = this,
                        e = d.options,
                        f = e.format,
                        h = e.decimals,
                        i = d._format(f),
                        j;
                    h === b && (h = i.decimals), a = g(a), j = a !== w, j && (a = parseFloat(a.toFixed(h))), d._value = a = d._adjust(a), d._text.val(j ? c.toString(a, f) : e.placeholder), d.element.val(j ? a.toString().replace(t, i[t]) : "")
                },
                _wrapper: function() {
                    var b = this,
                        c = b.element,
                        d;
                    d = c.parent(), d.is("span.k-widget") || (d = c.hide().wrap('<span class="k-numeric-wrap k-state-default" />').parent(), d = d.wrap("<span/>").parent()), d[0].style.cssText = c[0].style.cssText, b.wrapper = d.addClass("k-widget k-numerictextbox").show(), b._inputWrapper = a(d[0].firstChild)
                }
            });
        e.plugin(z)
    }(jQuery),
    function(a, b) {
        function N(b) {
            b = a(b), b.filter(".k-first:not(:first-child)").removeClass(t), b.filter(".k-last:not(:last-child)").removeClass(p), b.filter(":first-child").addClass(t), b.filter(":last-child").addClass(p)
        }

        function M(b) {
            b = a(b), b.find(".k-icon").remove(), b.filter(":has(.k-group)").children(".k-link:not(:has([class*=k-arrow]))").each(function() {
                var b = a(this),
                    c = b.parent().parent();
                b.append("<span class='k-icon " + (c.hasClass(n + "-horizontal") ? "k-arrow-down" : "k-arrow-next") + "'/>")
            })
        }

        function L(b) {
            b = a(b), b.children(l).addClass(u), b.children("a").addClass(o).children(l).addClass(u), b.filter(":not([disabled])").addClass(C), b.filter(".k-separator:empty").append("&nbsp;"), b.filter("li[disabled]").addClass(D).removeAttr("disabled"), b.children("a:focus").parent().addClass("k-state-active"), b.children("." + o).length || b.contents().filter(function() {
                return !this.nodeName.match(k) && (this.nodeType != 3 || !!a.trim(this.nodeValue))
            }).wrapAll("<span class='" + o + "'/>"), M(b), N(b)
        }

        function K(b, c) {
            try {
                return a.contains(b, c)
            } catch (d) {
                return !1
            }
        }

        function J(a) {
            var b = a.parent();
            return {
                effects: b.hasClass(n) ? b.hasClass(n + "-vertical") ? B : "slideIn:down" : B
            }
        }
        var c = window.kendo,
            d = c.ui,
            e = c.support.touch,
            f = a.extend,
            g = a.proxy,
            h = a.each,
            i = c.template,
            j = d.Widget,
            k = /^(ul|a|div)$/i,
            l = "img",
            m = "open",
            n = "k-menu",
            o = "k-link",
            p = "k-last",
            q = "close",
            r = "click",
            s = "timer",
            t = "k-first",
            u = "k-image",
            v = ":empty",
            w = "select",
            x = "zIndex",
            y = "mouseenter",
            z = "mouseleave",
            A = "kendoPopup",
            B = "slideIn:right",
            C = "k-state-default",
            D = "k-state-disabled",
            E = ".k-item.k-state-disabled",
            F = ".k-item:not(.k-state-disabled)",
            G = ".k-item:not(.k-state-disabled) > .k-link",
            H = {
                group: i("<ul class='#= groupCssClass(group) #'#= groupAttributes(group) #>#= renderItems(data) #</ul>"),
                itemWrapper: i("<#= tag(item) # class='#= textClass(item) #'#= textAttributes(item) #>#= image(item) ##= sprite(item) ##= text(item) ##= arrow(data) #</#= tag(item) #>"),
                item: i("<li class='#= wrapperCssClass(group, item) #'>#= itemWrapper(data) ## if (item.items) { ##= subGroup({ items: item.items, menu: menu, group: { expanded: item.expanded } }) ## } #</li>"),
                image: i("<img class='k-image' alt='' src='#= imageUrl #' />"),
                arrow: i("<span class='#= arrowClass(item, group) #'></span>"),
                sprite: i("<span class='k-sprite #= spriteCssClass #'></span>"),
                empty: i("")
            },
            I = {
                wrapperCssClass: function(a, b) {
                    var c = "k-item",
                        d = b.index;
                    b.enabled === !1 ? c += " k-state-disabled" : c += " k-state-default", a.firstLevel && d == 0 && (c += " k-first"), d == a.length - 1 && (c += " k-last");
                    return c
                },
                textClass: function(a) {
                    return o
                },
                textAttributes: function(a) {
                    return a.url ? " href='" + a.url + "'" : ""
                },
                arrowClass: function(a, b) {
                    var c = "k-icon";
                    b.horizontal ? c += " k-arrow-down" : c += " k-arrow-right";
                    return c
                },
                text: function(a) {
                    return a.encoded === !1 ? a.text : c.htmlEncode(a.text)
                },
                tag: function(a) {
                    return a.url ? "a" : "span"
                },
                groupAttributes: function(a) {
                    return a.expanded !== !0 ? " style='display:none'" : ""
                },
                groupCssClass: function(a) {
                    return "k-group"
                }
            },
            O = j.extend({
                init: function(b, c) {
                    b = a(b);
                    var d = this;
                    j.fn.init.call(d, b, c), c = d.options, d.element.is(v) && d.element.append(a(O.renderGroup({
                        items: c.dataSource,
                        group: {
                            firstLevel: !0,
                            horizontal: d.element.hasClass(n + "-horizontal"),
                            expanded: !0
                        },
                        menu: {}
                    })).children()), d._updateClasses(), c.animation === !1 && (c.animation = {
                        open: {
                            show: !0,
                            effects: {}
                        },
                        close: {
                            hide: !0,
                            effects: {}
                        }
                    }), d.nextItemZIndex = 100, b.delegate(E, r, !1), b.delegate(F, y, g(d._mouseenter, d)).delegate(F, z, g(d._mouseleave, d)).delegate(F, r, g(d._click, d)), b.delegate(G, y + " " + z, d._toggleHover), a(document).click(g(d._documentClick, d)), d.clicked = !1, d.bind([m, q, w], d.options)
                },
                options: {
                    name: "Menu",
                    animation: {
                        open: {
                            duration: 200,
                            show: !0
                        },
                        close: {
                            duration: 100,
                            show: !1,
                            hide: !0
                        }
                    },
                    orientation: "horizontal",
                    openOnClick: !1,
                    hoverDelay: 100
                },
                enable: function(a, b) {
                    this._toggleDisabled(a, b !== !1)
                },
                disable: function(a) {
                    this._toggleDisabled(a, !1)
                },
                append: function(b, c) {
                    c = a(c);
                    var d = this._insert(b, c, c.length ? c.find("> .k-group, .k-animation-container > .k-group") : null);
                    h(d.items, function() {
                        d.group.append(this), N(this)
                    }), M(c), N(d.group.find(".k-first, .k-last"))
                },
                insertBefore: function(b, c) {
                    c = a(c);
                    var d = this._insert(b, c, c.parent());
                    h(d.items, function() {
                        c.before(this), N(this)
                    }), N(c)
                },
                insertAfter: function(b, c) {
                    c = a(c);
                    var d = this._insert(b, c, c.parent());
                    h(d.items, function() {
                        c.after(this), N(this)
                    }), N(c)
                },
                _insert: function(b, c, d) {
                    var e = this;
                    if (!c || !c.length) d = e.element;
                    var g = a.isPlainObject(b),
                        h, i = {
                            firstLevel: d.hasClass(n),
                            horizontal: d.hasClass(n + "-horizontal"),
                            expanded: !0,
                            length: d.children().length
                        };
                    c && !d.length && (d = a(O.renderGroup({
                        group: i
                    })).appendTo(c)), g || a.isArray(b) ? h = a.map(g ? [b] : b, function(b, c) {
                        return a(O.renderItem({
                            group: i,
                            item: f(b, {
                                index: c
                            })
                        }))
                    }) : (h = a(b), L(h));
                    return {
                        items: h,
                        group: d
                    }
                },
                remove: function(b) {
                    b = a(b);
                    var c = this,
                        d = b.parentsUntil(c.element, ".k-item"),
                        e = b.parent("ul");
                    b.remove();
                    if (e && !e.children(".k-item").length) {
                        var f = e.parent(".k-animation-container");
                        f.length ? f.remove() : e.remove()
                    }
                    d.length && (d = d.eq(0), M(d), N(d))
                },
                open: function(b) {
                    var c = this;
                    a(b).each(function() {
                        var b = a(this);
                        clearTimeout(b.data(s)), b.data(s, setTimeout(function() {
                            var a = b.find(".k-group:first:hidden"),
                                d;
                            if (a[0]) {
                                b.data(x, b.css(x)), b.css(x, c.nextItemZIndex++), d = a.data(A);
                                var e = b.parent().hasClass(n + "-horizontal");
                                d || (d = a.kendoPopup({
                                    origin: e ? "bottom left" : "top right",
                                    position: "top left",
                                    collision: e ? "fit" : "fit flip",
                                    anchor: b,
                                    appendTo: b,
                                    animation: {
                                        open: f(J(b), c.options.animation.open),
                                        close: c.options.animation.close
                                    }
                                }).data(A)), d.open()
                            }
                        }, c.options.hoverDelay))
                    })
                },
                close: function(b) {
                    var c = this;
                    a(b).each(function() {
                        var b = a(this);
                        clearTimeout(b.data(s)), b.data(s, setTimeout(function() {
                            var a = b.find(".k-group:first:visible"),
                                c;
                            a[0] && (b.css(x, b.data(x)), b.removeData(x), c = a.data(A), c.close())
                        }, c.options.hoverDelay))
                    })
                },
                _toggleDisabled: function(b, c) {
                    a(b).each(function() {
                        a(this).toggleClass(C, c).toggleClass(D, !c)
                    })
                },
                _toggleHover: function(b) {
                    var c = a(b.currentTarget);
                    c.parents("li." + D).length || c.toggleClass("k-state-hover", b.type == y)
                },
                _updateClasses: function() {
                    var a = this;
                    a.element.addClass("k-widget k-reset k-header " + n).addClass(n + "-" + a.options.orientation);
                    var b = a.element.find("ul").addClass("k-group").end().find("li").addClass("k-item");
                    b.each(function() {
                        L(this)
                    })
                },
                _mouseenter: function(b) {
                    var c = this,
                        d = a(b.currentTarget),
                        e = d.children(".k-animation-container").length || d.children(".k-group").length;
                    (!c.options.openOnClick || c.clicked) && !K(b.currentTarget, b.relatedTarget) && e && c.trigger(m, {
                        item: d[0]
                    }) === !1 && c.open(d), c.options.openOnClick && c.clicked && (c.trigger(q, {
                        item: d[0]
                    }), d.siblings().each(g(function(a, b) {
                        c.close(b)
                    }, c)))
                },
                _mouseleave: function(b) {
                    var c = this,
                        d = a(b.currentTarget),
                        e = d.children(".k-animation-container").length || d.children(".k-group").length;
                    !c.options.openOnClick && !K(b.currentTarget, b.relatedTarget) && e && c.trigger(q, {
                        item: d[0]
                    }) === !1 && c.close(d)
                },
                _click: function(b) {
                    var c = this,
                        d, f = a(b.currentTarget);
                    if (f.hasClass(D)) b.preventDefault();
                    else {
                        b.handled || c.trigger(w, {
                            item: f[0]
                        }), b.handled = !0;
                        if (!f.parent().hasClass(n) || !c.options.openOnClick && !e) return;
                        b.preventDefault(), c.clicked = !0, d = f.children(".k-animation-container, .k-group").is(":visible") ? q : m, c.trigger(d, {
                            item: f[0]
                        }), c[d](f)
                    }
                },
                _documentClick: function(a) {
                    var b = this;
                    K(b.element[0], a.target) || b.clicked && (b.clicked = !1, b.close(b.element.find(".k-item>.k-animation-container:visible").parent()))
                }
            });
        f(O, {
            renderItem: function(a) {
                a = f({
                    menu: {},
                    group: {}
                }, a);
                var b = H.empty,
                    c = a.item,
                    d = a.menu;
                return H.item(f(a, {
                    image: c.imageUrl ? H.image : b,
                    sprite: c.spriteCssClass ? H.sprite : b,
                    itemWrapper: H.itemWrapper,
                    arrow: c.items ? H.arrow : b,
                    subGroup: O.renderGroup
                }, I))
            },
            renderGroup: function(a) {
                return H.group(f({
                    renderItems: function(a) {
                        var b = "",
                            c = 0,
                            d = a.items,
                            e = d ? d.length : 0,
                            g = f({
                                length: e
                            }, a.group);
                        for (; c < e; c++) b += O.renderItem(f(a, {
                            group: g,
                            item: f({
                                index: c
                            }, d[c])
                        }));
                        return b
                    }
                }, a, I))
            }
        }), c.ui.plugin(O)
    }(jQuery),
    function(a, b) {
        function n(a) {
            var b = a.model.fields[a.field],
                d = b.type,
                e = b.validation,
                f, j = c.attr("type"),
                k, l = {
                    name: a.field
                };
            for (f in e) k = e[f], i(f, m) >= 0 ? l[j] = f : g(k) || (l[f] = h(k) ? k.value || f : k), l[c.attr(f + "-msg")] = k.message;
            i(d, m) >= 0 && (l[j] = d);
            return l
        }
        var c = window.kendo,
            d = c.ui,
            e = d.Widget,
            f = a.extend,
            g = a.isFunction,
            h = a.isPlainObject,
            i = a.inArray,
            j = c.data.ModelViewBinder,
            k = d.Validator,
            l = "change",
            m = ["url", "email", "number", "date", "boolean"],
            o = {
                number: function(b, d) {
                    var e = n(d);
                    a('<input type="text"/>').attr(e).appendTo(b).kendoNumericTextBox({
                        format: d.format
                    }), a("<span " + c.attr("for") + '="' + d.field + '" class="k-invalid-msg"/>').hide().appendTo(b)
                },
                date: function(b, d) {
                    var e = n(d);
                    e[c.attr("format")] = d.format, a('<input type="text"/>').attr(e).appendTo(b).kendoDatePicker({
                        format: d.format
                    }), a("<span " + c.attr("for") + '="' + d.field + '" class="k-invalid-msg"/>').hide().appendTo(b)
                },
                string: function(b, c) {
                    var d = n(c);
                    a('<input type="text" class="k-input k-textbox"/>').attr(d).appendTo(b)
                },
                "boolean": function(b, c) {
                    var d = n(c);
                    a('<input type="checkbox" />').attr(d).appendTo(b)
                }
            },
            p = e.extend({
                init: function(a, b) {
                    var c = this;
                    e.fn.init.call(c, a, b), c.bind([l], c.options), c.refresh()
                },
                options: {
                    name: "Editable",
                    editors: o
                },
                editor: function(a, b) {
                    var c = this,
                        d = c.options.editors,
                        e = h(a),
                        g = e ? a.field : a,
                        i = c.options.model || {},
                        j = b && b.type ? b.type : "string",
                        k = e && a.editor ? a.editor : d[j];
                    k = k ? k : d.string, b && k(c.element, f(!0, {}, e ? a : {
                        field: g
                    }, {
                        model: i
                    }))
                },
                _binderChange: function(a) {
                    var b = this;
                    (!b.validatable.validate() || b.trigger(l, {
                        values: a.values
                    })) && a.preventDefault()
                },
                end: function() {
                    return this.binder.bindModel()
                },
                distroy: function() {
                    this.element.removeData("kendoValidator").removeData("kendoEditable")
                },
                refresh: function() {
                    var b = this,
                        d, e, f = b.options.fields || [],
                        i = b.element.empty(),
                        k = b.options.model || {},
                        m = {},
                        n = {};
                    a.isArray(f) || (f = [f]);
                    for (d = 0, e = f.length; d < e; d++) {
                        var o = f[d],
                            p = h(o),
                            q = p ? o.field : o,
                            r = (k.fields || {})[q],
                            s = r ? r.type : null,
                            t = r ? r.validation || {} : {};
                        for (var u in t) g(t[u]) && (m[u] = t[u]);
                        p && o.format && s == "date" && (n[q] = {
                            format: function(a) {
                                return c.format(o.format, a)
                            },
                            parse: function(a) {
                                return c.parseDate(a, o.format)
                            }
                        }), b.editor(o, r)
                    }
                    n[l] = a.proxy(b._binderChange, b), b.binder = new j(i, b.options.model, n), b.validatable = i.kendoValidator({
                        errorTemplate: '<div class="k-widget k-tooltip k-tooltip-validation" style="margin:0.5em"><span class="k-icon k-warning"> </span>${message}<div class="k-callout k-callout-n"></div></div>',
                        rules: m
                    }).data("kendoValidator"), i.find(":input:visible:first").focus()
                }
            });
        d.plugin(p)
    }(jQuery),
    function(a, b) {
        function q(b) {
            var c = {},
                d, e, f, g, h, i, j, k, l;
            for (d = 0, e = b.length; d < e; d++) {
                g = b[d].name.split(/[\.\[\]]+/), g = a.grep(g, function(a) {
                    return a
                }), i = b[d].value, j = c, l = c;
                for (h = 0; h < g.length - 1; h++) f = g[h], isNaN(f) || (k = g[h - 1], a.isArray(l[k]) || (j = l[k] = [])), l = j, j = j[f] = j[f] || {};
                j[g[h]] = i
            }
            return c
        }

        function p(a, b) {
            var c = a.data(e) || a.data(f) || a.data(g);
            c ? c.value(b) : a.is(":radio") ? a.filter("[value=" + b + "]").attr("checked", "checked") : a.val(b)
        }

        function o(b, c) {
            b.filters && (b.filters = a.grep(b.filters, function(a) {
                o(a, c);
                return a.field != c
            }))
        }
        var c = window.kendo,
            d = c.ui,
            e = "kendoDropDownList",
            f = "kendoNumericTextBox",
            g = "kendoDatePicker",
            h = a.proxy,
            i = "kendoPopup",
            j = "Is equal to",
            k = "Is not equal to",
            l = d.Widget,
            m = '<div><input type="hidden" name="filters[0].field" value="#=field#"/><input type="hidden" name="filters[0].operator" value="eq"/><div class="k-filter-help-text">#=messages.info#</div><label>#=messages.isTrue#<input type="radio" name="filters[0].value" value="true"/></label><label>#=messages.isFalse#<input type="radio" name="filters[0].value" value="false"/></label><button type="submit" class="k-button">#=messages.filter#</button><button type="reset" class="k-button">#=messages.clear#</button></div>',
            n = '<div><input type="hidden" name="filters[0].field" value="#=field#"/><input type="hidden" name="filters[1].field" value="#=field#"/><div class="k-filter-help-text">#=messages.info#</div><select name="filters[0].operator">#for(var op in operators){#<option value="#=op#">#=operators[op]#</option>#}#</select><input name="filters[0].value" class="k-widget k-input k-autocomplete" type="text" data-#=ns#type="#=type#"/>#if(extra){#<select name="logic" class="k-filter-and"><option value="and">And</option><option value="or">Or</option></select><select name="filters[1].operator">#for(var op in operators){#<option value="#=op#">#=operators[op]#</option>#}#</select><input name="filters[1].value" class="k-widget k-input k-autocomplete" type="text" data-#=ns#type="#=type#"/>#}#<button type="submit" class="k-button">#=messages.filter#</button><button type="reset" class="k-button">#=messages.clear#</button></div>',
            r = l.extend({
                init: function(b, d) {
                    var j = this,
                        k = "string",
                        o, p, q, r;
                    l.fn.init.call(j, b, d), r = d.operators || {}, b = j.element, d = j.options, o = b.addClass("k-filterable").find("k-grid-filter"), o[0] || (o = b.prepend('<a class="k-grid-filter" href="#"><span class="k-icon k-filter"/></a>').find(".k-grid-filter")), o.click(h(j._click, j)), j.dataSource = d.dataSource.bind("change", h(j.refresh, j)), j.field = b.attr(c.attr("field")), j.model = j.dataSource.reader.model, j._parse = function(a) {
                        return a + ""
                    }, j.model && j.model.fields && (p = j.model.fields[j.field], p && (k = p.type, j._parse = h(p.parse, p))), r = r[k] || d.operators[k], j.form = a('<form class="k-filter-menu k-group"/>'), j.form.html(c.template(k === "boolean" ? m : n)({
                        field: j.field,
                        ns: c.ns,
                        messages: d.messages,
                        extra: d.extra,
                        operators: r,
                        type: k
                    })), j.popup = j.form[i]({
                        anchor: o,
                        open: h(j._open, j)
                    }).data(i), j.link = o, j.form.bind({
                        submit: h(j._submit, j),
                        reset: h(j._reset, j)
                    }).find("select")[e]().end().find("[" + c.attr("type") + "=number]")[f]().end().find("[" + c.attr("type") + "=date]")[g](), j.refresh()
                },
                refresh: function() {
                    var a = this,
                        b = a.form,
                        c = a.dataSource.filter() || {
                                filters: [],
                                logic: "and"
                            },
                        d = c.filters,
                        e, f, g, h = 0;
                    for (f = 0, g = d.length; f < g; f++) e = d[f], e.field == a.field && (p(b.find("[name='filters[" + h + "].value']"), a._parse(e.value)), p(b.find("[name='filters[" + h + "].operator']"), e.operator), h++);
                    h > 0 ? (p(b.find("[name=logic]"), c.logic), a.link.addClass("k-state-active")) : a.link.removeClass("k-state-active")
                },
                _merge: function(b) {
                    var c = this,
                        d = b.logic || "and",
                        e = b.filters,
                        f, g = c.dataSource.filter() || {
                                filters: [],
                                logic: "and"
                            },
                        h, i;
                    o(g, c.field), e = a.grep(e, function(a) {
                        return a.value != ""
                    });
                    for (h = 0, i = e.length; h < i; h++) f = e[h], f.value = c._parse(f.value);
                    e.length && (g.filters.length ? (b.filters = e, g.logic !== "and" && (g.filters = [{
                        logic: g.logic,
                        filters: g.filters
                    }], g.logic = "and"), e.length > 1 ? g.filters.push(b) : g.filters.push(e[0])) : (g.filters = e, g.logic = d));
                    return g
                },
                filter: function(a) {
                    a = this._merge(a), a.filters.length && this.dataSource.filter(a)
                },
                clear: function() {
                    var b = this,
                        c = b.dataSource.filter() || {
                                filters: []
                            };
                    c.filters = a.grep(c.filters, function(a) {
                        return a.field != b.field
                    }), c.filters.length || (c = null), b.dataSource.filter(c)
                },
                _submit: function(a) {
                    var b = this;
                    a.preventDefault(), b.filter(q(b.form.serializeArray())), b.popup.close()
                },
                _reset: function(a) {
                    this.clear(), this.popup.close()
                },
                _click: function(a) {
                    a.preventDefault(), a.stopPropagation(), this.popup.toggle()
                },
                _open: function() {
                    a(".k-filter-menu").not(this.form).each(function() {
                        a(this).data(i).close()
                    })
                },
                options: {
                    name: "FilterMenu",
                    extra: !0,
                    type: "string",
                    operators: {
                        string: {
                            eq: j,
                            neq: k,
                            startswith: "Starts with",
                            contains: "Contains",
                            endswith: "Ends with"
                        },
                        number: {
                            eq: j,
                            neq: k,
                            gte: "Is greater than or equal to",
                            gt: "Is greater than",
                            lte: "Is less than or equal to",
                            lt: "Is less than"
                        },
                        date: {
                            eq: j,
                            neq: k,
                            gte: "Is after or equal to",
                            gt: "Is after",
                            lte: "Is before or equal to",
                            lt: "Is before"
                        }
                    },
                    messages: {
                        info: "Show rows with value that:",
                        isTrue: "is true",
                        isFalse: "is false",
                        filter: "Filter",
                        clear: "Clear"
                    }
                }
            });
        d.plugin(r)
    }(jQuery),
    function(a, b) {
        function R(b) {
            b = a(b), b.filter(".k-first:not(:first-child)").removeClass(r), b.filter(".k-last:not(:last-child)").removeClass(l), b.filter(":first-child").addClass(r), b.filter(":last-child").addClass(l)
        }

        function Q(b) {
            b = a(b), b.children(".k-link").children(".k-icon").remove(), b.filter(":has(.k-group),:has(.k-content)").children(".k-link:not(:has([class*=k-arrow]))").each(function() {
                var b = a(this),
                    c = b.parent();
                b.append("<span class='k-icon " + (c.hasClass(A.substr(1)) ? "k-arrow-up k-panelbar-collapse" : "k-arrow-down k-panelbar-expand") + "'/>")
            })
        }

        function P(b, c) {
            b = a(b).addClass("k-item"), b.children(j).addClass(q), b.children("a").addClass(m).children(j).addClass(q), b.filter(":not([disabled]):not([class*=k-state])").addClass("k-state-default"), b.filter("li[disabled]").addClass("k-state-disabled").removeAttr("disabled"), b.filter(":not([class*=k-state])").children("a:focus").parent().addClass(A.substr(1)), b.find(">div").addClass(u).css({
                display: "none"
            }), b.each(function() {
                var b = a(this);
                b.children("." + m).length || b.contents().filter(function() {
                    return !this.nodeName.match(i) && (this.nodeType != 3 || !!a.trim(this.nodeValue))
                }).wrapAll("<span class='" + m + "'/>")
            }), c.find(" > li > ." + m).addClass("k-header")
        }
        var c = window.kendo,
            d = c.ui,
            e = a.extend,
            f = a.each,
            g = c.template,
            h = d.Widget,
            i = /^(ul|a|div)$/i,
            j = "img",
            k = "href",
            l = "k-last",
            m = "k-link",
            n = "error",
            o = "click",
            p = ".k-item",
            q = "k-image",
            r = "k-first",
            s = "expand",
            t = "select",
            u = "k-content",
            v = "collapse",
            w = "contentUrl",
            x = "mouseenter",
            y = "mouseleave",
            z = "contentLoad",
            A = ".k-state-active",
            B = "> .k-group",
            C = "> .k-content",
            D = ".k-state-selected",
            E = ".k-state-disabled",
            F = ".k-state-highlighted",
            G = p + ":not(.k-state-disabled) .k-link",
            H = p + ".k-state-disabled .k-link",
            I = "k-state-default",
            J = ":visible",
            K = ":empty",
            L = "single",
            M = !1,
            N = {
                content: g("<div class='k-content'#= contentAttributes(data) #>#= content(item) #</div>"),
                group: g("<ul class='#= groupCssClass(group) #'#= groupAttributes(group) #>#= renderItems(data) #</ul>"),
                itemWrapper: g("<#= tag(item) # class='#= textClass(item, group) #'#= contentUrl(item) ##= textAttributes(item) #>#= image(item) ##= sprite(item) ##= text(item) ##= arrow(data) #</#= tag(item) #>"),
                item: g("<li class='#= wrapperCssClass(group, item) #'>#= itemWrapper(data) ## if (item.items) { ##= subGroup({ items: item.items, panelBar: panelBar, group: { expanded: item.expanded } }) ## } #</li>"),
                image: g("<img class='k-image' alt='' src='#= imageUrl #' />"),
                arrow: g("<span class='#= arrowClass(item, group) #'></span>"),
                sprite: g("<span class='k-sprite #= spriteCssClass #'></span>"),
                empty: g("")
            },
            O = {
                wrapperCssClass: function(a, b) {
                    var c = "k-item",
                        d = b.index;
                    b.enabled === !1 ? c += " k-state-disabled" : c += " k-state-default", d == 0 && (c += " k-first"), d == a.length - 1 && (c += " k-last");
                    return c
                },
                textClass: function(a, b) {
                    var c = m;
                    b.firstLevel && (c += " k-header");
                    return c
                },
                textAttributes: function(a) {
                    return a.url ? " href='" + a.url + "'" : ""
                },
                arrowClass: function(a, b) {
                    var c = "k-icon";
                    b.horizontal ? c += " k-arrow-down" : c += " k-arrow-right";
                    return c
                },
                text: function(a) {
                    return a.encoded === !1 ? a.text : c.htmlEncode(a.text)
                },
                tag: function(a) {
                    return a.url ? "a" : "span"
                },
                groupAttributes: function(a) {
                    return a.expanded !== !0 ? " style='display:none'" : ""
                },
                groupCssClass: function(a) {
                    return "k-group"
                },
                contentAttributes: function(a) {
                    return a.active !== !0 ? " style='display:none'" : ""
                },
                content: function(a) {
                    return a.content ? a.content : a.contentUrl ? "" : "&nbsp;"
                },
                contentUrl: function(a) {
                    return a.contentUrl ? c.attr("content-url") + '="' + a.contentUrl + '"' : ""
                }
            },
            S = h.extend({
                init: function(b, c) {
                    b = a(b);
                    var d = this,
                        e;
                    h.fn.init.call(d, b, c), c = d.options, d.element.is(K) && d.element.append(a(S.renderGroup({
                        items: c.dataSource,
                        group: {
                            firstLevel: !0,
                            expanded: !0
                        },
                        panelBar: {}
                    })).children()), d._updateClasses(), c.animation === !1 && (c.animation = {
                        open: {
                            show: !0,
                            effects: {}
                        },
                        close: {
                            hide: !0,
                            effects: {}
                        }
                    }), b.delegate(G, o, a.proxy(d._click, d)).delegate(G, x + " " + y, d._toggleHover).delegate(H, o, !1), d.bind([s, v, t, n, z], d.options), d.options.contentUrls && b.find("> .k-item").each(function(b, c) {
                        a(c).find("." + m).data(w, d.options.contentUrls[b])
                    }), e = b.find("li" + A + " > ." + u), e.length > 0 && d.expand(e.parent(), !1)
                },
                options: {
                    name: "PanelBar",
                    animation: {
                        open: {
                            effects: "expandVertical",
                            duration: 200,
                            show: !0
                        },
                        close: {
                            duration: 200,
                            show: !1,
                            hide: !0
                        }
                    },
                    expandMode: "multiple"
                },
                expand: function(b, c) {
                    var d = this,
                        e = {};
                    c = c !== !1, a(b).each(function(f, g) {
                        g = a(g);
                        var h = g.find(B).add(g.find(C));
                        if (!g.hasClass(E) && h.length > 0) {
                            if (d.options.expandMode == L && d._collapseAllExpanded(g)) return;
                            b.find(F).removeClass(F.substr(1)), g.addClass(F.substr(1)), c || (e = d.options.animation, d.options.animation = {
                                open: {
                                    show: !0,
                                    effects: {}
                                },
                                close: {
                                    hide: !0,
                                    effects: {}
                                }
                            }), d._toggleItem(g, !1, null), c || (d.options.animation = e)
                        }
                    })
                },
                collapse: function(b, c) {
                    var d = this,
                        e = {};
                    c = c !== !1, a(b).each(function(b, f) {
                        f = a(f);
                        var g = f.find(B).add(f.find(C));
                        !f.hasClass(E) && g.is(J) && (f.removeClass(F.substr(1)), c || (e = d.options.animation, d.options.animation = {
                            open: {
                                show: !0,
                                effects: {}
                            },
                            close: {
                                hide: !0,
                                effects: {}
                            }
                        }), d._toggleItem(f, !0, null), c || (d.options.animation = e))
                    })
                },
                toggle: function(b, c) {
                    a(b).toggleClass(I, c).toggleClass(E.substr(1), !c)
                },
                select: function(b) {
                    var c = this;
                    if (arguments.length === 0) return c.element.find(".k-item > " + D).parent();
                    a(b).each(function(b, d) {
                        d = a(d);
                        var e = d.children("." + m);
                        d.is(E) || (a(D, c.element).removeClass(D.substr(1)), a(F, c.element).removeClass(F.substr(1)), e.addClass(D.substr(1)), e.parentsUntil(c.element, p).filter(":has(.k-header)").addClass(F.substr(1)))
                    })
                },
                enable: function(a, b) {
                    this.toggle(a, b !== !1)
                },
                disable: function(a) {
                    this.toggle(a, !1)
                },
                append: function(b, c) {
                    c = a(c);
                    var d = this._insert(b, c, c.length ? c.find("> .k-group") : null);
                    f(d.items, function(b) {
                        d.group.append(this);
                        var c = d.contents[b];
                        c && a(this).append(c), R(this)
                    }), Q(c), R(d.group.find(".k-first, .k-last")), d.group.height("auto")
                },
                insertBefore: function(b, c) {
                    c = a(c);
                    var d = this._insert(b, c, c.parent());
                    f(d.items, function(b) {
                        c.before(this);
                        var e = d.contents[b];
                        e && a(this).append(e), R(this)
                    }), R(c), d.group.height("auto")
                },
                insertAfter: function(b, c) {
                    c = a(c);
                    var d = this._insert(b, c, c.parent());
                    f(d.items, function(b) {
                        c.after(this);
                        var e = d.contents[b];
                        e && a(this).append(e), R(this)
                    }), R(c), d.group.height("auto")
                },
                remove: function(b) {
                    b = a(b);
                    var c = this,
                        d = b.parentsUntil(c.element, p),
                        e = b.parent("ul");
                    b.remove(), e && !e.children(p).length && e.remove(), d.length && (d = d.eq(0), Q(d), R(d))
                },
                _insert: function(b, c, d) {
                    var f = this,
                        g = [];
                    if (!c || !c.length) d = f.element;
                    var h = a.isPlainObject(b),
                        i, j = {
                            firstLevel: d.hasClass("k-panelbar"),
                            expanded: d.parent().hasClass("k-state-active"),
                            length: d.children().length
                        };
                    c && !d.length && (d = a(S.renderGroup({
                        group: j
                    })).appendTo(c)), h || a.isArray(b) ? (i = a.map(h ? [b] : b, function(b, c) {
                        return typeof b == "string" ? a(b) : a(S.renderItem({
                            group: j,
                            item: e(b, {
                                index: c
                            })
                        }))
                    }), g = a.map(h ? [b] : b, function(b, c) {
                        return b.content || b.contentUrl ? a(S.renderContent({
                            item: e(b, {
                                index: c
                            })
                        })) : !1
                    })) : (i = a(b), P(i, f.element));
                    return {
                        items: i,
                        group: d,
                        contents: g
                    }
                },
                _toggleHover: function(b) {
                    var c = a(b.currentTarget);
                    c.parents("li" + E).length || c.toggleClass("k-state-hover", b.type == x)
                },
                _updateClasses: function() {
                    var a = this;
                    a.element.addClass("k-widget k-reset k-header k-panelbar");
                    var b = a.element.find("ul").addClass("k-group").end().find("li:not(" + A + ") > ul").css({
                        display: "none"
                    }).end().find("li");
                    b.each(function() {
                        P(this, a.element)
                    }), Q(b), R(b)
                },
                _click: function(b) {
                    var c = this,
                        d = a(b.currentTarget),
                        e = c.element;
                    if (!d.parents("li" + E).length) {
                        if (d.closest(".k-widget")[0] != e[0]) return;
                        var f = d.closest("." + m),
                            g = f.closest(p);
                        a(D, e).removeClass(D.substr(1)), a(F, e).removeClass(F.substr(1)), f.addClass(D.substr(1)), f.parentsUntil(c.element, p).filter(":has(.k-header)").addClass(F.substr(1));
                        var h = g.find(B).add(g.find(C)),
                            i = f.attr(k),
                            j = f.data(w) || i && (i.charAt(i.length - 1) == "#" || i.indexOf("#" + c.element[0].id + "-") != -1);
                        if (h.data("animating")) return;
                        c._triggerEvent(t, g) && b.preventDefault();
                        if (j || h.length) b.preventDefault();
                        else return;
                        if (c.options.expandMode == L && c._collapseAllExpanded(g)) return;
                        if (h.length) {
                            var l = h.is(J);
                            c._triggerEvent(l ? v : s, g) || c._toggleItem(g, l, b)
                        }
                    }
                },
                _toggleItem: function(a, b, c) {
                    var d = this,
                        e = a.find("> .k-group");
                    if (e.length) this._toggleGroup(e, b), c && c.preventDefault();
                    else {
                        var f = a.find("> ." + u);
                        f.length && (c && c.preventDefault(), f.is(K) ? d._ajaxRequest(a, f, b) : d._toggleGroup(f, b))
                    }
                },
                _toggleGroup: function(a, b) {
                    var c = this,
                        d = "effects" in c.options.animation.close,
                        f = e({}, c.options.animation.open);
                    a.is(J) == b && (b && a.css("height", a.height()), a.css("height"), a.parent().toggleClass(I, b).toggleClass(A.substr(1), !b).find("> .k-link > .k-icon").toggleClass("k-arrow-up", !b).toggleClass("k-panelbar-collapse", !b).toggleClass("k-arrow-down", b).toggleClass("k-panelbar-expand", b), a.kendoStop(!0, !0).kendoAnimate(e(d && b ? c.options.animation.close : !d && b ? e(f, {
                        show: !1,
                        hide: !0
                    }) : c.options.animation.open, {
                        reverse: !d && b
                    })))
                },
                _collapseAllExpanded: function(b) {
                    var c = this;
                    if (b.find("> ." + m).hasClass("k-header")) {
                        var d = b.find(B).add(b.find(C));
                        if (d.is(J) || d.length == 0) return !0;
                        var e = a(c.element).children();
                        e.find(B).add(e.find(C)).filter(function() {
                            return a(this).is(J)
                        }).each(function(b, d) {
                            c._toggleGroup(a(d), !0)
                        })
                    }
                },
                _ajaxRequest: function(b, c, d) {
                    var e = this,
                        f = b.find(".k-panelbar-collapse, .k-panelbar-expand"),
                        g = b.find("." + m),
                        h = setTimeout(function() {
                            f.addClass("k-loading")
                        }, 100),
                        i = {};
                    a.ajax({
                        type: "GET",
                        cache: !1,
                        url: g.data(w) || g.attr(k),
                        dataType: "html",
                        data: i,
                        error: function(a, b) {
                            e.trigger(n, {
                                xhr: a,
                                status: b
                            }) && this.complete()
                        },
                        complete: function() {
                            clearTimeout(h), f.removeClass("k-loading")
                        },
                        success: function(a, f) {
                            c.html(a), e._toggleGroup(c, d), e.trigger(z, {
                                item: b[0],
                                contentElement: c[0]
                            })
                        }
                    })
                },
                _triggerEvent: function(a, b) {
                    var c = this;
                    c.trigger(a, {
                        item: b[0]
                    })
                }
            });
        e(S, {
            renderItem: function(a) {
                a = e({
                    panelBar: {},
                    group: {}
                }, a);
                var b = N.empty,
                    c = a.item,
                    d = a.panelBar;
                return N.item(e(a, {
                    image: c.imageUrl ? N.image : b,
                    sprite: c.spriteCssClass ? N.sprite : b,
                    itemWrapper: N.itemWrapper,
                    arrow: c.items ? N.arrow : b,
                    subGroup: S.renderGroup
                }, O))
            },
            renderGroup: function(a) {
                return N.group(e({
                    renderItems: function(a) {
                        var b = "",
                            c = 0,
                            d = a.items,
                            f = d ? d.length : 0,
                            g = e({
                                length: f
                            }, a.group);
                        for (; c < f; c++) b += S.renderItem(e(a, {
                            group: g,
                            item: e({
                                index: c
                            }, d[c])
                        }));
                        return b
                    }
                }, a, O))
            },
            renderContent: function(a) {
                return N.content(e(a, O))
            }
        }), c.ui.plugin(S)
    }(jQuery),
    function(a, b) {
        function L(a) {
            var b = a.children(".k-item");
            b.filter(".k-first:not(:first-child)").removeClass(t), b.filter(".k-last:not(:last-child)").removeClass(o), b.filter(":first-child").addClass(t), b.filter(":last-child").addClass(o)
        }

        function K(b) {
            b.children(l).addClass(s), b.children("a").addClass(n).children(l).addClass(s), b.filter(":not([disabled]):not([class*=k-state-disabled])").addClass(E), b.filter("li[disabled]").addClass(D).removeAttr("disabled"), b.filter(":not([class*=k-state])").children("a:focus").parent().addClass(F + " " + H), b.each(function() {
                var b = a(this);
                b.children("." + n).length || b.contents().filter(function() {
                    return !this.nodeName.match(k) && (this.nodeType != 3 || !!g(this.nodeValue))
                }).wrapAll("<a class='" + n + "'/>")
            })
        }
        var c = window.kendo,
            d = c.ui,
            e = a.map,
            f = a.each,
            g = a.trim,
            h = a.extend,
            i = c.template,
            j = d.Widget,
            k = /^(a|div)$/i,
            l = "img",
            m = "href",
            n = "k-link",
            o = "k-last",
            p = "click",
            q = "error",
            r = ":empty",
            s = "k-image",
            t = "k-first",
            u = "select",
            v = "k-content",
            w = "contentUrl",
            x = "mouseenter",
            y = "mouseleave",
            z = "contentLoad",
            A = ".k-tabstrip-items > .k-item:not(.k-state-disabled)",
            B = ".k-tabstrip-items > .k-item:not(.k-state-disabled):not(.k-state-active)",
            C = ".k-tabstrip-items > .k-state-disabled .k-link",
            D = "k-state-disabled",
            E = "k-state-default",
            F = "k-state-active",
            G = "k-state-hover",
            H = "k-tab-on-top",
            I = {
                content: i("<div class='k-content'#= contentAttributes(data) #>#= content(item) #</div>"),
                itemWrapper: i("<#= tag(item) # class='k-link'#= contentUrl(item) ##= textAttributes(item) #>#= image(item) ##= sprite(item) ##= text(item) #</#= tag(item) #>"),
                item: i("<li class='#= wrapperCssClass(group, item) #'>#= itemWrapper(data) #</li>"),
                image: i("<img class='k-image' alt='' src='#= imageUrl #' />"),
                sprite: i("<span class='k-sprite #= spriteCssClass #'></span>"),
                empty: i("")
            },
            J = {
                wrapperCssClass: function(a, b) {
                    var c = "k-item",
                        d = b.index;
                    b.enabled === !1 ? c += " k-state-disabled" : c += " k-state-default", d == 0 && (c += " k-first"), d == a.length - 1 && (c += " k-last");
                    return c
                },
                textAttributes: function(a) {
                    return a.url ? " href='" + a.url + "'" : ""
                },
                text: function(a) {
                    return a.encoded === !1 ? a.text : c.htmlEncode(a.text)
                },
                tag: function(a) {
                    return a.url ? "a" : "span"
                },
                contentAttributes: function(a) {
                    return a.active !== !0 ? " style='display:none'" : ""
                },
                content: function(a) {
                    return a.content ? a.content : a.contentUrl ? "" : "&nbsp;"
                },
                contentUrl: function(a) {
                    return a.contentUrl ? c.attr("content-url") + '="' + a.contentUrl + '"' : ""
                }
            },
            M = j.extend({
                init: function(b, c) {
                    b = a(b), b.is("ul") && (b = b.wrapAll("<div />").parent());
                    var d = this;
                    c && "animation" in c && !c.animation && (c.animation = {
                        open: {
                            effects: {}
                        },
                        close: {
                            effects: {}
                        }
                    }), j.fn.init.call(d, b, c), c = d.options, b.delegate(A, p, a.proxy(d._click, d)).delegate(B, x + " " + y, d._toggleHover).delegate(C, p, !1), d.bind([u, q, z], d.options), d._updateClasses(), d.tabGroup.is(r) && c.dataSource && d.append(c.dataSource), d.options.contentUrls && b.find(".k-tabstrip-items > .k-item").each(function(b, c) {
                        a(c).find(">." + n).data(w, d.options.contentUrls[b])
                    });
                    var e = b.find("li." + F),
                        f = a(d.contentElement(e.parent().children().index(e)));
                    f.length > 0 && f[0].childNodes.length == 0 && d.activateTab(e.eq(0))
                },
                options: {
                    name: "TabStrip",
                    animation: {
                        open: {
                            effects: "expandVertical fadeIn",
                            duration: 200,
                            show: !0
                        },
                        close: {
                            duration: 200,
                            show: !1,
                            hide: !0
                        }
                    },
                    collapsible: !1
                },
                select: function(b) {
                    var c = this;
                    if (arguments.length == 0) return c.element.find("li." + F);
                    a(b).each(function(b, d) {
                        d = a(d), d.hasClass(F) || c.activateTab(d)
                    })
                },
                enable: function(a, b) {
                    this._toggleDisabled(a, b !== !1)
                },
                disable: function(a) {
                    this._toggleDisabled(a, !1)
                },
                reload: function(b) {
                    var c = this;
                    a(b).each(function() {
                        var b = a(this),
                            d = b.find("." + n).data(w);
                        d && c.ajaxRequest(b, a(c.contentElement(b.index())), null, d)
                    })
                },
                append: function(a) {
                    var b = this,
                        c = b._create(a);
                    f(c.tabs, function(a) {
                        b.tabGroup.append(this), b.element.append(c.contents[a])
                    }), L(b.tabGroup), b._updateContentElements()
                },
                insertBefore: function(b, c) {
                    var d = this,
                        e = this._create(b),
                        g = a(d.contentElement(c.index()));
                    f(e.tabs, function(a) {
                        c.before(this), g.before(e.contents[a])
                    }), L(d.tabGroup), d._updateContentElements()
                },
                insertAfter: function(b, c) {
                    var d = this,
                        e = this._create(b),
                        g = a(d.contentElement(c.index()));
                    f(e.tabs, function(a) {
                        c.after(this), g.after(e.contents[a])
                    }), L(d.tabGroup), d._updateContentElements()
                },
                remove: function(b) {
                    b = a(b);
                    var c = this,
                        d = a(c.contentElement(b.index()));
                    d.remove(), b.remove(), c._updateContentElements()
                },
                _create: function(b) {
                    var c = a.isPlainObject(b),
                        d = this,
                        f, g;
                    c || a.isArray(b) ? (f = e(c ? [b] : b, function(b, c) {
                        return a(M.renderItem({
                            group: d.tabGroup,
                            item: h(b, {
                                index: c
                            })
                        }))
                    }), g = e(c ? [b] : b, function(b, c) {
                        return a(M.renderContent({
                            item: h(b, {
                                index: c
                            })
                        }))
                    })) : (f = a(b), g = a("<div class='" + v + "'/>"), K(f));
                    return {
                        tabs: f,
                        contents: g
                    }
                },
                _toggleDisabled: function(b, c) {
                    a(b).each(function() {
                        a(this).toggleClass(E, c).toggleClass(D, !c)
                    })
                },
                _updateClasses: function() {
                    var c = this,
                        d, e, f;
                    c.element.addClass("k-widget k-header k-tabstrip"), c.tabGroup = c.element.children("ul").addClass("k-tabstrip-items k-reset"), c.tabGroup.length || (c.tabGroup = a("<ul class='k-tabstrip-items k-reset'/>").appendTo(c.element)), d = c.tabGroup.find("li").addClass("k-item"), d.length && (e = d.filter("." + F).index(), f = e >= 0 ? e : b, c.tabGroup.contents().filter(function() {
                        return this.nodeType == 3 && !g(this.nodeValue)
                    }).remove()), d.eq(e).addClass(H), c.contentElements = c.element.children("div"), c.contentElements.addClass(v).eq(f).addClass(F).css({
                        display: "block"
                    }), d.length && (K(d), L(c.tabGroup), c._updateContentElements())
                },
                _updateContentElements: function() {
                    var b = this,
                        c = b.element.attr("id");
                    b.contentElements = b.element.children("div"), b.tabGroup.find(".k-item").each(function(d) {
                        var e = b.contentElements.eq(d),
                            f = c + "-" + (d + 1),
                            g = a(this).children("." + n).attr(m);
                        e.length ? e.attr("id", f) : a("<div id='" + f + "' class='" + v + "'/>").appendTo(b.element)
                    }), b.contentElements = b.element.children("div")
                },
                _toggleHover: function(b) {
                    a(b.currentTarget).toggleClass(G, b.type == x)
                },
                _click: function(b) {
                    var c = this,
                        d = a(b.currentTarget),
                        e = d.find("." + n),
                        f = e.attr(m),
                        g = c.options.collapsible,
                        h = a(c.contentElement(d.index()));
                    if (d.is("." + D + (g ? "" : ",." + F))) b.preventDefault();
                    else {
                        if (a("." + v, this.element).filter(function() {
                                return a(this).data("animating")
                            }).length) return;
                        if (c.trigger(u, {
                                item: d[0],
                                contentElement: h[0]
                            })) b.preventDefault();
                        else {
                            var i = e.data(w) || f && (f.charAt(f.length - 1) == "#" || f.indexOf("#" + c.element[0].id + "-") != -1);
                            if (!f || i) b.preventDefault();
                            else return;
                            if (g && d.is("." + F)) {
                                c.deactivateTab(d), b.preventDefault();
                                return
                            }
                            c.activateTab(d) && b.preventDefault()
                        }
                    }
                },
                deactivateTab: function(a) {
                    var b = this,
                        d = b.options.animation.close,
                        e = b.options.animation.open;
                    d = d && "effects" in d ? d : h(h({
                        reverse: !0
                    }, e), {
                        show: !1,
                        hide: !0
                    }), c.size(e.effects) ? (a.kendoAddClass(E, {
                        duration: e.duration
                    }), a.kendoRemoveClass(F, {
                        duration: e.duration
                    })) : (a.addClass(E), a.removeClass(F)), b.contentElements.filter("." + F).kendoStop(!0, !0).kendoAnimate(d).removeClass(F)
                },
                activateTab: function(b) {
                    var d = this,
                        e = d.options.animation.open,
                        f = d.options.animation.close,
                        g = b.parent().children(),
                        i = g.filter("." + F),
                        j = g.index(b);
                    f = f && "effects" in f ? f : h(h({
                        reverse: !0
                    }, e), {
                        show: !1,
                        hide: !0
                    }), c.size(e.effects) ? (i.kendoRemoveClass(F, {
                        duration: f.duration
                    }), b.kendoRemoveClass(G, {
                        duration: f.duration
                    })) : (i.removeClass(F), b.removeClass(G));
                    var k = d.contentElements;
                    if (k.length == 0) return !1;
                    var l = k.filter("." + F),
                        m = a(d.contentElement(j));
                    if (m.length == 0) {
                        l.removeClass(F).kendoStop(!0, !0).kendoAnimate(f);
                        return !1
                    }
                    var o = (b.children("." + n).data(w) || !1) && m.is(r),
                        p = function() {
                            i.removeClass(H), b.addClass(H).css("z-index"), c.size(e.effects) ? (i.kendoAddClass(E, {
                                duration: e.duration
                            }), b.kendoAddClass(F, {
                                duration: e.duration
                            })) : (i.addClass(E), b.addClass(F)), m.addClass(F).kendoStop(!0, !0).kendoAnimate(e)
                        },
                        q = function() {
                            o ? d.ajaxRequest(b, m, function() {
                                p()
                            }) : p()
                        };
                    l.removeClass(F), l.length ? l.kendoStop(!0, !0).kendoAnimate(h({
                        complete: q
                    }, f)) : q();
                    return !0
                },
                contentElement: function(a) {
                    if (!isNaN(a - 0)) {
                        var b = this.contentElements,
                            c = new RegExp("-" + (a + 1) + "$");
                        for (var d = 0, e = b.length; d < e; d++)
                            if (c.test(b[d].id)) return b[d]
                    }
                },
                ajaxRequest: function(b, c, d, e) {
                    if (!b.find(".k-loading").length) {
                        var f = this,
                            g = b.find("." + n),
                            h = {},
                            i = null,
                            j = setTimeout(function() {
                                i = a("<span class='k-icon k-loading'/>").prependTo(g)
                            }, 100);
                        a.ajax({
                            type: "GET",
                            cache: !1,
                            url: e || g.data(w) || g.attr(m),
                            dataType: "html",
                            data: h,
                            error: function(a, b) {
                                f.trigger("error", {
                                    xhr: a,
                                    status: b
                                }) && this.complete()
                            },
                            complete: function() {
                                clearTimeout(j), i !== null && i.remove()
                            },
                            success: function(a, e) {
                                c.html(a), d && d.call(f, c), f.trigger(z, {
                                    item: b[0],
                                    contentElement: c[0]
                                })
                            }
                        })
                    }
                }
            });
        h(M, {
            renderItem: function(a) {
                a = h({
                    tabStrip: {},
                    group: {}
                }, a);
                var b = I.empty,
                    c = a.item,
                    d = a.tabStrip;
                return I.item(h(a, {
                    image: c.imageUrl ? I.image : b,
                    sprite: c.spriteCssClass ? I.sprite : b,
                    itemWrapper: I.itemWrapper
                }, J))
            },
            renderContent: function(a) {
                return I.content(h(a, J))
            }
        }), c.ui.plugin(M)
    }(jQuery),
    function(a, b) {
        function C(a, b, c) {
            var d = B(b),
                e = B(c),
                f;
            if (!a || d == e) return !0;
            f = B(a), d > f && (f += t), e < d && (e += t);
            return f >= d && f <= e
        }

        function B(a) {
            return a.getHours() * 60 * s + a.getMinutes() * s + a.getSeconds() * 1e3 + a.getMilliseconds()
        }

        function A(a, b) {
            var c = a.getTimezoneOffset(),
                d = new x(a.getTime() + b),
                e = d.getTimezoneOffset() - c;
            a.setTime(d.getTime() + e * s)
        }
        var c = window.kendo,
            d = c.support.touch,
            e = c.keys,
            f = c.ui,
            g = f.Widget,
            e = c.keys,
            h = "change",
            i = d ? "touchend" : "click",
            j = "k-state-default",
            k = "disabled",
            l = "li",
            m = "<div/>",
            n = "<span/>",
            o = "k-state-focused",
            p = "k-state-hover",
            q = "mouseenter mouseleave",
            r = d ? "touchstart" : "mousedown",
            s = 6e4,
            t = 864e5,
            u = "k-state-selected",
            v = "k-state-disabled",
            w = a.proxy,
            x = Date,
            y = new x;
        y = new x(y.getFullYear(), y.getMonth(), y.getDate(), 0, 0, 0);
        var z = function(b) {
            var d = this,
                e;
            d.options = b, d.ul = a('<ul class="k-list k-reset"/>').css({
                overflow: "auto"
            }).bind(r, b.clearBlurTimeout).delegate(l, i, w(d._click, d)).delegate(l, "mouseenter", function() {
                a(this).addClass(p)
            }).delegate(l, "mouseleave", function() {
                a(this).removeClass(p)
            }), d.list = a("<div class='k-list-container'/>").append(d.ul), d._popup(), d.template = c.template('<li class="k-item" unselectable="on">#=data#</li>', {
                useWithBlock: !1
            })
        };
        z.prototype = {
            current: function(c) {
                var d = this;
                if (c !== b) d._current && d._current.removeClass(u), c && (c = a(c), c.addClass(u), d.scroll(c[0])), d._current = c;
                else return d._current
            },
            close: function() {
                this.popup.close()
            },
            open: function() {
                var a = this;
                a.ul[0].firstChild || a.refresh(), a.popup.open(), a._current && a.scroll(a._current[0])
            },
            refresh: function() {
                var a = this,
                    b = a.options,
                    d = b.format,
                    e = b.min,
                    f = b.max,
                    g = B(e),
                    h = B(f),
                    i = b.interval * s,
                    j = c.toString,
                    k = a.template,
                    l = new x(e),
                    m = t / i,
                    n = 0,
                    m, o = "";
                g != h && (g > h && (h += t), m = (h - g) / i + 1);
                for (; n < m; n++) n && A(l, i), h && B(l) > h && (l = new x(f)), o += k(j(l, d));
                a.ul[0].innerHTML = o, a._height(m), a.select(a._value)
            },
            scroll: function(a) {
                if (!!a) {
                    var b = this.ul[0],
                        c = a.offsetTop,
                        d = a.offsetHeight,
                        e = b.scrollTop,
                        f = b.clientHeight,
                        g = c + d;
                    b.scrollTop = e > c ? c : g > e + f ? g - f : e
                }
            },
            select: function(b) {
                var c = this,
                    d = c._current;
                typeof b == "string" && (!d || d.text() !== b ? (b = a.grep(c.ul[0].childNodes, function(a) {
                    return (a.textContent || a.innerText) == b
                }), b = b[0] ? b : null) : b = d), c.current(b)
            },
            toggle: function() {
                var a = this;
                a.popup.visible() ? a.close() : a.open()
            },
            value: function(a) {
                var b = this;
                b._value = a, b.ul[0].firstChild && b.select(a)
            },
            _click: function(b) {
                var c = this,
                    d = a(b.currentTarget);
                c.select(d), c.options.change(d.text(), !0), c.close()
            },
            _height: function(a) {
                if (a) {
                    var b = this,
                        c = b.list,
                        d = c.parent(".k-animation-container"),
                        e = b.options.height;
                    c.add(d).show().height(b.ul[0].scrollHeight > e ? e : "auto").hide()
                }
            },
            _popup: function() {
                var a = this,
                    b = a.list,
                    c = a.options,
                    d = c.anchor,
                    e;
                a.popup = new f.Popup(b, {
                    anchor: d,
                    open: c.open,
                    close: c.close,
                    animation: c.animation
                }), e = d.outerWidth() - (b.outerWidth() - b.width()), b.css({
                    fontFamily: d.css("font-family"),
                    width: e
                })
            },
            move: function(a) {
                var b = this,
                    c = a.keyCode,
                    d = b.ul[0],
                    f = b._current,
                    g = c === e.DOWN;
                if (c === e.UP || g) {
                    if (a.altKey) {
                        b.toggle(g);
                        return
                    }
                    g ? f = f ? f[0].nextSibling : d.firstChild : f = f ? f[0].previousSibling : d.lastChild, f && b.select(f), b.options.change(b._current.text()), a.preventDefault()
                } else if (c === e.ENTER || c === e.TAB || c === e.ESC) a.preventDefault(), b.close()
            }
        }, c.TimeView = z;
        var D = g.extend({
            init: function(b, d) {
                var e = this;
                g.fn.init.call(e, b, d), b = e.element, d = e.options, d.format = d.format || c.culture().calendar.patterns.t, e._wrapper(), e.timeView = new z(a.extend({}, d, {
                    anchor: e.wrapper,
                    format: d.format,
                    change: function(a, c) {
                        c ? e._change(a) : b.val(a)
                    },
                    clearBlurTimeout: w(e._clearBlurTimeout, e)
                })), e._icon(), b.addClass("k-input").bind({
                    keydown: w(e._keydown, e),
                    focus: function(a) {
                        clearTimeout(e._bluring), e._inputWrapper.addClass(o)
                    },
                    blur: w(e._blur, e)
                }).closest("form").bind("reset", function() {
                    e.value(b[0].defaultValue)
                }), e.bind(h, d), e.enable(!b.is("[disabled]")), e.value(d.value || b.val())
            },
            options: {
                name: "TimePicker",
                min: y,
                max: y,
                value: null,
                interval: 30,
                height: 200
            },
            enable: function(a) {
                var b = this,
                    c = b._arrow,
                    d = b.element,
                    e = b._inputWrapper;
                c.unbind(i).unbind(r), a === !1 ? (e.removeClass(j).addClass(v).unbind(q), d.attr(k, k)) : (e.removeClass(v).addClass(j).bind(q, b._toggleHover), d.removeAttr(k), c.bind(i, w(b._click, b)).bind(r, w(b._clearBlurTimeout, b)))
            },
            close: function() {
                this.timeView.close()
            },
            open: function() {
                this.timeView.open()
            },
            min: function(a) {
                return this._option("min", a)
            },
            max: function(a) {
                return this._option("max", a)
            },
            value: function(a) {
                var c = this;
                if (a === b) return c._value;
                c._old = c._update(a)
            },
            _blur: function() {
                var a = this;
                a._bluring = setTimeout(function() {
                    a._change(a.element.val()), d || a.close(), a._inputWrapper.removeClass(o)
                }, 100)
            },
            _clearBlurTimeout: function() {
                var a = this;
                setTimeout(function() {
                    clearTimeout(a._bluring), a.element.focus()
                })
            },
            _click: function() {
                this.timeView.toggle()
            },
            _change: function(a) {
                var b = this;
                a = b._update(a), +b._old != +a && (b._old = a, b.trigger(h), b.element.trigger(h))
            },
            _icon: function() {
                var b = this,
                    c = b.element,
                    d;
                d = c.next("span.k-select"), d[0] || (d = a('<span class="k-select"><span class="k-icon k-icon-clock">select</span></span>').insertAfter(c)), b._arrow = d
            },
            _keydown: function(a) {
                var b = this,
                    c = a.keyCode,
                    d = c == e.ENTER,
                    f = b.timeView;
                (f.popup.visible() || a.altKey || d) && f.move(a), d && b._change(b.element.val())
            },
            _option: function(a, c) {
                var d = this,
                    e = d.options;
                if (c === b) return e[a];
                c = d._parse(c);
                !c || (c = new x(c), e[a] = c, d.timeView.options[a] = c, d.timeView.refresh())
            },
            _parse: function(a) {
                var b = this,
                    d = b._value || y;
                if (a instanceof x) return a;
                a = c.parseDate(a, b.options.format), a && (a = new x(d.getFullYear(), d.getMonth(), d.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()));
                return a
            },
            _toggleHover: function(b) {
                d || a(b.currentTarget).toggleClass(p, b.type === "mouseenter")
            },
            _update: function(a) {
                var b = this,
                    d = b._value,
                    e = b.options,
                    f = b._parse(a),
                    g = c.toString(f, e.format);
                C(f, e.min, e.max) || (f = null), b._value = f, b.element.val(f ? g : a), b.timeView.value(g);
                return f
            },
            _wrapper: function() {
                var b = this,
                    c = b.element,
                    d;
                d = c.parents(".k-timepicker"), d[0] || (d = c.wrap(n).parent().addClass("k-picker-wrap k-state-default"), d = d.wrap(n).parent()), d[0].style.cssText = c[0].style.cssText, c.css({
                    width: "100%",
                    height: "auto"
                }), b.wrapper = d.addClass("k-widget k-timepicker k-header"), b._inputWrapper = a(d[0].firstChild)
            }
        });
        f.plugin(D)
    }(jQuery),
    function(a, b) {
        function E(a) {
            var b = this;
            b.treeview = a, b._draggable = new d.Draggable(a.element, {
                filter: "div:not(.k-state-disabled) .k-in",
                hint: function(a) {
                    return z.dragClue({
                        text: a.text()
                    })
                },
                dragstart: h(b.dragstart, b),
                drag: h(b.drag, b),
                dragend: h(b.dragend, b)
            })
        }

        function D(a, b, c) {
            var d = a.find(">div"),
                e = a.find(">ul");
            c || (c = {
                expanded: e.css("display") != "none",
                index: a.index(),
                enabled: !d.find(">.k-in").hasClass("k-state-disabled")
            }), b || (b = {
                firstLevel: a.parent().parent().hasClass(t),
                length: a.parent().children().length
            }), a.removeClass("k-first k-last").addClass(A.wrapperCssClass(b, c)), d.removeClass("k-top k-mid k-bot").addClass(A.cssClass(b, c)), e.length && (d.find(">.k-icon").removeClass("k-plus k-minus k-plus-disabled k-minus-disabled").addClass(A.toggleButtonClass(c)), e.addClass("k-group"))
        }

        function C(b) {
            var c = b.find(">div"),
                d = b.find(">ul"),
                e = c.find(">.k-icon"),
                f = c.find(">.k-in");
            c.length || (c = a("<div />").prependTo(b));
            if (!e.length && d.length) e = a("<span class='k-icon' />").prependTo(c);
            else if (!d.length || !d.children().length) e.remove(), d.remove();
            if (!f.length) {
                f = a("<span class='k-in' />").appendTo(c)[0], currentNode = c[0].nextSibling, f = c.find(".k-in")[0];
                while (currentNode && currentNode.nodeName.toLowerCase() != "ul") tmp = currentNode, currentNode = currentNode.nextSibling, f.appendChild(tmp)
            }
        }
        var c = window.kendo,
            d = c.ui,
            e = a.extend,
            f = c.template,
            g = d.Widget,
            h = a.proxy,
            i = "select",
            j = "expand",
            k = "collapse",
            l = "dragstart",
            m = "drag",
            n = "nodeDragCancelled",
            o = "drop",
            p = "dragend",
            q = "click",
            r = "visibility",
            s = "k-state-hover",
            t = "k-treeview",
            u = "k-item",
            v = ":visible",
            w = ".k-item",
            x = ">.k-group,>.k-animation-container>.k-group",
            y = x + ",>.k-content,>.k-animation-container>.k-content",
            z, A, B;
        z = {
            dragClue: f("<div class='k-header k-drag-clue'><span class='k-icon k-drag-status'></span>#= text #</div>"),
            group: f("<ul class='#= groupCssClass(group) #'#= groupAttributes(group) #>#= renderItems(data) #</ul>"),
            itemWrapper: f("<div class='#= cssClass(group, item) #'>#= toggleButton(data) #<#= tag(item) # class='#= textClass(item) #'#= textAttributes(item) #>#= image(item) ##= sprite(item) ##= text(item) #</#= tag(item) #></div>"),
            item: f("<li class='#= wrapperCssClass(group, item) #'>#= itemWrapper(data) ## if (item.items) { ##= subGroup({ items: item.items, treeview: treeview, group: { expanded: item.expanded } }) ## } #</li>"),
            image: f("<img class='k-image' alt='' src='#= imageUrl #' />"),
            toggleButton: f("<span class='#= toggleButtonClass(item) #'></span>"),
            sprite: f("<span class='k-sprite #= spriteCssClass #'></span>"),
            empty: f("")
        }, B = g.extend({
            init: function(b, c) {
                var d = this,
                    e = ".k-in:not(.k-state-selected,.k-state-disabled)",
                    f;
                c = a.isArray(c) ? (f = !0, {
                    dataSource: c
                }) : c, g.prototype.init.call(d, b, c), b = d.element, c = d.options, c.animation === !1 && (c.animation = {
                    expand: {
                        show: !0,
                        effects: {}
                    },
                    collapse: {
                        hide: !0,
                        effects: {}
                    }
                }), b.hasClass(t) ? (d.wrapper = b, d.root = b.children("ul").eq(0)) : (d._wrapper(), d.root.length ? d._group(d.wrapper) : d.root = d.wrapper.html(B.renderGroup({
                    items: c.dataSource,
                    group: {
                        firstLevel: !0,
                        expanded: !0
                    },
                    treeview: {}
                })).children("ul")), d.wrapper.delegate(".k-in.k-state-selected", "mouseenter", function(a) {
                    a.preventDefault()
                }).delegate(e, "mouseenter", function() {
                    a(this).addClass(s)
                }).delegate(e, "mouseleave", function() {
                    a(this).removeClass(s)
                }).delegate(e, q, h(d._nodeClick, d)).delegate("div:not(.k-state-disabled) .k-in", "dblclick", h(d._toggleButtonClick, d)).delegate(".k-plus,.k-minus", q, h(d._toggleButtonClick, d)), c.dragAndDrop && (d.bind([l, m, o, p], c), d.dragging = new E(d)), d.bind([j, k, i], c)
            },
            options: {
                name: "TreeView",
                dataSource: {},
                animation: {
                    expand: {
                        effects: "expandVertical",
                        duration: 200,
                        show: !0
                    },
                    collapse: {
                        duration: 100,
                        show: !1,
                        hide: !0
                    }
                }
            },
            _trigger: function(a, b) {
                return this.trigger(a, {
                    node: b.closest(w)[0]
                })
            },
            _toggleButtonClick: function(b) {
                this.toggle(a(b.target).closest(w))
            },
            _nodeClick: function(b) {
                var c = this,
                    d = a(b.target),
                    e = d.closest(w).find(y),
                    f = d.attr("href"),
                    g;
                f ? g = f == "#" || f.indexOf("#" + this.element.id + "-") >= 0 : g = e.length && !e.children().length, g && b.preventDefault(), !d.hasClass(".k-state-selected") && !c._trigger("select", d) && c.select(d)
            },
            _wrapper: function() {
                var a = this,
                    b = a.element,
                    c, d, e = "k-widget k-treeview k-reset";
                b.is("div") ? (c = b.addClass(e), d = c.children("ul").eq(0)) : (c = b.wrap('<div class="' + e + '" />').parent(), d = b), a.wrapper = c, a.root = d
            },
            _group: function(a) {
                var b = this,
                    d = a.hasClass(t),
                    e = {
                        firstLevel: d,
                        expanded: d || a.attr(c.attr("expanded")) === "true"
                    },
                    f = a.find("> ul");
                f.addClass(A.groupCssClass(e)).css("display", e.expanded ? "" : "none"), b._nodes(f, e)
            },
            _nodes: function(b, d) {
                var f = this,
                    g = b.find("> li"),
                    h;
                d = e({
                    length: g.length
                }, d), g.each(function(b, e) {
                    e = a(e), h = {
                        index: b,
                        expanded: e.attr(c.attr("expanded")) === "true"
                    }, C(e), D(e, d, h), f._group(e)
                })
            },
            _processNodes: function(b, c) {
                var d = this;
                d.element.find(b).each(function(b, e) {
                    c.call(d, b, a(e).closest(w))
                })
            },
            expand: function(a) {
                this._processNodes(a, function(a, b) {
                    var c = b.find(y);
                    c.length > 0 && !c.is(v) && this.toggle(b)
                })
            },
            collapse: function(a) {
                this._processNodes(a, function(a, b) {
                    var c = b.find(y);
                    c.length > 0 && c.is(v) && this.toggle(b)
                })
            },
            enable: function(a, b) {
                b = arguments.length == 2 ? !!b : !0, this._processNodes(a, function(a, c) {
                    var d = !c.find(y).is(v);
                    b || (this.collapse(c), d = !0), c.find(">div").find(">.k-in").toggleClass("k-state-default", b).toggleClass("k-state-disabled", !b).end().find(">.k-icon").toggleClass("k-plus", d && b).toggleClass("k-plus-disabled", d && !b).toggleClass("k-minus", !d && b).toggleClass("k-minus-disabled", !d && !b)
                })
            },
            select: function(b) {
                var c = this.element;
                if (arguments.length == 0) return c.find(".k-state-selected").closest(w);
                b = a(b).closest(w), b.length && (c.find(".k-in").removeClass("k-state-hover k-state-selected"), b.find(".k-in:first").addClass("k-state-selected"))
            },
            toggle: function(b) {
                b = a(b);
                if (b.find(".k-minus,.k-plus").length != 0) {
                    if (b.find("> div > .k-state-disabled").length) return;
                    var c = this,
                        d = b.find(y),
                        f = !d.is(v),
                        g = c.options.animation || {},
                        h = g.expand,
                        i = g.collapse,
                        j = i && "effects" in i;
                    if (d.data("animating")) return;
                    f || (h = j ? i : e({
                        reverse: !0
                    }, h, {
                        show: !1,
                        hide: !0
                    })), d.children().length > 0 && (c._trigger(f ? "expand" : "collapse", b) || (b.find("> div > .k-icon").toggleClass("k-minus", f).toggleClass("k-plus", !f), f || d.css("height", d.height()).css("height"), d.kendoStop(!0, !0).kendoAnimate(e(h, {
                        complete: function() {
                            f && d.css("height", "")
                        }
                    }))))
                }
            },
            text: function(b) {
                return a(b).closest(w).find(">div>.k-in").text()
            },
            _insertNode: function(b, c, d, f, g) {
                var h = this,
                    i = f.children().length + 1,
                    j = a.isPlainObject(b),
                    k = {
                        firstLevel: d.hasClass(t),
                        expanded: !0,
                        length: i
                    },
                    l;
                if (j) l = a(B.renderItem({
                    group: k,
                    item: e(b, {
                        index: c
                    })
                }));
                else {
                    l = a(b);
                    if (f.children()[c - 1] == l[0]) return l;
                    l.closest(".k-treeview")[0] == h.wrapper[0] && h.remove(l)
                }
                f.length || (f = a(B.renderGroup({
                    group: k
                })).appendTo(d)), g(l, f), d.hasClass("k-item") && (C(d), D(d)), j || D(l), D(l.prev()), D(l.next());
                return l
            },
            insertAfter: function(a, b) {
                var c = b.parent();
                return this._insertNode(a, b.index() + 1, c.parent(), c, function(a, c) {
                    a.insertAfter(b)
                })
            },
            insertBefore: function(a, b) {
                var c = b.parent();
                return this._insertNode(a, b.index(), c.parent(), c, function(a, c) {
                    a.insertBefore(b)
                })
            },
            append: function(a, b) {
                b = b || this.element;
                var c = b.find(x);
                return this._insertNode(a, c.children().length, b, c, function(a, b) {
                    a.appendTo(b)
                })
            },
            remove: function(b) {
                b = a(b);
                var c = this,
                    d = b.parent().parent(),
                    e = b.prev(),
                    f = b.next();
                b.remove(), d.hasClass("k-item") && (C(d), D(d)), D(e), D(f)
            },
            findByText: function(b) {
                return a(this.element).find(".k-in").filter(function(c, d) {
                    return a(d).text() == b
                }).closest(w)
            }
        }), E.prototype = {
            _hintStatus: function(b) {
                var c = this._draggable.hint.find(".k-drag-status")[0];
                if (b) c.className = "k-icon k-drag-status " + b;
                else return a.trim(c.className.replace(/k-(icon|drag-status)/g, ""))
            },
            dragstart: function(b) {
                var c = this,
                    d = c.treeview,
                    e = c.sourceNode = b.currentTarget.closest(w);
                if (d.trigger(l, {
                        sourceNode: e[0]
                    })) return !1;
                c.dropHint = a("<div class='k-drop-hint' />").css(r, "hidden").appendTo(d.element)
            },
            drag: function(b) {
                var d = this,
                    e = d.treeview,
                    f = d.sourceNode,
                    g = d.dropTarget = a(c.eventTarget(b)),
                    h, i, j, k, l, n, o, p, q, t;
                g.closest(".k-treeview").length ? a.contains(f[0], g[0]) ? h = "k-denied" : (h = "k-insert-middle", d.dropHint.css(r, "visible"), i = g.closest(".k-top,.k-mid,.k-bot"), i.length > 0 && (k = i.outerHeight(), l = i.offset().top, n = g.closest(".k-in"), o = k / (n.length > 0 ? 4 : 2), p = b.pageY < l + o, q = l + k - o < b.pageY, t = n.length > 0 && !p && !q, n.toggleClass(s, t), d.dropHint.css(r, t ? "hidden" : "visible"), t ? h = "k-add" : (j = i.position(), j.top += p ? 0 : k, d.dropHint.css(j)[p ? "prependTo" : "appendTo"](g.closest(w).find("> div:first")), p && i.hasClass("k-top") && (h = "k-insert-top"), q && i.hasClass("k-bot") && (h = "k-insert-bottom")))) : h = "k-denied", e.trigger(m, {
                    sourceNode: f[0],
                    dropTarget: g[0],
                    pageY: b.pageY,
                    pageX: b.pageX,
                    statusClass: h.substring(2),
                    setStatusClass: function(a) {
                        h = a
                    }
                }), h.indexOf("k-insert") != 0 && d.dropHint.css(r, "hidden"), d._hintStatus(h)
            },
            dragend: function(a) {
                var b = this,
                    d = b.treeview,
                    e = "over",
                    f = b.sourceNode,
                    g, h, i;
                if (a.keyCode == c.keys.ESC) b.dropHint.remove();
                else {
                    b.dropHint.css(r) == "visible" ? (e = b.dropHint.prevAll(".k-in").length > 0 ? "after" : "before", g = b.dropHint.closest(w)) : b.dropTarget && (g = b.dropTarget.closest(w)), h = b._hintStatus() != "k-denied", i = d.trigger(o, {
                        sourceNode: f[0],
                        destinationNode: g[0],
                        valid: h,
                        setValid: function(a) {
                            h = a
                        },
                        dropTarget: a.target,
                        dropPosition: e
                    }), b.dropHint.remove();
                    if (!h || i) {
                        b._draggable.dropped = h;
                        return
                    }
                    b._draggable.dropped = !0, e == "over" ? (d.append(f, g), d.expand(g)) : e == "before" ? d.insertBefore(f, g) : e == "after" && d.insertAfter(f, g), d.trigger(p, {
                        sourceNode: f[0],
                        destinationNode: g[0],
                        dropPosition: e
                    })
                }
            }
        }, e(B, {
            renderItem: function(a) {
                a = e({
                    treeview: {},
                    group: {}
                }, a);
                var b = z.empty,
                    c = a.item,
                    d = a.treeview;
                return z.item(e(a, {
                    image: c.imageUrl ? z.image : b,
                    sprite: c.spriteCssClass ? z.sprite : b,
                    itemWrapper: z.itemWrapper,
                    toggleButton: c.items ? z.toggleButton : b,
                    subGroup: B.renderGroup
                }, A))
            },
            renderGroup: function(a) {
                return z.group(e({
                    renderItems: function(a) {
                        var b = "",
                            c = 0,
                            d = a.items,
                            f = d ? d.length : 0,
                            g = e({
                                length: f
                            }, a.group);
                        for (; c < f; c++) b += B.renderItem(e(a, {
                            group: g,
                            item: e({
                                index: c
                            }, d[c])
                        }));
                        return b
                    }
                }, a, A))
            }
        }), A = {
            wrapperCssClass: function(a, b) {
                var c = "k-item",
                    d = b.index;
                a.firstLevel && d == 0 && (c += " k-first"), d == a.length - 1 && (c += " k-last");
                return c
            },
            cssClass: function(a, b) {
                var c = "",
                    d = b.index,
                    e = a.length - 1;
                a.firstLevel && d == 0 && (c += "k-top "), d == 0 && d != e ? c += "k-top" : d == e ? c += "k-bot" : c += "k-mid";
                return c
            },
            textClass: function(a) {
                var b = "k-in";
                a.enabled === !1 && (b += " k-state-disabled"), a.selected === !0 && (b += " k-state-selected");
                return b
            },
            textAttributes: function(a) {
                return a.url ? " href='" + a.url + "'" : ""
            },
            toggleButtonClass: function(a) {
                var b = "k-icon";
                a.expanded !== !0 ? b += " k-plus" : b += " k-minus", a.enabled === !1 && (b += "-disabled");
                return b
            },
            text: function(a) {
                return a.encoded === !1 ? a.text : c.htmlEncode(a.text)
            },
            tag: function(a) {
                return a.url ? "a" : "span"
            },
            groupAttributes: function(a) {
                return a.expanded !== !0 ? " style='display:none'" : ""
            },
            groupCssClass: function(a) {
                var b = "k-group";
                a.firstLevel && (b += " k-treeview-lines");
                return b
            }
        }, d.plugin(B)
    }(jQuery),
    function(a, b) {
        function K(a, c) {
            return h(a.getAttribute(c)) || b
        }

        function J(a) {
            a = parseFloat(a, 10);
            var b = k.pow(10, z || 0);
            return k.round(a * b) / b
        }

        function I(a) {
            return (a + "").replace(".", c.cultures.current.numberFormat["."])
        }

        function H(a) {
            return function() {
                return a
            }
        }

        function G(a) {
            return function(b) {
                return b + a
            }
        }

        function F(a) {
            var b = a.is("input") ? 1 : 2;
            return "<div class='k-slider-track'><div class='k-slider-selection'><!-- --></div><a href='javascript:void(0)' class='k-draghandle' title='Drag'>Drag</a>" + (b > 1 ? "<a href='javascript:void(0)' class='k-draghandle' title='Drag'>Drag</a>" : "") + "</div>"
        }

        function E(a, b) {
            var c = "<ul class='k-reset k-slider-items'>",
                d = k.floor(J(b / a.smallStep)) + 1;
            for (i = 0; i < d; i++) c += "<li class='k-tick'>&nbsp;</li>";
            c += "</ul>";
            return c
        }

        function D(a, b, c) {
            var d = "";
            b == "increase" ? d = c ? "k-arrow-next" : "k-arrow-up" : d = c ? "k-arrow-prev" : "k-arrow-down";
            return "<a class='k-button k-button-" + b + "'><span class='k-icon " + d + "' title='" + a[b + "ButtonTitle"] + "'>" + a[b + "ButtonTitle"] + "</span></a>"
        }

        function C(a, b, c) {
            var d = c ? " k-slider-horizontal" : " k-slider-vertical",
                e = a.style ? a.style : b.attr("style"),
                f = b.attr("class") ? " " + b.attr("class") : "",
                g = "";
            a.tickPlacement == "bottomRight" ? g = " k-slider-bottomright" : a.tickPlacement == "topLeft" && (g = " k-slider-topleft"), e = e ? " style='" + e + "'" : "";
            return "<div class='k-widget k-slider" + d + f + "'" + e + ">" + "<div class='k-slider-wrap" + (a.showButtons ? " k-slider-buttons" : "") + g + "'></div></div>"
        }
        var c = window.kendo,
            d = c.ui.Widget,
            e = c.ui.Draggable,
            f = c.keys,
            g = a.extend,
            h = c.parseFloat,
            j = a.proxy,
            k = Math,
            l = c.support.touch,
            m = "change",
            n = "slide",
            o = l ? "touchstart" : "mousedown",
            p = l ? "touchend" : "mouseup",
            q = "moveSelection",
            r = "keydown",
            s = "mouseover",
            t = ".k-draghandle",
            u = ".k-slider-track",
            v = ".k-tick",
            w = "k-state-selected",
            x = "k-state-default",
            y = "k-state-disabled",
            z = 3,
            A = "disabled",
            B = d.extend({
                init: function(a, b) {
                    var c = this;
                    d.fn.init.call(c, a, b), b = c.options, c._distance = b.max - b.min, c._isHorizontal = b.orientation == "horizontal", c._position = c._isHorizontal ? "left" : "bottom", c._size = c._isHorizontal ? "width" : "height", c._outerSize = c._isHorizontal ? "outerWidth" : "outerHeight", b.tooltip.format = b.tooltip.enabled ? b.tooltip.format || "{0}" : "{0}", c._createHtml(), c.wrapper = c.element.closest(".k-slider"), c._trackDiv = c.wrapper.find(u), c._setTrackDivWidth(), c._maxSelection = c._trackDiv[c._size]();
                    var e = c._maxSelection / ((b.max - b.min) / b.smallStep),
                        f = c._calculateItemsWidth(k.floor(c._distance / b.smallStep));
                    b.tickPlacement != "none" && e >= 2 && (c._trackDiv.before(E(b, c._distance)), c._setItemsWidth(f), c._setItemsTitle(), c._setItemsLargeTick()), c._calculateSteps(f), c[b.enabled ? "enable" : "disable"](), c._keyMap = {
                        37: G(-b.smallStep),
                        40: G(-b.smallStep),
                        39: G(+b.smallStep),
                        38: G(+b.smallStep),
                        35: H(b.max),
                        36: H(b.min),
                        33: G(+b.largeStep),
                        34: G(-b.largeStep)
                    }, c.bind([m, n], b)
                },
                options: {
                    enabled: !0,
                    min: 0,
                    max: 10,
                    smallStep: 1,
                    largeStep: 5,
                    orientation: "horizontal",
                    tickPlacement: "both",
                    tooltip: {
                        enabled: !0,
                        format: "{0}"
                    }
                },
                _setTrackDivWidth: function() {
                    var a = this,
                        b = parseFloat(a._trackDiv.css(a._position), 10) * 2;
                    a._trackDiv[a._size](a.wrapper[a._size]() - 2 - b)
                },
                _setItemsWidth: function(b) {
                    var c = this,
                        d = c.options,
                        e = 0,
                        f = b.length - 1,
                        g = c.wrapper.find(v),
                        h, i = 0,
                        j = 2,
                        k = 0;
                    for (h = 0; h < g.length - 2; h++) a(g[h + 1])[c._size](b[h]);
                    c._isHorizontal ? (a(g[e]).addClass("k-first")[c._size](b[f - 1]), a(g[f]).addClass("k-last")[c._size](b[f])) : (a(g[f]).addClass("k-first")[c._size](b[f]), a(g[e]).addClass("k-last")[c._size](b[f - 1]));
                    if (c._distance % d.smallStep != 0 && !c._isHorizontal) {
                        for (h = 0; h < b.length; h++) k += b[h];
                        i = c._maxSelection - k, i += parseFloat(c._trackDiv.css(c._position), 10) + j, c.wrapper.find(".k-slider-items").css("padding-top", i)
                    }
                },
                _setItemsTitle: function() {
                    var b = this,
                        d = b.options,
                        e = b.wrapper.find(v),
                        f = d.min,
                        g = b._isHorizontal ? 0 : e.length - 1,
                        h = b._isHorizontal ? e.length : -1,
                        i = b._isHorizontal ? 1 : -1;
                    for (; g - h != 0; g += i) a(e[g]).attr("title", c.format(d.tooltip.format, J(f))), f += d.smallStep
                },
                _setItemsLargeTick: function() {
                    var b = this,
                        c = b.options,
                        d, e = b.wrapper.find(v),
                        f = {},
                        g = J(c.largeStep / c.smallStep);
                    if (1e3 * c.largeStep % (1e3 * c.smallStep) == 0)
                        if (b._isHorizontal)
                            for (d = 0; d < e.length; d = J(d + g)) f = a(e[d]), f.addClass("k-tick-large").html("<span class='k-label'>" + f.attr("title") + "</span>");
                        else
                            for (d = e.length - 1; d >= 0; d = J(d - g)) f = a(e[d]), f.addClass("k-tick-large").html("<span class='k-label'>" + f.attr("title") + "</span>"), d != 0 && d != e.length - 1 && f.css("line-height", f[b._size]() + "px")
                },
                _calculateItemsWidth: function(a) {
                    var b = this,
                        c = b.options,
                        d = parseFloat(b._trackDiv.css(b._size)) + 1,
                        e = d / b._distance,
                        f, g, h;
                    b._distance / c.smallStep - k.floor(b._distance / c.smallStep) > 0 && (d -= b._distance % c.smallStep * e), f = d / a, g = [];
                    for (h = 0; h < a - 1; h++) g[h] = f;
                    g[a - 1] = g[a] = f / 2;
                    return b._roundWidths(g)
                },
                _roundWidths: function(a) {
                    var b = 0;
                    for (i = 0; i < a.length; i++) b += a[i] - k.floor(a[i]), a[i] = k.floor(a[i]);
                    b = k.round(b);
                    return this._addAdditionalSize(b, a)
                },
                _addAdditionalSize: function(a, b) {
                    if (a == 0) return b;
                    var c = parseFloat(b.length - 1) / parseFloat(a == 1 ? a : a - 1),
                        d;
                    for (d = 0; d < a; d++) b[parseInt(k.round(c * d))] += 1;
                    return b
                },
                _calculateSteps: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.min,
                        e = 0,
                        f = a.length,
                        g = 1,
                        h;
                    a.splice(0, 0, a[f - 2] * 2), a.splice(f - 1, 1, a.pop() * 2), b._pixelSteps = [e], b._values = [d];
                    if (f != 0) {
                        while (g < f) e += (a[g - 1] + a[g]) / 2, b._pixelSteps[g] = e, b._values[g] = d += c.smallStep, g++;
                        h = c.max % c.smallStep == 0 ? f - 1 : f, b._pixelSteps[h] = b._maxSelection, b._values[h] = c.max
                    }
                },
                _getValueFromPosition: function(a, b) {
                    var c = this,
                        d = c.options,
                        e = k.max(d.smallStep * (c._maxSelection / c._distance), 0),
                        f = 0,
                        g = e / 2,
                        h = 0,
                        i;
                    c._isHorizontal ? f = a - b.startPoint : f = b.startPoint - a;
                    if (c._maxSelection - (parseInt(c._maxSelection % e) - 3) / 2 < f) return d.max;
                    for (i = 0; i < c._pixelSteps.length; i++)
                        if (k.abs(c._pixelSteps[i] - f) - 1 <= g) return J(c._values[i])
                },
                _getDragableArea: function() {
                    var a = this,
                        b = a._trackDiv.offset().left,
                        c = a._trackDiv.offset().top;
                    return {
                        startPoint: a._isHorizontal ? b : c + a._maxSelection,
                        endPoint: a._isHorizontal ? b + a._maxSelection : c
                    }
                },
                _createHtml: function() {
                    var a = this,
                        b = a.element,
                        c = a.options,
                        d = b.find("input");
                    d.length == 2 ? (d.eq(0).val(c.selectionStart), d.eq(1).val(c.selectionEnd)) : b.val(c.value), b.wrap(C(c, b, a._isHorizontal)).hide(), c.showButtons && b.before(D(c, "increase", a._isHorizontal)).before(D(c, "decrease", a._isHorizontal)), b.before(F(b))
                }
            }),
            L = B.extend({
                init: function(a, b) {
                    var c = this,
                        d;
                    a.type = "text", b = g({}, {
                        value: K(a, "value"),
                        min: K(a, "min"),
                        max: K(a, "max"),
                        smallStep: K(a, "step")
                    }, b), B.fn.init.call(c, a, b), b = c.options, c._setValueInRange(b.value), d = c.wrapper.find(t), new L.Selection(d, c, b), c._drag = new L.Drag(d, "", c, b)
                },
                options: {
                    name: "Slider",
                    value: 0,
                    showButtons: !0,
                    increaseButtonTitle: "Increase",
                    decreaseButtonTitle: "Decrease"
                },
                enable: function() {
                    var b = this,
                        d = b.options,
                        e, f;
                    b.wrapper.removeAttr(A).removeClass(y).addClass(x), e = function(d) {
                        if (a(d.target).hasClass("k-draghandle")) a(d.target).addClass(w);
                        else {
                            var e = c.touchLocation(d),
                                f = b._isHorizontal ? e.x : e.y,
                                g = b._getDragableArea();
                            b._update(b._getValueFromPosition(f, g)), b._drag.dragstart(d)
                        }
                    }, b.wrapper.find(v).bind(o, e).end().find(u).bind(o, e), b.wrapper.find(t).bind(p, function(b) {
                        a(b.target).removeClass(w)
                    }), f = j(function(a, c) {
                        var e = k.ceil(d.value / d.smallStep) - k.abs(d.min);
                        e >= b._values.length - 1 || e <= 0 ? b._setValueInRange(d.value + c * d.smallStep) : b._setValueInRange(b._values[e + c * 1])
                    }, b);
                    if (d.showButtons) {
                        var g = j(function(a, b) {
                            if (a.which == 1 || l && a.which == 0) f(a, b), this.timeout = setTimeout(j(function() {
                                this.timer = setInterval(function() {
                                    f(a, b)
                                }, 60)
                            }, this), 200)
                        }, b);
                        b.wrapper.find(".k-button").bind(p, j(function(a) {
                            this._clearTimer()
                        }, b)).bind(s, function(b) {
                            a(b.currentTarget).addClass("k-state-hover")
                        }).bind("mouseout", j(function(b) {
                            a(b.currentTarget).removeClass("k-state-hover"), this._clearTimer()
                        }, b)).eq(0).bind(o, j(function(a) {
                            g(a, 1)
                        }, b)).click(!1).end().eq(1).bind(o, j(function(a) {
                            g(a, -1)
                        }, b)).click(!1)
                    }
                    b.wrapper.find(t).bind(r, j(this._keydown, b)), d.enabled = !0
                },
                disable: function() {
                    var a = this;
                    a.wrapper.attr(A, A).removeClass(x).addClass(y), a.wrapper.find(".k-button").unbind(o).bind(o, !1).unbind(p).bind(p, !1).unbind("mouseleave").bind("mouseleave", !1).unbind(s).bind(s, !1), a.wrapper.find(v).unbind(o).end().find(u).unbind(o), a.wrapper.find(t).unbind(p).unbind(r).bind(r, !1), a.options.enabled = !1
                },
                _update: function(a) {
                    var b = this,
                        c = b.value() != a;
                    b.value(a), c && b.trigger(m, {
                        value: b.options.value
                    })
                },
                value: function(a) {
                    var b = this,
                        c = b.options;
                    a = J(a);
                    if (isNaN(a)) return c.value;
                    a >= c.min && a <= c.max && c.value != a && (b.element.attr("value", I(a)), c.value = a, b.refresh())
                },
                refresh: function() {
                    this.trigger(q, {
                        value: this.options.value
                    })
                },
                _clearTimer: function(a) {
                    clearTimeout(this.timeout), clearInterval(this.timer)
                },
                _keydown: function(a) {
                    var b = this;
                    a.keyCode in b._keyMap && (b._setValueInRange(b._keyMap[a.keyCode](b.options.value)), a.preventDefault())
                },
                _setValueInRange: function(a) {
                    var b = this,
                        c = b.options;
                    a = J(a);
                    isNaN(a) ? b._update(c.min) : (a = k.max(k.min(a, c.max), c.min), b._update(a))
                }
            });
        L.Selection = function(a, b, c) {
            function d(d) {
                var e = d - c.min,
                    f = k.ceil(e / c.smallStep),
                    g = parseInt(b._pixelSteps[f]),
                    h = b._trackDiv.find(".k-slider-selection"),
                    i = parseInt(a[b._outerSize]() / 2, 10);
                h[b._size](g), a.css(b._position, g - i)
            }
            d(c.value), b.bind([m, n, q], function(a) {
                d(parseFloat(a.value, 10))
            })
        }, L.Drag = function(a, b, c, d) {
            var f = this;
            f.owner = c, f.options = d, f.dragHandle = a, f.dragHandleSize = a[c._outerSize](), f.type = b, f.draggable = new e(a, {
                dragstart: j(f._dragstart, f),
                drag: j(f.drag, f),
                dragend: j(f.dragend, f)
            }), a.click(!1)
        }, L.Drag.prototype = {
            dragstart: function(a) {
                this.draggable._startDrag(a)
            },
            _dragstart: function(b) {
                var d = this,
                    e = d.owner,
                    f = d.options;
                if (!f.enabled) {
                    b.preventDefault();
                    return !1
                }
                e.element.unbind(s), d.dragHandle.addClass(w), d.dragableArea = e._getDragableArea(), d.step = k.max(f.smallStep * (e._maxSelection / e._distance), 0), d.type ? (d.selectionStart = f.selectionStart, d.selectionEnd = f.selectionEnd, e._setZIndex(d.type)) : d.oldVal = d.val = f.value;
                if (f.tooltip.enabled) {
                    d.tooltipDiv = a("<div class='k-widget k-tooltip'><!-- --></div>").appendTo(document.body);
                    var g = "";
                    if (d.type) {
                        var h = c.format(f.tooltip.format, d.selectionStart),
                            i = c.format(f.tooltip.format, d.selectionEnd);
                        g = h + " - " + i
                    } else d.tooltipInnerDiv = "<div class='k-callout k-callout-" + (e._isHorizontal ? "s" : "e") + "'><!-- --></div>", g = c.format(f.tooltip.format, d.val) + d.tooltipInnerDiv;
                    d.tooltipDiv.html(g), d.moveTooltip()
                }
            },
            drag: function(a) {
                var b = this,
                    d = b.owner,
                    e = b.options,
                    f = c.touchLocation(a),
                    g = b.dragableArea.startPoint,
                    h = b.dragableArea.endPoint;
                d._isHorizontal ? b.val = b.constrainValue(f.x, g, h, f.x >= h) : b.val = b.constrainValue(f.y, h, g, f.y <= h);
                if (b.oldVal != b.val) {
                    b.oldVal = b.val;
                    if (b.type) {
                        b.type == "firstHandle" ? b.val < b.selectionEnd ? b.selectionStart = b.val : b.selectionStart = b.selectionEnd = b.val : b.val > b.selectionStart ? b.selectionEnd = b.val : b.selectionStart = b.selectionEnd = b.val, d.trigger(n, {
                            values: [b.selectionStart, b.selectionEnd]
                        });
                        if (e.tooltip.enabled) {
                            var i = c.format(e.tooltip.format, b.selectionStart),
                                j = c.format(e.tooltip.format, b.selectionEnd);
                            b.tooltipDiv.html(i + " - " + j)
                        }
                    } else d.trigger(n, {
                        value: b.val
                    }), e.tooltip.enabled && b.tooltipDiv.html(c.format(e.tooltip.format, b.val) + b.tooltipInnerDiv);
                    e.tooltip.enabled && b.moveTooltip()
                }
            },
            dragend: function(a) {
                var b = this,
                    d = b.owner;
                a.keyCode == c.keys.ESC ? d.refresh() : b.type ? d._update(b.selectionStart, b.selectionEnd) : d._update(b.val), d.options.tooltip.enabled && b.tooltipDiv.remove(), b.dragHandle.removeClass(w), d.element.bind(s);
                return !1
            },
            moveTooltip: function() {
                var a = this,
                    b = a.owner,
                    c = 0,
                    d = 0,
                    e = a.dragHandle.offset(),
                    f = 4,
                    g = a.tooltipDiv.find(".k-callout"),
                    h;
                if (a.type) {
                    var i = b.wrapper.find(t),
                        j = i.eq(0).offset(),
                        k = i.eq(1).offset();
                    b._isHorizontal ? (c = k.top, d = j.left + (k.left - j.left) / 2) : (c = j.top + (k.top - j.top) / 2, d = k.left)
                } else c = e.top, d = e.left;
                b._isHorizontal ? (d -= parseInt((a.tooltipDiv.outerWidth() - a.dragHandle[b._outerSize]()) / 2), c -= a.tooltipDiv.outerHeight() + g.height() + f) : (c -= parseInt((a.tooltipDiv.outerHeight() - a.dragHandle[b._outerSize]()) / 2), d -= a.tooltipDiv.outerWidth() + g.width() + f), a.tooltipDiv.css({
                    top: c,
                    left: d
                })
            },
            constrainValue: function(a, b, c, d) {
                var e = this,
                    f = 0;
                b < a && a < c ? f = e.owner._getValueFromPosition(a, e.dragableArea) : d ? f = e.options.max : f = e.options.min;
                return f
            }
        }, c.ui.plugin(L);
        var M = B.extend({
            init: function(b, c) {
                var d = this,
                    e = a(b).find("input"),
                    f = e.eq(0)[0],
                    h = e.eq(1)[0];
                f.type = "text", h.type = "text", c = g({}, {
                    selectionStart: K(f, "value"),
                    min: K(f, "min"),
                    max: K(f, "max"),
                    smallStep: K(f, "step")
                }, {
                    selectionEnd: K(h, "value"),
                    min: K(h, "min"),
                    max: K(h, "max"),
                    smallStep: K(h, "step")
                }, c), B.fn.init.call(d, b, c), c = d.options, d._setValueInRange(c.selectionStart, c.selectionEnd);
                var i = d.wrapper.find(t);
                new M.Selection(i, d, c), d._firstHandleDrag = new L.Drag(i.eq(0), "firstHandle", d, c), d._lastHandleDrag = new L.Drag(i.eq(1), "lastHandle", d, c)
            },
            options: {
                name: "RangeSlider",
                selectionStart: 0,
                selectionEnd: 10
            },
            enable: function() {
                var b = this,
                    d = b.options,
                    e;
                b.wrapper.removeAttr(A).removeClass(y).addClass(x), e = function(e) {
                    if (a(e.target).hasClass("k-draghandle")) a(e.target).addClass(w);
                    else {
                        var f = c.touchLocation(e),
                            g = b._isHorizontal ? f.x : f.y,
                            h = b._getDragableArea(),
                            i = b._getValueFromPosition(g, h);
                        i < d.selectionStart ? (b._setValueInRange(i, d.selectionEnd), b._firstHandleDrag.dragstart(e)) : i > b.selectionEnd ? (b._setValueInRange(d.selectionStart, i), b._lastHandleDrag.dragstart(e)) : i - d.selectionStart <= d.selectionEnd - i ? (b._setValueInRange(i, d.selectionEnd), b._firstHandleDrag.dragstart(e)) : (b._setValueInRange(d.selectionStart, i), b._lastHandleDrag.dragstart(e))
                    }
                }, b.wrapper.find(v).bind(o, e).end().find(u).bind(o, e), b.wrapper.find(t).bind(p, function(b) {
                    a(b.target).removeClass(w)
                }), b.wrapper.find(t).eq(0).bind(r, j(function(a) {
                    this._keydown(a, "firstHandle")
                }, b)).end().eq(1).bind(r, j(function(a) {
                    this._keydown(a, "lastHandle")
                }, b)), b.options.enabled = !0
            },
            disable: function() {
                var a = this,
                    b = a.options;
                a.wrapper.attr(A, A).removeClass(x).addClass(y), a.wrapper.find(v).unbind(o).end().find(u).unbind(o), a.wrapper.find(t).unbind(p).unbind(r).bind(r, !1), a.options.enabled = !1
            },
            _keydown: function(a, b) {
                var c = this,
                    d = c.options.selectionStart,
                    e = c.options.selectionEnd;
                a.keyCode in c._keyMap && (b == "firstHandle" ? (d = c._keyMap[a.keyCode](d), d > e && (e = d)) : (e = c._keyMap[a.keyCode](e), d > e && (d = e)), c._setValueInRange(d, e), a.preventDefault())
            },
            _update: function(a, b) {
                var c = this,
                    d = c.values(),
                    e = d[0] != a || d[1] != b;
                c.values(a, b), e && c.trigger(m, {
                    values: [a, b]
                })
            },
            values: function() {
                var b = this,
                    c = b.options,
                    d = 0,
                    e = 0;
                if (arguments.length == 0) return [c.selectionStart, c.selectionEnd];
                arguments.length == 1 && a.isArray(arguments[0]) ? (d = arguments[0][0], e = arguments[0][1]) : (d = J(arguments[0]), e = J(arguments[1])), d >= c.min && d <= c.max && e >= c.min && e <= c.max && d <= e && (c.selectionStart != d || c.selectionEnd != e) && (b.element.find("input").eq(0).attr("value", I(d)).end().eq(1).attr("value", I(e)), c.selectionStart = d, c.selectionEnd = e, b.refresh())
            },
            refresh: function() {
                var a = this,
                    b = a.options;
                a.trigger(q, {
                    values: [b.selectionStart, b.selectionEnd]
                }), b.selectionStart == b.max && b.selectionEnd == b.max && a._setZIndex("firstHandle")
            },
            _setValueInRange: function(a, b) {
                var c = this.options;
                a = k.max(k.min(a, c.max), c.min), b = k.max(k.min(b, c.max), c.min), a == c.max && b == c.max && this._setZIndex("firstHandle"), this._update(k.min(a, b), k.max(a, b))
            },
            _setZIndex: function(b) {
                this.wrapper.find(t).each(function(c) {
                    a(this).css("z-index", b == "firstHandle" ? 1 - c : c)
                })
            }
        });
        M.Selection = function(a, b, c) {
            function e(a, c) {
                var d = 0,
                    e = 0,
                    f = b._trackDiv.find(".k-slider-selection");
                d = k.abs(a - c), e = a < c ? a : c, f[b._size](d), f.css(b._position, e - 1)
            }

            function d(d) {
                var f = d[0] - c.min,
                    g = d[1] - c.min,
                    h = k.ceil(f / c.smallStep),
                    i = k.ceil(g / c.smallStep),
                    j = b._pixelSteps[h],
                    l = b._pixelSteps[i],
                    m = parseInt(a.eq(0)[b._outerSize]() / 2, 10);
                a.eq(0).css(b._position, j - m).end().eq(1).css(b._position, l - m), e(j, l)
            }
            d(b.values()), b.bind([m, n, q], function(a) {
                d(a.values)
            })
        }, c.ui.plugin(M)
    }(jQuery),
    function(a, b) {
        function B(a) {
            var b = this,
                d = a.orientation;
            b.owner = a, b._element = a.element, b.orientation = d, e(b, d === o ? A : z), b._resizable = new c.ui.Resizable(a.element, {
                orientation: d,
                handle: ".k-splitbar-draggable-" + d,
                hint: f(b._createHint, b),
                start: f(b._start, b),
                max: f(b._max, b),
                min: f(b._min, b),
                invalidClass: "k-restricted-size-" + d,
                resizeend: f(b._stop, b)
            })
        }

        function x(b, c) {
            return function(d, e) {
                var f = a(d).data(s);
                if (arguments.length == 1) return f[b];
                f[b] = e;
                if (c) {
                    var g = this.element.data("kendoSplitter");
                    g.trigger(m)
                }
            }
        }

        function w(a) {
            return !u(a) && !v(a)
        }

        function v(a) {
            return h.test(a)
        }

        function u(a) {
            return i.test(a)
        }
        var c = window.kendo,
            d = c.ui,
            e = a.extend,
            f = a.proxy,
            g = d.Widget,
            h = /^\d+(\.\d+)?px$/i,
            i = /^\d+(\.\d+)?%$/i,
            j = "expand",
            k = "collapse",
            l = "contentLoad",
            m = "resize",
            n = "layoutChange",
            o = "horizontal",
            p = "vertical",
            q = "mouseenter",
            r = "click",
            s = "pane",
            t = "mouseleave",
            y = g.extend({
                init: function(b, c) {
                    var d = this,
                        e, h, i = ".k-splitbar .k-icon:not(.k-resize-handle)",
                        s = function() {
                            d.trigger(m)
                        };
                    g.fn.init.call(d, b, c), d.orientation = d.options.orientation.toLowerCase() != p ? o : p, h = ".k-splitbar-draggable-" + d.orientation, d.bind([j, k, l, m, n], d.options), d.bind(m, f(d._resize, d)), d._initPanes(), d.element.delegate(h, q, function() {
                        a(this).addClass("k-splitbar-" + d.orientation + "-hover")
                    }).delegate(h, t, function() {
                        a(this).removeClass("k-splitbar-" + d.orientation + "-hover")
                    }).delegate(h, "mousedown", function() {
                        d.element.find("> .k-pane > .k-content-frame").after("<div class='k-overlay' />")
                    }).delegate(i, q, function() {
                        a(this).addClass("k-state-hover")
                    }).delegate(i, t, function() {
                        a(this).removeClass("k-state-hover")
                    }).delegate(".k-splitbar .k-collapse-next, .k-splitbar .k-collapse-prev", r, d._arrowClick(k)).delegate(".k-splitbar .k-expand-next, .k-splitbar .k-expand-prev", r, d._arrowClick(j)).delegate(".k-splitbar", "dblclick", f(d._dbclick, d)).parent().closest(".k-splitter").each(function() {
                        a(this).data("kendoSplitter").bind(m, s)
                    }), a(window).resize(s), d.resizing = new B(d)
                },
                options: {
                    name: "Splitter",
                    orientation: o
                },
                _initPanes: function() {
                    var b = this,
                        c = b.options.panes || [];
                    b.element.addClass("k-widget").addClass("k-splitter").children().addClass("k-pane").each(function(d, e) {
                        var f = c && c[d];
                        e = a(e), e.data(s, f ? f : {}).toggleClass("k-scrollable", f ? f.scrollable !== !1 : !0), b.ajaxRequest(e)
                    }).end(), b.trigger(m)
                },
                ajaxRequest: function(b, d, e) {
                    b = a(b);
                    var f = this,
                        g = b.data(s);
                    d = d || g.contentUrl, d && (b.append("<span class='k-icon k-loading k-pane-loading' />"), c.isLocalUrl(d) ? a.ajax({
                        url: d,
                        data: e || {},
                        type: "GET",
                        dataType: "html",
                        success: function(a) {
                            b.html(a), f.trigger(l, {
                                pane: b[0]
                            })
                        }
                    }) : b.removeClass("k-scrollable").html("<iframe src='" + d + "' frameborder='0' class='k-content-frame'>" + "This page requires frames in order to show content" + NaN))
                },
                _triggerAction: function(a, b) {
                    this.trigger(a, {
                        pane: b[0]
                    }) || this[a](b[0])
                },
                _dbclick: function(b) {
                    var c = this,
                        d = a(b.target),
                        e;
                    if (d.closest(".k-splitter")[0] == c.element[0]) {
                        e = d.children(".k-icon:not(.k-resize-handle)");
                        if (e.length !== 1) return;
                        e.is(".k-collapse-prev") ? c._triggerAction(k, d.prev()) : e.is(".k-collapse-next") ? c._triggerAction(k, d.next()) : e.is(".k-expand-prev") ? c._triggerAction(j, d.prev()) : e.is(".k-expand-next") && c._triggerAction(j, d.next())
                    }
                },
                _arrowClick: function(b) {
                    var c = this;
                    return function(d) {
                        var e = a(d.target),
                            f;
                        e.closest(".k-splitter")[0] == c.element[0] && (e.is(".k-" + b + "-prev") ? f = e.parent().prev() : f = e.parent().next(), c._triggerAction(b, f))
                    }
                },
                _updateSplitBar: function(a, b, c) {
                    var d = function(a, b) {
                            return b ? "<div class='k-icon " + a + "' />" : ""
                        },
                        e = this.orientation,
                        f = b.resizable !== !1 && c.resizable !== !1,
                        g = b.collapsible,
                        h = b.collapsed,
                        i = c.collapsible,
                        j = c.collapsed;
                    a.addClass("k-splitbar k-state-default k-splitbar-" + e).removeClass("k-splitbar-" + e + "-hover").toggleClass("k-splitbar-draggable-" + e, f && !h && !j).toggleClass("k-splitbar-static-" + e, !f && !g && !i).html(d("k-collapse-prev", g && !h && !j) + d("k-expand-prev", g && h && !j) + d("k-resize-handle", f) + d("k-collapse-next", i && !j && !h) + d("k-expand-next", i && j && !h))
                },
                _updateSplitBars: function() {
                    var b = this;
                    this.element.children(".k-splitbar").each(function() {
                        var c = a(this),
                            d = c.prev(".k-pane").data(s),
                            e = c.next(".k-pane").data(s);
                        !e || b._updateSplitBar(c, d, e)
                    })
                },
                _resize: function() {
                    var b = this,
                        c = b.element,
                        d = c.children(":not(.k-splitbar)"),
                        e = b.orientation == o,
                        f = c.children(".k-splitbar"),
                        g = f.length,
                        h = e ? "width" : "height",
                        i = c[h]();
                    g === 0 ? (g = d.length - 1, d.slice(0, g).after("<div class='k-splitbar' />"), b._updateSplitBars(), f = c.children(".k-splitbar")) : b._updateSplitBars(), f.each(function() {
                        i -= this[e ? "offsetWidth" : "offsetHeight"]
                    });
                    var j = 0,
                        k = 0,
                        l = a();
                    d.css({
                        position: "absolute",
                        top: 0
                    })[h](function() {
                        var b = a(this).data(s) || {},
                            c;
                        if (b.collapsed) c = 0;
                        else {
                            if (w(b.size)) {
                                l = l.add(this);
                                return
                            }
                            c = parseInt(b.size, 10), u(b.size) && (c = Math.floor(c * i / 100))
                        }
                        k++, j += c;
                        return c
                    }), i -= j;
                    var m = l.length,
                        p = Math.floor(i / m);
                    l.slice(0, m - 1).css(h, p).end().eq(m - 1).css(h, i - (m - 1) * p);
                    var q = 0,
                        r = e ? "height" : "width",
                        t = e ? "left" : "top",
                        v = e ? "offsetWidth" : "offsetHeight";
                    c.children().css(r, c[r]()).each(function(a, b) {
                        b.style[t] = Math.floor(q) + "px", q += b[v]
                    }), b.trigger(n)
                },
                toggle: function(c, d) {
                    var c = a(c),
                        e = c.data(s);
                    arguments.length == 1 && (d = e.collapsed === b ? !1 : e.collapsed), e.collapsed = !d, this.trigger(m)
                },
                collapse: function(a) {
                    this.toggle(a, !1)
                },
                expand: function(a) {
                    this.toggle(a, !0)
                },
                size: x("size", !0),
                min: x("min"),
                max: x("max")
            });
        d.plugin(y);
        var z = {
                sizingProperty: "height",
                sizingDomProperty: "offsetHeight",
                alternateSizingProperty: "width",
                positioningProperty: "top",
                mousePositioningProperty: "pageY"
            },
            A = {
                sizingProperty: "width",
                sizingDomProperty: "offsetWidth",
                alternateSizingProperty: "height",
                positioningProperty: "left",
                mousePositioningProperty: "pageX"
            };
        B.prototype = {
            _createHint: function(b) {
                var c = this;
                return a("<div class='k-ghost-splitbar k-ghost-splitbar-" + c.orientation + " k-state-default' />").css(c.alternateSizingProperty, b[c.alternateSizingProperty]())
            },
            _start: function(b) {
                var c = this,
                    d = a(b.currentTarget),
                    e = d.prev(),
                    f = d.next(),
                    g = e.data(s),
                    h = f.data(s),
                    i = parseInt(e[0].style[c.positioningProperty]),
                    j = parseInt(f[0].style[c.positioningProperty]) + f[0][c.sizingDomProperty] - d[0][c.sizingDomProperty],
                    k = c._element.css(c.sizingProperty),
                    l = function(a) {
                        var b = parseInt(a, 10);
                        return (v(a) ? b : k * b / 100) || 0
                    },
                    m = l(g.min),
                    n = l(g.max) || j - i,
                    o = l(h.min),
                    p = l(h.max) || j - i;
                c.previousPane = e, c.nextPane = f, c._maxPosition = Math.min(j - o, i + n), c._minPosition = Math.max(i + m, j - p)
            },
            _max: function(a) {
                return this._maxPosition
            },
            _min: function(a) {
                return this._minPosition
            },
            _stop: function(b) {
                var d = this,
                    e = a(b.currentTarget);
                e.siblings(".k-pane").find("> .k-content-frame + .k-overlay").remove();
                if (b.keyCode !== c.keys.ESC) {
                    var f = b.position,
                        g = e.prev(),
                        h = e.next(),
                        i = g.data(s),
                        j = h.data(s),
                        k = f - parseInt(g[0].style[d.positioningProperty]),
                        l = parseInt(h[0].style[d.positioningProperty]) + h[0][d.sizingDomProperty] - f - e[0][d.sizingDomProperty],
                        n = d._element.children(".k-pane").filter(function() {
                            return w(a(this).data(s).size)
                        }).length;
                    if (!w(i.size) || n > 1) w(i.size) && n--, i.size = k + "px";
                    if (!w(j.size) || n > 1) j.size = l + "px";
                    d.owner.trigger(m)
                }
                return !1
            }
        }
    }(jQuery),
    function(a, b) {
        function E() {
            var b = {};
            a("input[name^='__RequestVerificationToken']").each(function() {
                b[this.name] = this.value
            });
            return b
        }

        function D(b) {
            return a(b.target).closest(".k-file")
        }

        function C(a) {
            typeof console != "undefined" && console.log && console.log(a)
        }

        function B(a) {
            return a.children(".k-icon").is(".k-loading, .k-success, .k-fail")
        }

        function A(a, b, c) {
            var d, e;
            a.bind("dragenter", function(a) {
                b(), e = new Date, d || (d = setInterval(function() {
                    var a = new Date - e;
                    a > 100 && (c(), clearInterval(d), d = null)
                }, 100))
            }).bind("dragover", function(a) {
                e = new Date
            })
        }

        function z(a) {
            a.stopPropagation(), a.preventDefault()
        }

        function y(b, c, d) {
            try {
                var e = a.parseJSON(b);
                c(e)
            } catch (f) {
                d()
            }
        }

        function x(b, c, d) {
            if (!!c._supportsRemove()) {
                var e = b.data("fileNames"),
                    f = a.map(e, function(a) {
                        return a.name
                    });
                c._submitRemove(f, d, function(a, d, f) {
                    c._removeFileEntry(b), c.trigger(h, {
                        operation: "remove",
                        files: e,
                        response: a,
                        XMLHttpRequest: f
                    })
                }, function(a, b, b) {
                    var d = c.trigger(i, {
                        operation: "remove",
                        files: e,
                        XMLHttpRequest: a
                    });
                    C("Server response: " + a.responseText), d || c._alert("Error! Remove operation failed. Unexpected response - see console.")
                })
            }
        }

        function w(a) {
            var b = a.lastIndexOf("\\");
            return b != -1 ? a.substr(b + 1) : a
        }

        function v(a) {
            var b = a.match(e);
            return b ? b[0] : ""
        }

        function u(a) {
            var b = a.name || a.fileName;
            return {
                name: b,
                extension: v(b),
                size: a.size || a.fileSize,
                rawFile: a
            }
        }

        function t(b) {
            return a.map(b, function(a) {
                return u(a)
            })
        }

        function s(a) {
            var b = a[0];
            return b.files ? t(b.files) : [{
                name: w(b.value),
                extension: v(b.value),
                size: null
            }]
        }

        function r(b) {
            return a.map(s(b), function(a) {
                return a.name
            }).join(", ")
        }
        var c = window.kendo,
            d = c.ui.Widget,
            e = /\.([^\.]+)$/,
            f = "select",
            g = "upload",
            h = "success",
            i = "error",
            j = "complete",
            k = "cancel",
            l = "load",
            m = "remove",
            n = d.extend({
                init: function(c, e) {
                    var l = this;
                    d.fn.init.call(l, c, e), l.name = c.name, l.multiple = l.options.multiple, l.localization = l.options.localization;
                    var n = l.element;
                    l.wrapper = n.closest(".k-upload"), l.wrapper.length == 0 && (l.wrapper = l._wrapInput(n)), l._activeInput(n), l.toggle(l.options.enabled), n.closest("form").bind({
                        submit: a.proxy(l._onParentFormSubmit, l),
                        reset: a.proxy(l._onParentFormReset, l)
                    }), l.options.async.saveUrl != b ? l._module = l._supportsFormData() ? new q(l) : new p(l) : l._module = new o(l), l._supportsDrop() && l._setupDropZone(), l.wrapper.delegate(".k-upload-action", "click", a.proxy(l._onFileAction, l)).delegate(".k-upload-selected", "click", a.proxy(l._onUploadSelected, l)).delegate(".k-file", "t:progress", a.proxy(l._onFileProgress, l)).delegate(".k-file", "t:upload-success", a.proxy(l._onUploadSuccess, l)).delegate(".k-file", "t:upload-error", a.proxy(l._onUploadError, l)), l.bind([f, g, h, i, j, k, m], l.options)
                },
                options: {
                    name: "Upload",
                    enabled: !0,
                    multiple: !0,
                    showFileList: !0,
                    async: {
                        removeVerb: "POST",
                        autoUpload: !0
                    },
                    localization: {
                        select: "Select...",
                        cancel: "Cancel",
                        retry: "Retry",
                        remove: "Remove",
                        uploadSelectedFiles: "Upload files",
                        dropFilesHere: "drop files here to upload",
                        statusUploading: "uploading",
                        statusUploaded: "uploaded",
                        statusFailed: "failed"
                    }
                },
                enable: function() {
                    this.toggle(!0)
                },
                disable: function() {
                    this.toggle(!1)
                },
                toggle: function(a) {
                    a = typeof a == "undefined" ? a : !a, this.wrapper.toggleClass("k-state-disabled", a)
                },
                _addInput: function(b) {
                    var c = this;
                    b.insertAfter(c.element).data("kendoUpload", c), a(c.element).hide().removeAttr("id"), c._activeInput(b)
                },
                _activeInput: function(b) {
                    var c = this,
                        d = c.wrapper;
                    c.element = b, b.attr("multiple", c._supportsMultiple() ? c.multiple : !1).attr("autocomplete", "off").click(function(a) {
                        d.hasClass("k-state-disabled") && a.preventDefault()
                    }).change(a.proxy(c._onInputChange, c))
                },
                _onInputChange: function(b) {
                    var c = a(b.target),
                        d = this.trigger(f, {
                            files: s(c)
                        });
                    d || c.trigger("t:select")
                },
                _onDrop: function(b) {
                    var c = b.originalEvent.dataTransfer,
                        d = this,
                        e = c.files;
                    z(b);
                    if (e.length > 0) {
                        var g = d.trigger(f, {
                            files: e
                        });
                        g || a(".k-dropzone", d.wrapper).trigger("t:select", [e])
                    }
                },
                _enqueueFile: function(b, c) {
                    var d = this,
                        e, f, g = a(".k-upload-files", d.wrapper);
                    g.length == 0 && (g = a("<ul class='k-upload-files k-reset'></ul>").appendTo(d.wrapper), d.options.showFileList || g.hide()), e = a(".k-file", g), f = a("<li class='k-file'><span class='k-icon'></span><span class='k-filename' title='" + b + "'>" + b + "</span></li>").appendTo(g).data(c), d.multiple || e.trigger("t:remove");
                    return f
                },
                _removeFileEntry: function(b) {
                    var c = b.closest(".k-upload-files");
                    a(".k-file", c).length == 1 ? (c.remove(), this._hideUploadButton()) : b.remove()
                },
                _fileAction: function(a, b) {
                    var c = {
                        remove: "k-delete",
                        cancel: "k-cancel",
                        retry: "k-retry"
                    };
                    !c.hasOwnProperty(b) || (this._clearFileAction(a), a.append(this._renderAction(c[b], this.localization[b]).addClass("k-upload-action")))
                },
                _fileState: function(a, b) {
                    var c = this.localization,
                        d = {
                            uploading: {
                                cssClass: "k-loading",
                                text: c.statusUploading
                            },
                            uploaded: {
                                cssClass: "k-success",
                                text: c.statusUploaded
                            },
                            failed: {
                                cssClass: "k-fail",
                                text: c.statusFailed
                            }
                        },
                        e = d[b];
                    if (e) {
                        var f = a.children(".k-icon").text(e.text);
                        f[0].className = "k-icon " + e.cssClass
                    }
                },
                _renderAction: function(b, c) {
                    return b != "" ? a("<button type='button' class='k-button k-button-icontext'><span class='k-icon " + b + "'></span>" + c + "</button>") : a("<button type='button' class='k-button'>" + c + "</button>")
                },
                _clearFileAction: function(a) {
                    a.find(".k-upload-action").remove()
                },
                _onFileAction: function(b) {
                    var c = this;
                    if (!c.wrapper.hasClass("k-state-disabled")) {
                        var d = a(b.target).closest(".k-upload-action"),
                            e = d.find(".k-icon"),
                            f = d.closest(".k-file"),
                            g = {
                                files: f.data("fileNames")
                            };
                        e.hasClass("k-delete") ? c.trigger(m, g) || f.trigger("t:remove", g.data) : e.hasClass("k-cancel") ? (c.trigger(k, g), f.trigger("t:cancel")) : e.hasClass("k-retry") && f.trigger("t:retry")
                    }
                    return !1
                },
                _onUploadSelected: function() {
                    this.wrapper.trigger("t:saveSelected");
                    return !1
                },
                _onFileProgress: function(b, c) {
                    var d = a(".k-progress-status", b.target);
                    d.length == 0 && (d = a("<span class='k-progress'><span class='k-progress-status' style='width: 0;'></span></span>").appendTo(a(".k-filename", b.target)).find(".k-progress-status")), d.width(c + "%")
                },
                _onUploadSuccess: function(a, b, c) {
                    var d = D(a);
                    this._fileState(d, "uploaded"), this.trigger(h, {
                        files: d.data("fileNames"),
                        response: b,
                        operation: "upload",
                        XMLHttpRequest: c
                    }), this._supportsRemove() ? this._fileAction(d, m) : this._clearFileAction(d), this._checkAllComplete()
                },
                _onUploadError: function(a, b) {
                    var c = D(a);
                    this._fileState(c, "failed"), this._fileAction(c, "retry");
                    var d = this.trigger(i, {
                        operation: "upload",
                        files: c.data("fileNames"),
                        XMLHttpRequest: b
                    });
                    C("Server response: " + b.responseText), d || this._alert("Error! Upload failed. Unexpected server response - see console."), this._checkAllComplete()
                },
                _showUploadButton: function() {
                    var b = a(".k-upload-selected", this.wrapper);
                    b.length == 0 && (b = this._renderAction("", this.localization.uploadSelectedFiles).addClass("k-upload-selected")), this.wrapper.append(b)
                },
                _hideUploadButton: function() {
                    a(".k-upload-selected", this.wrapper).remove()
                },
                _onParentFormSubmit: function() {
                    var b = this,
                        c = b.element;
                    c.trigger("t:abort");
                    if (!c.value) {
                        var d = a(c);
                        d.attr("disabled", "disabled"), window.setTimeout(function() {
                            d.removeAttr("disabled")
                        }, 0)
                    }
                },
                _onParentFormReset: function() {
                    a(".k-file", this.wrapper).trigger("t:remove")
                },
                _supportsFormData: function() {
                    return typeof FormData != "undefined"
                },
                _supportsMultiple: function() {
                    return !a.browser.opera
                },
                _supportsDrop: function() {
                    var a = this._userAgent().toLowerCase(),
                        c = /chrome/.test(a),
                        d = !c && /safari/.test(a),
                        e = d && /windows/.test(a);
                    return !e && this._supportsFormData() && this.options.async.saveUrl != b
                },
                _userAgent: function() {
                    return navigator.userAgent
                },
                _setupDropZone: function() {
                    a(".k-upload-button", this.wrapper).wrap("<div class='k-dropzone'></div>");
                    var b = a(".k-dropzone", this.wrapper).append(a("<em>" + this.localization.dropFilesHere + "</em>")).bind({
                        dragenter: z,
                        dragover: function(a) {
                            a.preventDefault()
                        },
                        drop: a.proxy(this._onDrop, this)
                    });
                    A(b, function() {
                        b.addClass("k-dropzone-hovered")
                    }, function() {
                        b.removeClass("k-dropzone-hovered")
                    }), A(a(document), function() {
                        b.addClass("k-dropzone-active")
                    }, function() {
                        b.removeClass("k-dropzone-active")
                    })
                },
                _supportsRemove: function() {
                    return this.options.async.removeUrl != b
                },
                _submitRemove: function(b, c, d, e) {
                    var f = this,
                        g = f.options.async.removeField || "fileNames",
                        h = a.extend(c, E());
                    h[g] = b, a.ajax({
                        type: this.options.async.removeVerb,
                        dataType: "json",
                        url: this.options.async.removeUrl,
                        traditional: !0,
                        data: h,
                        success: d,
                        error: e
                    })
                },
                _alert: function(a) {
                    alert(a)
                },
                _wrapInput: function(a) {
                    a.wrap("<div class='k-widget k-upload'><div class='k-button k-upload-button'></div></div>"), a.closest(".k-button").append("<span>" + this.localization.select + "</span>");
                    return a.closest(".k-upload")
                },
                _checkAllComplete: function() {
                    a(".k-file .k-icon.k-loading", this.wrapper).length == 0 && this.trigger(j)
                }
            }),
            o = function(b) {
                this.name = "syncUploadModule", this.element = b.wrapper, this.upload = b, this.element.bind("t:select", a.proxy(this.onSelect, this)).bind("t:remove", a.proxy(this.onRemove, this)).closest("form").attr("enctype", "multipart/form-data").attr("encoding", "multipart/form-data")
            };
        o.prototype = {
            onSelect: function(b) {
                var c = this.upload,
                    d = a(b.target);
                c._addInput(d.clone().val(""));
                var e = c._enqueueFile(r(d), {
                    relatedInput: d
                });
                c._fileAction(e, m)
            },
            onRemove: function(a) {
                var b = D(a);
                b.data("relatedInput").remove(), this.upload._removeFileEntry(b)
            }
        };
        var p = function(b) {
            this.name = "iframeUploadModule", this.element = b.wrapper, this.upload = b, this.iframes = [], this.element.bind("t:select", a.proxy(this.onSelect, this)).bind("t:cancel", a.proxy(this.onCancel, this)).bind("t:retry", a.proxy(this.onRetry, this)).bind("t:remove", a.proxy(this.onRemove, this)).bind("t:saveSelected", a.proxy(this.onSaveSelected, this)).bind("t:abort", a.proxy(this.onAbort, this))
        };
        n._frameId = 0, p.prototype = {
            onSelect: function(b) {
                var c = this.upload,
                    d = a(b.target),
                    e = this.prepareUpload(d);
                c.options.async.autoUpload ? this.performUpload(e) : (c._supportsRemove() && this.upload._fileAction(e, m), c._showUploadButton())
            },
            prepareUpload: function(b) {
                var c = this.upload,
                    d = a(c.element),
                    e = c.options.async.saveField || b.attr("name");
                c._addInput(b.clone().val("")), b.attr("name", e);
                var f = this.createFrame(c.name + "_" + n._frameId++);
                this.registerFrame(f);
                var g = this.createForm(c.options.async.saveUrl, f.attr("name")).append(d),
                    h = c._enqueueFile(r(b), {
                        frame: f,
                        relatedInput: d,
                        fileNames: s(b)
                    });
                f.data({
                    form: g,
                    file: h
                });
                return h
            },
            performUpload: function(b) {
                var c = {
                        files: b.data("fileNames")
                    },
                    d = b.data("frame"),
                    e = this.upload;
                if (!e.trigger(g, c)) {
                    e._hideUploadButton(), d.appendTo(document.body);
                    var f = d.data("form").appendTo(document.body);
                    c.data = a.extend({}, c.data, E());
                    for (var h in c.data) {
                        var i = f.find("input[name='" + h + "']");
                        i.length == 0 && (i = a("<input>", {
                            type: "hidden",
                            name: h
                        }).appendTo(f)), i.val(c.data[h])
                    }
                    e._fileAction(b, k), e._fileState(b, "uploading"), d.one("load", a.proxy(this.onIframeLoad, this)), f[0].submit()
                } else e._removeFileEntry(d.data("file")), this.cleanupFrame(d), this.unregisterFrame(d)
            },
            onSaveSelected: function(b) {
                var c = this;
                a(".k-file", this.element).each(function() {
                    var b = a(this),
                        d = B(b);
                    d || c.performUpload(b)
                })
            },
            onIframeLoad: function(b) {
                var c = a(b.target);
                try {
                    var d = c.contents().text()
                } catch (b) {
                    d = "Error trying to get server response: " + b
                }
                this.processResponse(c, d)
            },
            processResponse: function(b, c) {
                var d = b.data("file"),
                    e = this,
                    f = {
                        responseText: c
                    };
                y(c, function(c) {
                    a.extend(f, {
                        statusText: "OK",
                        status: "200"
                    }), d.trigger("t:upload-success", [c, f]), e.cleanupFrame(b), e.unregisterFrame(b)
                }, function() {
                    a.extend(f, {
                        statusText: "error",
                        status: "500"
                    }), d.trigger("t:upload-error", [f])
                })
            },
            onCancel: function(b) {
                var c = a(b.target).data("frame");
                this.stopFrameSubmit(c), this.cleanupFrame(c), this.unregisterFrame(c), this.upload._removeFileEntry(c.data("file"))
            },
            onRetry: function(a) {
                var b = D(a);
                this.performUpload(b)
            },
            onRemove: function(a, b) {
                var c = D(a),
                    d = c.data("frame");
                d ? (this.unregisterFrame(d), this.upload._removeFileEntry(c), this.cleanupFrame(d)) : x(c, this.upload, b)
            },
            onAbort: function() {
                var b = this.element,
                    c = this;
                a.each(this.iframes, function() {
                    a("input", this.data("form")).appendTo(b), c.stopFrameSubmit(this[0]), this.data("form").remove(), this.remove()
                }), this.iframes = []
            },
            createFrame: function(b) {
                return a("<iframe name='" + b + "'" + " id='" + b + "'" + " style='display:none;' />")
            },
            createForm: function(b, c) {
                return a("<form enctype='multipart/form-data' method='POST' action='" + b + "'" + " target='" + c + "'" + "/>")
            },
            stopFrameSubmit: function(a) {
                typeof a.stop != "undefined" ? a.stop() : a.document && (a.document.execCommand("Stop"), a.contentWindow.location.href = a.contentWindow.location.href)
            },
            registerFrame: function(a) {
                this.iframes.push(a)
            },
            unregisterFrame: function(b) {
                this.iframes = a.grep(this.iframes, function(a) {
                    return a.attr("name") != b.attr("name")
                })
            },
            cleanupFrame: function(a) {
                var b = a.data("form");
                a.data("file").data("frame", null), setTimeout(function() {
                    b.remove(), a.remove()
                }, 1)
            }
        };
        var q = function(b) {
            this.name = "formDataUploadModule", this.element = b.wrapper, this.upload = b, this.element.bind("t:select", a.proxy(this.onSelect, this)).bind("t:cancel", a.proxy(this.onCancel, this)).bind("t:remove", a.proxy(this.onRemove, this)).bind("t:retry", a.proxy(this.onRetry, this)).bind("t:saveSelected", a.proxy(this.onSaveSelected, this)).bind("t:abort", a.proxy(this.onAbort, this))
        };
        q.prototype = {
            onSelect: function(b, c) {
                var d = this.upload,
                    e = this,
                    f = a(b.target),
                    g = c ? t(c) : this.inputFiles(f),
                    h = this.prepareUpload(f, g);
                a.each(h, function() {
                    d.options.async.autoUpload ? e.performUpload(this) : (d._supportsRemove() && d._fileAction(this, m), d._showUploadButton())
                })
            },
            prepareUpload: function(b, c) {
                var d = this.enqueueFiles(c);
                b.is("input") && (a.each(d, function() {
                    a(this).data("relatedInput", b)
                }), b.data("relatedFileEntries", d), this.upload._addInput(b.clone().val("")));
                return d
            },
            enqueueFiles: function(a) {
                var b = this.upload;
                fileEntries = [];
                for (var c = 0; c < a.length; c++) {
                    var d = a[c],
                        e = d.name,
                        f = b._enqueueFile(e, {
                            fileNames: [d]
                        });
                    f.data("formData", this.createFormData(a[c])), fileEntries.push(f)
                }
                return fileEntries
            },
            inputFiles: function(a) {
                return s(a)
            },
            performUpload: function(b) {
                var c = this.upload,
                    d = b.data("formData"),
                    e = {
                        files: b.data("fileNames")
                    };
                if (!c.trigger(g, e)) {
                    c._fileAction(b, k), c._hideUploadButton(), e.data = a.extend({}, e.data, E());
                    for (var f in e.data) d.append(f, e.data[f]);
                    c._fileState(b, "uploading"), this.postFormData(this.upload.options.async.saveUrl, d, b)
                } else this.removeFileEntry(b)
            },
            onSaveSelected: function(b) {
                var c = this;
                a(".k-file", this.element).each(function() {
                    var b = a(this),
                        d = B(b);
                    d || c.performUpload(b)
                })
            },
            onCancel: function(a) {
                var b = D(a);
                this.stopUploadRequest(b), this.removeFileEntry(b)
            },
            onRetry: function(a) {
                var b = D(a);
                this.performUpload(b)
            },
            onRemove: function(a, b) {
                var c = D(a);
                c.children(".k-icon").is(".k-success") ? x(c, this.upload, b) : this.removeFileEntry(c)
            },
            postFormData: function(a, b, c) {
                var d = new XMLHttpRequest,
                    e = this;
                c.data("request", d), d.addEventListener("load", function(a) {
                    e.onRequestSuccess.call(e, a, c)
                }, !1), d.addEventListener(i, function(a) {
                    e.onRequestError.call(e, a, c)
                }, !1), d.upload.addEventListener("progress", function(a) {
                    e.onRequestProgress.call(e, a, c)
                }, !1), d.open("POST", a), d.send(b)
            },
            createFormData: function(a) {
                var b = new FormData,
                    c = this.upload;
                b.append(c.options.async.saveField || c.name, a.rawFile);
                return b
            },
            onRequestSuccess: function(a, b) {
                var c = a.target,
                    d = this;
                y(c.responseText, function(a) {
                    b.trigger("t:upload-success", [a, c]), b.trigger("t:progress", [100]), d.cleanupFileEntry(b)
                }, function() {
                    b.trigger("t:upload-error", [c])
                })
            },
            onRequestError: function(a, b) {
                var c = a.target;
                b.trigger("t:upload-error", [c])
            },
            cleanupFileEntry: function(b) {
                var c = b.data("relatedInput"),
                    d = !0;
                c && (a.each(c.data("relatedFileEntries"), function() {
                    this.parent().length > 0 && this[0] != b[0] && (d = d && this.children(".k-icon").is(".k-success"))
                }), d && c.remove()), b.data("formData", null)
            },
            removeFileEntry: function(a) {
                this.cleanupFileEntry(a), this.upload._removeFileEntry(a)
            },
            onRequestProgress: function(a, b) {
                var c = Math.round(a.loaded * 100 / a.total);
                b.trigger("t:progress", [c])
            },
            stopUploadRequest: function(a) {
                a.data("request").abort()
            }
        }, c.ui.plugin(n)
    }(jQuery),
    function(a, b) {
        function J(a) {
            var b = this;
            b.owner = a, b._draggable = new e(a.wrapper, {
                filter: n,
                group: a.wrapper.id + "-moving",
                dragstart: h(b.dragstart, b),
                drag: h(b.drag, b),
                dragend: h(b.dragend, b)
            })
        }

        function I(a) {
            var b = this;
            b.owner = a, b._draggable = new e(a.wrapper, {
                filter: ".k-resize-handle",
                group: a.wrapper.id + "-resizing",
                dragstart: h(b.dragstart, b),
                drag: h(b.drag, b),
                dragend: h(b.dragend, b)
            })
        }

        function H(b, c) {
            var d = a(b);
            typeof c.scrollable != "undefined" && c.scrollable === !1 && d.attr("style", "overflow:hidden;"), c.content && !D(c.content) && d.html(l.iframe(c)), a(l.wrapper(c)).append(l.titlebar(c)).append(d).appendTo(k)
        }

        function F() {
            return a(m).filter(function() {
                var b = a(this);
                return b.is(s) && E(b).options.modal
            })
        }

        function E(a) {
            return a.children(o).data("kendoWindow")
        }
        var c = window.kendo,
            d = c.ui.Widget,
            e = c.ui.Draggable,
            f = c.fx,
            g = a.isPlainObject,
            h = a.proxy,
            i = a.each,
            j = c.template,
            k, l, m = ".k-window",
            n = ".k-window-titlebar",
            o = ".k-window-content",
            p = ".k-overlay",
            q = "k-loading",
            r = "k-state-hover",
            s = ":visible",
            t = "cursor",
            u = "open",
            v = "activate",
            w = "deactivate",
            x = "close",
            y = "refresh",
            z = "resize",
            A = "dragend",
            B = "error",
            C = "overflow",
            D = c.isLocalUrl,
            G = d.extend({
                init: function(b, c) {
                    var e = this,
                        f, g = ".k-window-titlebar .k-window-action",
                        j, o, p = !1;
                    k = document.body, d.fn.init.call(e, b, c), c = e.options, b = e.element, c.animation === !1 && (c.animation = {
                        open: {
                            show: !0,
                            effects: {}
                        },
                        close: {
                            hide: !0,
                            effects: {}
                        }
                    });
                    if (!b.parent().is("body"))
                        if (b.is(s)) o = b.offset(), p = !0;
                        else {
                            var q = b.css("visibility"),
                                t = b.css("display");
                            b.css({
                                visibility: "hidden",
                                display: ""
                            }), o = b.offset(), b.css({
                                visibility: q,
                                display: t
                            })
                        }
                    f = e.wrapper = b.closest(m);
                    if (!b.is(".k-content") || !f[0]) b.addClass("k-window-content k-content"), H(b, c), f = e.wrapper = b.closest(m), j = e.wrapper.find(n), j.css("margin-top", -j.outerHeight()), f.css("padding-top", j.outerHeight()), c.width && f.width(c.width), c.height && f.height(c.height), a.each(["minWidth", "minHeight", "maxWidth", "maxHeight"], function(a, b) {
                        var d = c[b];
                        d && d != Infinity && f.css(b, d)
                    }), c.visible || f.hide();
                    o && (p ? f.css({
                        top: o.top,
                        left: o.left
                    }) : f.css({
                        top: o.top,
                        left: o.left,
                        visibility: "visible",
                        display: "none"
                    })), f.toggleClass("k-rtl", e.wrapper.closest(".k-rtl").length).appendTo(k), e.toFront(), c.modal && e._overlay(f.is(s)).css({
                        opacity: .5
                    }), f.bind("mousedown", h(e.toFront, e)).delegate(g, "mouseenter", function() {
                        a(this).addClass(r)
                    }).delegate(g, "mouseleave", function() {
                        a(this).removeClass(r)
                    }).delegate(g, "click", h(e._windowActionHandler, e)), c.resizable && (f.delegate(n, "dblclick", h(e.toggleMaximization, e)), i("n e s w se sw ne nw".split(" "), function(a, b) {
                        f.append(l.resizeHandle(b))
                    }), e.resizing = new I(e)), c.draggable && (e.dragging = new J(e)), e.bind([u, v, w, x, y, z, A, B], c), a(window).resize(h(e._onDocumentResize, e)), a.isPlainObject(c.content) || (c.content = {
                        url: c.content
                    }), D(c.content.url) && e._ajaxRequest(c.content), f.is(s) && (e.trigger(u), e.trigger(v))
                },
                options: {
                    name: "Window",
                    animation: {
                        open: {
                            effects: {
                                zoomIn: {},
                                fadeIn: {}
                            },
                            duration: 350,
                            show: !0
                        },
                        close: {
                            effects: {
                                zoomOut: {
                                    properties: {
                                        scale: .7
                                    }
                                },
                                fadeOut: {}
                            },
                            duration: 350,
                            hide: !0
                        }
                    },
                    title: "",
                    actions: ["Close"],
                    modal: !1,
                    resizable: !0,
                    draggable: !0,
                    minWidth: 50,
                    minHeight: 50,
                    maxWidth: Infinity,
                    maxHeight: Infinity,
                    visible: !0
                },
                _overlay: function(b) {
                    var c = a("body > .k-overlay"),
                        d = a(document),
                        e = this.wrapper[0];
                    c.length == 0 ? c = a("<div class='k-overlay' />").toggle(b).insertBefore(e) : c.insertBefore(e).toggle(b);
                    return c
                },
                _windowActionHandler: function(b) {
                    var c = a(b.target).closest(".k-window-action").find(".k-icon"),
                        d = this;
                    i({
                        "k-close": d.close,
                        "k-maximize": d.maximize,
                        "k-restore": d.restore,
                        "k-refresh": d.refresh
                    }, function(a, e) {
                        if (c.hasClass(a)) {
                            b.preventDefault(), e.call(d);
                            return !1
                        }
                    })
                },
                center: function() {
                    var b = this.wrapper,
                        c = a(window);
                    b.css({
                        left: c.scrollLeft() + Math.max(0, (c.width() - b.width()) / 2),
                        top: c.scrollTop() + Math.max(0, (c.height() - b.height()) / 2)
                    });
                    return this
                },
                title: function(b) {
                    var c = a(".k-window-titlebar > .k-window-title", this.wrapper);
                    if (!b) return c.text();
                    c.text(b);
                    return this
                },
                content: function(a) {
                    var b = this.wrapper.children(o);
                    if (!a) return b.html();
                    b.html(a);
                    return this
                },
                open: function() {
                    var b = this,
                        c = b.wrapper,
                        d = b.options.animation.open,
                        e = c.children(o),
                        f = e.css(C);
                    if (!b.trigger(u)) {
                        if (b.options.modal) {
                            var g = b._overlay(!1);
                            d.duration ? g.kendoStop().kendoAnimate({
                                effects: {
                                    fadeOut: {
                                        properties: {
                                            opacity: .5
                                        }
                                    }
                                },
                                duration: d.duration,
                                show: !0
                            }) : g.css("opacity", .5).show()
                        }
                        c.is(s) || (e.css(C, "hidden"), c.show().kendoStop().kendoAnimate({
                            effects: d.effects,
                            duration: d.duration,
                            complete: function() {
                                b.trigger(v), e.css(C, f)
                            }
                        })), b.toFront()
                    }
                    b.options.isMaximized && a("html, body").css(C, "hidden");
                    return b
                },
                close: function() {
                    var c = this,
                        d = c.wrapper,
                        e = c.options,
                        f = e.animation.close,
                        g, h, i;
                    d.is(s) && !c.trigger(x) && (g = F(), h = e.modal && g.length == 1, i = e.modal ? c._overlay(!0) : a(b), h ? f.duration ? i.kendoStop().kendoAnimate({
                        effects: {
                            fadeOut: {
                                properties: {
                                    opacity: 0
                                }
                            }
                        },
                        duration: f.duration,
                        hide: !0
                    }) : i.hide() : g.length && E(g.eq(g.length - 2))._overlay(!0), d.kendoStop().kendoAnimate({
                        effects: f.effects,
                        duration: f.duration,
                        complete: function() {
                            d.hide(), c.trigger(w)
                        }
                    })), c.options.isMaximized && a("html, body").css(C, "");
                    return c
                },
                toFront: function() {
                    var b = this,
                        c = b.wrapper,
                        d = c[0],
                        e = +c.css("zIndex");
                    a(m).each(function(b, c) {
                        var f = a(c),
                            g = f.css("zIndex"),
                            h = f.find(".k-window-content");
                        isNaN(g) || (e = Math.max(+g, e)), c != d && h.find("> .k-content-frame").length > 0 && h.append(l.overlay)
                    }), c.css("zIndex", e + 2), b.element.find("> .k-overlay").remove();
                    return b
                },
                toggleMaximization: function() {
                    return this[this.options.isMaximized ? "restore" : "maximize"]()
                },
                restore: function() {
                    var b = this,
                        c = b.options,
                        d = b.restorationSettings;
                    if (!!c.isMaximized) {
                        b.wrapper.css({
                            position: "absolute",
                            left: d.left,
                            top: d.top,
                            width: d.width,
                            height: d.height
                        }).find(".k-resize-handle").show().end().find(".k-window-titlebar .k-restore").addClass("k-maximize").removeClass("k-restore"), a("html, body").css(C, ""), c.isMaximized = !1, b.trigger(z);
                        return b
                    }
                },
                maximize: function() {
                    var b = this;
                    if (!b.options.isMaximized) {
                        var c = b.wrapper;
                        b.restorationSettings = {
                            left: c.position().left,
                            top: c.position().top,
                            width: c.width(),
                            height: c.height()
                        }, c.css({
                            left: 0,
                            top: 0,
                            position: "fixed"
                        }).find(".k-resize-handle").hide().end().find(".k-window-titlebar .k-maximize").addClass("k-restore").removeClass("k-maximize"), a("html, body").css(C, "hidden"), b.options.isMaximized = !0, b._onDocumentResize();
                        return b
                    }
                },
                _onDocumentResize: function() {
                    var b = this,
                        c = b.wrapper,
                        d = a(window);
                    !b.options.isMaximized || (c.css({
                        width: d.width(),
                        height: d.height()
                    }), b.trigger(z))
                },
                refresh: function(b) {
                    a.isPlainObject(b) || (b = {
                        url: b
                    });
                    var c = this,
                        d = b.url = b.url || c.options.content.url;
                    D(d) && c._ajaxRequest(b);
                    return c
                },
                _ajaxRequest: function(b) {
                    var c = this,
                        d = c.wrapper.find(".k-window-titlebar .k-refresh"),
                        e = setTimeout(function() {
                            d.addClass(q)
                        }, 100);
                    a.ajax(a.extend({
                        type: "GET",
                        dataType: "html",
                        cache: !1,
                        error: h(function(a, b) {
                            c.trigger(B)
                        }, c),
                        complete: function() {
                            clearTimeout(e), d.removeClass(q)
                        },
                        success: h(function(a, b) {
                            c.wrapper.children(o).html(a), c.trigger(y)
                        }, c)
                    }, c.options.content, b))
                },
                destroy: function() {
                    var a = this,
                        b, c;
                    a.wrapper.remove(), b = F(), c = a.options.modal && !b.length, c ? a._overlay(!1).remove() : b.length > 0 && E(b.eq(b.length - 2))._overlay(!0)
                }
            });
        l = {
            wrapper: j("<div class='k-widget k-window' />"),
            titlebar: j("<div class='k-window-titlebar k-header'>&nbsp;<span class='k-window-title'>#= title #</span><div class='k-window-actions k-header'># for (var i = 0; i < actions.length; i++) { #<a href='\\#' class='k-window-action k-link'><span class='k-icon k-#= actions[i].toLowerCase() #'>#= actions[i] #</span></a># } #</div></div>"),
            overlay: "<div class='k-overlay' />",
            iframe: j("<iframe src='#= content #' title='#= title #' frameborder='0' class='k-content-frame'>This page requires frames in order to show content</iframe>"),
            resizeHandle: j("<div class='k-resize-handle k-resize-#= data #'></div>")
        }, I.prototype = {
            dragstart: function(b) {
                var c = this.owner,
                    d = c.wrapper;
                c.elementPadding = parseInt(c.wrapper.css("padding-top")), c.initialCursorPosition = d.offset(), c.resizeDirection = b.currentTarget.prop("className").replace("k-resize-handle k-resize-", "").split(""), c.initialSize = {
                    width: c.wrapper.width(),
                    height: c.wrapper.height()
                }, d.append(l.overlay).find(".k-resize-handle").not(b.currentTarget).hide(), a(k).css(t, b.currentTarget.css(t))
            },
            drag: function(a) {
                var b = this.owner,
                    c = b.wrapper,
                    d = b.options,
                    e = function(a, b, c) {
                        return Math.max(Math.min(a, c), b)
                    },
                    f = {
                        e: function() {
                            var f = a.pageX - b.initialCursorPosition.left;
                            c.width(e(f, d.minWidth, d.maxWidth))
                        },
                        s: function() {
                            var f = a.pageY - b.initialCursorPosition.top - b.elementPadding;
                            c.height(e(f, d.minHeight, d.maxHeight))
                        },
                        w: function() {
                            var f = b.initialCursorPosition.left + b.initialSize.width,
                                g = e(f - a.pageX, d.minWidth, d.maxWidth);
                            c.css({
                                left: f - g,
                                width: g
                            })
                        },
                        n: function() {
                            var f = b.initialCursorPosition.top + b.initialSize.height,
                                g = e(f - a.pageY, d.minHeight, d.maxHeight);
                            c.css({
                                top: f - g,
                                height: g
                            })
                        }
                    };
                i(b.resizeDirection, function() {
                    f[this]()
                }), b.trigger(z)
            },
            dragend: function(b) {
                var c = this.owner,
                    d = c.wrapper;
                d.find(p).remove().end().find(".k-resize-handle").not(b.currentTarget).show(), a(k).css(t, ""), b.keyCode == 27 && d.css(c.initialCursorPosition).css(c.initialSize);
                return !1
            }
        }, J.prototype = {
            dragstart: function(b) {
                var c = this.owner,
                    d = a(c.element);
                c.initialWindowPosition = c.wrapper.position(), c.startPosition = {
                    left: b.pageX - c.initialWindowPosition.left,
                    top: b.pageY - c.initialWindowPosition.top
                };
                var e = d.find(".k-window-actions");
                e.length > 0 ? c.minLeftPosition = e.outerWidth() + parseInt(e.css("right"), 10) - d.outerWidth() : c.minLeftPosition = 20 - d.outerWidth(), c.wrapper.append(l.overlay).find(".k-resize-handle").hide(), a(k).css(t, b.currentTarget.css(t))
            },
            drag: function(b) {
                var c = this.owner,
                    d = {
                        left: Math.max(b.pageX - c.startPosition.left, c.minLeftPosition),
                        top: Math.max(b.pageY - c.startPosition.top, 0)
                    };
                a(c.wrapper).css(d)
            },
            dragend: function(b) {
                var c = this.owner;
                c.wrapper.find(".k-resize-handle").show().end().find(p).remove(), a(k).css(t, ""), b.keyCode == 27 ? b.currentTarget.closest(m).css(c.initialWindowPosition) : c.trigger(A);
                return !1
            }
        }, c.ui.plugin(G)
    }(jQuery),
    function(a, b) {
        function cP(a) {
            return a * a
        }

        function cO(a) {
            var b = a.length,
                c = 0,
                d;
            for (d = 0; d < b; d++) c = k.max(c, a[d].data.length);
            return c
        }

        function cN(a, b, c) {
            var d, e = a.length;
            for (d = 0; d < e; d++) a[d][b] = c
        }

        function cL(a) {
            return typeof a !== bs
        }

        function cK() {
            var a = "k",
                b;
            for (b = 0; b < 16; b++) a += (k.random() * 16 | 0).toString(16);
            return a
        }

        function cJ(a, b, c) {
            a[b] = (a[b] || 0) + c
        }

        function cI(b, c) {
            var d = c ? cB({}, c.axisDefaults) : {};
            a.each(["category", "value", "x", "y"], function() {
                var a = this + "Axis";
                b[a] = cB({}, d, d[a], b.axisDefaults, b[a])
            })
        }

        function cH(a) {
            var b = a.series,
                c, d = b.length,
                e = a.seriesColors || [];
            for (c = 0; c < d; c++) b[c].color = b[c].color || e[c % e.length]
        }

        function cG(a, b) {
            var c = a.series,
                d, e = c.length,
                f, g = a.seriesDefaults,
                h = cB({}, a.seriesDefaults),
                i = b ? cB({}, b.seriesDefaults) : {};
            delete h.bar, delete h.column, delete h.line, delete h.pie, delete h.scatter, delete h.scatterLine;
            for (d = 0; d < e; d++) f = c[d].type || a.seriesDefaults.type, c[d] = cB({}, i, i[f], {
                tooltip: a.tooltip
            }, h, g[f], c[d])
        }

        function cF(a, b, c) {
            return cr(a + (b - a) * c, G)
        }

        function cE(a, b) {
            [].push.apply(a, b)
        }

        function cD(a, b, c, d) {
            var e, f = (d.x - c.x) * (a.y - c.y) - (d.y - c.y) * (a.x - c.x),
                g = (d.y - c.y) * (b.x - a.x) - (d.x - c.x) * (b.y - a.y),
                h;
            g != 0 && (h = f / g, e = new bB(a.x + h * (b.x - a.x), a.y + h * (b.y - a.y)));
            return e
        }

        function cC(a, b) {
            var c, d, e, f;
            for (c in b) d = b[c], e = typeof d, e === ba && d !== null && d.constructor !== Array ? (f = a[c], typeof f === ba ? a[c] = f || {} : a[c] = {}, cC(a[c], d)) : e !== bs && (a[c] = d);
            return a
        }

        function cB(a) {
            var b = 1,
                c = arguments.length;
            for (b = 1; b < c; b++) cC(a, arguments[b]);
            return a
        }

        function cA(b, c) {
            return a.inArray(b, c) != -1
        }

        function cz(a) {
            var b = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
            typeof a == "number" ? b[bn] = b[bi] = b[z] = b[U] = a : (b[bn] = a[bn] || 0, b[bi] = a[bi] || 0, b[z] = a[z] || 0, b[U] = a[U] || 0);
            return b
        }

        function cy(a) {
            var b = Number.MAX_VALUE,
                c = -Number.MAX_VALUE;
            for (var d = 0, e = a.length; d < e; d++) {
                var f = a[d];
                cL(f) && (b = k.min(b, f), c = k.max(c, f))
            }
            return {
                min: b,
                max: c
            }
        }

        function cx(a) {
            return cy(a).max
        }

        function cw(a) {
            return cy(a).min
        }

        function cv(b, c) {
            if (b.x1 == c.x1 && b.y1 == c.y1 && b.x2 == c.x2 && b.y2 == c.y2) return c;
            var d = k.min(b.x1, c.x1),
                e = k.max(b.x1, c.x1),
                f = k.min(b.x2, c.x2),
                g = k.max(b.x2, c.x2),
                h = k.min(b.y1, c.y1),
                i = k.max(b.y1, c.y1),
                j = k.min(b.y2, c.y2),
                l = k.max(b.y2, c.y2),
                m = [];
            m[0] = new bC(e, h, f, i), m[1] = new bC(d, i, e, j), m[2] = new bC(f, i, g, j), m[3] = new bC(e, j, f, l), b.x1 == d && b.y1 == h || c.x1 == d && c.y1 == h ? (m[4] = new bC(d, h, e, i), m[5] = new bC(f, j, g, l)) : (m[4] = new bC(f, h, g, i), m[5] = new bC(d, j, e, l));
            return a.grep(m, function(a) {
                return a.height() > 0 && a.width() > 0
            })[0]
        }

        function cu(a, b, c, d, e) {
            var f = e * L;
            return {
                x: c + (a - c) * k.cos(f) + (b - d) * k.sin(f),
                y: d - (a - c) * k.sin(f) + (b - d) * k.cos(f)
            }
        }

        function ct(a) {
            var b = [];
            for (var c in a) b.push(c + a[c]);
            return b.sort().join(" ")
        }

        function cs(b, d, e) {
            var f = ct(d),
                g = b + f + e,
                h = cs.cache[g];
            if (h) return h;
            var i = cs.measureBox,
                j = cs.baselineMarker.cloneNode(!1);
            i || (i = cs.measureBox = a("<div style='position: absolute; top: -4000px; left: -4000px;line-height: normal; visibility: hidden;' />").appendTo(c.body)[0]);
            for (var l in d) i.style[l] = d[l];
            i.innerHTML = b, i.appendChild(j);
            var m = {
                width: i.offsetWidth - s,
                height: i.offsetHeight,
                baseline: j.offsetTop + s
            };
            if (e) {
                var n = m.width,
                    o = m.height,
                    p = n / 2,
                    q = o / 2,
                    r = cu(0, 0, p, q, e),
                    t = cu(n, 0, p, q, e),
                    u = cu(n, o, p, q, e);
                r4 = cu(0, o, p, q, e), m.normalWidth = n, m.normalHeight = o, m.width = k.max(r.x, t.x, u.x, r4.x) - k.min(r.x, t.x, u.x, r4.x), m.height = k.max(r.y, t.y, u.y, r4.y) - k.min(r.y, t.y, u.y, r4.y)
            }
            cs.cache[g] = m;
            return m
        }

        function cr(a, b) {
            var c = k.pow(10, b || 0);
            return k.round(a * c) / c
        }

        function cq(a, b) {
            return cr(k.floor(a / b) * b, J)
        }

        function cp(a, b) {
            return cr(k.ceil(a / b) * b, J)
        }

        function cd() {
            return c.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
        }
        var c = document,
            d = window.kendo,
            e = d.Class,
            f = d.ui.Widget,
            g = d.data.DataSource,
            h = d.template,
            i = d.format,
            j = a.map,
            k = Math,
            l = a.proxy,
            m = d.getter,
            n = a.extend,
            o = function(a) {
                return h(a, {
                    useWithBlock: !1,
                    paramName: "d"
                })
            },
            p = "above",
            q = "12px sans-serif",
            r = 10,
            s = 1,
            t = "bar",
            u = .8,
            v = 1.5,
            w = .4,
            x = "below",
            y = "#000",
            z = "bottom",
            A = "center",
            B = "change",
            C = "circle",
            D = "click",
            E = "clip",
            F = "column",
            G = 3,
            H = "dataBound",
            I = 400,
            J = 6,
            K = 600,
            L = k.PI / 180,
            M = "fadeIn",
            N = "glass",
            O = "height",
            P = "horizontal",
            Q = 600,
            R = "insideBase",
            S = "insideEnd",
            T = "interpolate",
            U = "left",
            V = "line",
            W = 8,
            X = "linear",
            Y = "mousemove.tracking",
            Z = "mouseover",
            $ = "none",
            _ = 1.05,
            ba = "object",
            bb = "onMinorTicks",
            bc = "outside",
            bd = "outsideEnd",
            be = "_outline",
            bf = "pie",
            bg = 70,
            bh = "radial",
            bi = "right",
            bj = "roundedBevel",
            bk = "seriesClick",
            bl = "square",
            bm = "swing",
            bn = "top",
            bo = 150,
            bp = 5,
            bq = 100,
            br = "triangle",
            bs = "undefined",
            bt = "vertical",
            bu = "width",
            bv = "#fff",
            bw = "x",
            bx = "y",
            by = "zero",
            bz = .2,
            bA = f.extend({
                init: function(b, c) {
                    var d = this,
                        e, h;
                    f.fn.init.call(d, b), c && c.dataSource && (d.dataSource = g.create(c.dataSource).bind(B, l(d._onDataChanged, d))), c = cB({}, d.options, c), h = c.theme, e = h ? bA.themes[h] || bA.themes[h.toLowerCase()] : {}, cI(c, e), cG(c, e), d.options = cB({}, e, c), cH(d.options), d.bind([H, bk], d.options), a(b).addClass("k-chart"), d._refresh(), d._attachEvents()
                },
                options: {
                    name: "Chart",
                    chartArea: {},
                    title: {
                        visible: !0
                    },
                    legend: {
                        visible: !0
                    },
                    valueAxis: {
                        type: "Numeric"
                    },
                    categoryAxis: {
                        categories: []
                    },
                    autoBind: !0,
                    seriesDefaults: {
                        type: F,
                        data: [],
                        bar: {
                            gap: v,
                            spacing: w
                        },
                        column: {
                            gap: v,
                            spacing: w
                        },
                        line: {
                            width: 4
                        },
                        labels: {}
                    },
                    series: [],
                    tooltip: {
                        visible: !1
                    },
                    transitions: !0
                },
                refresh: function() {
                    var a = this;
                    cG(a.options), cI(a.options), a._refresh()
                },
                _refresh: function() {
                    var a = this;
                    a.options.dataSource && a.options.autoBind ? a.dataSource.query() : a._redraw()
                },
                _redraw: function() {
                    var a = this,
                        b = a.options,
                        c = a.element,
                        d = a._model = a._getModel(),
                        e = a._plotArea = d._plotArea,
                        f = a._supportsSVG() ? bA.SVGView : bA.VMLView,
                        g = a._view = f.fromModel(d);
                    c.css("position", "relative"), a._viewElement = g.renderTo(c[0]), a._tooltip = new co(c, b.tooltip), a._highlight = new cn(g, a._viewElement)
                },
                svg: function() {
                    var a = this._getModel(),
                        b = bA.SVGView.fromModel(a);
                    return b.render()
                },
                _getModel: function() {
                    var a = this,
                        b = a.options,
                        c = a.element,
                        d = new bF(cB({
                            width: c.width() || K,
                            height: c.height() || I,
                            transitions: b.transitions
                        }, b.chartArea)),
                        e;
                    b.title && b.title.visible && b.title.text && d.append(new bK(b.title)), e = d._plotArea = new ca(b), b.legend.visible && d.append(new bL(e.options.legend)), d.append(e), d.reflow();
                    return d
                },
                _supportsSVG: cd,
                _attachEvents: function() {
                    var a = this,
                        b = a.element;
                    b.bind(D, l(a._click, a)), b.bind(Z, l(a._mouseOver, a))
                },
                _getPoint: function(a) {
                    var b = this,
                        c = b._model,
                        d = b._eventCoordinates(a),
                        e = a.target.id,
                        f = c.idMap[e],
                        g = c.idMapMetadata[e],
                        h;
                    f && (f.getNearestPoint && g ? h = f.getNearestPoint(d.x, d.y, g.seriesIx) : h = f);
                    return h
                },
                _eventCoordinates: function(b) {
                    var c = this.element,
                        d = c.offset(),
                        e = parseInt(c.css("paddingLeft"), 10),
                        f = parseInt(c.css("paddingTop"), 10),
                        g = a(window);
                    return {
                        x: b.clientX - d.left - e + g.scrollLeft(),
                        y: b.clientY - d.top - f + g.scrollTop()
                    }
                },
                _click: function(b) {
                    var c = this,
                        d = c._getPoint(b);
                    d && c.trigger(bk, {
                        value: d.value,
                        category: d.category,
                        series: d.series,
                        dataItem: d.dataItem,
                        element: a(b.target)
                    })
                },
                _mouseOver: function(b) {
                    var d = this,
                        e = d._tooltip,
                        f = d._highlight,
                        g, h;
                    !!f && f.element !== b.target && (h = d._getPoint(b), h && (d._activePoint = h, g = cB({}, d.options.tooltip, h.options.tooltip), g.visible && e.show(h), f.show(h), a(c.body).bind(Y, l(d._mouseMove, d))))
                },
                _mouseMove: function(b) {
                    var d = this,
                        e = d._tooltip,
                        f = d._highlight,
                        g = d._eventCoordinates(b),
                        h = d._activePoint,
                        i, j, k;
                    d._plotArea.box.containsPoint(g.x, g.y) ? h && h.series.type === V && (j = h.owner, k = j.getNearestPoint(g.x, g.y, h.seriesIx), k && k != h && (d._activePoint = k, i = cB({}, d.options.tooltip, h.options.tooltip), i.visible && e.show(k), f.show(k))) : (a(c.body).unbind(Y), delete d._activePoint, e.hide(), f.hide())
                },
                _onDataChanged: function() {
                    var a = this,
                        c = a.options,
                        d = c.series,
                        e = c.categoryAxis,
                        f = a.dataSource.view(),
                        g, h, i, j;
                    for (var k = 0, l = d.length; k < l; k++) {
                        i = d[k];
                        if (i.field || i.xField && i.yField) i.data = [], i.dataItems = []
                    }
                    for (var n = 0, o = f.length; n < o; n++) {
                        g = f[n], e.field && (h = m(e.field, !0)(g), n === 0 ? e.categories = [h] : e.categories.push(h));
                        for (var k = 0, l = d.length; k < l; k++) i = d[k], i.field ? j = m(i.field, !0)(g) : i.xField && i.yField ? j = [m(i.xField, !0)(g), m(i.yField, !0)(g)] : j = b, cL(j) && (n === 0 ? (i.data = [j], i.dataItems = [g]) : (i.data.push(j), i.dataItems.push(g)))
                    }
                    a.trigger(H), a._redraw()
                }
            }),
            bB = e.extend({
                init: function(a, b) {
                    var c = this;
                    c.x = cr(a, G), c.y = cr(b, G)
                }
            }),
            bC = e.extend({
                init: function(a, b, c, d) {
                    var e = this;
                    e.x1 = a || 0, e.x2 = c || 0, e.y1 = b || 0, e.y2 = d || 0
                },
                width: function() {
                    return this.x2 - this.x1
                },
                height: function() {
                    return this.y2 - this.y1
                },
                translate: function(a, b) {
                    var c = this;
                    c.x1 += a, c.x2 += a, c.y1 += b, c.y2 += b;
                    return c
                },
                move: function(a, b) {
                    var c = this,
                        d = c.height(),
                        e = c.width();
                    c.x1 = a, c.y1 = b, c.x2 = c.x1 + e, c.y2 = c.y1 + d;
                    return c
                },
                wrap: function(a) {
                    var b = this;
                    b.x1 = k.min(b.x1, a.x1), b.y1 = k.min(b.y1, a.y1), b.x2 = k.max(b.x2, a.x2), b.y2 = k.max(b.y2, a.y2);
                    return b
                },
                snapTo: function(a, b) {
                    var c = this;
                    if (b == bw || !b) c.x1 = a.x1, c.x2 = a.x2;
                    if (b == bx || !b) c.y1 = a.y1, c.y2 = a.y2;
                    return c
                },
                alignTo: function(a, b) {
                    var c = this,
                        d = c.height(),
                        e = c.width(),
                        f = b == bn || b == z ? bx : bw,
                        g = f == bx ? d : e;
                    b == bn || b == U ? c[f + 1] = a[f + 1] - g : c[f + 1] = a[f + 2], c.x2 = c.x1 + e, c.y2 = c.y1 + d;
                    return c
                },
                shrink: function(a, b) {
                    var c = this;
                    c.x2 -= a, c.y2 -= b;
                    return c
                },
                expand: function(a, b) {
                    this.shrink(-a, -b);
                    return this
                },
                pad: function(a) {
                    var b = this,
                        c = cz(a);
                    b.x1 -= c.left, b.x2 += c.right, b.y1 -= c.top, b.y2 += c.bottom;
                    return b
                },
                unpad: function(a) {
                    var b = this,
                        c = cz(a);
                    c.left = -c.left, c.top = -c.top, c.right = -c.right, c.bottom = -c.bottom;
                    return b.pad(c)
                },
                clone: function() {
                    var a = this;
                    return new bC(a.x1, a.y1, a.x2, a.y2)
                },
                center: function() {
                    var a = this;
                    return {
                        x: a.x1 + a.width() / 2,
                        y: a.y1 + a.height() / 2
                    }
                },
                containsPoint: function(a, b) {
                    var c = this;
                    return a >= c.x1 && a <= c.x2 && b >= c.y1 && b <= c.y2
                },
                points: function() {
                    var a = this;
                    return [new bB(a.x1, a.y1), new bB(a.x2, a.y1), new bB(a.x2, a.y2), new bB(a.x1, a.y2)]
                }
            }),
            bD = e.extend({
                init: function(a, b, c, d) {
                    var e = this;
                    e.c = a, e.r = b, e.startAngle = c, e.angle = d
                },
                clone: function() {
                    var a = this;
                    return new bD(a.c, a.r, a.startAngle, a.angle)
                },
                expand: function(a) {
                    this.r += a;
                    return this
                },
                middle: function() {
                    return this.startAngle + this.angle / 2
                },
                radius: function(a) {
                    this.r = a;
                    return this
                },
                point: function(a) {
                    var b = this,
                        c = a * L,
                        d = k.cos(c),
                        e = k.sin(c),
                        f = b.c.x - d * b.r,
                        g = b.c.y - e * b.r;
                    return new bB(f, g)
                }
            }),
            bE = e.extend({
                init: function(a) {
                    var b = this;
                    b.children = [], b.options = cB({}, b.options, a)
                },
                reflow: function(a) {
                    var b = this,
                        c = b.children,
                        d, e, f;
                    for (e = 0; e < c.length; e++) f = c[e], f.reflow(a), d = d ? d.wrap(f.box) : f.box.clone();
                    b.box = d
                },
                getViewElements: function(a) {
                    var b = this,
                        c = [],
                        d = b.children,
                        e = d.length;
                    for (var f = 0; f < e; f++) c.push.apply(c, d[f].getViewElements(a));
                    return c
                },
                registerId: function(a, b) {
                    var c = this,
                        d;
                    d = c.getRoot(), d && (d.idMap[a] = c, b && (d.idMapMetadata[a] = b))
                },
                translateChildren: function(a, b) {
                    var c = this,
                        d = c.children,
                        e = d.length,
                        f;
                    for (f = 0; f < e; f++) d[f].box.translate(a, b)
                },
                append: function() {
                    var a = this,
                        b, c = arguments.length;
                    cE(a.children, arguments);
                    for (b = 0; b < c; b++) arguments[b].parent = a
                },
                getRoot: function() {
                    var a = this,
                        b = a.parent;
                    return b ? b.getRoot() : null
                }
            }),
            bF = bE.extend({
                init: function(a) {
                    var b = this;
                    b.idMap = {}, b.idMapMetadata = {}, bE.fn.init.call(b, a)
                },
                options: {
                    width: K,
                    height: I,
                    background: bv,
                    border: {
                        color: y,
                        width: 0
                    },
                    margin: cz(5),
                    zIndex: -1
                },
                reflow: function() {
                    var a = this,
                        b = a.options,
                        c = a.children,
                        d = new bC(0, 0, b.width, b.height);
                    a.box = d.unpad(b.margin);
                    for (var e = 0; e < c.length; e++) c[e].reflow(d), d = cv(d, c[e].box)
                },
                getViewElements: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.border || {},
                        e = b.box.clone().pad(c.margin).unpad(d.width),
                        f = [a.createRect(e, {
                            stroke: d.width ? d.color : "",
                            strokeWidth: d.width,
                            dashType: d.dashType,
                            fill: c.background,
                            zIndex: c.zIndex
                        })];
                    return f.concat(bE.fn.getViewElements.call(b, a))
                },
                getRoot: function() {
                    return this
                }
            }),
            bG = bE.extend({
                init: function(a) {
                    bE.fn.init.call(this, a)
                },
                options: {
                    align: U,
                    vAlign: bn,
                    margin: {},
                    padding: {},
                    border: {
                        color: y,
                        width: 0
                    },
                    background: "",
                    width: 0,
                    height: 0,
                    visible: !0
                },
                reflow: function(a) {
                    var b = this,
                        c, d, e = b.options,
                        f = b.children,
                        g = cz(e.margin),
                        h = cz(e.padding),
                        i = e.border,
                        j = i.width;
                    bE.fn.reflow.call(b, a), f.length === 0 ? c = b.box = new bC(0, 0, e.width, e.height) : c = b.box, d = b.contentBox = c.clone(), c.pad(h).pad(j).pad(g), b.align(a, bw, e.align), b.align(a, bx, e.vAlign), b.paddingBox = c.clone().unpad(g).unpad(j), b.translateChildren(c.x1 - d.x1 + g.left + j + h.left, c.y1 - d.y1 + g.top + j + h.top)
                },
                align: function(a, b, c) {
                    var d = this,
                        e = d.box,
                        f = b + 1,
                        g = b + 2,
                        h = b === bw ? bu : O,
                        i = e[h]();
                    cA(c, [U, bn]) ? (e[f] = a[f], e[g] = e[f] + i) : cA(c, [bi, z]) ? (e[g] = a[g], e[f] = e[g] - i) : c == A && (e[f] = a[f] + (a[h]() - i) / 2, e[g] = e[f] + i)
                },
                hasBox: function() {
                    var a = this.options;
                    return a.border.width || a.background
                },
                getViewElements: function(a, b) {
                    var c = this,
                        d = c.options;
                    if (!d.visible) return [];
                    var e = d.border || {},
                        f = [];
                    c.hasBox() && f.push(a.createRect(c.paddingBox, cB({
                        id: d.id,
                        stroke: e.width ? e.color : "",
                        strokeWidth: e.width,
                        dashType: e.dashType,
                        strokeOpacity: d.opacity,
                        fill: d.background,
                        fillOpacity: d.opacity,
                        animation: d.animation,
                        zIndex: d.zIndex
                    }, b)));
                    return f.concat(bE.fn.getViewElements.call(c, a))
                }
            }),
            bH = bE.extend({
                init: function(a, b) {
                    var c = this;
                    bE.fn.init.call(c, b), c.content = a, c.reflow(new bC)
                },
                options: {
                    font: q,
                    color: y,
                    align: U,
                    vAlign: ""
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.size = cs(b.content, {
                            font: c.font
                        }, c.rotation);
                    b.baseline = d.baseline;
                    if (c.align == U) b.box = new bC(a.x1, a.y1, a.x1 + d.width, a.y1 + d.height);
                    else if (c.align == bi) b.box = new bC(a.x2 - d.width, a.y1, a.x2, a.y1 + d.height);
                    else if (c.align == A) {
                        var e = (a.width() - d.width) / 2;
                        b.box = new bC(cr(a.x1 + e, G), a.y1, cr(a.x2 - e, G), a.y1 + d.height)
                    }
                    if (c.vAlign == A) {
                        var e = (a.height() - d.height) / 2;
                        b.box = new bC(b.box.x1, a.y1 + e, b.box.x2, a.y2 - e)
                    } else c.vAlign == z ? b.box = new bC(b.box.x1, a.y2 - d.height, b.box.x2, a.y2) : c.vAlign == bn && (b.box = new bC(b.box.x1, a.y1, b.box.x2, a.y1 + d.height))
                },
                getViewElements: function(a) {
                    var b = this,
                        c = b.options;
                    bE.fn.getViewElements.call(this, a);
                    return [a.createText(b.content, cB({}, c, {
                        x: b.box.x1,
                        y: b.box.y1,
                        baseline: b.baseline
                    }))]
                }
            }),
            bI = bG.extend({
                init: function(a, b) {
                    var c = this,
                        d;
                    bG.fn.init.call(c, b), b = c.options, b.template || (a = b.format ? i(b.format, a) : a), d = new bH(a, cB({}, b, {
                        align: U,
                        vAlign: bn
                    })), c.append(d), c.hasBox() && (d.options.id = cK()), c.reflow(new bC)
                }
            }),
            bJ = bE.extend({
                init: function(a, b) {
                    var c = this;
                    bE.fn.init.call(c, b), c.append(new bI(a, c.options))
                },
                options: {
                    position: bd,
                    margin: cz(3),
                    padding: cz(4),
                    color: y,
                    background: "",
                    border: {
                        width: 1,
                        color: ""
                    },
                    aboveAxis: !0,
                    isVertical: !1,
                    animation: {
                        type: M,
                        delay: Q
                    },
                    zIndex: 1
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.isVertical,
                        e = c.aboveAxis,
                        f = b.children[0],
                        g = f.box,
                        h = f.options.padding;
                    f.options.align = d ? A : U, f.options.vAlign = d ? bn : A, c.position == S ? d ? (f.options.vAlign = bn, !e && g.height() < a.height() && (f.options.vAlign = z)) : f.options.align = e ? bi : U : c.position == A ? (f.options.vAlign = A, f.options.align = A) : c.position == R ? d ? f.options.vAlign = e ? z : bn : f.options.align = e ? U : bi : c.position == bd && (d ? e ? a = new bC(a.x1, a.y1 - g.height(), a.x2, a.y1) : a = new bC(a.x1, a.y2, a.x2, a.y2 + g.height()) : (f.options.align = A, e ? a = new bC(a.x2 + g.width(), a.y1, a.x2, a.y2) : a = new bC(a.x1 - g.width(), a.y1, a.x1, a.y2))), d ? h.left = h.right = (a.width() - f.contentBox.width()) / 2 : h.top = h.bottom = (a.height() - f.contentBox.height()) / 2, f.reflow(a)
                }
            }),
            bK = bE.extend({
                init: function(a) {
                    var b = this;
                    bE.fn.init.call(b, a), b.append(new bI(b.options.text, cB({}, b.options, {
                        vAlign: b.options.position
                    })))
                },
                options: {
                    text: "",
                    color: y,
                    position: bn,
                    align: A,
                    margin: cz(5),
                    padding: cz(5)
                },
                reflow: function(a) {
                    var b = this;
                    bE.fn.reflow.call(b, a), b.box.snapTo(a, bw)
                }
            }),
            bL = bE.extend({
                init: function(a) {
                    var b = this;
                    bE.fn.init.call(b, a), b.createLabels()
                },
                options: {
                    position: bi,
                    items: [],
                    labels: {},
                    offsetX: 0,
                    offsetY: 0,
                    margin: cz(10),
                    padding: cz(5),
                    border: {
                        color: y,
                        width: 0
                    },
                    background: "",
                    zIndex: 1
                },
                createLabels: function() {
                    var a = this,
                        b = a.options.items,
                        c = b.length,
                        d, e, f;
                    for (f = 0; f < c; f++) e = b[f].name, d = new bH(e, a.options.labels), a.append(d)
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options,
                        d = b.children.length;
                    if (d === 0) b.box = a.clone();
                    else {
                        if (c.position == "custom") {
                            b.customLayout(a);
                            return
                        }
                        c.position == bn || c.position == z ? b.horizontalLayout(a) : b.verticalLayout(a)
                    }
                },
                getViewElements: function(a) {
                    var b = this,
                        c = b.children,
                        d = b.options,
                        e = d.items,
                        f = e.length,
                        g = b.markerSize(),
                        h = a.createGroup({
                            zIndex: d.zIndex
                        }),
                        i = d.border || {},
                        j, k, l, m, n, o;
                    cE(h.children, bE.fn.getViewElements.call(b, a));
                    for (o = 0; o < f; o++) l = e[o].color, m = c[o], j = new bC, n = m.box, k = k ? k.wrap(n) : n.clone(), j.x1 = n.x1 - g * 2, j.x2 = j.x1 + g, d.position == bn || d.position == z ? j.y1 = n.y1 + g / 2 : j.y1 = n.y1 + (n.height() - g) / 2, j.y2 = j.y1 + g, h.children.push(a.createRect(j, {
                        fill: l,
                        stroke: l
                    }));
                    if (c.length > 0) {
                        var p = cz(d.padding);
                        p.left += g * 2, k.pad(p), h.children.unshift(a.createRect(k, {
                            stroke: i.width ? i.color : "",
                            strokeWidth: i.width,
                            dashType: i.dashType,
                            fill: d.background
                        }))
                    }
                    return [h]
                },
                verticalLayout: function(a) {
                    var b = this,
                        c = b.options,
                        d = b.children,
                        e = d.length,
                        f = d[0].box.clone(),
                        g, h, i = cz(c.margin),
                        j = b.markerSize() * 2;
                    for (var l = 1; l < e; l++) {
                        var m = b.children[l];
                        m.box.alignTo(b.children[l - 1].box, z), f.wrap(m.box)
                    }
                    c.position == U ? (g = a.x1 + j + i.left, h = (a.y2 - f.height()) / 2, f.x2 += j + i.left + i.right) : (g = a.x2 - f.width() - i.right, h = (a.y2 - f.height()) / 2, f.translate(g, h), f.x1 -= j + i.left), b.translateChildren(g + c.offsetX, h + c.offsetY);
                    var n = f.width();
                    f.x1 = k.max(a.x1, f.x1), f.x2 = f.x1 + n, f.y1 = a.y1, f.y2 = a.y2, b.box = f
                },
                horizontalLayout: function(a) {
                    var b = this,
                        c = b.options,
                        d = b.children,
                        e = d.length,
                        f = d[0].box.clone(),
                        g = b.markerSize() * 3,
                        h, i, j = cz(c.margin),
                        k = d[0].box.width() + g,
                        l = a.width(),
                        m, n = 0,
                        o;
                    for (o = 1; o < e; o++) m = d[o], k += m.box.width() + g, k > l - g ? (m.box = new bC(f.x1, f.y2, f.x1 + m.box.width(), f.y2 + m.box.height()), k = m.box.width() + g, n = m.box.y1) : (m.box.alignTo(d[o - 1].box, bi), m.box.y2 = n + m.box.height(), m.box.y1 = n, m.box.translate(g, 0)), f.wrap(m.box);
                    h = (a.width() - f.width() + g) / 2, c.position === bn ? (i = a.y1 + j.top, f.y2 = a.y1 + f.height() + j.top + j.bottom, f.y1 = a.y1) : (i = a.y2 - f.height() - j.bottom, f.y1 = a.y2 - f.height() - j.top - j.bottom, f.y2 = a.y2), b.translateChildren(h + c.offsetX, i + c.offsetY), f.x1 = a.x1, f.x2 = a.x2, b.box = f
                },
                customLayout: function(a) {
                    var b = this,
                        c = b.options,
                        d = b.children,
                        e = d.length,
                        f = d[0].box.clone(),
                        g = b.markerSize() * 2,
                        h;
                    for (h = 1; h < e; h++) f = b.children[h].box, f.alignTo(b.children[h - 1].box, z), f.wrap(f);
                    b.translateChildren(c.offsetX + g, c.offsetY), b.box = a
                },
                markerSize: function() {
                    var a = this,
                        b = a.children;
                    return b.length > 0 ? b[0].box.height() / 2 : 0
                }
            }),
            bM = bE.extend({
                init: function(a) {
                    var b = this;
                    bE.fn.init.call(b, a)
                },
                options: {
                    labels: {
                        rotation: 0
                    },
                    line: {
                        width: 1,
                        color: y
                    },
                    majorTickType: bc,
                    majorTickSize: 4,
                    minorTickType: $,
                    minorTickSize: 3,
                    axisCrossingValue: 0,
                    minorGridLines: {
                        visible: !1,
                        width: 1,
                        color: y
                    },
                    margin: 5
                },
                renderTicks: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.orientation === bt,
                        e = b.box,
                        f = b.getMajorTickPositions(),
                        g = [];
                    c.majorTickType.toLowerCase() === bc && (g = g.concat(j(f, function(a) {
                        return {
                            pos: a,
                            size: c.majorTickSize,
                            width: c.line.width,
                            color: c.line.color
                        }
                    }))), c.minorTickType.toLowerCase() === bc && (g = g.concat(j(b.getMinorTickPositions(), function(a) {
                        if (c.majorTickType.toLowerCase() === $) return {
                            pos: a,
                            size: c.minorTickSize,
                            width: c.line.width,
                            color: c.line.color
                        };
                        if (!cA(a, f)) return {
                            pos: a,
                            size: c.minorTickSize,
                            width: c.line.width,
                            color: c.line.color
                        }
                    })));
                    return j(g, function(b) {
                        return d ? a.createLine(e.x2 - b.size, b.pos, e.x2, b.pos, {
                            strokeWidth: b.width,
                            stroke: b.color
                        }) : a.createLine(b.pos, e.y1, b.pos, e.y1 + b.size, {
                            strokeWidth: b.width,
                            stroke: b.color
                        })
                    })
                },
                getActualTickSize: function() {
                    var a = this,
                        b = a.options,
                        c = 0;
                    b.majorTickType != $ && b.minorTickType != $ ? c = k.max(b.majorTickSize, b.minorTickSize) : b.majorTickType != $ ? c = b.majorTickSize : b.minorTickType != $ && (c = b.minorTickSize);
                    return c
                },
                arrangeLabels: function(a, b, c) {
                    var d = this,
                        e = d.options,
                        f = d.options.orientation === bt,
                        g = d.children,
                        h = d.getMajorTickPositions(),
                        i = d.getActualTickSize(),
                        j, k, l;
                    for (l = 0; l < g.length; l++) {
                        var m = g[l],
                            n = f ? g.length - 1 - l : l,
                            o = f ? m.box.height() : m.box.width(),
                            p = h[n] - o / 2,
                            q, r, s, t;
                        f ? (c == bb && (q = h[l], r = h[l + 1], s = q + (r - q) / 2, p = s - o / 2), t = d.box.x2 - e.margin - i, j = new bC(t - m.box.width(), p, t, p)) : (c == bb ? (q = h[l], r = h[l + 1]) : (q = p, r = p + o), k = d.box.y1 + i + e.margin, j = new bC(q, k, r, k)), m.reflow(j)
                    }
                }
            }),
            bN = bM.extend({
                init: function(a, b, c) {
                    var d = this,
                        e = d.initDefaults(a, b, c),
                        f, g, i;
                    bM.fn.init.call(d, e), c = d.options;
                    var j = d.getDivisions(c.majorUnit),
                        k = c.min,
                        l = c.orientation === bt ? bi : A,
                        m = cB({}, c.labels, {
                            align: l,
                            zIndex: c.zIndex
                        }),
                        n;
                    for (i = 0; i < j; i++) m.template && (f = h(m.template), n = f({
                        value: k
                    })), g = new bI(n || k, m), d.append(g), k = cr(k + c.majorUnit, J)
                },
                options: {
                    min: 0,
                    max: 1,
                    orientation: bt,
                    majorGridLines: {
                        visible: !0,
                        width: 1,
                        color: y
                    },
                    zIndex: 1
                },
                initDefaults: function(a, b, c) {
                    var d = this,
                        e = d.autoAxisMin(a, b),
                        f = d.autoAxisMax(a, b),
                        g = d.autoMajorUnit(e, f),
                        h = {
                            min: e,
                            max: f,
                            majorUnit: g
                        },
                        i;
                    h.min = cq(e * _, g), h.max = cp(f * _, g), c && (i = cL(c.min) || cL(c.max), i && c.min === c.max && (c.min > 0 ? c.min = 0 : c.max = 1), c.majorUnit ? (h.min = cq(h.min, c.majorUnit), h.max = cp(h.max, c.majorUnit)) : i && (c = cB(h, c), h.majorUnit = d.autoMajorUnit(c.min, c.max)));
                    return cB(h, c)
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.orientation === bt,
                        e = b.children,
                        f = b.getActualTickSize() + c.margin,
                        g = 0,
                        h = 0,
                        i = e.length,
                        j, l;
                    for (l = 0; l < i; l++) j = e[l], g = k.max(g, j.box.width()), h = k.max(h, j.box.height());
                    d ? b.box = new bC(a.x1, a.y1, a.x1 + g + f, a.y2) : b.box = new bC(a.x1, a.y1, a.x2, a.y1 + h + f), b.arrangeLabels(g, h)
                },
                getViewElements: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.orientation === bt,
                        e = bE.fn.getViewElements.call(b, a),
                        f = b.getMinorTickPositions(),
                        g;
                    c.line.width > 0 && (g = {
                        strokeWidth: c.line.width,
                        stroke: c.line.color,
                        dashType: c.line.dashType,
                        zIndex: c.zIndex
                    }, d ? e.push(a.createLine(b.box.x2, f[0], b.box.x2, f[f.length - 1], g)) : e.push(a.createLine(f[0], b.box.y1, f[f.length - 1], b.box.y1, g)), cE(e, b.renderTicks(a)));
                    return e
                },
                autoMajorUnit: function(a, b) {
                    var c = b - a;
                    if (c == 0) {
                        if (b == 0) return .1;
                        c = k.abs(b)
                    }
                    var d = k.pow(10, k.floor(k.log(c) / k.log(10))),
                        e = cr(c / d, J),
                        f = 1;
                    e < 1.904762 ? f = .2 : e < 4.761904 ? f = .5 : e < 9.523809 ? f = 1 : f = 2;
                    return cr(d * f, J)
                },
                autoAxisMax: function(a, b) {
                    if (a == 0 && b == 0) return 1;
                    var c;
                    if (a <= 0 && b <= 0) {
                        b = a == b ? 0 : b;
                        var d = k.abs((b - a) / b);
                        if (d > bz) return 0;
                        c = b - (a - b) / 2
                    } else a = a == b ? 0 : a, c = b;
                    return c
                },
                autoAxisMin: function(a, b) {
                    if (a == 0 && b == 0) return 0;
                    var c;
                    if (a >= 0 && b >= 0) {
                        a = a == b ? 0 : a;
                        var d = (b - a) / b;
                        if (d > bz) return 0;
                        c = a - (b - a) / 2
                    } else b = a == b ? 0 : b, c = a;
                    return c
                },
                getDivisions: function(a) {
                    var b = this.options,
                        c = b.max - b.min;
                    return k.floor(cr(c / a, G)) + 1
                },
                getTickPositions: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.orientation === bt,
                        e = b.getAxisLineBox(),
                        f = d ? e.height() : e.width(),
                        g = c.max - c.min,
                        h = f / g,
                        i = a * h,
                        j = b.getDivisions(a),
                        k = e[d ? "y2" : "x1"],
                        l = d ? -1 : 1,
                        m = [],
                        n;
                    for (n = 0; n < j; n++) m.push(cr(k, G)), k = k + i * l;
                    return d ? m.reverse() : m
                },
                getMajorTickPositions: function() {
                    var a = this;
                    return a.getTickPositions(a.options.majorUnit)
                },
                getMinorTickPositions: function() {
                    var a = this;
                    return a.getTickPositions(a.options.majorUnit / 5)
                },
                getAxisLineBox: function() {
                    var a = this,
                        b = a.options,
                        c = b.orientation === bt,
                        d = c ? "height" : "width",
                        e = a.children,
                        f = a.box,
                        g = 0,
                        h = 0;
                    e.length > 1 && (g = e[0].box[d]() / 2, h = e[e.length - 1].box[d]() / 2);
                    return c ? new bC(f.x2, f.y1 + g, f.x2, f.y2 - h) : new bC(f.x1 + g, f.y1, f.x2 - h, f.y1)
                },
                getSlot: function(a, b) {
                    var c = this,
                        d = c.options,
                        e = d.orientation === bt,
                        f = e ? bx : bw,
                        g = c.getAxisLineBox(),
                        h = g[f + 1],
                        i = e ? g.height() : g.width(),
                        j = i / (d.max - d.min),
                        a = cL(a) ? a : d.axisCrossingValue,
                        b = cL(b) ? b : d.axisCrossingValue,
                        a = k.max(k.min(a, d.max), d.min),
                        b = k.max(k.min(b, d.max), d.min),
                        l, m, n = new bC(g.x1, g.y1, g.x1, g.y1);
                    e ? (l = h + j * (d.max - k.max(a, b)), m = h + j * (d.max - k.min(a, b))) : (l = h + j * (k.min(a, b) - d.min), m = h + j * (k.max(a, b) - d.min)), n[f + 1] = l, n[f + 2] = m;
                    return n
                }
            }),
            bO = bM.extend({
                init: function(a) {
                    var b = this;
                    bM.fn.init.call(b, a);
                    var a = b.options,
                        c = a.orientation === bt ? bi : A,
                        d = cB({}, a.labels, {
                            align: c,
                            zIndex: a.zIndex
                        }),
                        e, f = a.categories.length,
                        g, i;
                    for (i = 0; i < f; i++) g = cL(a.categories[i]) ? a.categories[i] : "", d.template && (e = h(d.template), g = e({
                        value: g
                    })), b.append(new bI(g, d))
                },
                options: {
                    categories: [],
                    orientation: P,
                    majorGridLines: {
                        visible: !1,
                        width: 1,
                        color: y
                    },
                    zIndex: 1
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.orientation === bt,
                        e = b.children,
                        f = b.getActualTickSize() + c.margin,
                        g = 0,
                        h = 0,
                        i, j;
                    for (j = 0; j < e.length; j++) i = e[j], g = k.max(g, i.box.height()), h = k.max(h, i.box.width());
                    d ? b.box = new bC(a.x1, a.y1, a.x1 + h + f, a.y2) : b.box = new bC(a.x1, a.y1, a.x2, a.y1 + g + f), b.arrangeLabels(h, g, bb)
                },
                getViewElements: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.line,
                        e = c.orientation === bt,
                        f = bE.fn.getViewElements.call(b, a),
                        g;
                    d.width > 0 && (g = {
                        strokeWidth: d.width,
                        stroke: d.color,
                        dashType: d.dashType,
                        zIndex: d.zIndex
                    }, e ? f.push(a.createLine(b.box.x2, b.box.y1, b.box.x2, b.box.y2, g)) : f.push(a.createLine(b.box.x1, b.box.y1, b.box.x2, b.box.y1, g)), cE(f, b.renderTicks(a)));
                    return f
                },
                getTickPositions: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.orientation === bt,
                        e = d ? b.box.height() : b.box.width(),
                        f = e / a,
                        g = d ? b.box.y1 : b.box.x1,
                        h = [],
                        i;
                    for (i = 0; i < a; i++) h.push(cr(g, G)), g += f;
                    h.push(d ? b.box.y2 : b.box.x2);
                    return h
                },
                getMajorTickPositions: function() {
                    var a = this;
                    return a.getTickPositions(a.options.categories.length)
                },
                getMinorTickPositions: function() {
                    var a = this;
                    return a.getTickPositions(a.options.categories.length * 2)
                },
                getSlot: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.orientation === bt,
                        e = b.children,
                        f = b.box,
                        g = d ? f.height() : f.width(),
                        h = d ? f.y1 : f.x1,
                        i = g / k.max(1, e.length),
                        j = h + a * i,
                        l = j + i;
                    return d ? new bC(f.x2, j, f.x2, l) : new bC(j, f.y1, l, f.y1)
                },
                getAxisLineBox: function() {
                    var a = this,
                        b = a.options;
                    return a.getSlot(0).wrap(a.getSlot(b.categories.length - 1))
                }
            }),
            bP = bE.extend({
                init: function(a) {
                    var b = this;
                    bE.fn.init.call(b, a)
                },
                options: {
                    isVertical: !1,
                    gap: 0,
                    spacing: 0
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.isVertical,
                        e = d ? bx : bw,
                        f = b.children,
                        g = c.gap,
                        h = c.spacing,
                        i = f.length,
                        j = i + g + h * (i - 1),
                        k = (d ? a.height() : a.width()) / j,
                        l = a[e + 1] + k * (g / 2),
                        m, n;
                    for (n = 0; n < i; n++) m = (f[n].box || a).clone(), m[e + 1] = l, m[e + 2] = l + k, f[n].reflow(m), n < i - 1 && (l += k * h), l += k
                }
            }),
            bQ = bE.extend({
                init: function(a) {
                    var b = this;
                    bE.fn.init.call(b, a)
                },
                options: {
                    isVertical: !0,
                    isReversed: !1
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.isVertical,
                        e = d ? bw : bx,
                        f = d ? bx : bw,
                        g = a[f + 2],
                        h = b.children,
                        i = b.box = new bC,
                        j = h.length,
                        k, l;
                    c.isReversed ? k = d ? z : U : k = d ? bn : bi;
                    for (l = 0; l < j; l++) {
                        var m = h[l],
                            n = m.box.clone();
                        n.snapTo(a, e), m.options && (m.options.stackBase = g), l == 0 ? i = b.box = n.clone() : n.alignTo(h[l - 1].box, k), m.reflow(n), i.wrap(n)
                    }
                }
            }),
            bR = bE.extend({
                init: function(a, b) {
                    var c = this;
                    c.value = a, c.options.id = cK(), bE.fn.init.call(c, b)
                },
                options: {
                    color: bv,
                    border: {
                        width: 1
                    },
                    isVertical: !0,
                    overlay: {
                        gradient: N
                    },
                    aboveAxis: !0,
                    labels: {
                        visible: !1
                    },
                    animation: {
                        type: t
                    },
                    opacity: 1
                },
                render: function() {
                    var a = this,
                        b = a.value,
                        c = a.options,
                        d = c.labels,
                        e = b,
                        f;
                    a._rendered || (a._rendered = !0, d.visible && b && (d.template && (f = h(d.template), e = f({
                        dataItem: a.dataItem,
                        category: a.category,
                        value: a.value,
                        series: a.series
                    })), a.append(new bJ(e, cB({
                        isVertical: c.isVertical,
                        id: cK()
                    }, c.labels)))))
                },
                reflow: function(a) {
                    this.render();
                    var b = this,
                        c = b.options,
                        d = b.children,
                        e = d[0];
                    b.box = a, e && (e.options.aboveAxis = c.aboveAxis, e.reflow(a))
                },
                getViewElements: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.isVertical,
                        e = d ? 0 : 90,
                        f = c.border.width > 0 ? {
                            stroke: b.getBorderColor(),
                            strokeWidth: c.border.width,
                            dashType: c.border.dashType
                        } : {},
                        g = b.box,
                        h = cB({
                            id: c.id,
                            fill: c.color,
                            normalAngle: e,
                            aboveAxis: c.aboveAxis,
                            fillOpacity: c.opacity,
                            strokeOpacity: c.opacity,
                            stackBase: c.stackBase,
                            animation: c.animation
                        }, f),
                        i = [],
                        j = b.children[0];
                    c.overlay && (h.overlay = cB({
                        rotation: e
                    }, c.overlay)), i.push(a.createRect(g, h)), cE(i, bE.fn.getViewElements.call(b, a)), b.registerId(c.id), j && b.registerId(j.options.id);
                    return i
                },
                getOutlineElement: function(a, b) {
                    var c = this,
                        d = c.box,
                        e = c.options.id + be;
                    c.registerId(e), b = cB({}, b, {
                        id: e
                    });
                    return a.createRect(d, b)
                },
                getBorderColor: function() {
                    var a = this,
                        b = a.options,
                        c = b.color,
                        d = b.border.color;
                    cL(d) || (d = (new cM(c)).brightness(u).toHex());
                    return d
                },
                tooltipAnchor: function(a, b) {
                    var c = this,
                        d = c.options,
                        e = c.box,
                        f = d.isVertical,
                        g = d.aboveAxis,
                        h, i;
                    f ? (h = e.x2 + bp, i = g ? e.y1 : e.y2 - b) : d.isStacked ? (h = e.x2 - a, i = e.y1 - b - bp) : (h = e.x2 + bp, i = e.y1);
                    return new bB(h, i)
                },
                formatPointValue: function(a) {
                    var b = this;
                    return b.owner.formatPointValue(b.value, a)
                }
            }),
            bS = bE.extend({
                init: function(a, b) {
                    var c = this;
                    bE.fn.init.call(c, b), c.plotArea = a, c._seriesMin = Number.MAX_VALUE, c._seriesMax = -Number.MAX_VALUE, c.points = [], c.categoryPoints = [], c.seriesPoints = [], c.render()
                },
                options: {
                    series: [],
                    isVertical: !0,
                    isStacked: !1
                },
                render: function() {
                    var a = this;
                    a.traverseDataPoints(l(a.addValue, a))
                },
                addValue: function(a, b, c, d, e) {
                    var f = this,
                        g, h = f.categoryPoints[c],
                        i = f.seriesPoints[e];
                    h || (f.categoryPoints[c] = h = []), i || (f.seriesPoints[e] = i = []), f.updateRange(a, c), g = f.createPoint(a, b, c, d, e), g && (g.category = b, g.series = d, g.seriesIx = e, g.owner = f, g.dataItem = d.dataItems ? d.dataItems[c] : {
                        value: a
                    }), f.points.push(g), i.push(g), h.push(g)
                },
                updateRange: function(a, b) {
                    var c = this;
                    cL(a) && (c._seriesMin = k.min(c._seriesMin, a), c._seriesMax = k.max(c._seriesMax, a))
                },
                valueRange: function() {
                    var a = this;
                    if (a.points.length) return {
                        min: a._seriesMin,
                        max: a._seriesMax
                    };
                    return null
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.isVertical,
                        e = b.plotArea,
                        f = 0,
                        g = b.categorySlots = [],
                        h = b.points,
                        i = d ? e.axisY : e.axisX,
                        j = i.options.axisCrossingValue,
                        k;
                    b.traverseDataPoints(function(a, b, c) {
                        k = h[f++], k && k.plotValue && (a = k.plotValue);
                        var i = e.axisX.getSlot(d ? c : a),
                            l = e.axisY.getSlot(d ? a : c),
                            m = new bC(i.x1, l.y1, i.x2, l.y2),
                            n = a >= j;
                        k && (k.options.aboveAxis = n, k.reflow(m)), g[c] || (g[c] = d ? i : l)
                    }), b.reflowCategories(g), b.box = a
                },
                reflowCategories: function() {},
                traverseDataPoints: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.series,
                        e = b.plotArea.options.categoryAxis.categories || [],
                        f = cO(d),
                        g, h, i, j, k;
                    for (g = 0; g < f; g++)
                        for (h = 0; h < d.length; h++) j = e[g], k = d[h], i = k.data[g], a(i, j, g, k, h)
                },
                formatPointValue: function(a, b) {
                    return i(b, a)
                }
            }),
            bT = bS.extend({
                init: function(a, b) {
                    var c = this;
                    c._categoryTotalsPos = [], c._categoryTotalsNeg = [], bS.fn.init.call(c, a, b)
                },
                createPoint: function(a, b, c, d, e) {
                    var f = this,
                        g = f.options,
                        h = f.children,
                        i = f.options.isStacked,
                        j = cB({}, d.labels);
                    i && j.position == bd && (j.position = S);
                    var k = new bR(a, cB({}, {
                            isVertical: g.isVertical,
                            overlay: d.overlay,
                            labels: j,
                            isStacked: i
                        }, d)),
                        l = h[c];
                    l || (l = new bP({
                        isVertical: !g.isVertical,
                        gap: g.gap,
                        spacing: g.spacing
                    }), f.append(l));
                    if (i) {
                        var m = l.children[0],
                            n, o;
                        m ? (n = m.children[0], o = m.children[1]) : (m = new bE, l.append(m), n = new bQ({
                            isVertical: g.isVertical
                        }), o = new bQ({
                            isVertical: g.isVertical,
                            isReversed: !0
                        }), m.append(n, o)), a > 0 ? n.append(k) : o.append(k)
                    } else l.append(k);
                    return k
                },
                updateRange: function(a, b) {
                    var c = this,
                        d = c.options,
                        e = d.isStacked,
                        f = c._categoryTotalsPos,
                        g = c._categoryTotalsNeg;
                    cL(a) && (e ? cJ(a > 0 ? f : g, b, a) : bS.fn.updateRange.apply(c, arguments))
                },
                valueRange: function() {
                    var a = this,
                        b = a.options,
                        c = b.isStacked,
                        d = a._categoryTotalsPos,
                        e = a._categoryTotalsNeg;
                    c && (a._seriesMin = cw(e.concat(0)), a._seriesMax = cx(d.concat(0)));
                    return bS.fn.valueRange.call(a)
                },
                reflowCategories: function(a) {
                    var b = this,
                        c = b.children,
                        d = c.length,
                        e;
                    for (e = 0; e < d; e++) c[e].reflow(a[e])
                }
            }),
            bU = bG.extend({
                init: function(a) {
                    var b = this;
                    bG.fn.init.call(b, a)
                },
                options: {
                    type: bl,
                    align: A,
                    vAlign: A
                },
                getViewElements: function(a, b) {
                    var c = this,
                        d = c.options,
                        e = d.type,
                        f = c.paddingBox,
                        g = bG.fn.getViewElements.call(c, a, b)[0],
                        h = f.width() / 2;
                    if (!g) return [];
                    e === br ? g = a.createPolyline([new bB(f.x1 + h, f.y1), new bB(f.x1, f.y2), new bB(f.x2, f.y2)], !0, g.options) : e === C && (g = a.createCircle([cr(f.x1 + h, G), cr(f.y1 + f.height() / 2, G)], h, g.options));
                    return [g]
                }
            }),
            bV = bE.extend({
                init: function(a, b) {
                    var c = this;
                    c.value = a, cb.fn.init.call(c, b)
                },
                options: {
                    aboveAxis: !0,
                    isVertical: !0,
                    markers: {
                        visible: !0,
                        background: bv,
                        size: W,
                        type: C,
                        border: {
                            width: 2
                        },
                        opacity: 1
                    },
                    labels: {
                        visible: !1,
                        position: p,
                        margin: cz(3),
                        padding: cz(4),
                        animation: {
                            type: M,
                            delay: Q
                        }
                    }
                },
                render: function() {
                    var a = this,
                        b = a.options,
                        c = b.markers,
                        d = b.labels,
                        e = c.background,
                        f = cB({}, c.border),
                        g = a.value;
                    if (!a._rendered) {
                        a._rendered = !0, cL(f.color) || (f.color = (new cM(e)).brightness(u).toHex()), a.marker = new bU({
                            id: cK(),
                            visible: c.visible,
                            type: c.type,
                            width: c.size,
                            height: c.size,
                            background: e,
                            border: f,
                            opacity: c.opacity
                        }), a.append(a.marker);
                        if (d.visible) {
                            if (d.template) {
                                var i = h(d.template);
                                g = i({
                                    dataItem: a.dataItem,
                                    category: a.category,
                                    value: a.value,
                                    series: a.series
                                })
                            } else d.format && (g = a.formatPointValue(d.format));
                            a.label = new bI(g, cB({
                                id: cK(),
                                align: A,
                                vAlign: A,
                                margin: {
                                    left: 5,
                                    right: 5
                                }
                            }, d, {
                                format: ""
                            })), a.append(a.label)
                        }
                    }
                },
                markerBox: function() {
                    return this.marker.box
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.isVertical,
                        e = c.aboveAxis,
                        f;
                    b.render(), b.box = a, f = a.clone(), d ? e ? f.y1 -= f.height() : f.y2 += f.height() : e ? f.x1 += f.width() : f.x2 -= f.width(), b.marker.reflow(f), b.reflowLabel(f)
                },
                reflowLabel: function(a) {
                    var b = this,
                        c = b.options,
                        d = b.marker,
                        e = b.label,
                        f = c.labels.position;
                    e && (f = f === p ? bn : f, f = f === x ? z : f, e.reflow(a), e.box.alignTo(d.box, f), e.reflow(e.box))
                },
                getViewElements: function(a) {
                    var b = this,
                        c = b.marker,
                        d = b.label;
                    b.registerId(c.options.id), d && b.registerId(d.options.id);
                    return bE.fn.getViewElements.call(b, a)
                },
                getOutlineElement: function(a, b) {
                    var c = this,
                        d = c.marker,
                        e = c.marker.options.id + be;
                    c.registerId(e), b = cB({}, b, {
                        id: e
                    });
                    return d.getViewElements(a, cB(b, {
                        fill: d.options.border.color,
                        fillOpacity: 1,
                        strokeOpacity: 0
                    }))[0]
                },
                tooltipAnchor: function(a, b) {
                    var c = this,
                        d = c.marker.box,
                        e = c.options.aboveAxis;
                    return new bB(d.x2 + bp, e ? d.y1 - b : d.y2)
                },
                formatPointValue: function(a) {
                    var b = this;
                    return b.owner.formatPointValue(b.value, a)
                }
            }),
            bW = {
                createLines: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.series,
                        e = b.seriesPoints,
                        f, g, h = e.length,
                        i, j, k, l, m = [];
                    for (g = 0; g < h; g++) {
                        i = e[g], l = i.length, f = d[g], j = [];
                        for (pointIx = 0; pointIx < l; pointIx++) k = i[pointIx], k ? (pointCenter = k.markerBox().center(), j.push(new bB(pointCenter.x, pointCenter.y))) : f.missingValues !== T && (j.length > 1 && m.push(b.createLine(cK(), a, j, f, g)), j = []);
                        j.length > 1 && m.push(b.createLine(cK(), a, j, f, g))
                    }
                    return m
                },
                createLine: function(a, b, c, d, e) {
                    this.registerId(a, {
                        seriesIx: e
                    });
                    return b.createPolyline(c, !1, {
                        id: a,
                        stroke: d.color,
                        strokeWidth: d.width,
                        strokeOpacity: d.opacity,
                        fill: "",
                        dashType: d.dashType
                    })
                },
                getNearestPoint: function(a, b, c) {
                    var d = this,
                        e = d.options.isVertical,
                        f = e ? bw : bx,
                        g = e ? a : b,
                        h = d.seriesPoints[c],
                        i = Number.MAX_VALUE,
                        j = h.length,
                        l, m, n, o, p;
                    for (p = 0; p < j; p++) l = h[p], l && cL(l.value) && l.value !== null && (m = l.box, n = k.abs(m.center()[f] - g), n < i && (o = l, i = n));
                    return o
                }
            },
            bX = bS.extend({
                init: function(a, b) {
                    var c = this;
                    c._categoryTotals = [], bS.fn.init.call(c, a, b)
                },
                createPoint: function(a, b, c, d, e) {
                    var f = this,
                        g = f.options,
                        h = g.isStacked,
                        i = f.categoryPoints[c],
                        j, k = 0;
                    if (!cL(a) || a === null)
                        if (h || d.missingValues === by) a = 0;
                        else return null;
                    var l = new bV(a, cB({
                        isVertical: g.isVertical,
                        markers: {
                            border: {
                                color: d.color
                            },
                            opacity: d.opacity
                        }
                    }, d));
                    h && (j = i[i.length - 1], j && (k = j.plotValue), l.plotValue = a + k), f.append(l);
                    return l
                },
                updateRange: function(a, b) {
                    var c = this,
                        d = c.options,
                        e = d.isStacked,
                        f = c._categoryTotals;
                    cL(a) && (e ? (cJ(f, b, a), c._seriesMin = k.min(c._seriesMin, cw(f)), c._seriesMax = k.max(c._seriesMax, cx(f))) : bS.fn.updateRange.apply(c, arguments))
                },
                getViewElements: function(a) {
                    var b = this,
                        c = bS.fn.getViewElements.call(b, a),
                        d = a.createGroup({
                            animation: {
                                type: E
                            }
                        }),
                        e = b.createLines(a);
                    d.children = e.concat(c);
                    return [d]
                }
            });
        cB(bX.fn, bW);
        var bY = bE.extend({
                init: function(a, b) {
                    var c = this;
                    bE.fn.init.call(c, b), c.plotArea = a, c._seriesMin = [Number.MAX_VALUE, Number.MAX_VALUE], c._seriesMax = [-Number.MAX_VALUE, -Number.MAX_VALUE], c.points = [], c.seriesPoints = [], c.render()
                },
                options: {
                    series: [],
                    tooltip: {
                        format: "{0}, {1}"
                    },
                    labels: {
                        format: "{0}, {1}"
                    }
                },
                render: function() {
                    var a = this;
                    a.traverseDataPoints(l(a.addValue, a))
                },
                addValue: function(a, b) {
                    var c = this,
                        d, e = b.seriesIx,
                        f = c.seriesPoints[e];
                    c.updateRange(a), f || (c.seriesPoints[e] = f = []), d = c.createPoint(a, b.series, e), d && n(d, b), c.points.push(d), f.push(d)
                },
                updateRange: function(a) {
                    var b = this,
                        c = a.x,
                        d = a.y,
                        e = b._seriesMin,
                        f = b._seriesMax;
                    cL(c) && (e[0] = k.min(e[0], c), f[0] = k.max(f[0], c)), cL(d) && (e[1] = k.min(e[1], d), f[1] = k.max(f[1], d))
                },
                valueRange: function() {
                    var a = this;
                    if (a.points.length) return {
                        min: a._seriesMin,
                        max: a._seriesMax
                    };
                    return null
                },
                createPoint: function(a, b, c) {
                    var d = this;
                    if (!cL(a.x) || !cL(a.y)) return null;
                    var e = new bV(a, cB({
                        markers: {
                            border: {
                                color: b.color
                            },
                            opacity: b.opacity
                        },
                        tooltip: {
                            format: d.options.tooltip.format
                        },
                        labels: {
                            format: d.options.labels.format
                        }
                    }, b));
                    d.append(e);
                    return e
                },
                reflow: function(a) {
                    var b = this,
                        c = b.plotArea,
                        d = b.points,
                        e = 0,
                        f;
                    b.traverseDataPoints(function(a) {
                        f = d[e++];
                        var b = c.axisX.getSlot(a.x, a.x),
                            g = c.axisY.getSlot(a.y, a.y),
                            h = new bC(b.x1, g.y1, b.x2, g.y2);
                        f && f.reflow(h)
                    }), b.box = a
                },
                getViewElements: function(a) {
                    var b = this,
                        c = bE.fn.getViewElements.call(b, a),
                        d = a.createGroup({
                            animation: {
                                type: E
                            }
                        });
                    d.children = c;
                    return [d]
                },
                traverseDataPoints: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.series,
                        e = 0,
                        f, g, h, i, j;
                    for (f = 0; f < d.length; f++) {
                        g = d[f];
                        for (e = 0; e < g.data.length; e++) j = g.data[e] || [], h = g.dataItems, i = {
                            x: j[0],
                            y: j[1]
                        }, a(i, {
                            pointIx: e,
                            series: g,
                            seriesIx: f,
                            dataItem: h ? h[e] : i,
                            owner: b
                        })
                    }
                },
                formatPointValue: function(a, b) {
                    return i(b, a.x, a.y)
                }
            }),
            bZ = bY.extend({
                getViewElements: function(a) {
                    var b = this,
                        c = bY.fn.getViewElements.call(b, a),
                        d = a.createGroup({
                            animation: {
                                type: E
                            }
                        }),
                        e = b.createLines(a);
                    d.children = e.concat(c);
                    return [d]
                }
            });
        cB(bZ.fn, bW);
        var b$ = bE.extend({
                init: function(a, b, c) {
                    var d = this;
                    d.value = a, d.sector = b, bE.fn.init.call(d, c)
                },
                options: {
                    color: bv,
                    overlay: {
                        gradient: bj
                    },
                    border: {
                        width: .5
                    },
                    labels: {
                        visible: !1,
                        distance: 35,
                        font: q,
                        margin: cz(.5),
                        align: C,
                        zIndex: 1,
                        position: bd
                    },
                    animation: {
                        type: bf
                    },
                    highlight: {
                        visible: !0,
                        border: {
                            width: 1
                        }
                    }
                },
                render: function() {
                    var a = this,
                        b = a.options,
                        c = b.labels,
                        d = a.value,
                        e;
                    a._rendered || (a._rendered = !0, c.template && (e = h(c.template), d = e({
                        dataItem: a.dataItem,
                        category: a.category,
                        value: a.value,
                        series: a.series,
                        percentage: a.percentage
                    })), c.visible && (a.label = new bI(d, cB({}, c, {
                        id: cK(),
                        align: A,
                        vAlign: "",
                        animation: {
                            type: M,
                            delay: a.categoryIx * bg
                        }
                    })), a.append(a.label), a.registerId(a.label.options.id)))
                },
                reflow: function(a) {
                    var b = this;
                    b.render(), b.box = a, a.clone(), b.reflowLabel()
                },
                reflowLabel: function() {
                    var a = this,
                        b = a.sector.clone(),
                        c = a.options,
                        d = a.label,
                        e = c.labels,
                        f = e.distance,
                        g, h, i = b.middle(),
                        j, l;
                    d && (l = d.box.height(), j = d.box.width(), e.position == "center" ? (b.r = k.abs((b.r - l) / 2) + l, g = b.point(i), d.reflow(new bC(g.x, g.y - l / 2, g.x, g.y))) : e.position == "insideEnd" ? (b.r = b.r - l / 2, g = b.point(i), d.reflow(new bC(g.x, g.y - l / 2, g.x, g.y))) : (g = b.clone().expand(f).point(i), g.x >= b.c.x ? (h = g.x + j, d.orientation = bi) : (h = g.x - j, d.orientation = U), d.reflow(new bC(h, g.y - l, g.x, g.y))))
                },
                getViewElements: function(a) {
                    var b = this,
                        c = b.sector,
                        d = b.options,
                        e = d.border || {},
                        f = e.width > 0 ? {
                            stroke: e.color,
                            strokeWidth: e.width,
                            dashType: e.dashType
                        } : {},
                        g = [],
                        h = d.overlay;
                    h && (h = cB({}, d.overlay, {
                        r: c.r,
                        cx: c.c.x,
                        cy: c.c.y
                    })), g.push(a.createSector(c, cB({
                        id: d.id,
                        fill: d.color,
                        overlay: h,
                        fillOpacity: d.opacity,
                        strokeOpacity: d.opacity,
                        animation: cB(d.animation, {
                            delay: b.categoryIx * bg
                        })
                    }, f))), cE(g, bE.fn.getViewElements.call(b, a));
                    return g
                },
                getOutlineElement: function(a, b) {
                    var c = this,
                        d = c.options.highlight || {},
                        e = d.border || {},
                        f = c.options.id + be;
                    c.registerId(f), b = cB({}, b, {
                        id: f
                    });
                    return a.createSector(c.sector, cB({}, b, {
                        fill: d.color,
                        fillOpacity: d.opacity,
                        strokeOpacity: e.opacity,
                        strokeWidth: e.width,
                        stroke: e.color
                    }))
                },
                tooltipAnchor: function(a, b) {
                    var c = a / 2,
                        d = b / 2,
                        e = k.sqrt(c * c + d * d),
                        f = this.sector.clone().expand(e + bp),
                        g = f.point(f.middle());
                    return new bB(g.x - c, g.y - d)
                },
                formatPointValue: function(a) {
                    var b = this;
                    return b.owner.formatPointValue(b.value, a)
                }
            }),
            b_ = bE.extend({
                init: function(a, b) {
                    var c = this;
                    bE.fn.init.call(c, b), c.plotArea = a, c.segments = [], c.seriesPoints = [], c.render()
                },
                options: {
                    startAngle: 90,
                    padding: 60,
                    connectors: {
                        width: 1,
                        color: "#939393",
                        padding: 4
                    }
                },
                render: function() {
                    var a = this;
                    a.traverseDataPoints(l(a.addValue, a))
                },
                traverseDataPoints: function(a) {
                    var b = this,
                        c = b.options,
                        d = b.plotArea.options.seriesColors || [],
                        e = c.startAngle,
                        f = d.length,
                        g = c.series,
                        h, i, j, k, l, m, n, o, p, q, r, s;
                    for (l = 0; l < g.length; l++) {
                        j = g[l], h = j.dataItems, n = j.data, r = b.pointsTotal(n), o = 360 / r;
                        for (s = 0; s < n.length; s++) k = b.pointData(j, s), p = k.value, m = p * o, i = k.category, q = n.length != 1 && !!k.explode, j.color = k.color ? k.color : d[s % f], a(p, new bD(null, 0, e, m), {
                            owner: b,
                            category: i,
                            categoryIx: s,
                            series: j,
                            seriesIx: l,
                            dataItem: h ? h[s] : {
                                value: k
                            },
                            percentage: p / r,
                            explode: q,
                            currentData: k
                        }), e += m
                    }
                },
                addValue: function(a, b, c) {
                    var d = this,
                        e;
                    e = new b$(a, b, c.series), e.options.id = cK(), n(e, c), d.append(e), d.segments.push(e)
                },
                pointValue: function(a) {
                    return cL(a.value) ? a.value : a
                },
                pointData: function(a, b) {
                    var c = this,
                        d = a.data[b];
                    return {
                        value: c.pointValue(d),
                        category: c.pointGetter(a, b, "category"),
                        color: c.pointGetter(a, b, "color"),
                        explode: c.pointGetter(a, b, "explode")
                    }
                },
                pointGetter: function(a, b, c) {
                    var d = a[c + "Field"],
                        e = a.data[b],
                        f = e[c];
                    return d && a.dataItems ? m(d, !0)(a.dataItems[b]) : cL(f) ? f : ""
                },
                pointsTotal: function(a) {
                    var b = this,
                        c = a.length,
                        d = 0,
                        e;
                    for (e = 0; e < c; e++) d += b.pointValue(a[e]);
                    return d
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options,
                        d = a.clone(),
                        e = k.min(d.width(), d.height()),
                        f = 5,
                        g = c.padding > e / 2 - f ? e / 2 - f : c.padding,
                        h = new bC(d.x1, d.y1, d.x1 + e, d.y1 + e),
                        i = h.center(),
                        j = d.center(),
                        l = b.segments,
                        m = l.length,
                        n = [],
                        o = [],
                        p, q, r, s;
                    h.translate(j.x - i.x, j.y - i.y);
                    for (s = 0; s < m; s++) q = l[s], r = q.sector, r.r = e / 2 - g, r.c = new bB(r.r + h.x1 + g, r.r + h.y1 + g), q.explode && (r.c = r.clone().radius(r.r * .15).point(r.middle())), q.reflow(h), p = q.label, p && p.options.position === bd && (p.orientation === bi ? o.push(p) : n.push(p));
                    n.length > 0 && (n.sort(b.labelComparator(!0)), b.leftLabelsReflow(n)), o.length > 0 && (o.sort(b.labelComparator(!1)), b.rightLabelsReflow(o)), b.box = h
                },
                leftLabelsReflow: function(a) {
                    var b = this,
                        c = b.distanceBetweenLabels(a);
                    b.distributeLabels(c, a)
                },
                rightLabelsReflow: function(a) {
                    var b = this,
                        c = b.distanceBetweenLabels(a);
                    b.distributeLabels(c, a)
                },
                distanceBetweenLabels: function(a) {
                    var b = this,
                        c = b.segments[0],
                        d = c.sector,
                        e = a[0].box,
                        f, g = a.length - 1,
                        h = [],
                        i, j = d.r + c.options.labels.distance,
                        k;
                    i = cr(e.y1 - (d.c.y - j - e.height() - e.height() / 2)), h.push(i);
                    for (k = 0; k < g; k++) e = a[k].box, f = a[k + 1].box, i = cr(f.y1 - e.y2), h.push(i);
                    i = cr(d.c.y + j - a[g].box.y2 - a[g].box.height() / 2), h.push(i);
                    return h
                },
                distributeLabels: function(a, b) {
                    var c = this,
                        d = a.length,
                        e, f, g, h;
                    for (h = 0; h < d; h++) {
                        f = g = h, e = -a[h];
                        while (e > 0 && (f >= 0 || g < d)) e = c._takeDistance(a, h, --f, e), e = c._takeDistance(a, h, ++g, e)
                    }
                    c.reflowLabels(a, b)
                },
                _takeDistance: function(a, b, c, d) {
                    if (a[c] > 0) {
                        var e = k.min(a[c], d);
                        d -= e, a[c] -= e, a[b] += e
                    }
                    return d
                },
                reflowLabels: function(a, b) {
                    var c = this,
                        d = c.segments,
                        e = d[0],
                        f = e.sector,
                        g = b.length,
                        h = e.options.labels,
                        i = h.distance,
                        j = f.c.y - (f.r + i) - b[0].box.height(),
                        k, l, m, n;
                    a[0] += 2;
                    for (n = 0; n < g; n++) k = b[n], j += a[n], m = k.box, l = c.hAlignLabel(m.x2, f.clone().expand(i), j, j + m.height(), k.orientation == bi), k.orientation == bi ? (h.align !== C && (l = f.r + f.c.x + i), k.reflow(new bC(l + m.width(), j, l, j))) : (h.align !== C && (l = f.c.x - f.r - i), k.reflow(new bC(l - m.width(), j, l, j))), j += m.height()
                },
                getViewElements: function(a) {
                    var b = this,
                        c = b.options,
                        d = c.connectors,
                        e = b.segments,
                        f, g, h = e.length,
                        i = 4,
                        j, l = [],
                        m, n, o, p, q;
                    for (q = 0; q < h; q++) {
                        n = e[q], g = n.sector, j = g.middle(), p = n.label, o = {
                            seriesId: n.seriesIx
                        };
                        if (p) {
                            m = [];
                            if (p.options.position === bd) {
                                var r = p.box,
                                    s = g.c,
                                    t = g.point(j),
                                    u = new bB(r.x1, r.center().y),
                                    v, w, x;
                                t = g.clone().expand(d.padding).point(j), m.push(t), p.orientation == bi ? (w = new bB(r.x1 - d.padding, r.center().y), x = cD(s, t, u, w), u = new bB(w.x - i, w.y), x = x || u, x.x = k.min(x.x, u.x), b.pointInCircle(x, g.c, g.r + i) || x.x < g.c.x ? (v = g.c.x + g.r + i, n.options.labels.align !== F ? v < u.x ? m.push(new bB(v, t.y)) : m.push(new bB(t.x + i * 2, t.y)) : m.push(new bB(v, t.y)), m.push(new bB(u.x, w.y))) : (x.y = w.y, m.push(x))) : (w = new bB(r.x2 + d.padding, r.center().y), x = cD(s, t, u, w), u = new bB(w.x + i, w.y), x = x || u, x.x = k.max(x.x, u.x), b.pointInCircle(x, g.c, g.r + i) || x.x > g.c.x ? (v = g.c.x - g.r - i, n.options.labels.align !== F ? v > u.x ? m.push(new bB(v, t.y)) : m.push(new bB(t.x - i * 2, t.y)) : m.push(new bB(v, t.y)), m.push(new bB(u.x, w.y))) : (x.y = w.y, m.push(x))), m.push(w), f = a.createPolyline(m, !1, {
                                    id: cK(),
                                    stroke: d.color,
                                    strokeWidth: d.width,
                                    animation: {
                                        type: M,
                                        delay: n.categoryIx * bg
                                    }
                                }), l.push(f), n.registerId(f.options.id, o)
                            }
                            n.registerId(p.options.id, o)
                        }
                        n.registerId(n.options.id, o)
                    }
                    cE(l, bE.fn.getViewElements.call(b, a));
                    return l
                },
                labelComparator: function(a) {
                    a = a ? -1 : 1;
                    return function(b, c) {
                        b = (b.parent.sector.middle() + 270) % 360, c = (c.parent.sector.middle() + 270) % 360;
                        return (b - c) * a
                    }
                },
                hAlignLabel: function(a, b, c, d, e) {
                    var f = b.c.x,
                        g = b.c.y,
                        h = b.r,
                        i = k.min(k.abs(g - c), k.abs(g - d));
                    return i > h ? a : f + k.sqrt(h * h - i * i) * (e ? 1 : -1)
                },
                pointInCircle: function(a, b, c) {
                    return cP(b.x - a.x) + cP(b.y - a.y) < cP(c)
                },
                formatPointValue: function(a, b) {
                    return i(b, a)
                }
            }),
            ca = bE.extend({
                init: function(a) {
                    var b = this;
                    bE.fn.init.call(b, a), b.render()
                },
                options: {
                    categoryAxis: {},
                    valueAxis: {},
                    series: [],
                    plotArea: {
                        margin: {}
                    },
                    background: "",
                    border: {
                        color: y,
                        width: 0
                    },
                    range: {},
                    legend: {}
                },
                render: function() {
                    var a = this,
                        b = a.options,
                        c = b.series,
                        d = c.length,
                        e, f = [],
                        g = [],
                        h = [],
                        i = [],
                        j = [],
                        k;
                    b.legend.items = [], b.range = {
                        min: 0,
                        max: 1
                    }, a.charts = [];
                    for (k = 0; k < d; k++) e = c[k], e.type === t || e.type === F ? g.push(e) : e.type === V ? h.push(e) : e.type === bf ? f.push(e) : e.type === "scatter" ? i.push(e) : e.type === "scatterLine" && j.push(e);
                    g.length > 0 && a.createBarChart(g), h.length > 0 && a.createLineChart(h), f.length > 0 && a.createPieChart(f), i.length > 0 || j.length > 0 ? (i.length > 0 ? a.createScatterChart(i) : a.createScatterLineChart(j), a.axisX = new bN(b.range.min[0], b.range.max[0], cB({}, b.xAxis, {
                        orientation: P
                    })), a.axisY = new bN(b.range.min[1], b.range.max[1], cB({}, b.yAxis, {
                        orientation: bt
                    })), a.append(a.axisY), a.append(a.axisX)) : (d != f.length || d == 0) && a.createAxes(b.range.min, b.range.max, b.invertAxes), a.append.apply(a, a.charts)
                },
                addToLegend: function(a) {
                    var b = this,
                        c = a.length,
                        d = [],
                        e, f;
                    for (f = 0; f < c; f++) e = {
                        name: a[f].name || "",
                        color: a[f].color
                    }, d.push(e);
                    cE(b.options.legend.items, d)
                },
                createBarChart: function(a) {
                    var b = this,
                        c = b.options,
                        d = a[0],
                        e = c.invertAxes = d.type === t,
                        f = c.categoryAxis.categories,
                        g = new bT(b, {
                            series: a,
                            isVertical: !e,
                            isStacked: d.stack,
                            gap: d.gap,
                            spacing: d.spacing
                        }),
                        h = k.max(0, cO(a) - f.length);
                    cE(f, Array(h)), c.range = g.valueRange() || c.range, b.charts.push(g), b.addToLegend(a)
                },
                createLineChart: function(a) {
                    var b = this,
                        c = b.options,
                        d = a[0],
                        e = c.categoryAxis,
                        f = e.categories,
                        g = c.invertAxes = e.orientation === bt,
                        h = new bX(b, {
                            isVertical: !g,
                            isStacked: d.stack,
                            series: a
                        }),
                        i = k.max(0, cO(a) - f.length),
                        j = h.valueRange() || c.range;
                    cE(f, Array(i)), c.range.min = k.min(c.range.min, j.min), c.range.max = k.max(c.range.max, j.max), b.charts.push(h), b.addToLegend(a)
                },
                createScatterChart: function(a) {
                    var b = this,
                        c = b.options,
                        d = new bY(b, {
                            series: a
                        }),
                        e = d.valueRange() || c.range;
                    c.range = e, b.charts.push(d), b.addToLegend(a)
                },
                createScatterLineChart: function(a) {
                    var b = this,
                        c = b.options,
                        d = new bZ(b, {
                            series: a
                        }),
                        e = d.valueRange() || c.range;
                    c.range = e, b.charts.push(d), b.addToLegend(a)
                },
                createPieChart: function(a) {
                    var b = this,
                        c = b.options,
                        d = a[0],
                        e = new b_(b, {
                            series: a,
                            padding: d.padding,
                            startAngle: d.startAngle,
                            connectors: d.connectors
                        }),
                        f = e.segments,
                        g = f.length,
                        h;
                    b.charts.push(e);
                    for (h = 0; h < g; h++) c.legend.items.push({
                        name: f[h].category,
                        color: f[h].options.color
                    })
                },
                createAxes: function(a, b, c) {
                    var d = this,
                        e = d.options,
                        f = e.categoryAxis.categories.length,
                        g = new bO(cB({
                            orientation: c ? bt : P,
                            axisCrossingValue: c ? f : 0
                        }, e.categoryAxis, c ? e.yAxis : e.xAxis)),
                        h = new bN(a, b, cB({
                            orientation: c ? P : bt
                        }, e.valueAxis, c ? e.xAxis : e.yAxis));
                    d.axisX = c ? h : g, d.axisY = c ? g : h, d.append(d.axisY), d.append(d.axisX)
                },
                alignAxes: function() {
                    var a = this,
                        b = a.axisY,
                        c = a.axisX,
                        d = b.options.axisCrossingValue,
                        e = b.getSlot(d, d),
                        f = c.options.axisCrossingValue,
                        g = c.getSlot(f, f);
                    b.reflow(b.box.translate(g.x1 - e.x1, 0)), c.reflow(c.box.translate(0, e.y1 - g.y1))
                },
                reflow: function(a) {
                    var b = this,
                        c = b.options.plotArea,
                        d = cz(c.margin);
                    b.box = a.clone(), b.box.unpad(d), b.reflowAxes(), b.reflowCharts(), b.wrapAxes()
                },
                reflowAxes: function() {
                    var a = this,
                        b = a.axisY,
                        c = a.axisX,
                        d = a.box;
                    if (b || c) {
                        b.reflow(d), c.reflow(d), a.alignAxes();
                        var e = b.box.clone().wrap(c.box),
                            f = e.height() - d.height(),
                            g = e.width() - d.width(),
                            h = d.x1 - e.x1,
                            i = d.y1 - e.y1;
                        b.reflow(b.box.translate(h, i).shrink(0, f)), c.reflow(c.box.translate(h, i).shrink(g, 0)), a.alignAxes()
                    }
                },
                reflowCharts: function() {
                    var a = this,
                        b = a.charts,
                        c = b.length,
                        d = a.box,
                        e;
                    for (e = 0; e < c; e++) b[e].reflow(d);
                    a.box = d
                },
                wrapAxes: function() {
                    var a = this,
                        b = a.axisY,
                        c = a.axisX,
                        d, e;
                    if (b || c) d = c.getAxisLineBox(), e = b.getAxisLineBox(), a.box = d.clone().wrap(e)
                },
                renderGridLines: function(a, b, c) {
                    var d = b.options,
                        e = d.orientation === bt,
                        f = c.getMajorTickPositions(),
                        g = b.getSlot(d.axisCrossingValue),
                        h = cr(g[e ? "y1" : "x1"]),
                        i = f[0],
                        k = f.pop(),
                        l = b.getMajorTickPositions(),
                        m = [],
                        n = function(a, b) {
                            return {
                                pos: a,
                                options: b
                            }
                        };
                    d.majorGridLines.visible && (m = j(l, function(a) {
                        return n(a, d.majorGridLines)
                    })), d.minorGridLines.visible && (m = m.concat(j(b.getMinorTickPositions(), function(a) {
                        if (!d.majorGridLines.visible) return n(a, d.minorGridLines);
                        if (!cA(a, l)) return n(a, d.minorGridLines)
                    })));
                    return j(m, function(b) {
                        var c = {
                                strokeWidth: b.options.width,
                                stroke: b.options.color,
                                dashType: b.options.dashType
                            },
                            d = cr(b.pos);
                        if (h === d) return null;
                        return e ? a.createLine(i, d, k, d, c) : a.createLine(d, i, d, k, c)
                    })
                },
                getViewElements: function(a) {
                    var b = this,
                        c = b.options.plotArea,
                        d = b.axisY,
                        e = b.axisX,
                        f = d ? b.renderGridLines(a, d, e) : [],
                        g = e ? b.renderGridLines(a, e, d) : [],
                        h = bE.fn.getViewElements.call(b, a),
                        i = c.border || {},
                        j = [a.createRect(b.box, {
                            fill: c.background,
                            zIndex: -1
                        }), a.createRect(b.box, {
                            stroke: i.width ? i.color : "",
                            strokeWidth: i.width,
                            fill: "",
                            zIndex: 0,
                            dashType: i.dashType
                        })];
                    return [].concat(f, g, h, j)
                }
            }),
            cb = e.extend({
                init: function(a) {
                    var b = this;
                    b.children = [], b.options = cB({}, b.options, a)
                },
                render: function() {
                    return this.template(this)
                },
                renderContent: function() {
                    var a = "",
                        b = this,
                        c = b.sortChildren(),
                        d = c.length;
                    for (var e = 0; e < d; e++) a += c[e].render();
                    return a
                },
                sortChildren: function() {
                    var a = this,
                        b = a.children;
                    for (var c = 0, d = b.length; c < d; c++) b[c]._childIndex = c;
                    return b.slice(0).sort(a.compareChildren)
                },
                compareChildren: function(a, b) {
                    var c = a.options.zIndex || 0,
                        d = b.options.zIndex || 0;
                    if (c !== d) return c - d;
                    return a._childIndex - b._childIndex
                },
                renderAttr: function(a, b) {
                    return cL(b) ? " " + a + "='" + b + "' " : ""
                }
            }),
            cc = cb.extend({
                init: function(a) {
                    var b = this;
                    cb.fn.init.call(b, a), b.definitions = {}, b.decorators = [], b.animations = []
                },
                renderDefinitions: function() {
                    var a = this,
                        b = a.definitions,
                        c, d = "";
                    for (c in b) b.hasOwnProperty(c) && (d += b[c].render());
                    return d
                },
                decorate: function(a) {
                    var b = this,
                        c = b.decorators,
                        d, e = c.length,
                        f;
                    for (d = 0; d < e; d++) f = c[d], b._decorateChildren(f, a), a = f.decorate.call(f, a);
                    return a
                },
                _decorateChildren: function(a, b) {
                    var c = this,
                        d = b.children,
                        e, f = d.length;
                    for (e = 0; e < f; e++) c._decorateChildren(a, d[e]), d[e] = a.decorate.call(a, d[e])
                },
                setupAnimations: function() {
                    var a = this.animations,
                        b, c = a.length;
                    for (b = 0; b < c; b++) a[b].setup()
                },
                playAnimations: function() {
                    var a = this,
                        b;
                    while (b = a.animations.shift()) b.play()
                },
                buildGradient: function(a) {
                    var b = this,
                        c = b._gradientCache,
                        d, e, f;
                    c || (c = b._gradientCache = []), a && (d = ct(a), e = c[d], f = bA.Gradients[a.gradient], !e && f && (e = cB({
                        id: cK()
                    }, f, a), c[d] = e));
                    return e
                }
            }),
            ce = e.extend({
                init: function(a) {
                    this.view = a
                },
                decorate: function(a) {
                    var b = this,
                        c = b.view,
                        d = a.options.animation;
                    d && c.options.transitions && d.type === t && c.animations.push(new cl(a));
                    return a
                }
            }),
            cf = e.extend({
                init: function(a) {
                    this.view = a
                },
                decorate: function(a) {
                    var b = this,
                        c = b.view,
                        d = a.options.animation;
                    d && d.type === bf && c.options.transitions && c.animations.push(new cm(a, d));
                    return a
                }
            }),
            cg = e.extend({
                init: function(a) {
                    this.view = a
                },
                decorate: function(a) {
                    var b = this,
                        c = b.view,
                        d = c.options,
                        e = a.options.animation;
                    e && e.type === M && d.transitions && c.animations.push(new ci(a, e));
                    return a
                }
            }),
            ch = e.extend({
                init: function(a, b) {
                    var c = this;
                    c.options = cB({}, c.options, b), c.element = a
                },
                options: {
                    duration: Q,
                    easing: bm
                },
                play: function() {
                    var a = this,
                        b = a.options,
                        d = a.element,
                        e = b.delay || 0,
                        f = +(new Date) + e,
                        g = b.duration,
                        h = f + g,
                        i = c.getElementById(d.options.id),
                        j = jQuery.easing[b.easing],
                        k, l, m;
                    setTimeout(function() {
                        var b = function() {
                            k = +(new Date), l = k > h ? 1 : (k - f) / g, m = j(l, k - f, 0, 1, g), a.step(m), d.refresh(i), k < h && ck(b, i)
                        };
                        b()
                    }, e)
                },
                setup: function() {},
                step: function(a) {}
            }),
            ci = ch.extend({
                options: {
                    duration: 200,
                    easing: X
                },
                setup: function() {
                    var a = this,
                        b = a.element.options;
                    a.targetFillOpacity = b.fillOpacity, a.targetStrokeOpacity = b.strokeOpacity, b.fillOpacity = b.strokeOpacity = 0
                },
                step: function(a) {
                    var b = this,
                        c = b.element.options;
                    c.fillOpacity = a * b.targetFillOpacity, c.strokeOpacity = a * b.targetStrokeOpacity
                }
            }),
            cj = ch.extend({
                options: {
                    size: 0,
                    easing: X
                },
                setup: function() {
                    var a = this,
                        b = a.element.points;
                    b[1].x = b[2].x = b[0].x
                },
                step: function(a) {
                    var b = this,
                        c = b.options,
                        d = cF(0, c.size, a),
                        e = b.element.points;
                    e[1].x = e[2].x = e[0].x + d
                }
            }),
            ck = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) {
                    setTimeout(a, r)
                },
            cl = ch.extend({
                options: {
                    easing: bm
                },
                setup: function() {
                    var a = this,
                        b = a.element,
                        c = b.points,
                        d = b.options,
                        e = d.normalAngle === 0 ? bx : bw,
                        f = d.stackBase,
                        g = d.aboveAxis,
                        h, i = a.endState = {
                            top: c[0].y,
                            right: c[1].x,
                            bottom: c[3].y,
                            left: c[0].x
                        };
                    e === bx ? h = cL(f) ? f : g ? i.bottom : i.top : h = cL(f) ? f : g ? i.left : i.right, a.startPosition = h, cN(c, e, h)
                },
                step: function(a) {
                    var b = this,
                        c = b.startPosition,
                        d = b.endState,
                        e = b.element,
                        f = e.points;
                    e.options.normalAngle === 0 ? (f[0].y = f[1].y = cF(c, d.top, a), f[2].y = f[3].y = cF(c, d.bottom, a)) : (f[0].x = f[3].x = cF(c, d.left, a), f[1].x = f[2].x = cF(c, d.right, a))
                }
            }),
            cm = ch.extend({
                options: {
                    easing: "easeOutElastic",
                    duration: Q
                },
                setup: function() {
                    var a = this,
                        b = a.element.circleSector;
                    a.endRadius = b.r, b.r = 0
                },
                step: function(a) {
                    var b = this,
                        c = b.endRadius,
                        d = b.element.circleSector;
                    d.r = cF(0, c, a)
                }
            }),
            cn = e.extend({
                init: function(a, b, c) {
                    var d = this;
                    d.options = cB({}, d.options, c), d.view = a, d.viewElement = b
                },
                options: {
                    fill: bv,
                    fillOpacity: .2,
                    stroke: bv,
                    strokeWidth: 1,
                    strokeOpacity: .2
                },
                show: function(a) {
                    var b = this,
                        c = b.view,
                        d = b.viewElement,
                        e, f;
                    b.hide(), a.getOutlineElement && (e = a.getOutlineElement(c, b.options), e && (f = c.renderElement(e), d.appendChild(f), b.element = f, b.visible = !0))
                },
                hide: function() {
                    var a = this,
                        b = a.element;
                    b && (b.parentNode.removeChild(b), delete a.element, a.visible = !1)
                }
            }),
            co = e.extend({
                init: function(b, c) {
                    var d = this;
                    d.options = cB({}, d.options, c), c = d.options, d.chartElement = b, d.template = co.template, d.template || (d.template = co.template = o("<div style='display:none; position: absolute; font: #= d.font #;border-radius: 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px;border: #= d.border.width #px solid;opacity: #= d.opacity #; filter: alpha(opacity=#= d.opacity * 100 #);padding: 2px 6px; white-space: nowrap;'></div>")), d.element = a(d.template(d.options)).appendTo(b)
                },
                options: {
                    background: y,
                    color: bv,
                    border: {
                        width: 3
                    },
                    opacity: 1,
                    animation: {
                        duration: bo
                    }
                },
                show: function(a) {
                    var b = this;
                    b.point = a, setTimeout(l(b._show, b), bq)
                },
                _show: function() {
                    var a = this,
                        b = a.point,
                        c = a.element,
                        d = a.options,
                        e, f, g, i, j, k;
                    !b || (g = b.value.toString(), i = cB({}, a.options, b.options.tooltip), i.template ? (f = h(i.template), g = f({
                        value: b.value,
                        category: b.category,
                        series: b.series,
                        dataItem: b.dataItem,
                        percentage: b.percentage
                    })) : i.format && (g = b.formatPointValue(i.format)), c.html(g), e = b.tooltipAnchor(c.outerWidth(), c.outerHeight()), j = cr(e.y) + "px", k = cr(e.x) + "px", a.visible || a.element.css({
                        top: j,
                        left: k
                    }), a.element.css({
                        backgroundColor: i.background,
                        borderColor: i.border.color || b.options.color,
                        color: i.color,
                        opacity: i.opacity,
                        borderWidth: i.border.width
                    }).stop(!0, !0).show().animate({
                        left: k,
                        top: j
                    }, d.animation.duration), a.visible = !0)
                },
                hide: function() {
                    var a = this;
                    a.visible && (a.element.fadeOut(), a.point = null, a.visible = !1)
                }
            });
        cs.cache = [], cs.baselineMarker = a("<div style='display: inline-block; vertical-align: baseline;width: " + s + "px; height: " + s + "px;" + "zoom: 1; *display: inline; overflow: hidden;' />")[0];
        var cM = function(a) {
            var b = this,
                c = cM.formats,
                d, e, f, g, h;
            if (arguments.length === 1) {
                a = b.resolveColor(a);
                for (g = 0; g < c.length; g++) d = c[g].re, e = c[g].process, f = d.exec(a), f && (h = e(f), b.r = h[0], b.g = h[1], b.b = h[2])
            } else b.r = arguments[0], b.g = arguments[1], b.b = arguments[2];
            b.r = b.normalizeByte(b.r), b.g = b.normalizeByte(b.g), b.b = b.normalizeByte(b.b)
        };
        cM.prototype = {
            toHex: function() {
                var a = this,
                    b = a.padDigit,
                    c = a.r.toString(16),
                    d = a.g.toString(16),
                    e = a.b.toString(16);
                return "#" + b(c) + b(d) + b(e)
            },
            resolveColor: function(a) {
                a = a || y, a.charAt(0) == "#" && (a = a.substr(1, 6)), a = a.replace(/ /g, ""), a = a.toLowerCase(), a = cM.namedColors[a] || a;
                return a
            },
            normalizeByte: function(a) {
                return a < 0 || isNaN(a) ? 0 : a > 255 ? 255 : a
            },
            padDigit: function(a) {
                return a.length === 1 ? "0" + a : a
            },
            brightness: function(a) {
                var b = this,
                    c = k.round;
                b.r = c(b.normalizeByte(b.r * a)), b.g = c(b.normalizeByte(b.g * a)), b.b = c(b.normalizeByte(b.b * a));
                return b
            }
        }, cM.formats = [{
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            process: function(a) {
                return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10)]
            }
        }, {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            process: function(a) {
                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
            }
        }, {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            process: function(a) {
                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
            }
        }], cM.namedColors = {
            aqua: "00ffff",
            azure: "f0ffff",
            beige: "f5f5dc",
            black: "000000",
            blue: "0000ff",
            brown: "a52a2a",
            coral: "ff7f50",
            cyan: "00ffff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkorange: "ff8c00",
            darkred: "8b0000",
            dimgray: "696969",
            fuchsia: "ff00ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lightblue: "add8e6",
            lightgrey: "d3d3d3",
            lightgreen: "90ee90",
            lightpink: "ffb6c1",
            lightyellow: "ffffe0",
            lime: "00ff00",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "ff00ff",
            maroon: "800000",
            mediumblue: "0000cd",
            navy: "000080",
            olive: "808000",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            pink: "ffc0cb",
            plum: "dda0dd",
            purple: "800080",
            red: "ff0000",
            royalblue: "4169e1",
            salmon: "fa8072",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            snow: "fffafa",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "ffffff",
            whitesmoke: "f5f5f5",
            yellow: "ffff00",
            yellowgreen: "9acd32"
        }, bA.Gradients = {
            glass: {
                type: X,
                rotation: 0,
                stops: [{
                    offset: 0,
                    color: bv,
                    opacity: 0
                }, {
                    offset: .1,
                    color: bv,
                    opacity: 0
                }, {
                    offset: .25,
                    color: bv,
                    opacity: .3
                }, {
                    offset: .92,
                    color: bv,
                    opacity: 0
                }, {
                    offset: 1,
                    color: bv,
                    opacity: 0
                }]
            },
            sharpBevel: {
                type: bh,
                stops: [{
                    offset: 0,
                    color: bv,
                    opacity: .55
                }, {
                    offset: .65,
                    color: bv,
                    opacity: 0
                }, {
                    offset: .95,
                    color: bv,
                    opacity: 0
                }, {
                    offset: .95,
                    color: bv,
                    opacity: .25
                }]
            },
            roundedBevel: {
                type: bh,
                stops: [{
                    offset: .33,
                    color: bv,
                    opacity: .06
                }, {
                    offset: .83,
                    color: bv,
                    opacity: .2
                }, {
                    offset: .95,
                    color: bv,
                    opacity: 0
                }]
            }
        }, jQuery.extend(jQuery.easing, {
            easeOutElastic: function(a, b, c, d) {
                var e = 1.70158,
                    f = 0,
                    g = d;
                if (a === 0) return c;
                if (a === 1) return c + d;
                f || (f = .5), g < Math.abs(d) ? (g = d, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(d / g);
                return g * Math.pow(2, -10 * a) * Math.sin((a * 1 - e) * 1.1 * Math.PI / f) + d + c
            }
        }), d.ui.plugin(bA), cB(bA, {
            COORD_PRECISION: G,
            CLIP: E,
            DEFAULT_WIDTH: K,
            DEFAULT_HEIGHT: I,
            DEFAULT_FONT: q,
            defined: cL,
            template: o,
            rotatePoint: cu,
            round: cr,
            supportsSVG: cd,
            uniqueId: cK,
            Box2D: bC,
            Point2D: bB,
            Sector: bD,
            Text: bH,
            BarLabel: bJ,
            ChartElement: bE,
            RootElement: bF,
            BoxElement: bG,
            TextBox: bI,
            NumericAxis: bN,
            CategoryAxis: bO,
            Bar: bR,
            BarChart: bT,
            ShapeElement: bU,
            LinePoint: bV,
            LineChart: bX,
            ClusterLayout: bP,
            StackLayout: bQ,
            Title: bK,
            Legend: bL,
            PlotArea: ca,
            Tooltip: co,
            Highlight: cn,
            PieSegment: b$,
            PieChart: b_,
            ViewElement: cb,
            ScatterChart: bY,
            ScatterLineChart: bZ,
            ViewBase: cc,
            deepExtend: cB,
            Color: cM,
            measureText: cs,
            ExpandAnimation: cj,
            BarAnimation: cl,
            BarAnimationDecorator: ce,
            PieAnimation: cm,
            PieAnimationDecorator: cf,
            FadeAnimation: ci,
            FadeAnimationDecorator: cg,
            categoriesCount: cO
        })
    }(jQuery),
    function() {
        function U(a, b) {
            a.innerHTML = b
        }

        function T(a, b) {
            var c = [],
                a = a ? a.toLowerCase() : null,
                d, e;
            if (a && a != "solid" && b) {
                d = D[a];
                for (e = 0; e < d.length; e++) c.push(d[e] * b);
                return "stroke-dasharray='" + c.join(" ") + "' "
            }
            return ""
        }

        function S(a) {
            return s.round(a) + .5
        }

        function Q(a) {
            this.view = a
        }

        function P(a) {
            this.view = a
        }
        var a = jQuery,
            b = window.kendo,
            c = b.Class,
            d = b.ui.Chart,
            e = d.BarAnimationDecorator,
            f = d.PieAnimationDecorator,
            g = d.FadeAnimationDecorator,
            h = d.Box2D,
            i = d.Point2D,
            j = d.ExpandAnimation,
            k = d.ViewBase,
            l = d.ViewElement,
            m = d.deepExtend,
            n = d.defined,
            o = d.template,
            p = d.uniqueId,
            q = d.round,
            r = document,
            s = Math,
            t = d.CLIP,
            u = d.COORD_PRECISION,
            v = d.DEFAULT_WIDTH,
            w = d.DEFAULT_HEIGHT,
            x = d.DEFAULT_FONT,
            y = "globalClip",
            z = "none",
            A = "radial",
            B = "square",
            C = "http://www.w3.org/2000/svg",
            D = {
                dot: [1.5, 3.5],
                dash: [4, 3.5],
                longdash: [8, 3.5],
                dashdot: [3.5, 3.5, 1.5, 3.5],
                longdashdot: [8, 3.5, 1.5, 3.5],
                longdashdotdot: [8, 3.5, 1.5, 3.5, 1.5, 3.5]
            },
            E = "undefined",
            F = k.extend({
                init: function(a) {
                    var b = this;
                    k.fn.init.call(b, a), b.decorators.push(new P(b), new Q(b), new e(b), new f(b), new R(b), new g(b)), b.template = F.template, b.template || (b.template = F.template = o("<svg xmlns='" + C + "' version='1.1' " + "width='#= d.options.width #px' height='#= d.options.height #px' " + "style='position: relative;'>" + "#= d.renderDefinitions() #" + "#= d.renderContent() #</svg>"))
                },
                options: {
                    width: v,
                    height: w,
                    idPrefix: ""
                },
                renderTo: function(a) {
                    var b = this,
                        c;
                    b.setupAnimations(), U(a, b.render()), c = a.firstChild, b.alignToScreen(c), b.playAnimations();
                    return c
                },
                renderDefinitions: function() {
                    var a = this,
                        b = k.fn.renderDefinitions.call(a);
                    return b.length > 0 ? "<defs>" + b + "</defs>" : ""
                },
                renderElement: function(a) {
                    var b = r.createElement("div"),
                        a;
                    U(b, "<svg xmlns='" + C + "' version='1.1'>" + a.render() + "</svg>"), a = b.firstChild.firstChild;
                    return a
                },
                createGroup: function(a) {
                    return this.decorate(new L(a))
                },
                createText: function(a, b) {
                    return this.decorate(new G(a, b))
                },
                createRect: function(a, b) {
                    return this.decorate(new I(a.points(), !0, b))
                },
                createLine: function(a, b, c, d, e) {
                    return this.decorate(new I([new i(a, b), new i(c, d)], !1, e))
                },
                createPolyline: function(a, b, c) {
                    return this.decorate(new I(a, b, c))
                },
                createCircle: function(a, b, c) {
                    return this.decorate(new K(a, b, c))
                },
                createSector: function(a, b) {
                    return this.decorate(new J(a, b))
                },
                createGradient: function(a) {
                    return a.type === A ? new O(a) : new N(a)
                },
                alignToScreen: function(a) {
                    try {
                        var b = a.getScreenCTM ? a.getScreenCTM() : null
                    } catch (c) {}
                    if (b) {
                        var d = -b.e % 1,
                            e = -b.f % 1,
                            f = a.style;
                        if (d !== 0 || e !== 0) f.left = d + "px", f.top = e + "px"
                    }
                }
            });
        F.fromModel = function(a) {
            var b = new F(a.options);
            [].push.apply(b.children, a.getViewElements(b));
            return b
        };
        var G = l.extend({
                init: function(a, b) {
                    var c = this;
                    l.fn.init.call(c, b), c.content = a, c.template = G.template, c.template || (c.template = G.template = o("<text #= d.renderAttr(\"id\", d.options.id) # x='#= Math.round(d.options.x) #' y='#= Math.round(d.options.y + d.options.baseline) #' fill-opacity='#= d.options.fillOpacity #' #= d.options.rotation ? d.renderRotation() : '' # style='font: #= d.options.font #' fill='#= d.options.color #'>#= d.content #</text>"))
                },
                options: {
                    x: 0,
                    y: 0,
                    baseline: 0,
                    font: x,
                    size: {
                        width: 0,
                        height: 0
                    },
                    fillOpacity: 1
                },
                refresh: function(b) {
                    var c = this.options;
                    a(b).attr({
                        "fill-opacity": c.fillOpacity
                    })
                },
                clone: function() {
                    var a = this;
                    return new G(a.content, m({}, a.options))
                },
                renderRotation: function() {
                    var a = this,
                        b = a.options,
                        c = b.size,
                        d = q(b.x + c.normalWidth / 2, u),
                        e = q(b.y + c.normalHeight / 2, u),
                        f = q(b.x + c.width / 2, u),
                        g = q(b.y + c.height / 2, u),
                        h = q(f - d, u),
                        i = q(g - e, u);
                    return "transform='translate(" + h + "," + i + ") " + "rotate(" + b.rotation + "," + d + "," + e + ")'"
                }
            }),
            H = l.extend({
                init: function(a) {
                    var b = this;
                    l.fn.init.call(b, a), b.template = H.template, b.template || (b.template = H.template = o("<path #= d.renderAttr(\"id\", d.options.id) #d='#= d.renderPoints() #' #= d.renderAttr(\"stroke\", d.options.stroke) # #= d.renderAttr(\"stroke-width\", d.options.strokeWidth) ##= d.renderDashType() # stroke-linecap='#= d.renderLinecap() #' stroke-linejoin='round' fill-opacity='#= d.options.fillOpacity #' stroke-opacity='#= d.options.strokeOpacity #' fill='#= d.options.fill || \"none\" #'></path>"))
                },
                options: {
                    fill: "",
                    fillOpacity: 1,
                    strokeOpacity: 1
                },
                refresh: function(b) {
                    var c = this.options;
                    a(b).attr({
                        d: this.renderPoints(),
                        "fill-opacity": c.fillOpacity,
                        "stroke-opacity": c.strokeOpacity
                    })
                },
                clone: function() {
                    var a = this;
                    return new H(m({}, a.options))
                },
                renderPoints: function() {},
                renderDashType: function() {
                    var a = this,
                        b = a.options;
                    return T(b.dashType, b.strokeWidth)
                },
                renderLinecap: function() {
                    var a = this.options.dashType;
                    return a && a != "solid" ? "butt" : "square"
                }
            }),
            I = H.extend({
                init: function(a, b, c) {
                    var d = this;
                    H.fn.init.call(d, c), d.points = a, d.closed = b
                },
                renderPoints: function() {
                    var a = this,
                        b = a.points,
                        c, d = b.length,
                        e = b[0],
                        f = "M" + a._print(e);
                    for (c = 1; c < d; c++) f += " " + a._print(b[c]);
                    a.closed && (f += " z");
                    return f
                },
                clone: function() {
                    var a = this;
                    return new I(m([], a.points), a.closed, m({}, a.options))
                },
                _print: function(a) {
                    var b = this,
                        c = b.options.strokeWidth,
                        d = c && c % 2 !== 0,
                        e = d ? S : s.round;
                    return e(a.x) + " " + e(a.y)
                }
            }),
            J = H.extend({
                init: function(a, b) {
                    var c = this;
                    H.fn.init.call(c, b), c.pathTemplate = J.pathTemplate, c.pathTemplate || (c.pathTemplate = J.pathTemplate = o("M #= d.firstPoint.x # #= d.firstPoint.y # A#= d.r # #= d.r # 0 #= d.isReflexAngle ? '1' : '0' #,1 #= d.secondPoint.x # #= d.secondPoint.y # L #= d.cx # #= d.cy # z")), c.circleSector = a || {}
                },
                options: {
                    fill: "",
                    fillOpacity: 1,
                    strokeOpacity: 1,
                    strokeLineCap: B
                },
                clone: function() {
                    var a = this;
                    return new J(m({}, a.circleSector), m({}, a.options))
                },
                renderPoints: function() {
                    var a = this,
                        b = a.circleSector,
                        c = b.startAngle,
                        d = b.angle + c,
                        d = d - c == 360 ? d - .001 : d,
                        e = d - c > 180,
                        f = s.max(b.r, 0),
                        g = b.c.x,
                        h = b.c.y,
                        i = b.point(c),
                        j = b.point(d);
                    return a.pathTemplate({
                        firstPoint: i,
                        secondPoint: j,
                        isReflexAngle: e,
                        r: f,
                        cx: g,
                        cy: h
                    })
                }
            }),
            K = l.extend({
                init: function(a, b, c) {
                    var d = this;
                    l.fn.init.call(d, c), d.center = a, d.radius = b, d.template = K.template, d.template || (d.template = K.template = o("<circle #= d.renderAttr(\"id\", d.options.id) # cx='#= d.center[0] #' cy='#= d.center[1] #' r='#= d.radius #' #= d.renderAttr(\"stroke\", d.options.stroke) # #= d.renderAttr(\"stroke-width\", d.options.strokeWidth) #fill-opacity='#= d.options.fillOpacity #' stroke-opacity='#= d.options.strokeOpacity #'  fill='#= d.options.fill || \"none\" #'></circle>"))
                },
                options: {
                    fill: "",
                    fillOpacity: 1,
                    strokeOpacity: 1
                }
            }),
            L = l.extend({
                init: function(a) {
                    var b = this;
                    l.fn.init.call(b, a), b.template = L.template, b.template || (b.template = L.template = o('<g#= d.renderAttr("id", d.options.id) ##= d.renderAttr("clip-path", d.options.clipPath) #>#= d.renderContent() #</g>'))
                }
            }),
            M = l.extend({
                init: function(a) {
                    var b = this;
                    l.fn.init.call(b, a), b.template = M.template, b.template || (b.template = M.template = o('<clipPath#= d.renderAttr("id", d.options.id) #>#= d.renderContent() #</clipPath>'))
                }
            }),
            N = l.extend({
                init: function(a) {
                    var b = this;
                    l.fn.init.call(b, a), b.template = N.template, b.stopTemplate = N.stopTemplate, b.template || (b.template = N.template = o("<linearGradient id='#= d.options.id #' gradientTransform='rotate(#= d.options.rotation #)'> #= d.renderStops() #</linearGradient>"), b.stopTemplate = N.stopTemplate = o("<stop offset='#= Math.round(d.offset * 100) #%' style='stop-color:#= d.color #;stop-opacity:#= d.opacity #' />"))
                },
                options: {
                    id: "",
                    rotation: 0
                },
                renderStops: function() {
                    var a = this,
                        b = a.options.stops,
                        c = a.stopTemplate,
                        d, e = b.length,
                        f, g = "";
                    for (d = 0; d < e; d++) f = b[d], g += c(f);
                    return g
                }
            }),
            O = l.extend({
                init: function(a) {
                    var b = this;
                    l.fn.init.call(b, a), b.template = O.template, b.stopTemplate = O.stopTemplate, b.template || (b.template = O.template = o("<radialGradient id='#= d.options.id #' cx='#= d.options.cx #' cy='#= d.options.cy #' fx='#= d.options.cx #' fy='#= d.options.cy #' r='#= d.options.r #' gradientUnits='userSpaceOnUse'>#= d.renderStops() #</radialGradient>"), b.stopTemplate = O.stopTemplate = o("<stop offset='#= Math.round(d.offset * 100) #%' style='stop-color:#= d.color #;stop-opacity:#= d.opacity #' />"))
                },
                options: {
                    id: "",
                    rotation: 0
                },
                renderStops: function() {
                    var a = this,
                        b = a.options.stops,
                        c = a.stopTemplate,
                        d = b.length,
                        e, f = "",
                        g;
                    for (g = 0; g < d; g++) e = b[g], f += c(e);
                    return f
                }
            });
        P.prototype = {
            decorate: function(a) {
                var b = this,
                    c = b.view,
                    d = a.options,
                    e = d.id,
                    f, g;
                if (d.overlay) {
                    a.options.id = p(), f = c.createGroup(), g = a.clone(), f.children.push(a, g), g.options.id = e, g.options.fill = d.overlay;
                    return f
                }
                return a
            }
        }, Q.prototype = {
            decorate: function(a) {
                var b = this,
                    c = a.options;
                c.fill = b.getPaint(c.fill);
                return a
            },
            getPaint: function(a) {
                var b = this,
                    c = b.view,
                    d = c.definitions,
                    e, f, g;
                if (a && n(a.gradient)) {
                    e = c.buildGradient(a);
                    if (e) {
                        f = e.id, g = d[f], g || (g = c.createGradient(e), d[f] = g);
                        return "url(#" + g.options.id + ")"
                    }
                    return z
                }
                return a
            }
        };
        var R = c.extend({
            init: function(a) {
                this.view = a
            },
            decorate: function(a) {
                var b = this,
                    c = b.view,
                    d = c.options,
                    e = a.options.animation,
                    f = c.definitions,
                    g = f[y],
                    i;
                e && e.type === t && d.transitions && (g || (g = new M({
                    id: y
                }), i = c.createRect(new h(0, 0, d.width, d.height), {
                    id: p()
                }), g.children.push(i), f[y] = g, c.animations.push(new j(i, {
                    size: d.width
                }))), a.options.clipPath = "url(#" + y + ")");
                return a
            }
        });
        (function() {
            var a = "<svg xmlns='" + C + "'></svg>",
                b = r.createElement("div"),
                c = typeof DOMParser != E;
            b.innerHTML = a, c && b.firstChild.namespaceURI != C && (U = function(a, b) {
                var c = new DOMParser,
                    d = c.parseFromString(b, "text/xml"),
                    e = r.adoptNode(d.documentElement);
                a.innerHTML = "", a.appendChild(e)
            })
        })(), m(d, {
            SVGView: F,
            SVGText: G,
            SVGPath: H,
            SVGLine: I,
            SVGSector: J,
            SVGCircle: K,
            SVGGroup: L,
            SVGClipPath: M,
            SVGLinearGradient: N,
            SVGRadialGradient: O,
            SVGOverlayDecorator: P,
            SVGGradientDecorator: Q,
            SVGClipAnimationDecorator: R
        })
    }(jQuery),
    function() {
        function U(a, b) {
            var c = b.stops,
                d = c.length,
                e = n({}, b),
                f, g, h;
            e.stops = [];
            for (f = 0; f < d; f++) g = c[f], h = e.stops[f] = n({}, c[f]), h.color = S(a, g.color, g.opacity), h.opacity = 0;
            return e
        }

        function T(a, b, c) {
            return u.round(c * b + (1 - c) * a)
        }

        function S(a, b, c) {
            var d = new e(a),
                f = new e(b),
                g = T(d.r, f.r, c),
                h = T(d.g, f.g, c),
                i = T(d.b, f.b, c);
            return (new e(g, h, i)).toHex()
        }

        function R() {
            return a.browser.msie && !s() && typeof window.performance != "undefined"
        }

        function P(a) {
            this.view = a
        }

        function O(a) {
            this.view = a
        }
        var a = jQuery,
            b = window.kendo,
            c = b.Class,
            d = b.ui.Chart,
            e = d.Color,
            f = d.Box2D,
            g = d.Point2D,
            h = d.BarAnimationDecorator,
            i = d.PieAnimationDecorator,
            j = d.FadeAnimationDecorator,
            k = d.ExpandAnimation,
            l = d.ViewBase,
            m = d.ViewElement,
            n = d.deepExtend,
            o = d.template,
            p = d.uniqueId,
            q = d.rotatePoint,
            r = d.round,
            s = d.supportsSVG,
            t = document,
            u = Math,
            v = "#000",
            w = d.CLIP,
            x = d.DEFAULT_WIDTH,
            y = d.DEFAULT_HEIGHT,
            z = d.DEFAULT_FONT,
            A = "object",
            B = "radial",
            C = l.extend({
                init: function(a) {
                    var b = this;
                    l.fn.init.call(b, a), b.decorators.push(new O(b), new P(b), new h(b), new i(b), new Q(b)), R() || b.decorators.push(new j(b)), b.template = C.template, b.template || (b.template = C.template = o("<div style='width:#= d.options.width #px; height:#= d.options.height #px; position: relative;'>#= d.renderContent() #</div>"))
                },
                options: {
                    width: x,
                    height: y
                },
                renderTo: function(a) {
                    var b = this;
                    t.namespaces && t.namespaces.add("kvml", "urn:schemas-microsoft-com:vml", "#default#VML"), b.setupAnimations(), a.innerHTML = b.render(), b.playAnimations();
                    return a.firstChild
                },
                renderElement: function(a) {
                    var b = t.createElement("div"),
                        a;
                    b.style.display = "none", t.body.appendChild(b), b.innerHTML = a.render(), a = b.firstChild, t.body.removeChild(b);
                    return a
                },
                createText: function(a, b) {
                    return this.decorate(b && b.rotation ? new E(a, b) : new D(a, b))
                },
                createRect: function(a, b) {
                    return this.decorate(new I(a.points(), !0, b))
                },
                createLine: function(a, b, c, d, e) {
                    return this.decorate(new I([new g(a, b), new g(c, d)], !1, e))
                },
                createPolyline: function(a, b, c) {
                    return this.decorate(new I(a, b, c))
                },
                createCircle: function(a, b, c) {
                    return this.decorate(new K(a, b, c))
                },
                createSector: function(a, b) {
                    return this.decorate(new J(a, b))
                },
                createGroup: function(a) {
                    return this.decorate(new L(a))
                },
                createGradient: function(a) {
                    return new N(a)
                }
            });
        C.fromModel = function(a) {
            var b = new C(a.options);
            [].push.apply(b.children, a.getViewElements(b));
            return b
        };
        var D = m.extend({
                init: function(a, b) {
                    var c = this;
                    m.fn.init.call(c, b), c.content = a, c.template = D.template, c.template || (c.template = D.template = o("<kvml:textbox #= d.renderAttr(\"id\", d.options.id) # style='position: absolute; left: #= d.options.x #px; top: #= d.options.y #px; font: #= d.options.font #; color: #= d.options.color #; visibility: #= d.renderVisibility() #; white-space: nowrap;'>#= d.content #</kvml:textbox>"))
                },
                options: {
                    x: 0,
                    y: 0,
                    font: z,
                    color: v,
                    fillOpacity: 1
                },
                refresh: function(b) {
                    a(b).css("visibility", this.renderVisibility())
                },
                clone: function() {
                    var a = this;
                    return new D(a.content, n({}, a.options))
                },
                renderVisibility: function() {
                    return this.options.fillOpacity > 0 ? "visible" : "hidden"
                }
            }),
            E = m.extend({
                init: function(a, b) {
                    var c = this;
                    m.fn.init.call(c, b), c.content = a, c.template = E.template, c.template || (c.template = E.template = o("<kvml:shape #= d.renderAttr(\"id\", d.options.id) # style='position: absolute; top: 0px; left: 0px; width: 1px; height: 1px;' stroked='false' coordsize='1,1'>#= d.renderPath() #<kvml:fill color='#= d.options.color #' /><kvml:textpath on='true' style='font: #= d.options.font #;' fitpath='false' string='#= d.content #' /></kvml:shape>"))
                },
                options: {
                    x: 0,
                    y: 0,
                    font: z,
                    color: v,
                    size: {
                        width: 0,
                        height: 0
                    }
                },
                renderPath: function() {
                    var a = this,
                        b = a.options,
                        c = b.size.width,
                        d = b.size.height,
                        e = b.x + c / 2,
                        f = b.y + d / 2,
                        g = -b.rotation,
                        h = q(b.x, f, e, f, g),
                        i = q(b.x + c, f, e, f, g);
                    return "<kvml:path textpathok='true' v='m " + r(h.x) + "," + r(h.y) + " l " + r(i.x) + "," + r(i.y) + "' />"
                }
            }),
            F = m.extend({
                init: function(a) {
                    var b = this;
                    m.fn.init.call(b, a), b.template = F.template, b.template || (b.template = F.template = o('<kvml:stroke on=\'#= !!d.options.stroke #\' #= d.renderAttr("color", d.options.stroke) ##= d.renderAttr("weight", d.options.strokeWidth) ##= d.renderAttr("dashstyle", d.options.dashType) ##= d.renderAttr("opacity", d.options.strokeOpacity) # />'))
                }
            }),
            G = m.extend({
                init: function(a) {
                    var b = this;
                    m.fn.init.call(b, a), b.template = G.template, b.template || (b.template = G.template = o('<kvml:fill on=\'#= !!d.options.fill #\' #= d.renderAttr("color", d.options.fill) ##= d.renderAttr("weight", d.options.fillWidth) ##= d.renderAttr("opacity", d.options.fillOpacity) # />'))
                }
            }),
            H = m.extend({
                init: function(a) {
                    var b = this;
                    m.fn.init.call(b, a), b.template = H.template, b.template || (b.template = H.template = o("<kvml:shape #= d.renderAttr(\"id\", d.options.id) # style='position:absolute; width:1px; height:1px;' coordorigin='0 0' coordsize='1 1'><kvml:path v='#= d.renderPoints() # e' />#= d.fill.render() + d.stroke.render() #</kvml:shape>")), b.stroke = new F(b.options), b.fill = new G(b.options)
                },
                options: {
                    fill: "",
                    fillOpacity: 1,
                    strokeOpacity: 1
                },
                render: function() {
                    var a = this;
                    a.fill.options.fillOpacity = a.options.fillOpacity, a.stroke.options.strokeOpacity = a.options.strokeOpacity;
                    return m.fn.render.call(a)
                },
                renderPoints: function() {},
                refresh: function(b) {
                    var c = this,
                        d = c.options,
                        e = a(b),
                        f = e[0].parentNode;
                    if (f) {
                        e.find("path")[0].v = this.renderPoints();
                        try {
                            e.find("fill")[0].opacity = d.fillOpacity, e.find("stroke")[0].opacity = d.strokeOpacity
                        } catch (g) {}
                        f.style.cssText = f.style.cssText
                    }
                }
            }),
            I = H.extend({
                init: function(a, b, c) {
                    var d = this;
                    H.fn.init.call(d, c), d.points = a, d.closed = b
                },
                renderPoints: function() {
                    var a = this,
                        b = a.points,
                        c, d = b.length,
                        e = "m " + a._print(b[0]);
                    if (d > 1) {
                        e += " l ";
                        for (c = 1; c < d; c++) e += a._print(b[c]), c < d - 1 && (e += ", ")
                    }
                    a.closed && (e += " x");
                    return e
                },
                clone: function() {
                    var a = this;
                    return new I(n([], a.points), a.closed, n({}, a.options))
                },
                _print: function(a) {
                    return u.round(a.x) + "," + u.round(a.y)
                }
            }),
            J = H.extend({
                init: function(a, b) {
                    var c = this;
                    H.fn.init.call(c, b), c.pathTemplate = J.pathTemplate, c.pathTemplate || (c.pathTemplate = J.pathTemplate = o("M #= d.cx # #= d.cy # AE #= d.cx # #= d.cy # #= d.r # #= d.r # #= d.sa # #= d.a # X E")), c.circleSector = a
                },
                renderPoints: function() {
                    var a = this,
                        b = a.circleSector,
                        c = u.max(r(b.r), 0),
                        d = r(b.c.x),
                        e = r(b.c.y),
                        f = -r((b.startAngle + 180) * 65535),
                        g = -r(b.angle * 65536);
                    return a.pathTemplate({
                        r: c,
                        cx: d,
                        cy: e,
                        sa: f,
                        a: g
                    })
                },
                clone: function() {
                    var a = this;
                    return new J(n({}, a.circleSector), n({}, a.options))
                }
            }),
            K = m.extend({
                init: function(a, b, c) {
                    var d = this;
                    m.fn.init.call(d, c), d.center = a, d.radius = b, d.template = K.template, d.template || (d.template = K.template = o("<kvml:oval #= d.renderAttr(\"id\", d.options.id) # style='position:absolute; width:#= d.radius * 2 #px; height:#= d.radius * 2 #px; top:#= d.center[1] - d.radius #px; left:#= d.center[0] - d.radius #px;'>#= d.fill.render() + d.stroke.render() #</kvml:oval>")), d.stroke = new F(d.options), d.fill = new G(d.options)
                },
                options: {
                    fill: ""
                }
            }),
            L = m.extend({
                init: function(a) {
                    var b = this;
                    m.fn.init.call(b, a), b.template = L.template, b.template || (b.template = L.template = o("<div #= d.renderAttr(\"id\", d.options.id) #style='position: absolute; white-space: nowrap;'>#= d.renderContent() #</div>"))
                }
            }),
            M = m.extend({
                init: function(a, b) {
                    var c = this;
                    m.fn.init.call(c, b), c.template = M.template, c.clipTemplate = M.clipTemplate, c.template || (c.template = M.template = o("<div #= d.renderAttr(\"id\", d.options.id) #style='position:absolute; width:#= d.box.width() #px; height:#= d.box.height() #px; top:#= d.box.y1 #px; left:#= d.box.x1 #px; clip:#= d._renderClip() #;' >#= d.renderContent() #</div>"), c.clipTemplate = M.clipTemplate = o("rect(#= d.points[0].y #px #= d.points[1].x #px #= d.points[2].y #px #= d.points[0].x #px)")), c.box = a, c.points = a.points()
                },
                clone: function() {
                    var a = this;
                    return new M(a.box, n({}, a.options))
                },
                refresh: function(b) {
                    a(b).css(w, this._renderClip())
                },
                _renderClip: function() {
                    return this.clipTemplate(this)
                }
            }),
            N = m.extend({
                init: function(a) {
                    var b = this;
                    m.fn.init.call(b, a), b.template = N.template, b.template || (b.template = N.template = o("<kvml:fill type='gradient' angle='#= 270 - d.options.rotation #' colors='#= d.renderColors() #' opacity='#= d.options.opacity #' />"))
                },
                options: {
                    rotation: 0,
                    opacity: 1
                },
                renderColors: function() {
                    var a = this,
                        b = a.options,
                        c = b.stops,
                        d, e, f = c.length,
                        g = [],
                        h = u.round;
                    for (e = 0; e < f; e++) d = c[e], g.push(h(d.offset * 100) + "% " + d.color);
                    return g.join(",")
                }
            });
        O.prototype = {
            decorate: function(a) {
                var b = a.options,
                    c = this.view,
                    d;
                b.overlay && (d = c.buildGradient(n({}, b.overlay, {
                    _overlayFill: b.fill
                })));
                if (!d || d.type === B) return a;
                delete b.overlay, b.fill = n(U(b.fill, d), {
                    opacity: b.fillOpacity
                });
                return a
            }
        }, P.prototype = {
            decorate: function(a) {
                var b = this,
                    c = b.view,
                    d = a.options,
                    e = d.fill;
                e && (e.gradient && (e = c.buildGradient(e)), typeof e === A && (a.fill = c.createGradient(e)));
                return a
            }
        };
        var Q = c.extend({
            init: function(a) {
                this.view = a
            },
            decorate: function(a) {
                var b = this,
                    c = b.view,
                    d = c.options,
                    e = a.options.animation,
                    g;
                if (e && e.type === w && d.transitions) {
                    g = new M(new f(0, 0, 0, d.height), {
                        id: p()
                    }), c.animations.push(new k(g, {
                        size: d.width
                    })), g.children.push(a);
                    return g
                }
                return a
            }
        });
        n(d, {
            VMLView: C,
            VMLText: D,
            VMLRotatedText: E,
            VMLStroke: F,
            VMLFill: G,
            VMLPath: H,
            VMLLine: I,
            VMLSector: J,
            VMLCircle: K,
            VMLGroup: L,
            VMLClipRect: M,
            VMLLinearGradient: N,
            VMLOverlayDecorator: O,
            VMLClipAnimationDecorator: Q,
            blendColors: S,
            blendGradient: U
        })
    }(jQuery),
    function() {
        var a = window.kendo,
            b = a.ui.Chart,
            c = b.deepExtend,
            d = "#000",
            e = "Arial,Helvetica,sans-serif",
            f = "11px " + e,
            g = "12px " + e,
            h = "16px " + e,
            i = "#fff",
            j = {
                title: {
                    font: h
                },
                legend: {
                    labels: {
                        font: g
                    }
                },
                seriesDefaults: {
                    labels: {
                        font: f
                    }
                },
                categoryAxis: {
                    labels: {
                        font: g
                    }
                },
                valueAxis: {
                    labels: {
                        font: g
                    }
                },
                tooltip: {
                    font: g
                }
            },
            k = {};
        k.black = c({}, j, {
            title: {
                color: i
            },
            legend: {
                labels: {
                    color: i
                }
            },
            seriesDefaults: {
                labels: {
                    color: i
                },
                pie: {
                    highlight: {
                        opacity: .6,
                        color: "#3d3d3d",
                        border: {
                            width: .5,
                            opacity: .9,
                            color: "#000"
                        }
                    },
                    overlay: {
                        gradient: "sharpBevel"
                    }
                },
                line: {
                    markers: {
                        background: "#3d3d3d"
                    }
                },
                scatter: {
                    markers: {
                        background: "#3d3d3d"
                    }
                },
                scatterLine: {
                    markers: {
                        background: "#3d3d3d"
                    }
                }
            },
            chartArea: {
                background: "#3d3d3d"
            },
            seriesColors: ["#0081da", "#3aafff", "#99c900", "#ffeb3d", "#b20753", "#ff4195"],
            categoryAxis: {
                majorGridLines: {
                    visible: !0
                }
            },
            axisDefaults: {
                line: {
                    color: "#8e8e8e"
                },
                labels: {
                    color: i
                },
                majorGridLines: {
                    color: "#545454"
                },
                minorGridLines: {
                    color: "#454545"
                }
            },
            tooltip: {
                background: "#3d3d3d",
                color: i,
                opacity: .8
            }
        }), k["default"] = c({}, j, {
            title: {
                color: "#8e8e8e"
            },
            legend: {
                labels: {
                    color: "#232323"
                }
            },
            seriesDefaults: {
                labels: {
                    color: d,
                    background: i,
                    opacity: .5
                }
            },
            seriesColors: ["#ff6800", "#a0a700", "#ff8d00", "#678900", "#ffb53c", "#396000"],
            categoryAxis: {
                majorGridLines: {
                    visible: !0
                }
            },
            axisDefaults: {
                line: {
                    color: "#8e8e8e"
                },
                labels: {
                    color: "#232323"
                },
                minorGridLines: {
                    color: "#f0f0f0"
                },
                majorGridLines: {
                    color: "#dfdfdf"
                }
            },
            tooltip: {
                background: i,
                color: d,
                opacity: .8
            }
        }), k.blueopal = c({}, j, {
            title: {
                color: "#293135"
            },
            legend: {
                labels: {
                    color: "#293135"
                }
            },
            seriesDefaults: {
                labels: {
                    color: d,
                    background: i,
                    opacity: .5
                }
            },
            seriesColors: ["#0069a5", "#0098ee", "#7bd2f6", "#ffb800", "#ff8517", "#e34a00"],
            categoryAxis: {
                majorGridLines: {
                    visible: !0
                }
            },
            axisDefaults: {
                line: {
                    color: "#9aabb2"
                },
                labels: {
                    color: "#293135"
                },
                majorGridLines: {
                    color: "#c4d0d5"
                },
                minorGridLines: {
                    color: "#edf1f2"
                }
            },
            tooltip: {
                background: i,
                color: d,
                opacity: .8
            }
        }), k.silver = c({}, j, {
            title: {
                color: "#4e5968"
            },
            legend: {
                labels: {
                    color: "#4e5968"
                }
            },
            seriesDefaults: {
                labels: {
                    color: "#293135",
                    background: "#eaeaec",
                    opacity: .5
                },
                pie: {
                    connectors: {
                        color: "#A6B1C0"
                    }
                }
            },
            chartArea: {
                background: "#eaeaec"
            },
            seriesColors: ["#007bc3", "#76b800", "#ffae00", "#ef4c00", "#a419b7", "#430B62"],
            categoryAxis: {
                majorGridLines: {
                    visible: !0
                }
            },
            axisDefaults: {
                line: {
                    color: "#a6b1c0"
                },
                labels: {
                    color: "#4e5968"
                },
                majorGridLines: {
                    color: "#dcdcdf"
                },
                minorGridLines: {
                    color: "#eeeeef"
                }
            },
            tooltip: {
                background: i,
                color: "#4e5968",
                opacity: .8
            }
        }), k.metro = c({}, j, {
            title: {
                color: "#777777"
            },
            legend: {
                labels: {
                    color: "#777777"
                }
            },
            seriesDefaults: {
                labels: {
                    color: "#000000"
                }
            },
            seriesColors: ["#25a0da", "#309b46", "#8ebc00", "#ff6900", "#e61e26", "#d8e404", "#16aba9", "#7e51a1", "#313131", "#ed1691"],
            categoryAxis: {
                majorGridLines: {
                    visible: !0
                }
            },
            axisDefaults: {
                line: {
                    color: "#c7c7c7"
                },
                labels: {
                    color: "#777777"
                },
                minorGridLines: {
                    color: "#c7c7c7"
                },
                majorGridLines: {
                    color: "#c7c7c7"
                }
            },
            tooltip: {
                background: i,
                color: d
            }
        }), b.themes = k, b.prototype.options.theme = "default"
    }(jQuery)