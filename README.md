# tyrka

A modern React + Vite + TypeScript project with Linaria for zero-runtime CSS-in-JS and React Router for client-side routing.

## Features
- React 19
- Vite for fast development and builds
- TypeScript for type safety
- Linaria for zero-runtime CSS-in-JS
- React Router v7 for routing
- ESLint for code quality

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm (v9 or newer)
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) (for Backend)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Backend (.NET 8)

The `Backend` folder contains a .NET 8 Web API project.

### Jak spustit Backend
1. Otevři terminál v kořenové složce projektu nebo ve složce `Backend`.
2. Spusť příkaz:
   ```powershell
   dotnet run --project Backend/Backend.csproj
   ```
   nebo pokud jsi přímo ve složce `Backend`:
   ```powershell
   dotnet run
   ```
3. Backend poběží na adrese (typicky):
   [http://localhost:5286/](http://localhost:5286/)

### Build Backend
Pokud chceš Backend zbuildit:
```powershell
dotnet build Backend/Backend.csproj
```

---
