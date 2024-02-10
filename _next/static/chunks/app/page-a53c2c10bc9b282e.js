self.webpackChunk_N_E = self.webpackChunk_N_E || [];
self.webpackChunk_N_E.push([[931], {
    5286: function (e, t, s) {
        Promise.resolve().then(s.bind(s, 8836))
    },
    8836: function (e, t, s) {
        "use strict";
        s.r(t), s.d(t, {
            default: function () {
                return l
            }
        });
        var r = s(3827),
            n = s(4090);

        function l() {
            let [e, t] = (0, n.useState)(0),
                [s, l] = (0, n.useState)(!1);
            return (0, r.jsx)("div", {
                className: "flex flex-col items-center justify-center h-screen -mt-16",
                children: s ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("img", {
                            src: "/bear-kiss-bear-kisses.gif"
                        }),
                        (0, r.jsxs)("div", {
                            className: "text-4xl font-bold my-4 text-center",
                            children: [
                                "Yayyy!!!",
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)("a", {
                                    href: "https://www.facebook.com/messages/t/100008371489359",
                                    rel: "noopener noreferrer",
                                    children: "Click vô đây đii, nếu em thích thì nhắn cho anh nào :3"
                                })
                            ]
                        })
                    ]
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("img", {
                            className: "h-[200px]",
                            src: "/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                        }),
                        (0, r.jsx)("h1", {
                            className: "text-4xl my-4 text-center",
                            children: "Đồng ý đi chơi Valentine với anh nhớ?"
                        }),
                        (0, r.jsxs)("div", {
                            className: "flex flex-wrap flex-col md:flex-row gap-4 items-center justify-center",
                            children: [
                                (0, r.jsx)("button", {
                                    className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
                                    style: {
                                        fontSize: 20 * e + 16
                                    },
                                    onClick: () => l(!0),
                                    children: "Uci"
                                }),
                                (0, r.jsx)("button", {
                                    onClick: () => {
                                        t(e + 1)
                                    },
                                    className: " bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                                    children: 0 === e ? "Không" : (() => {
                                        let t = ["Không", "Chắc chứ?", "Thực sự chắc chứ?", "Nghĩ lại đi màaa???", "Sẽ vui lắm í?", "Nghĩ lại điiii 🥺", "Nếu em nói không anh sẽ buồn lắm í", "Anh sẽ buồn lắm í", "Anh sẽ buồn lắm luôn í", "Anh sẽ rất rất buồn í", "Đc rồi, anh không hỏi lại nữa...", "Đừng đùa nữa mà, nói có đii", "Thiệc sự rất rất rất buồn í", "Khóc :("];
                                        return t[e % t.length]
                                    })()
                                })
                            ]
                        })
                    ]
                })
            })
        }
    }
}, function (e) {
    e.O(0, [971, 69, 744], function () {
        return e(e.s = 5286)
    }), _N_E = e.O()
}]);
