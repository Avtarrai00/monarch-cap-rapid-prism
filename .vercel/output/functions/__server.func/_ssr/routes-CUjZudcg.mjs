import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime, r as Slot, t as Label$1 } from "../_libs/@radix-ui/react-label+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as string, i as object, t as email } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CUjZudcg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		id: "about",
		"aria-labelledby": "about-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell about-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "02 — About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "about-title",
					className: "sr-only",
					children: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pull",
					children: "I prefer work you can hold — a rate, a cloth, a page."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "about-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I grew up around workshops in Ludhiana, where a thing is judged by whether it works in the hand. That is still the test." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I design and build product interfaces, and I take on editorial and identity work when the material is interesting — grain markets, handloom, print, internal tools. Most projects start with the workflow, not a moodboard." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The studio is independent. I partner with small teams and stay through the build." })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "fact-list mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Place" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Ludhiana, Punjab" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Practice" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Independent since 2019" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Focus" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Product, brand, editorial, systems" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Now" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Open for select commissions" })] })
				]
			})] })]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("press inline-flex min-h-12 items-center justify-center rounded-sm px-5 text-sm font-medium no-underline", {
	variants: { variant: {
		primary: "bg-ink text-paper hover:bg-steel",
		secondary: "border border-line bg-transparent text-ink hover:bg-cream",
		inverse: "bg-paper text-ink hover:bg-cream"
	} },
	defaultVariants: { variant: "primary" }
});
function Button({ className, variant, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({ variant }), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("field", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
		className: cn("field-label", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("field field-area", className),
		...props
	});
}
var schema = object({
	name: string().trim().min(2, "Add your name."),
	email: email("Use a valid email so a reply can find you."),
	message: string().trim().min(12, "A few more words helps — what are you making?")
});
var empty = {
	name: "",
	email: "",
	message: ""
};
function Contact() {
	const [values, setValues] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	function update(key, value) {
		setValues((current) => ({
			...current,
			[key]: value
		}));
		setErrors((current) => ({
			...current,
			[key]: void 0
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		const result = schema.safeParse(values);
		if (!result.success) {
			const next = {};
			for (const issue of result.error.issues) {
				const key = issue.path[0];
				if ((key === "name" || key === "email" || key === "message") && !next[key]) next[key] = issue.message;
			}
			setErrors(next);
			return;
		}
		setReady(result.data);
		setCopied(false);
	}
	async function copyNote() {
		if (!ready) return;
		const text = `${ready.name}\n${ready.email}\n\n${ready.message}`;
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	const composed = ready ? `${ready.name}\n${ready.email}\n\n${ready.message}` : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		id: "contact",
		"aria-labelledby": "contact-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell contact-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "04 — Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "contact-title",
					className: "section-title mt-3",
					children: "Tell me what you are making."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "contact-lead",
					children: "A short note is enough: the work, the timing, and how you like to collaborate. I read everything and reply within two working days."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "form-card",
				children: ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "note-ready",
					role: "status",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Note ready." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-ink-soft",
							children: "Nothing was uploaded. Copy it into your mail when you want to send it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "composed",
							children: composed
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								onClick: () => void copyNote(),
								children: copied ? "Copied" : "Copy note"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "secondary",
								onClick: () => {
									setReady(null);
									setValues(empty);
									setCopied(false);
								},
								children: "Write another"
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					noValidate: true,
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-fields",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "name",
										children: "Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										name: "name",
										autoComplete: "name",
										value: values.name,
										"aria-invalid": errors.name ? true : void 0,
										"aria-describedby": errors.name ? "name-error" : void 0,
										onChange: (event) => update("name", event.target.value)
									}),
									errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "name-error",
										className: "field-error",
										role: "alert",
										children: errors.name
									}) : null
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										name: "email",
										type: "email",
										autoComplete: "email",
										inputMode: "email",
										value: values.email,
										"aria-invalid": errors.email ? true : void 0,
										"aria-describedby": errors.email ? "email-error" : void 0,
										onChange: (event) => update("email", event.target.value)
									}),
									errors.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "email-error",
										className: "field-error",
										role: "alert",
										children: errors.email
									}) : null
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "message",
										children: "Note"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "message",
										name: "message",
										rows: 5,
										value: values.message,
										placeholder: "The project, the timing, and what you need.",
										"aria-invalid": errors.message ? true : void 0,
										"aria-describedby": errors.message ? "message-error" : void 0,
										onChange: (event) => update("message", event.target.value)
									}),
									errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "message-error",
										className: "field-error",
										role: "alert",
										children: errors.message
									}) : null
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "form-actions",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "Prepare note"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "form-note",
							children: "Your note stays in this browser. It is not stored or sent."
						})
					]
				})
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "hero",
		"aria-labelledby": "hero-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-kicker kicker enter",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Portfolio" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vol. 08" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ludhiana" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						id: "hero-title",
						className: "display enter enter-2",
						children: "Design for trade, type, and tools."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-dek enter enter-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm Avtar Singh, a designer and developer working from Ludhiana. The practice is small on purpose: interfaces for markets, print, and the tools people already trust." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#work",
									children: "See the work"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									children: "Write a note"
								})
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "hero-facts",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Based in Ludhiana" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Select commissions" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "03" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Design and engineering" })] })
					]
				})
			]
		})
	});
}
var links$1 = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#practice",
		label: "Practice"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell footer-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "footer-name",
				children: "Avtar Singh"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "footer-dek",
				children: "Designer and developer. A small practice for interfaces that stay out of the way."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "footer-links",
					"aria-label": "Footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "footer-label",
						children: "Index"
					}), links$1.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						children: link.label
					}, link.href))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-meta",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "footer-label",
							children: "Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ludhiana, Punjab" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "India" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								children: "Start a note"
							})
						})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell footer-rule",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Avtar Singh" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fraunces for display. Outfit for text." })]
		})]
	});
}
var links = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#practice",
		label: "Practice"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [edged, setEdged] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setEdged(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header",
		"data-edge": edged || open ? "true" : "false",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "skip-link",
				href: "#work",
				children: "Skip to work"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell header-bar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "wordmark",
						href: "#top",
						children: "Avtar Singh"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "desktop-nav",
						"aria-label": "Primary",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "nav-link",
							href: link.href,
							children: link.label
						}, link.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "menu-button press",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((value) => !value),
						children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							"aria-hidden": "true",
							size: 18
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							"aria-hidden": "true",
							size: 18
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Close menu" : "Open menu"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mobile-nav",
				id: "mobile-nav",
				"data-open": open ? "true" : "false",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mobile-nav-inner",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "shell",
						"aria-label": "Mobile",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							onClick: () => setOpen(false),
							children: link.label
						}, link.href))
					})
				})
			})
		]
	});
}
var categories = [
	"All",
	"Product",
	"Brand",
	"Editorial",
	"Systems"
];
var projects = [
	{
		id: "kinnow",
		index: "01",
		title: "Kinnow Route",
		category: "Product",
		year: "2026",
		role: "Product design",
		summary: "A harvest board for citrus growers: orchard blocks, crew days, and cold-store slots in one place.",
		image: "/work/kinnow.jpg",
		alt: "Wooden crates of oranges in a misty orchard at dawn",
		objectPosition: "center 60%"
	},
	{
		id: "mandi",
		index: "02",
		title: "Mandi",
		category: "Product",
		year: "2025",
		role: "Product design",
		summary: "Millers book wheat against live mandi rates. Farmers see the settlement before the truck leaves the yard.",
		image: "/work/mandi.jpg",
		alt: "Wheat spilling from a jute sack beside a brass balance scale",
		objectPosition: "center"
	},
	{
		id: "loom",
		index: "03",
		title: "Loom House",
		category: "Brand",
		year: "2024",
		role: "Identity",
		summary: "Identity for a Ludhiana handloom atelier — a wordmark, a lookbook, and a site that lets the cloth lead.",
		image: "/work/loom.jpg",
		alt: "Stacks of folded ivory, charcoal, and indigo handloom cotton",
		objectPosition: "center"
	},
	{
		id: "night",
		index: "04",
		title: "Night Press",
		category: "Editorial",
		year: "2025",
		role: "Product and type",
		summary: "A longform reader set like a journal. Measured columns, a soft night ink, and type that does not shout.",
		image: "/work/night.jpg",
		alt: "An open blank notebook and a fountain pen under a desk lamp",
		objectPosition: "center"
	},
	{
		id: "ledger",
		index: "05",
		title: "Field Ledger",
		category: "Systems",
		year: "2024",
		role: "Design systems",
		summary: "A component library and the documentation behind it, built for a regional bank's internal tools.",
		image: "/work/ledger.jpg",
		alt: "A closed clothbound book on an oak table in a sunlit archive",
		objectPosition: "center 70%"
	},
	{
		id: "issue",
		index: "06",
		title: "Issue 14",
		category: "Editorial",
		year: "2023",
		role: "Art direction",
		summary: "Art direction for a culture quarterly on Punjab's cities. Covers, grids, and paper chosen for the essay.",
		image: "/work/issue.jpg",
		alt: "A printing press beside a tall stack of blank cream paper",
		objectPosition: "center"
	}
];
var practice = [
	{
		index: "01",
		title: "Interface",
		detail: "Flows, screens, and the states between them. I prototype in the browser."
	},
	{
		index: "02",
		title: "Editorial",
		detail: "Type, measure, and grids for reading — issues, readers, and long pages."
	},
	{
		index: "03",
		title: "Identity",
		detail: "Marks, voice, and a short set of rules a team will actually keep."
	},
	{
		index: "04",
		title: "Engineering",
		detail: "TypeScript and React. I ship the interface, not only the frames."
	},
	{
		index: "05",
		title: "Systems",
		detail: "Tokens, components, and documentation that stay quiet on purpose."
	},
	{
		index: "06",
		title: "Direction",
		detail: "Photography, paper, and working with people who know the material."
	}
];
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		id: "practice",
		"aria-labelledby": "practice-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "03 — Practice"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "practice-title",
					className: "section-title mt-3 max-w-xl",
					children: "What I actually do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "practice-list",
					children: practice.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "practice-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.index }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.detail })
						]
					}, item.index))
				})
			]
		})
	});
}
function Work() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const visible = (0, import_react.useMemo)(() => filter === "All" ? projects : projects.filter((project) => project.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		id: "work",
		"aria-labelledby": "work-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "work-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "01 — Work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "work-title",
						className: "section-title mt-3",
						children: "Selected pieces"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "chip-row",
						role: "group",
						"aria-label": "Filter projects by category",
						children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("chip press", filter === category && "chip-on"),
							"aria-pressed": filter === category,
							onClick: () => setFilter(category),
							children: category
						}, category))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "sr-only",
					"aria-live": "polite",
					children: [
						"Showing ",
						visible.length,
						" ",
						visible.length === 1 ? "project" : "projects",
						filter === "All" ? "" : ` in ${filter}`,
						"."
					]
				}),
				visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted",
					children: [
						"Nothing filed under ",
						filter,
						" yet."
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "work-grid",
					children: visible.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: filter === "All" && index === 0 ? "is-lead" : void 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "project-card",
							tabIndex: 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "project-frame",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: project.image,
										alt: project.alt,
										style: { objectPosition: project.objectPosition },
										loading: project.index === "01" ? "eager" : "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "note-hint",
										children: "Note"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "project-plate",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "plate-role",
											children: project.role
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.summary })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "project-meta",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "project-kicker",
										children: [
											project.index,
											" · ",
											project.category,
											" · ",
											project.year
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "project-title",
										children: project.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "project-summary",
										children: project.summary
									})
								]
							})]
						})
					}, project.id))
				}, filter)
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "top",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { Home as component };
