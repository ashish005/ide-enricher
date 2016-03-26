/**
 * Created by wizdev on 3/24/2016.
 */

    var core = (function(a, b) {
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
        var c = window.ide = window.ide || {},
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
                    j = "var o,e=ide.htmlEncode;",
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
                c.ui[d] = b, d = "ide" + d, a.fn[d] = function(c) {
                    a(this).each(function() {
                        var e = new b(this, c);
                        a(this).data(d, e)
                    });
                    return this
                }
            }
        })
    })(window.jQuery);
    var uiPluginResizable = (function(a, b) {
        var c = window.ide,
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
    })(window.jQuery);
    var uiPluginDraggable = (function(a, b) {
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
        var c = window.ide,
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
    })(window.jQuery);

    var ideWindow = (function(a, b){
    "use strict";
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
        return a.children(o).data("ideWindow")
    }
    var c = window.ide,
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
})(window.jQuery);
    var ideSplitter =(function(a, b){
    var B = function (a) {
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

    var c = window.ide,
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
})(window.jQuery);

    var ideTabStrip = (function(a, b) {
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
    var c = window.ide,
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
})(window.jQuery);
