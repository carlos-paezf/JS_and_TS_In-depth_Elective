---
sidebar_position: 10
---

# Type alias y interfaces extendidas

Los **Type alias (`type`)** nombran cualquier tipo (uniones, tuplas, funciones, mapeados, objetos). Por otro lado, las **Interfaces (`interface`)** describen **formas de objetos y contratos**, soportan extensión nominal y declaration merging.

:::success

**Heurística práctica:** Para contratos públicos y puertos usa `interface`, para composición, uniones y transformaciones usa `type`.

:::

## Fundamentos rápidos

```ts showLineNumbers
// Type alias over cualquier otra forma
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type Point = readonly [x: number, y: number];
export type Mapper<T, U> = (x: T) => U;

// Interface para contratos de objetos
export interface Identifiable { id: string }
export interface Timestamped { createdAt: Date; updatedAt: Date }
```

## Extensión (interfaces) y composición (types)

Las interfaces amplían por herencia nominal, types amplían por intersección estructural.

- **Interface extiende interface (o interfaces):**

  ```ts showLineNumbers
  export interface BaseEntity extends Identifiable, Timestamped {}
  export interface Order extends BaseEntity {
    total: number;
    status: 'PENDING' | 'PAID' | 'CANCELLED';
  }
  ```

- **Interface extiende type (si el alias resuelve a objeto):**

  ```ts showLineNumbers
  type Geo = { lat: number; lon: number };
  export interface GeoOrder extends Geo { orderId: string }
  ```

- **Type alias "extiende" por intersección (`&`):**

  ```ts showLineNumbers
  type SoftDelete = { deletedAt?: Date; delete(): void };
  type OrderSoft = Order & SoftDelete; // suma de capacidades (traits/mezclas)
  ```

## Composición avanzada con `type` (mapped/utility)

Los **mapped types** permiten transformar las propiedades de un tipo existente de forma programática. Son esenciales para crear tipos reutilizables, seguros y expresivos, especialmente en arquitecturas limpias y DTOs.

```ts showLineNumbers
// Readonly profundo (simplificado)
export type ReadonlyDeep<T> = {
  readonly [K in keyof T]: T[K] extends object ? ReadonlyDeep<T[K]> : T[K];
};
```

En el caso anterior, se itera sobre todas las propiedades de `T`, marca cada una como `readonly`, y en caso que sea objeto se aplica recursivamente `ReadonlyDeep`. De esta manera se garantiza que todas las propiedades, incluso anidadas, sean inmutables.

```ts showLineNumbers
// DTO de salida inmutable
export type OrderDTO = Readonly<{
  id: string;
  total: number;
  status: Order['status'];
}>;
```

En este ejemplo, se define un tipo para representar una orden en formato de salida. Se usa `Readonly<>` para marcar todas las propiedades como inmutables (aunque no de manera profunda).

## Ejemplo técnico

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="domain" label="Domain">

```ts showLineNumbers title="domain/ports/OrderRepository.ts"
export interface OrderRepository {
  findById(id: string): Promise<Order | null>;
  save(order: Order): Promise<void>;
}
```

</TabItem>
<TabItem value="application" label="Aplicación">

```ts showLineNumbers title="application/usecases/PayOrder.ts"
export class PayOrder {
  constructor(private readonly repo: OrderRepository) {}

  /** Limite explícito: params y return son contratos estables */
  async execute(orderId: string): Promise<OrderDTO> {
    const found = await this.repo.findById(orderId);
    if (!found || found.status !== 'PENDING') throw new Error('Invalid state');
    const updated: Order = { ...found, status: 'PAID' };
    await this.repo.save(updated);
    // mapea a DTO (read-only projection/type alias)
    const dto: OrderDTO = { id: updated.id, total: updated.total, status: updated.status };
    return dto;
  }
}
```

</TabItem>
</Tabs>

## Augmentations (solo `interface`)

Las interfaces pueden "reabrirse" (declaration merging) para **extender tipos de terceros**, los type alias no.

```ts showLineNumbers title="interfaces/http/express-augment.d.ts"
import 'express';

declare module 'express-serve-static-core' {
  interface Request { 
    user?: { 
      id: string; 
      role: 'user' | 'admin' 
    }
  }
}
```

## Matices y gotchas

- **Conflictos en intersecciones:** `{ x: string } & { x: number } → x: never` (ininstanciable).
- Preferir `enum` de cadena o unión de literales para estados; deriva tipos de objetos as const cuando necesites valores en runtime.
- **Excess property checks** aplican fuerte a literales asignados a interfaces y object types (detectan claves extra inesperadas).

## Patrones recomendados

- **Domain/Ports:** `interface` para contratos estables y ampliables (SRP/DIP).
- **DTO/Responses/Utility:** `type` para uniones, tuplas, mapeados, proyecciones readonly.
- **Traits/Mixins:** suma de capacidades con `type A & B`.
- **Augmentations:** ampliar tipos de librerías con `interface` (no `type`).

## Referencias

- Microsoft. (s.f.). [TypeScript Handbook: Interfaces & Type Aliases](https://www.typescriptlang.org/docs/).
- Vanderkam, D. (2019). Effective TypeScript: 62 Specific Ways to Improve Your TypeScript. O’Reilly Media.
- Flanagan, D. (2020). JavaScript: The Definitive Guide (7.ª ed.). O’Reilly Media.
- Zakas, N. C. (2012). Maintainable JavaScript: Writing Readable Code. O’Reilly Media.
- Google. (s.f.). [JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).
