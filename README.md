# 🚀 Microfrontend with Module Federation

Project demonstrating microfrontend architecture using **Module Federation** - industry standard for integrating multiple frameworks into a single application.

## 📦 Structure

```
apps/
├── host/          # Next.js 15 + React 19 (main application)
├── vue-mars/      # Vue 3 + Vite (remote microfrontend)
└── svelte-moon/   # Svelte 4 + Vite (remote microfrontend)
```

## 🛠️ Tech Stack

- **Host**: Next.js 15 + React 19
- **Remotes**: Vue 3 + Svelte 4 (both with Vite)
- **Module Federation**: `@module-federation/vite`
- **Monorepo**: pnpm workspaces

## 🚀 How to Run

### Prerequisites

```bash
# Install dependencies
pnpm install
```

### Development

Open **3 terminals** and run:

**Terminal 1 - Vue Mars (port 3001):**
```bash
pnpm dev:mars
```

**Terminal 2 - Svelte Moon (port 3002):**
```bash
pnpm dev:moon
```

**Terminal 3 - Host (port 3000):**
```bash
pnpm dev
```

**Access:**
- `http://localhost:3000` - Home page
- `http://localhost:3000/mars` - Vue microfrontend
- `http://localhost:3000/moon` - Svelte microfrontend

### Production

**1. Build all projects:**
```bash
pnpm build
```

**2. Start servers (3 terminals):**

**Terminal 1 - Vue Mars:**
```bash
pnpm preview:mars
```

**Terminal 2 - Svelte Moon:**
```bash
pnpm preview:moon
```

**Terminal 3 - Host:**
```bash
pnpm start
```

**Access:** `http://localhost:3000`

## 🏗️ How It Works

1. **Remotes** (Vue Mars and Svelte Moon) expose components via `remoteEntry.js` using Module Federation
2. **Host** (Next.js) loads `remoteEntry.js` dynamically at runtime
3. Vue/Svelte components are mounted inside the React host
4. **Automatic fallback** to iframe if Module Federation fails

### Loading Flow

```
Host renders → Loads iframe (fallback) → Tries Module Federation → 
Loads remoteEntry.js → Gets bootstrap → Mounts component → Removes iframe
```

## 📚 Demonstrated Concepts

- ✅ **Module Federation** - Industry standard for microfrontends
- ✅ **Multi-framework** - React, Vue and Svelte in the same application
- ✅ **Dynamic Loading** - Runtime module loading
- ✅ **Shared Dependencies** - Library sharing (singleton)
- ✅ **Fallback Strategy** - Iframe as fallback if MF fails

## 📖 Detailed Documentation

To better understand Module Federation configurations, see:
- `apps/host/lib/microfrontends/README.md` - Detailed explanation of configurations

---

**Built with Module Federation**
