
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'merriweather': ['Merriweather', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				naamin: {
					cream: '#FEF7ED',
					gold: '#D4AF37',
					bronze: '#CD7F32',
					purple: '#8B5CF6',
					lavender: '#E0D4F7',
					stone: '#8B7355',
					parchment: '#F4F1E8',
					amber: '#F59E0B',
					sage: '#9CA3AF',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)'
					}
				},
				'ancient-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 15px rgba(205, 127, 50, 0.4), inset 0 0 15px rgba(212, 175, 55, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 25px rgba(205, 127, 50, 0.6), inset 0 0 25px rgba(212, 175, 55, 0.4)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'ancient-pulse': 'ancient-pulse 3s ease-in-out infinite'
			},
			backgroundImage: {
				'naamin-gradient': 'linear-gradient(135deg, #FEF7ED 0%, #E0D4F7 50%, #F3E8FF 100%)',
				'hero-gradient': 'linear-gradient(135deg, #FEF7ED 0%, #F3E8FF 40%, #E0D4F7 100%)',
				'ancient-gradient': 'linear-gradient(135deg, #F4F1E8 0%, #FEF7ED 30%, #E0D4F7 70%, #F3E8FF 100%)',
				'dark-ancient': 'linear-gradient(135deg, #2D2B28 0%, #3A2F2A 30%, #4A3B47 70%, #3D2B3A 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
