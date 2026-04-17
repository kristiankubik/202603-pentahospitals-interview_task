# 202603 - backend SWE

## PentaHospitals – zadanie

### Všeobecné informácie

Predstav si, že dostávaš nižšie uvedené zadania ako tickety v nástroji na projektové riadenie, pričom máš na starosti návrh a implementáciu backendu (endpointy, biznis logiku, databázové tabuľky a pod.). Tvojou úlohou je vypracovať riešenie, ktoré splní všetky funkčné požiadavky z pohľadu backendu. Ak ti čas neumožní plnú implementáciu, môžeš niektoré časti popísať textovo (napr. v komentároch v kóde alebo v samostatnom dokumente). Očakávame však aspoň čiastočnú implementáciu.

Otázky k nefunkčným požiadavkám (napr. zabezpečenie endpointov) sa môžu objaviť počas technického kola, no ich implementácia nie je nevyhnutná. Naším cieľom je overiť, či ovládaš základné princípy backendového vývoja v NestJS a dokážeš ich aplikovať.

Výstupom má byť verejný GitHub repozitár.

### Úvod

Súkromná nemocnica otvára pôrodnícke oddelenie a potrebuje systém, ktorý umožní klientom rezervovať si termíny pôrodu.

#### Úloha 1: Publikovanie dostupných termínov na najbližší mesiac

Ako administrátor chcem hromadne zverejniť všetky sloty na najbližší mesiac, aby sa budúce mamičky mohli prihlásiť na pôrod.

- Rezervácie sa otvárajú raz mesačne v konkrétny deň a čas, v tomto termíne sa zverejnia sloty na vybrané dni.
- Počet slotov v konkrétny deň určuje maximálny počet ľudí, ktorí si v danom dni môžu úspešne rezervovať termín (1 slot = 1 osoba).
- Počet slotov na každý deň je konfigurovateľný podľa obchodných požiadaviek.

Príklad:

-   6.  3. 2025 – 6 slotov (maximálne sa môže zarezervovať 6 osôb)
-   7.  3. 2025 – 5 slotov
-   8.  3. 2025 – 9 slotov

#### Úloha 2: Rezervovanie termínu

Ako budúca mamička sa chcem prihlásiť na termín pôrodu cez rezervačný formulár.

- Rezervačný formulár obsahuje:
- Meno a priezvisko
- Telefónne číslo
- Email
- Dátum pôrodu z tehotenskej knižky
- Systém musí zadané údaje uložiť.
- Systém musí skontrolovať, či je k dispozícii voľný slot v zadanom dátume pôrodu.
- Ak nie je voľný slot v danom dátume, automaticky sa hľadajú voľné sloty v rozmedzí ±2 dni (konkrétne v poradí: dátum pôrodu, -1 deň, +1 deň, -2 dni, +2 dni).
- Ak sa nájde voľný termín, vytvorí a uloží sa rezervácia; inak sa rezervácia zamietne.
