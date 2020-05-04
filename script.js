$(".post-title>a").each(function() {
        var e = $(this).attr("href");
        $("head").append('<link rel="prerender" href="' + e + '">')
    }),
    function(e, t) {
        e.InfiniteScroll = function(n) {
            function r(e, n) { return (n = n || t).querySelectorAll(e) }

            function o(e) { return void 0 !== e }

            function a(e) { return "function" == typeof e }

            function i(e, t) {
                if (o(c[e]))
                    for (var n in c[e]) c[e][n](t)
            }

            function s() {
                return v.innerHTML = d.text.loading, h = !0, m ? (x.classList.add(d.state.loading), i("loading", [d]), void p(m, function(e, n) {
                    x.className = L + " " + d.state.load, (f = t.createElement("div")).innerHTML = e;
                    var o = r("title", f),
                        a = r(d.target.post, f),
                        s = r(d.target.anchors + " " + d.target.anchor, f),
                        c = r(d.target.post, g);
                    if (o = o && o[0] ? o[0].innerHTML : "", a.length && c.length) {
                        var p = c[c.length - 1];
                        t.title = o, p.insertAdjacentHTML("afterend", " "), f = t.createElement("div");
                        for (var u = 0, v = a.length; v > u; ++u) f.appendChild(a[u]);
                        p.insertAdjacentHTML("afterend", f.innerHTML), l(), m = !!s.length && s[0].href, h = !1, 0, i("load", [d, e, n])
                    }
                }, function(e, t) { x.classList.add(d.state.error), h = !1, l(1), i("error", [d, e, t]) })) : (x.classList.add(d.state.loaded), v.innerHTML = d.text.loaded, i("loaded", [d]))
            }

            function l(e) {
                if (v.innerHTML = "", u) {
                    f.innerHTML = d.text[e ? "error" : "load"];
                    var t = f.firstChild;
                    t.onclick = function() { return 2 === d.type && (u = !1), s(), !1 }, v.appendChild(t)
                }
            }
            var d = { target: { posts: ".posts", post: ".post", anchors: ".anchors", anchor: ".anchor" }, text: { load: "%s", loading: "%s", loaded: "%s", error: "%s" }, state: { load: (p = "infinite-scroll-state-") + "load", loading: p + "loading", loaded: p + "loaded", error: p + "error" } },
                c = { load: [], loading: [], loaded: [], error: [] };
            (d = function e(t, n) { for (var r in t = t || {}, n) t[r] = "object" == typeof n[r] ? e(t[r], n[r]) : n[r]; return t }(d, n || {})).on = function(e, t, n) { return o(e) ? o(t) ? void(o(n) ? c[e][n] = t : c[e].push(t)) : c[e] : c }, d.off = function(e, t) { o(t) ? delete c[e][t] : c[e] = [] };
            var f = null,
                p = function(t, n, r) {
                    if (e.XMLHttpRequest) {
                        var o = new XMLHttpRequest;
                        o.onreadystatechange = function() {
                            if (4 === o.readyState) {
                                if (200 !== o.status) return void(r && a(r) && r(o.responseText, o));
                                n && a(n) && n(o.responseText, o)
                            }
                        }, o.open("GET", t), o.send()
                    }
                },
                u = 1 !== d.type,
                h = !1,
                g = r(d.target.posts)[0],
                v = r(d.target.anchors)[0],
                m = r(d.target.anchor, v),
                T = t.body,
                x = t.documentElement,
                L = x.className || "",
                w = g.offsetTop + g.offsetHeight,
                H = e.innerHeight,
                y = 0,
                M = null;
            if (m.length) {
                m = m[0].href, g.insertAdjacentHTML("afterbegin", " "), f = t.createElement("div"), l();
                var j = function() { w = g.offsetTop + g.offsetHeight, H = e.innerHeight, y = T.scrollTop || x.scrollTop, h || w > y + H || s() };
                j(), 0 !== d.type && e.addEventListener("scroll", function() { u || (M && e.clearTimeout(M), M = e.setTimeout(j, 200)) }, !1)
            }
            return d
        }
    }(window, document);
var infinite_scroll = new InfiniteScroll({ type: 0, target: { posts: ".blog-posts", post: ".hentry", anchors: ".blog-pager", anchor: ".blog-pager-older-link" }, text: { load: '<a class="js-load load-more" href="javascript:void(0)">Load more</a>', loading: '<a class="js-load wait"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 50 50" xml:space="preserve"><path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/></path></svg><span>Please wait...</span></a>', loaded: '<span class="js-load nolink">No more post</span>', error: '<a class="js-load error" href="javascript:void(0)">Sorry error!</a>' } });


(function() {
    var b, f;
    b = this.jQuery || window.jQuery;
    f = b(window);
    b.fn.stick_in_parent = function(d) {
        var A, w, J, n, B, K, p, q, k, E, t;
        null == d && (d = {});
        t = d.sticky_class;
        B = d.inner_scrolling;
        E = d.recalc_every;
        k = d.parent;
        q = d.offset_top;
        p = d.spacer;
        w = d.bottoming;
        null == q && (q = 0);
        null == k && (k = void 0);
        null == B && (B = !0);
        null == t && (t = "is-sticky");
        A = b(document);
        null == w && (w = !0);
        J = function(a, d, n, C, F, u, r, G) {
            var v, H, m, D, I, c, g, x, y, z, h, l;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                I = A.height();
                g = a.parent();
                null != k && (g = g.closest(k));
                if (!g.length) throw "failed to find stick parent";
                v = m = !1;
                (h = null != p ? p && a.closest(p) : b("<div />")) && h.css("position", a.css("position"));
                x = function() { var c, f, e; if (!G && (I = A.height(), c = parseInt(g.css("border-top-width"), 10), f = parseInt(g.css("padding-top"), 10), d = parseInt(g.css("padding-bottom"), 10), n = g.offset().top + c + f, C = g.height(), m && (v = m = !1, null == p && (a.insertAfter(h), h.detach()), a.css({ position: "", top: "", width: "", bottom: "" }).removeClass(t), e = !0), F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q, u = a.outerHeight(!0), r = a.css("float"), h && h.css({ width: a.outerWidth(!0), height: u, display: a.css("display"), "vertical-align": a.css("vertical-align"), "float": r }), e)) return l() };
                x();
                if (u !== C) return D = void 0, c = q, z = E, l = function() { var b, l, e, k; if (!G && (e = !1, null != z && (--z, 0 >= z && (z = E, x(), e = !0)), e || A.height() === I || x(), e = f.scrollTop(), null != D && (l = e - D), D = e, m ? (w && (k = e + u + c > C + n, v && !k && (v = !1, a.css({ position: "fixed", bottom: "", top: c }).trigger("sticky_kit:unbottom"))), e < F && (m = !1, c = q, null == p && ("left" !== r && "right" !== r || a.insertAfter(h), h.detach()), b = { position: "", width: "", top: "" }, a.css(b).removeClass(t).trigger("sticky_kit:unstick")), B && (b = f.height(), u + q > b && !v && (c -= l, c = Math.max(b - u, c), c = Math.min(q, c), m && a.css({ top: c + "px" })))) : e > F && (m = !0, b = { position: "fixed", top: c }, b.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px", a.css(b).addClass(t), null == p && (a.after(h), "left" !== r && "right" !== r || h.append(a)), a.trigger("sticky_kit:stick")), m && w && (null == k && (k = e + u + c > C + n), !v && k))) return v = !0, "static" === g.css("position") && g.css({ position: "relative" }), a.css({ position: "absolute", bottom: d, top: "auto" }).trigger("sticky_kit:bottom") }, y = function() { x(); return l() }, H = function() {
                    G = !0;
                    f.off("touchmove", l);
                    f.off("scroll", l);
                    f.off("resize", y);
                    b(document.body).off("sticky_kit:recalc", y);
                    a.off("sticky_kit:detach", H);
                    a.removeData("sticky_kit");
                    a.css({ position: "", bottom: "", top: "", width: "" });
                    g.position("position", "");
                    if (m) return null == p && ("left" !== r && "right" !== r || a.insertAfter(h), h.remove()), a.removeClass(t)
                }, f.on("touchmove", l), f.on("scroll", l), f.on("resize", y), b(document.body).on("sticky_kit:recalc", y), a.on("sticky_kit:detach", H), setTimeout(l, 0)
            }
        };
        n = 0;
        for (K = this.length; n < K; n++) d = this[n], J(b(d));
        return this
    }
}).call(this);

jQuery(document).ready(function() {
    var i = jQuery(window).width();

    function e() { jQuery("#sidebar-sticky").stick_in_parent({ parent: "#sidebar", offset_top: 20 }) }
    i < 768 ? jQuery("#sidebar-sticky").trigger("sticky_kit:detach") : e(), jQuery(window).resize(function() {
        (i = jQuery(window).width()) < 768 ? jQuery("#sidebar-sticky").trigger("sticky_kit:detach") : e()
    })
});

document.addEventListener("DOMContentLoaded", function() {
    var a = document,
        b = a.getElementById("comment-editor"),
        d = b.getAttribute("data-src");
    if (b.setAttribute("src", d), 1 == comment) {
        var f = a.getElementsByClassName("reply-to"),
            c = a.getElementById("threaded-comment-form"),
            h = f.length,
            k = function(b, d, e, f) {
                b.addEventListener("click", function() {
                    var c = b.getAttribute("data-reply-to");
                    a.getElementById("c" + c).appendChild(d);
                    a.getElementById("threaded-comment-form").className = 'comment-replybox-single';
                    a.getElementById("addcomment").className = 'comment-reply';
                    e.src = f + "&parentID=" + c
                })
            };
        for (i = 0; i < h; i++) k(f[i], c, b, d);
        var l = a.getElementsByClassName("comment-form")[0];
        a.getElementById("addcomment").addEventListener("click", function() {
            l.appendChild(c);
            a.getElementById("threaded-comment-form").className = 'comment-replybox-thread';
            a.getElementById("addcomment").className = 'comment-reply hidden';
            b.src = d
        })
    }
});

var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();

function related_results_labels(json) {
    for (var i = 0; i < json.feed.entry.length; i++) {
        var entry = json.feed.entry[i];
        relatedTitles[relatedTitlesNum] = entry.title.$t;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                relatedUrls[relatedTitlesNum] = entry.link[k].href;
                relatedTitlesNum++;
                break;
            }
        }
    }
}

function removeRelatedDuplicates() {
    var tmp = new Array(0);
    var tmp2 = new Array(0);
    for (var i = 0; i < relatedUrls.length; i++) {
        if (!contains(tmp, relatedUrls[i])) {
            tmp.length += 1;
            tmp[tmp.length - 1] = relatedUrls[i];
            tmp2.length += 1;
            tmp2[tmp2.length - 1] = relatedTitles[i];
        }
    }
    relatedTitles = tmp2;
    relatedUrls = tmp;
}

function contains(a, e) {
    for (var j = 0; j < a.length; j++)
        if (a[j] == e) return true;
    return false;
}

function printRelatedLabels() {
    var r = Math.floor((relatedTitles.length - 1) * Math.random());
    var i = 0;
    document.write('<ul>');
    while (i < relatedTitles.length && i < 20) {
        document.write('<li><a href="' + relatedUrls[r] + '">' + relatedTitles[r] + '</a></li>');
        if (r < relatedTitles.length - 1) { r++; } else { r = 0; }
        i++;
    }
    document.write('</ul>');
}

function searchFunction() {
    var x = document.getElementById('header');
    if (x.classList) x.classList.toggle('search');
    else {
        var z = x.className.split(' ');
        0 <= (t = z.indexOf('search')) ? z.splice(t, 1) : z.push('search'), x.className = z.join(' ')
    }
};

function settingFunction() {
    var x = document.getElementById("header");
    if (x.classList) x.classList.toggle("setting");
    else {
        var z = x.className.split(" ");
        0 <= (t = z.indexOf("setting")) ? z.splice(t, 1) : z.push("setting"), x.className = z.join(" ")
    }
};

function chatFunction() {
    var x = document.getElementById("sticky-button");
    if (x.classList) x.classList.toggle("active");
    else {
        var z = x.className.split(" ");
        0 <= (t = z.indexOf("active")) ? z.splice(t, 1) : z.push("active"), x.className = z.join(" ")
    }
};

function toggleFullScreen() { document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() };
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("header");
    var backtop = document.getElementById("sticky-button");
    if (prevScrollpos > currentScrollPos) { navbar.classList.remove("hide") } else { navbar.classList.add("hide"); }
    prevScrollpos = currentScrollPos;
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) { navbar.classList.add("sticky") } else { navbar.classList.remove("sticky"); }
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) { backtop.classList.add("sticky") } else { backtop.classList.remove("sticky"); }
};
var uri = window.location.toString();
if (uri.indexOf("%3D", "%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D", "%3D%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1", "&m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();;
if (uri.indexOf("&amp=1", "&amp=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&amp=1"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();;
if (uri.indexOf("?amp=1", "?amp=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?amp=1"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1", "?m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, clean_uri);
};
var protocol = window.location.protocol.replace(/\:/g, '');
if (protocol == 'http') {
    var url = window.location.href.replace('http', 'https');
    window.location.replace(url);
};

function LazyOnScroll() {
    setTimeout(function() {
        function e() {
            for (var e = document.getElementsByClassName("lazy"), t = 0; t < e.length; t++) n = e[t], void 0, 0 <= (o = n.getBoundingClientRect()).bottom && 0 <= o.right && o.top <= (window.innerHeight || document.documentElement.clientHeight) && o.left <= (window.innerWidth || document.documentElement.clientWidth) && (e[t].src = e[t].getAttribute("data-src"));
            var n, o, i;
            i = document.querySelectorAll(".lds-ripple"), [].forEach.call(i, function(e) { e.classList.remove("lds-ripple") })
        }

        function t(e, t) { window.addEventListener ? window.addEventListener(e, t) : window.attachEvent("on" + e, t) }
        t("load", e), t("scroll", e), document.addEventListener("DOMContentLoaded", function() {
            "use strict";
            for (var e = document.querySelectorAll("a"), t = e.length, u = /firefox|trident/i.test(navigator.userAgent) ? document.documentElement : document.body; t--;) e.item(t).addEventListener("click", function(e) {
                var c, l = u.scrollTop,
                    t = document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top,
                    n = u.scrollHeight - window.innerHeight,
                    r = l + t < n ? t : n - l,
                    a = function(e) {
                        var t, n, o, i = e - (c = c || e),
                            d = (t = i, n = l, o = r, (t /= 900 / 2) < 1 ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n);
                        u.scrollTop = d, i < 900 && requestAnimationFrame(a)
                    };
                requestAnimationFrame(a), e.preventDefault()
            })
        })
    }, 1e3)
}
window.addEventListener ? window.addEventListener("load", LazyOnScroll, !1) : window.attachEvent ? window.attachEvent("onload", LazyOnScroll) : window.onload = LazyOnScroll;
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
    const lazyLoad = function() {
        if (active === false) {
            active = true;
            setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");
                        lazyImages = lazyImages.filter(function(image) { return image !== lazyImage; });
                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                });
                active = false;
            }, 200);
        }
    };
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});
(function() {
    var youtube = document.querySelectorAll(".lazy-youtube");
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
        var image = new Image();
        image.setAttribute("class", "lazy");
        image.setAttribute("data-src", source);
        image.setAttribute("data-srcset", source);
        image.setAttribute("src", "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
        image.addEventListener("load", function() { youtube[i].appendChild(image); }(i));
        youtube[i].addEventListener("click", function() {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };
})();
(function removeLinkComment() {
    if (document.querySelector('#comments .comments-content')) {
        var a = document.querySelectorAll('.comment-block .user a');
        for (var x = 0; x < a.length; x++) {
            var b = a[x].text,
                c = a[x].parentNode,
                d = document.createElement('span');
            d.innerHTML = b;
            a[x].remove();
            c.appendChild(d);
        }
    }
})();

function copyFunction() { document.getElementById("getlink").select(), document.execCommand("copy"), document.getElementById("share-notif").innerHTML = "<span>Link copied to clipboard!</span>" };
// New type of the tag
var replacementTag = 'img';

$('div.img').each(function() {

    var hx = $(this).children('amp-img').attr('height');
    var wx = $(this).children('amp-img').attr('width');
    var xx = hx + 'px';
    var yx = wx + 'px';

    $(this).css('height', hx).css('width', wx);

});



// Replace all a tags with the type of replacementTag
$('.first-image>amp-img').each(function() {
    var outer = this.outerHTML;

    // Replace opening tag
    var regex = new RegExp('<' + this.tagName, 'i');
    var newTag = outer.replace(regex, '<' + replacementTag);

    // Replace closing tag
    regex = new RegExp('</' + this.tagName, 'i');
    newTag = newTag.replace(regex, '</' + replacementTag);

    $(this).replaceWith(newTag);
});


$('amp-img').each(function() {
    var imgsrc = $(this).attr('src');

    var w = ' src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="';
    var x = ' data-srcset=' + imgsrc;
    var y = ' data-src=' + imgsrc;
    var z = ' class="lazy"';

    $(this).replaceWith('<img ' + w + x + y + z + '>');

});

var randomRelatedIndex, showRelatedPost;
(function(n, m, k) {
    var d = { widgetTitle: "<h3 class='heading'>Related Posts</h3>", widgetStyle: 1, homePage: "http://www.souravrajbiswas.com", numPosts: 6, summaryLength: 320, titleLength: "auto", thumbnailSize: 100, noImage: "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", containerId: "related-posts", newTabLink: false, moreText: "Read more", callBack: function() {} };
    for (var f in relatedPostConfig) { d[f] = (relatedPostConfig[f] == "undefined") ? d[f] : relatedPostConfig[f] }
    var j = function(a) {
            var b = m.createElement("script");
            b.async = "async";
            b.rel = "preload";
            b.src = a;
            k.appendChild(b)
        },
        o = function(b, a) { return Math.floor(Math.random() * (a - b + 1)) + b },
        l = function(a) {
            var p = a.length,
                c, b;
            if (p === 0) { return false }
            while (--p) {
                c = Math.floor(Math.random() * (p + 1));
                b = a[p];
                a[p] = a[c];
                a[c] = b
            }
            return a
        },
        e = (typeof labelArray == "object" && labelArray.length > 0) ? "/-/" + l(labelArray)[0] : "",
        h = function(b) {
            var c = b.feed.openSearch$totalResults.$t - d.numPosts,
                a = o(1, (c > 0 ? c : 1));
            j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + e + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + d.numPosts + "&callback=showRelatedPost")
        },
        g = function(z) {
            var s = document.getElementById(d.containerId),
                x = l(z.feed.entry),
                A = d.widgetStyle,
                c = d.widgetTitle + '<ul class="related-post style-' + A + '">',
                b = d.newTabLink ? ' target="_blank"' : "",
                y = '<!-- <div class="clear"/> -->',
                v, t, w, r, u;
            if (!s) { return }
            for (var q = 0; q < d.numPosts; q++) {
                if (q == x.length) { break }
                t = x[q].title.$t;
                w = (d.titleLength !== "auto" && d.titleLength < t.length) ? t.substring(0, d.titleLength) + "&hellip;" : t;
                r = ("media$thumbnail" in x[q] && d.thumbnailSize !== false) ? x[q].media$thumbnail.url.replace(/.*?:\/\//g, "//").replace(/\/s[0-9]+(\-c)?/, "/s" + d.thumbnailSize) : d.noImage;
                u = ("summary" in x[q] && d.summaryLength > 0) ? x[q].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, d.summaryLength) + "&hellip;" : "";
                for (var p = 0, a = x[q].link.length; p < a; p++) { v = (x[q].link[p].rel == "alternate") ? x[q].link[p].href : "#" }
                if (A == 2) { c += '<li><div class="item-related"><div class="item-thumbnail"><img class="lazy" alt="' + t + '" data-src="' + r + '" data-srcset="' + r + '" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="></div><div class="item-content"><div class="item-title"><a title="' + t + '" href="' + v + '"' + b + ">" + w + '</a></div><div class="item-summary"><span class="item-summaryText">' + u + '</span> <a href="' + v + '" class="item-more"' + b + ">" + d.moreText + "</a></div></div></div></li>" } else { if (A == 3) { c += '<li><div class="item-related"><div class="item-thumbnail"><a title="' + w + '" href="' + v + '"' + b + '><img class="lazy" alt="' + w + '" data-src="' + r + '" data-srcset="' + r + '" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="></a></div><div class="item-title"><a title="' + t + '" href="' + v + '"' + b + "><span>" + w + "</span></a></div></div></li>" } else { if (A == 4) { c += '<li><a class="item-related" href="' + v + '" title="' + t + '"' + b + '><div class="item-thumbnail"><img class="lazy" alt="' + w + '" data-src="' + r + '" data-srcset="' + r + '" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="></div><div class="item-title"><span>' + w + "</span></div></a></li>" } else { if (A == 5) { c += '<li><div class="item-related"><div class="item-thumbnail"><img class="lazy" alt="' + w + '" data-src="' + r + '" data-srcset="' + r + '" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="></div><div class="item-content"><div class="item-title"><a title="' + t + '" href="' + v + '"' + b + "><span>" + w + '</span></a></div><div class="item-summary"><span class="item-summaryText">' + u + "</span></div></div></div></li>" } else { c += '<li><a title="' + t + '" href="' + v + '"' + b + ">" + w + "</a></li>" } } } }
            }
            s.innerHTML = c += "</ul>";
            d.callBack()
        };
    randomRelatedIndex = h;
    showRelatedPost = g;
    j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + e + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
})(window, document, document.getElementsByTagName("head")[0]);
document.addEventListener('DOMContentLoaded', function() {
    function checkChildren(nodes, elemId) { for (i = 0; i < nodes.length; i++) { if (nodes[i].id == elemId) { return nodes[i]; } else { return checkChildren(nodes[i].children, elemId); } } }

    function isNumeric(value) { var type = typeof value; return (type === 'number' || type === 'string') && !Number.isNaN(value - Number.parseFloat(value)); }
    var nodes = document.querySelector('div.post-body').children;
    var splitdong = checkChildren(nodes, 'postsplit').innerHTML;
    var content = splitdong.split('<!--nextpage-->');
    var url = window.location.href;
    var url = url.split('?page=');
    var no = url[1] + '&m=4';
    var no = no.split('m');
    var no = no[0];
    var no = no.replace('&', '');
    var url = url[0];
    var i = 1;
    if (!isNumeric(no)) { var no = 1; }
    document.getElementById('postsplit').innerHTML = content[no - 1];
    if (content.length > 1) { document.getElementById('postsplit').innerHTML += "<div class='post-pagenav post-clearfix' id='post-pager'><span class='page current'>Pages :</span></div>"; }
    if (no > 1) { document.getElementById('post-pager').innerHTML += "<!-- <a href='" + url + "?page=" + (no - 1) + "' title='Previous Page'>Prev</a> -->"; }
    content.forEach(function(item) {
        if (no == i) { document.getElementById('post-pager').innerHTML += "<span class='current'>" + i + "</span>"; } else { document.getElementById('post-pager').innerHTML += "<a href='" + url + "?page=" + i + "' rel='nofollow' title='Page " + i + "'>" + i + "</a>"; }
        i++;
    });
    if (content.length > no) {
        var nn = parseInt(no) + 1;
        document.getElementById('post-pager').innerHTML += "<a href='" + url + "?page=" + nn + "' rel='nofollow' title='Next Page'>Next</a>";
    }
});

function insertAfter(tbh, tgt) { var prt = tgt.parentNode; if (prt.lastChild == tgt) { prt.appendChild(tbh); } else { prt.insertBefore(tbh, tgt.nextSibling); } }
var tgt = document.getElementById("postMiddle");
var midAd1 = document.getElementById("post-middleads01");
var midAd2 = document.getElementById("post-middleads02");
var midAd3 = document.getElementById("post-relatedText");
var showAd1 = tgt.getElementsByTagName("br");
var showAd2 = tgt.getElementsByTagName("br");
var showAd3 = tgt.getElementsByTagName("br");
if (showAd1.length > 0) { insertAfter(midAd1, showAd1[7]); }
if (showAd2.length > 0) { insertAfter(midAd1, showAd2[7]); }
if (showAd3.length > 0) { insertAfter(midAd3, showAd3[7]); }
if (showAd1.length > 0) { insertAfter(midAd2, showAd1[17]); }
if (showAd2.length > 0) { insertAfter(midAd2, showAd2[17]); };

function insertAfter(tbh, tgt) { var prt = tgt.parentNode; if (prt.lastChild == tgt) { prt.appendChild(tbh); } else { prt.insertBefore(tbh, tgt.nextSibling); } }
var tgt = document.getElementById("post-content");
var adpic = document.getElementById("post-topads");
var pic01 = tgt.getElementsByClassName("adsTop-article");
if (pic01.length > 0) { insertAfter(adpic, pic01[0]); };
var adpic2 = document.getElementById("post-bottomads");
var pic02 = tgt.getElementsByClassName("adsBottom-article");
if (pic02.length > 0) { insertAfter(adpic2, pic02[0]); };

function insertAfter(tbh, tgt) { var prt = tgt.parentNode; if (prt.lastChild == tgt) { prt.appendChild(tbh); } else { prt.insertBefore(tbh, tgt.nextSibling); } }
var tgt = document.getElementById("related-post");
var adpic4 = document.getElementById("post-matchedads");
var pic04 = tgt.getElementsByClassName("related-ads");
if (pic04.length > 0) { insertAfter(adpic4, pic04[0]); };
$(document).ready(function() {
    if (localStorage.theme) { $('#wrapper').addClass(localStorage.theme); } else { $('#wrapper').addClass('light-mode'); }
    $("#theme-toggler").click(function() {
        if ($('#wrapper').hasClass('light-mode')) {
            $('#wrapper').removeClass('light-mode').addClass('night-mode');
            localStorage.theme = 'night-mode';
        } else {
            $('#wrapper').removeClass('night-mode').addClass('light-mode');
            localStorage.theme = 'light-mode';
        }
    });
});
$(document).ready(function() {
    if (localStorage.layout) { $('#layout-mode').addClass(localStorage.layout); } else { $('#layout-mode').addClass('list-mode'); }
    $("#switchPostLayout").click(function() {
        if ($('#layout-mode').hasClass('list-mode')) {
            $('#layout-mode').removeClass('list-mode').addClass('grid-mode');
            localStorage.layout = 'grid-mode';
        } else {
            $('#layout-mode').removeClass('grid-mode').addClass('list-mode');
            localStorage.layout = 'list-mode';
        }
    });
});

$(window).on("load", function(e) {
    localStorage.loaded = "yes";
    if ($('#preloader').length > 0) {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    }
});

if (localStorage.loaded == "yes") {
    $('#preloader').remove();
    //or any other method of not showing the spinner
}
