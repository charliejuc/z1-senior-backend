# Z1 Senior Backend
Z1 Tecnical Test with Apollo Server and Type GraphQL.

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

GraphQL slug: **'/graphql'**.

Full GraphQL URL on localhost: **localhost:3000/graphql**

### Architecture Overview
#### src/lib
This is the core, I am using using hexagonal architecture to keep **domain**(business logic), 
**application**(use cases) and **infraestructure**(framework, database, HTTP API... stuffs) separate.
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

#### src/lib/*/\*
We will use "level" as an example, but "content" and "lesson" follow the same structure.

#### src/lib/*/domain
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

Its function is to create a **safe Level** instance with validated properties. (More in **value-object** section)

Uses interfaces from **"interfaces/LevelParams.ts"** to specify the parameters required to create
the instance.

##### value-object
Value objects have the function of **validating data** (title or description length for example), 
although they are not yet doing so, in case of invalid input they will throw an exception 
that we can catch in use cases or resolvers.

Value objects provide us the benefit to trust the data they contain.

#### src/lib/*/application
```bash
src/lib/level/application
├── LevelCreateUseCase.ts
├── LevelDeleteUseCase.ts
└── LevelFindByIdUseCase.ts
```

##### Use cases
Represent a **specific action** that users can perform when interacting with the system.
Their names are self-descriptive.

#### src/lib/*/infraestructure
```bash
src/lib/level/infraestructure
├── abstract
│   └── LevelRepositorySetter.ts
├── graphql
│   ├── resolvers
│   │   └── LevelResolvers.ts
│   └── types
│       └── LevelTypes.ts
├── interfaces
│   └── LevelRepository.ts
└── repositories
    └── LevelInMemoryRepository.ts
```

##### LevelRepositorySetter.ts
Sets "levelRepository" property on the constructor when another class inherits from it.

##### grapql
Contains graphql related functionality.

##### LevelRepository.ts
Extends Repository interface from **"src/lib/shared"** folder.

Repository interface allows **"findById", "create"** and **"delete"** methods for now.

##### LevelInMemoryRepository.ts
Implements LevelRepository interface by saving the data as a variable. (Volatile)

### src/
```bash
./src
├── index.ts
├── lib
├── Server.ts
├── tests
└── utils
```

#### index.ts
Project main file.

#### Server.ts
Express and Apollo Server bootstrapping.

#### utils
Some project utilities.
