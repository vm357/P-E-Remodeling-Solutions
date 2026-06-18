// icons.jsx — Lucide-style line icons (stroke = currentColor). Exposed as window.RIcon.
(function () {
  const P = (d, key) => React.createElement("path", { d, key });
  const C = (cx, cy, r, key) => React.createElement("circle", { cx, cy, r, key });
  const L = (x1, y1, x2, y2, key) => React.createElement("line", { x1, y1, x2, y2, key });

  const SHAPES = {
    // ---- utility
    check: () => [P("M20 6 9 17l-5-5", "a")],
    "arrow-right": () => [L(5, 12, 19, 12, "a"), P("m12 5 7 7-7 7", "b")],
    "arrow-up-right": () => [P("M7 7h10v10", "a"), L(7, 17, 17, 7, "b")],
    phone: () => [P("M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z", "a")],
    mail: () => [React.createElement("rect", { x: 2, y: 4, width: 20, height: 16, rx: 2, key: "a" }), P("m22 6-10 7L2 6", "b")],
    "map-pin": () => [P("M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0z", "a"), C(12, 10, 3, "b")],
    clock: () => [C(12, 12, 10, "a"), P("M12 6v6l4 2", "b")],
    star: () => [React.createElement("polygon", { key: "a", points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" })],
    menu: () => [L(3, 6, 21, 6, "a"), L(3, 12, 21, 12, "b"), L(3, 18, 21, 18, "c")],
    x: () => [L(18, 6, 6, 18, "a"), L(6, 6, 18, 18, "b")],
    quote: () => [P("M3 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", "a"), P("M15 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", "b")],
    facebook: () => [P("M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", "a")],
    instagram: () => [React.createElement("rect", { x: 2, y: 2, width: 20, height: 20, rx: 5, key: "a" }), C(12, 12, 4, "b"), L(17.5, 6.5, 17.51, 6.5, "c")],

    // ---- why-us
    award: () => [C(12, 8, 6, "a"), P("M15.48 12.89 17 22l-5-3-5 3 1.52-9.11", "b")],
    "message-circle": () => [P("M7.9 20A9 9 0 1 0 4 16.1L2 22z", "a")],
    pencil: () => [P("M12 20h9", "a"), P("M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z", "b")],
    "clipboard-check": () => [React.createElement("rect", { x: 8, y: 2, width: 8, height: 4, rx: 1, key: "a" }), P("M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2", "b"), P("m9 14 2 2 4-4", "c")],

    // ---- trust
    "shield-check": () => [P("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "a"), P("m9 12 2 2 4-4", "b")],
    users: () => [P("M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "a"), C(9, 7, 4, "b"), P("M22 21v-2a4 4 0 0 0-3-3.87", "c"), P("M16 3.13a4 4 0 0 1 0 7.75", "d")],
    gem: () => [P("M6 3h12l4 6-10 13L2 9z", "a"), P("M11 3 8 9l4 13 4-13-3-6", "b"), L(2, 9, 22, 9, "c")],
    ruler: () => [P("M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0z", "a"), L(14.5, 12.5, 16, 11, "b"), L(11.5, 9.5, 13, 8, "c"), L(8.5, 6.5, 10, 5, "d")],
    heart: () => [P("M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z", "a")],

    // ---- services
    kitchen: () => [React.createElement("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2, key: "a" }), C(8.5, 8.5, 2, "b"), C(15.5, 8.5, 2, "c"), C(8.5, 15.5, 2, "d"), C(15.5, 15.5, 2, "e")],
    bathroom: () => [P("M5 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2", "a"), L(4, 12, 20, 12, "b"), P("M5 12v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3", "c"), L(7, 18, 6, 21, "d"), L(17, 18, 18, 21, "e")],
    basement: () => [React.createElement("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2, key: "a" }), L(3, 9, 21, 9, "b"), L(9, 21, 9, 9, "c")],
    flooring: () => [React.createElement("rect", { x: 3, y: 4, width: 18, height: 16, rx: 1, key: "a" }), L(3, 9.3, 21, 9.3, "b"), L(3, 14.6, 21, 14.6, "c"), L(9, 4, 9, 9.3, "d"), L(15, 9.3, 15, 14.6, "e"), L(9, 14.6, 9, 20, "f")],
    painting: () => [P("M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08", "a"), P("M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z", "b")],
    lighting: () => [P("M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5", "a"), L(9, 18, 15, 18, "b"), L(10, 22, 14, 22, "c")],
    patio: () => [P("M2 12a10 10 0 0 1 20 0z", "a"), L(12, 12, 12, 20, "b"), P("M12 20a2 2 0 0 0 4 0", "c"), L(12, 2, 12, 3, "d")],
    outdoorkitchen: () => [P("M4 11a8 5 0 0 1 16 0z", "a"), L(12, 7, 12, 5, "b"), L(8, 12, 6, 20, "c"), L(16, 12, 18, 20, "d"), L(10, 14, 10, 16, "e"), L(14, 14, 14, 16, "f")],
    fencing: () => [P("M6 4 5 6v14", "a"), P("M12 4l-1 2v14", "b"), P("M18 4l-1 2v14", "c"), L(3, 10, 21, 10, "d"), L(3, 15, 21, 15, "e"), L(4, 20, 20, 20, "f")],
    sunroom: () => [C(12, 12, 4, "a"), L(12, 2, 12, 4, "b"), L(12, 20, 12, 22, "c"), L(4.9, 4.9, 6.3, 6.3, "d"), L(17.7, 17.7, 19.1, 19.1, "e"), L(2, 12, 4, 12, "f"), L(20, 12, 22, 12, "g"), L(6.3, 17.7, 4.9, 19.1, "h"), L(19.1, 4.9, 17.7, 6.3, "i")],
    fireplace: () => [P("M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z", "a")],
    sparkle: () => [P("M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17l-1.9-5.1L4.5 10l5.6-1.4z", "a")],
  };

  function RIcon({ name, size = 24, stroke = 1.75, fill = "none", style, ...rest }) {
    const make = SHAPES[name];
    return React.createElement(
      "svg",
      {
        width: size, height: size, viewBox: "0 0 24 24", fill,
        stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round",
        style: { display: "block", flexShrink: 0, ...style }, "aria-hidden": true, ...rest,
      },
      make ? make() : null
    );
  }

  // Filled star for ratings
  function RStar({ size = 16, color = "var(--accent)" }) {
    return React.createElement(
      "svg",
      { width: size, height: size, viewBox: "0 0 24 24", fill: color, stroke: "none", style: { display: "block" }, "aria-hidden": true },
      React.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" })
    );
  }

  window.RIcon = RIcon;
  window.RStar = RStar;
})();
