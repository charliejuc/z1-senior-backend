# Z1 Senior Backend
Z1 Tecnical Test with Apollo Server and Type graphql.

### Dependencies Installation:
```bash
yarn install
```

### Run tests
```bash
yarn test
```

### Run development server on port 3000
```bash
yarn dev
```

### Architecture Overview
#### src/lib
This is the core, I am using using hexagonal architecture to keeps **domain**(business logic), 
**application**(use cases) and **infraestructure**(framework, database, HTTP API... stuffs).
```bash
src/lib
├── content
│   ├── application
│   ├── domain
│   └── infraestructure
├── lesson
│   ├── application
│   ├── domain
│   └── infraestructure
├── level
│   ├── application
│   ├── domain
│   └── infraestructure
└── shared
    └── domain
```

#### src/lib/*/domain
We will use "level" as an example, but "content" and "lesson" follow the same structure.

```bash
src/lib/level/domain
├── interfaces
│   └── LevelParams.ts
├── Level.ts
└── value-object
    ├── LevelDescription.ts
    ├── LevelId.ts
    └── LevelTitle.ts
```

##### Level.ts
Level model, this should not be confused with a database model.

Its function is to create a **safe Level** instance with validated properties. (More in **value-objects** section)

Uses interfaces from **"interfaces/LevelParams.ts"** to specify the parameters required to create
the instance.

##### value-object
Value objects have the function of validating data (title or description length for example), 
although they are not yet doing so, in case of invalid input they will throw an exception 
that we can catch in use cases or resolvers.