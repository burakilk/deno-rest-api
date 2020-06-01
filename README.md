## Deno REST API with PostgreSQL
 
- Create a simple rest api.
- Expose routes for **GET, POST ** methods.
- If you want to connect to the database, you can change the related config from config/config.ts

### API

- **`GET`** - /api/v1/users
- **`POST`** - /api/v1//users (form data)
- **`GET`** - /api/v1/users/:id

## Installation & Run

**Step 1**: Install

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

**Step 2**: Run

```
deno run --allow-env --allow-net server.ts
```