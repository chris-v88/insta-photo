
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Follows
 * 
 */
export type Follows = $Result.DefaultSelection<Prisma.$FollowsPayload>
/**
 * Model Photo_Likes
 * 
 */
export type Photo_Likes = $Result.DefaultSelection<Prisma.$Photo_LikesPayload>
/**
 * Model Photos
 * 
 */
export type Photos = $Result.DefaultSelection<Prisma.$PhotosPayload>
/**
 * Model User_Sessions
 * 
 */
export type User_Sessions = $Result.DefaultSelection<Prisma.$User_SessionsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Comments
 * const comments = await prisma.comments.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Comments
   * const comments = await prisma.comments.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follows`: Exposes CRUD operations for the **Follows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follows.findMany()
    * ```
    */
  get follows(): Prisma.FollowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo_Likes`: Exposes CRUD operations for the **Photo_Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photo_Likes
    * const photo_Likes = await prisma.photo_Likes.findMany()
    * ```
    */
  get photo_Likes(): Prisma.Photo_LikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photos`: Exposes CRUD operations for the **Photos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photos.findMany()
    * ```
    */
  get photos(): Prisma.PhotosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_Sessions`: Exposes CRUD operations for the **User_Sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Sessions
    * const user_Sessions = await prisma.user_Sessions.findMany()
    * ```
    */
  get user_Sessions(): Prisma.User_SessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Comments: 'Comments',
    Follows: 'Follows',
    Photo_Likes: 'Photo_Likes',
    Photos: 'Photos',
    User_Sessions: 'User_Sessions',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "comments" | "follows" | "photo_Likes" | "photos" | "user_Sessions" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Follows: {
        payload: Prisma.$FollowsPayload<ExtArgs>
        fields: Prisma.FollowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          findFirst: {
            args: Prisma.FollowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          findMany: {
            args: Prisma.FollowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>[]
          }
          create: {
            args: Prisma.FollowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          createMany: {
            args: Prisma.FollowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FollowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          update: {
            args: Prisma.FollowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          deleteMany: {
            args: Prisma.FollowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          aggregate: {
            args: Prisma.FollowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollows>
          }
          groupBy: {
            args: Prisma.FollowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowsCountArgs<ExtArgs>
            result: $Utils.Optional<FollowsCountAggregateOutputType> | number
          }
        }
      }
      Photo_Likes: {
        payload: Prisma.$Photo_LikesPayload<ExtArgs>
        fields: Prisma.Photo_LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Photo_LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Photo_LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Photo_LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Photo_LikesPayload>
          }
          findFirst: {
            args: Prisma.Photo_LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Photo_LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Photo_LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Photo_LikesPayload>
          }
          findMany: {
            args: Prisma.Photo_LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Photo_LikesPayload>[]
          }
          create: {
            args: Prisma.Photo_LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Photo_LikesPayload>
          }
          createMany: {
            args: Prisma.Photo_LikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Photo_LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Photo_LikesPayload>
          }
          update: {
            args: Prisma.Photo_LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Photo_LikesPayload>
          }
          deleteMany: {
            args: Prisma.Photo_LikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Photo_LikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Photo_LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Photo_LikesPayload>
          }
          aggregate: {
            args: Prisma.Photo_LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto_Likes>
          }
          groupBy: {
            args: Prisma.Photo_LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Photo_LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Photo_LikesCountArgs<ExtArgs>
            result: $Utils.Optional<Photo_LikesCountAggregateOutputType> | number
          }
        }
      }
      Photos: {
        payload: Prisma.$PhotosPayload<ExtArgs>
        fields: Prisma.PhotosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          findFirst: {
            args: Prisma.PhotosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          findMany: {
            args: Prisma.PhotosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>[]
          }
          create: {
            args: Prisma.PhotosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          createMany: {
            args: Prisma.PhotosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhotosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          update: {
            args: Prisma.PhotosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          deleteMany: {
            args: Prisma.PhotosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotosPayload>
          }
          aggregate: {
            args: Prisma.PhotosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotos>
          }
          groupBy: {
            args: Prisma.PhotosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotosCountArgs<ExtArgs>
            result: $Utils.Optional<PhotosCountAggregateOutputType> | number
          }
        }
      }
      User_Sessions: {
        payload: Prisma.$User_SessionsPayload<ExtArgs>
        fields: Prisma.User_SessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_SessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_SessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_SessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_SessionsPayload>
          }
          findFirst: {
            args: Prisma.User_SessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_SessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_SessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_SessionsPayload>
          }
          findMany: {
            args: Prisma.User_SessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_SessionsPayload>[]
          }
          create: {
            args: Prisma.User_SessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_SessionsPayload>
          }
          createMany: {
            args: Prisma.User_SessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.User_SessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_SessionsPayload>
          }
          update: {
            args: Prisma.User_SessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_SessionsPayload>
          }
          deleteMany: {
            args: Prisma.User_SessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_SessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.User_SessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_SessionsPayload>
          }
          aggregate: {
            args: Prisma.User_SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_Sessions>
          }
          groupBy: {
            args: Prisma.User_SessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_SessionsCountArgs<ExtArgs>
            result: $Utils.Optional<User_SessionsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    comments?: CommentsOmit
    follows?: FollowsOmit
    photo_Likes?: Photo_LikesOmit
    photos?: PhotosOmit
    user_Sessions?: User_SessionsOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PhotosCountOutputType
   */

  export type PhotosCountOutputType = {
    Comments: number
    Photo_Likes: number
  }

  export type PhotosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | PhotosCountOutputTypeCountCommentsArgs
    Photo_Likes?: boolean | PhotosCountOutputTypeCountPhoto_LikesArgs
  }

  // Custom InputTypes
  /**
   * PhotosCountOutputType without action
   */
  export type PhotosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotosCountOutputType
     */
    select?: PhotosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhotosCountOutputType without action
   */
  export type PhotosCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * PhotosCountOutputType without action
   */
  export type PhotosCountOutputTypeCountPhoto_LikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Photo_LikesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Comments: number
    Follows_Follows_follower_idToUsers: number
    Follows_Follows_following_idToUsers: number
    Photo_Likes: number
    Photos: number
    User_Sessions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    Follows_Follows_follower_idToUsers?: boolean | UsersCountOutputTypeCountFollows_Follows_follower_idToUsersArgs
    Follows_Follows_following_idToUsers?: boolean | UsersCountOutputTypeCountFollows_Follows_following_idToUsersArgs
    Photo_Likes?: boolean | UsersCountOutputTypeCountPhoto_LikesArgs
    Photos?: boolean | UsersCountOutputTypeCountPhotosArgs
    User_Sessions?: boolean | UsersCountOutputTypeCountUser_SessionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollows_Follows_follower_idToUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollows_Follows_following_idToUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPhoto_LikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Photo_LikesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotosWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_SessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_SessionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    photo_id: number | null
    user_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    photo_id: number | null
    user_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    photo_id: number | null
    user_id: number | null
    content: string | null
    created_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    photo_id: number | null
    user_id: number | null
    content: string | null
    created_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    photo_id: number
    user_id: number
    content: number
    created_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    photo_id?: true
    user_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    photo_id?: true
    user_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    photo_id?: true
    user_id?: true
    content?: true
    created_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    photo_id?: true
    user_id?: true
    content?: true
    created_at?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    photo_id?: true
    user_id?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    photo_id: number
    user_id: number
    content: string
    created_at: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
    Photos?: boolean | PhotosDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>



  export type CommentsSelectScalar = {
    id?: boolean
    photo_id?: boolean
    user_id?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photo_id" | "user_id" | "content" | "created_at", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Photos?: boolean | PhotosDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      Photos: Prisma.$PhotosPayload<ExtArgs>
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      photo_id: number
      user_id: number
      content: string
      created_at: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Photos<T extends PhotosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhotosDefaultArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'Int'>
    readonly photo_id: FieldRef<"Comments", 'Int'>
    readonly user_id: FieldRef<"Comments", 'Int'>
    readonly content: FieldRef<"Comments", 'String'>
    readonly created_at: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Follows
   */

  export type AggregateFollows = {
    _count: FollowsCountAggregateOutputType | null
    _avg: FollowsAvgAggregateOutputType | null
    _sum: FollowsSumAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  export type FollowsAvgAggregateOutputType = {
    id: number | null
    follower_id: number | null
    following_id: number | null
  }

  export type FollowsSumAggregateOutputType = {
    id: number | null
    follower_id: number | null
    following_id: number | null
  }

  export type FollowsMinAggregateOutputType = {
    id: number | null
    follower_id: number | null
    following_id: number | null
    created_at: Date | null
  }

  export type FollowsMaxAggregateOutputType = {
    id: number | null
    follower_id: number | null
    following_id: number | null
    created_at: Date | null
  }

  export type FollowsCountAggregateOutputType = {
    id: number
    follower_id: number
    following_id: number
    created_at: number
    _all: number
  }


  export type FollowsAvgAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
  }

  export type FollowsSumAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
  }

  export type FollowsMinAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
    created_at?: true
  }

  export type FollowsMaxAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
    created_at?: true
  }

  export type FollowsCountAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
    created_at?: true
    _all?: true
  }

  export type FollowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to aggregate.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowsMaxAggregateInputType
  }

  export type GetFollowsAggregateType<T extends FollowsAggregateArgs> = {
        [P in keyof T & keyof AggregateFollows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollows[P]>
      : GetScalarType<T[P], AggregateFollows[P]>
  }




  export type FollowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithAggregationInput | FollowsOrderByWithAggregationInput[]
    by: FollowsScalarFieldEnum[] | FollowsScalarFieldEnum
    having?: FollowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowsCountAggregateInputType | true
    _avg?: FollowsAvgAggregateInputType
    _sum?: FollowsSumAggregateInputType
    _min?: FollowsMinAggregateInputType
    _max?: FollowsMaxAggregateInputType
  }

  export type FollowsGroupByOutputType = {
    id: number
    follower_id: number
    following_id: number
    created_at: Date | null
    _count: FollowsCountAggregateOutputType | null
    _avg: FollowsAvgAggregateOutputType | null
    _sum: FollowsSumAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  type GetFollowsGroupByPayload<T extends FollowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowsGroupByOutputType[P]>
            : GetScalarType<T[P], FollowsGroupByOutputType[P]>
        }
      >
    >


  export type FollowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    follower_id?: boolean
    following_id?: boolean
    created_at?: boolean
    Users_Follows_follower_idToUsers?: boolean | UsersDefaultArgs<ExtArgs>
    Users_Follows_following_idToUsers?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>



  export type FollowsSelectScalar = {
    id?: boolean
    follower_id?: boolean
    following_id?: boolean
    created_at?: boolean
  }

  export type FollowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "follower_id" | "following_id" | "created_at", ExtArgs["result"]["follows"]>
  export type FollowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users_Follows_follower_idToUsers?: boolean | UsersDefaultArgs<ExtArgs>
    Users_Follows_following_idToUsers?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $FollowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follows"
    objects: {
      Users_Follows_follower_idToUsers: Prisma.$UsersPayload<ExtArgs>
      Users_Follows_following_idToUsers: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      follower_id: number
      following_id: number
      created_at: Date | null
    }, ExtArgs["result"]["follows"]>
    composites: {}
  }

  type FollowsGetPayload<S extends boolean | null | undefined | FollowsDefaultArgs> = $Result.GetResult<Prisma.$FollowsPayload, S>

  type FollowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowsCountAggregateInputType | true
    }

  export interface FollowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follows'], meta: { name: 'Follows' } }
    /**
     * Find zero or one Follows that matches the filter.
     * @param {FollowsFindUniqueArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowsFindUniqueArgs>(args: SelectSubset<T, FollowsFindUniqueArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowsFindUniqueOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowsFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowsFindFirstArgs>(args?: SelectSubset<T, FollowsFindFirstArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowsFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follows.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follows.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followsWithIdOnly = await prisma.follows.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowsFindManyArgs>(args?: SelectSubset<T, FollowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follows.
     * @param {FollowsCreateArgs} args - Arguments to create a Follows.
     * @example
     * // Create one Follows
     * const Follows = await prisma.follows.create({
     *   data: {
     *     // ... data to create a Follows
     *   }
     * })
     * 
     */
    create<T extends FollowsCreateArgs>(args: SelectSubset<T, FollowsCreateArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowsCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follows = await prisma.follows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowsCreateManyArgs>(args?: SelectSubset<T, FollowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follows.
     * @param {FollowsDeleteArgs} args - Arguments to delete one Follows.
     * @example
     * // Delete one Follows
     * const Follows = await prisma.follows.delete({
     *   where: {
     *     // ... filter to delete one Follows
     *   }
     * })
     * 
     */
    delete<T extends FollowsDeleteArgs>(args: SelectSubset<T, FollowsDeleteArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follows.
     * @param {FollowsUpdateArgs} args - Arguments to update one Follows.
     * @example
     * // Update one Follows
     * const follows = await prisma.follows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowsUpdateArgs>(args: SelectSubset<T, FollowsUpdateArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowsDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowsDeleteManyArgs>(args?: SelectSubset<T, FollowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowsUpdateManyArgs>(args: SelectSubset<T, FollowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follows.
     * @param {FollowsUpsertArgs} args - Arguments to update or create a Follows.
     * @example
     * // Update or create a Follows
     * const follows = await prisma.follows.upsert({
     *   create: {
     *     // ... data to create a Follows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follows we want to update
     *   }
     * })
     */
    upsert<T extends FollowsUpsertArgs>(args: SelectSubset<T, FollowsUpsertArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follows.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowsCountArgs>(
      args?: Subset<T, FollowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowsAggregateArgs>(args: Subset<T, FollowsAggregateArgs>): Prisma.PrismaPromise<GetFollowsAggregateType<T>>

    /**
     * Group by Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowsGroupByArgs['orderBy'] }
        : { orderBy?: FollowsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follows model
   */
  readonly fields: FollowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users_Follows_follower_idToUsers<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users_Follows_following_idToUsers<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Follows model
   */
  interface FollowsFieldRefs {
    readonly id: FieldRef<"Follows", 'Int'>
    readonly follower_id: FieldRef<"Follows", 'Int'>
    readonly following_id: FieldRef<"Follows", 'Int'>
    readonly created_at: FieldRef<"Follows", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follows findUnique
   */
  export type FollowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows findUniqueOrThrow
   */
  export type FollowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows findFirst
   */
  export type FollowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows findFirstOrThrow
   */
  export type FollowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows findMany
   */
  export type FollowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows create
   */
  export type FollowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The data needed to create a Follows.
     */
    data: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>
  }

  /**
   * Follows createMany
   */
  export type FollowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowsCreateManyInput | FollowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follows update
   */
  export type FollowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The data needed to update a Follows.
     */
    data: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>
    /**
     * Choose, which Follows to update.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows updateMany
   */
  export type FollowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowsWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follows upsert
   */
  export type FollowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The filter to search for the Follows to update in case it exists.
     */
    where: FollowsWhereUniqueInput
    /**
     * In case the Follows found by the `where` argument doesn't exist, create a new Follows with this data.
     */
    create: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>
    /**
     * In case the Follows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>
  }

  /**
   * Follows delete
   */
  export type FollowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter which Follows to delete.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows deleteMany
   */
  export type FollowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowsWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follows without action
   */
  export type FollowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
  }


  /**
   * Model Photo_Likes
   */

  export type AggregatePhoto_Likes = {
    _count: Photo_LikesCountAggregateOutputType | null
    _avg: Photo_LikesAvgAggregateOutputType | null
    _sum: Photo_LikesSumAggregateOutputType | null
    _min: Photo_LikesMinAggregateOutputType | null
    _max: Photo_LikesMaxAggregateOutputType | null
  }

  export type Photo_LikesAvgAggregateOutputType = {
    id: number | null
    photo_id: number | null
    user_id: number | null
  }

  export type Photo_LikesSumAggregateOutputType = {
    id: number | null
    photo_id: number | null
    user_id: number | null
  }

  export type Photo_LikesMinAggregateOutputType = {
    id: number | null
    photo_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type Photo_LikesMaxAggregateOutputType = {
    id: number | null
    photo_id: number | null
    user_id: number | null
    created_at: Date | null
  }

  export type Photo_LikesCountAggregateOutputType = {
    id: number
    photo_id: number
    user_id: number
    created_at: number
    _all: number
  }


  export type Photo_LikesAvgAggregateInputType = {
    id?: true
    photo_id?: true
    user_id?: true
  }

  export type Photo_LikesSumAggregateInputType = {
    id?: true
    photo_id?: true
    user_id?: true
  }

  export type Photo_LikesMinAggregateInputType = {
    id?: true
    photo_id?: true
    user_id?: true
    created_at?: true
  }

  export type Photo_LikesMaxAggregateInputType = {
    id?: true
    photo_id?: true
    user_id?: true
    created_at?: true
  }

  export type Photo_LikesCountAggregateInputType = {
    id?: true
    photo_id?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type Photo_LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo_Likes to aggregate.
     */
    where?: Photo_LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photo_Likes to fetch.
     */
    orderBy?: Photo_LikesOrderByWithRelationInput | Photo_LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Photo_LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photo_Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photo_Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photo_Likes
    **/
    _count?: true | Photo_LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Photo_LikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Photo_LikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Photo_LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Photo_LikesMaxAggregateInputType
  }

  export type GetPhoto_LikesAggregateType<T extends Photo_LikesAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto_Likes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto_Likes[P]>
      : GetScalarType<T[P], AggregatePhoto_Likes[P]>
  }




  export type Photo_LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Photo_LikesWhereInput
    orderBy?: Photo_LikesOrderByWithAggregationInput | Photo_LikesOrderByWithAggregationInput[]
    by: Photo_LikesScalarFieldEnum[] | Photo_LikesScalarFieldEnum
    having?: Photo_LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Photo_LikesCountAggregateInputType | true
    _avg?: Photo_LikesAvgAggregateInputType
    _sum?: Photo_LikesSumAggregateInputType
    _min?: Photo_LikesMinAggregateInputType
    _max?: Photo_LikesMaxAggregateInputType
  }

  export type Photo_LikesGroupByOutputType = {
    id: number
    photo_id: number
    user_id: number
    created_at: Date | null
    _count: Photo_LikesCountAggregateOutputType | null
    _avg: Photo_LikesAvgAggregateOutputType | null
    _sum: Photo_LikesSumAggregateOutputType | null
    _min: Photo_LikesMinAggregateOutputType | null
    _max: Photo_LikesMaxAggregateOutputType | null
  }

  type GetPhoto_LikesGroupByPayload<T extends Photo_LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Photo_LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Photo_LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Photo_LikesGroupByOutputType[P]>
            : GetScalarType<T[P], Photo_LikesGroupByOutputType[P]>
        }
      >
    >


  export type Photo_LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo_id?: boolean
    user_id?: boolean
    created_at?: boolean
    Photos?: boolean | PhotosDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo_Likes"]>



  export type Photo_LikesSelectScalar = {
    id?: boolean
    photo_id?: boolean
    user_id?: boolean
    created_at?: boolean
  }

  export type Photo_LikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "photo_id" | "user_id" | "created_at", ExtArgs["result"]["photo_Likes"]>
  export type Photo_LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Photos?: boolean | PhotosDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $Photo_LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo_Likes"
    objects: {
      Photos: Prisma.$PhotosPayload<ExtArgs>
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      photo_id: number
      user_id: number
      created_at: Date | null
    }, ExtArgs["result"]["photo_Likes"]>
    composites: {}
  }

  type Photo_LikesGetPayload<S extends boolean | null | undefined | Photo_LikesDefaultArgs> = $Result.GetResult<Prisma.$Photo_LikesPayload, S>

  type Photo_LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Photo_LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Photo_LikesCountAggregateInputType | true
    }

  export interface Photo_LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo_Likes'], meta: { name: 'Photo_Likes' } }
    /**
     * Find zero or one Photo_Likes that matches the filter.
     * @param {Photo_LikesFindUniqueArgs} args - Arguments to find a Photo_Likes
     * @example
     * // Get one Photo_Likes
     * const photo_Likes = await prisma.photo_Likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Photo_LikesFindUniqueArgs>(args: SelectSubset<T, Photo_LikesFindUniqueArgs<ExtArgs>>): Prisma__Photo_LikesClient<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo_Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Photo_LikesFindUniqueOrThrowArgs} args - Arguments to find a Photo_Likes
     * @example
     * // Get one Photo_Likes
     * const photo_Likes = await prisma.photo_Likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Photo_LikesFindUniqueOrThrowArgs>(args: SelectSubset<T, Photo_LikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Photo_LikesClient<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo_Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Photo_LikesFindFirstArgs} args - Arguments to find a Photo_Likes
     * @example
     * // Get one Photo_Likes
     * const photo_Likes = await prisma.photo_Likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Photo_LikesFindFirstArgs>(args?: SelectSubset<T, Photo_LikesFindFirstArgs<ExtArgs>>): Prisma__Photo_LikesClient<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo_Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Photo_LikesFindFirstOrThrowArgs} args - Arguments to find a Photo_Likes
     * @example
     * // Get one Photo_Likes
     * const photo_Likes = await prisma.photo_Likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Photo_LikesFindFirstOrThrowArgs>(args?: SelectSubset<T, Photo_LikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Photo_LikesClient<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photo_Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Photo_LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photo_Likes
     * const photo_Likes = await prisma.photo_Likes.findMany()
     * 
     * // Get first 10 Photo_Likes
     * const photo_Likes = await prisma.photo_Likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photo_LikesWithIdOnly = await prisma.photo_Likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Photo_LikesFindManyArgs>(args?: SelectSubset<T, Photo_LikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo_Likes.
     * @param {Photo_LikesCreateArgs} args - Arguments to create a Photo_Likes.
     * @example
     * // Create one Photo_Likes
     * const Photo_Likes = await prisma.photo_Likes.create({
     *   data: {
     *     // ... data to create a Photo_Likes
     *   }
     * })
     * 
     */
    create<T extends Photo_LikesCreateArgs>(args: SelectSubset<T, Photo_LikesCreateArgs<ExtArgs>>): Prisma__Photo_LikesClient<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photo_Likes.
     * @param {Photo_LikesCreateManyArgs} args - Arguments to create many Photo_Likes.
     * @example
     * // Create many Photo_Likes
     * const photo_Likes = await prisma.photo_Likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Photo_LikesCreateManyArgs>(args?: SelectSubset<T, Photo_LikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photo_Likes.
     * @param {Photo_LikesDeleteArgs} args - Arguments to delete one Photo_Likes.
     * @example
     * // Delete one Photo_Likes
     * const Photo_Likes = await prisma.photo_Likes.delete({
     *   where: {
     *     // ... filter to delete one Photo_Likes
     *   }
     * })
     * 
     */
    delete<T extends Photo_LikesDeleteArgs>(args: SelectSubset<T, Photo_LikesDeleteArgs<ExtArgs>>): Prisma__Photo_LikesClient<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo_Likes.
     * @param {Photo_LikesUpdateArgs} args - Arguments to update one Photo_Likes.
     * @example
     * // Update one Photo_Likes
     * const photo_Likes = await prisma.photo_Likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Photo_LikesUpdateArgs>(args: SelectSubset<T, Photo_LikesUpdateArgs<ExtArgs>>): Prisma__Photo_LikesClient<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photo_Likes.
     * @param {Photo_LikesDeleteManyArgs} args - Arguments to filter Photo_Likes to delete.
     * @example
     * // Delete a few Photo_Likes
     * const { count } = await prisma.photo_Likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Photo_LikesDeleteManyArgs>(args?: SelectSubset<T, Photo_LikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photo_Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Photo_LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photo_Likes
     * const photo_Likes = await prisma.photo_Likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Photo_LikesUpdateManyArgs>(args: SelectSubset<T, Photo_LikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo_Likes.
     * @param {Photo_LikesUpsertArgs} args - Arguments to update or create a Photo_Likes.
     * @example
     * // Update or create a Photo_Likes
     * const photo_Likes = await prisma.photo_Likes.upsert({
     *   create: {
     *     // ... data to create a Photo_Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo_Likes we want to update
     *   }
     * })
     */
    upsert<T extends Photo_LikesUpsertArgs>(args: SelectSubset<T, Photo_LikesUpsertArgs<ExtArgs>>): Prisma__Photo_LikesClient<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photo_Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Photo_LikesCountArgs} args - Arguments to filter Photo_Likes to count.
     * @example
     * // Count the number of Photo_Likes
     * const count = await prisma.photo_Likes.count({
     *   where: {
     *     // ... the filter for the Photo_Likes we want to count
     *   }
     * })
    **/
    count<T extends Photo_LikesCountArgs>(
      args?: Subset<T, Photo_LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Photo_LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo_Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Photo_LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Photo_LikesAggregateArgs>(args: Subset<T, Photo_LikesAggregateArgs>): Prisma.PrismaPromise<GetPhoto_LikesAggregateType<T>>

    /**
     * Group by Photo_Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Photo_LikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Photo_LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Photo_LikesGroupByArgs['orderBy'] }
        : { orderBy?: Photo_LikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Photo_LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoto_LikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo_Likes model
   */
  readonly fields: Photo_LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo_Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Photo_LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Photos<T extends PhotosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhotosDefaultArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo_Likes model
   */
  interface Photo_LikesFieldRefs {
    readonly id: FieldRef<"Photo_Likes", 'Int'>
    readonly photo_id: FieldRef<"Photo_Likes", 'Int'>
    readonly user_id: FieldRef<"Photo_Likes", 'Int'>
    readonly created_at: FieldRef<"Photo_Likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Photo_Likes findUnique
   */
  export type Photo_LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    /**
     * Filter, which Photo_Likes to fetch.
     */
    where: Photo_LikesWhereUniqueInput
  }

  /**
   * Photo_Likes findUniqueOrThrow
   */
  export type Photo_LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    /**
     * Filter, which Photo_Likes to fetch.
     */
    where: Photo_LikesWhereUniqueInput
  }

  /**
   * Photo_Likes findFirst
   */
  export type Photo_LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    /**
     * Filter, which Photo_Likes to fetch.
     */
    where?: Photo_LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photo_Likes to fetch.
     */
    orderBy?: Photo_LikesOrderByWithRelationInput | Photo_LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photo_Likes.
     */
    cursor?: Photo_LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photo_Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photo_Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photo_Likes.
     */
    distinct?: Photo_LikesScalarFieldEnum | Photo_LikesScalarFieldEnum[]
  }

  /**
   * Photo_Likes findFirstOrThrow
   */
  export type Photo_LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    /**
     * Filter, which Photo_Likes to fetch.
     */
    where?: Photo_LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photo_Likes to fetch.
     */
    orderBy?: Photo_LikesOrderByWithRelationInput | Photo_LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photo_Likes.
     */
    cursor?: Photo_LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photo_Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photo_Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photo_Likes.
     */
    distinct?: Photo_LikesScalarFieldEnum | Photo_LikesScalarFieldEnum[]
  }

  /**
   * Photo_Likes findMany
   */
  export type Photo_LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    /**
     * Filter, which Photo_Likes to fetch.
     */
    where?: Photo_LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photo_Likes to fetch.
     */
    orderBy?: Photo_LikesOrderByWithRelationInput | Photo_LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photo_Likes.
     */
    cursor?: Photo_LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photo_Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photo_Likes.
     */
    skip?: number
    distinct?: Photo_LikesScalarFieldEnum | Photo_LikesScalarFieldEnum[]
  }

  /**
   * Photo_Likes create
   */
  export type Photo_LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo_Likes.
     */
    data: XOR<Photo_LikesCreateInput, Photo_LikesUncheckedCreateInput>
  }

  /**
   * Photo_Likes createMany
   */
  export type Photo_LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photo_Likes.
     */
    data: Photo_LikesCreateManyInput | Photo_LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo_Likes update
   */
  export type Photo_LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo_Likes.
     */
    data: XOR<Photo_LikesUpdateInput, Photo_LikesUncheckedUpdateInput>
    /**
     * Choose, which Photo_Likes to update.
     */
    where: Photo_LikesWhereUniqueInput
  }

  /**
   * Photo_Likes updateMany
   */
  export type Photo_LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photo_Likes.
     */
    data: XOR<Photo_LikesUpdateManyMutationInput, Photo_LikesUncheckedUpdateManyInput>
    /**
     * Filter which Photo_Likes to update
     */
    where?: Photo_LikesWhereInput
    /**
     * Limit how many Photo_Likes to update.
     */
    limit?: number
  }

  /**
   * Photo_Likes upsert
   */
  export type Photo_LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo_Likes to update in case it exists.
     */
    where: Photo_LikesWhereUniqueInput
    /**
     * In case the Photo_Likes found by the `where` argument doesn't exist, create a new Photo_Likes with this data.
     */
    create: XOR<Photo_LikesCreateInput, Photo_LikesUncheckedCreateInput>
    /**
     * In case the Photo_Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Photo_LikesUpdateInput, Photo_LikesUncheckedUpdateInput>
  }

  /**
   * Photo_Likes delete
   */
  export type Photo_LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    /**
     * Filter which Photo_Likes to delete.
     */
    where: Photo_LikesWhereUniqueInput
  }

  /**
   * Photo_Likes deleteMany
   */
  export type Photo_LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo_Likes to delete
     */
    where?: Photo_LikesWhereInput
    /**
     * Limit how many Photo_Likes to delete.
     */
    limit?: number
  }

  /**
   * Photo_Likes without action
   */
  export type Photo_LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
  }


  /**
   * Model Photos
   */

  export type AggregatePhotos = {
    _count: PhotosCountAggregateOutputType | null
    _avg: PhotosAvgAggregateOutputType | null
    _sum: PhotosSumAggregateOutputType | null
    _min: PhotosMinAggregateOutputType | null
    _max: PhotosMaxAggregateOutputType | null
  }

  export type PhotosAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    likes_count: number | null
    comments_count: number | null
  }

  export type PhotosSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    likes_count: number | null
    comments_count: number | null
  }

  export type PhotosMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    image_url: string | null
    likes_count: number | null
    comments_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PhotosMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    image_url: string | null
    likes_count: number | null
    comments_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PhotosCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    description: number
    image_url: number
    likes_count: number
    comments_count: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PhotosAvgAggregateInputType = {
    id?: true
    user_id?: true
    likes_count?: true
    comments_count?: true
  }

  export type PhotosSumAggregateInputType = {
    id?: true
    user_id?: true
    likes_count?: true
    comments_count?: true
  }

  export type PhotosMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    image_url?: true
    likes_count?: true
    comments_count?: true
    created_at?: true
    updated_at?: true
  }

  export type PhotosMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    image_url?: true
    likes_count?: true
    comments_count?: true
    created_at?: true
    updated_at?: true
  }

  export type PhotosCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    image_url?: true
    likes_count?: true
    comments_count?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PhotosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to aggregate.
     */
    where?: PhotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotosOrderByWithRelationInput | PhotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotosMaxAggregateInputType
  }

  export type GetPhotosAggregateType<T extends PhotosAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotos[P]>
      : GetScalarType<T[P], AggregatePhotos[P]>
  }




  export type PhotosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotosWhereInput
    orderBy?: PhotosOrderByWithAggregationInput | PhotosOrderByWithAggregationInput[]
    by: PhotosScalarFieldEnum[] | PhotosScalarFieldEnum
    having?: PhotosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotosCountAggregateInputType | true
    _avg?: PhotosAvgAggregateInputType
    _sum?: PhotosSumAggregateInputType
    _min?: PhotosMinAggregateInputType
    _max?: PhotosMaxAggregateInputType
  }

  export type PhotosGroupByOutputType = {
    id: number
    user_id: number
    title: string | null
    description: string | null
    image_url: string
    likes_count: number | null
    comments_count: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: PhotosCountAggregateOutputType | null
    _avg: PhotosAvgAggregateOutputType | null
    _sum: PhotosSumAggregateOutputType | null
    _min: PhotosMinAggregateOutputType | null
    _max: PhotosMaxAggregateOutputType | null
  }

  type GetPhotosGroupByPayload<T extends PhotosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotosGroupByOutputType[P]>
            : GetScalarType<T[P], PhotosGroupByOutputType[P]>
        }
      >
    >


  export type PhotosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    likes_count?: boolean
    comments_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    Comments?: boolean | Photos$CommentsArgs<ExtArgs>
    Photo_Likes?: boolean | Photos$Photo_LikesArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | PhotosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photos"]>



  export type PhotosSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    image_url?: boolean
    likes_count?: boolean
    comments_count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PhotosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "description" | "image_url" | "likes_count" | "comments_count" | "created_at" | "updated_at", ExtArgs["result"]["photos"]>
  export type PhotosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | Photos$CommentsArgs<ExtArgs>
    Photo_Likes?: boolean | Photos$Photo_LikesArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | PhotosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PhotosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photos"
    objects: {
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      Photo_Likes: Prisma.$Photo_LikesPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string | null
      description: string | null
      image_url: string
      likes_count: number | null
      comments_count: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["photos"]>
    composites: {}
  }

  type PhotosGetPayload<S extends boolean | null | undefined | PhotosDefaultArgs> = $Result.GetResult<Prisma.$PhotosPayload, S>

  type PhotosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotosCountAggregateInputType | true
    }

  export interface PhotosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photos'], meta: { name: 'Photos' } }
    /**
     * Find zero or one Photos that matches the filter.
     * @param {PhotosFindUniqueArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotosFindUniqueArgs>(args: SelectSubset<T, PhotosFindUniqueArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotosFindUniqueOrThrowArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotosFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosFindFirstArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotosFindFirstArgs>(args?: SelectSubset<T, PhotosFindFirstArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosFindFirstOrThrowArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotosFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photos.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photosWithIdOnly = await prisma.photos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotosFindManyArgs>(args?: SelectSubset<T, PhotosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photos.
     * @param {PhotosCreateArgs} args - Arguments to create a Photos.
     * @example
     * // Create one Photos
     * const Photos = await prisma.photos.create({
     *   data: {
     *     // ... data to create a Photos
     *   }
     * })
     * 
     */
    create<T extends PhotosCreateArgs>(args: SelectSubset<T, PhotosCreateArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotosCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photos = await prisma.photos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotosCreateManyArgs>(args?: SelectSubset<T, PhotosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photos.
     * @param {PhotosDeleteArgs} args - Arguments to delete one Photos.
     * @example
     * // Delete one Photos
     * const Photos = await prisma.photos.delete({
     *   where: {
     *     // ... filter to delete one Photos
     *   }
     * })
     * 
     */
    delete<T extends PhotosDeleteArgs>(args: SelectSubset<T, PhotosDeleteArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photos.
     * @param {PhotosUpdateArgs} args - Arguments to update one Photos.
     * @example
     * // Update one Photos
     * const photos = await prisma.photos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotosUpdateArgs>(args: SelectSubset<T, PhotosUpdateArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotosDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotosDeleteManyArgs>(args?: SelectSubset<T, PhotosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photos = await prisma.photos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotosUpdateManyArgs>(args: SelectSubset<T, PhotosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photos.
     * @param {PhotosUpsertArgs} args - Arguments to update or create a Photos.
     * @example
     * // Update or create a Photos
     * const photos = await prisma.photos.upsert({
     *   create: {
     *     // ... data to create a Photos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photos we want to update
     *   }
     * })
     */
    upsert<T extends PhotosUpsertArgs>(args: SelectSubset<T, PhotosUpsertArgs<ExtArgs>>): Prisma__PhotosClient<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photos.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotosCountArgs>(
      args?: Subset<T, PhotosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotosAggregateArgs>(args: Subset<T, PhotosAggregateArgs>): Prisma.PrismaPromise<GetPhotosAggregateType<T>>

    /**
     * Group by Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotosGroupByArgs['orderBy'] }
        : { orderBy?: PhotosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photos model
   */
  readonly fields: PhotosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comments<T extends Photos$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Photos$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Photo_Likes<T extends Photos$Photo_LikesArgs<ExtArgs> = {}>(args?: Subset<T, Photos$Photo_LikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photos model
   */
  interface PhotosFieldRefs {
    readonly id: FieldRef<"Photos", 'Int'>
    readonly user_id: FieldRef<"Photos", 'Int'>
    readonly title: FieldRef<"Photos", 'String'>
    readonly description: FieldRef<"Photos", 'String'>
    readonly image_url: FieldRef<"Photos", 'String'>
    readonly likes_count: FieldRef<"Photos", 'Int'>
    readonly comments_count: FieldRef<"Photos", 'Int'>
    readonly created_at: FieldRef<"Photos", 'DateTime'>
    readonly updated_at: FieldRef<"Photos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Photos findUnique
   */
  export type PhotosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where: PhotosWhereUniqueInput
  }

  /**
   * Photos findUniqueOrThrow
   */
  export type PhotosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where: PhotosWhereUniqueInput
  }

  /**
   * Photos findFirst
   */
  export type PhotosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotosOrderByWithRelationInput | PhotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * Photos findFirstOrThrow
   */
  export type PhotosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotosOrderByWithRelationInput | PhotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * Photos findMany
   */
  export type PhotosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotosOrderByWithRelationInput | PhotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * Photos create
   */
  export type PhotosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * The data needed to create a Photos.
     */
    data: XOR<PhotosCreateInput, PhotosUncheckedCreateInput>
  }

  /**
   * Photos createMany
   */
  export type PhotosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotosCreateManyInput | PhotosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photos update
   */
  export type PhotosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * The data needed to update a Photos.
     */
    data: XOR<PhotosUpdateInput, PhotosUncheckedUpdateInput>
    /**
     * Choose, which Photos to update.
     */
    where: PhotosWhereUniqueInput
  }

  /**
   * Photos updateMany
   */
  export type PhotosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotosUpdateManyMutationInput, PhotosUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotosWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photos upsert
   */
  export type PhotosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * The filter to search for the Photos to update in case it exists.
     */
    where: PhotosWhereUniqueInput
    /**
     * In case the Photos found by the `where` argument doesn't exist, create a new Photos with this data.
     */
    create: XOR<PhotosCreateInput, PhotosUncheckedCreateInput>
    /**
     * In case the Photos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotosUpdateInput, PhotosUncheckedUpdateInput>
  }

  /**
   * Photos delete
   */
  export type PhotosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    /**
     * Filter which Photos to delete.
     */
    where: PhotosWhereUniqueInput
  }

  /**
   * Photos deleteMany
   */
  export type PhotosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotosWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photos.Comments
   */
  export type Photos$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Photos.Photo_Likes
   */
  export type Photos$Photo_LikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    where?: Photo_LikesWhereInput
    orderBy?: Photo_LikesOrderByWithRelationInput | Photo_LikesOrderByWithRelationInput[]
    cursor?: Photo_LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Photo_LikesScalarFieldEnum | Photo_LikesScalarFieldEnum[]
  }

  /**
   * Photos without action
   */
  export type PhotosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
  }


  /**
   * Model User_Sessions
   */

  export type AggregateUser_Sessions = {
    _count: User_SessionsCountAggregateOutputType | null
    _avg: User_SessionsAvgAggregateOutputType | null
    _sum: User_SessionsSumAggregateOutputType | null
    _min: User_SessionsMinAggregateOutputType | null
    _max: User_SessionsMaxAggregateOutputType | null
  }

  export type User_SessionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_SessionsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_SessionsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    refresh_token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type User_SessionsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    refresh_token: string | null
    expires_at: Date | null
    created_at: Date | null
  }

  export type User_SessionsCountAggregateOutputType = {
    id: number
    user_id: number
    refresh_token: number
    expires_at: number
    created_at: number
    _all: number
  }


  export type User_SessionsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_SessionsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_SessionsMinAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token?: true
    expires_at?: true
    created_at?: true
  }

  export type User_SessionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token?: true
    expires_at?: true
    created_at?: true
  }

  export type User_SessionsCountAggregateInputType = {
    id?: true
    user_id?: true
    refresh_token?: true
    expires_at?: true
    created_at?: true
    _all?: true
  }

  export type User_SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Sessions to aggregate.
     */
    where?: User_SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Sessions to fetch.
     */
    orderBy?: User_SessionsOrderByWithRelationInput | User_SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Sessions
    **/
    _count?: true | User_SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_SessionsMaxAggregateInputType
  }

  export type GetUser_SessionsAggregateType<T extends User_SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Sessions[P]>
      : GetScalarType<T[P], AggregateUser_Sessions[P]>
  }




  export type User_SessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_SessionsWhereInput
    orderBy?: User_SessionsOrderByWithAggregationInput | User_SessionsOrderByWithAggregationInput[]
    by: User_SessionsScalarFieldEnum[] | User_SessionsScalarFieldEnum
    having?: User_SessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_SessionsCountAggregateInputType | true
    _avg?: User_SessionsAvgAggregateInputType
    _sum?: User_SessionsSumAggregateInputType
    _min?: User_SessionsMinAggregateInputType
    _max?: User_SessionsMaxAggregateInputType
  }

  export type User_SessionsGroupByOutputType = {
    id: number
    user_id: number
    refresh_token: string
    expires_at: Date
    created_at: Date | null
    _count: User_SessionsCountAggregateOutputType | null
    _avg: User_SessionsAvgAggregateOutputType | null
    _sum: User_SessionsSumAggregateOutputType | null
    _min: User_SessionsMinAggregateOutputType | null
    _max: User_SessionsMaxAggregateOutputType | null
  }

  type GetUser_SessionsGroupByPayload<T extends User_SessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], User_SessionsGroupByOutputType[P]>
        }
      >
    >


  export type User_SessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    created_at?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Sessions"]>



  export type User_SessionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    created_at?: boolean
  }

  export type User_SessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "refresh_token" | "expires_at" | "created_at", ExtArgs["result"]["user_Sessions"]>
  export type User_SessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $User_SessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_Sessions"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      refresh_token: string
      expires_at: Date
      created_at: Date | null
    }, ExtArgs["result"]["user_Sessions"]>
    composites: {}
  }

  type User_SessionsGetPayload<S extends boolean | null | undefined | User_SessionsDefaultArgs> = $Result.GetResult<Prisma.$User_SessionsPayload, S>

  type User_SessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_SessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_SessionsCountAggregateInputType | true
    }

  export interface User_SessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_Sessions'], meta: { name: 'User_Sessions' } }
    /**
     * Find zero or one User_Sessions that matches the filter.
     * @param {User_SessionsFindUniqueArgs} args - Arguments to find a User_Sessions
     * @example
     * // Get one User_Sessions
     * const user_Sessions = await prisma.user_Sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_SessionsFindUniqueArgs>(args: SelectSubset<T, User_SessionsFindUniqueArgs<ExtArgs>>): Prisma__User_SessionsClient<$Result.GetResult<Prisma.$User_SessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_SessionsFindUniqueOrThrowArgs} args - Arguments to find a User_Sessions
     * @example
     * // Get one User_Sessions
     * const user_Sessions = await prisma.user_Sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_SessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, User_SessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_SessionsClient<$Result.GetResult<Prisma.$User_SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionsFindFirstArgs} args - Arguments to find a User_Sessions
     * @example
     * // Get one User_Sessions
     * const user_Sessions = await prisma.user_Sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_SessionsFindFirstArgs>(args?: SelectSubset<T, User_SessionsFindFirstArgs<ExtArgs>>): Prisma__User_SessionsClient<$Result.GetResult<Prisma.$User_SessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionsFindFirstOrThrowArgs} args - Arguments to find a User_Sessions
     * @example
     * // Get one User_Sessions
     * const user_Sessions = await prisma.user_Sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_SessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, User_SessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_SessionsClient<$Result.GetResult<Prisma.$User_SessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Sessions
     * const user_Sessions = await prisma.user_Sessions.findMany()
     * 
     * // Get first 10 User_Sessions
     * const user_Sessions = await prisma.user_Sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_SessionsWithIdOnly = await prisma.user_Sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User_SessionsFindManyArgs>(args?: SelectSubset<T, User_SessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_Sessions.
     * @param {User_SessionsCreateArgs} args - Arguments to create a User_Sessions.
     * @example
     * // Create one User_Sessions
     * const User_Sessions = await prisma.user_Sessions.create({
     *   data: {
     *     // ... data to create a User_Sessions
     *   }
     * })
     * 
     */
    create<T extends User_SessionsCreateArgs>(args: SelectSubset<T, User_SessionsCreateArgs<ExtArgs>>): Prisma__User_SessionsClient<$Result.GetResult<Prisma.$User_SessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_Sessions.
     * @param {User_SessionsCreateManyArgs} args - Arguments to create many User_Sessions.
     * @example
     * // Create many User_Sessions
     * const user_Sessions = await prisma.user_Sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_SessionsCreateManyArgs>(args?: SelectSubset<T, User_SessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_Sessions.
     * @param {User_SessionsDeleteArgs} args - Arguments to delete one User_Sessions.
     * @example
     * // Delete one User_Sessions
     * const User_Sessions = await prisma.user_Sessions.delete({
     *   where: {
     *     // ... filter to delete one User_Sessions
     *   }
     * })
     * 
     */
    delete<T extends User_SessionsDeleteArgs>(args: SelectSubset<T, User_SessionsDeleteArgs<ExtArgs>>): Prisma__User_SessionsClient<$Result.GetResult<Prisma.$User_SessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_Sessions.
     * @param {User_SessionsUpdateArgs} args - Arguments to update one User_Sessions.
     * @example
     * // Update one User_Sessions
     * const user_Sessions = await prisma.user_Sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_SessionsUpdateArgs>(args: SelectSubset<T, User_SessionsUpdateArgs<ExtArgs>>): Prisma__User_SessionsClient<$Result.GetResult<Prisma.$User_SessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_Sessions.
     * @param {User_SessionsDeleteManyArgs} args - Arguments to filter User_Sessions to delete.
     * @example
     * // Delete a few User_Sessions
     * const { count } = await prisma.user_Sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_SessionsDeleteManyArgs>(args?: SelectSubset<T, User_SessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Sessions
     * const user_Sessions = await prisma.user_Sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_SessionsUpdateManyArgs>(args: SelectSubset<T, User_SessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Sessions.
     * @param {User_SessionsUpsertArgs} args - Arguments to update or create a User_Sessions.
     * @example
     * // Update or create a User_Sessions
     * const user_Sessions = await prisma.user_Sessions.upsert({
     *   create: {
     *     // ... data to create a User_Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Sessions we want to update
     *   }
     * })
     */
    upsert<T extends User_SessionsUpsertArgs>(args: SelectSubset<T, User_SessionsUpsertArgs<ExtArgs>>): Prisma__User_SessionsClient<$Result.GetResult<Prisma.$User_SessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionsCountArgs} args - Arguments to filter User_Sessions to count.
     * @example
     * // Count the number of User_Sessions
     * const count = await prisma.user_Sessions.count({
     *   where: {
     *     // ... the filter for the User_Sessions we want to count
     *   }
     * })
    **/
    count<T extends User_SessionsCountArgs>(
      args?: Subset<T, User_SessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_SessionsAggregateArgs>(args: Subset<T, User_SessionsAggregateArgs>): Prisma.PrismaPromise<GetUser_SessionsAggregateType<T>>

    /**
     * Group by User_Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_SessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_SessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_SessionsGroupByArgs['orderBy'] }
        : { orderBy?: User_SessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_SessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_SessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_Sessions model
   */
  readonly fields: User_SessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_SessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_Sessions model
   */
  interface User_SessionsFieldRefs {
    readonly id: FieldRef<"User_Sessions", 'Int'>
    readonly user_id: FieldRef<"User_Sessions", 'Int'>
    readonly refresh_token: FieldRef<"User_Sessions", 'String'>
    readonly expires_at: FieldRef<"User_Sessions", 'DateTime'>
    readonly created_at: FieldRef<"User_Sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User_Sessions findUnique
   */
  export type User_SessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
    /**
     * Filter, which User_Sessions to fetch.
     */
    where: User_SessionsWhereUniqueInput
  }

  /**
   * User_Sessions findUniqueOrThrow
   */
  export type User_SessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
    /**
     * Filter, which User_Sessions to fetch.
     */
    where: User_SessionsWhereUniqueInput
  }

  /**
   * User_Sessions findFirst
   */
  export type User_SessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
    /**
     * Filter, which User_Sessions to fetch.
     */
    where?: User_SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Sessions to fetch.
     */
    orderBy?: User_SessionsOrderByWithRelationInput | User_SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Sessions.
     */
    cursor?: User_SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Sessions.
     */
    distinct?: User_SessionsScalarFieldEnum | User_SessionsScalarFieldEnum[]
  }

  /**
   * User_Sessions findFirstOrThrow
   */
  export type User_SessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
    /**
     * Filter, which User_Sessions to fetch.
     */
    where?: User_SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Sessions to fetch.
     */
    orderBy?: User_SessionsOrderByWithRelationInput | User_SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Sessions.
     */
    cursor?: User_SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Sessions.
     */
    distinct?: User_SessionsScalarFieldEnum | User_SessionsScalarFieldEnum[]
  }

  /**
   * User_Sessions findMany
   */
  export type User_SessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
    /**
     * Filter, which User_Sessions to fetch.
     */
    where?: User_SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Sessions to fetch.
     */
    orderBy?: User_SessionsOrderByWithRelationInput | User_SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Sessions.
     */
    cursor?: User_SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Sessions.
     */
    skip?: number
    distinct?: User_SessionsScalarFieldEnum | User_SessionsScalarFieldEnum[]
  }

  /**
   * User_Sessions create
   */
  export type User_SessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a User_Sessions.
     */
    data: XOR<User_SessionsCreateInput, User_SessionsUncheckedCreateInput>
  }

  /**
   * User_Sessions createMany
   */
  export type User_SessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Sessions.
     */
    data: User_SessionsCreateManyInput | User_SessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_Sessions update
   */
  export type User_SessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a User_Sessions.
     */
    data: XOR<User_SessionsUpdateInput, User_SessionsUncheckedUpdateInput>
    /**
     * Choose, which User_Sessions to update.
     */
    where: User_SessionsWhereUniqueInput
  }

  /**
   * User_Sessions updateMany
   */
  export type User_SessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Sessions.
     */
    data: XOR<User_SessionsUpdateManyMutationInput, User_SessionsUncheckedUpdateManyInput>
    /**
     * Filter which User_Sessions to update
     */
    where?: User_SessionsWhereInput
    /**
     * Limit how many User_Sessions to update.
     */
    limit?: number
  }

  /**
   * User_Sessions upsert
   */
  export type User_SessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the User_Sessions to update in case it exists.
     */
    where: User_SessionsWhereUniqueInput
    /**
     * In case the User_Sessions found by the `where` argument doesn't exist, create a new User_Sessions with this data.
     */
    create: XOR<User_SessionsCreateInput, User_SessionsUncheckedCreateInput>
    /**
     * In case the User_Sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_SessionsUpdateInput, User_SessionsUncheckedUpdateInput>
  }

  /**
   * User_Sessions delete
   */
  export type User_SessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
    /**
     * Filter which User_Sessions to delete.
     */
    where: User_SessionsWhereUniqueInput
  }

  /**
   * User_Sessions deleteMany
   */
  export type User_SessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Sessions to delete
     */
    where?: User_SessionsWhereInput
    /**
     * Limit how many User_Sessions to delete.
     */
    limit?: number
  }

  /**
   * User_Sessions without action
   */
  export type User_SessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    followers_count: number | null
    following_count: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    followers_count: number | null
    following_count: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    full_name: string | null
    avatar: string | null
    bio: string | null
    is_admin: boolean | null
    followers_count: number | null
    following_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    full_name: string | null
    avatar: string | null
    bio: string | null
    is_admin: boolean | null
    followers_count: number | null
    following_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    full_name: number
    avatar: number
    bio: number
    is_admin: number
    followers_count: number
    following_count: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    followers_count?: true
    following_count?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    followers_count?: true
    following_count?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    full_name?: true
    avatar?: true
    bio?: true
    is_admin?: true
    followers_count?: true
    following_count?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    full_name?: true
    avatar?: true
    bio?: true
    is_admin?: true
    followers_count?: true
    following_count?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    full_name?: true
    avatar?: true
    bio?: true
    is_admin?: true
    followers_count?: true
    following_count?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    full_name: string | null
    avatar: string | null
    bio: string | null
    is_admin: boolean | null
    followers_count: number | null
    following_count: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    full_name?: boolean
    avatar?: boolean
    bio?: boolean
    is_admin?: boolean
    followers_count?: boolean
    following_count?: boolean
    created_at?: boolean
    updated_at?: boolean
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    Follows_Follows_follower_idToUsers?: boolean | Users$Follows_Follows_follower_idToUsersArgs<ExtArgs>
    Follows_Follows_following_idToUsers?: boolean | Users$Follows_Follows_following_idToUsersArgs<ExtArgs>
    Photo_Likes?: boolean | Users$Photo_LikesArgs<ExtArgs>
    Photos?: boolean | Users$PhotosArgs<ExtArgs>
    User_Sessions?: boolean | Users$User_SessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    full_name?: boolean
    avatar?: boolean
    bio?: boolean
    is_admin?: boolean
    followers_count?: boolean
    following_count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "full_name" | "avatar" | "bio" | "is_admin" | "followers_count" | "following_count" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    Follows_Follows_follower_idToUsers?: boolean | Users$Follows_Follows_follower_idToUsersArgs<ExtArgs>
    Follows_Follows_following_idToUsers?: boolean | Users$Follows_Follows_following_idToUsersArgs<ExtArgs>
    Photo_Likes?: boolean | Users$Photo_LikesArgs<ExtArgs>
    Photos?: boolean | Users$PhotosArgs<ExtArgs>
    User_Sessions?: boolean | Users$User_SessionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      Follows_Follows_follower_idToUsers: Prisma.$FollowsPayload<ExtArgs>[]
      Follows_Follows_following_idToUsers: Prisma.$FollowsPayload<ExtArgs>[]
      Photo_Likes: Prisma.$Photo_LikesPayload<ExtArgs>[]
      Photos: Prisma.$PhotosPayload<ExtArgs>[]
      User_Sessions: Prisma.$User_SessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      full_name: string | null
      avatar: string | null
      bio: string | null
      is_admin: boolean | null
      followers_count: number | null
      following_count: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comments<T extends Users$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Follows_Follows_follower_idToUsers<T extends Users$Follows_Follows_follower_idToUsersArgs<ExtArgs> = {}>(args?: Subset<T, Users$Follows_Follows_follower_idToUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Follows_Follows_following_idToUsers<T extends Users$Follows_Follows_following_idToUsersArgs<ExtArgs> = {}>(args?: Subset<T, Users$Follows_Follows_following_idToUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Photo_Likes<T extends Users$Photo_LikesArgs<ExtArgs> = {}>(args?: Subset<T, Users$Photo_LikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Photo_LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Photos<T extends Users$PhotosArgs<ExtArgs> = {}>(args?: Subset<T, Users$PhotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User_Sessions<T extends Users$User_SessionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$User_SessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly full_name: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly bio: FieldRef<"Users", 'String'>
    readonly is_admin: FieldRef<"Users", 'Boolean'>
    readonly followers_count: FieldRef<"Users", 'Int'>
    readonly following_count: FieldRef<"Users", 'Int'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Comments
   */
  export type Users$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.Follows_Follows_follower_idToUsers
   */
  export type Users$Follows_Follows_follower_idToUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    cursor?: FollowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Users.Follows_Follows_following_idToUsers
   */
  export type Users$Follows_Follows_following_idToUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    cursor?: FollowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Users.Photo_Likes
   */
  export type Users$Photo_LikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo_Likes
     */
    select?: Photo_LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo_Likes
     */
    omit?: Photo_LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Photo_LikesInclude<ExtArgs> | null
    where?: Photo_LikesWhereInput
    orderBy?: Photo_LikesOrderByWithRelationInput | Photo_LikesOrderByWithRelationInput[]
    cursor?: Photo_LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Photo_LikesScalarFieldEnum | Photo_LikesScalarFieldEnum[]
  }

  /**
   * Users.Photos
   */
  export type Users$PhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photos
     */
    select?: PhotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photos
     */
    omit?: PhotosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotosInclude<ExtArgs> | null
    where?: PhotosWhereInput
    orderBy?: PhotosOrderByWithRelationInput | PhotosOrderByWithRelationInput[]
    cursor?: PhotosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * Users.User_Sessions
   */
  export type Users$User_SessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Sessions
     */
    select?: User_SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Sessions
     */
    omit?: User_SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_SessionsInclude<ExtArgs> | null
    where?: User_SessionsWhereInput
    orderBy?: User_SessionsOrderByWithRelationInput | User_SessionsOrderByWithRelationInput[]
    cursor?: User_SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_SessionsScalarFieldEnum | User_SessionsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    photo_id: 'photo_id',
    user_id: 'user_id',
    content: 'content',
    created_at: 'created_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const FollowsScalarFieldEnum: {
    id: 'id',
    follower_id: 'follower_id',
    following_id: 'following_id',
    created_at: 'created_at'
  };

  export type FollowsScalarFieldEnum = (typeof FollowsScalarFieldEnum)[keyof typeof FollowsScalarFieldEnum]


  export const Photo_LikesScalarFieldEnum: {
    id: 'id',
    photo_id: 'photo_id',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type Photo_LikesScalarFieldEnum = (typeof Photo_LikesScalarFieldEnum)[keyof typeof Photo_LikesScalarFieldEnum]


  export const PhotosScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    description: 'description',
    image_url: 'image_url',
    likes_count: 'likes_count',
    comments_count: 'comments_count',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PhotosScalarFieldEnum = (typeof PhotosScalarFieldEnum)[keyof typeof PhotosScalarFieldEnum]


  export const User_SessionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    refresh_token: 'refresh_token',
    expires_at: 'expires_at',
    created_at: 'created_at'
  };

  export type User_SessionsScalarFieldEnum = (typeof User_SessionsScalarFieldEnum)[keyof typeof User_SessionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    full_name: 'full_name',
    avatar: 'avatar',
    bio: 'bio',
    is_admin: 'is_admin',
    followers_count: 'followers_count',
    following_count: 'following_count',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CommentsOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type CommentsOrderByRelevanceFieldEnum = (typeof CommentsOrderByRelevanceFieldEnum)[keyof typeof CommentsOrderByRelevanceFieldEnum]


  export const PhotosOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    image_url: 'image_url'
  };

  export type PhotosOrderByRelevanceFieldEnum = (typeof PhotosOrderByRelevanceFieldEnum)[keyof typeof PhotosOrderByRelevanceFieldEnum]


  export const User_SessionsOrderByRelevanceFieldEnum: {
    refresh_token: 'refresh_token'
  };

  export type User_SessionsOrderByRelevanceFieldEnum = (typeof User_SessionsOrderByRelevanceFieldEnum)[keyof typeof User_SessionsOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    email: 'email',
    username: 'username',
    password: 'password',
    full_name: 'full_name',
    avatar: 'avatar',
    bio: 'bio'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: IntFilter<"Comments"> | number
    photo_id?: IntFilter<"Comments"> | number
    user_id?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    created_at?: DateTimeNullableFilter<"Comments"> | Date | string | null
    Photos?: XOR<PhotosScalarRelationFilter, PhotosWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    Photos?: PhotosOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
    _relevance?: CommentsOrderByRelevanceInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    photo_id?: IntFilter<"Comments"> | number
    user_id?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    created_at?: DateTimeNullableFilter<"Comments"> | Date | string | null
    Photos?: XOR<PhotosScalarRelationFilter, PhotosWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments"> | number
    photo_id?: IntWithAggregatesFilter<"Comments"> | number
    user_id?: IntWithAggregatesFilter<"Comments"> | number
    content?: StringWithAggregatesFilter<"Comments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Comments"> | Date | string | null
  }

  export type FollowsWhereInput = {
    AND?: FollowsWhereInput | FollowsWhereInput[]
    OR?: FollowsWhereInput[]
    NOT?: FollowsWhereInput | FollowsWhereInput[]
    id?: IntFilter<"Follows"> | number
    follower_id?: IntFilter<"Follows"> | number
    following_id?: IntFilter<"Follows"> | number
    created_at?: DateTimeNullableFilter<"Follows"> | Date | string | null
    Users_Follows_follower_idToUsers?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Users_Follows_following_idToUsers?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type FollowsOrderByWithRelationInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    Users_Follows_follower_idToUsers?: UsersOrderByWithRelationInput
    Users_Follows_following_idToUsers?: UsersOrderByWithRelationInput
  }

  export type FollowsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    follower_id_following_id?: FollowsFollower_idFollowing_idCompoundUniqueInput
    AND?: FollowsWhereInput | FollowsWhereInput[]
    OR?: FollowsWhereInput[]
    NOT?: FollowsWhereInput | FollowsWhereInput[]
    follower_id?: IntFilter<"Follows"> | number
    following_id?: IntFilter<"Follows"> | number
    created_at?: DateTimeNullableFilter<"Follows"> | Date | string | null
    Users_Follows_follower_idToUsers?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Users_Follows_following_idToUsers?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "follower_id_following_id">

  export type FollowsOrderByWithAggregationInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: FollowsCountOrderByAggregateInput
    _avg?: FollowsAvgOrderByAggregateInput
    _max?: FollowsMaxOrderByAggregateInput
    _min?: FollowsMinOrderByAggregateInput
    _sum?: FollowsSumOrderByAggregateInput
  }

  export type FollowsScalarWhereWithAggregatesInput = {
    AND?: FollowsScalarWhereWithAggregatesInput | FollowsScalarWhereWithAggregatesInput[]
    OR?: FollowsScalarWhereWithAggregatesInput[]
    NOT?: FollowsScalarWhereWithAggregatesInput | FollowsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Follows"> | number
    follower_id?: IntWithAggregatesFilter<"Follows"> | number
    following_id?: IntWithAggregatesFilter<"Follows"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"Follows"> | Date | string | null
  }

  export type Photo_LikesWhereInput = {
    AND?: Photo_LikesWhereInput | Photo_LikesWhereInput[]
    OR?: Photo_LikesWhereInput[]
    NOT?: Photo_LikesWhereInput | Photo_LikesWhereInput[]
    id?: IntFilter<"Photo_Likes"> | number
    photo_id?: IntFilter<"Photo_Likes"> | number
    user_id?: IntFilter<"Photo_Likes"> | number
    created_at?: DateTimeNullableFilter<"Photo_Likes"> | Date | string | null
    Photos?: XOR<PhotosScalarRelationFilter, PhotosWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type Photo_LikesOrderByWithRelationInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    Photos?: PhotosOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
  }

  export type Photo_LikesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    photo_id_user_id?: Photo_LikesPhoto_idUser_idCompoundUniqueInput
    AND?: Photo_LikesWhereInput | Photo_LikesWhereInput[]
    OR?: Photo_LikesWhereInput[]
    NOT?: Photo_LikesWhereInput | Photo_LikesWhereInput[]
    photo_id?: IntFilter<"Photo_Likes"> | number
    user_id?: IntFilter<"Photo_Likes"> | number
    created_at?: DateTimeNullableFilter<"Photo_Likes"> | Date | string | null
    Photos?: XOR<PhotosScalarRelationFilter, PhotosWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "photo_id_user_id">

  export type Photo_LikesOrderByWithAggregationInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: Photo_LikesCountOrderByAggregateInput
    _avg?: Photo_LikesAvgOrderByAggregateInput
    _max?: Photo_LikesMaxOrderByAggregateInput
    _min?: Photo_LikesMinOrderByAggregateInput
    _sum?: Photo_LikesSumOrderByAggregateInput
  }

  export type Photo_LikesScalarWhereWithAggregatesInput = {
    AND?: Photo_LikesScalarWhereWithAggregatesInput | Photo_LikesScalarWhereWithAggregatesInput[]
    OR?: Photo_LikesScalarWhereWithAggregatesInput[]
    NOT?: Photo_LikesScalarWhereWithAggregatesInput | Photo_LikesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photo_Likes"> | number
    photo_id?: IntWithAggregatesFilter<"Photo_Likes"> | number
    user_id?: IntWithAggregatesFilter<"Photo_Likes"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"Photo_Likes"> | Date | string | null
  }

  export type PhotosWhereInput = {
    AND?: PhotosWhereInput | PhotosWhereInput[]
    OR?: PhotosWhereInput[]
    NOT?: PhotosWhereInput | PhotosWhereInput[]
    id?: IntFilter<"Photos"> | number
    user_id?: IntFilter<"Photos"> | number
    title?: StringNullableFilter<"Photos"> | string | null
    description?: StringNullableFilter<"Photos"> | string | null
    image_url?: StringFilter<"Photos"> | string
    likes_count?: IntNullableFilter<"Photos"> | number | null
    comments_count?: IntNullableFilter<"Photos"> | number | null
    created_at?: DateTimeNullableFilter<"Photos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Photos"> | Date | string | null
    Comments?: CommentsListRelationFilter
    Photo_Likes?: Photo_LikesListRelationFilter
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type PhotosOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrder
    likes_count?: SortOrderInput | SortOrder
    comments_count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
    Photo_Likes?: Photo_LikesOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
    _relevance?: PhotosOrderByRelevanceInput
  }

  export type PhotosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotosWhereInput | PhotosWhereInput[]
    OR?: PhotosWhereInput[]
    NOT?: PhotosWhereInput | PhotosWhereInput[]
    user_id?: IntFilter<"Photos"> | number
    title?: StringNullableFilter<"Photos"> | string | null
    description?: StringNullableFilter<"Photos"> | string | null
    image_url?: StringFilter<"Photos"> | string
    likes_count?: IntNullableFilter<"Photos"> | number | null
    comments_count?: IntNullableFilter<"Photos"> | number | null
    created_at?: DateTimeNullableFilter<"Photos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Photos"> | Date | string | null
    Comments?: CommentsListRelationFilter
    Photo_Likes?: Photo_LikesListRelationFilter
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type PhotosOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrder
    likes_count?: SortOrderInput | SortOrder
    comments_count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: PhotosCountOrderByAggregateInput
    _avg?: PhotosAvgOrderByAggregateInput
    _max?: PhotosMaxOrderByAggregateInput
    _min?: PhotosMinOrderByAggregateInput
    _sum?: PhotosSumOrderByAggregateInput
  }

  export type PhotosScalarWhereWithAggregatesInput = {
    AND?: PhotosScalarWhereWithAggregatesInput | PhotosScalarWhereWithAggregatesInput[]
    OR?: PhotosScalarWhereWithAggregatesInput[]
    NOT?: PhotosScalarWhereWithAggregatesInput | PhotosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photos"> | number
    user_id?: IntWithAggregatesFilter<"Photos"> | number
    title?: StringNullableWithAggregatesFilter<"Photos"> | string | null
    description?: StringNullableWithAggregatesFilter<"Photos"> | string | null
    image_url?: StringWithAggregatesFilter<"Photos"> | string
    likes_count?: IntNullableWithAggregatesFilter<"Photos"> | number | null
    comments_count?: IntNullableWithAggregatesFilter<"Photos"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Photos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Photos"> | Date | string | null
  }

  export type User_SessionsWhereInput = {
    AND?: User_SessionsWhereInput | User_SessionsWhereInput[]
    OR?: User_SessionsWhereInput[]
    NOT?: User_SessionsWhereInput | User_SessionsWhereInput[]
    id?: IntFilter<"User_Sessions"> | number
    user_id?: IntFilter<"User_Sessions"> | number
    refresh_token?: StringFilter<"User_Sessions"> | string
    expires_at?: DateTimeFilter<"User_Sessions"> | Date | string
    created_at?: DateTimeNullableFilter<"User_Sessions"> | Date | string | null
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type User_SessionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    Users?: UsersOrderByWithRelationInput
    _relevance?: User_SessionsOrderByRelevanceInput
  }

  export type User_SessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: User_SessionsWhereInput | User_SessionsWhereInput[]
    OR?: User_SessionsWhereInput[]
    NOT?: User_SessionsWhereInput | User_SessionsWhereInput[]
    user_id?: IntFilter<"User_Sessions"> | number
    refresh_token?: StringFilter<"User_Sessions"> | string
    expires_at?: DateTimeFilter<"User_Sessions"> | Date | string
    created_at?: DateTimeNullableFilter<"User_Sessions"> | Date | string | null
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type User_SessionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: User_SessionsCountOrderByAggregateInput
    _avg?: User_SessionsAvgOrderByAggregateInput
    _max?: User_SessionsMaxOrderByAggregateInput
    _min?: User_SessionsMinOrderByAggregateInput
    _sum?: User_SessionsSumOrderByAggregateInput
  }

  export type User_SessionsScalarWhereWithAggregatesInput = {
    AND?: User_SessionsScalarWhereWithAggregatesInput | User_SessionsScalarWhereWithAggregatesInput[]
    OR?: User_SessionsScalarWhereWithAggregatesInput[]
    NOT?: User_SessionsScalarWhereWithAggregatesInput | User_SessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User_Sessions"> | number
    user_id?: IntWithAggregatesFilter<"User_Sessions"> | number
    refresh_token?: StringWithAggregatesFilter<"User_Sessions"> | string
    expires_at?: DateTimeWithAggregatesFilter<"User_Sessions"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"User_Sessions"> | Date | string | null
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    full_name?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    bio?: StringNullableFilter<"Users"> | string | null
    is_admin?: BoolNullableFilter<"Users"> | boolean | null
    followers_count?: IntNullableFilter<"Users"> | number | null
    following_count?: IntNullableFilter<"Users"> | number | null
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    Comments?: CommentsListRelationFilter
    Follows_Follows_follower_idToUsers?: FollowsListRelationFilter
    Follows_Follows_following_idToUsers?: FollowsListRelationFilter
    Photo_Likes?: Photo_LikesListRelationFilter
    Photos?: PhotosListRelationFilter
    User_Sessions?: User_SessionsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    full_name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    is_admin?: SortOrderInput | SortOrder
    followers_count?: SortOrderInput | SortOrder
    following_count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
    Follows_Follows_follower_idToUsers?: FollowsOrderByRelationAggregateInput
    Follows_Follows_following_idToUsers?: FollowsOrderByRelationAggregateInput
    Photo_Likes?: Photo_LikesOrderByRelationAggregateInput
    Photos?: PhotosOrderByRelationAggregateInput
    User_Sessions?: User_SessionsOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    full_name?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    bio?: StringNullableFilter<"Users"> | string | null
    is_admin?: BoolNullableFilter<"Users"> | boolean | null
    followers_count?: IntNullableFilter<"Users"> | number | null
    following_count?: IntNullableFilter<"Users"> | number | null
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    Comments?: CommentsListRelationFilter
    Follows_Follows_follower_idToUsers?: FollowsListRelationFilter
    Follows_Follows_following_idToUsers?: FollowsListRelationFilter
    Photo_Likes?: Photo_LikesListRelationFilter
    Photos?: PhotosListRelationFilter
    User_Sessions?: User_SessionsListRelationFilter
  }, "id" | "email" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    full_name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    is_admin?: SortOrderInput | SortOrder
    followers_count?: SortOrderInput | SortOrder
    following_count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    full_name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Users"> | string | null
    is_admin?: BoolNullableWithAggregatesFilter<"Users"> | boolean | null
    followers_count?: IntNullableWithAggregatesFilter<"Users"> | number | null
    following_count?: IntNullableWithAggregatesFilter<"Users"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
  }

  export type CommentsCreateInput = {
    content: string
    created_at?: Date | string | null
    Photos: PhotosCreateNestedOneWithoutCommentsInput
    Users: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    photo_id: number
    user_id: number
    content: string
    created_at?: Date | string | null
  }

  export type CommentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Photos?: PhotosUpdateOneRequiredWithoutCommentsNestedInput
    Users?: UsersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsCreateManyInput = {
    id?: number
    photo_id: number
    user_id: number
    content: string
    created_at?: Date | string | null
  }

  export type CommentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowsCreateInput = {
    created_at?: Date | string | null
    Users_Follows_follower_idToUsers: UsersCreateNestedOneWithoutFollows_Follows_follower_idToUsersInput
    Users_Follows_following_idToUsers: UsersCreateNestedOneWithoutFollows_Follows_following_idToUsersInput
  }

  export type FollowsUncheckedCreateInput = {
    id?: number
    follower_id: number
    following_id: number
    created_at?: Date | string | null
  }

  export type FollowsUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users_Follows_follower_idToUsers?: UsersUpdateOneRequiredWithoutFollows_Follows_follower_idToUsersNestedInput
    Users_Follows_following_idToUsers?: UsersUpdateOneRequiredWithoutFollows_Follows_following_idToUsersNestedInput
  }

  export type FollowsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower_id?: IntFieldUpdateOperationsInput | number
    following_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowsCreateManyInput = {
    id?: number
    follower_id: number
    following_id: number
    created_at?: Date | string | null
  }

  export type FollowsUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower_id?: IntFieldUpdateOperationsInput | number
    following_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Photo_LikesCreateInput = {
    created_at?: Date | string | null
    Photos: PhotosCreateNestedOneWithoutPhoto_LikesInput
    Users: UsersCreateNestedOneWithoutPhoto_LikesInput
  }

  export type Photo_LikesUncheckedCreateInput = {
    id?: number
    photo_id: number
    user_id: number
    created_at?: Date | string | null
  }

  export type Photo_LikesUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Photos?: PhotosUpdateOneRequiredWithoutPhoto_LikesNestedInput
    Users?: UsersUpdateOneRequiredWithoutPhoto_LikesNestedInput
  }

  export type Photo_LikesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Photo_LikesCreateManyInput = {
    id?: number
    photo_id: number
    user_id: number
    created_at?: Date | string | null
  }

  export type Photo_LikesUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Photo_LikesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhotosCreateInput = {
    title?: string | null
    description?: string | null
    image_url: string
    likes_count?: number | null
    comments_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutPhotosInput
    Photo_Likes?: Photo_LikesCreateNestedManyWithoutPhotosInput
    Users: UsersCreateNestedOneWithoutPhotosInput
  }

  export type PhotosUncheckedCreateInput = {
    id?: number
    user_id: number
    title?: string | null
    description?: string | null
    image_url: string
    likes_count?: number | null
    comments_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutPhotosInput
    Photo_Likes?: Photo_LikesUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type PhotosUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutPhotosNestedInput
    Photo_Likes?: Photo_LikesUpdateManyWithoutPhotosNestedInput
    Users?: UsersUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutPhotosNestedInput
    Photo_Likes?: Photo_LikesUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type PhotosCreateManyInput = {
    id?: number
    user_id: number
    title?: string | null
    description?: string | null
    image_url: string
    likes_count?: number | null
    comments_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type PhotosUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhotosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User_SessionsCreateInput = {
    refresh_token: string
    expires_at: Date | string
    created_at?: Date | string | null
    Users: UsersCreateNestedOneWithoutUser_SessionsInput
  }

  export type User_SessionsUncheckedCreateInput = {
    id?: number
    user_id: number
    refresh_token: string
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type User_SessionsUpdateInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUpdateOneRequiredWithoutUser_SessionsNestedInput
  }

  export type User_SessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User_SessionsCreateManyInput = {
    id?: number
    user_id: number
    refresh_token: string
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type User_SessionsUpdateManyMutationInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User_SessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateInput = {
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Follows_Follows_follower_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Follows_Follows_following_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photo_Likes?: Photo_LikesCreateNestedManyWithoutUsersInput
    Photos?: PhotosCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Follows_Follows_follower_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photo_Likes?: Photo_LikesUncheckedCreateNestedManyWithoutUsersInput
    Photos?: PhotosUncheckedCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Follows_Follows_follower_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUpdateManyWithoutUsersNestedInput
    Photos?: PhotosUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Follows_Follows_follower_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUncheckedUpdateManyWithoutUsersNestedInput
    Photos?: PhotosUncheckedUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PhotosScalarRelationFilter = {
    is?: PhotosWhereInput
    isNot?: PhotosWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentsOrderByRelevanceInput = {
    fields: CommentsOrderByRelevanceFieldEnum | CommentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FollowsFollower_idFollowing_idCompoundUniqueInput = {
    follower_id: number
    following_id: number
  }

  export type FollowsCountOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    created_at?: SortOrder
  }

  export type FollowsAvgOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
  }

  export type FollowsMaxOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    created_at?: SortOrder
  }

  export type FollowsMinOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    created_at?: SortOrder
  }

  export type FollowsSumOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
  }

  export type Photo_LikesPhoto_idUser_idCompoundUniqueInput = {
    photo_id: number
    user_id: number
  }

  export type Photo_LikesCountOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type Photo_LikesAvgOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
  }

  export type Photo_LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type Photo_LikesMinOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type Photo_LikesSumOrderByAggregateInput = {
    id?: SortOrder
    photo_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type Photo_LikesListRelationFilter = {
    every?: Photo_LikesWhereInput
    some?: Photo_LikesWhereInput
    none?: Photo_LikesWhereInput
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Photo_LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotosOrderByRelevanceInput = {
    fields: PhotosOrderByRelevanceFieldEnum | PhotosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotosCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PhotosAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
  }

  export type PhotosMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PhotosMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PhotosSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_SessionsOrderByRelevanceInput = {
    fields: User_SessionsOrderByRelevanceFieldEnum | User_SessionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type User_SessionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type User_SessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type User_SessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type User_SessionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
  }

  export type User_SessionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FollowsListRelationFilter = {
    every?: FollowsWhereInput
    some?: FollowsWhereInput
    none?: FollowsWhereInput
  }

  export type PhotosListRelationFilter = {
    every?: PhotosWhereInput
    some?: PhotosWhereInput
    none?: PhotosWhereInput
  }

  export type User_SessionsListRelationFilter = {
    every?: User_SessionsWhereInput
    some?: User_SessionsWhereInput
    none?: User_SessionsWhereInput
  }

  export type FollowsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_SessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    full_name?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    is_admin?: SortOrder
    followers_count?: SortOrder
    following_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    followers_count?: SortOrder
    following_count?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    full_name?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    is_admin?: SortOrder
    followers_count?: SortOrder
    following_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    full_name?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    is_admin?: SortOrder
    followers_count?: SortOrder
    following_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    followers_count?: SortOrder
    following_count?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PhotosCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PhotosCreateWithoutCommentsInput, PhotosUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PhotosCreateOrConnectWithoutCommentsInput
    connect?: PhotosWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PhotosUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PhotosCreateWithoutCommentsInput, PhotosUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PhotosCreateOrConnectWithoutCommentsInput
    upsert?: PhotosUpsertWithoutCommentsInput
    connect?: PhotosWhereUniqueInput
    update?: XOR<XOR<PhotosUpdateToOneWithWhereWithoutCommentsInput, PhotosUpdateWithoutCommentsInput>, PhotosUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedOneWithoutFollows_Follows_follower_idToUsersInput = {
    create?: XOR<UsersCreateWithoutFollows_Follows_follower_idToUsersInput, UsersUncheckedCreateWithoutFollows_Follows_follower_idToUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollows_Follows_follower_idToUsersInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutFollows_Follows_following_idToUsersInput = {
    create?: XOR<UsersCreateWithoutFollows_Follows_following_idToUsersInput, UsersUncheckedCreateWithoutFollows_Follows_following_idToUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollows_Follows_following_idToUsersInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutFollows_Follows_follower_idToUsersNestedInput = {
    create?: XOR<UsersCreateWithoutFollows_Follows_follower_idToUsersInput, UsersUncheckedCreateWithoutFollows_Follows_follower_idToUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollows_Follows_follower_idToUsersInput
    upsert?: UsersUpsertWithoutFollows_Follows_follower_idToUsersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFollows_Follows_follower_idToUsersInput, UsersUpdateWithoutFollows_Follows_follower_idToUsersInput>, UsersUncheckedUpdateWithoutFollows_Follows_follower_idToUsersInput>
  }

  export type UsersUpdateOneRequiredWithoutFollows_Follows_following_idToUsersNestedInput = {
    create?: XOR<UsersCreateWithoutFollows_Follows_following_idToUsersInput, UsersUncheckedCreateWithoutFollows_Follows_following_idToUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollows_Follows_following_idToUsersInput
    upsert?: UsersUpsertWithoutFollows_Follows_following_idToUsersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFollows_Follows_following_idToUsersInput, UsersUpdateWithoutFollows_Follows_following_idToUsersInput>, UsersUncheckedUpdateWithoutFollows_Follows_following_idToUsersInput>
  }

  export type PhotosCreateNestedOneWithoutPhoto_LikesInput = {
    create?: XOR<PhotosCreateWithoutPhoto_LikesInput, PhotosUncheckedCreateWithoutPhoto_LikesInput>
    connectOrCreate?: PhotosCreateOrConnectWithoutPhoto_LikesInput
    connect?: PhotosWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutPhoto_LikesInput = {
    create?: XOR<UsersCreateWithoutPhoto_LikesInput, UsersUncheckedCreateWithoutPhoto_LikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPhoto_LikesInput
    connect?: UsersWhereUniqueInput
  }

  export type PhotosUpdateOneRequiredWithoutPhoto_LikesNestedInput = {
    create?: XOR<PhotosCreateWithoutPhoto_LikesInput, PhotosUncheckedCreateWithoutPhoto_LikesInput>
    connectOrCreate?: PhotosCreateOrConnectWithoutPhoto_LikesInput
    upsert?: PhotosUpsertWithoutPhoto_LikesInput
    connect?: PhotosWhereUniqueInput
    update?: XOR<XOR<PhotosUpdateToOneWithWhereWithoutPhoto_LikesInput, PhotosUpdateWithoutPhoto_LikesInput>, PhotosUncheckedUpdateWithoutPhoto_LikesInput>
  }

  export type UsersUpdateOneRequiredWithoutPhoto_LikesNestedInput = {
    create?: XOR<UsersCreateWithoutPhoto_LikesInput, UsersUncheckedCreateWithoutPhoto_LikesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPhoto_LikesInput
    upsert?: UsersUpsertWithoutPhoto_LikesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPhoto_LikesInput, UsersUpdateWithoutPhoto_LikesInput>, UsersUncheckedUpdateWithoutPhoto_LikesInput>
  }

  export type CommentsCreateNestedManyWithoutPhotosInput = {
    create?: XOR<CommentsCreateWithoutPhotosInput, CommentsUncheckedCreateWithoutPhotosInput> | CommentsCreateWithoutPhotosInput[] | CommentsUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPhotosInput | CommentsCreateOrConnectWithoutPhotosInput[]
    createMany?: CommentsCreateManyPhotosInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type Photo_LikesCreateNestedManyWithoutPhotosInput = {
    create?: XOR<Photo_LikesCreateWithoutPhotosInput, Photo_LikesUncheckedCreateWithoutPhotosInput> | Photo_LikesCreateWithoutPhotosInput[] | Photo_LikesUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: Photo_LikesCreateOrConnectWithoutPhotosInput | Photo_LikesCreateOrConnectWithoutPhotosInput[]
    createMany?: Photo_LikesCreateManyPhotosInputEnvelope
    connect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutPhotosInput = {
    create?: XOR<UsersCreateWithoutPhotosInput, UsersUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPhotosInput
    connect?: UsersWhereUniqueInput
  }

  export type CommentsUncheckedCreateNestedManyWithoutPhotosInput = {
    create?: XOR<CommentsCreateWithoutPhotosInput, CommentsUncheckedCreateWithoutPhotosInput> | CommentsCreateWithoutPhotosInput[] | CommentsUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPhotosInput | CommentsCreateOrConnectWithoutPhotosInput[]
    createMany?: CommentsCreateManyPhotosInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type Photo_LikesUncheckedCreateNestedManyWithoutPhotosInput = {
    create?: XOR<Photo_LikesCreateWithoutPhotosInput, Photo_LikesUncheckedCreateWithoutPhotosInput> | Photo_LikesCreateWithoutPhotosInput[] | Photo_LikesUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: Photo_LikesCreateOrConnectWithoutPhotosInput | Photo_LikesCreateOrConnectWithoutPhotosInput[]
    createMany?: Photo_LikesCreateManyPhotosInputEnvelope
    connect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentsUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<CommentsCreateWithoutPhotosInput, CommentsUncheckedCreateWithoutPhotosInput> | CommentsCreateWithoutPhotosInput[] | CommentsUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPhotosInput | CommentsCreateOrConnectWithoutPhotosInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPhotosInput | CommentsUpsertWithWhereUniqueWithoutPhotosInput[]
    createMany?: CommentsCreateManyPhotosInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPhotosInput | CommentsUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPhotosInput | CommentsUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type Photo_LikesUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<Photo_LikesCreateWithoutPhotosInput, Photo_LikesUncheckedCreateWithoutPhotosInput> | Photo_LikesCreateWithoutPhotosInput[] | Photo_LikesUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: Photo_LikesCreateOrConnectWithoutPhotosInput | Photo_LikesCreateOrConnectWithoutPhotosInput[]
    upsert?: Photo_LikesUpsertWithWhereUniqueWithoutPhotosInput | Photo_LikesUpsertWithWhereUniqueWithoutPhotosInput[]
    createMany?: Photo_LikesCreateManyPhotosInputEnvelope
    set?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    disconnect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    delete?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    connect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    update?: Photo_LikesUpdateWithWhereUniqueWithoutPhotosInput | Photo_LikesUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: Photo_LikesUpdateManyWithWhereWithoutPhotosInput | Photo_LikesUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: Photo_LikesScalarWhereInput | Photo_LikesScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<UsersCreateWithoutPhotosInput, UsersUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPhotosInput
    upsert?: UsersUpsertWithoutPhotosInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPhotosInput, UsersUpdateWithoutPhotosInput>, UsersUncheckedUpdateWithoutPhotosInput>
  }

  export type CommentsUncheckedUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<CommentsCreateWithoutPhotosInput, CommentsUncheckedCreateWithoutPhotosInput> | CommentsCreateWithoutPhotosInput[] | CommentsUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPhotosInput | CommentsCreateOrConnectWithoutPhotosInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPhotosInput | CommentsUpsertWithWhereUniqueWithoutPhotosInput[]
    createMany?: CommentsCreateManyPhotosInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPhotosInput | CommentsUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPhotosInput | CommentsUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type Photo_LikesUncheckedUpdateManyWithoutPhotosNestedInput = {
    create?: XOR<Photo_LikesCreateWithoutPhotosInput, Photo_LikesUncheckedCreateWithoutPhotosInput> | Photo_LikesCreateWithoutPhotosInput[] | Photo_LikesUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?: Photo_LikesCreateOrConnectWithoutPhotosInput | Photo_LikesCreateOrConnectWithoutPhotosInput[]
    upsert?: Photo_LikesUpsertWithWhereUniqueWithoutPhotosInput | Photo_LikesUpsertWithWhereUniqueWithoutPhotosInput[]
    createMany?: Photo_LikesCreateManyPhotosInputEnvelope
    set?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    disconnect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    delete?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    connect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    update?: Photo_LikesUpdateWithWhereUniqueWithoutPhotosInput | Photo_LikesUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?: Photo_LikesUpdateManyWithWhereWithoutPhotosInput | Photo_LikesUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: Photo_LikesScalarWhereInput | Photo_LikesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUser_SessionsInput = {
    create?: XOR<UsersCreateWithoutUser_SessionsInput, UsersUncheckedCreateWithoutUser_SessionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_SessionsInput
    connect?: UsersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutUser_SessionsNestedInput = {
    create?: XOR<UsersCreateWithoutUser_SessionsInput, UsersUncheckedCreateWithoutUser_SessionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_SessionsInput
    upsert?: UsersUpsertWithoutUser_SessionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUser_SessionsInput, UsersUpdateWithoutUser_SessionsInput>, UsersUncheckedUpdateWithoutUser_SessionsInput>
  }

  export type CommentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type FollowsCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput = {
    create?: XOR<FollowsCreateWithoutUsers_Follows_follower_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput> | FollowsCreateWithoutUsers_Follows_follower_idToUsersInput[] | FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutUsers_Follows_follower_idToUsersInput | FollowsCreateOrConnectWithoutUsers_Follows_follower_idToUsersInput[]
    createMany?: FollowsCreateManyUsers_Follows_follower_idToUsersInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type FollowsCreateNestedManyWithoutUsers_Follows_following_idToUsersInput = {
    create?: XOR<FollowsCreateWithoutUsers_Follows_following_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput> | FollowsCreateWithoutUsers_Follows_following_idToUsersInput[] | FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutUsers_Follows_following_idToUsersInput | FollowsCreateOrConnectWithoutUsers_Follows_following_idToUsersInput[]
    createMany?: FollowsCreateManyUsers_Follows_following_idToUsersInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type Photo_LikesCreateNestedManyWithoutUsersInput = {
    create?: XOR<Photo_LikesCreateWithoutUsersInput, Photo_LikesUncheckedCreateWithoutUsersInput> | Photo_LikesCreateWithoutUsersInput[] | Photo_LikesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Photo_LikesCreateOrConnectWithoutUsersInput | Photo_LikesCreateOrConnectWithoutUsersInput[]
    createMany?: Photo_LikesCreateManyUsersInputEnvelope
    connect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
  }

  export type PhotosCreateNestedManyWithoutUsersInput = {
    create?: XOR<PhotosCreateWithoutUsersInput, PhotosUncheckedCreateWithoutUsersInput> | PhotosCreateWithoutUsersInput[] | PhotosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PhotosCreateOrConnectWithoutUsersInput | PhotosCreateOrConnectWithoutUsersInput[]
    createMany?: PhotosCreateManyUsersInputEnvelope
    connect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
  }

  export type User_SessionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<User_SessionsCreateWithoutUsersInput, User_SessionsUncheckedCreateWithoutUsersInput> | User_SessionsCreateWithoutUsersInput[] | User_SessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: User_SessionsCreateOrConnectWithoutUsersInput | User_SessionsCreateOrConnectWithoutUsersInput[]
    createMany?: User_SessionsCreateManyUsersInputEnvelope
    connect?: User_SessionsWhereUniqueInput | User_SessionsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type FollowsUncheckedCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput = {
    create?: XOR<FollowsCreateWithoutUsers_Follows_follower_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput> | FollowsCreateWithoutUsers_Follows_follower_idToUsersInput[] | FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutUsers_Follows_follower_idToUsersInput | FollowsCreateOrConnectWithoutUsers_Follows_follower_idToUsersInput[]
    createMany?: FollowsCreateManyUsers_Follows_follower_idToUsersInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type FollowsUncheckedCreateNestedManyWithoutUsers_Follows_following_idToUsersInput = {
    create?: XOR<FollowsCreateWithoutUsers_Follows_following_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput> | FollowsCreateWithoutUsers_Follows_following_idToUsersInput[] | FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutUsers_Follows_following_idToUsersInput | FollowsCreateOrConnectWithoutUsers_Follows_following_idToUsersInput[]
    createMany?: FollowsCreateManyUsers_Follows_following_idToUsersInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type Photo_LikesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Photo_LikesCreateWithoutUsersInput, Photo_LikesUncheckedCreateWithoutUsersInput> | Photo_LikesCreateWithoutUsersInput[] | Photo_LikesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Photo_LikesCreateOrConnectWithoutUsersInput | Photo_LikesCreateOrConnectWithoutUsersInput[]
    createMany?: Photo_LikesCreateManyUsersInputEnvelope
    connect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
  }

  export type PhotosUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<PhotosCreateWithoutUsersInput, PhotosUncheckedCreateWithoutUsersInput> | PhotosCreateWithoutUsersInput[] | PhotosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PhotosCreateOrConnectWithoutUsersInput | PhotosCreateOrConnectWithoutUsersInput[]
    createMany?: PhotosCreateManyUsersInputEnvelope
    connect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
  }

  export type User_SessionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<User_SessionsCreateWithoutUsersInput, User_SessionsUncheckedCreateWithoutUsersInput> | User_SessionsCreateWithoutUsersInput[] | User_SessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: User_SessionsCreateOrConnectWithoutUsersInput | User_SessionsCreateOrConnectWithoutUsersInput[]
    createMany?: User_SessionsCreateManyUsersInputEnvelope
    connect?: User_SessionsWhereUniqueInput | User_SessionsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CommentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput | CommentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUsersInput | CommentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput | CommentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type FollowsUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput = {
    create?: XOR<FollowsCreateWithoutUsers_Follows_follower_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput> | FollowsCreateWithoutUsers_Follows_follower_idToUsersInput[] | FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutUsers_Follows_follower_idToUsersInput | FollowsCreateOrConnectWithoutUsers_Follows_follower_idToUsersInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutUsers_Follows_follower_idToUsersInput | FollowsUpsertWithWhereUniqueWithoutUsers_Follows_follower_idToUsersInput[]
    createMany?: FollowsCreateManyUsers_Follows_follower_idToUsersInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutUsers_Follows_follower_idToUsersInput | FollowsUpdateWithWhereUniqueWithoutUsers_Follows_follower_idToUsersInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutUsers_Follows_follower_idToUsersInput | FollowsUpdateManyWithWhereWithoutUsers_Follows_follower_idToUsersInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type FollowsUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput = {
    create?: XOR<FollowsCreateWithoutUsers_Follows_following_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput> | FollowsCreateWithoutUsers_Follows_following_idToUsersInput[] | FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutUsers_Follows_following_idToUsersInput | FollowsCreateOrConnectWithoutUsers_Follows_following_idToUsersInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutUsers_Follows_following_idToUsersInput | FollowsUpsertWithWhereUniqueWithoutUsers_Follows_following_idToUsersInput[]
    createMany?: FollowsCreateManyUsers_Follows_following_idToUsersInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutUsers_Follows_following_idToUsersInput | FollowsUpdateWithWhereUniqueWithoutUsers_Follows_following_idToUsersInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutUsers_Follows_following_idToUsersInput | FollowsUpdateManyWithWhereWithoutUsers_Follows_following_idToUsersInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type Photo_LikesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Photo_LikesCreateWithoutUsersInput, Photo_LikesUncheckedCreateWithoutUsersInput> | Photo_LikesCreateWithoutUsersInput[] | Photo_LikesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Photo_LikesCreateOrConnectWithoutUsersInput | Photo_LikesCreateOrConnectWithoutUsersInput[]
    upsert?: Photo_LikesUpsertWithWhereUniqueWithoutUsersInput | Photo_LikesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Photo_LikesCreateManyUsersInputEnvelope
    set?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    disconnect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    delete?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    connect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    update?: Photo_LikesUpdateWithWhereUniqueWithoutUsersInput | Photo_LikesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Photo_LikesUpdateManyWithWhereWithoutUsersInput | Photo_LikesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Photo_LikesScalarWhereInput | Photo_LikesScalarWhereInput[]
  }

  export type PhotosUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PhotosCreateWithoutUsersInput, PhotosUncheckedCreateWithoutUsersInput> | PhotosCreateWithoutUsersInput[] | PhotosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PhotosCreateOrConnectWithoutUsersInput | PhotosCreateOrConnectWithoutUsersInput[]
    upsert?: PhotosUpsertWithWhereUniqueWithoutUsersInput | PhotosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: PhotosCreateManyUsersInputEnvelope
    set?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    disconnect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    delete?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    connect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    update?: PhotosUpdateWithWhereUniqueWithoutUsersInput | PhotosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PhotosUpdateManyWithWhereWithoutUsersInput | PhotosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PhotosScalarWhereInput | PhotosScalarWhereInput[]
  }

  export type User_SessionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<User_SessionsCreateWithoutUsersInput, User_SessionsUncheckedCreateWithoutUsersInput> | User_SessionsCreateWithoutUsersInput[] | User_SessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: User_SessionsCreateOrConnectWithoutUsersInput | User_SessionsCreateOrConnectWithoutUsersInput[]
    upsert?: User_SessionsUpsertWithWhereUniqueWithoutUsersInput | User_SessionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: User_SessionsCreateManyUsersInputEnvelope
    set?: User_SessionsWhereUniqueInput | User_SessionsWhereUniqueInput[]
    disconnect?: User_SessionsWhereUniqueInput | User_SessionsWhereUniqueInput[]
    delete?: User_SessionsWhereUniqueInput | User_SessionsWhereUniqueInput[]
    connect?: User_SessionsWhereUniqueInput | User_SessionsWhereUniqueInput[]
    update?: User_SessionsUpdateWithWhereUniqueWithoutUsersInput | User_SessionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: User_SessionsUpdateManyWithWhereWithoutUsersInput | User_SessionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: User_SessionsScalarWhereInput | User_SessionsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput | CommentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUsersInput | CommentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput | CommentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type FollowsUncheckedUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput = {
    create?: XOR<FollowsCreateWithoutUsers_Follows_follower_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput> | FollowsCreateWithoutUsers_Follows_follower_idToUsersInput[] | FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutUsers_Follows_follower_idToUsersInput | FollowsCreateOrConnectWithoutUsers_Follows_follower_idToUsersInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutUsers_Follows_follower_idToUsersInput | FollowsUpsertWithWhereUniqueWithoutUsers_Follows_follower_idToUsersInput[]
    createMany?: FollowsCreateManyUsers_Follows_follower_idToUsersInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutUsers_Follows_follower_idToUsersInput | FollowsUpdateWithWhereUniqueWithoutUsers_Follows_follower_idToUsersInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutUsers_Follows_follower_idToUsersInput | FollowsUpdateManyWithWhereWithoutUsers_Follows_follower_idToUsersInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type FollowsUncheckedUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput = {
    create?: XOR<FollowsCreateWithoutUsers_Follows_following_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput> | FollowsCreateWithoutUsers_Follows_following_idToUsersInput[] | FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutUsers_Follows_following_idToUsersInput | FollowsCreateOrConnectWithoutUsers_Follows_following_idToUsersInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutUsers_Follows_following_idToUsersInput | FollowsUpsertWithWhereUniqueWithoutUsers_Follows_following_idToUsersInput[]
    createMany?: FollowsCreateManyUsers_Follows_following_idToUsersInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutUsers_Follows_following_idToUsersInput | FollowsUpdateWithWhereUniqueWithoutUsers_Follows_following_idToUsersInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutUsers_Follows_following_idToUsersInput | FollowsUpdateManyWithWhereWithoutUsers_Follows_following_idToUsersInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type Photo_LikesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Photo_LikesCreateWithoutUsersInput, Photo_LikesUncheckedCreateWithoutUsersInput> | Photo_LikesCreateWithoutUsersInput[] | Photo_LikesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Photo_LikesCreateOrConnectWithoutUsersInput | Photo_LikesCreateOrConnectWithoutUsersInput[]
    upsert?: Photo_LikesUpsertWithWhereUniqueWithoutUsersInput | Photo_LikesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Photo_LikesCreateManyUsersInputEnvelope
    set?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    disconnect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    delete?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    connect?: Photo_LikesWhereUniqueInput | Photo_LikesWhereUniqueInput[]
    update?: Photo_LikesUpdateWithWhereUniqueWithoutUsersInput | Photo_LikesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Photo_LikesUpdateManyWithWhereWithoutUsersInput | Photo_LikesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Photo_LikesScalarWhereInput | Photo_LikesScalarWhereInput[]
  }

  export type PhotosUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PhotosCreateWithoutUsersInput, PhotosUncheckedCreateWithoutUsersInput> | PhotosCreateWithoutUsersInput[] | PhotosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PhotosCreateOrConnectWithoutUsersInput | PhotosCreateOrConnectWithoutUsersInput[]
    upsert?: PhotosUpsertWithWhereUniqueWithoutUsersInput | PhotosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: PhotosCreateManyUsersInputEnvelope
    set?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    disconnect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    delete?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    connect?: PhotosWhereUniqueInput | PhotosWhereUniqueInput[]
    update?: PhotosUpdateWithWhereUniqueWithoutUsersInput | PhotosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PhotosUpdateManyWithWhereWithoutUsersInput | PhotosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PhotosScalarWhereInput | PhotosScalarWhereInput[]
  }

  export type User_SessionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<User_SessionsCreateWithoutUsersInput, User_SessionsUncheckedCreateWithoutUsersInput> | User_SessionsCreateWithoutUsersInput[] | User_SessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: User_SessionsCreateOrConnectWithoutUsersInput | User_SessionsCreateOrConnectWithoutUsersInput[]
    upsert?: User_SessionsUpsertWithWhereUniqueWithoutUsersInput | User_SessionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: User_SessionsCreateManyUsersInputEnvelope
    set?: User_SessionsWhereUniqueInput | User_SessionsWhereUniqueInput[]
    disconnect?: User_SessionsWhereUniqueInput | User_SessionsWhereUniqueInput[]
    delete?: User_SessionsWhereUniqueInput | User_SessionsWhereUniqueInput[]
    connect?: User_SessionsWhereUniqueInput | User_SessionsWhereUniqueInput[]
    update?: User_SessionsUpdateWithWhereUniqueWithoutUsersInput | User_SessionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: User_SessionsUpdateManyWithWhereWithoutUsersInput | User_SessionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: User_SessionsScalarWhereInput | User_SessionsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PhotosCreateWithoutCommentsInput = {
    title?: string | null
    description?: string | null
    image_url: string
    likes_count?: number | null
    comments_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Photo_Likes?: Photo_LikesCreateNestedManyWithoutPhotosInput
    Users: UsersCreateNestedOneWithoutPhotosInput
  }

  export type PhotosUncheckedCreateWithoutCommentsInput = {
    id?: number
    user_id: number
    title?: string | null
    description?: string | null
    image_url: string
    likes_count?: number | null
    comments_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Photo_Likes?: Photo_LikesUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type PhotosCreateOrConnectWithoutCommentsInput = {
    where: PhotosWhereUniqueInput
    create: XOR<PhotosCreateWithoutCommentsInput, PhotosUncheckedCreateWithoutCommentsInput>
  }

  export type UsersCreateWithoutCommentsInput = {
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Follows_Follows_follower_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Follows_Follows_following_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photo_Likes?: Photo_LikesCreateNestedManyWithoutUsersInput
    Photos?: PhotosCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Follows_Follows_follower_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photo_Likes?: Photo_LikesUncheckedCreateNestedManyWithoutUsersInput
    Photos?: PhotosUncheckedCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type PhotosUpsertWithoutCommentsInput = {
    update: XOR<PhotosUpdateWithoutCommentsInput, PhotosUncheckedUpdateWithoutCommentsInput>
    create: XOR<PhotosCreateWithoutCommentsInput, PhotosUncheckedCreateWithoutCommentsInput>
    where?: PhotosWhereInput
  }

  export type PhotosUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PhotosWhereInput
    data: XOR<PhotosUpdateWithoutCommentsInput, PhotosUncheckedUpdateWithoutCommentsInput>
  }

  export type PhotosUpdateWithoutCommentsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Photo_Likes?: Photo_LikesUpdateManyWithoutPhotosNestedInput
    Users?: UsersUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotosUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Photo_Likes?: Photo_LikesUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Follows_Follows_follower_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUpdateManyWithoutUsersNestedInput
    Photos?: PhotosUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Follows_Follows_follower_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUncheckedUpdateManyWithoutUsersNestedInput
    Photos?: PhotosUncheckedUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateWithoutFollows_Follows_follower_idToUsersInput = {
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Follows_Follows_following_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photo_Likes?: Photo_LikesCreateNestedManyWithoutUsersInput
    Photos?: PhotosCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutFollows_Follows_follower_idToUsersInput = {
    id?: number
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photo_Likes?: Photo_LikesUncheckedCreateNestedManyWithoutUsersInput
    Photos?: PhotosUncheckedCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutFollows_Follows_follower_idToUsersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFollows_Follows_follower_idToUsersInput, UsersUncheckedCreateWithoutFollows_Follows_follower_idToUsersInput>
  }

  export type UsersCreateWithoutFollows_Follows_following_idToUsersInput = {
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Follows_Follows_follower_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Photo_Likes?: Photo_LikesCreateNestedManyWithoutUsersInput
    Photos?: PhotosCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutFollows_Follows_following_idToUsersInput = {
    id?: number
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Follows_Follows_follower_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Photo_Likes?: Photo_LikesUncheckedCreateNestedManyWithoutUsersInput
    Photos?: PhotosUncheckedCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutFollows_Follows_following_idToUsersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFollows_Follows_following_idToUsersInput, UsersUncheckedCreateWithoutFollows_Follows_following_idToUsersInput>
  }

  export type UsersUpsertWithoutFollows_Follows_follower_idToUsersInput = {
    update: XOR<UsersUpdateWithoutFollows_Follows_follower_idToUsersInput, UsersUncheckedUpdateWithoutFollows_Follows_follower_idToUsersInput>
    create: XOR<UsersCreateWithoutFollows_Follows_follower_idToUsersInput, UsersUncheckedCreateWithoutFollows_Follows_follower_idToUsersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFollows_Follows_follower_idToUsersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFollows_Follows_follower_idToUsersInput, UsersUncheckedUpdateWithoutFollows_Follows_follower_idToUsersInput>
  }

  export type UsersUpdateWithoutFollows_Follows_follower_idToUsersInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUpdateManyWithoutUsersNestedInput
    Photos?: PhotosUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutFollows_Follows_follower_idToUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUncheckedUpdateManyWithoutUsersNestedInput
    Photos?: PhotosUncheckedUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersUpsertWithoutFollows_Follows_following_idToUsersInput = {
    update: XOR<UsersUpdateWithoutFollows_Follows_following_idToUsersInput, UsersUncheckedUpdateWithoutFollows_Follows_following_idToUsersInput>
    create: XOR<UsersCreateWithoutFollows_Follows_following_idToUsersInput, UsersUncheckedCreateWithoutFollows_Follows_following_idToUsersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFollows_Follows_following_idToUsersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFollows_Follows_following_idToUsersInput, UsersUncheckedUpdateWithoutFollows_Follows_following_idToUsersInput>
  }

  export type UsersUpdateWithoutFollows_Follows_following_idToUsersInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Follows_Follows_follower_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUpdateManyWithoutUsersNestedInput
    Photos?: PhotosUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutFollows_Follows_following_idToUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Follows_Follows_follower_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUncheckedUpdateManyWithoutUsersNestedInput
    Photos?: PhotosUncheckedUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type PhotosCreateWithoutPhoto_LikesInput = {
    title?: string | null
    description?: string | null
    image_url: string
    likes_count?: number | null
    comments_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutPhotosInput
    Users: UsersCreateNestedOneWithoutPhotosInput
  }

  export type PhotosUncheckedCreateWithoutPhoto_LikesInput = {
    id?: number
    user_id: number
    title?: string | null
    description?: string | null
    image_url: string
    likes_count?: number | null
    comments_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type PhotosCreateOrConnectWithoutPhoto_LikesInput = {
    where: PhotosWhereUniqueInput
    create: XOR<PhotosCreateWithoutPhoto_LikesInput, PhotosUncheckedCreateWithoutPhoto_LikesInput>
  }

  export type UsersCreateWithoutPhoto_LikesInput = {
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Follows_Follows_follower_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Follows_Follows_following_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photos?: PhotosCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutPhoto_LikesInput = {
    id?: number
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Follows_Follows_follower_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photos?: PhotosUncheckedCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutPhoto_LikesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPhoto_LikesInput, UsersUncheckedCreateWithoutPhoto_LikesInput>
  }

  export type PhotosUpsertWithoutPhoto_LikesInput = {
    update: XOR<PhotosUpdateWithoutPhoto_LikesInput, PhotosUncheckedUpdateWithoutPhoto_LikesInput>
    create: XOR<PhotosCreateWithoutPhoto_LikesInput, PhotosUncheckedCreateWithoutPhoto_LikesInput>
    where?: PhotosWhereInput
  }

  export type PhotosUpdateToOneWithWhereWithoutPhoto_LikesInput = {
    where?: PhotosWhereInput
    data: XOR<PhotosUpdateWithoutPhoto_LikesInput, PhotosUncheckedUpdateWithoutPhoto_LikesInput>
  }

  export type PhotosUpdateWithoutPhoto_LikesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutPhotosNestedInput
    Users?: UsersUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotosUncheckedUpdateWithoutPhoto_LikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type UsersUpsertWithoutPhoto_LikesInput = {
    update: XOR<UsersUpdateWithoutPhoto_LikesInput, UsersUncheckedUpdateWithoutPhoto_LikesInput>
    create: XOR<UsersCreateWithoutPhoto_LikesInput, UsersUncheckedCreateWithoutPhoto_LikesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPhoto_LikesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPhoto_LikesInput, UsersUncheckedUpdateWithoutPhoto_LikesInput>
  }

  export type UsersUpdateWithoutPhoto_LikesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Follows_Follows_follower_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photos?: PhotosUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutPhoto_LikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Follows_Follows_follower_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photos?: PhotosUncheckedUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CommentsCreateWithoutPhotosInput = {
    content: string
    created_at?: Date | string | null
    Users: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutPhotosInput = {
    id?: number
    user_id: number
    content: string
    created_at?: Date | string | null
  }

  export type CommentsCreateOrConnectWithoutPhotosInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutPhotosInput, CommentsUncheckedCreateWithoutPhotosInput>
  }

  export type CommentsCreateManyPhotosInputEnvelope = {
    data: CommentsCreateManyPhotosInput | CommentsCreateManyPhotosInput[]
    skipDuplicates?: boolean
  }

  export type Photo_LikesCreateWithoutPhotosInput = {
    created_at?: Date | string | null
    Users: UsersCreateNestedOneWithoutPhoto_LikesInput
  }

  export type Photo_LikesUncheckedCreateWithoutPhotosInput = {
    id?: number
    user_id: number
    created_at?: Date | string | null
  }

  export type Photo_LikesCreateOrConnectWithoutPhotosInput = {
    where: Photo_LikesWhereUniqueInput
    create: XOR<Photo_LikesCreateWithoutPhotosInput, Photo_LikesUncheckedCreateWithoutPhotosInput>
  }

  export type Photo_LikesCreateManyPhotosInputEnvelope = {
    data: Photo_LikesCreateManyPhotosInput | Photo_LikesCreateManyPhotosInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutPhotosInput = {
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Follows_Follows_follower_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Follows_Follows_following_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photo_Likes?: Photo_LikesCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutPhotosInput = {
    id?: number
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Follows_Follows_follower_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photo_Likes?: Photo_LikesUncheckedCreateNestedManyWithoutUsersInput
    User_Sessions?: User_SessionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutPhotosInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPhotosInput, UsersUncheckedCreateWithoutPhotosInput>
  }

  export type CommentsUpsertWithWhereUniqueWithoutPhotosInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutPhotosInput, CommentsUncheckedUpdateWithoutPhotosInput>
    create: XOR<CommentsCreateWithoutPhotosInput, CommentsUncheckedCreateWithoutPhotosInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutPhotosInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutPhotosInput, CommentsUncheckedUpdateWithoutPhotosInput>
  }

  export type CommentsUpdateManyWithWhereWithoutPhotosInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutPhotosInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: IntFilter<"Comments"> | number
    photo_id?: IntFilter<"Comments"> | number
    user_id?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    created_at?: DateTimeNullableFilter<"Comments"> | Date | string | null
  }

  export type Photo_LikesUpsertWithWhereUniqueWithoutPhotosInput = {
    where: Photo_LikesWhereUniqueInput
    update: XOR<Photo_LikesUpdateWithoutPhotosInput, Photo_LikesUncheckedUpdateWithoutPhotosInput>
    create: XOR<Photo_LikesCreateWithoutPhotosInput, Photo_LikesUncheckedCreateWithoutPhotosInput>
  }

  export type Photo_LikesUpdateWithWhereUniqueWithoutPhotosInput = {
    where: Photo_LikesWhereUniqueInput
    data: XOR<Photo_LikesUpdateWithoutPhotosInput, Photo_LikesUncheckedUpdateWithoutPhotosInput>
  }

  export type Photo_LikesUpdateManyWithWhereWithoutPhotosInput = {
    where: Photo_LikesScalarWhereInput
    data: XOR<Photo_LikesUpdateManyMutationInput, Photo_LikesUncheckedUpdateManyWithoutPhotosInput>
  }

  export type Photo_LikesScalarWhereInput = {
    AND?: Photo_LikesScalarWhereInput | Photo_LikesScalarWhereInput[]
    OR?: Photo_LikesScalarWhereInput[]
    NOT?: Photo_LikesScalarWhereInput | Photo_LikesScalarWhereInput[]
    id?: IntFilter<"Photo_Likes"> | number
    photo_id?: IntFilter<"Photo_Likes"> | number
    user_id?: IntFilter<"Photo_Likes"> | number
    created_at?: DateTimeNullableFilter<"Photo_Likes"> | Date | string | null
  }

  export type UsersUpsertWithoutPhotosInput = {
    update: XOR<UsersUpdateWithoutPhotosInput, UsersUncheckedUpdateWithoutPhotosInput>
    create: XOR<UsersCreateWithoutPhotosInput, UsersUncheckedCreateWithoutPhotosInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPhotosInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPhotosInput, UsersUncheckedUpdateWithoutPhotosInput>
  }

  export type UsersUpdateWithoutPhotosInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Follows_Follows_follower_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Follows_Follows_follower_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUncheckedUpdateManyWithoutUsersNestedInput
    User_Sessions?: User_SessionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateWithoutUser_SessionsInput = {
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Follows_Follows_follower_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Follows_Follows_following_idToUsers?: FollowsCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photo_Likes?: Photo_LikesCreateNestedManyWithoutUsersInput
    Photos?: PhotosCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUser_SessionsInput = {
    id?: number
    email: string
    username: string
    password: string
    full_name?: string | null
    avatar?: string | null
    bio?: string | null
    is_admin?: boolean | null
    followers_count?: number | null
    following_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Follows_Follows_follower_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_follower_idToUsersInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedCreateNestedManyWithoutUsers_Follows_following_idToUsersInput
    Photo_Likes?: Photo_LikesUncheckedCreateNestedManyWithoutUsersInput
    Photos?: PhotosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutUser_SessionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUser_SessionsInput, UsersUncheckedCreateWithoutUser_SessionsInput>
  }

  export type UsersUpsertWithoutUser_SessionsInput = {
    update: XOR<UsersUpdateWithoutUser_SessionsInput, UsersUncheckedUpdateWithoutUser_SessionsInput>
    create: XOR<UsersCreateWithoutUser_SessionsInput, UsersUncheckedCreateWithoutUser_SessionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUser_SessionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUser_SessionsInput, UsersUncheckedUpdateWithoutUser_SessionsInput>
  }

  export type UsersUpdateWithoutUser_SessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Follows_Follows_follower_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUpdateManyWithoutUsersNestedInput
    Photos?: PhotosUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUser_SessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Follows_Follows_follower_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_follower_idToUsersNestedInput
    Follows_Follows_following_idToUsers?: FollowsUncheckedUpdateManyWithoutUsers_Follows_following_idToUsersNestedInput
    Photo_Likes?: Photo_LikesUncheckedUpdateManyWithoutUsersNestedInput
    Photos?: PhotosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type CommentsCreateWithoutUsersInput = {
    content: string
    created_at?: Date | string | null
    Photos: PhotosCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutUsersInput = {
    id?: number
    photo_id: number
    content: string
    created_at?: Date | string | null
  }

  export type CommentsCreateOrConnectWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput>
  }

  export type CommentsCreateManyUsersInputEnvelope = {
    data: CommentsCreateManyUsersInput | CommentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type FollowsCreateWithoutUsers_Follows_follower_idToUsersInput = {
    created_at?: Date | string | null
    Users_Follows_following_idToUsers: UsersCreateNestedOneWithoutFollows_Follows_following_idToUsersInput
  }

  export type FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput = {
    id?: number
    following_id: number
    created_at?: Date | string | null
  }

  export type FollowsCreateOrConnectWithoutUsers_Follows_follower_idToUsersInput = {
    where: FollowsWhereUniqueInput
    create: XOR<FollowsCreateWithoutUsers_Follows_follower_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput>
  }

  export type FollowsCreateManyUsers_Follows_follower_idToUsersInputEnvelope = {
    data: FollowsCreateManyUsers_Follows_follower_idToUsersInput | FollowsCreateManyUsers_Follows_follower_idToUsersInput[]
    skipDuplicates?: boolean
  }

  export type FollowsCreateWithoutUsers_Follows_following_idToUsersInput = {
    created_at?: Date | string | null
    Users_Follows_follower_idToUsers: UsersCreateNestedOneWithoutFollows_Follows_follower_idToUsersInput
  }

  export type FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput = {
    id?: number
    follower_id: number
    created_at?: Date | string | null
  }

  export type FollowsCreateOrConnectWithoutUsers_Follows_following_idToUsersInput = {
    where: FollowsWhereUniqueInput
    create: XOR<FollowsCreateWithoutUsers_Follows_following_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput>
  }

  export type FollowsCreateManyUsers_Follows_following_idToUsersInputEnvelope = {
    data: FollowsCreateManyUsers_Follows_following_idToUsersInput | FollowsCreateManyUsers_Follows_following_idToUsersInput[]
    skipDuplicates?: boolean
  }

  export type Photo_LikesCreateWithoutUsersInput = {
    created_at?: Date | string | null
    Photos: PhotosCreateNestedOneWithoutPhoto_LikesInput
  }

  export type Photo_LikesUncheckedCreateWithoutUsersInput = {
    id?: number
    photo_id: number
    created_at?: Date | string | null
  }

  export type Photo_LikesCreateOrConnectWithoutUsersInput = {
    where: Photo_LikesWhereUniqueInput
    create: XOR<Photo_LikesCreateWithoutUsersInput, Photo_LikesUncheckedCreateWithoutUsersInput>
  }

  export type Photo_LikesCreateManyUsersInputEnvelope = {
    data: Photo_LikesCreateManyUsersInput | Photo_LikesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type PhotosCreateWithoutUsersInput = {
    title?: string | null
    description?: string | null
    image_url: string
    likes_count?: number | null
    comments_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsCreateNestedManyWithoutPhotosInput
    Photo_Likes?: Photo_LikesCreateNestedManyWithoutPhotosInput
  }

  export type PhotosUncheckedCreateWithoutUsersInput = {
    id?: number
    title?: string | null
    description?: string | null
    image_url: string
    likes_count?: number | null
    comments_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Comments?: CommentsUncheckedCreateNestedManyWithoutPhotosInput
    Photo_Likes?: Photo_LikesUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type PhotosCreateOrConnectWithoutUsersInput = {
    where: PhotosWhereUniqueInput
    create: XOR<PhotosCreateWithoutUsersInput, PhotosUncheckedCreateWithoutUsersInput>
  }

  export type PhotosCreateManyUsersInputEnvelope = {
    data: PhotosCreateManyUsersInput | PhotosCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type User_SessionsCreateWithoutUsersInput = {
    refresh_token: string
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type User_SessionsUncheckedCreateWithoutUsersInput = {
    id?: number
    refresh_token: string
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type User_SessionsCreateOrConnectWithoutUsersInput = {
    where: User_SessionsWhereUniqueInput
    create: XOR<User_SessionsCreateWithoutUsersInput, User_SessionsUncheckedCreateWithoutUsersInput>
  }

  export type User_SessionsCreateManyUsersInputEnvelope = {
    data: User_SessionsCreateManyUsersInput | User_SessionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUsersInput, CommentsUncheckedUpdateWithoutUsersInput>
    create: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUsersInput, CommentsUncheckedUpdateWithoutUsersInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUsersInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type FollowsUpsertWithWhereUniqueWithoutUsers_Follows_follower_idToUsersInput = {
    where: FollowsWhereUniqueInput
    update: XOR<FollowsUpdateWithoutUsers_Follows_follower_idToUsersInput, FollowsUncheckedUpdateWithoutUsers_Follows_follower_idToUsersInput>
    create: XOR<FollowsCreateWithoutUsers_Follows_follower_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_follower_idToUsersInput>
  }

  export type FollowsUpdateWithWhereUniqueWithoutUsers_Follows_follower_idToUsersInput = {
    where: FollowsWhereUniqueInput
    data: XOR<FollowsUpdateWithoutUsers_Follows_follower_idToUsersInput, FollowsUncheckedUpdateWithoutUsers_Follows_follower_idToUsersInput>
  }

  export type FollowsUpdateManyWithWhereWithoutUsers_Follows_follower_idToUsersInput = {
    where: FollowsScalarWhereInput
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyWithoutUsers_Follows_follower_idToUsersInput>
  }

  export type FollowsScalarWhereInput = {
    AND?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
    OR?: FollowsScalarWhereInput[]
    NOT?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
    id?: IntFilter<"Follows"> | number
    follower_id?: IntFilter<"Follows"> | number
    following_id?: IntFilter<"Follows"> | number
    created_at?: DateTimeNullableFilter<"Follows"> | Date | string | null
  }

  export type FollowsUpsertWithWhereUniqueWithoutUsers_Follows_following_idToUsersInput = {
    where: FollowsWhereUniqueInput
    update: XOR<FollowsUpdateWithoutUsers_Follows_following_idToUsersInput, FollowsUncheckedUpdateWithoutUsers_Follows_following_idToUsersInput>
    create: XOR<FollowsCreateWithoutUsers_Follows_following_idToUsersInput, FollowsUncheckedCreateWithoutUsers_Follows_following_idToUsersInput>
  }

  export type FollowsUpdateWithWhereUniqueWithoutUsers_Follows_following_idToUsersInput = {
    where: FollowsWhereUniqueInput
    data: XOR<FollowsUpdateWithoutUsers_Follows_following_idToUsersInput, FollowsUncheckedUpdateWithoutUsers_Follows_following_idToUsersInput>
  }

  export type FollowsUpdateManyWithWhereWithoutUsers_Follows_following_idToUsersInput = {
    where: FollowsScalarWhereInput
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyWithoutUsers_Follows_following_idToUsersInput>
  }

  export type Photo_LikesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Photo_LikesWhereUniqueInput
    update: XOR<Photo_LikesUpdateWithoutUsersInput, Photo_LikesUncheckedUpdateWithoutUsersInput>
    create: XOR<Photo_LikesCreateWithoutUsersInput, Photo_LikesUncheckedCreateWithoutUsersInput>
  }

  export type Photo_LikesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Photo_LikesWhereUniqueInput
    data: XOR<Photo_LikesUpdateWithoutUsersInput, Photo_LikesUncheckedUpdateWithoutUsersInput>
  }

  export type Photo_LikesUpdateManyWithWhereWithoutUsersInput = {
    where: Photo_LikesScalarWhereInput
    data: XOR<Photo_LikesUpdateManyMutationInput, Photo_LikesUncheckedUpdateManyWithoutUsersInput>
  }

  export type PhotosUpsertWithWhereUniqueWithoutUsersInput = {
    where: PhotosWhereUniqueInput
    update: XOR<PhotosUpdateWithoutUsersInput, PhotosUncheckedUpdateWithoutUsersInput>
    create: XOR<PhotosCreateWithoutUsersInput, PhotosUncheckedCreateWithoutUsersInput>
  }

  export type PhotosUpdateWithWhereUniqueWithoutUsersInput = {
    where: PhotosWhereUniqueInput
    data: XOR<PhotosUpdateWithoutUsersInput, PhotosUncheckedUpdateWithoutUsersInput>
  }

  export type PhotosUpdateManyWithWhereWithoutUsersInput = {
    where: PhotosScalarWhereInput
    data: XOR<PhotosUpdateManyMutationInput, PhotosUncheckedUpdateManyWithoutUsersInput>
  }

  export type PhotosScalarWhereInput = {
    AND?: PhotosScalarWhereInput | PhotosScalarWhereInput[]
    OR?: PhotosScalarWhereInput[]
    NOT?: PhotosScalarWhereInput | PhotosScalarWhereInput[]
    id?: IntFilter<"Photos"> | number
    user_id?: IntFilter<"Photos"> | number
    title?: StringNullableFilter<"Photos"> | string | null
    description?: StringNullableFilter<"Photos"> | string | null
    image_url?: StringFilter<"Photos"> | string
    likes_count?: IntNullableFilter<"Photos"> | number | null
    comments_count?: IntNullableFilter<"Photos"> | number | null
    created_at?: DateTimeNullableFilter<"Photos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Photos"> | Date | string | null
  }

  export type User_SessionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: User_SessionsWhereUniqueInput
    update: XOR<User_SessionsUpdateWithoutUsersInput, User_SessionsUncheckedUpdateWithoutUsersInput>
    create: XOR<User_SessionsCreateWithoutUsersInput, User_SessionsUncheckedCreateWithoutUsersInput>
  }

  export type User_SessionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: User_SessionsWhereUniqueInput
    data: XOR<User_SessionsUpdateWithoutUsersInput, User_SessionsUncheckedUpdateWithoutUsersInput>
  }

  export type User_SessionsUpdateManyWithWhereWithoutUsersInput = {
    where: User_SessionsScalarWhereInput
    data: XOR<User_SessionsUpdateManyMutationInput, User_SessionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type User_SessionsScalarWhereInput = {
    AND?: User_SessionsScalarWhereInput | User_SessionsScalarWhereInput[]
    OR?: User_SessionsScalarWhereInput[]
    NOT?: User_SessionsScalarWhereInput | User_SessionsScalarWhereInput[]
    id?: IntFilter<"User_Sessions"> | number
    user_id?: IntFilter<"User_Sessions"> | number
    refresh_token?: StringFilter<"User_Sessions"> | string
    expires_at?: DateTimeFilter<"User_Sessions"> | Date | string
    created_at?: DateTimeNullableFilter<"User_Sessions"> | Date | string | null
  }

  export type CommentsCreateManyPhotosInput = {
    id?: number
    user_id: number
    content: string
    created_at?: Date | string | null
  }

  export type Photo_LikesCreateManyPhotosInput = {
    id?: number
    user_id: number
    created_at?: Date | string | null
  }

  export type CommentsUpdateWithoutPhotosInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateManyWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Photo_LikesUpdateWithoutPhotosInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUpdateOneRequiredWithoutPhoto_LikesNestedInput
  }

  export type Photo_LikesUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Photo_LikesUncheckedUpdateManyWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsCreateManyUsersInput = {
    id?: number
    photo_id: number
    content: string
    created_at?: Date | string | null
  }

  export type FollowsCreateManyUsers_Follows_follower_idToUsersInput = {
    id?: number
    following_id: number
    created_at?: Date | string | null
  }

  export type FollowsCreateManyUsers_Follows_following_idToUsersInput = {
    id?: number
    follower_id: number
    created_at?: Date | string | null
  }

  export type Photo_LikesCreateManyUsersInput = {
    id?: number
    photo_id: number
    created_at?: Date | string | null
  }

  export type PhotosCreateManyUsersInput = {
    id?: number
    title?: string | null
    description?: string | null
    image_url: string
    likes_count?: number | null
    comments_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type User_SessionsCreateManyUsersInput = {
    id?: number
    refresh_token: string
    expires_at: Date | string
    created_at?: Date | string | null
  }

  export type CommentsUpdateWithoutUsersInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Photos?: PhotosUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowsUpdateWithoutUsers_Follows_follower_idToUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users_Follows_following_idToUsers?: UsersUpdateOneRequiredWithoutFollows_Follows_following_idToUsersNestedInput
  }

  export type FollowsUncheckedUpdateWithoutUsers_Follows_follower_idToUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    following_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowsUncheckedUpdateManyWithoutUsers_Follows_follower_idToUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    following_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowsUpdateWithoutUsers_Follows_following_idToUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users_Follows_follower_idToUsers?: UsersUpdateOneRequiredWithoutFollows_Follows_follower_idToUsersNestedInput
  }

  export type FollowsUncheckedUpdateWithoutUsers_Follows_following_idToUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowsUncheckedUpdateManyWithoutUsers_Follows_following_idToUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Photo_LikesUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Photos?: PhotosUpdateOneRequiredWithoutPhoto_LikesNestedInput
  }

  export type Photo_LikesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Photo_LikesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhotosUpdateWithoutUsersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUpdateManyWithoutPhotosNestedInput
    Photo_Likes?: Photo_LikesUpdateManyWithoutPhotosNestedInput
  }

  export type PhotosUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Comments?: CommentsUncheckedUpdateManyWithoutPhotosNestedInput
    Photo_Likes?: Photo_LikesUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type PhotosUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    likes_count?: NullableIntFieldUpdateOperationsInput | number | null
    comments_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User_SessionsUpdateWithoutUsersInput = {
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User_SessionsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User_SessionsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}