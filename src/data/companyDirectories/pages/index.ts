/**
 * Aggregates every directory page input. One file per page lives at
 * `./{entity}/{country}.ts` and exports a `DirectoryPageInput`; each wave adds
 * its imports here. Order does not matter — the registry sorts by path.
 */
import type { DirectoryPageInput } from '../types';

// Wave 1 — MENA healthcare gaps: pharmaceutical distributors
import { pharmaceuticalDistributorsSaudiArabia } from './pharmaceutical-distributors/saudi-arabia';
import { pharmaceuticalDistributorsUae } from './pharmaceutical-distributors/uae';
import { pharmaceuticalDistributorsEgypt } from './pharmaceutical-distributors/egypt';
import { pharmaceuticalDistributorsKuwait } from './pharmaceutical-distributors/kuwait';
import { pharmaceuticalDistributorsQatar } from './pharmaceutical-distributors/qatar';
import { pharmaceuticalDistributorsOman } from './pharmaceutical-distributors/oman';
import { pharmaceuticalDistributorsBahrain } from './pharmaceutical-distributors/bahrain';
import { pharmaceuticalDistributorsIraq } from './pharmaceutical-distributors/iraq';
import { pharmaceuticalDistributorsJordan } from './pharmaceutical-distributors/jordan';
import { pharmaceuticalDistributorsMorocco } from './pharmaceutical-distributors/morocco';
import { pharmaceuticalDistributorsTurkey } from './pharmaceutical-distributors/turkey';
import { pharmaceuticalDistributorsPakistan } from './pharmaceutical-distributors/pakistan';

export const DIRECTORY_PAGE_INPUTS: DirectoryPageInput[] = [
  pharmaceuticalDistributorsSaudiArabia,
  pharmaceuticalDistributorsUae,
  pharmaceuticalDistributorsEgypt,
  pharmaceuticalDistributorsKuwait,
  pharmaceuticalDistributorsQatar,
  pharmaceuticalDistributorsOman,
  pharmaceuticalDistributorsBahrain,
  pharmaceuticalDistributorsIraq,
  pharmaceuticalDistributorsJordan,
  pharmaceuticalDistributorsMorocco,
  pharmaceuticalDistributorsTurkey,
  pharmaceuticalDistributorsPakistan,
];
