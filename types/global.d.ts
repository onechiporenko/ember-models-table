import type EmberArray from '@ember/array';
import type { EmbroiderUtilRegistry } from '@embroider/util';
import { HelperLike } from '@glint/template';

import { FilterByHelper } from '../override-types/ember-composable-helpers/filter-by';
import { ObjectAtHelper } from '../override-types/ember-composable-helpers/object-at';

type AnyFunction = (...args: never[]) => unknown;
type AnyObject = Record<string, unknown>;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends EmbroiderUtilRegistry {
    and: HelperLike<{
      Args: { Positional: boolean[] };
      Return: boolean;
    }>;

    eq: HelperLike<{
      Args: {
        Positional: [unknown, unknown];
      };
      Return: boolean;
    }>;

    gt: HelperLike<{
      Args: {
        Positional: [unknown, unknown];
        Named: {
          forceNumber?: boolean;
        };
      };
      Return: boolean;
    }>;

    gte: HelperLike<{
      Args: {
        Positional: [unknown, unknown];
        Named: {
          forceNumber?: boolean;
        };
      };
      Return: boolean;
    }>;

    'is-array': HelperLike<{
      Args: {
        Positional: unknown[] | EmberArray<unknown>;
      };
      Return: boolean;
    }>;

    'is-empty': HelperLike<{
      Args: {
        Positional: [unknown];
      };
      Return: boolean;
    }>;

    'is-equal': HelperLike<{
      Args: {
        Positional: [unknown, unknown];
      };
      Return: boolean;
    }>;

    lt: HelperLike<{
      Args: {
        Positional: [unknown, unknown];
        Named: {
          forceNumber?: boolean;
        };
      };
      Return: boolean;
    }>;

    lte: HelperLike<{
      Args: {
        Positional: [unknown, unknown];
        Named: {
          forceNumber?: boolean;
        };
      };
      Return: boolean;
    }>;

    'not-eq': HelperLike<{
      Args: {
        Positional: [unknown, unknown];
      };
      Return: boolean;
    }>;

    not: HelperLike<{
      Args: {
        Positional: boolean[];
      };
      Return: boolean;
    }>;

    or: HelperLike<{
      Args: {
        Positional: boolean[];
      };
      Return: boolean;
    }>;

    xor: HelperLike<{
      Args: {
        Positional: [unknown, unknown];
      };
      Return: boolean;
    }>;

    intersect: HelperLike<{
      Args: { Positional: [array1: Array<unknown>, array2: unknown[]] };
      Return: Array<unknown> | undefined;
    }>;
    'filter-by': typeof FilterByHelper;
    'object-at': typeof ObjectAtHelper;
    'map-by': HelperLike<{
      Args: { Positional: [byPath: string, array: unknown[]] };
      Return: unknown;
    }>;
    inc: HelperLike<{
      Args: { Positional: [stepOrVal: number, val?: number] };
      Return: number;
    }>;
    includes: HelperLike<{
      Args: {
        Positional: [
          needleOrNeedles: unknown | Array<unknown>,
          haystack: Array<unknown> | undefined,
        ];
      };
      Return: boolean;
    }>;
    keys: HelperLike<{
      Args: { Positional: [obj: AnyObject] };
      Return: Array<string | number | symbol>;
    }>;

    'html-safe': HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
  }
}
