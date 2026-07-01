import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CUSfx1ak.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-CE4S6lgC.png";
var m1_default = "/assets/m1-DBzOcWJF.jpg";
var m2_default = "/assets/m2-B0Mp6XYP.jpg";
var m3_default = "/assets/m3-CyHQmmRQ.jpg";
var m4_default = "/assets/m4-DpY5huP7.jpg";
var m5_default = "/assets/m5-BlLpBQwi.jpg";
var hero_ballroom_default = "/assets/hero-ballroom-w1q7PIsf.jpg";
var tablescape_default = "/assets/tablescape-DyvtTqZm.jpg";
var champagne_default = "/assets/champagne-BDRkTvP1.jpg";
var wedding_default = "/assets/wedding-U639AM9y.jpg";
var NAV = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Gallery",
		href: "#gallery"
	},
	{
		label: "Process",
		href: "#process"
	},
	{
		label: "Testimonials",
		href: "#testimonials"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal, .image-reveal");
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("in");
					io.unobserve(e.target);
				}
			});
		}, { threshold: .14 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? "bg-[color:var(--burgundy-deep)]/92 backdrop-blur-xl border-b border-[color:var(--gold)]/15 py-3" : "bg-transparent py-5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-3 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Marron Events and Ushering Agency",
						className: `transition-all duration-700 ${scrolled ? "h-11" : "h-14"} w-auto`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:block leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-[color:var(--gold)] text-lg tracking-[0.28em]",
							children: "MARRON"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[9px] tracking-[0.32em] text-[color:var(--champagne)]/70 uppercase",
							children: "Events & Ushering"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-9",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "text-[11px] tracking-[0.28em] uppercase text-[color:var(--ivory)]/80 hover:text-[color:var(--gold)] transition-colors duration-500",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "hidden md:inline-flex btn-gold !py-3 !px-6",
						children: "Book Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(!open),
						className: "lg:hidden text-[color:var(--gold)] p-2",
						"aria-label": "Menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-6 flex flex-col gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px bg-current transition-all ${open ? "rotate-45 translate-y-[6px]" : ""}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px bg-current transition-all ${open ? "opacity-0" : ""}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-[6px]" : ""}` })
							]
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `lg:hidden overflow-hidden transition-all duration-500 bg-[color:var(--burgundy-deep)]/98 backdrop-blur-xl ${open ? "max-h-[520px] border-t border-[color:var(--gold)]/15" : "max-h-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe py-8 flex flex-col gap-5",
				children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "text-sm tracking-[0.3em] uppercase text-[color:var(--ivory)]/85 hover:text-[color:var(--gold)]",
					children: n.label
				}, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "btn-gold mt-2 self-start",
					children: "Book Now"
				})]
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative min-h-[100svh] flex items-center overflow-hidden bg-[color:var(--burgundy-deep)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_ballroom_default,
						alt: "",
						className: "w-full h-full object-cover opacity-55",
						fetchPriority: "high"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "linear-gradient(180deg, rgba(26,4,9,0.55) 0%, rgba(26,4,9,0.35) 40%, rgba(26,4,9,0.85) 100%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-40 mix-blend-overlay",
						style: { backgroundImage: "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.18), transparent 40%)" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-28 left-6 md:left-12 hidden md:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-16 h-px bg-[color:var(--gold)]/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-16 bg-[color:var(--gold)]/60" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-28 right-6 md:right-12 hidden md:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-16 h-px bg-[color:var(--gold)]/60 ml-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-16 bg-[color:var(--gold)]/60 ml-auto" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-luxe relative z-10 pt-32 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal flex items-center gap-4 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-[color:var(--gold)]",
								children: "Luxury Event Staffing · Est. Nigeria"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "reveal font-serif text-[color:var(--ivory)] text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.98] font-light",
							children: [
								"Luxury Event Staffing",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"for ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic text-[color:var(--gold)] font-light",
									children: "Exceptional"
								}),
								" Experiences."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reveal mt-10 max-w-2xl text-[color:var(--ivory)]/75 text-lg leading-relaxed font-light",
							children: "MARRON Events and Ushering Agency provides professionally trained ushers, hostesses, and event staff who represent your brand with elegance, confidence, and the unwavering excellence your guests deserve."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal mt-12 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "btn-gold",
								children: "Book Consultation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "btn-outline-gold",
								children: "Our Services"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#about",
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[color:var(--gold)]/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-[10px]",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative w-px h-14 bg-[color:var(--gold)]/25 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute inset-x-0 top-0 h-4 bg-[color:var(--gold)]",
						style: { animation: "scroll-hint 2.2s ease-in-out infinite" }
					})
				})]
			})
		]
	});
}
function Marquee() {
	const items = [
		"Luxury Weddings",
		"Corporate Galas",
		"Embassy Events",
		"Brand Activations",
		"VIP Receptions",
		"Fashion Shows",
		"Award Ceremonies"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-[color:var(--burgundy)] border-y border-[color:var(--gold)]/20 overflow-hidden py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-16 whitespace-nowrap",
			style: {
				animation: "marquee 40s linear infinite",
				width: "max-content"
			},
			children: [...items, ...items].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-serif italic text-[color:var(--gold)]/90 text-xl md:text-2xl tracking-wide",
					children: it
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]/50" })]
			}, i))
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-28 md:py-40 bg-[color:var(--ivory)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe grid lg:grid-cols-12 gap-14 lg:gap-20 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "image-reveal relative aspect-[3/4] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: m3_default,
							alt: "Marron ushers",
							className: "w-full h-full object-cover",
							loading: "lazy"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "image-reveal absolute -bottom-10 -right-4 md:-right-10 w-2/3 aspect-[4/5] overflow-hidden border-8 border-[color:var(--ivory)] shadow-[0_30px_60px_-20px_rgba(44,8,19,0.35)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: tablescape_default,
							alt: "",
							className: "w-full h-full object-cover",
							loading: "lazy"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -top-6 -left-6 hidden md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-px bg-[color:var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-24 bg-[color:var(--gold)]" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal flex items-center gap-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-[color:var(--burgundy)]",
							children: "About the House"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "reveal font-serif text-[color:var(--burgundy)] text-4xl md:text-6xl leading-[1.02] font-light",
						children: [
							"An atelier of hospitality,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-[color:var(--gold-soft)]",
								children: " quietly obsessed"
							}),
							" with the details others overlook."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal mt-10 space-y-6 text-[color:var(--charcoal)]/75 text-lg leading-relaxed font-light max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "MARRON is a boutique event staffing house serving discerning hosts, luxury wedding planners, embassies and international brands across Nigeria. Our ushers and hostesses are selected, trained and mentored to embody grace under every kind of spotlight." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We believe presence is a discipline. From the first handshake at the door to the final farewell of the evening, every moment your guests spend with our team becomes an expression of the standard you set." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reveal mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[color:var(--gold)]/30 pt-10",
						children: [
							{
								n: "100+",
								l: "Luxury Events"
							},
							{
								n: "500+",
								l: "Professional Staff"
							},
							{
								n: "98%",
								l: "Client Satisfaction"
							},
							{
								n: "12+",
								l: "Years Refined"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-[color:var(--burgundy)] text-4xl md:text-5xl font-light",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-[10px] tracking-[0.3em] uppercase text-[color:var(--charcoal)]/60",
							children: s.l
						})] }, s.l))
					})
				]
			})]
		})
	});
}
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-28 md:py-40 bg-[color:var(--burgundy-deep)] text-[color:var(--ivory)] relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-30 pointer-events-none",
			style: { backgroundImage: "radial-gradient(circle at 15% 15%, rgba(212,175,55,0.18), transparent 40%), radial-gradient(circle at 85% 85%, rgba(212,175,55,0.12), transparent 45%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal flex items-center gap-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-[color:var(--gold)]",
						children: "Why Marron"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "reveal font-serif text-4xl md:text-6xl font-light leading-[1.05]",
					children: [
						"Six principles that",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-[color:var(--gold)]",
							children: " shape"
						}),
						" every event we serve."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--gold)]/15",
				children: [
					{
						n: "01",
						t: "Professionally Trained Staff",
						d: "Every member of the Marron team completes an intensive hospitality curriculum."
					},
					{
						n: "02",
						t: "Elegant Presentation",
						d: "Tailored uniforms, refined posture, immaculate grooming — presence as a language."
					},
					{
						n: "03",
						t: "Exceptional Customer Service",
						d: "Warm, discreet, five-star service standards inspired by global luxury hospitality."
					},
					{
						n: "04",
						t: "Reliable Coordination",
						d: "Punctual, prepared and led by a floor captain who anticipates every scenario."
					},
					{
						n: "05",
						t: "Corporate Grade Standard",
						d: "Trusted by embassies, multinationals and Fortune-class organisations."
					},
					{
						n: "06",
						t: "White Glove Experience",
						d: "From arrival to farewell, we curate the quiet luxury your guests will remember."
					}
				].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal group bg-[color:var(--burgundy-deep)] p-10 md:p-12 transition-all duration-700 hover:bg-[color:var(--burgundy)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-[color:var(--gold)]/70 text-2xl",
								children: it.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-[color:var(--gold)]/40 group-hover:w-20 transition-all duration-700" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl md:text-[26px] leading-snug mb-4 text-[color:var(--ivory)]",
							children: it.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[color:var(--ivory)]/65 font-light leading-relaxed",
							children: it.d
						})
					]
				}, it.n))
			})]
		})]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-28 md:py-40 bg-[color:var(--ivory)] relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal flex items-center gap-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-[color:var(--burgundy)]",
							children: "The Services"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "reveal font-serif text-[color:var(--burgundy)] text-4xl md:text-6xl leading-[1.03] font-light",
						children: [
							"A complete ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-[color:var(--gold-soft)]",
								children: "discipline"
							}),
							" of front-of-house."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reveal text-[color:var(--charcoal)]/70 max-w-md font-light leading-relaxed",
					children: "Curated staffing solutions for hosts and planners who understand that atmosphere is engineered, one refined interaction at a time."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--gold)]/25",
				children: [
					{
						t: "Professional Ushers",
						d: "Composed, articulate and immaculately presented ushers for arrivals, seating and flow."
					},
					{
						t: "Professional Hostesses",
						d: "Warm, poised hostesses trained in the language of luxury reception."
					},
					{
						t: "Corporate Event Staffing",
						d: "Boardroom-ready teams for conferences, launches and executive gatherings."
					},
					{
						t: "Wedding Staffing",
						d: "Discreet, romantic service that lets you savour every second of the day."
					},
					{
						t: "VIP Guest Management",
						d: "Private, considered handling for principals, dignitaries and public figures."
					},
					{
						t: "Conference Staffing",
						d: "Registration, wayfinding, floor management — end-to-end conference execution."
					},
					{
						t: "Brand Activation Staff",
						d: "On-message ambassadors who translate your brand into human presence."
					},
					{
						t: "Event Coordination Support",
						d: "Floor captains and coordinators who partner seamlessly with your planner."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal group relative bg-[color:var(--ivory)] p-10 min-h-[280px] flex flex-col justify-between transition-all duration-700 hover:bg-[color:var(--burgundy)] hover:text-[color:var(--ivory)] cursor-pointer overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-[color:var(--gold-soft)] group-hover:text-[color:var(--gold)] text-sm tracking-[0.3em]",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-6 h-6 rounded-full border border-current opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500",
							children: "→"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-2xl leading-tight mb-3",
						children: s.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-light leading-relaxed opacity-70 group-hover:opacity-90 transition-opacity",
						children: s.d
					})] })]
				}, s.t))
			})]
		})
	});
}
function Gallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "py-28 md:py-40 bg-[color:var(--charcoal)] text-[color:var(--ivory)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal flex items-center gap-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-[color:var(--gold)]",
						children: "The Portfolio"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "reveal font-serif text-4xl md:text-6xl font-light leading-[1.03] max-w-2xl",
					children: [
						"Moments from evenings ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-[color:var(--gold)]",
							children: "quietly perfected"
						}),
						"."
					]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3",
				children: [
					{
						src: m1_default,
						cat: "Corporate Lineup",
						size: "col-span-2 row-span-2"
					},
					{
						src: m4_default,
						cat: "Hostess Duo",
						size: ""
					},
					{
						src: m3_default,
						cat: "Elegance",
						size: ""
					},
					{
						src: wedding_default,
						cat: "Wedding Reception",
						size: "col-span-2"
					},
					{
						src: m5_default,
						cat: "Reception Detail",
						size: ""
					},
					{
						src: m2_default,
						cat: "Team of Twelve",
						size: "col-span-2"
					},
					{
						src: champagne_default,
						cat: "VIP Toast",
						size: ""
					},
					{
						src: tablescape_default,
						cat: "Dining Detail",
						size: ""
					}
				].map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActive(img.src),
					className: `reveal group relative overflow-hidden ${img.size}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img.src,
							alt: img.cat,
							loading: "lazy",
							className: "w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--burgundy-deep)]/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-700",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-[color:var(--gold)]",
								children: img.cat
							})
						})
					]
				}, i))
			})]
		}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[80] bg-[color:var(--burgundy-deep)]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in",
			onClick: () => setActive(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "absolute top-6 right-6 text-[color:var(--gold)] text-sm tracking-[0.3em] uppercase",
				onClick: () => setActive(null),
				children: "Close ×"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: active,
				alt: "",
				className: "max-w-full max-h-full object-contain shadow-2xl"
			})]
		})]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "py-28 md:py-40 bg-[color:var(--ivory)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal flex items-center justify-center gap-4 mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-[color:var(--burgundy)]",
							children: "Client Voices"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "reveal font-serif text-[color:var(--burgundy)] text-4xl md:text-6xl font-light leading-[1.02]",
					children: [
						"Trusted by hosts who ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-[color:var(--gold-soft)]",
							children: "notice everything"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-8",
				children: [
					{
						q: "Marron transformed our embassy reception. Their team read the room like seasoned diplomats — invisible when they needed to be, gracious at every touchpoint.",
						a: "Head of Protocol",
						r: "Diplomatic Mission, Abuja"
					},
					{
						q: "I plan luxury weddings across three continents. Marron is now the only agency I trust with my Nigerian celebrations. Their poise is genuinely rare.",
						a: "Adaeze O.",
						r: "Luxury Wedding Planner"
					},
					{
						q: "From consultation to the final farewell, every detail was handled with a quiet excellence. Our shareholders felt looked after in a way that lingers.",
						a: "Executive Director",
						r: "Financial Group, Lagos"
					}
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "reveal relative bg-white p-10 md:p-12 border border-[color:var(--gold)]/25 shadow-[0_20px_60px_-30px_rgba(44,8,19,0.25)] flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[color:var(--gold)] text-lg tracking-[0.4em] mb-6",
							children: "★ ★ ★ ★ ★"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-serif text-xl md:text-[22px] leading-[1.4] text-[color:var(--charcoal)]/85 italic font-light mb-8 flex-1",
							children: [
								"\"",
								t.q,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "pt-6 border-t border-[color:var(--gold)]/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-[color:var(--burgundy)] text-lg",
								children: t.a
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] tracking-[0.3em] uppercase text-[color:var(--charcoal)]/55 mt-1",
								children: t.r
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-4 left-10 font-serif text-6xl text-[color:var(--gold)] leading-none",
							children: "\""
						})
					]
				}, i))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "py-28 md:py-40 bg-[color:var(--burgundy)] text-[color:var(--ivory)] relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal flex items-center gap-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-[color:var(--gold)]",
						children: "The Process"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "reveal font-serif text-4xl md:text-6xl font-light leading-[1.03]",
					children: [
						"Five deliberate steps toward an",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-[color:var(--gold)]",
							children: " effortless"
						}),
						" evening."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute top-16 left-0 right-0 h-px bg-[color:var(--gold)]/25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-5 gap-10 md:gap-6",
					children: [
						{
							n: "01",
							t: "Contact Us",
							d: "Share your vision, your guests and the tone of your evening."
						},
						{
							n: "02",
							t: "Consultation",
							d: "We design a staffing brief around your event's personality."
						},
						{
							n: "03",
							t: "Staff Selection",
							d: "Hand-picked ushers and hostesses matched to your standard."
						},
						{
							n: "04",
							t: "Event Execution",
							d: "Rehearsed arrivals, seamless flow, invisible coordination."
						},
						{
							n: "05",
							t: "Exceptional Experience",
							d: "Your guests leave feeling considered, cared for and celebrated."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute top-[58px] left-0 w-3 h-3 rounded-full bg-[color:var(--gold)] shadow-[0_0_0_6px_rgba(212,175,55,0.15)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-[color:var(--gold)] text-6xl md:text-7xl font-light leading-none mb-8",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl mb-3 leading-tight",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[color:var(--ivory)]/70 text-sm font-light leading-relaxed",
								children: s.d
							})
						]
					}, s.n))
				})]
			})]
		})
	});
}
function CtaBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-28 md:py-40 overflow-hidden bg-[color:var(--burgundy-deep)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: champagne_default,
				alt: "",
				className: "w-full h-full object-cover opacity-40",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[color:var(--burgundy-deep)]/80 via-[color:var(--burgundy-deep)]/70 to-[color:var(--burgundy-deep)]/95" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe relative text-center max-w-4xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal flex items-center justify-center gap-4 mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-[color:var(--gold)]",
							children: "Reserve Your Date"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "reveal font-serif text-[color:var(--ivory)] text-4xl md:text-7xl font-light leading-[1.02]",
					children: [
						"Let us ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-[color:var(--gold)]",
							children: "elevate"
						}),
						" your next event."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "reveal mt-8 text-[color:var(--ivory)]/70 max-w-xl mx-auto font-light text-lg",
					children: "Availability for signature events is limited. Begin the conversation early to secure the Marron team for your date."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal mt-12 flex flex-wrap gap-4 justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "btn-gold",
						children: "Book Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+2348127936751",
						className: "btn-outline-gold",
						children: "Call +234 812 793 6751"
					})]
				})
			]
		})]
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-28 md:py-40 bg-[color:var(--ivory)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe grid lg:grid-cols-12 gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal flex items-center gap-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-[color:var(--burgundy)]",
							children: "Enquiries"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "reveal font-serif text-[color:var(--burgundy)] text-4xl md:text-6xl font-light leading-[1.03]",
						children: [
							"Begin the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-[color:var(--gold-soft)]",
								children: "conversation"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal mt-8 text-[color:var(--charcoal)]/70 font-light leading-relaxed max-w-md",
						children: "Share a few details about your event and our concierge will respond within one business day with availability and next steps."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal mt-14 space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow text-[color:var(--gold-soft)] mb-2",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+2348127936751",
								className: "font-serif text-2xl text-[color:var(--burgundy)] hover:text-[color:var(--gold-soft)] transition-colors",
								children: "+234 812 793 6751"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow text-[color:var(--gold-soft)] mb-2",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:marroneventsandusheringagency@gmail.com",
								className: "font-serif text-lg md:text-xl text-[color:var(--burgundy)] hover:text-[color:var(--gold-soft)] transition-colors break-all",
								children: "marroneventsandusheringagency@gmail.com"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow text-[color:var(--gold-soft)] mb-2",
								children: "Social"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://instagram.com/marroneventsandushering",
									target: "_blank",
									rel: "noopener",
									className: "font-serif text-xl text-[color:var(--burgundy)] hover:text-[color:var(--gold-soft)] transition-colors",
									children: "Instagram — @marroneventsandushering"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "font-serif text-xl text-[color:var(--burgundy)] hover:text-[color:var(--gold-soft)] transition-colors",
									children: "Facebook — Marron Events And Ushering Agency"
								})]
							})] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
						setTimeout(() => setSent(false), 4500);
						e.target.reset();
					},
					className: "reveal bg-white border border-[color:var(--gold)]/25 p-8 md:p-12 shadow-[0_30px_80px_-40px_rgba(44,8,19,0.35)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid md:grid-cols-2 gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full Name",
									name: "name",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone Number",
									name: "phone",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									name: "email",
									type: "email",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Event Date",
									name: "date",
									type: "date",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "md:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Event Type",
										name: "eventType",
										placeholder: "Wedding · Corporate · Gala · Brand Activation"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "md:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "eyebrow text-[color:var(--charcoal)]/60 block mb-3",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										rows: 5,
										className: "w-full bg-transparent border-b border-[color:var(--charcoal)]/25 focus:border-[color:var(--gold)] outline-none py-3 font-light text-[color:var(--charcoal)] resize-none transition-colors",
										placeholder: "Tell us about your evening..."
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-dark mt-10 w-full md:w-auto",
							children: "Send Enquiry"
						}),
						sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[color:var(--gold-soft)] text-sm tracking-widest uppercase",
							children: "Thank you — your enquiry has been received."
						})
					]
				})
			})]
		})
	});
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "eyebrow text-[color:var(--charcoal)]/60 block mb-3",
		children: [
			label,
			" ",
			required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[color:var(--gold-soft)]",
				children: "*"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		placeholder,
		className: "w-full bg-transparent border-b border-[color:var(--charcoal)]/25 focus:border-[color:var(--gold)] outline-none py-3 font-light text-[color:var(--charcoal)] placeholder:text-[color:var(--charcoal)]/30 transition-colors"
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-[color:var(--burgundy-deep)] text-[color:var(--ivory)] pt-24 pb-10 border-t border-[color:var(--gold)]/15",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-12 gap-14 pb-16 border-b border-[color:var(--gold)]/15",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Marron",
								className: "h-24 w-auto mb-6"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif italic text-[color:var(--gold)] text-xl mb-4",
								children: "Where elegance meets service."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[color:var(--ivory)]/60 max-w-sm font-light leading-relaxed",
								children: "MARRON Events and Ushering Agency — Nigeria's boutique house of luxury event staffing, hostesses and coordinated front-of-house."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow text-[color:var(--gold)] mb-6",
							children: "Navigate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 font-light",
							children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: n.href,
								className: "text-[color:var(--ivory)]/70 hover:text-[color:var(--gold)] transition-colors",
								children: n.label
							}) }, n.href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow text-[color:var(--gold)] mb-6",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 font-light text-[color:var(--ivory)]/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+2348127936751",
									className: "hover:text-[color:var(--gold)]",
									children: "+234 812 793 6751"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:marroneventsandusheringagency@gmail.com",
									className: "hover:text-[color:var(--gold)] break-all",
									children: "marroneventsandusheringagency@gmail.com"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://instagram.com/marroneventsandushering",
									className: "hover:text-[color:var(--gold)]",
									children: "Instagram · @marroneventsandushering"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-[color:var(--gold)]",
									children: "Facebook · Marron Events And Ushering"
								}) })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs tracking-[0.28em] uppercase text-[color:var(--ivory)]/45",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Marron Events and Ushering Agency"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Crafted with quiet precision" })]
			})]
		})
	});
}
function HomePage() {
	useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[color:var(--ivory)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { HomePage as component };
