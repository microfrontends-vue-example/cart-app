# cart-app

Cart microfrontend responsible for state management and user interactions within the microfrontend system.

---

## Role

- Manages cart state (add, remove, update items)
- Handles business logic related to cart operations
- Synchronizes user interactions with application state
- Owns the cart domain within the system

---

## Integration

- Exposed as a remote module via Module Federation
- Loaded dynamically by the host application (`main-app`)
- Designed to be independently deployable
- Loaded via remote entry URL at runtime
- Shares and synchronizes state with host and other microfrontends when required
- Designed to be consumed by multiple host applications
- Versioned and integrated via Module Federation contracts

---

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Module Federation (vite-plugin-federation)

---

## Development

```bash
yarn
yarn dev
```

Application runs at http://localhost:3002

## Part of system

This application is part of the microfrontend system:  
[Microfrontends Vue Lab](https://github.com/Artem-Makarchenko-Dev/microfrontends-vue-lab)