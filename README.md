# Componentes para uso com Shadcn/ui

# Uso dos componentes - projeto novo
```bash
npx create-next-app@latest new
cd new
npx shadcn@latest init
```


Abra o arquivo components.json e adicione no registries.
```json
  "registries": {
    "@devemp": "https://raw.githubusercontent.com/cristianoteles/shadcn-registry/refs/heads/main/public/r/{name}.json"
  }
```

Exemplo de uso
```bash
npx shadcn@latest add @devemp/layout
```

## Dev

Gerar o registry e prover o acesso local:

```bash
npm run dev
```

## Uso dos componentes - projeto novo
```bash
npx create-next-app@latest new
cd new
npx shadcn@latest init
```


Abra o arquivo components.json e adicione no registries.
```json
  "registries": {
    "@devemp": "http://localhost:3000/r/{name}.json"
  }
```

Exemplo de uso
```bash
npx shadcn@latest add @devemp/layout
```