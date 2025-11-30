import { describe, it, expectTypeOf } from 'vitest';

// 1. Importera dina MANUELLA typer
// (Baserat på filen du laddade upp)
import type { 
  ConfigResponse, 
  // Antar att du exporterar en typ som heter Dataset eller liknande från types.ts
  // Om den heter något annat, ändra här (t.ex. DatasetResponse)
  Dataset 
} from '../../src/types';

// 2. Importera de GENERERADE typerna (från skriptet ovan)
import type { components } from '../../src/types/generated/scb-schema';

// 3. Mappa namnen från OpenAPI-specen
// PxAPI-2.yml använder oftast dessa namn
type GenConfig = components['schemas']['ConfigResponse'];
type GenDataset = components['schemas']['Dataset'];

describe('SCB API Contract Safety', () => {
  
  it('ConfigResponse should match OpenAPI spec', () => {
    // Verifierar att din manuella ConfigResponse är kompatibel med specen
    expectTypeOf<GenConfig>().toMatchTypeOf<Partial<ConfigResponse>>();
  });

  it('Dataset structure should match OpenAPI spec', () => {
    expectTypeOf<GenDataset>().toMatchTypeOf<Partial<Dataset>>();
  });

  // Om du har fler typer i src/types.ts, lägg till tester här
});
